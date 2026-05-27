# OpenCV 範例

## 安裝

pip install -r requirements.txt

## 執行

python main.py

## 打包（pyinstaller）

pyinstaller --onedir --console --name opencv_sample --hidden-import cv2 --collect-all cv2 main.py

## 打包（auto-py-to-exe）

- 腳本位置：main.py
- 資料夾模式（One Directory）
- 主控台模式（Console Based）
- 進階參數：加入 --hidden-import cv2 與 --collect-all cv2
