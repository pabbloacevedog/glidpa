<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section section-two row">
        <div class="content col-md-6 col-xs-10 q-pa-sm">
            <h2>Conoce la mejor solución en inteligencia artificial</h2>
            <p>¡Únase a nuestra comunidad y experimente los beneficios hoy!</p>
            <button class="btn btn-primary" @click="tryForFree">Pruebalo gratis</button>
        </div>
        <div class="image-container col-md-6 col-xs-10 q-pa-sm">
            <img src="@/assets/robot-family-3.png" alt="Robot Family">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        tryForFree() {
            // Implement your logic for trying for free
        }
    }
};
</script>

<style scoped>
.section-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 5%;
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
    font-size: 1.25rem;
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
    max-width: 700px;
    height: auto;
}
</style>
