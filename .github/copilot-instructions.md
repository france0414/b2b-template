# B2B Template - AI 開發指引

> 這份文件是給所有 AI 工具（Copilot / Claude / Cursor）的統一指令。
> 專案只保留這一份 AI 指引，不要建立其他 AI 設定檔。

---

## 專案概述

B2B 模板網站系統 — 一套可複用的 B2B 網站產品。
核心思路：**母版（Base Template）共用 + 擴充區（Extension Slots）客製 + JSON 資料分離**。

不同客戶 = 不同 JSON 配置 + 不同資料，code 完全共用。

## 技術棧（不可變更）

- **Next.js** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **next-intl**（i18n，資料夾分語系）
- **Framer Motion**（動畫）
- **Formspree**（表單送出，零後端）
- 部署：Vercel（預設純靜態 `output: 'export'`）

## 核心架構

### 元件三層架構

```
第 1 層：shadcn/ui 基礎元件（src/components/ui/）
  Button, Card, Dialog, Badge, Sheet...
  ↓
第 2 層：通用元件（src/components/common/）
  BaseCard, ImageDisplay, ResponsiveColumnsControl
  ↓
第 3 層：業務元件 = Block（src/components/blocks/）
  HeroBanner, ProductHighlight, NewsLatest, ContactCTA...
```

### Block 組合系統（核心）

頁面不寫死，用 JSON 定義區塊排列，由 `BlockRenderer` 渲染。

```
頁面 = 區塊池裡挑選 + 排序
homepage.json = [
  { "block": "HeroBanner", "variant": "video" },
  { "block": "ProductHighlight", "variant": "grid-3" },
  ...
]
```

**Block Props 合約（所有 Block 必須遵守）：**
```ts
interface BlockProps {
  variant?: string;                              // 必須支援 variant
  data: Record<string, unknown>;                 // 資料從外部傳入
  className?: string;                            // 方便外層加動畫
  isEditMode?: boolean;                          // Phase 2+ 預留，現在不實作
  onUpdate?: (newBlockData: BlockData) => void;  // Phase 2+ 預留，現在不實作
}
```

**Block JSON 結構：**
```json
{
  "block": "ComponentName",
  "variant": "variant-name",
  "config": {},   // 區塊設定（Phase 1 不用，預留）
  "items": []     // 混合內容（Phase 1 不用，預留）
}
```

### 區塊池（可用 Block 清單）

| Block | 用途 | Variant 範例 |
|---|---|---|
| HeroBanner | 首屏大圖/影片 | image / video / carousel / 3d-scene |
| ProductHighlight | 精選產品 | grid-3 / grid-4 / carousel / featured-1 |
| CategoryShowcase | 分類導覽 | cards / icons / tabs |
| AboutPreview | 公司簡介 | text-image / stats / timeline |
| NewsLatest | 最新消息 | cards-3 / list / featured-side |
| ClientLogos | 客戶牆 | scroll / grid / carousel |
| Certifications | 認證獎項 | badges / cards |
| VideoShowcase | 影片展示 | single / gallery |
| StatsCounter | 數據亮點 | 4-columns / banner |
| ContactCTA | 聯絡 CTA | simple / with-form / map |
| FAQ | 常見問題 | accordion / two-column |
| Testimonials | 客戶見證 | quotes / cards / carousel |

## 元件檔案結構

每個 Block 元件放獨立資料夾：
```
src/components/blocks/ComponentName/
├── ComponentName.tsx          # 主元件
├── ComponentName.types.ts     # TypeScript 介面
└── index.ts                   # 統一匯出
```

新增 Block 後必須在 `BlockRenderer.tsx` 的 `BLOCK_MAP` 中註冊。

## 資料結構

### 目錄
```
data/
  zh/products.json    # 中文產品
  zh/news.json        # 中文新聞
  zh/company.json     # 中文公司資訊
  en/products.json    # 英文產品
  en/news.json
  en/company.json
  templates/
    manufacturing.json  # 製造業模板
    trading.json        # 貿易商模板
    food.json           # 食品農業模板
```

### Product JSON Schema（含預留欄位）

