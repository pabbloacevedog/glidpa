<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section row section-three">
        <div class="image-container col-md-7 col-xs-12 q-pa-sm">
            <img src="@/assets/security.jpeg" alt="Data Security">
        </div>
        <div class="content col-md-5 col-xs-12 q-pa-sm" >
            <h2 class="texto-primary title-section3">Tu trabajo está completamente seguro con nosotros</h2>
            <div class="text-h5 q-mb-xs col-8 text-description">Valoramos profundamente la seguridad de tus datos, por lo que empleamos avanzados protocolos de cifrado para proteger tus archivos almacenados en la nube. Puedes confiar en que tus datos están resguardados de manera segura con nosotros</div>
            <div class="q-mt-lg column items-center">
            <q-btn rounded color="primary" label="Más sobre Glidpa IA" />
        </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        tryNow() {
            // Implement your logic for trying the service
        }
    }
};
</script>

<style scoped>
.section-three {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10%;
    background-color: #000;
    color: #fff;
}

.content {
    max-width: 500px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
}
.title-section3 {
    font-size: 2.5rem;
    text-align: center;
    line-height: 2.75rem;
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
    padding: 2rem;
}

.image-container img {
    max-width: 100%;
    height: auto;

    border-radius: 30px !important;
}
.text-description {
    text-align: center;
    font-size: 1.4rem;
}
</style>
