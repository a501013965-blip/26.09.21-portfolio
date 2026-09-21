郭凯轩 · 作品集网站
====================

## 文件结构
```
portfolio/
├── index.html          主页
├── case-kuaikan.html   快看 Case Study（含漏斗图、归因逻辑、三步行动）
├── gdd-pinata.html     系统设计文档 ① · 连胜挑战活动
├── gdd-sheepdash.html  系统设计文档 ② · 核心玩法/数值
├── sycosense.html      硕士研究项目 · SycoSense（含三阶段对话演示）
├── workflow.html       AI 工作流人设页
├── styles.css          共享样式（Editorial 设计系统）
├── script.js           共享交互（滚动显现/计数动画/进度条/对话播放器/打印）
├── assets/             全部图片素材
└── resume/             三份去游戏化简历 PDF
```

## 本地打开
直接双击 `index.html` 即可使用（无网络依赖、无构建步骤）。

## 部署到网上（可选）
三种方式任选其一：

### 方式 1：GitHub Pages
1. 在 GitHub 创建新仓库，上传 `portfolio/` 内全部内容（保持目录结构）
2. Settings → Pages → Source 选 main 分支根目录
3. 几分钟后会得到 `https://用户名.github.io/仓库名/`

### 方式 2：Netlify Drop
1. 打开 https://app.netlify.com/drop
2. 拖入整个 `portfolio/` 文件夹
3. 立即得到一个公开 URL

### 方式 3：本地起服务（用于邮件签名里的预览）
```bash
cd portfolio
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 打印/分享
- 每篇 GDD 与 Case Study 页面右下角有"导出 PDF"按钮，点击调用浏览器打印
  → 在打印对话框选"另存为 PDF"，排版已针对 A4 优化
- 也可以整站打包发 HR：
  ```bash
  # macOS
  zip -r 郭凯轩-作品集.zip portfolio/
  # Windows (PowerShell)
  Compress-Archive -Path portfolio -DestinationPath 郭凯轩-作品集.zip
  ```

## 更新内容
- 换简历：把新 PDF 放进 `resume/` 同名覆盖
- 换照片：替换 `assets/portrait.png`
- 改文案：直接编辑 HTML，每页文案独立，共享样式不用动

## 设计原则
- 完全 Editorial 编辑风（无 emoji、无大渐变、无大圆角）
- 多页面静态站（离线可用，HR 双击即开）
- 每页都有下载简历入口
- "去游戏化"：首页与全站导航不出现"游戏"身份表述；GDD 文档隐去公司名