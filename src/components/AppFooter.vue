<template>
  <footer>
    <p class="copyright">
      <span>&copy;</span> 2025 Mon Portfolio | Dernière mise à jour : {{ lastUpdated }}
    </p>
    <div class="social-links">
      <a
        href="https://github.com/Mhajar-salma"
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/salma-mhajar/"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener noreferrer"
      >
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      lastUpdated: new Date().toLocaleDateString(),
    };
  },
};
</script>

<style scoped>
/* Appliquer la police globale ici */
* {
  font-family: 'Roboto', sans-serif;
}

footer {
  background-color: #333;
  color: #DBC9C8;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.copyright {
  color: #DBC9C8;
}

.social-links {
  margin-top: 0.5rem;
}

.social-links a {
  margin: 0 10px;
  color: #DBC9C8;
  font-size: 1.5rem;
  text-decoration: none;
}

.social-links a:hover {
  color: #DBC9C8;
}
</style>
