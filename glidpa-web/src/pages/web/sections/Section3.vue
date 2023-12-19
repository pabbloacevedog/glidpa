<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section row section-three">
        <div class="image-container col-md-7 col-xs-12 q-pa-sm">
            <img src="@/assets/security.jpeg" alt="Data Security">
        </div>
        <div class="content col-md-5 col-xs-12 q-pa-sm" >
            <h2 class="texto-primary title-section">Tu trabajo está completamente seguro con nosotros</h2>
            <div class="q-mb-xs col-8 description-section ">Valoramos profundamente la seguridad de tus datos, por lo que empleamos avanzados protocolos de cifrado para proteger tus archivos almacenados en la nube. Puedes confiar en que tus datos están resguardados de manera segura con nosotros</div>
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
    padding: 1rem 4%;
    background-color: #000;
    color: #fff;
}

.title-section3 {
    font-size: 2.5rem;
    text-align: center;
    line-height: 2.75rem;
}
.image-container {
    flex-shrink: 0;
    padding: 2rem;
}

.image-container img {
    max-width: 100%;
    height: auto;

    border-radius: 50px !important;
}
.text-description {
    text-align: center;
    font-size: 1.4rem;
}
</style>
