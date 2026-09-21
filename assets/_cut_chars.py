# -*- coding: utf-8 -*-
# 两张实习角色立绘抠图：边缘感知泛洪 + 主成分保留 + 羽化去光晕
import numpy as np
from PIL import Image, ImageFilter
from collections import deque
import sys, os

SRC = [
    (r"C:\Users\GUOKAIXUAN0623#\.workbuddy\clipboard-images\clipboard-2026-09-21T10-06-58-654Z-29d8bee1.jpg",
     r"D:\27秋招\27秋招\portfolio\assets\char-game.png"),   # 哈米·休闲游戏
    (r"C:\Users\GUOKAIXUAN0623#\.workbuddy\clipboard-images\clipboard-2026-09-21T10-06-58-658Z-f674bbe6.jpg",
     r"D:\27秋招\27秋招\portfolio\assets\char-manga.png"),  # 快看·漫画平台
]

def bg_seeds(arr):
    """四条边颜色聚类，只保留占比较高的种子（排除压到边框的人物色）"""
    h, w, _ = arr.shape
    border = np.concatenate([
        arr[0, :, :3], arr[-1, :, :3], arr[:, 0, :3], arr[:, -1, :3]
    ]).astype(np.int32)
    clusters = []  # (sum, count)
    for c in border:
        for i, s in enumerate(clusters):
            if np.abs(c - s[0] / s[1]).sum() < 45:
                clusters[i] = (s[0] + c, s[1] + 1)
                break
        else:
            clusters.append((c.copy().astype(np.int64), 1))
    total = len(border)
    seeds = [s[0] / s[1] for s in clusters
             if s[1] / total > 0.06 and float(np.mean(s[0] / s[1])) > 170]
    return np.array(seeds, dtype=np.int32)

def dist_to_seeds(px, seeds):
    return np.abs(seeds - px).sum(axis=1).min()

def flood_bg(arr, seeds, tol, gtol):
    """边缘感知泛洪：与任一种子色近 AND 与来路像素色差小（防越过强边缘泄漏）"""
    h, w, _ = arr.shape
    rgb = arr[:, :, :3].astype(np.int32)
    near = np.min(np.abs(rgb[:, :, None, :] - seeds[None, None, :, :]).sum(axis=3), axis=2) <= tol
    visited = np.zeros((h, w), dtype=bool)
    dq = deque()
    for y in range(h):
        for x in (0, w - 1):
            if near[y, x] and not visited[y, x]:
                visited[y, x] = True; dq.append((y, x))
    for x in range(w):
        for y in (0, h - 1):
            if near[y, x] and not visited[y, x]:
                visited[y, x] = True; dq.append((y, x))
    while dq:
        y, x = dq.popleft()
        c = rgb[y, x]
        for ny, nx in ((y-1,x),(y+1,x),(y,x-1),(y,x+1)):
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and near[ny, nx]:
                if np.abs(rgb[ny, nx] - c).sum() <= gtol:
                    visited[ny, nx] = True; dq.append((ny, nx))
    return visited

def largest_component(mask):
    h, w = mask.shape
    label = np.zeros((h, w), dtype=np.int32)
    cur = 0; best, bestsz = 0, 0
    for y in range(h):
        for x in range(w):
            if mask[y, x] and label[y, x] == 0:
                cur += 1; sz = 0
                dq = deque([(y, x)]); label[y, x] = cur
                while dq:
                    cy, cx = dq.popleft(); sz += 1
                    for ny, nx in ((cy-1,cx),(cy+1,cx),(cy,cx-1),(cy,cx+1)):
                        if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and label[ny, nx] == 0:
                            label[ny, nx] = cur; dq.append((ny, nx))
                if sz > bestsz: bestsz, best = sz, cur
    return label == best

def process(src, dst, tol, gtol):
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    seeds = bg_seeds(arr)
    print(os.path.basename(src), "seeds:", seeds.tolist())
    bg = flood_bg(arr, seeds, tol, gtol)
    keep = largest_component(~bg)
    out = arr.copy()
    out[:, :, 3] = np.where(keep, 255, 0).astype(np.uint8)
    # 收 1px 边 + 羽化，去米色光晕
    a = Image.fromarray(out[:, :, 3], "L")
    er = a.filter(ImageFilter.MinFilter(3))
    soft = er.filter(ImageFilter.GaussianBlur(1.2))
    out[:, :, 3] = np.array(soft)
    res = Image.fromarray(out)
    alpha = np.array(res)[:, :, 3]
    ys, xs = np.where(alpha > 8)
    res = res.crop((max(xs.min()-8, 0), max(ys.min()-8, 0),
                    min(xs.max()+9, res.width), min(ys.max()+9, res.height)))
    res.save(dst)
    print("saved", dst, res.size)

if __name__ == "__main__":
    process(*SRC[0], tol=90, gtol=48)
    process(*SRC[1], tol=90, gtol=48)
