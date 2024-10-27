document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-theme');
  
    // Vérifie si un thème est déjà enregistré dans le localStorage
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
      toggleButton.textContent = 'Mode sombre';
    }
  
    // Fonction de basculement
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      // Change le texte du bouton
      if (document.body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Mode sombre';
        localStorage.setItem('theme', 'light');  // Enregistre le choix en mode clair
      } else {
        toggleButton.textContent = 'Mode clair';
        localStorage.setItem('theme', 'dark');  // Enregistre le choix en mode sombre
      }
    });
  });
  