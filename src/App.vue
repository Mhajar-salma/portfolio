<template>
  <div id="app">
    <AppHeader />
    
    <!-- Liens de navigation -->
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/projects">Projets</router-link> |
      <router-link to="/contacts">Contact</router-link>
    </nav>
    
    <router-view></router-view> <!-- Affichage dynamique des composants selon la route -->
    
    <AppFooter />

    <!-- Inclure la modale ici -->
    <ProjectModal
      v-if="showModal"
      :visible="showModal"
      :project="selectedProject"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectModal from './components/ProjectModal.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ProjectModal,
  },
  data() {
    return {
      showModal: false,
      selectedProject: {
        title: 'Projet Exemple',
        creationDate: '2025-01-25',
        technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript'], // Tableau des technologies
        siteLink: 'https://exemple.com', // Lien vers le site
        pdfLink: 'https://exemple.com/project.pdf', // Lien vers un PDF
        githubLink: 'https://github.com/username/project', // Lien vers GitHub
      },
    };
  },
};
</script>

<style>
/* Styles globaux */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  animation: curtain-open 1.5s ease-in-out;
}

nav {
  margin: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
  margin-right: 15px;
}
</style>
