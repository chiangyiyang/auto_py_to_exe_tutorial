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

function copyCommand() {
  const output = document.getElementById("commandOutput");
  if (!output) return;
  navigator.clipboard.writeText(output.textContent || "");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("builderForm");
  if (!form) return;

  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", buildPyInstallerCommand);
    el.addEventListener("change", buildPyInstallerCommand);
  });

  buildPyInstallerCommand();
});
