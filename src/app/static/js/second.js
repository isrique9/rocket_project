document.addEventListener('DOMContentLoaded', function() {
  // Scroll para a terceira seção
  const scrollButton = document.getElementById('scrollToThirth');
  const thirdSection = document.getElementById('contacts-sections');

  if (scrollButton && thirdSection) {
    scrollButton.addEventListener('click', function() {
      thirdSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Código existente do IntersectionObserver
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
