<template>
    <q-footer bordered class="bg-black text-white" style="margin-bottom: 3%;">
        <div class="row " style="margin-top: 2%; min-height: 120px;padding: 0 10%;">
            <div class="col-3 col-sm-3 links">
                <div class="row column ">
                    <a href="#pricing" class="nav-link texto-primary">Planes</a>
                </div>
                <div class="row column ">
                    <a href="#pricing" class="nav-link texto-primary">Team</a>
                </div>
                <div class="row column ">
                    <a href="#login" class="nav-link texto-primary">Inicia Sesión</a>
                </div>
            </div>
            <div class="col-3 col-sm-3 links">
                <div class="row column ">
                    <a href="#about-us" class="nav-link texto-primary">Sobre Nosotros</a>
                </div>
                <div class="row column ">
                    <div class="col-3 col-sm-3 links"><a href="#contact" class="nav-link texto-primary">Como funciona</a></div>
                </div>
                <div class="row column ">
                    <div class="col-3 col-sm-3 links"><a href="#signup" class="nav-link texto-primary">Únete</a></div>
                </div>
            </div>
            <div class="col-3 col-sm-3 links">
                <div class="row column ">
                    <a href="#contact" class="nav-link texto-primary">Contacto</a>
                </div>
                <div class="row column ">
                    <div class="col-3 col-sm-3 links"><a href="#contact" class="nav-link texto-primary">Como funciona</a></div>
                </div>
            </div>
            <div class="col-3 col-sm-3 links">
                <div class="row column ">
                    <div class="col-3 col-sm-3 links"><a href="#contact" class="nav-link texto-primary"><i class="fa-regular fa-envelope" style="margin-right: 5px;"></i>pablo.acevedo.g@gmail.com</a></div>
                </div>
                <div class="row column ">
                    <div class="col-3 col-sm-3 links"><a href="#contact" class="nav-link texto-primary"><i class="fa-solid fa-briefcase" style="margin-right: 5px;"></i>Tabaja con nosotros</a></div>
                </div>
            </div>
        </div>
        <q-separator inset color="primary"/>
        <q-tabs no-caps class="text-white q-mt-lg" v-model="tab">
            <q-tab class="text-white icons" name="facebook" icon="fa-brands fa-facebook" />
            <q-tab class="text-white icons" name="instagram" icon="fa-brands fa-instagram" />
            <q-tab class="text-white icons" name="whatsapp" icon="fa-brands fa-whatsapp" />
            <q-tab class="text-white icons" name="mail" icon="fa-regular fa-envelope" />
            <q-tab class="text-white icons" name="phone" icon="fa-solid fa-phone" />
        </q-tabs>
    </q-footer>
</template>

<script>
export default {
    name: 'MyFooter'
    // any additional script logic here
}
</script>

<style scoped>

</style>
