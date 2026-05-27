from pathlib import Path

import cv2
import numpy as np


def main() -> None:
    output = Path("output_demo.png")

    img = np.zeros((240, 480, 3), dtype=np.uint8)
    img[:] = (30, 80, 20)
    cv2.putText(
        img,
        f"OpenCV 版本：{cv2.__version__}",
        (20, 120),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.65,
        (255, 255, 255),
        2,
        cv2.LINE_AA,
    )

    cv2.imwrite(str(output), img)
    print(f"已產生圖片：{output.resolve()}")


if __name__ == "__main__":
    main()
