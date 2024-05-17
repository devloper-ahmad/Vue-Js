
import { createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Page from '../components/Page.vue'
import Services from '../components/Services.vue'
// import More from '../components/More.vue'
const router = createRouter({
history: createWebHistory (import.meta.env.BASE_URL),
routes: [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/services',
        name:'services',
        component:Services,
    },
    {
        path:'/Page',
        name:'Page',
        component:Page,
    },
    // {
    //     path:'/More',
    //     name:'More',
    //     component:More,
    // },

]
})
export default router;



































