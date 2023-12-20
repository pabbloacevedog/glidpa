<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="signup-back row column items-end" style="height: 100vh">
        <div class="col-6 col-md-6 col-xl-5 col-xs-12" style="border-radius: 0px !important;">
            <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated  slideInRight">
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
                        <q-input dark rounded standout dense v-model="email" label="Email" class="input-signup q-mb-lg">
                            <template v-slot:prepend>
                                <q-icon :color="selectedColor" name="mail" />
                            </template>
                            <template v-slot:append>
                                <q-icon :color="selectedColor" name="cancel" @click="email = ''" class="cursor-pointer" />
                            </template>
                        </q-input>
                        <q-input dark rounded standout dense v-model="usuario" label="Usuario o nombre de tu empresa"
                            class="input-signup q-mb-xs" hint="Tu usuario será la dirección de tu web" maxlength="30">
                            <template v-slot:prepend>
                                <q-icon :color="selectedColor" name="fa-regular fa-user" />
                            </template>
                            <template v-slot:append>
                                <q-icon :color="selectedColor" name="cancel" @click="usuario = ''" class="cursor-pointer" />
                            </template>
                        </q-input>
                        <div :class="'text-' + selectedColor + '  q-mb-md q-ml-md url_landig'">
                            www.glidpa.com/{{ usuario }}
                        </div>
                        <q-select  dark rounded standout dense  v-model="tipo_empresa" :options="tipos_empresas" label="Seleccione tipo de empresa" class="q-pb-lg"/>
                        <q-input dark rounded standout dense v-model="password" label="Password" class="input-signup"
                            :type="isPwd ? 'password' : 'text'">
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
                            <q-btn rounded :color="selectedColor" label="Registrarse" class="btn-signup" />
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
        const isPwd = ref(true)
        const tipo_empresa = ref(null)
        const email = ref('')
        const usuario = ref('')
        const password = ref('')
        const selectedPlan = ref(2);
        const selectedColor = ref('profesional'); // Color inicial por defecto
        const icon_chip = 'fa-solid fa-circle-check';
        const plans = ref([
            { id: 1, label: 'Básico', color: 'basico' },
            { id: 2, label: 'Profesional', color: 'profesional' },
            { id: 3, label: 'Premium', color: 'premium' },
            { id: 4, label: 'Platinum', color: 'platinum' },
        ]);
        const tipos_empresas = ref([
            {
                label: 'Google',
                value: 'Google',
                description: 'Search engine',
                category: '1'
            },
            {
                label: 'Facebook',
                value: 'Facebook',
                description: 'Social media',
                category: '1'
            },
            {
                label: 'Twitter',
                value: 'Twitter',
                description: 'Quick updates',
                category: '2'
            },
            {
                label: 'Apple',
                value: 'Apple',
                description: 'iStuff',
                category: '2'
            },
            {
                label: 'Oracle',
                value: 'Oracle',
                disable: true,
                description: 'Databases',
                category: '3'
            }
        ])
        const selectPlan = (id, color) => {
            selectedPlan.value = id;
            selectedColor.value = color; // Actualizar el color seleccionado
        };

        return {
            redirigir,
            email,
            usuario,
            password,
            isPwd,
            selectPlan,
            selectedPlan,
            selectedColor,
            icon_chip,
            plans,
            tipos_empresas,
            tipo_empresa
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
.url_landig{
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
    .url_landig{
    font-size: 1rem;
}
}
@media (min-width: 1201px) {
    .url_landig{
    font-size: 1.5rem;
}
}
</style>
