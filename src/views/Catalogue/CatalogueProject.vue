<template>
  <div class="candle-project">
    <h2>Projet : Bougies Artisanales</h2>
    <p>Découvrez mes bougies artisanales à travers ces images :</p>

    <!-- Galerie d'images -->
    <div class="image-gallery">
      <img
        v-for="(image, index) in projectImages"
        :key="index"
        :src="image.src"
        :alt="'Capture ' + (index + 1)"
        @click="openImageModal(image.src)"
      />
    </div>

    <!-- Bouton pour voir le projet sur GitHub -->
    <div class="github-button">
      <a
        href="https://github.com/Mhajar-salma/candle-dreams"
        target="_blank"
        class="btn-github"
      >
        Voir sur GitHub
      </a>
    </div>

    <!-- Image en pleine page (modale) -->
    <div v-if="isModalVisible" class="image-modal" @click="closeImageModal">
      <img :src="selectedImage" alt="Image agrandie">
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogueProject",
  data() {
    return {
      projectImages: [
        { src: require('@/assets/img/candle-project/candle-project1.png') },
        { src: require('@/assets/img/candle-project/candle-project2.png') },
        { src: require('@/assets/img/candle-project/candle-project3.png') },
        { src: require('@/assets/img/candle-project/candle-project4.png') },
      ],
      selectedImage: null,
      isModalVisible: false,
    };
  },
  methods: {
    openImageModal(imageSrc) {
      this.selectedImage = imageSrc;
      this.isModalVisible = true;
    },
    closeImageModal() {
      this.selectedImage = null;
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
/* Page de projet */
.candle-project {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  text-align: center;
  padding: 2rem;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 1200px;
}

.image-gallery img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-gallery img:hover {
  transform: scale(1.05);
}

/* Modale d'image */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: zoom-out;
}

.image-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Bouton GitHub */
.github-button {
  margin-top: 2rem;
}

.btn-github {
  background-color: #24292f;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn-github:hover {
  background-color: #0366d6;
}
</style>
