<template>
    <div class="fit row wrap justify-start items-start content-start text-admin " style="overflow: hidden;">
        <div class="col col-md-1 self-start col-xs-12" style="overflow: auto;">
            <q-card class="no-border-radius bg-black card-border">
                <q-card-section class="header-editor ">
                    <div class="text-header">Secciones</div>
                </q-card-section>
            </q-card>
            <q-card class="no-border-radius bg-black card-border card-size">
                <q-card-section class="q-px-none">
                    <q-list bordered separator>
                        <q-item clickable v-ripple>
                            <q-item-section>Toolbar</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Sección 1</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Sección 2</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Sección 3</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Sección 4</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Contacto</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Servicios</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Galería</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>Footer</q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>
        <div class="col col-md-2 bg-black col-xs-12  bg-black" style="overflow: auto;">
            <q-card class="no-border-radius bg-black card-border">
                <q-card-section class="header-editor ">
                    <div class="text-header"> Muestras </div>
                </q-card-section>
            </q-card>
            <q-card class="no-border-radius bg-black card-border card-size">
                <q-card-section class="q-px-none">
                    <q-list bordered separator>
                        <q-item clickable v-ripple>
                            <q-img :src="url" spinner-color="red" style="height: 140px; max-width: 150px" />
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-img :src="url" spinner-color="red" style="height: 140px; max-width: 150px" />
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-img :src="url" spinner-color="red" style="height: 140px; max-width: 150px" />
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-img :src="url" spinner-color="red" style="height: 140px; max-width: 150px" />
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>
        <div class="col col-md-6 bg-black col-xs-12" style="overflow: auto;">
            <q-card class="no-border-radius bg-black  card-border">
                <q-card-section class="header-editor ">
                    <div class="text-header">Visor</div>
                </q-card-section>
            </q-card>
            <q-card class="no-border-radius bg-black card-border  card-size">
                <q-card-section class="header-editor">
                    <div class="text-header"><q-img :src="url" spinner-color="red" style="height: 340px; max-width: 550px" /></div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col col-md-3 bg-black col-xs-12" style="overflow: auto;">
            <q-card class="no-border-radius bg-black  card-border ">
                <q-card-section class="header-editor">
                    <div class="text-header">Editor</div>
                </q-card-section>
            </q-card>
            <q-card class="no-border-radius bg-black card-border   card-size">
                <q-card-section>
                    <q-list class="row">
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-uploader style="max-width: 200px" url="http://localhost:4444/upload"
                                    label="Filtered (png only)" multiple :filter="checkFileType" @rejected="onRejected" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.title" label="Título" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input dark standout="bg-primary text-white" color="white" type="textarea" dense v-model="user.description"
                                    label="Descripción" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input dark standout="bg-primary text-white" color="white" dense v-model="user.button" label="Button" />
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>>
<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
export default defineComponent({
    name: "LandingPage",
    setup() {
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
        return {
            user: {},
            url,
            checkFileSize,
            checkFileType,
            onRejected
        }
    }
})
</script>

<style scoped>
.header-editor {
    border: 1px solid rgba(0, 0, 0, 0.8) !important;
}

.text-header {
    font-size: 0.9rem;
    font-weight: bold;
}
.card-border {
    background-color: #000;
    border-top: 1px solid #373737;
    border-right: 1px solid #373737;
    border-bottom: 1px solid #373737;
    border-radius: 30px;
}
.card-size{
    min-height: 92vh;
}
</style>
