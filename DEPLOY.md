# 對外發布指南

本專案為純靜態網站，可直接部署到任一靜態託管平台。

## 發布前檢查

1. 確認首頁可開啟：index.html
2. 依序點擊頁面連結，確認無 404
3. 測試參數頁的範例預設切換器是否可產生命令
4. 確認範例說明頁可開啟
5. 確認 VERSION 與 CHANGELOG 已更新

## 發布方式 A：直接打包交付

1. 將整個專案壓縮為 zip
2. 提供給對外單位解壓後以瀏覽器開啟 index.html

## 發布方式 B：GitHub Pages

本專案已提供自動部署工作流：.github/workflows/deploy-pages.yml

1. 推送最新程式碼到 GitHub（master 分支）
2. 到 GitHub 專案頁面，進入 Settings > Pages
3. Build and deployment 的 Source 選 GitHub Actions
4. 到 Actions 分頁確認 Deploy static site to GitHub Pages 成功
5. 成功後會產生公開網址：
	https://<你的帳號>.github.io/<你的倉庫名稱>/

備註：
- 之後每次 push 到 master，會自動重新部署
- 如需手動重發，可在 Actions 頁用 Run workflow

## 發布方式 C：一般靜態主機

可用 Nginx、Apache、Netlify、Vercel 或任何靜態託管，將專案根目錄作為網站內容根目錄即可。

## 建議版本策略

- 穩定對外版：v1.0.x
- 內容增補版：v1.1.x
- 大改版（資訊架構調整）：v2.0.0
