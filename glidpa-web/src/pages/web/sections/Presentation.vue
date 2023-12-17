<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="hero">
        <div class="hero-inner row">
            <div class="col-md-6 col-xs-12 q-pa-sm">
                <span class="hero-trial">7 Días de prueba gratis</span>
                <h2 class="texto-primary title-presentation">La mejor manera de automatizar tu empresa</h2>
                <span class="hero-trial">Contrata tu propio bot con IA para automatizar tus consultas</span>
                <div class="hero-ctas">
                    <q-btn outline rounded color="primary" label="Pruebalo gratis" />
                    <q-btn rounded color="primary" label="Más sobre Glidpa IA" />
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
export default {
    methods: {
        tryForFree() {
            // Implement your logic
        },
        seeHowItWorks() {
            // Implement your logic
        }
    }
};
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

.hero-trial {
    display: block;
    /* margin-bottom: .5rem; */
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.hero h2 {
    line-height: 3.5rem;
}

@media (max-width: 600px) {
    .hero h2 {
        line-height: 3.5rem;
    }
}

.hero p {
    margin-bottom: 2rem;
}

.hero-ctas {
    display: flex;
    gap: 1rem;
}

.btn {
    padding: 0.8rem 2rem;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
}

.btn-primary {
    background-color: #fff;
    color: #000;
}

.btn-primary:hover {
    background-color: #4f4f4f;
    color: #fff;
}

.btn-secondary {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
}

.btn-secondary:hover {
    background-color: #fff;
    color: #000;
}

.trusted-by {
    margin-top: 2rem;
}

.logos {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
}

.logos span {
    background: #fff;
    /* Replace with actual logos */
    display: inline-block;
    padding: 0.5rem 1rem;
    text-align: center;
}

.hero-image img {
    max-width: 90%;
    height: auto;
}

.title-presentation {
    margin-top: 0px;
    margin-bottom: 0px;
}

@media (max-width: 600px) {
    .title-presentation {
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
    }

}</style>
