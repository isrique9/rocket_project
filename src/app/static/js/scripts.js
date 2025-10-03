document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-container");
  let lastImage = "";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector("img");
        if (img && img.src !== lastImage) {
          lastImage = img.src;
          document.body.style.setProperty("--bg-image-next", `url(${img.src})`);

          document.body.classList.remove("fade-in");
          void document.body.offsetWidth;
          document.body.classList.add("fade-in");

          setTimeout(() => {
            document.body.style.setProperty("--bg-image-current", `url(${img.src})`);
            document.body.style.setProperty("--bg-image-next", "none");
            document.body.classList.remove("fade-in");
          }, 1200); 
        }
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(card => observer.observe(card));
});
