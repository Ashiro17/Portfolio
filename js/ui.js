document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  if (nav) {
    window.addEventListener("scroll", () =>
      nav.classList.toggle("scrolled", window.scrollY > 50)
    );
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
