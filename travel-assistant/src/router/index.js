import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FlightsPage from '../components/FlightsPage.vue'
import AccountPage from '../components/AccountPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/flights',
        name: 'flights',
        component: FlightsPage
    },
    {
        path: '/account',
        name: 'account',
        component: AccountPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router