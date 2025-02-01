<template>
  <div id="not-found" class="not-found">
    <img src="@/assets/img/404-image.png" alt="Page non trouvée" class="not-found-image" />
    <h1>404</h1>
    <p>Oups ! La page que vous recherchez n'existe pas.</p>
    <router-link to="/" class="back-home">Retourner à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  metaInfo: {
    title: "404 - Page non trouvée",
    meta: [
      {
        name: "description",
        content:
          "La page que vous avez demandée n'existe pas. Revenez à l'accueil pour continuer la navigation.",
      },
    ],
  },
};
</script>

<style scoped>
/* Import de la police Poppins depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Hauteur pleine écran */
  text-align: center;
  padding: 2rem;
  background-color: #333; /* Fond gris foncé */
  color: #DBC9C8; /* Texte en gris clair */
  font-family: 'Poppins', sans-serif; /* Application de la police Poppins */
}

.not-found-image {
  max-width: 400px;
  width: 100%;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 6rem;
  margin: 1rem 0;
  color: #DBC9C8; /* Texte en gris clair */
}

p {
  font-size: 1.3rem;
  color: #DBC9C8; /* Texte en gris clair */
}

.back-home {
  margin-top: 2rem;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #DBC9C8; /* Rose vif */
  color: #333; /* Texte du bouton en gris foncé */
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.back-home:hover {
  background-color: #DBC9C8; /* Rose plus clair au survol */
  color: #333; /* Garde le texte en gris foncé */
}

/* Soulignement dynamique sur hover */
.back-home.active {
  border-bottom: 3px solid #DBC9C8; /* Ligne soulignée pour l'élément actif */
}
</style>
