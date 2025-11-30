// Carrousels (photos + témoignages)
function initCarousel(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector("[data-carousel-prev]");
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));

  let currentIndex = slides.findIndex((slide) =>
    slide.classList.contains("active")
  );
  if (currentIndex === -1) currentIndex = 0;

  function goTo(index) {
    slides[currentIndex].classList.remove("active");
    if (dots[currentIndex]) dots[currentIndex].classList.remove("active");

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goTo(currentIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goTo(currentIndex - 1);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goTo(index);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");
  carousels.forEach(initCarousel);

  // Année automatique dans le footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
