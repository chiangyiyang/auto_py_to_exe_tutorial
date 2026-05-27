# auto-py-to-exe 教學網站（Windows）

目前版本：v1.0.0（2026-05-27）

這是一個以 HTML + JS + CSS 製作的教學網站，內容聚焦於：
- 打包型態與實例
- 基本參數與命令組合
- 常見打包方式
- OpenCV / YOLO / FastAPI / Flask 打包重點
- 從虛擬環境安裝開始

## 開啟教學網站

直接用瀏覽器開啟 `index.html` 即可。

## 教學章節

1. `pages/basics.html`：從 venv 開始到第一個 EXE
2. `pages/packaging.html`：onefile vs onedir 比較
3. `pages/parameters.html`：基本參數與互動命令產生器
4. `pages/scenarios.html`：常見打包方式
5. `pages/heavy-libs.html`：OpenCV / YOLO / Web 打包重點
6. `pages/troubleshooting.html`：常見錯誤與排查
7. `pages/auto-py-to-exe-ui.html`：auto-py-to-exe 介面導覽

## 可執行範例（含網頁說明）

所有範例索引：`assets/examples/README.md`

- `pages/example-cli.html`：CLI 範例頁
- `pages/example-tkinter.html`：Tkinter 範例頁
- `pages/example-opencv.html`：OpenCV 範例頁
- `pages/example-yolo.html`：YOLO 範例頁
- `pages/example-web.html`：Flask 範例頁

## 對外發布文件

- `DEPLOY.md`：發布流程與部署方式
- `CHANGELOG.md`：版本更新紀錄
- `VERSION`：目前發佈版本號

1. `assets/examples/cli/main.py`
2. `assets/examples/tkinter/main.py`
3. `assets/examples/opencv/main.py`
4. `assets/examples/yolo/main.py`
5. `assets/examples/web/app.py`

## 建議練習流程

1. 先依 basics 章節完成 hello.exe
2. 使用 parameters 頁面產生命令並實測
3. 依 scenarios 套用到你的專案
4. 若用到模型或模板，照 heavy-libs 章節加上資料檔處理
5. 最後跑 troubleshooting 的驗證清單

## 後續可擴充

- 加入參數頁的範例預設切換器（依樣板自動帶參數）
- 加入一鍵複製 code snippet 與關鍵字搜尋
- 補上 CI 建置與簽章章節
