import {createRouter, createWebHashHistory} from 'vue-router'
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
import ListTravels from "@/components/ListTravels.vue";
import ListTravelsReturn from "@/components/ListTravelsReturn.vue";
import TravelDetails from "@/components/TravelDetails.vue";
import VenueList from "@/components/VenueList.vue";
import SummaryPage from "@/components/SummaryPage.vue";
import LocalTransportInfo from "@/components/LocalTransportInfo.vue";
import CurrencyConverterPage from "@/components/account-pages/CurrencyConverterPage.vue";
import PackingPage from "@/components/account-pages/PackingPage.vue";
import TranslationPage from "@/components/account-pages/TranslationPage.vue";

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
        path: '/currency',
        name: 'currency',
        component: CurrencyConverterPage
    },
    {
        path: '/packing',
        name: 'packing',
        component: PackingPage
    },
    {
        path: '/translate',
        name: 'translate',
        component: TranslationPage
    },
    {
        path: '/busPage',
        name: 'busPage',
        component: LocalTransportInfo
    },
    {
        path: '/listingvenues',
        name: 'listingvenues',
        component: VenueList
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
    },
    {
        path: '/listingTravels',
        name: 'listingTravels',
        component: ListTravels
    },
    {
        path: '/listingTravelsReturn',
        name: 'listingTravelsReturn',
        component: ListTravelsReturn
    },
    {
        path: '/travelsDetails',
        name: 'TravelDetails',
        component: TravelDetails,
    },
    {
        path: '/summary',
        name: 'SummaryPage',
        component: SummaryPage,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router