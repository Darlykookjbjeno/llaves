import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    //llllllllllllllllllllllllllllllllllllll---------------agregar----------------lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
    {
        path: '/agregar_zona',
        name: 'Agregar_zona',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Agregar_zonas.vue') }
    },
    {
        path: '/agregar_llave',
        name: 'Agregar_llave',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Agregar_llaves.vue') }
    },

    {
        path: '/agregar_ambiente',
        name: 'Agregar_ambiente',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Agregar_ambientes.vue') }
    },
    //ñlllllllllllllllllllllllllllllllllllll---------------editar----------------llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

    {
        path: '/editar_zona',
        name: 'Editar_zona',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Editar_zona.vue') }
    },
    {
        path: '/editar_ambiente',
        name: 'Editar_ambiente',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Editar_ambiente.vue') }
    },
    {
        path: '/editar_llave',
        name: 'Editar_llave',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Editar_llave.vue') }
    },


    //lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll



    {
        path: '/gestionar_zonas',
        name: 'Gestionar_zonas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Gestionar_zonas.vue') }
    },
    {
        path: '/gestionar_ambientes',
        name: 'Gestionar_ambientes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Gestionar_ambientes.vue') }
    },
    {
        path: '/gestionar_llaves',
        name: 'Gestionar_llaves',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Gestionar_llaves.vue') }
    },


]

const router = new VueRouter({
    routes
})

export default router