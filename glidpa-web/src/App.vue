<template>
    <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { onMounted } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { api } from 'boot/axios'; // Asegúrate de que el path sea correcto

export default defineComponent({
    name: 'App',
    setup() {
        const authStore = useAuthStore();
        async function handleLogout() {
            await authStore.logout();
        }
        onMounted(() => {
            api.get('/auth/status', { withCredentials: true })
                .then(response => {
                    if (response.data.isLoggedIn) {
                        console.log(response.data.isLoggedIn, 'logged in')
                        authStore.isLoggedIn = response.data.isLoggedIn;
                        // Configura cualquier otro estado necesario
                    }
                    else{
                        handleLogout()
                    }
                })
                .catch(error => {
                    console.error('Error al verificar el estado de la sesión:', error);
                    handleLogout()
                    // router.push('/login');
                });
        });
    }
})
</script>
