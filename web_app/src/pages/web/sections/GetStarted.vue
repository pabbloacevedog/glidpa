<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="call-to-action">
      <h2>Comience su viaje en IA con nosotros</h2>
      <p>Transforme su negocio con asistentes virtuales impulsados por IA</p>
      <button class="btn btn-primary" @click="getStarted">Empezar</button>
    </div>
    <div class="footer-content">
      <div class="brand">
        <span>Glidpa IA</span>
        <p>2023 © Glidpa IA todos los derechos reservados.</p>
      </div>
      <div class="links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Precios</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
      <div class="legal-links">
        <a href="#">Politica de privacidad</a>
        <a href="#">Terminos del servicio</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getStarted() {
      // Implement the logic for getting started
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 5rem 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.call-to-action {
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.brand {
  flex-basis: 20%;
}

.links, .social-links, .legal-links {
  flex-basis: 20%;
  list-style: none;
}

.links ul, .social-links a, .legal-links a {
  margin-bottom: 0.5rem;
}

.btn-primary {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #222;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #444;
}
</style>
