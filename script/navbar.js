document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  if (!toggle || !links) {
    return;
  }

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
    });
  });
});
