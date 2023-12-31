import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import {
    CREATE_CUSTOMER_MUTATION,
    CUSTOMER_LOGIN_MUTATION,
} from "./graphql/mutations";
import { watch } from 'vue';
export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: false,
        token: null,
        userData: null,
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
                throw error;
            }
        },
        async loginCustomer(credentials) {
            try {
                const { mutate: customerLogin } = useMutation(CUSTOMER_LOGIN_MUTATION, (token) => ({
                    variables: {
                        email: credentials.email,
                        password: credentials.password,
                    },
                    operationName: "Login"
                }));
                const response = await customerLogin()
                if (response && response.data) {
                    console.log(response.data, 'Respuesta de la mutación');
                    this.token = response.data.customerLogin.token; // Asegúrate de que el path aquí sea correcto
                    this.userData = { ...credentials, password: undefined };
                    this.isLoggedIn = true;
                }
            } catch (error) {
                console.error("Error en el registro:", error);
                throw error;
            }

        },
        // ... otras acciones como logout, etc.
    },
});
