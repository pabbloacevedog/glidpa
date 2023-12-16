<template>
  <q-layout view="hHh lpR fff">

      <q-header>
          <q-toolbar class="bg-black text-white">
              <q-btn dense flat round icon="menu" @click="drawer = !drawer" v-if="$q.platform.is.mobile" />

              <q-toolbar-title to="/">
                  <q-avatar>
                      <img src="@/assets/logo_glidpa.png">
                  </q-avatar>
                  Glidpa IA
              </q-toolbar-title>
              <nav class=" navbar" v-if="!$q.platform.is.mobile">
                  <div class="nav-links">
                      <a href="#pricing" class="nav-link">Pecios</a>
                      <a href="#about-us" class="nav-link">Sobrer Nosotros</a>
                      <a href="#contact" class="nav-link">Contacto</a>
                  </div>
                  <div class="auth-links">
                      <button class="btn-login" @click="login">Iniciar Sesión</button>
                      <button class="btn-signup" @click="signup">Registrate</button>
                  </div>
              </nav>
          </q-toolbar>
      </q-header>
      <q-drawer v-model="drawer" :width="200" :breakpoint="500" overlay side="left" class="bg-black text-white">
          <q-scroll-area class="fit">
              <q-list>
                  <div v-for="(menuItem, index) in menuList" :key="index">
                      <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                          <q-item-section>
                              {{ menuItem.label }}
                          </q-item-section>
                      </q-item>
                      <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                  </div>
                  <q-item>
                      <button class="btn-login" @click="login">Iniciar Sesión</button>
                  </q-item>
                  <q-separator />
                  <q-item>
                      <button class="btn-signup" @click="signup">Registrate</button>
                  </q-item>
                  <q-separator />
              </q-list>
          </q-scroll-area>
      </q-drawer>

      <q-page-container>
          <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

const menuList = [
  {
      icon: 'price_change',
      label: 'Precios',
      separator: true
  },
  {
      icon: 'favorite',
      label: 'Sobre nososotros',
      separator: false
  },
  {
      icon: 'phone',
      label: 'Contacto',
      separator: true
  }
]
export default {
  setup() {
      return {
          drawer: ref(false),
          menuList,
          toggleLeftDrawer() {
              drawer.value = !drawer.value
          }
      }
  }
}
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
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
