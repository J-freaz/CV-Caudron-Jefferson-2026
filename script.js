document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));

    let currentIndex = 0;

    // Carrousel type pellicule
    const filmstripTrack = carousel.querySelector(".filmstrip-track");
    const filmstripCards = filmstripTrack
      ? Array.from(filmstripTrack.querySelectorAll(".testimonial-card"))
      : [];

    if (filmstripTrack && filmstripCards.length > 0) {
      function updateFilmstrip() {
        filmstripTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex);
        });
      }

      nextBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % filmstripCards.length;
        updateFilmstrip();
      });

      prevBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + filmstripCards.length) % filmstripCards.length;
        updateFilmstrip();
      });

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateFilmstrip();
        });
      });

      updateFilmstrip();
      return;
    }

    // Carrousel classique photos
    const slides = Array.from(carousel.querySelectorAll(".slide"));

    if (slides.length === 0) {
      return;
    }

    function updateClassicCarousel() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateClassicCarousel();
    });

    prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateClassicCarousel();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateClassicCarousel();
      });
    });

    updateClassicCarousel();
  });
});