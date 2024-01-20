<template>
    <q-page class="q-pa-md row ">
        <q-card flat class=" col col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-none message-space">
            <div class="message-placeholder">
                <q-card-section class="col-lg-7 col-md-7 col-xs-12 col-sm-12 column justify-center q-pl-lg">
                    <div class="text-h6">Landing Page</div>
                    <div class="text-subtitle2 text-admin  q-pt-xs">Crea y edita tu página web utlizando los ejemplos
                        prediseñados</div>
                </q-card-section>
                <q-card-section>
                    <q-list class="row">
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-uploader :color="classPlan" :class="'bg-' + classPlan" style="max-width: 200px" url="http://localhost:4444/upload"
                                    label="Imagen sección" multiple :filter="checkFileType" @rejected="onRejected" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedTitulo }"
                                            @focus="isInputFocusedTitulo = true" @blur="isInputFocusedTitulo = false" dense v-model="user.title" color="white"
                                    label="Título" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedDescripcion }"
                                            @focus="isInputFocusedDescripcion = true" @blur="isInputFocusedDescripcion = false" dense type="textarea" color="white"
                                    v-model="user.description" label="Descripción" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedTituloBtn }"
                                            @focus="isInputFocusedTituloBtn = true" @blur="isInputFocusedTituloBtn = false" dense v-model="user.button" color="white"
                                    label="Titulo botón" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input filled :class="{ ['bg-' + classPlan]: isInputFocusedLinkBtn }"
                                            @focus="isInputFocusedLinkBtn = true" @blur="isInputFocusedLinkBtn = false" dense v-model="user.button" color="white"
                                    label="Link botón" />
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
                <q-card-actions align="right" class="row q-py-none">
                    <q-btn rounded :class="'text-capitalize  text-white q-ma-lg q-pa-lg bg-' + classPlan"
                        style="min-width: 120px">Guardar</q-btn>
                </q-card-actions>
            </div>
        </q-card>
        <q-card class="list-border q-ml-md no-shadow col ">
            <div>
                <q-tabs v-model="tab" align="center" inline-label :color="classPlan" dense narrow-indicator >
                    <q-tab name="1" @click="refresh" :color="classPlan"> <span :class="' text-' + classPlan">Toolbar</span></q-tab>
                    <q-tab name="2" @click="refresh"><span :class="' text-' + classPlan">Home</span></q-tab>
                    <q-tab name="3" @click="refresh"><span :class="' text-' + classPlan">Sección 1</span></q-tab>
                    <q-tab name="4" @click="refresh"><span :class="' text-' + classPlan">Sección 2</span></q-tab>
                    <q-tab name="5" @click="refresh"><span :class="' text-' + classPlan">Sección 3</span></q-tab>
                    <q-tab name="6" @click="refresh"><span :class="' text-' + classPlan">Sección 4</span></q-tab>
                    <q-tab name="7" @click="refresh"><span :class="' text-' + classPlan">Contacto</span></q-tab>
                    <q-tab name="8" @click="refresh"><span :class="' text-' + classPlan">Servicios</span></q-tab>
                    <q-tab name="9" @click="refresh"><span :class="' text-' + classPlan">Galería</span></q-tab>
                    <q-tab name="10" @click="refresh"><span :class="' text-' + classPlan">Footer</span></q-tab>
                </q-tabs>
                <div class="q-gutter-y-sm">
                    <q-tab-panels v-model="tab" animated transition-prev="fade" transition-next="fade"
                        class="text-center tab-panel-img q-pa-none">
                        <q-tab-panel name="1">
                            <q-tabs v-model="tab_toolbar" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="11" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="12" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_toolbar" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="11">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" /></div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="12">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" /></div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="2">
                            <q-tabs v-model="tab_home" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="21" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="22" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_home" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="21">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" /></div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="22">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" /></div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="3">
                            <q-tabs v-model="tab_s1" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="31" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="32" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_s1" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="31">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="32">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="4">
                            <q-tabs v-model="tab_s2" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="41" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="42" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_s2" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="41">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="42">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="5">
                            <q-tabs v-model="tab_s3" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="51" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="52" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_s3" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="51">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="52">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="6">
                            <q-tabs v-model="tab_s4" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="61" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="62" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_s4" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="61">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="62">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="7">
                            <q-tabs v-model="tab_contacto" align="center" inline-label class="" dense narrow-indicator
                                :class="'text-' + classPlan">
                                <q-tab name="71" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                                <q-tab name="72" class="tab-img"><q-img :src="url" spinner-color="red"
                                        style="height: 100px; max-width: 120px"></q-img></q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab_contacto" animated transition-prev="fade" transition-next="fade"
                                class="text-center">
                                <q-tab-panel name="71">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                                <q-tab-panel name="72">
                                    <q-card class="no-shadow ">
                                        <q-card-section class="q-pa-none ">
                                            <div class="text-header"><q-img :src="url" spinner-color="red"
                                                    style="height: auto; max-width: 100%" />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-tab-panel>
                        <q-tab-panel name="8">
                        </q-tab-panel>
                        <q-tab-panel name="9">
                        </q-tab-panel>
                        <q-tab-panel name="10">
                        </q-tab-panel>
                    </q-tab-panels>
                </div>
            </div>

        </q-card>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
export default defineComponent({
    name: "LandingPage",
    setup() {
        const classPlan = ref(localStorage.getItem('class_plan'))
        const url = ref('https://picsum.photos/500/300')
        const $q = useQuasar()

        function checkFileSize(files) {
            return files.filter(file => file.size < 2048)
        }

        function checkFileType(files) {
            return files.filter(file => file.type === 'image/png')
        }

        function onRejected(rejectedEntries) {
            // Notify plugin needs to be installed
            // https://quasar.dev/quasar-plugins/notify#Installation
            $q.notify({
                type: 'negative',
                message: `${rejectedEntries.length} file(s) did not pass validation constraints`
            })
        }
        const isInputFocusedTitulo = ref(false);
        const isInputFocusedTituloBtn = ref(false);
        const isInputFocusedLinkBtn = ref(false);
        const isInputFocusedDescripcion = ref(false);
        return {
            user: {},
            classPlan,
            isInputFocusedTitulo,
            isInputFocusedTituloBtn,
            isInputFocusedLinkBtn,
            isInputFocusedDescripcion,
            url,
            checkFileSize,
            checkFileType,
            onRejected,
            refresh() {
                url.value = 'https://picsum.photos/500/300?t=' + Math.random()
            },
            tab: ref('1'),
            tab_toolbar: ref('11'),
            tab_home: ref('21'),
            tab_s1: ref('31'),
            tab_s2: ref('41'),
            tab_s3: ref('51'),
            tab_s4: ref('61'),
            tab_contacto: ref('71'),


        }
    }
})
</script>
<style scoped>
.scrollable-list {
    max-height: 70vh;
    /* Ajusta esto según las necesidades de tu diseño */
    overflow-y: auto;
}

.spacer {
    padding: 0px 16px
}

.spacer-message {
    padding: 26px 36px
}

.min-width-list {
    min-width: 345px !important;
}

.message-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}

@media (max-width: 600px) {
    .list-border {
        margin: 20px 2px
    }
}
</style>
