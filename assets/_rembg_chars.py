# -*- coding: utf-8 -*-
# rembg isnet-anime 精抠两张实习角色立绘（模型存 D 盘）
import os, sys
os.environ["U2NET_HOME"] = r"D:\27秋招\.workbuddy\u2net"
from rembg import remove, new_session
from PIL import Image
import numpy as np

session = new_session("isnet-anime")
JOBS = [
    (r"C:\Users\GUOKAIXUAN0623#\.workbuddy\clipboard-images\clipboard-2026-09-21T10-06-58-654Z-29d8bee1.jpg",
     r"D:\27秋招\27秋招\portfolio\assets\char-game.png"),
    (r"C:\Users\GUOKAIXUAN0623#\.workbuddy\clipboard-images\clipboard-2026-09-21T10-06-58-658Z-f674bbe6.jpg",
     r"D:\27秋招\27秋招\portfolio\assets\char-manga.png"),
]
for src, dst in JOBS:
    im = Image.open(src).convert("RGBA")
    out = remove(im, session=session, alpha_matting=False)
    arr = np.array(out)
    ys, xs = np.where(arr[:, :, 3] > 8)
    pad = 8
    out = out.crop((max(xs.min()-pad, 0), max(ys.min()-pad, 0),
                    min(xs.max()+pad+1, out.width), min(ys.max()+pad+1, out.height)))
    out.save(dst)
    print("saved", dst, out.size)
