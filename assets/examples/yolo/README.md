# YOLO 範例

## 安裝

pip install -r requirements.txt

## 準備模型

請將 yolo11n.pt 放到 model/ 目錄。

## 執行

python main.py

## 打包（pyinstaller）

pyinstaller --onedir --console --name yolo_sample --collect-all ultralytics --collect-all torch --add-data "model;yolo_model" main.py

## 注意事項

如果你更改 add-data 的目標目錄，請同步調整 resource_path 的讀取路徑。
