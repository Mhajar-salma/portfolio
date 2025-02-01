<template>
  <div v-if="visible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" aria-label="Fermer la modal" @click="closeModal">Fermer</button>

      <!-- Affichage du titre -->
      <h3>{{ project.title }}</h3>

      <!-- Affichage de la date de création -->
      <p class="modal-text"><strong>Date de création:</strong> {{ project.creationDate }}</p>

      <!-- Affichage des technologies utilisées -->
      <p v-if="project.technologies && project.technologies.length" class="modal-text">
        <strong>Technologies utilisées:</strong> {{ formattedTechnologies }}
      </p>
      <p v-else class="modal-text">
        <strong>Technologies utilisées:</strong> Non spécifiées
      </p>

      <!-- Lien vers le site ou fichier PDF -->
      <div v-if="project.siteLink || project.pdfLink" class="modal-text">
        <p><strong>Voir le projet:</strong></p>
        <a v-if="project.siteLink" :href="project.siteLink" target="_blank" class="modal-link">Visiter le site</a>
        <a v-if="project.pdfLink" :href="project.pdfLink" target="_blank" class="modal-link">Télécharger le PDF</a>
      </div>

      <!-- Lien vers le repository GitHub -->
      <div v-if="project.githubLink" class="modal-text">
        <p><strong>Voir le repository GitHub:</strong></p>
        <a :href="project.githubLink" target="_blank" class="modal-link">Voir sur GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Computed property to ensure technologies is always an array
    formattedTechnologies() {
      return Array.isArray(this.project.technologies)
        ? this.project.technologies.join(', ')  // Si technologies est un tableau
        : '';  // Sinon retourner une chaîne vide
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Fond sombre */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;
}

.modal-content {
  background-color: #f5f5f5; /* Fond clair */
  color: #333; /* Texte foncé */
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
  overflow-y: auto; /* Permet le défilement si le contenu dépasse */
  max-height: 90vh; /* Fixe la hauteur max */
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-close {
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.modal-close:hover {
  color: #ff5c5c;
}

.modal-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555; /* Couleur texte douce */
}

.modal-link {
  color: #007BFF; /* Couleur des liens */
  text-decoration: none;
}

.modal-link:hover {
  color: #0056b3; /* Couleur plus foncée au survol */
  text-decoration: underline;
}
</style>
