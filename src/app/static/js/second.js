document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.projects-section');
  const gifs = document.querySelectorAll('.corner-gif');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gifs.forEach(gif => gif.classList.add('visible'));
        } else {
          gifs.forEach(gif => gif.classList.remove('visible'));
        }
      });
    },
    { threshold: 0.9 }
  );

  if (section) {
    observer.observe(section);
  }
});