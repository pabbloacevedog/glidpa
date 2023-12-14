<template>
  <q-layout view="lHh Lpr lFf">
  <nav class="navbar">
    <div class="logo">Glidpa Bot</div>
    <div class="nav-links">
      <a href="#home" class="nav-link">Home</a>
      <a href="#pricing" class="nav-link">Pecios</a>
      <a href="#about-us" class="nav-link">Sobrer Nosotros</a>
      <a href="#contact" class="nav-link">Contacto</a>
    </div>
    <div class="auth-links">
      <button class="btn-login" @click="login">Iniciar Sesión</button>
      <button class="btn-signup" @click="signup">Registrate</button>
    </div>
  </nav>
  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  methods: {
    login() {
      // Logic for logging in
    },
    signup() {
      // Logic for signing up
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282828;
  color: #fff;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #aaa;
}

.auth-links {
  display: flex;
  gap: 0.5rem;
}

.btn-login,
.btn-signup {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #222;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #333;
}

.btn-signup {
  background-color: #fff;
  color: #000;
  border-radius: 20px;
}

.btn-signup:hover {
  background-color: #e6e6e6;
}
</style>
