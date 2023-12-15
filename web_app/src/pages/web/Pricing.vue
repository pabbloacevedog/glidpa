<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="pricing-page bg-dark text-white">
        <div class="q-mb-lg column items-center">
            <q-chip class="bg-black" size="xl">
                Nuestros Planes
            </q-chip>
        </div>
        <div class="q-mb-lg column items-center">
            <div class="text-h6 q-mb-md">Los mejores planes para empezar a automatizar tus reservas con IA</div>
        </div>


        <div class="row q-gutter-md ">
            <div class="col" v-for="plan in plans" :key="plan.title">
                <q-card class="bg-black">
                    <q-card-section>
                        <div class="q-mb-md">
                            <q-icon :name="plan.icon" size="md" class="q-mr-sm" />
                            <span>{{ plan.price }}</span>
                        </div>
                        <div class="text-h6">{{ plan.title }}</div>
                        <div class="text-caption q-mb-md">{{ plan.description }}</div>
                        <q-list dense>
                            <q-item v-for="feature in plan.features" :key="feature">
                                <q-item-section>{{ feature }}</q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-card-actions align="right" class="column items-center">
                        <q-btn flat label="What's covered" />
                        <q-btn color="primary" label="Seleccionar" rounded/>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            tab: '12',
            step: '1',
            plans: [
                {
                    title: 'Base',
                    price: '$20.000',
                    description: 'Especial para pymes',
                    features: [
                        'Notificaciones por whatsapp con los datos del cliente la hora de la cita, contacto, etc.',
                        'Agenda para que los clientes puedan solicitar citas',
                        'bot personalizado hasta 20 preguntas sobre la empresa'
                    ],
                    icon: 'build'
                },
                {
                    title: 'Profesional',
                    price: '$50.000',
                    description: 'Especial para pymes que necesiten su pagina web',
                    features: [
                        'Notificaciones por whatsapp con los datos del cliente la hora de la cita, contacto, etc.',
                        'Agenda para que los clientes puedan solicitar citas',
                        'bot personalizado hasta 40 preguntas sobre la empresa',
                        'landing page',
                        'galeria con 15 fotos'
                    ],
                    icon: 'build'
                },
                {
                    title: 'Alto flujo',
                    price: '$100.000',
                    description: 'Especial para pymes con harto flujo de clientes',
                    features: [
                        'Notificaciones por whatsapp con los datos del cliente la hora de la cita, contacto, etc.',
                        'Agenda para que los clientes puedan solicitar citas',
                        'bot personalizado hasta 80 preguntas sobre la empresa',
                        'landing page',
                        'galeria con 30 fotos'
                    ],
                    icon: 'build'
                },
                {
                    title: 'Medianas empresas',
                    price: '$200.000',
                    description: 'Especial para medianas empresas',
                    features: [
                        'Notificaciones por whatsapp con los datos del cliente la hora de la cita, contacto, etc.',
                        'Agenda para que los clientes puedan solicitar citas',
                        'bot personalizado hasta 100 preguntas sobre la empresa',
                        'landing page',
                        'galeria con 50 fotos'
                    ],
                    icon: 'build'
                },
            ]
        };
    }
};
</script>

<style scoped>
.pricing-page {
    background-color: #ffffff;
    color: #000000;
}

.q-stepper {
    background-color: #ffffff;
}

.q-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.q-card-section {
    text-align: center;
}

.q-icon {
    color: #000000;
}

.q-btn {
    color: #000000;
}

.q-btn-primary {
    background-color: #000000;
    color: #ffffff;
}

.q-page {
    padding: 2em;
}
</style>
