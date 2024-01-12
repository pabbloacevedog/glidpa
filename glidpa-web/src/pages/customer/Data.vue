<template>
    <q-page class="q-px-lg">
        <div class="row q-col-gutter-sm">
            <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                <q-card class="card-bg text-white no-shadow" bordered>
                    <q-card-section horizontal>
                        <q-card-section class="col-lg-7 col-md-7 col-xs-12 col-sm-12 column justify-center q-pl-lg">
                            <div class="text-h6">Datos Empresa</div>
                            <div class="text-subtitle2">Completa los datos de tu empresa</div>
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section class="col-lg-5 col-md-5 col-xs-12 col-sm-12">
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section side>
                                    <q-avatar size="100px">
                                        <img src="@/assets/logo.png">
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                    <q-btn label="Agregar Logo" class="text-capitalize" rounded color="primary"
                                        style="max-width: 120px"></q-btn>
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                    </q-card-section>
                    <q-card-section class="q-pa-sm">
                        <q-list class="row">
                            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="company.company_name"
                                        label="Nombre Empresa" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="company.company_email"
                                        label="Email Empresa" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="company.company_phone"
                                        label="Teléfono Empresa" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.user" disable readonly
                                        label="Usuario y link de la web" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" autogrow dense v-model="company.address"
                                        label="Address" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="company.region"
                                        label="Región" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="company.city" label="City" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="company.google_map_link"
                                        label="Link Google maps" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" type="textarea" dense v-model="company.description_company"
                                        label="Descripción Empresa" />
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn rounded class="text-capitalize bg-primary text-white q-ma-lg q-pa-lg">Guardar</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">

                <q-card class="card-bg text-white no-shadow" bordered>
                    <q-card-section class="col-lg-7 col-md-7 col-xs-12 col-sm-12 column justify-center q-pl-lg">
                            <div class="text-h6">Datos Usuario</div>
                            <div class="text-subtitle2">Completa tus datos personales</div>
                        </q-card-section>
                    <q-card-section>
                        <q-list class="row">
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.name"
                                        label="Nombre" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.email"
                                        label="Email" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.rut_user"
                                        label="Rut" />
                                </q-item-section>
                            </q-item>
                            <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <q-item-section>
                                    <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.personal_phone"
                                        label="Celular" />
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card>
            </div>


        </div>
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

</style>
