// Configuracion general
import { createRouter, createWebHashHistory } from 'vue-router'

// Configuracion de cada pagina
//import AboutPage from '@/pages/AboutPage'
//import HelpPage from '@/pages/HelpPage'          Carga perezosa
//import PokemonPage from '@/pages/PokemonPage'
//import NotFound from '@/pages/NotFound'

const routes = [
    // Carga normal
    //{ path: '/', component: AboutPage },
    //{ path: '/pokemon', component: PokemonPage },
    //{ path: '/:pathMatch(.*)*', component: NotFound },
    //{ path: '/help', component: HelpPage },
    // Carga perazosa
    { path: '/', component: () => import(/* webpackChunkName: "inicio"*/ '@/pages/AboutPage.vue') },
    { path: '/listaPokemon', component: () => import(/* webpackChunkName: "listaPokemon"*/ '@/pages/ListaPokemon.vue') },  // <= se le hace un lambda con el import
    { path: '/pokemonId', component: () => import(/* webpackChunkName: "pokemonId"*/ '@/pages/PokemonId.vue') },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const tokenValido = (token) => {
    //Consumo de API para validar el token
    console.log("******************")
    console.log(token)
    if (token == "123456qwe") {
        return true
    }
    return false
}

// Configuraciones de guardianes globales
router.beforeEach((to, from, next) => {
    console.log("to")
    console.log(to.path)
    console.log("from")
    console.log(from.path)
    console.log("next")
    console.log(next.path)
    /*
    const random = Math.random()*100
    if(random>50) {
        console.log("Token valido" + random)
        next()
    } else {
        console.log("Token invalido, no tiene acceso" + random)
    }
    */
    const tokenGenerado = to.query.token
    if (tokenValido(tokenGenerado)) {
        console.log("Token valido")
        next()
    } else {
        console.log("Token inválido")
    }

})

export default router