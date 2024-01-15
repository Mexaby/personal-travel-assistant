import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FlightsPage from '../components/FlightsPage.vue'
import AccommodationsPage from "@/components/AccommodationsPage.vue";
import VenuesPage from "@/components/VenuesPage.vue";
import AccountPage from '../components/account-pages/AccountPage.vue'
import AssistantPage from '../components/account-pages/AssistantPage.vue'
import ReservationsPage from '../components/account-pages/ReservationsPage.vue'
import PrevReservationsPage from '../components/account-pages/PrevReservationsPage.vue'
import ListAccommodation from "@/components/ListAccommodation.vue";
import AccommodationDetails from "@/components/AccommodationDetails.vue";

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
        path: '/reservations',
        name: 'reservations',
        component: ReservationsPage
    },
    {
        path: '/prevreservations',
        name: 'prevreservations',
        component: PrevReservationsPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router