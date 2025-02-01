<template>
  <div id="home">
    <!-- Nom et présentation -->
    <header class="welcome-section">
      <h1>Bienvenue sur mon portfolio</h1>
      <p class="intro">
        Passionnée d'informatique, je suis une étudiante sérieuse et déterminée, à la recherche d'opportunités d'apprentissage. Mon désir d'apprendre et mon engagement envers les technologies m'animent profondément. Mon objectif est de renforcer mes compétences concrètes au sein d'un environnement professionnel.
      </p>
    </header>

    <!-- Lien vers la page des créations -->
    <router-link to="/projects" class="view-projects-link">Voir mes créations</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Appliquer la police pour toute la page */
* {
  font-family: 'Roboto', sans-serif; /* Police globale pour tout le site */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%; /* Assurer que le body et html occupent toute la hauteur */
}

#home {
  background-color: #E8D0D3;
  color: #333;
  display: flex;
  flex-direction: column; /* L'alignement du contenu se fait sur une colonne */
  justify-content: center; /* Centrer le contenu verticalement */
  align-items: center; /* Centrer le contenu horizontalement */
  height: 100vh; /* Hauteur égale à celle de la fenêtre */
  text-align: center;
  padding: 0 2rem;
}

/* Section de bienvenue */
.welcome-section {
  margin-bottom: 3rem;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.welcome-section .intro {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Lien vers les créations */
.view-projects-link {
  display: inline-block;
  background-color: #333;
  color: white;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.view-projects-link:hover {
  background-color: #555;
}

/* Style responsive pour les petits écrans */
@media (max-width: 768px) {
  .welcome-section h1 {
    font-size: 2rem; /* Réduit la taille du titre */
  }

  .welcome-section .intro {
    font-size: 1rem; /* Réduit la taille du texte */
    padding: 0 0.5rem;
  }

  .view-projects-link {
    padding: 0.6rem 1.2rem; /* Réduit la taille du bouton */
  }
}
</style>
