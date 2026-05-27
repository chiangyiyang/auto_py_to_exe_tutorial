# Flask 範例

## 安裝

pip install -r requirements.txt

## 執行

python app.py

開啟 http://127.0.0.1:5000

## 打包（pyinstaller）

pyinstaller --onedir --console --name flask_sample --add-data "templates;templates" --add-data "static;static" app.py

## 打包（auto-py-to-exe）

- 腳本位置：app.py
- 資料夾模式（One Directory）
- 主控台模式（Console Based）
- 附加檔案：templates -> templates、static -> static
