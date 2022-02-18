import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home'
import About from '../views/About'
import Dashbord from '../views/Dashbord'
const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/about",
        name: 'About',
        component: About
    },
    {
        path: "/dashbord",
        name: 'Dashbord',
        component: Dashbord
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router