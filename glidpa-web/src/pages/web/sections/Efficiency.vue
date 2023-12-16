<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section section-four">
        <div class="content col-md-6 col-xs-10 q-pa-sm">
            <h2>Ahorro de costes de forma inteligente</h2>
            <p>Potente herramienta que te ayuda a reducir costos y ahorrar dinero en tus operaciones comerciales. Con
                algoritmos de optimización y análisis avanzados, Costsaver analiza sus flujos de trabajo existentes e
                identifica áreas de mejora.</p>
            <button class="btn btn-primary" @click="tryNow">Precios</button>
        </div>
        <div class="image-container col-md-6 col-xs-10 q-pa-sm">
            <!-- Asegúrate de que la ruta de la imagen sea correcta -->
            <img src="@/assets/cost-saving-robot-2.png" alt="Cost Saving Robot">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        tryNow() {
            // Implementa la lógica para probar el servicio
        }
    }
};
</script>

<style scoped>
.section-four {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10%;
    background-color: #000;
    color: #fff;
}

.content {
    max-width: 600px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 2.75rem;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
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

.image-container {
    flex-shrink: 0;
}

.image-container img {
    max-width: 100%;
    height: auto;
}
</style>
