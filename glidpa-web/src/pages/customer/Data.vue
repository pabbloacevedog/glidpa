<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="contact-page text-white">
        <div class="q-mb-lg column items-center">
            <div class="title-contacto q-mb-xs texto-primary">Contacta con nosotros</div>
        </div>
        <div class="column items-center">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md formulario" ref="myForm">
                <q-card class="bg-card col-6 col-md-6 col-xs-12">
                    <q-card-section class="q-pb-none q-pt-none">
                        <div class="text-h5 q-mb-md" style="text-align: center;">Sientete libre de contactarnos cuando tu
                            quieras</div>
                        <div class="row items-center">
                            <q-input dark rounded standout v-model="nombre" label="Nombre"
                                class="input-contact q-px-md col-md-6 col-xs-12" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Debe escribir su nombre']" />
                            <q-input dark rounded standout v-model="apellido" label="Apellido"
                                class="input-contact q-px-md  col-md-6 col-xs-12" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Debe escribirr su apellido']" />
                        </div>
                    </q-card-section>
                    <q-card-section class="row items-center q-pb-none">
                        <q-input dark rounded standout v-model="email" label="Email"
                            class="input-contact q-px-md  col-md-6 col-xs-12" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Debe escribi su email']" />
                        <q-input dark rounded standout v-model="telefono" label="Telefono"
                            class="input-contact q-px-md  col-md-6 col-xs-12" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Debe escribir su telefono']" />
                    </q-card-section>
                    <q-card-section class="row items-center">
                        <q-input dark standout v-model="mensaje" label="Mensaje" filled type="textarea" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Debe escribir su nombre']"
                            class="input-contact q-px-md  col-md-12 col-xs-12" />
                    </q-card-section>
                    <q-card-actions align="right" class="column items-center q-pb-none">
                        <q-btn color="primary btn-contact" type="submit" label="Enviar" rounded />
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
                    </q-card-actions>
                </q-card>
            </q-form>
        </div>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {

    data() {
        const myForm = ref(null)
        const $q = useQuasar()

        const nombre = ref(null)
        const apellido = ref(null)
        const email = ref(null)
        const telefono = ref(null)
        const mensaje = ref(null)

        return {
            nombre,
            apellido,
            email,
            telefono,
            mensaje,
            onSubmit() {
                myForm.value.validate().then(success => {
                    if (success) {
                        $q.notify({
                            color: 'green-4',
                            textColor: 'white',
                            icon: 'cloud_done',
                            message: 'Submitted'
                        })
                    }
                    else {
                        $q.notify({
                            color: 'red-5',
                            textColor: 'white',
                            icon: 'warning',
                            message: 'You need to accept the license and terms first'
                        })
                    }
                })
            },
            onReset() {
                nombre.value = null
                apellido.value = null
                email.value = null
                telefono.value = null
                mensaje.value = null
            }
        }
    }
};
</script>

<style scoped>
.contact-page {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../assets/fondo.png');
    background-size: cover;
    background-position: center;
}

.title-contacto {
    font-size: 3rem;
}

.bg-card {
    background: rgb(6 0 0 / 50%) !important;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(20px);
    border: 0.5px solid rgb(22 10 26 / 92%);
    border-radius: 35px !important;
    margin: 5px !important;
    width: 60vw;
    padding: 2rem;
}

.q-page {
    padding: 0 1rem 1rem 1rem;
}

.btn-contact {
    padding: 0 20%;
}

@media (max-width: 600px) {
    .input-contact {
        min-width: 80vw !important;
    }

    .title-contacto {
        font-size: 2rem;
        text-align: center;
    }

    .fomulario {
        width: 100vw !important;
    }

    .bg-card {
        background: rgb(6 0 0 / 60%) !important;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(10px);
        border-radius: 0px !important;
        width: 100vw !important;
        margin: 0px !important;
        padding: 1rem;
    }
}

@media (min-width: 1200px) {}</style>
