<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="section section-five">
    <div class="row content">
      <div class="col-6 image-container">
        <img src="@/assets/join-community-robot.png" alt="Join Our Community Robot">
        <div class="empezar">
          <h2>Cómo unirse a nuestra comunidad</h2>
          <p>Sólo 3 sencillos pasos para optimizar las operaciones de su empresa.</p>
          <q-btn color="white" size="lg" rounded text-color="black" @click="getStarted" label="Empezar" />
        </div>
      </div>
      <div class="col-6 steps-container">
        <div class="steps">
          <div class="step">
            <h3>Paso 1</h3>
            <p>Elija el plan que más se adecue a sus necesidades</p>
            <div style="width: 384px; height: 2px; opacity: 1; background-color: rgb(58, 58, 58); border-radius: 2px;"></div>
          </div>
          <div class="step">
            <h3>Paso 2</h3>
            <p>Registrese y personalice su bot con preguntas y respuestas sobre su empresa</p>
            <div style="width: 384px; height: 2px; opacity: 1; background-color: rgb(58, 58, 58); border-radius: 2px;"></div>
          </div>
          <div class="step">
            <h3>Paso 3</h3>
            <p>Aumente sus ventas con su propio asistente virtual con inteligencia artificial.</p>
            <div style="width: 384px; height: 2px; opacity: 1; background-color: rgb(58, 58, 58); border-radius: 2px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.btn-primary {
  background-color: #fff;
  color: #000;
}

.btn-primary:hover {
  background-color: #4f4f4f;
  color: #fff;
}
.content {
  background-color: #282828;
  border-radius: 25px;

}
.empezar {
  padding: 55% 10% 10% 10%;

}
.section-five {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5%;
  background-color: #000;
  color: #fff;
}

.image-container {
  flex-shrink: 0;
}

.image-container img {
  max-width: 100%;
  height: auto;
  max-width: 100%;
  position: absolute;
  top: 2650px;
  height: auto;
}

.steps-container {
  max-width: 600px;
}

h2 {
  font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 2.5rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.steps {
  padding-top: 5%;
}
.step {
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}


</style>
