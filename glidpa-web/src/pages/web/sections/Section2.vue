<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="section2-page text-white ">
        <div class="column row items-center">
            <div class="title-section q-mb-xs texto-primary col-12">Glidpa usa tecnología avanzada con inteligencia artificial
            </div>
            <div class="q-mb-xs col-8 description-section">para automatizar la reserva de citas en tu empresa. Cuenta
                con tu propia agenda, una landing page personalizada con una galería de fotos para exhibir tus productos y
                servicios, y tu propio bot personalizado</div>
        </div>
        <div class="row q-mt-md">
            <div class="col row col-xs-12 col-md-3" v-if="!$q.platform.is.mobile">
                <div class="col-12 container-left">

                </div>
                <div class="col-12 container-left">
                    <q-chip class="chip-think-left" color="primary" text-color="white" size="xl">
                        Conversaciones inteligentes
                    </q-chip>
                </div>
                <div class="col-12 container-left">
                    <q-chip color="primary" class="chip-think-left" text-color="white" size="xl">
                        Toma de citas
                    </q-chip>
                </div>
                <div class="col-12 container-left">
                    <q-chip color="primary" class="chip-think-left" text-color="white" size="xl">
                        Notificaciones por Whatsapp
                    </q-chip>
                </div>
                <div class="col-12 container-left">
                </div>
            </div>
            <div class="col row col-xs-12 col-md-3" v-if="$q.platform.is.mobile">
                <div class="col-12 container-left">

                </div>
                <div class="col-12 container-left">
                    <q-chip class="chip-think-left" color="primary" text-color="white" size="md">
                        Conversaciones inteligentes
                    </q-chip>
                </div>
                <div class="col-12 container-left">
                    <q-chip color="primary" class="chip-think-left" text-color="white" size="md">
                        Toma de citas
                    </q-chip>
                </div>
                <div class="col-12 container-left">
                    <q-chip color="primary" class="chip-think-left" text-color="white" size="md">
                        Notificaciones por Whatsapp
                    </q-chip>
                </div>
                <div class="col-12 container-left">
                </div>
            </div>
            <div class="col row col-xs-12 col-md-3 " v-if="$q.platform.is.mobile">
                <div class="col-12 container-right ">
                </div>
                <div class="col-12 container-right ">
                    <q-chip color="primary" class="chip-think-right" text-color="white" size="md">
                        Disponibilidad 24/7
                    </q-chip>
                </div>
                <div class="col-12 container-right ">
                    <q-chip color="primary" class="chip-think-right" text-color="white" size="md">
                        Agenda propia
                    </q-chip>
                </div>
                <div class="col-12 container-right ">
                    <q-chip class="chip-think-right" color="primary" text-color="white" size="md">
                        Landing page para tu empresa
                    </q-chip>
                </div>
                <div class="col-12 container-right ">
                </div>
            </div>

            <div class="col col-xs-12 col-md-6 image-div">
                <img src="@/assets/thinking.png" class="image-think" alt="Heroic Robot" />
            </div>
            <div class="col row col-xs-12 col-md-3 " v-if="!$q.platform.is.mobile">
                <div class="col-12 container-right ">
                </div>
                <div class="col-12 container-right ">
                    <q-chip color="primary" class="chip-think-right" text-color="white" size="xl">
                        Disponibilidad 24/7
                    </q-chip>
                </div>
                <div class="col-12 container-right ">
                    <q-chip color="primary" class="chip-think-right" text-color="white" size="xl">
                        Agenda propia
                    </q-chip>
                </div>
                <div class="col-12 container-right ">
                    <q-chip class="chip-think-right" color="primary" text-color="white" size="xl">
                        Landing page para tu empresa
                    </q-chip>
                </div>
                <div class="col-12 container-right ">
                </div>
            </div>


        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {

        };
    }
};
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

.chip-think-right {
    font-size: 1.2rem !important;
    padding: 10% !important;
    border-radius: 30px 30px 30px 0 !important;
}

.chip-think-left {
    font-size: 1.2rem !important;
    padding: 10% !important;
    border-radius: 30px 30px 0 30px !important;
}

.container-left {
    display: flex;
    flex-direction: column;
    /* Alinea verticalmente */
    align-items: flex-start;
}

.container-right {
    display: flex;
    flex-direction: column;
    /* Alinea verticalmente */
    align-items: flex-end;
}


.q-stepper {
    background-color: #000;
}

.title-elige {
    font-size: 3rem;
    text-align: center;
    line-height: 3rem;
}

.q-page {
    padding: 2em;
}

.image-think {
    max-width: 90%;
    height: auto;
    border-radius: 50px !important;
}

.text-description {
    text-align: center;
}

@media (min-width: 1000px) {
    .title-elige {
        padding: 0px 15%;
    font-size: 3rem;
    text-align: center;
    line-height: 3rem;
}
    .text-description {
        text-align: center;
        padding: 0px 15%;
    }
}

@media (max-width: 600px) {
    .chip-think-left {
        font-size: 1rem !important;
        padding: 5% !important;
        border-radius: 30px 30px 0 30px !important;
    }

    .chip-think-right {
        font-size: 1rem !important;
        padding: 5% !important;
        border-radius: 30px 30px 30px 0 !important;
    }

}
</style>
