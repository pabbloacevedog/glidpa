import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { setLocalStorage } from '@utils/encriptLocal'
import { api } from 'boot/axios'
import { CREATE_CUSTOMER_MUTATION } from "./graphql/mutations";
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
                        plan_id: Data.plan_id
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
                    // localStorage.setItem("userData", JSON.stringify(response.data.userData));
                    localStorage.setItem("email", JSON.stringify(response.data.userData.email));
                    localStorage.setItem("name", JSON.stringify(response.data.userData.name));
                    localStorage.setItem("user", JSON.stringify(response.data.userData.user));
                    localStorage.setItem("class_plan", response.data.userData.Company.Plan.class);
                    this.isLoggedIn = true;
                    this.userData = response.data.userData;
                    setLocalStorage('IDC',response.data.userData.Company.company_id)
                    setLocalStorage('IDU',response.data.userData.user_id)
                    console.log('response', response);
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
                localStorage.removeItem('email'); // eliminar datos del email
                localStorage.removeItem('name'); // eliminar datos del name
                localStorage.removeItem('user'); // eliminar datos del user
                localStorage.removeItem('IDC'); // eliminar datos del company_id
                localStorage.removeItem('IDU'); // eliminar datos del user_id ç
                localStorage.removeItem("class_plan");
            } catch (error) {
                console.error('Error durante el logout:', error);
            }
        }
        // ... otras acciones como logout, etc.
    },
});
