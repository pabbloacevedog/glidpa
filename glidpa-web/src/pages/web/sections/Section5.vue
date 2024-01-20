<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="section2-page text-white">
        <div class="column row items-center">
            <div class="title-section q-mb-xs texto-primary col-12">Glidpa IA aprende cada vez que lo usas
            </div>
            <div class="description-section col-8">Con estos simples pasos podrás empezar a utilizarlo</div>
        </div>
        <div class="row">
            <div class="col col-xs-12 col-md-6 image-div">
                <img src="@/assets/glidpa-read.png" class="image-Section5" alt="Heroic Robot" />
            </div>
            <div class="col q-mt-md row col-xs-12 col-md-6 " v-if="!$q.platform.is.mobile">
                <q-card flat bordered class="bg-black card-steps">
                    <q-card-section class="step-section">
                        <div class="text-h4 texto-primary text-steps">{{ steps.one.title }}</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-h6 text-description">
                            {{ steps.one.description }}
                        </div>
                    </q-card-section>
                    <q-separator inset color="primary" />
                    <q-card-section class="step-section">
                        <div class="text-h4 texto-primary text-steps">{{ steps.two.title }}</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-h6 text-description">
                            {{ steps.two.description }}
                        </div>

                    </q-card-section>
                    <q-separator inset color="primary" />
                    <q-card-section class="step-section">
                        <div class="text-h4 texto-primary text-steps">{{ steps.three.title }}</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-h6 text-description">
                            {{ steps.three.description }}
                        </div>

                    </q-card-section>
                    <q-separator inset color="primary" />
                    <q-card-section class="step-section">
                        <div class="text-h4 texto-primary text-steps ">{{ steps.for.title }}</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-h6 text-description">
                            {{ steps.for.description }}
                        </div>
                    </q-card-section>
                    <div class="q-mp-lg column items-center">
                        <q-btn rounded color="primary" label="Comenzar" @click="seePricing" />
                    </div>
                </q-card>
            </div>


        </div>
    </q-page>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();

        const seePricing = () => {
            // Implement your logic
            router.push('/pricing');
        }
        return {
            seePricing,
            steps: {
                one: {
                    title: 'Selecciona tu plan',
                    description: 'Explora nuestras opciones y elige el plan que mejor se adapte a las necesidades de tu empresa.',
                },
                two: {
                    title: 'Regístrate',
                    description: 'Regístrate en nuestra página y proporciona información relevante sobre tu empresa. Agrega preguntas frecuentes para que Glidpa IA las utilice al responder a tus clientes.',
                },
                three: {
                    title: 'Crea tu sitio web',
                    description: 'Personaliza tu landing page con tu logotipo, detalles de tu empresa y añade imágenes a tu galería para mostrar tus servicios. Luego, publícala.',
                },
                for: {
                    title: 'Comparte tu sitio web',
                    description: 'Difunde el enlace y el código QR de tu página entre tus clientes y compártela en tus redes sociales.',
                },
            }
        }
    }
}
</script>

<style scoped>
.section2-page {
    background-color: #000;
    color: #000000;
}

.image-div {
    display: flex;
    justify-content: center;
}

.chip-Section5-right {
    font-size: 1.2rem !important;
    padding: 10% !important;
}


.q-stepper {
    background-color: #000;
}

.title-section5 {
    font-size: 2.5rem;
    text-align: center;
    line-height: 2.75rem;
}

.q-page {
    padding: 2em;
}

.card-steps {
    border-color: #000000;
}

.image-Section5 {
    max-width: 100%;
    max-height: 90%;
    height: auto;
    border-radius: 50px !important;
}



@media (max-width: 1200px) {
    .card-steps {
        padding: 2%;
        margin: 0%;
        border-radius: 30px;
    }

    .text-description {
        font-size: 1rem;
    }

    .text-steps {
        font-size: 1.5rem
    }

    .step-section {
        padding: 0px 16px !important;
    }
}

@media (min-width: 1201px) {
    .card-steps {
        padding: 5%;
        margin: 5%;
        border-radius: 30px;
    }

    .text-description {
        font-size: 1.5rem;
    }

    .text-steps {
        font-size: 2.5rem
    }

    .title-section5 {
        font-size: 3.5rem;
        text-align: center;
        line-height: 2.75rem;
    }

    .description5 {
        font-size: 2.2rem;
    }

}

@media (max-width: 600px) {
    .text-description {
        font-size: 1rem;
    }

    .text-steps {
        font-size: 1.5rem
    }
}</style>
