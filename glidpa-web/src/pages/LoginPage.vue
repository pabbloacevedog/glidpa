<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login-back row" style="height: 100vh">
        <div class="col-5 col-md-6 col-xl-5 col-xs-12" style="border-radius: 0px !important;">
            <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideInLeft">
                <q-card flat bordered class="login-card column items-center justify-center">
                    <q-card-section>
                        <div class="text-h5 text-white column items-center justify-center cursor-pointer" @click="redirigir"
                            style="text-align: center;">
                            <q-avatar font-size="52px" size="80px">
                                <img src="@/assets/logo.png">
                            </q-avatar>
                            <div class="text-h4 text-white ">
                                Glidpa IA
                            </div>

                        </div>
                    </q-card-section>
                    <q-card-section class="step-section">
                        <div class="text-h2 texto-primary">
                            Bienvenido
                        </div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-white">
                            Por favor ingresa tu correo y contraseña para continuar
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <q-input dark rounded standout v-model="email" label="Email" class="input-login q-mb-lg">
                            <template v-slot:prepend>
                                <q-icon name="mail" />
                            </template>
                            <template v-slot:append>
                                <q-icon name="cancel" @click="email = ''" class="cursor-pointer" />
                            </template>
                        </q-input>
                        <q-input dark rounded standout v-model="password" label="Password" class="nput-login"
                            :type="isPwd ? 'password' : 'text'">
                            <template v-slot:prepend>
                                <q-icon name="key" />
                            </template>
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                    @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                    </q-card-section>
                    <q-card-section class="q-py-none q-px-none row justify-between">
                        <div class="text-left"> <a href="#reset" class="text-left text-white q-pr-xl">Olvide mi
                                contraseña</a></div>
                        <div class="text-right"><a href="#signup" class="text-right text-white q-pl-xl">No tengo cuenta</a>
                        </div>
                    </q-card-section>
                    <q-card-actions>
                        <div class="q-mt-lg column items-center">
                            <q-btn rounded color="primary" label="Iniciar Sesión" class="btn-login" />
                        </div>
                    </q-card-actions>
                    <q-card-actions>
                        <div class="column items-center">
                            <q-btn rounded color="white" label="Iniciar Sesióncon Gmail" class="btn-login-gmail text-black">
                                <q-avatar size="42px">
                                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                                </q-avatar>
                            </q-btn>
                        </div>
                    </q-card-actions>
                </q-card>
            </transition>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'LoginPage',
    data() {
        const router = useRouter();
        const redirigir = () => {
            router.push('/');
        };
        return {
            redirigir,
            password: ref(''),
            isPwd: ref(true),

            email: ref(''),
        };
    }
});
</script>

<style scoped>
.login-back {
    background-image: url('../assets/login.png');
    background-size: cover;
    background-position: center;

}

.login-card {
    background: rgb(6 0 0 / 50%) !important;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 0px !important;
    height: 100vh !important;
}

.input-login {
    min-width: 30vw !important;
}

.btn-login {
    padding: 0 8vw !important;
}

.btn-login-gmail {
    padding: 0 4vw !important;
}

@media (max-width: 600px) {
    .input-login {
        min-width: 80vw !important;
    }

    .login-card {
        background: rgb(6 0 0 / 60%) !important;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(10px);
        border-radius: 0px !important;
        height: 100vh !important;
    }
}
</style>
