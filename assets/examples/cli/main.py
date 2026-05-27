import argparse
from datetime import datetime


def main() -> None:
    parser = argparse.ArgumentParser(description="auto-py-to-exe 教學用 CLI 範例")
    parser.add_argument("--name", default="同學", help="要打招呼的名字")
    args = parser.parse_args()

    print(f"你好，{args.name}！")
    print(f"執行時間：{datetime.now().isoformat(timespec='seconds')}")


if __name__ == "__main__":
    main()
