document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  if (nav) {
    window.addEventListener("scroll", () =>
      nav.classList.toggle("scrolled", window.scrollY > 50)
    );
  }

  // === AUTO HIGHLIGHT CURRENT PAGE (works on ALL your pages) ===
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links");
  
  links.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

// Body scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});