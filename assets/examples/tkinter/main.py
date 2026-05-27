import tkinter as tk


def on_click() -> None:
    label_var.set("你已成功執行 Tkinter 打包程式！")


root = tk.Tk()
root.title("Tkinter 範例")
root.geometry("360x180")

label_var = tk.StringVar(value="按下按鈕測試 GUI 功能")

label = tk.Label(root, textvariable=label_var, font=("Segoe UI", 11))
label.pack(pady=20)

button = tk.Button(root, text="按我", command=on_click)
button.pack()

root.mainloop()
