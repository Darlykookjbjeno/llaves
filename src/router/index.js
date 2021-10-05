import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/About.vue') }
    },
    {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home
    },
    {
        path: '/blog',
        name: 'blog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/About.vue') }
    },
    {
        path: '/asignar',
        name: 'Asignar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Asignar.vue') }
    },
    {
        path: '/gestionar_zonas',
        name: 'Gestionar_zonas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Gestionar_zonas.vue') }
    },
    {
        path: '/editar/:id_zona',
        name: 'Editar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Editar.vue') }
    },
    {
        path: '/gestion_llaves',
        name: 'Gestionar_llaves',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Gestionar_llaves.vue') }
    },
    {
        path: '/gestionar_ambientes',
        name: 'Gestionar_ambientes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import ('../views/Gestionar_ambientes.vue') }
    },


]

const router = new VueRouter({
    routes
})

export default router