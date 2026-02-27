document.querySelectorAll(".menu-card .image-card img").forEach(img => {
  img.addEventListener("click", () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = img.src;
  });
});

document.querySelector(".popup-image span").addEventListener("click", () => {
  document.querySelector(".popup-image").style.display = "none";
});


document.querySelector(".popup-image").addEventListener("click", (e) => {
  if(e.target.classList.contains("popup-image")){
    e.currentTarget.style.display = "none";
  }
});
