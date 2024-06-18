import { defineStore } from "pinia";
import { watchEffect, computed } from 'vue';
import { useQuery, useLazyQuery, useMutation } from "@vue/apollo-composable";
import { COMPANY_QUERY, UPDATE_COMPANY_MUTATION } from "./graphql/mutations";
import { apolloClient } from '../../boot/graphql'; // Asegúrate de ajustar la ruta
export const useCompanyStore = defineStore("company", {
    state: () => ({
        companyData: null,
        error: null
    }),

    actions: {
        async fetchCompany(companyId) {
            try {
                const response = await apolloClient.query({
                    query: COMPANY_QUERY,
                    variables: { company_id: companyId },
                });

                if (response.data) {
                    this.companyData = response.data.company;
                }
            } catch (error) {
                console.error("Error en fetchCompany:", error);
                this.error = error;
            }
        },
        // async fetchCompany(companyId) {
        //     try {
        //         const { result, loading } = useQuery(COMPANY_QUERY, { company_id: companyId });
        //         if (loading) {
        //             this.companyData = computed(() => result.value?.company ?? [])
        //         }
        //         // const response = await load() || refetch()
        //         // await onResult(queryResult => {
        //         //     console.log(queryResult.data.company)
        //         //     console.log(queryResult.loading)
        //         //     console.log(queryResult.networkStatus)
        //         //     console.log(queryResult.stale)
        //         //     this.companyData = queryResult.data.company;
        //         // })
        //         // console.log('response: ' + response);
        //         watch([result, loading], () => {
        //             if (result.value) {
        //                 this.companyData = result.value.company;
        //             }
        //             if (error.value) {
        //                 console.error("Error al obtener datos de la empresa:", error.value);
        //                 this.error = error.value;
        //             }
        //         });
        //         // this.companyData = response.value.company;
        //         watchEffect(() => {
        //             if (!loading.value && result.value) {
        //                 this.companyData = result.value.company;
        //             }
        //         });
        //     } catch (error) {
        //         console.error("Error en fetchCompany:", error);
        //         this.error = error;
        //     }
        // },
        async updateCompany(updatedCompanyData) {
            try {
                const { mutate: updateCompany } = useMutation(UPDATE_COMPANY_MUTATION, () => ({
                    variables: { ...updatedCompanyData },
                    operationName: "UpdateCompany"
                }));

                const response = await updateCompany();
                if (response && response.data) {
                    console.log("Datos de la empresa actualizados con éxito");
                    this.companyData = { ...this.companyData, ...updatedCompanyData };
                }
            } catch (error) {
                console.error("Error al actualizar datos de la empresa:", error);
                this.error = error;
                throw error;
            }
        }
    }
});
