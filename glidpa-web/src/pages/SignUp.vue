<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="signup-back row column items-end" style="height: 100vh">
        <div class="col-6 col-md-6 col-xl-5 col-xs-12" style="border-radius: 0px !important;">
            <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated  slideInRight">
                <q-form @submit="onSubmit" @reset="onReset" ref="loginForm">
                <q-card flat bordered
                    class="signup-card column items-center justify-center animate__animated animate__bounce">
                    <q-card-section class="q-pb-none q-mb-none">
                        <div class="text-h5 text-white column items-center justify-center cursor-pointer" @click="redirigir"
                            style="text-align: center;">
                            <q-avatar size="50px">
                                <img src="@/assets/logo.png">
                            </q-avatar>
                            <div class="text-h5 text-white ">
                                Glidpa IA
                            </div>

                        </div>
                    </q-card-section>
                    <q-card-section class="step-section">
                        <div :class="'text-' + selectedColor + ' text-h3'">
                            Bienvenido
                        </div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="text-white">
                            Por favor, selecciona un plan e introduce tu correo electrónico.
                        </div>
                        <div class="text-white">
                            A continuación, completa los datos de tu empresa para proceder.
                        </div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div v-if="$q.platform.is.mobile">
                            <q-chip dense v-for="plan in plans" :key="plan.id" @click="selectPlan(plan.id, plan.color)"
                                clickable class="cursor-pointer chip-plan" :color="plan.color" dark
                                :icon="selectedPlan === plan.id ? icon_chip : ''" :label="plan.label" />
                        </div>
                        <div v-if="!$q.platform.is.mobile">
                            <q-chip v-for="plan in plans" :key="plan.id" @click="selectPlan(plan.id, plan.color)" clickable
                                class="cursor-pointer chip-plan" :color="plan.color" dark
                                :icon="selectedPlan === plan.id ? icon_chip : ''" :label="plan.label" />
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <q-input ref="email" dark rounded standout  v-model="userData.email" label="Email" type="email" class="input-login q-mb-lg"
                                bottom-slots @blur="updateEmailVerification" autofocus dense
                                :error="showError" error-message="Ingrese un correo válido" :rules="[val => val && val.length > 0 || 'Debe escribir su email']" >
                                <template v-slot:error>
                                    Ingrese un correo válido
                                </template>
                                <template v-slot:prepend>
                                    <q-icon name="mail" />
                                </template>
                                <template v-slot:append>
                                    <q-icon name="cancel" @click="userData.email = ''" class="cursor-pointer" />
                                </template>
                            </q-input>
                        <q-input dark rounded standout dense v-model="userData.user" label="Usuario o nombre de tu empresa"
                            class="input-signup q-mb-xs" hint="Tu usuario será la dirección de tu web" maxlength="30" :rules="[val => val && val.length > 0 || 'Debe escribir un usuario']">
                            <template v-slot:prepend>
                                <q-icon :color="selectedColor" name="fa-regular fa-user" />
                            </template>
                            <template v-slot:append>
                                <q-icon :color="selectedColor" name="cancel" @click="userData.user = ''" class="cursor-pointer" />
                            </template>
                        </q-input>
                        <div :class="'text-' + selectedColor + '  q-mb-md q-ml-md url_landig'">
                            www.glidpa.com/{{ userData.user }}
                        </div>
                        <!-- <q-select  dark rounded standout dense  v-model="tipo_empresa" :options="tipos_empresas" label="Seleccione tipo de empresa" class="q-pb-lg"/> -->
                        <q-input dark rounded standout dense v-model="userData.password" label="Password" class="input-signup"
                            :type="isPwd ? 'password' : 'text'" :rules="[val => val && val.length > 0 || 'Debe escribir su password']">
                            <template v-slot:prepend>
                                <q-icon :color="selectedColor" name="key" />
                            </template>
                            <template v-slot:append>
                                <q-icon :color="selectedColor" :name="isPwd ? 'visibility_off' : 'visibility'"
                                    class="cursor-pointer" @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                    </q-card-section>
                    <q-card-section class="q-py-none">
                        <a href="#login" class="nav-link text-white">Ya tengo cuenta</a>
                    </q-card-section>
                    <q-card-actions>
                        <div class="q-mt-lg column items-center">
                            <q-btn rounded :color="selectedColor" label="Registrarse" class="btn-signup" type="submit" />
                        </div>
                    </q-card-actions>
                </q-card>
            </q-form>
            </transition>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useAuthStore } from 'stores/auth';
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
    props: {
        plan_id: {
            type: Number,
            default: 1
        }
    },
    name: 'SignUp',
    setup(props) {
        const loginForm = ref(null)
        const showError = ref(false)
        const emailValid = ref(false)
        const $q = useQuasar()
        const router = useRouter();
        const redirigir = () => {
            router.push('/');
        };
        const isPwd = ref(true)
        const authStore = useAuthStore();
        console.log('authStore',authStore);
        const userData = ref({
            user: '',
            email: '',
            password: '',
        });

        const register = async () => {
            try {
                await authStore.registerUser(userData.value);
                router.push('/dashboard');
                var message = 'Bienvenido ' + userData.value.email
                $q.notify({
                    color: 'positive',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: message
                })
            } catch (error) {
                var message = error.message.replace('GraphQL error: ', '')
                $q.notify({
                    color: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: message,
                })
            }
        };
        const updateEmailVerification = () => {
            // eslint-disable-next-line
            let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            let valid = reg.test(userData.value.email)

            if (valid) {
                console.log('email is valid')
                emailValid.value = true
                showError.value = false
            } else {
                console.log('email invalid')
                emailValid.value = false
                showError.value = true
            }
        }
        const selectedPlan = ref(1);
        const selectedColor = ref('profesional'); // Color inicial por defecto
        const icon_chip = 'fa-solid fa-circle-check';
        const plans = ref([
            { id: 0, label: 'Básico', color: 'basico' },
            { id: 1, label: 'Profesional', color: 'profesional' },
            { id: 2, label: 'Premium', color: 'premium' },
            { id: 3, label: 'Platinum', color: 'platinum' },
        ]);
        const idPlan = ref(props.plan_id);
        const selectPlan = (id, color) => {
            selectedPlan.value = id;
            selectedColor.value = color; // Actualizar el color seleccionado
        };
        onMounted(() => {
            if (idPlan.value) {
                const plan = plans.value.find(p => p.id === Number(idPlan.value));
                if (plan) {
                    selectPlan(plan.id, plan.color);
                }
            }
        });
        return {
            redirigir,
            isPwd,
            selectPlan,
            selectedPlan,
            selectedColor,
            icon_chip,
            plans,
            userData,
            register,
            onSubmit() {
                console.log('pass',userData.value.password)
                    if (emailValid.value && userData.value.password) {
                        register()
                    }
                    else {
                        $q.notify({
                            color: 'negative',
                            textColor: 'white',
                            icon: 'warning',
                            message: 'Complete ambos campos'
                        })
                    }

            },
            onReset() {
                nombre.value = null
                apellido.value = null
                email.value = null
                telefono.value = null
                mensaje.value = null
            },
            updateEmailVerification,
            showError,
            emailValid,
            loginForm
        };
    }
});
</script>

<style scoped>
.signup-back {
    background-image: url('../assets/signup.png');
    background-size: cover;
    background-position: center;

}

.signup-card {
    background: rgb(6 0 0 / 50%) !important;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 0px !important;
    height: 100vh !important;
    min-width: 50vw !important;
}

.input-signup {
    min-width: 30vw !important;
}

.url_landig {
    font-size: 1.1rem;
}

.btn-signup {
    padding: 0 8vw !important;
}

.btn-signup-gmail {
    padding: 0 4vw !important;
}

@media (max-width: 600px) {
    .input-signup {
        min-width: 80vw !important;
    }

    .signup-card {
        background: rgb(6 0 0 / 60%) !important;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(10px);
        border-radius: 0px !important;
        height: 100vh !important;
        min-width: 100vw !important;
    }

    .url_landig {
        font-size: 1rem;
    }
}

@media (min-width: 1201px) {
    .url_landig {
        font-size: 1.5rem;
    }
}
</style>
