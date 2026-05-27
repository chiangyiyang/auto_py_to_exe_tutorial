document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const current = location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.endsWith(current)) {
      link.classList.add("active");
    }
  });
});
