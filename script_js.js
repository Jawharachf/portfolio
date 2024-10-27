document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-theme');
  
    // Vérifie si un thème est déjà enregistré dans le localStorage et applique-le
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Mode clair';  // Affiche "Mode clair" si le mode sombre est activé
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Mode sombre';  // Affiche "Mode sombre" si le mode clair est activé
    }
  
    // Fonction de basculement
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      
        // Change le texte du bouton et enregistre le thème
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Mode clair';
            localStorage.setItem('theme', 'dark');  // Enregistre "dark" pour le mode sombre
        } else {
            toggleButton.textContent = 'Mode sombre';
            localStorage.setItem('theme', 'light');  // Enregistre "light" pour le mode clair
        }
    });
});
