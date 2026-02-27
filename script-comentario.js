document.addEventListener("DOMContentLoaded", () => {
  console.log("JS de comentarios cargado ✅");

  const slider = document.querySelector(".comentario-slider");
  const track = document.querySelector(".comentario-content");
  const cards = document.querySelectorAll(".comentario-target");

  const btnPrev = document.querySelector(".slider-btn.prev");
  const btnNext = document.querySelector(".slider-btn.next");
  const dotsContainer = document.querySelector(".slider-dots");

  if (!slider || !track || cards.length === 0) {
    console.log("No se encontró el slider o cards ❌");
    return;
  }

  let index = 0;

  // Crear dots
  dotsContainer.innerHTML = "";
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("slider-dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".slider-dot");

  function updateSlider() {
    const sliderWidth = slider.offsetWidth;

    track.style.transform = `translateX(-${index * sliderWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  btnNext.addEventListener("click", () => {
    index++;
    if (index >= cards.length) index = 0;
    updateSlider();
  });

  btnPrev.addEventListener("click", () => {
    index--;
    if (index < 0) index = cards.length - 1;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);

  updateSlider();
});
