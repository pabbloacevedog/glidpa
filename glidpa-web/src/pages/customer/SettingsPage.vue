
<template>
    <q-page class="row q-pa-md">

        <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12 ">
            <q-card class="no-shadow">
                <q-card-section class="col-lg-7 col-md-7 col-xs-12 col-sm-12 column justify-center q-pl-lg">
                    <div class="text-h6">Datos Usuario</div>
                    <div class="text-subtitle2 text-admin  q-pt-xs">Completa tus datos personales</div>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <q-list class="row">
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedNombre }"
                                            @focus="isInputFocusedNombre = true" @blur="isInputFocusedNombre = false" dense v-model="user.name"
                                    label="Nombre" color="white"/>
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedEmail }"
                                            @focus="isInputFocusedEmail = true" @blur="isInputFocusedEmail = false" dense v-model="user.email"
                                    label="Email" color="white"/>
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedRut }"
                                            @focus="isInputFocusedRut = true" @blur="isInputFocusedRut = false"  dense v-model="user.rut_user"
                                    label="Rut" color="white"/>
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input  filled :class="{ ['bg-' + classPlan]: isInputFocusedTelefono }"
                                            @focus="isInputFocusedTelefono = true" @blur="isInputFocusedTelefono = false" dense v-model="user.personal_phone"
                                    label="Celular" color="white"/>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
                <q-card-actions align="right" class="row q-py-none">
                    <q-btn rounded :class="'text-capitalize  text-white q-ma-lg q-pa-lg bg-' + classPlan"
                        style="min-width: 120px">Guardar</q-btn>
                </q-card-actions>
            </q-card>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12  change-pass">
            <q-card class="no-shadow">
                <q-card-section class="col-lg-7 col-md-7 col-xs-12 col-sm-12 column justify-center q-pl-lg">
                    <div class="text-h6">Cambiar Password</div>
                    <div class="text-subtitle2 text-admin q-pt-xs">Actualiza tu contraseña</div>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <q-list class="row">
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedCurrentPass }"
                                            @focus="isInputFocusedCurrentPass = true" @blur="isInputFocusedCurrentPass = false" dense
                                    v-model="password_dict.current_password" label="Password actual" color="white"/>
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedNewPass }"
                                            @focus="isInputFocusedNewPass = true" @blur="isInputFocusedNewPass = false"  dense
                                    v-model="password_dict.new_password" label="Password nueva" color="white"/>
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedConfirmPass }"
                                            @focus="isInputFocusedConfirmPass = true" @blur="isInputFocusedConfirmPass = false"  dense
                                    v-model="password_dict.confirm_new_password" label="Confirmar password nueva" color="white"/>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
                <q-card-actions align="right" class="row q-py-none">
                    <q-btn rounded :class="'text-capitalize  text-white q-ma-lg q-pa-lg bg-' + classPlan"
                        style="min-width: 120px">Guardar</q-btn>
                </q-card-actions>
            </q-card>
        </div>
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 q-py-md">
            <q-card class="no-shadow">
                <q-card-section class="row q-pa-none">
                    <q-card-section class="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex flex-center flex-column text-center  ">
                        <q-list class="row">
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-none">
                                <q-item-section>
                                    <div class="text-h6">Link de tu Web</div>
                                    <div class="text-subtitle2 text-admin q-pt-xs">Tu Usuario tambíen es el link de tu web</div>
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-lg">
                                <q-item-section>
                                    <div class="">
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedUsuario }"
                                            @focus="isInputFocusedUsuario = true" @blur="isInputFocusedUsuario = false"  dense v-model="user.user"
                                            disable readonly label="Usuario y link de la web" color="white"/>
                                    </div>
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <div  :class="' col-lg-6 col-md-6 text-' + classPlan">
                                        www.glidpa.com/{{ user.user }}
                                    </div>
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-xl">
                                <q-item-section>
                                    <div class="">
                                        <q-btn rounded :class="'text-capitalize  text-white bg-' + classPlan"
                                            style="min-width: 120px">Actualizar</q-btn>
                                    </div>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-card-section class="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex flex-center flex-column text-center">
                        <q-list class="row">
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-none">
                                <q-item-section>
                                    <div class="text-h5">
                                        Comparte tu QR
                                    </div>
                                    <div class="text-admin  q-pt-xs">
                                        en tus redes sociales para atraer más clientes
                                    </div>
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <div class="">
                                        <q-avatar class="avatar-customer" size="150px" square>
                                            <img src="@/assets/qr.jpeg" class="q-pa-sm">
                                        </q-avatar>
                                    </div>
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <div class="">
                                        <q-btn rounded :class="'text-capitalize  text-white bg-' + classPlan"
                                            style="min-width: 120px">
                                            <q-icon left  name="fa-solid fa-share-nodes" />
                                            <div>Compartir</div>
                                        </q-btn>
                                    </div>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "SettingsPage",
    setup() {
        const classPlan = ref(localStorage.getItem('class_plan'))
        const isInputFocusedNombre = ref(false);
        const isInputFocusedEmail = ref(false);
        const isInputFocusedTelefono = ref(false);
        const isInputFocusedRut = ref(false);
        const isInputFocusedUsuario = ref(false);
        const isInputFocusedCurrentPass = ref(false);
        const isInputFocusedNewPass = ref(false);
        const isInputFocusedConfirmPass = ref(false);
        return {
            isInputFocusedNombre,
            isInputFocusedEmail,
            isInputFocusedTelefono,
            isInputFocusedUsuario,
            isInputFocusedRut,
            isInputFocusedCurrentPass,
            isInputFocusedNewPass,
            isInputFocusedConfirmPass,
            password_dict: {},
            company: {},
            user: {},
            classPlan,
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
})
</script>

<style scoped>
@media (max-width: 1200px) {
    .change-pass {
        padding-left: 20px;
    }
}

@media (min-width: 1201px) {
    .change-pass {
        padding-left: 20px;
    }
}

@media (max-width: 600px) {
    .change-pass {
        padding-top: 20px;
        padding-left: 0px;
    }
}
</style>
