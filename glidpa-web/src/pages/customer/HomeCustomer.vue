<template>
    <div class="column justify-center">
        <p class="texto-primary">User: {{ userData.user }}</p>
        <p class="texto-primary">Email: {{ userData.email }}</p>
        <!-- ... otros datos del usuario -->
    </div>
</template>

<script>
import { useAuthStore } from 'stores/auth';

export default {
    setup() {
        const authStore = useAuthStore();

        return {
            userData: authStore.userData
        };
    },
};
</script>
