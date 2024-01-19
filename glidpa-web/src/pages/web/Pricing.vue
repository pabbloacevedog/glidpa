<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="pricing-page text-white">
        <div class="q-mb-lg column items-center">
            <div class="title-elige q-mb-xs texto-primary">Elige tu plan </div>
            <div class="text-h5 q-mb-xs" style="text-align: center;">y empieza a automatizar tus reservas con IA</div>
        </div>
        <div class="row">
            <div class="col col-md-3 col-xs-12" v-for="plan in plans" :key="plan.title">
                <PriceCard :plan="plan" />
            </div>
        </div>
    </q-page>
</template>

<script>
import PriceCard from '@components/PriceCard.vue';
export default {
    components: {
        PriceCard
    },
    setup() {
        return {
            plans: [
                {
                    id: 1,
                    title: 'Básico',
                    price: '19.990',
                    description: 'Perfecto para pymes que solo necesiten automatizar y aumentar sus citas',
                    features: [
                        { icon: 'notifications_active', description: 'Recibe automáticamente detalles de citas y comunicaciones importantes por whatsapp' },
                        { icon: 'edit_calendar', description: 'Permite que hasta 40 clientes puedan reservar citas fácilmente cada mes.' },
                        { icon: 'precision_manufacturing', description: 'Personaliza tu propio bot con hasta 20 preguntas sobre tu empresa' },
                    ],
                    class: 'basico'
                },
                {
                    id: 2,
                    title: 'Profesional',
                    price: '29.990',
                    description: 'Perfecto para pymes que necesiten su página web, automatizar y aumentar sus citas',
                    features: [
                        { icon: 'notifications_active', description: 'Recibe automáticamente detalles de citas y comunicaciones importantes por whatsapp' },
                        { icon: 'edit_calendar', description: 'Permite que hasta 90 clientes puedan reservar citas fácilmente cada mes.' },
                        { icon: 'precision_manufacturing', description: 'Personaliza tu propio bot con hasta 30 preguntas sobre tu empresa' },
                        { icon: 'web', description: 'Landing page personalizable para que puedas mostrar tus servicios.' },
                        { icon: 'collections', description: 'Muestra lo mejor de tu empresa con una galería con 15 fotos.' }
                    ],
                    class: 'profesional'
                },
                {
                    id: 3,
                    title: 'Premium',
                    price: '49.990',
                    description: 'Especial para pymes con harto flujo de clientes que neceiten automatizar citas',
                    features: [
                        { icon: 'notifications_active', description: 'Recibe automáticamente detalles de citas y comunicaciones importantes por whatsapp' },
                        { icon: 'edit_calendar', description: 'Permite que hasta 200 clientes puedan reservar citas fácilmente cada mes.' },
                        { icon: 'precision_manufacturing', description: 'Personaliza tu propio bot con hasta 40 preguntas sobre tu empresa' },
                        { icon: 'web', description: 'Landing page personalizable para que puedas mostrar tus servicios.' },
                        { icon: 'collections', description: 'Muestra lo mejor de tu empresa con una galería con 30 fotos.' }
                    ],
                    class: 'premium'
                },
                {
                    id: 4,
                    title: 'Platinum',
                    price: '99.990',
                    description: 'Especial para medianas empresas con muchos cliente que necesitan automatizar la reserva de citas',
                    features: [
                        { icon: 'notifications_active', description: 'Recibe automáticamente detalles de citas y comunicaciones importantes por whatsapp' },
                        { icon: 'edit_calendar', description: 'Permite que hasta 500 clientes puedan reservar citas fácilmente cada mes.' },
                        { icon: 'precision_manufacturing', description: 'Personaliza tu propio bot con hasta 50 preguntas sobre tu empresa' },
                        { icon: 'web', description: 'Landing page personalizable para que puedas mostrar tus servicios.' },
                        { icon: 'collections', description: 'Muestra lo mejor de tu empresa con una galería con 50 fotos.' }
                    ],
                    class: 'platinum'
                },
            ]
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
