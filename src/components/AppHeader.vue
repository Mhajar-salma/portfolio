<template>
  <header class="header">
    <div class="logo-container">
      <router-link to="/" class="logo">
        <img src="@/assets/img/logo.png" alt="Logo de Salma M'hajar" />
      </router-link>
      <span class="name">Salma M'hajar</span>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="button" :class="{ active: $route.path === '/' }">Accueil</router-link>
        </li>
        <li>
          <router-link to="/projects" class="button" :class="{ active: $route.path === '/projects' }">Projets</router-link>
        </li>
        <li>
          <router-link to="/contact" class="button" :class="{ active: $route.path === '/contact' }">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
/* Header en position fixe */
.header {
  display: flex;
  justify-content: center; /* Centre tous les éléments dans le header */
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  position: fixed; /* Le header reste visible */
  top: 0;
  width: 100%;
  z-index: 1000; /* Toujours au-dessus des autres éléments */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-out; /* Animation pour glissement du header */
}

/* Conteneur du logo et du nom */
.logo-container {
  text-align: center; /* Centrer le logo et le nom */
  margin-right: 20px; /* Créer un peu d'espace avant la nav */
}

.logo img {
  width: 50px;
  height: 50px;
}

.name {
  display: block; /* Placer le nom sous le logo */
  margin-top: 5px;
  font-size: 1rem;
  color: #DBC9C8;
  font-weight: bold;
}

/* Animation du glissement */
@keyframes slideIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Navigation */
nav {
  flex-grow: 1; /* Permet à la navigation de prendre toute la largeur restante */
  margin-left: 20px; /* Ajouter un petit décalage vers la droite */
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center; /* Centrer les éléments de la navigation */
  margin: 0;
  padding: 0;
  animation: slideNav 1s ease-out; /* Animation pour glissement des boutons */
}

nav ul li {
  margin-left: 20px; /* Espacement entre les éléments */
  animation: slideButton 1s ease-out; /* Animation pour chaque bouton */
}

@keyframes slideNav {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideButton {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Style pour les boutons */
.button {
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  border: 2px solid #DBC9C8; /* Bordure rose vif */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  text-align: center;
}

/* Au survol, effet de remplissage */
.button:hover {
  background-color: #DBC9C8; /* Fond rose vif */
  color: #333; /* Texte sombre */
}

/* Classe active pour les liens actifs */
.active {
  background-color: #DBC9C8; /* Fond rose vif pour le lien actif */
  color: #333;
}
</style>
