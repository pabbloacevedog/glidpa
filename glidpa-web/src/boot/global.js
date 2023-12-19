import Vue from 'vue'

Vue.use( {
    install(Vue){
        Vue.prototype.$avatar_default = '../../statics/user.png'
        // Vue.prototype.$idioma = 'en-us'
        Vue.prototype.$idioma = 'es-es'
        ////colores del tema de la app //////
        Vue.prototype.$dark = false
        Vue.prototype.$glass = true
        Vue.prototype.$usuario_id = ''
        Vue.prototype.$avatar = ''
        Vue.prototype.$nombre = ''
        Vue.prototype.$tipo_usuario = ''
         ////colores del tema de la app //////

        // Vue.prototype.$searchUser = async function (obj){
        //     var resp = false
        //     await this.$store.dispatch("Global/searchUser", obj).then(res => {
        //         resp = true
        //     }).catch(err => {
        //         console.log(err)
        //     })
        //     return resp
        // }
    } 
})