```json
{
  "id": "p001",
  "slug": "cnc-lathe-vl-25",
  "name": "CNC 車床 VL-25",
  "category": "cnc-lathe",
  "description": "...",
  "specs": { "主軸轉速": "6000 rpm" },
  "images": { "hero": "media/p001_hero.jpg", "gallery": [] },
  "inquirable": true,
  "minOrderQuantity": 1,
  "variants": [],
  "variantAxis": [],
  "seo": {
    "meta_title": "",
    "meta_description": "",
    "og_image": "",
    "keywords": [],
    "schema_type": "Product"
  },
  "_source": "ai_draft",
  "_review": false
}
```

### 欄位說明
- `_source`：`client`（客戶提供）/ `ai_draft`（AI 生成待確認）/ `ai_reviewed`（AI 生成已確認）
- `inquirable`：是否可加入詢價車
- `variants` / `variantAxis`：Phase 3 產品變體，現在預留空陣列
- `specs`：Phase 2 篩選用，現在先填基本規格
- `seo`：每筆資料必備，SEO + AI SEO（AEO）用

## 多語系（i18n）

- 架構：`next-intl` + 資料夾分語系（`data/zh/`、`data/en/`）
- 分檔不巢狀：同一個 id，不同語系檔案各存一份
- 圖片：無文字共用，有文字加 `_{lang}` 後綴
- 工作流程：先寫中文 → AI 翻譯 → 人工校對專業術語

## SEO + AI SEO（AEO）

每頁必須有：
1. **metadata API** — meta_title, meta_description, og_image
2. **Schema.org JSON-LD** — Product / Article / Organization / FAQ
3. **語意化 HTML** — `<article>`, `<section>`, `<nav>`
4. **llms.txt** — 放 `public/llms.txt`，給 AI 爬蟲的網站摘要
5. **sitemap.xml** — `next-sitemap` 套件

## 詢價車（Phase 1 基礎版）

B2B 核心功能，Phase 1 就要有。

```
功能：
- ProductCard 加「加入詢價」按鈕
- 詢價車側邊欄（shadcn Sheet）顯示已加入的產品
- 可調整數量、移除項目
- 送出詢價表單（公司名、聯絡人、Email、需求說明）→ Formspree
- localStorage 暫存（訪客不用登入）

技術：
- React Context 管理 cart state（簡單場景不用 Zustand）
- shadcn Sheet + Badge + Button
- Formspree 零後端送信

元件結構：
  src/components/inquiry/
    InquiryCartProvider.tsx    ← Context Provider（包在 RootLayout）
    AddToInquiryButton.tsx     ← 加入詢價按鈕（放在 ProductCard）
    InquiryCartSheet.tsx       ← 詢價車側邊欄
    InquiryCartButton.tsx      ← Header 浮動按鈕（Badge 顯示數量）
    InquirySubmitForm.tsx      ← 送出表單
```

## 前台編輯模式（Phase 2+ 才實作）

Phase 1 只預留介面，不實作邏輯：
- `BlockProps` 已有 `isEditMode` + `onUpdate`
- Block JSON 已有 `config` + `items`
- Phase 1 元件內只需 `if (!isEditMode) return 純展示;`

## 三階段開發計畫

### Phase 1：完整 B2B 展示站（目前階段）
- 所有 Block 元件 + BlockRenderer
- 頁面串接（getStaticProps → JSON → BlockRenderer）
- i18n + SEO + 基礎動畫
- 基礎詢價車 v1
- AI 生成 Demo 資料
- Block Generator + JSON Generator（SKILL.md）

### Phase 2：篩選 + 詢價車進階 + 前台編輯
- 產品篩選（Filter + URL query + useMemo）
- 詢價車 v2（備註、歷史、PDF）
- 前台編輯模式 v1（Block 排序 + variant 切換 + 文字編輯）

### Phase 3：產品變體 + 後台接入
- VariantSelector + SpecTable
- 前台編輯 v2
- Strapi Dynamic Zone 接入

## 三種部署模式

同一份 code，`next.config.js` 切換：
- **模式 A**（預設）：`output: 'export'` → 純靜態 HTML
- **模式 B**：拿掉 output → Next.js 全端 + CMS API
- **模式 C**：混合（靜態頁 + API Routes）

## 編碼規範

1. 所有元件必須 TypeScript + 明確 props 介面
2. **不在元件內 fetch 資料**，資料從外部 props 傳入
3. 使用語意化 HTML（article, section, nav）
4. 圖片一律用 `next/image`
5. 動畫用 Framer Motion，與 shadcn 元件層獨立
6. 新增 Block 必須遵守 BlockProps 合約
7. 新增 JSON 資料必須包含 `seo` 物件和 `_source` 欄位
