document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky-sea");

  const config = {
    total: 20,
    baseSpeed: 60,
    widthRange: [80, 200],
    topRange: [20, 200],
    opacityRange: [0.6, 1],
    zIndexRange: [400, 600],
  };

  const CLOUD_IMAGES = [
    "/static/assets/cloud1.png",
    "/static/assets/cloud2.png",
    "/static/assets/cloud3.png",
    "/static/assets/cloud4.png",
    "/static/assets/cloud5.png",
    "/static/assets/cloud6.png",
    "/static/assets/cloud7.png",
    "/static/assets/cloud8.png",
  ];

  function createCloud() {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    const img = CLOUD_IMAGES[Math.floor(Math.random() * CLOUD_IMAGES.length)];
    const width =
      config.widthRange[0] +
      Math.random() * (config.widthRange[1] - config.widthRange[0]);
    const height = width * (0.5 + Math.random() * 0.3);
    const duration = config.baseSpeed + Math.random() * config.baseSpeed;

    // Define um "progresso" inicial (em que ponto do trajeto a nuvem estaria)
    const progress = Math.random();

    Object.assign(cloud.style, {
      backgroundImage: `url(${img})`,
      width: `${width}px`,
      height: `${height}px`,
      top: `${
        Math.random() > 0.5
          ? 20 + Math.random() * 60
          : 100 + Math.random() * 100
      }px`,
      left: `-200px`,
      opacity:
        config.opacityRange[0] +
        Math.random() * (config.opacityRange[1] - config.opacityRange[0]),
      zIndex: `${
        config.zIndexRange[0] +
        Math.floor(
          Math.random() * (config.zIndexRange[1] - config.zIndexRange[0])
        )
      }`,
      animation: `cloudDrift ${duration}s linear infinite`,
      animationDelay: `-${progress * duration}s`,
    });

    return cloud;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < config.total; i++) {
    fragment.appendChild(createCloud());
  }

  sky.appendChild(fragment);

  // SCROLL BUTTON FUNCTIONALITY
  const scrollBtn = document.getElementById('scrollToSecond');
  const targetSection = document.getElementById('project-sections');

  if (scrollBtn && targetSection) {
    scrollBtn.addEventListener('click', function () {
      const offset = 30;
      const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: 'smooth'
      });
    });
  }
});