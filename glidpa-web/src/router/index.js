import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import { useAuthStore } from 'src/stores/auth';
import { api } from 'boot/axios'
// import routes from './routes'
import NavBarWeb from './web/NavBarWeb';
import Error404 from './web/NotFound';
import Login from './auth/Login.js';
import SignUp from './auth/SignUp.js';
//customers
import NavBarCustomer from './customer/NavBarCustomer';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
const auxiliar = [];
const routes = auxiliar.concat(
    //aqui se agregan las rutas de los archivos o paginas del sistema
    NavBarWeb,
    Error404,
    Login,
    SignUp,
    //customer
    NavBarCustomer,

);
export default route(function (/* { store, ssrContext } */) {
    const createHistory = process.env.SERVER
        ? createMemoryHistory
        : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

    const router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,
        history: createHistory(process.env.VUE_ROUTER_BASE)
    });

    router.beforeEach(async (to, from, next) => {
        const authStore = useAuthStore();

        // Asegúrate de que el estado de autenticación esté actualizado
        if (!authStore.isLoggedIn) {
            try {
                const response = await api.get('/auth/status', { withCredentials: true });
                if (response.data.isLoggedIn) {
                    authStore.isLoggedIn = true;
                } else {
                    if (to.matched.some(record => record.meta.requiresAuth)) {
                        return next('/login');
                    }
                }
            } catch (error) {
                console.error('Error al verificar el estado de la sesión:', error);
                if (to.matched.some(record => record.meta.requiresAuth)) {
                    return next('/login');
                }
            }
        }

        if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isLoggedIn) {
            return next('/login');
        } else if (to.matched.some(record => record.meta.guestOnly) && authStore.isLoggedIn) {
            return next('/dashboard');
        } else {
            next();
        }
    });

    return router;
})
