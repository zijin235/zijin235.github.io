# weii.github.io — 个人主页（Nuxt 4 + TypeScript + Nuxt UI）

原 Jekyll 版（acad-homepage 模板）的完整重写：**Nuxt 4（原生 `app/` 目录结构）+ TypeScript + @nuxt/ui v4**，
样式与原版 1:1 一致（品牌色 `#224b8d`、容器 1160px、顶栏 56px、圆角 3px）。

## 技术栈

- **Nuxt 4.5**（SSG：`npm run generate` → 纯静态产物，GitHub Actions 部署到 `gh-pages` 分支）
- **@nuxt/ui v4** 组件库（UApp / UHeader / UNavigationMenu / UAvatar / UBadge / UButton / ULink / UFooter）
- **Tailwind CSS v4** + 自定义 `brand` 色阶（对齐原站主色）
- 全站 **TypeScript** 类型（作者 / 出版物 / 时间线 / Scholar 统计）

## 目录结构

```
├── app/
│   ├── app.vue                  ← UApp + 布局 + UFooter
│   ├── pages/index.vue          ← 主页面（useSeoMeta / Scholar 数据刷新）
│   ├── components/              ← AppMasthead(UHeader) / AuthorSidebar(UAvatar) /
│   │                               PaperBox(UBadge+UButton) / PublicationList / TimelineSection
│   ├── composables/useScholarStats.ts  ← 类型安全拉取引用数据（替代 jQuery getJSON）
│   ├── data/                    ← site.ts / content.ts（Typed 内容，替代 _config.yml + about.md）
│   ├── types/index.ts           ← 全站类型模型
│   └── assets/css/main.css      ← tailwind + @nuxt/ui + 自定义布局样式
├── public/                      ← 静态资源（favicon / 头像 / 论文图）
├── google_scholar_crawler/      ← 引用数据爬虫（GitHub Action 定时运行，无需改动）
├── .github/workflows/
│   ├── google_scholar_crawler.yaml  ← 生成 gs_data.json → google-scholar-stats 分支
│   └── deploy.yml                   ← 构建 Nuxt → 部署 gh-pages 分支
├── app.config.ts                ← Nuxt UI 主题（primary: brand）
├── nuxt.config.ts
└── tsconfig.json
```

## 本地开发 / 构建

```bash
npm install
npm run dev        # 开发服务器 http://localhost:3000（HMR）
npm run generate   # 静态生成到 .output/public
npx serve .output/public  # 本地预览产物
```

> 注：`.npmrc` 使用 npmmirror 镜像源；若 CI 或本地 rolldown 原生 binding 缺失，
> 显式指定官方源：`npm ci --registry=https://registry.npmjs.org`。

## 部署（GitHub Actions）

推送 `main` 后自动执行 `.github/workflows/deploy.yml`：

1. `npm run generate` 生成静态产物到 `.output/public`
2. `peaceiris/actions-gh-pages` 推送到 `gh-pages` 分支
3. 仓库 Settings → Pages → **Deploy from a branch** → `gh-pages` `/ (root)`

`weii.github.io` 是用户站点（根路径），无需 `app.baseURL`；
若迁到项目仓库，加 `app.baseURL: '/repo/'` 即可。

Google Scholar 引用数据工作流（`google_scholar_crawler.yaml`）保持原样，
每天 08:00 UTC 或 Pages 构建时更新 `google-scholar-stats` 分支的数据。

## 🤖 AI 维护

- **仓库根 `AGENTS.md`**：维护手册（内容指南 / 视觉约束 / 检查清单），GitHub Copilot 与本地 agent 自动读取
- **`.github/copilot-instructions.md`**：Copilot 在线指令
- **`.pi/skills/homepage-maintenance/`**：本地 agent（pi）维护 skill
- **`copilot/`**：Copilot SDK 定时自动维护（每周开 PR），启用方式见 [`copilot/README.md`](copilot/README.md)