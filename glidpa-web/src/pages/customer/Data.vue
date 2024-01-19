<template>
    <q-page class="q-pa-md">
        <q-card class="bg-card no-shadow">
            <q-list class="">
                <q-expansion-item  default-opened>
                    <template v-slot:header>
                        <q-item-section avatar>
                            <q-icon color="primary" name="fa-solid fa-pen" />
                        </q-item-section>

                        <q-item-section>
                            Datos Empresa
                        </q-item-section>
                    </template>
                    <q-card class="card-bg no-shadow">
                        <q-card-section horizontal>
                            <q-card-section class="col-lg-9 col-md-9 col-xs-12 col-sm-12 column justify-center q-pl-lg">
                                <div class="text-h4">Datos de la empresa</div>
                                <div class="text-h6 q-pt-xs text-admin">Por favor, completa toda la información de tu
                                    empresa.
                                    Estos datos serán utilizados por el bot de Glidpa IA para responder a las consultas de
                                    tus
                                    clientes.</div>
                            </q-card-section>
                            <q-card-section class="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                                <div class="flex justify-end">
                                    <div class="q-mr-md" style="position: relative;">
                                        <!-- Añadido para contener el avatar y el botón -->
                                        <q-avatar class="avatar-customer" size="150px">
                                            <img src="@/assets/logo.png" class="q-pa-sm">
                                        </q-avatar>
                                        <q-btn fab icon="add" color="primary" class="btn-add" size="16px" />
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card-section>
                        <q-card-section class="q-pa-sm">
                            <q-list class="row">
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary" dense v-model="company.company_name"
                                            label="Nombre Empresa" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" dense
                                            v-model="company.company_email" label="Email Empresa" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" dense
                                            v-model="company.company_phone" label="Teléfono Empresa" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" dense v-model="user.user"
                                            disable readonly label="Usuario y link de la web" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" autogrow dense
                                            v-model="company.address" label="Address" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" dense
                                            v-model="company.region" label="Región" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" dense v-model="company.city"
                                            label="City" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" dense
                                            v-model="company.google_map_link" label="Link Google maps" />
                                    </q-item-section>
                                </q-item>
                                <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <q-item-section>
                                        <q-input standout="bg-primary text-white" color="white" type="textarea" dense
                                            v-model="company.description_company" label="Descripción Empresa" />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                        <q-card-actions align="right">
                            <q-btn rounded class="text-capitalize bg-primary text-white q-ma-lg q-pa-lg"
                                style="min-width: 120px">Guardar</q-btn>
                        </q-card-actions>
                    </q-card>
                </q-expansion-item>

                <q-separator color="text-admin" inset />

                <q-expansion-item>
                    <template v-slot:header>
                        <q-item-section avatar>
                            <q-icon color="primary" name="fa-solid fa-clock" />
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
                            <q-icon color="primary" name="fa-solid fa-utensils" />
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
import { defineComponent } from 'vue'

export default defineComponent({
    name: "UserProfile",
    setup() {
        return {
            user: {},
            company: {},
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
}</style>
