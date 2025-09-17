// Ambil semua card
const serviceCards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.9;

  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.8s ease";
    }
  });
});
