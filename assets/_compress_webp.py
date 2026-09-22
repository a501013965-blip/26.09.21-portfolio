# -*- coding: utf-8 -*-
"""一次性脚本：把被引用的大图转 WebP 压缩（保留透明通道），并替换 HTML/JS 中的引用。"""
from PIL import Image
import os, re, glob

os.chdir('D:/27秋招/27秋招/portfolio')

# 1. 所有 HTML/JS/CSS 中实际引用的资源
refs = set()
for f in glob.glob('*.html') + ['editorial.js', 'script.js', 'styles.css']:
    if not os.path.exists(f):
        continue
    with open(f, encoding='utf-8') as fh:
        refs.update(re.findall(r'assets/([A-Za-z0-9_-]+\.(?:png|jpe?g))', fh.read()))
print('被引用:', len(refs), '个')

THRESHOLD = 150 * 1024
MAXSIDE = 1800
converted = {}  # old -> new

for name in sorted(refs):
    p = 'assets/' + name
    if not os.path.exists(p):
        print('!! 引用但不存在:', p); continue
    kb = os.path.getsize(p)
    if kb < THRESHOLD:
        continue  # 小图不动
    im = Image.open(p)
    has_alpha = im.mode in ('RGBA', 'LA', 'PA')
    # 缩尺寸
    m = max(im.width, im.height)
    if m > MAXSIDE:
        r = MAXSIDE / m
        im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
    base = os.path.splitext(name)[0]
    out = 'assets/' + base + '.webp'
    if has_alpha:
        im = im.convert('RGBA')
        im.save(out, 'WEBP', quality=85, method=6)
    else:
        im = im.convert('RGB')
        im.save(out, 'WEBP', quality=82, method=6)
    converted[name] = base + '.webp'
    print(f'{name:24s} {kb//1024:5d}KB -> {os.path.getsize(out)//1024:5d}KB  alpha={has_alpha}')

# 2. 替换引用
for f in glob.glob('*.html') + ['editorial.js', 'script.js', 'styles.css']:
    if not os.path.exists(f):
        continue
    with open(f, encoding='utf-8') as fh:
        s = fh.read()
    orig = s
    for old, new in converted.items():
        s = s.replace('assets/' + old, 'assets/' + new)
    if s != orig:
        with open(f, 'w', encoding='utf-8', newline='') as fh:
            fh.write(s)
        print('引用已更新:', f)

# 3. 校验：所有引用的文件都存在
missing = []
for f in glob.glob('*.html') + ['editorial.js', 'script.js', 'styles.css']:
    if not os.path.exists(f):
        continue
    with open(f, encoding='utf-8') as fh:
        for m2 in re.findall(r'assets/([A-Za-z0-9_-]+\.(?:png|jpe?g|webp))', fh.read()):
            if not os.path.exists('assets/' + m2):
                missing.append(f + ' -> ' + m2)
print('缺失引用:', missing if missing else '无')
