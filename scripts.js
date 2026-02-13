// Reveal on scroll
const elements = document.querySelectorAll(".fade-in");

function reveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
