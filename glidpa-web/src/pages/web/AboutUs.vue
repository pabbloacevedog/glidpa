<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="pricing-page text-white">
        <div class="q-mb-lg column items-center">
            <div class="title-elige q-mb-xs texto-primary">Sobre Nosotros</div>
            <div class="text-h5 q-mb-xs" style="text-align: center;">Como Glidpa IA puede ayudar a aumentar tus ventas mensuales</div>
        </div>
        <div class="row">
        </div>
    </q-page>
</template>

<script>
import PriceCard from '@components/PriceCard.vue';
export default {
    data() {
        return {
        };
    }
};
</script>

<style scoped>
.pricing-page {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../assets/pricing2.png');
    background-size: cover;
    background-position: center;
}

.q-stepper {
    background-color: #000;
}

.q-card {
    background-color: #000;
    border-radius: 25px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.title-elige {
    font-size: 3rem;
}

.q-card-section {
    text-align: center;
}

.q-page {
    padding: 1rem;
}

@media (min-width: 1200px) {
    .plans {
        padding: 0 12% 0 12%;
    }
}
@media (max-width: 1200px) {
    .q-page {
        padding: 0 1rem 1rem 1rem;
    }
}
</style>
