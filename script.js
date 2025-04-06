// Dark mode with localStorage
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll to top
const toTopBtn = document.getElementById("toTopBtn");
window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  