from pathlib import Path
import sys

from ultralytics import YOLO


def resource_path(relative_path: str) -> Path:
    if hasattr(sys, "_MEIPASS"):
        return Path(sys._MEIPASS) / relative_path
    return Path(__file__).resolve().parent / relative_path


def main() -> None:
    model_path = resource_path("model/yolo11n.pt")
    print(f"嘗試載入模型路徑：{model_path}")

    if not model_path.exists():
        print("找不到模型檔，請先把 yolo11n.pt 放在 model/ 目錄")
        return

    model = YOLO(str(model_path))
    print("模型載入成功。")
    print(model.names)


if __name__ == "__main__":
    main()
