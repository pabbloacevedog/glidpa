<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero">
    <div class="hero-inner">
      <div class="hero-copy">
        <span class="hero-trial">7 Días de prueba gatis</span>
        <h1>La mejor manera de automatizar tu empresa</h1>
        <p>Contrata tu propio bot co IA para automatizar tus consultas</p>
        <div class="hero-ctas">
          <button class="btn btn-primary" @click="tryForFree">Pruebalo gratis</button>
          <button class="btn btn-secondary" @click="seeHowItWorks">Ve como funciona</button>
        </div>
        <div class="trusted-by">
          Con la confianza de personas y equipos de las mejores empresas del mundo.
          <div class="logos">
            <!-- Replace with actual logos -->
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/hero-robot-black-removebg.png" alt="Heroic Robot" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tryForFree() {
      // Implement your logic
    },
    seeHowItWorks() {
      // Implement your logic
    }
  }
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5%;
  background-color: #000; /* or any color that matches your design */
  color: #fff;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-copy {
  max-width: 600px;
}

.hero-trial {
  display: block;
  margin-bottom: .5rem;
  font-weight: bold;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

.hero p {
  margin-bottom: 2rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #fff;
  color: #000;
}

.btn-primary:hover {
  background-color: #4f4f4f;
  color: #fff;
}

.btn-secondary {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.btn-secondary:hover {
  background-color: #fff;
  color: #000;
}

.trusted-by {
  margin-top: 2rem;
}

.logos {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
}

.logos span {
  background: #fff; /* Replace with actual logos */
  display: inline-block;
  padding: 0.5rem 1rem;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}
</style>
