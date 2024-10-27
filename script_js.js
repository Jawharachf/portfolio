document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-theme');
  
    // Vérifie si un thème est déjà enregistré dans le localStorage
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = 'Mode sombre';
    }
  
    // Fonction de basculement
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      // Change le texte du bouton
      if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Mode sombre';
        localStorage.setItem('theme', 'dark');  // Enregistre le choix en mode clair
      } else {
        toggleButton.textContent = 'Mode clair';
        localStorage.setItem('theme', 'dark');  // Enregistre le choix en mode sombre
      }
    });
  });
  