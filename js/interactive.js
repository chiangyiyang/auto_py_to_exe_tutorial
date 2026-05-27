const presetMap = {
  cli: {
    mode: "--onefile",
    appName: "cli_sample",
    scriptPath: "assets/examples/cli/main.py",
    iconPath: "",
    windowed: false,
    clean: true,
    noconfirm: true,
    hiddenImports: "",
    addData: "",
    collectAll: "",
  },
  tkinter: {
    mode: "--onedir",
    appName: "tkinter_sample",
    scriptPath: "assets/examples/tkinter/main.py",
    iconPath: "",
    windowed: true,
    clean: true,
    noconfirm: true,
    hiddenImports: "",
    addData: "",
    collectAll: "",
  },
  opencv: {
    mode: "--onedir",
    appName: "opencv_sample",
    scriptPath: "assets/examples/opencv/main.py",
    iconPath: "",
    windowed: false,
    clean: true,
    noconfirm: true,
    hiddenImports: "cv2",
    addData: "",
    collectAll: "cv2",
  },
  yolo: {
    mode: "--onedir",
    appName: "yolo_sample",
    scriptPath: "assets/examples/yolo/main.py",
    iconPath: "",
    windowed: false,
    clean: true,
    noconfirm: true,
    hiddenImports: "",
    addData: "model;yolo_model",
    collectAll: "ultralytics,torch",
  },
  web: {
    mode: "--onedir",
    appName: "flask_sample",
    scriptPath: "assets/examples/web/app.py",
    iconPath: "",
    windowed: false,
    clean: true,
    noconfirm: true,
    hiddenImports: "",
    addData: "templates;templates\nstatic;static",
    collectAll: "",
  },
};

function buildPyInstallerCommand() {
  const mode = document.querySelector("input[name='mode']:checked")?.value || "--onefile";
  const appName = document.getElementById("appName")?.value.trim() || "my_app";
  const script = document.getElementById("scriptPath")?.value.trim() || "main.py";
  const icon = document.getElementById("iconPath")?.value.trim();
  const windowed = document.getElementById("windowed")?.checked;
  const clean = document.getElementById("clean")?.checked;
  const noconfirm = document.getElementById("noconfirm")?.checked;
  const hiddenImports = document.getElementById("hiddenImports")?.value.trim();
  const addData = document.getElementById("addData")?.value.trim();
  const collectAll = document.getElementById("collectAll")?.value.trim();

  const cmd = ["pyinstaller", mode, `--name ${appName}`];

  if (icon) cmd.push(`--icon \"${icon}\"`);
  if (windowed) cmd.push("--windowed");
  if (clean) cmd.push("--clean");
  if (noconfirm) cmd.push("--noconfirm");

  if (hiddenImports) {
    hiddenImports
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((pkg) => cmd.push(`--hidden-import ${pkg}`));
  }

  if (addData) {
    addData
      .split("\n")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((line) => cmd.push(`--add-data \"${line}\"`));
  }

  if (collectAll) {
    collectAll
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((pkg) => cmd.push(`--collect-all ${pkg}`));
  }

  cmd.push(script);

  const output = document.getElementById("commandOutput");
  if (output) output.textContent = cmd.join(" ");
}

function applyPreset(presetKey) {
  const preset = presetMap[presetKey];
  if (!preset) return;

  const modeInput = document.querySelector(`input[name='mode'][value='${preset.mode}']`);
  if (modeInput) modeInput.checked = true;

  const appName = document.getElementById("appName");
  const scriptPath = document.getElementById("scriptPath");
  const iconPath = document.getElementById("iconPath");
  const windowed = document.getElementById("windowed");
  const clean = document.getElementById("clean");
  const noconfirm = document.getElementById("noconfirm");
  const hiddenImports = document.getElementById("hiddenImports");
  const addData = document.getElementById("addData");
  const collectAll = document.getElementById("collectAll");

  if (appName) appName.value = preset.appName;
  if (scriptPath) scriptPath.value = preset.scriptPath;
  if (iconPath) iconPath.value = preset.iconPath;
  if (windowed) windowed.checked = preset.windowed;
  if (clean) clean.checked = preset.clean;
  if (noconfirm) noconfirm.checked = preset.noconfirm;
  if (hiddenImports) hiddenImports.value = preset.hiddenImports;
  if (addData) addData.value = preset.addData;
  if (collectAll) collectAll.value = preset.collectAll;

  buildPyInstallerCommand();
}

function copyCommand() {
  const output = document.getElementById("commandOutput");
  if (!output) return;
  navigator.clipboard.writeText(output.textContent || "");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("builderForm");
  if (!form) return;

  const presetSelect = document.getElementById("presetSelect");
  const applyPresetBtn = document.getElementById("applyPresetBtn");

  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", buildPyInstallerCommand);
    el.addEventListener("change", buildPyInstallerCommand);
  });

  if (applyPresetBtn && presetSelect) {
    applyPresetBtn.addEventListener("click", () => {
      const presetKey = presetSelect.value;
      if (!presetKey) return;
      applyPreset(presetKey);
    });
  }

  buildPyInstallerCommand();
});
