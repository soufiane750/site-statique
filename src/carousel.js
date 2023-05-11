document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide"); // Sélectionne toutes les diapositives du carrousel
  const prevBtn = document.getElementById("prevBtn"); // Sélectionne le bouton précédent
  const nextBtn = document.getElementById("nextBtn"); // Sélectionne le bouton suivant
  const indicatorsContainer = document.querySelector(".carousel-indicators ul"); // Sélectionne le conteneur des indicateurs
  let currentSlide = 0; // Variable pour suivre la diapositive actuelle

  function showSlide(index) {
    if (index < 0) {
      currentSlide = slides.length - 1; // Si l'index est inférieur à 0, on revient à la dernière diapositive
    } else if (index >= slides.length) {
      currentSlide = 0; // Si l'index dépasse le nombre total de diapositives, on revient à la première diapositive
    }

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add("active"); // Ajoute la classe "active" à la diapositive actuelle pour l'afficher
      } else {
        slide.classList.remove("active"); // Retire la classe "active" des autres diapositives pour les masquer
      }
    });

    updateIndicators(); // Met à jour les indicateurs
  }

  function showNextSlide() {
    currentSlide++; // Passe à la diapositive suivante
    showSlide(currentSlide);
  }

  function showPrevSlide() {
    currentSlide--; // Passe à la diapositive précédente
    showSlide(currentSlide);
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll(".carousel-indicators li"); // Sélectionne tous les indicateurs

    indicators.forEach((indicator, i) => {
      if (i === currentSlide) {
        indicator.classList.add("active"); // Ajoute la classe "active" à l'indicateur correspondant à la diapositive actuelle
      } else {
        indicator.classList.remove("active"); // Retire la classe "active" des autres indicateurs
      }
    });
  }

  // Crée un indicateur pour chaque diapositive
  slides.forEach(() => {
    const indicator = document.createElement("li");
    indicatorsContainer.appendChild(indicator);
  });

  // Associe un gestionnaire d'événement aux boutons précédent et suivant
  prevBtn.addEventListener("click", showPrevSlide);
  nextBtn.addEventListener("click", showNextSlide);

  // Associe un gestionnaire d'événement à chaque indicateur
  const indicators = document.querySelectorAll(".carousel-indicators li");
  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      showSlide(i); // Passe à la diapositive correspondant à l'indice de l'indicateur cliqué
    });
  });

  showSlide(currentSlide); // Affiche la première diapositive au chargement de la page
});
