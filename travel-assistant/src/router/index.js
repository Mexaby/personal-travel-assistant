import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FlightsPage from '../components/FlightsPage.vue'
import AccommodationsPage from "@/components/AccommodationsPage.vue";
import VenuesPage from "@/components/VenuesPage.vue";
import AccountPage from '../components/AccountPage.vue'
import AssistantPage from '../components/AssistantPage.vue'

// TODO choose one type of quote and stick to it
// also, why use semicolon on line 4 and 5?
// also, why use @?

//TODO CONSISTENCY, PEOPLE!!!

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
        path: '/accommodations',
        name: 'accommodations',
        component: AccommodationsPage
    },
    {
        path: '/venues',
        name: 'venues',
        component: VenuesPage
    },
    {
        path: '/account',
        name: 'account',
        component: AccountPage
    },
    {
        path: '/assistant',
        name: 'assistant',
        component: AssistantPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router