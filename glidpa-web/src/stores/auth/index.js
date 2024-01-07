import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { api } from 'boot/axios'
import {
    CREATE_CUSTOMER_MUTATION,
    CUSTOMER_LOGIN_MUTATION,
} from "./graphql/mutations";
import { watch } from 'vue';
export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: false,
        token: null,
        userData: JSON.parse(localStorage.getItem("userData")),
        error: null
    }),

    actions: {
        async registerUser(Data) {

            try {
                const { mutate: customerSignup } = useMutation(CREATE_CUSTOMER_MUTATION, (token) => ({
                    variables: {
                        email: Data.email,
                        user: Data.user,
                        password: Data.password,
                    },
                    operationName: "SignUp"
                }));
                const response = await customerSignup()
                if (response && response.data) {
                    console.log(response.data, 'Respuesta de la mutación');
                    this.token = response.data.customerSignup.token; // Asegúrate de que el path aquí sea correcto
                    this.userData = { ...Data, password: undefined };
                    this.isLoggedIn = true;
                }
            } catch (error) {
                console.error("Error en el registro:", error);
                this.error = error;
                throw error;
            }
        },
        async loginCustomer(credentials) {
            try {
                // Realiza una petición POST al endpoint /login
                const response = await api.post('/login',
                    JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true
                    }
                );

                if (response) {
                    console.log('Login exitoso');
                    // this.userData = response.data.userData
                    localStorage.setItem("userData", JSON.stringify(response.data.userData));
                    this.isLoggedIn = true;
                    this.userData = response.data.userData;
                    console.log('response', response);
                    // Si necesitas el token en el cliente, aquí podrías extraerlo de la respuesta
                    // const data = await response.json();
                    // this.token = data.token; // Asegúrate de que el path aquí sea correcto
                } else {
                    // Manejo de errores de respuesta
                    throw new Error('Error en el login');
                }
            } catch (error) {
                console.error("Error en el login:", error);
                throw error;
            }
        },
        async logout() {
            try {
                // Llamada al endpoint de logout
                await api.post('/logout', {}, { withCredentials: true });

                // Limpia el estado local
                this.isLoggedIn = false;
                this.userData = null;
                this.token = null;
                localStorage.removeItem('userData'); // eliminar datos del usuairo  'userData'
            } catch (error) {
                console.error('Error durante el logout:', error);
            }
        }
        // ... otras acciones como logout, etc.
    },
});
