<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="hero">
        <div class="hero-inner row">
            <div class="col-md-6 col-xs-12 q-pa-sm">
                <span class="hero-trial">7 Días de prueba gratis</span>
                <h2 class="texto-primary title-presentation">La mejor manera de automatizar tu empresa</h2>
                <span class="hero-trial">Contrata tu propio bot con IA para automatizar tus consultas</span>
                <div class="hero-ctas">
                    <q-btn size="lg" outline rounded color="primary" label="Pruebalo gratis" class="btn-prestentation" @click="tryForFree"/>
                    <q-btn size="lg" rounded color="primary" label="Más sobre Glidpa IA" class="btn-prestentation" @click="seeHowItWorks"/>
                </div>
                <div class="trusted-by">
                    Di adios a la tediosa forma de hacer reservas manualmente, deja que Glidpa lo haga por ti y ten tu proio
                    bot trabajando 24/7 para tu empresa
                </div>
            </div>
            <div class="hero-image col-md-6 col-xs-12 q-pa-sm">
                <img src="@/assets/hello.png" alt="Heroic Robot" />
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();

        const tryForFree = () => {
            router.push('/signup');
        }
        const seeHowItWorks = () => {
            // Implement your logic
            router.push('/about-us');
        }
        return {
            tryForFree,
            seeHowItWorks,
        }
    }
}
</script>

<style scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4%;
    background-color: #000;
    /* or any color that matches your design */
    color: #fff;
}

.hero-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 1201px) {
    .hero-trial {
        display: block;
        /* margin-bottom: .5rem; */
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    .title-presentation {
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 7rem;
        line-height: 7rem;
    }

    .trusted-by {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
    .btn-prestentation {
        padding: 0 10%;
        margin-right: 2%;
    }
}

@media (max-width: 1200px) {
    .hero-trial {
        display: block;
        /* margin-bottom: .5rem; */
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    .title-presentation {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .trusted-by {
        margin-top: 2rem;
    }

    .btn-prestentation {
        padding: 0 5%;
        margin-right: 2%;
    }

    .trusted-by {
        margin-top: 2rem;
        font-size: 1.2rem;
    }
}


@media (max-width: 600px) {
    .hero-trial {
        display: block;
        /* margin-bottom: .5rem; */
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-align: center;
    }

    .title-presentation {
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
    }

    .trusted-by {
        margin-top: 2rem;
    }

    .hero-ctas {
        margin-right: 5%;
        margin-bottom: 5%;
        font-size: 20px;
        text-align: center;
    }

    .trusted-by {
        margin-top: 2rem;
        font-size: 1.2rem;
        text-align: center;
    }

    .btn-prestentation {
        padding: 0 20%;
        margin-bottom: 5%;
    }
}



.hero-image img {
    max-width: 90%;
    height: auto;
    border-radius: 30px;
}</style>
