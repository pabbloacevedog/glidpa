<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section row section-four">
        <div class="content col-md-7 col-xs-12 q-pa-sm">
            <h2 class="texto-primary title-section ">Ahorro de costos de manera inteligente</h2>
            <div class="q-mb-xs col-8 description-section ">Una potente herramienta que te ayuda a reducir gastos y a ahorrar dinero.
                Según nuestros usuarios, con tan solo un cliente que reserve una cita a través de Glidpa IA es suficiente para cubrir el costo del servicio; todo lo demás representa ganancias para nuestros usuarios
            </div>
                <div class="q-mt-lg column items-center">
            <q-btn rounded color="primary" label="Ver precios" />
        </div>
        </div>
        <div class="image-container col-md-5 col-xs-12 q-pa-sm">
            <!-- Asegúrate de que la ruta de la imagen sea correcta -->
            <img src="@/assets/ahorro.png" alt="Cost Saving Robot">
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
    padding: 1rem 4%;
    background-color: #000;
    color: #fff;
}

.title-section4 {
    font-size: 2.5rem;
    text-align: center;
    line-height: 2.75rem;
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
    border-radius: 30px !important;
}
.text-description {
    text-align: center;
    font-size: 1.4rem;
}
</style>
