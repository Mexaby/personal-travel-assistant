import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FlightsPage from '../components/FlightsPage.vue'
import AccommodationsPage from "@/components/AccommodationsPage.vue";
import VenuesPage from "@/components/VenuesPage.vue";
import AccountPage from '../components/AccountPage.vue'
import AssistantPage from '../components/AssistantPage.vue'
import ListAccommodation from "@/components/ListAccommodation.vue";
import AccommodationDetails from "@/components/AccommodationDetails.vue";
import ListTravels from "@/components/ListTravels.vue";

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
        path: '/listingAccommodations',
        name: 'listingAccommodations',
        component: ListAccommodation
    },
    {
        path: '/accommodation/:id',
        name: 'AccommodationDetails',
        component: AccommodationDetails,
        props: true
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
    },
    {
        path: '/listingTravels',
        name: 'listingTravels',
        component: ListTravels
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router