<template>
    <q-page class="q-pa-md">
        <q-card class="bg-card no-shadow">
            <q-list class="">
                <q-expansion-item default-opened>
                    <template v-slot:header>
                        <q-item-section avatar>
                            <q-icon :color="classPlan" name="fa-solid fa-pen" />
                        </q-item-section>

                        <q-item-section>
                            Datos Empresa
                        </q-item-section>
                    </template>
                    <q-card class="card-bg no-shadow">
                        <q-card-section horizontal>
                            <q-card-section
                                class="col-lg-9 col-md-9 col-xs-12 col-sm-12 column justify-center q-pl-lg q-py-none q-my-none">
                                <div class="text-h4">Datos de la empresa</div>
                                <div class="text-h6 q-pt-xs text-admin">Por favor, completa toda la información de tu
                                    empresa.
                                    Estos datos serán utilizados por el bot de Glidpa IA para responder a las consultas de
                                    tus
                                    clientes.</div>
                            </q-card-section>
                            <q-card-section class="col-lg-3 col-md-3 col-xs-12 col-sm-12 q-pl-lg q-py-none q-my-none">
                                <div class="flex justify-end">
                                    <div class="q-mr-md" style="position: relative;">
                                        <!-- Añadido para contener el avatar y el botón -->
                                        <q-avatar v-if="company.src_logo" class="avatar-customer" size="150px">
                                            <q-img :src="company.src_logo" class="q-pa-sm" />
                                        </q-avatar>
                                        <!-- Añadido para contener el avatar y el botón -->
                                        <q-avatar v-else class="avatar-customer" size="150px">
                                            <span :class="' text-' + classPlan" style="font-size: 2.1rem;">Tu Logo</span>
                                        </q-avatar>
                                        <q-btn fab icon="add" :color="classPlan" class="btn-add" size="16px" />
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card-section>
                        <q-card-section class="q-pa-sm">
                            <q-list class="row">
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedNombre }"
                                            @focus="isInputFocusedNombre = true" @blur="isInputFocusedNombre = false" dense
                                            v-model="company.company_name" label="Nombre Empresa" color="white" />

                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedEmail }"
                                            @focus="isInputFocusedEmail = true" @blur="isInputFocusedEmail = false" dense
                                            v-model="company.company_email" label="Email Empresa" color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedTelefono }"
                                            @focus="isInputFocusedTelefono = true" @blur="isInputFocusedTelefono = false"
                                            dense v-model="company.company_phone" label="Teléfono Empresa" color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedUsuario }"
                                            @focus="isInputFocusedUsuario = true" @blur="isInputFocusedUsuario = false"
                                            dense v-model="user.user" disable readonly label="Usuario y link de la web"
                                            color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedAddress }"
                                            @focus="isInputFocusedAddress = true" @blur="isInputFocusedAddress = false"
                                            autogrow dense v-model="company.address" label="Address" color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedRegion }"
                                            @focus="isInputFocusedRegion = true" @blur="isInputFocusedRegion = false" dense
                                            v-model="company.region" label="Región" color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedCity }"
                                            @focus="isInputFocusedCity = true" @blur="isInputFocusedCity = false" dense
                                            v-model="company.city" label="City" color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedLink }"
                                            @focus="isInputFocusedLink = true" @blur="isInputFocusedLink = false" dense
                                            v-model="company.google_map_link" label="Link Google maps" color="white" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedDescripcion }"
                                            @focus="isInputFocusedDescripcion = true"
                                            @blur="isInputFocusedDescripcion = false" type="textarea" dense
                                            v-model="company.description_company" label="Descripción Empresa"
                                            color="white" />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                        <q-card-actions align="right">
                            <q-btn rounded :class="'text-capitalize  text-white q-ma-lg q-pa-lg bg-' + classPlan"
                                style="min-width: 120px">Guardar</q-btn>
                        </q-card-actions>
                    </q-card>
                </q-expansion-item>

                <q-separator color="text-admin" inset />

                <q-expansion-item>
                    <template v-slot:header>
                        <q-item-section avatar>
                            <q-icon :color="classPlan" name="fa-solid fa-clock" />
                        </q-item-section>

                        <q-item-section>
                            Horario
                        </q-item-section>
                    </template>
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos
                            corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-separator color="text-admin" inset />

                <q-expansion-item>
                    <template v-slot:header>
                        <q-item-section avatar>
                            <q-icon :color="classPlan" name="fa-solid fa-utensils" />
                        </q-item-section>

                        <q-item-section>
                            Colación
                        </q-item-section>
                    </template>
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos
                            corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </q-card>
    </q-page>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
    name: "UserProfile",
    setup() {
        const classPlan = ref(localStorage.getItem('class_plan'))

        const isInputFocusedNombre = ref(false);
        const isInputFocusedEmail = ref(false);
        const isInputFocusedTelefono = ref(false);
        const isInputFocusedUsuario = ref(false);
        const isInputFocusedAddress = ref(false);
        const isInputFocusedRegion = ref(false);
        const isInputFocusedCity = ref(false);
        const isInputFocusedLink = ref(false);
        const isInputFocusedDescripcion = ref(false);
        return {
            user: {},
            company: {},
            classPlan,
            isInputFocusedNombre,
            isInputFocusedEmail,
            isInputFocusedTelefono,
            isInputFocusedUsuario,
            isInputFocusedAddress,
            isInputFocusedRegion,
            isInputFocusedCity,
            isInputFocusedLink,
            isInputFocusedDescripcion,
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
})
</script>

<style scoped>
.btn-add {
    position: absolute;
    bottom: 0px;
    /* Ajustar según sea necesario */
    right: 0px;
    padding: 3px;
    min-height: 20px;
    min-width: 20px;
}
</style>
