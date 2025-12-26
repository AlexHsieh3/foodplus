# FoodPlus 網站專案進度

## 記錄日期
2025-12-26

## 專案架構
- **前端框架**: Vue 3 + Vite 7
- **CSS 框架**: Tailwind CSS v4
- **版本控制**: GitHub
- **部署平台**: Cloudflare Pages
- **網域**: foodplus.pages.dev
- **官網參考**: https://www.foodplus.com.tw/

---

## 今日完成事項 (2025-12-26)

### 1. Vue 專案建立 ✅
- 使用 `npm create vite@latest` 建立 Vue 3 專案
- 安裝並設定 Tailwind CSS v4
- 建立基本頁面結構（Header, Hero, Features, Footer）
- 專案目錄結構：`foodplus/app/`

### 2. GitHub 設定 ✅
- 設定 SSH key 連接 GitHub
  - 使用現有的 `~/.ssh/id_ed25519`
  - 新增 GitHub SSH config 到 `~/.ssh/config`
- 建立 GitHub 倉庫：https://github.com/AlexHsieh3/foodplus
- 成功推送程式碼

### 3. Cloudflare Pages 部署 ✅
- 連接 GitHub 倉庫到 Cloudflare Pages
- 建置設定：
  - Framework preset: Vue
  - Build command: `npm run build`
  - Build output directory: `dist`
  - Root directory: `app`
- 部署成功：https://foodplus.pages.dev

### 4. Cloudflare MCP 設定 ✅
- 建立 Cloudflare API Token（完整權限）
- 設定 Claude Code MCP：
  ```bash
  claude mcp add cloudflare -e CLOUDFLARE_API_TOKEN=xxx -- npx -y @cloudflare/mcp-server-cloudflare
  ```
- 需重啟 Claude Code 生效

### 5. 整合 Stitch 設計模板 ✅
- 導入 Stitch 產出的 HTML 設計
- 轉換為 Vue 3 組件架構
- 設定自訂 Tailwind 主題：
  - 品牌色：primary (#6B9E8E)、secondary (#D99468)
  - 字體：Outfit (標題)、DM Sans (內文)
  - 動畫：浮動動畫效果
- 加入 Google Fonts 和 Material Icons

### 6. 繁體中文化 ✅
- 參考官網 foodplus.com.tw 文案
- 更新所有區塊為繁體中文內容：
  - **Hero**: Drink to Your Health・機能食品設計｜完全營養食
  - **核心價值**: 全食物營養、無添加、植萃機能
  - **品牌故事**: 創辦人陳頡燕・美國註冊營養師
  - **推薦產品**: 大麥草香蕉(晚安特調)、番茄覆盆莓(青春特調) NT$720
  - **適用情境**: 早餐、營養補充、運動補給
  - **Footer**: 食之味有限公司・聯絡資訊

### 7. 組件化架構 ✅
新增 Vue 組件：
- `NavBar.vue` - 導航列
- `HeroSection.vue` - 主視覺區塊
- `FeaturesSection.vue` - 核心價值
- `AboutSection.vue` - 品牌故事
- `ProductsSection.vue` - 推薦產品
- `UseCasesSection.vue` - 適用情境
- `FooterSection.vue` - 頁腳

### 8. 整合客戶提供圖片 ✅
- 建立圖片目錄結構：`app/public/images/{logo,product,team}/`
- 整合圖片素材：
  - `logo/logo.png` - food+ 綠色圓形 logo
  - `product/product1.png` - 番茄覆盆莓 青春特調（橘色標籤）
  - `product/product2.png` - 大麥苗香蕉 晚安特調（綠色標籤）
  - `team/founder.jpg` - 創辦人陳頡燕 全身白袍照
  - `team/founder-smile.jpg` - 創辦人微笑頭像
- 更新所有組件使用本地圖片路徑

### 9. 產品圖片去背 ✅
- 使用 remove.bg 線上工具處理產品圖片
- 移除灰色背景，改為透明背景
- 去背後圖片在漸層背景上效果更佳

### 10. Logo 優化 ✅
- 使用 Python PIL 裁切 logo 多餘留白
- 原始尺寸 500x500 → 裁切後 188x229
- 調整導航列 logo 高度為 42px（與按鈕一致）

### 11. 網站標題與 Favicon ✅
- 更新網頁標題：`food+ 食之味 | 機能營養食品`
- 新增 favicon.png（32x32 綠色葉子圖標）
- 新增 apple-touch-icon.png（180x180）

---

## 專案結構
```
foodplus/
├── .gitignore
├── memo/
│   └── progress.md
├── images/                      ← 原始圖片素材（客戶提供）
│   ├── logo/
│   ├── product/
│   └── team/
└── app/                         ← Vue 專案
    ├── index.html               ← Google Fonts & Material Icons & Favicon
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   ├── favicon.png          ← 網站 favicon (32x32)
    │   ├── apple-touch-icon.png ← iOS 圖標 (180x180)
    │   └── images/
    │       ├── logo/
    │       │   └── logo.png     ← 裁切後的 logo
    │       ├── product/
    │       │   ├── product1.png ← 番茄覆盆莓（去背）
    │       │   └── product2.png ← 大麥苗香蕉（去背）
    │       └── team/
    │           ├── founder.jpg
    │           └── founder-smile.jpg
    └── src/
        ├── App.vue              ← 主頁面（整合所有組件）
        ├── main.js
        ├── style.css            ← Tailwind CSS v4 自訂主題
        ├── assets/
        └── components/
            ├── NavBar.vue
            ├── HeroSection.vue
            ├── FeaturesSection.vue
            ├── AboutSection.vue
            ├── ProductsSection.vue
            ├── UseCasesSection.vue
            ├── FooterSection.vue
            └── TestimonialsSection.vue
```

---

## 相關連結
- **GitHub**: https://github.com/AlexHsieh3/foodplus
- **線上網站**: https://foodplus.pages.dev
- **官網參考**: https://www.foodplus.com.tw/
- **Cloudflare Dashboard**: https://dash.cloudflare.com

---

## 下一步待辦
- [ ] 自訂網域設定（GoDaddy DNS 指向 Cloudflare）
- [x] 替換產品圖片為實際產品照片
- [ ] 新增更多頁面（關於、聯絡、部落格）
- [ ] 連接購物車功能
- [ ] SEO 優化（meta tags, sitemap）
- [ ] 手機版響應式優化
