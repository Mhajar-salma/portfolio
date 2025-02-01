<template>
  <div id="projects-page">
    <h2>Mes Créations</h2>
    <div class="projects-grid">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="project-card"
      >
        <img :src="project.image" :alt="project.title">
        <h3>{{ project.title }}</h3>
        <router-link :to="project.link" class="details-button">Visiter</router-link>
        <button class="modal-button" @click="openModal(project)">Voir plus</button>
      </div>
    </div>

    <!-- Modal -->
    <ProjectModal 
      v-if="selectedProject" 
      :visible="isModalVisible" 
      :project="selectedProject" 
      @close="closeModal" 
    />
  </div>
</template>

<script>
import ProjectModal from "@/components/ProjectModal.vue";

export default {
  name: 'ProjectsPage',
  components: {
    ProjectModal,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Catalogue Produit",
          image: require('@/assets/img/catalogue/project1.jpg'),
          link: "/projects/catalogue",
          creationDate: "2025-01-15",
          technologies: ["HTML", "CSS", "Vue.js"],
          githubLink: "https://github.com/Mhajar-salma/candle-dreams",
          siteLink: "/catalogue",
        },
        {
          id: 2,
          title: "Site Vitrine",
          image: require('@/assets/img/catalogue/project2.jpg'),
          link: "/projects/vitrine",
          creationDate: "2024-12-01",
          technologies: ["JavaScript", "TailwindCSS"],
          githubLink: "https://github.com/salma-mhajar/vitrine",
          siteLink: "/vitrine",
        },
        {
          id: 3,
          title: "Application Vue.js",
          image: require('@/assets/img/catalogue/project3.jpg'),
          link: "/projects/vue-app",
          creationDate: "2025-01-20",
          technologies: ["Vue.js", "Node.js"],
          githubLink: "https://github.com/salma-mhajar/vue-app",
          pdfLink: "/path/to/project.pdf",
        },
      ],
      selectedProject: null,
      isModalVisible: false,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalVisible = true;
    },
    closeModal() {
      this.selectedProject = null;
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
/* Section des créations */
#projects-page {
  text-align: center;
  padding: 2rem;
  background-color: #E8D0D3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Titre de la page */
#projects-page h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 2rem;
}

/* Carte de projet */
.project-card {
  position: relative;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Image des projets */
.project-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Titre des projets */
.project-card h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
}

/* Effet d'ombre au survol */
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Liens de projet */
.details-button, .modal-button {
  display: inline-block;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: 2px solid #333;
  transition: background-color 0.3s, color 0.3s;
}

/* Espacement entre les boutons */
.modal-button {
  margin-left: 8px;
}

/* Effet au survol des boutons */
.details-button:hover, .modal-button:hover {
  background-color: #555;
  color: #fff;
}

/* Style responsive */
@media (max-width: 768px) {
  #projects-page {
    padding: 1rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .project-card {
    padding: 0.8rem;
  }
}
</style>
