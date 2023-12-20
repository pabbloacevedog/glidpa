// globalProperties.js
import { reactive } from 'vue';

export const globalProperties = reactive({
    avatar_default: '../../statics/user.png',
    idioma: 'es-es',
    dark: false,
    glass: true,
    usuario_id: '',
    avatar: '',
    nombre: '',
    tipo_usuario: ''
});

// Si necesitas funciones, puedes añadir métodos a este objeto reactivo
export default ({ app }) => {
    app.config.globalProperties.$appState = globalProperties;
}
