<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="reviews-container q-pa-xl" @mousemove="handleMouseMove">
        <h2 class="texto-primary title-section">Comentarios de nuestros usuarios</h2>
        <div class="q-mb-lg col-8 description-section ">Descubra por qué las empresas aman a nuestros asistentes
            virtuales</div>
        <div d="gradientBorder" class="row q-gutter-md justify-center">
            <div class="col-auto col-xs-12 card-wrapper" :style="{ borderRadius: '20px' }">
                <div class="review-card  " :style="borderStyle">
                    <div class="author texto-primary">John Smith</div>
                    <div class="position">Desarrollador líder, soluciones tecnológicas</div>
                    <div class="rating">★★★★☆</div>
                    <p>Desde que utilizamos nuestros asistentes de IA, las empresas han experimentado un crecimiento
                        notable.</p>
                </div>
            </div>
            <div class="col-auto col-xs-12 card-wrapper">
                <div class="review-card" :style="borderStyle">
                    <div class="author texto-primary">Emily Johnson</div>
                    <div class="position">Product Manager, Growth Co.</div>
                    <div class="rating">★★★★★</div>
                    <p>Recomiendo ampliamente a nuestros asistentes de IA para cualquier negocio que busque mejorar.</p>
                </div>
            </div>
            <div class="col-auto col-xs-12 card-wrapper">
                <div class="review-card" :style="borderStyle">
                    <div class="author texto-primary">Alex Thompson</div>
                    <div class="position">CTO, Innovate Corp</div>
                    <div class="rating">★★★★★</div>
                    <p>El éxito de nuestra empresa no sería el mismo sin nuestros asistentes de IA.</p>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
//  borderGradient.value = `linear-gradient(${angle + 90}deg,rgba(121,40,202,0)0,#000 20%,#7928ca 50%, #f81ce5 80%)`;
import { ref, computed } from 'vue';

const borderGradient = ref('linear-gradient(to right, #9c20aa, #fb3570)');

function handleMouseMove(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const angle = Math.atan2(y - (rect.height / 2), x - (rect.width / 2)) * (180 / Math.PI);
    borderGradient.value = `linear-gradient(${angle + 90}deg,rgba(121,40,202,0)0,#000 20%,#7928ca 50%, #f81ce5 80%)`;
}

const borderStyle = computed(() => ({
    background: `linear-gradient(#000 0 0) padding-box, ${borderGradient.value} border-box`,
    border: '1px solid transparent',
    borderRadius: '15px',
}));
</script>

<style scoped>
.reviews-container {
    text-align: center;
    background: #000;
    min-height: 80vh;
}

.card-wrapper {
    border-radius: 20px;
    /* Ajusta el valor del border-radius como desees */
    max-width: 300px;
    overflow: hidden;
    /* Esto asegura que el contenido interno también siga la curvatura */
}

.review-card {
    background: #000;
    padding: 2rem;
    border-radius: 30px !important;
    color: #FFF;
    min-width: 300px;
    min-height: 270px;
    border: solid 1px transparent;
}

.rating {
    color: #ffc107;
    /* Gold/yellow color for stars */
    margin: 1rem 0;
}

.author {
    font-weight: bold;
    font-size: 1.4rem;
    color: #fff;
}

.title-testimonials {
    font-size: 3rem;
    text-align: center;
    line-height: 3rem;
}

.text-description {
    text-align: center;
    color: #fff;
}

@media (min-width: 1000px) {
    .title-testimonials {
        font-size: 3rem;
        text-align: center;
        line-height: 3rem;
    }

    .text-description {
        text-align: center;
    }
}
</style>
