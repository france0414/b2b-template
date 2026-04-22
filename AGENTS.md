<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# B2B Template - Agent 指引

> **完整開發指引請看 `.github/copilot-instructions.md`**，那份是唯一的 AI 指令來源。

## 快速摘要

- 這是一個 **B2B 模板網站系統**（JSON 驅動、Block 組合、資料與框架分離）
- 技術棧：Next.js + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui
- 頁面 = JSON 定義的區塊排列 → `BlockRenderer` 渲染
- 所有 Block 必須遵守 `BlockProps` 合約（variant + data + className）
- 資料夾分語系：`data/zh/`、`data/en/`
- 詢價車 Phase 1 就要有（React Context + localStorage + Formspree）
- 目前階段：**Phase 1**（完整 B2B 展示站）

## 不能偏移的決策

1. 不在元件內 fetch 資料
2. 只保留一份 AI 指令（`.github/copilot-instructions.md`）
3. Block JSON 結構：`block` + `variant` + `config` + `items`
4. 每筆 JSON 資料必須有 `seo` 物件 + `_source` 欄位
5. 預設部署模式：`output: 'export'`（純靜態）
