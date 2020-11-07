import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './home'
import Menu from './menu'
import About from './about'
import Contact from './contact'

Vue.use(VueRouter)

const routes = [{
        name: 'home',
        title: 'Home Page',
        path: '/',
        component: HomePage
    },
    {
        name: 'menu',
        title: 'Menu Page',
        path: '/menu',
        component: Menu
    },
    {
        name: 'about',
        title: 'About Page',
        path: '/about',
        component: About
    },
    {
        name: 'contact',
        title: 'Contact Us',
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
}];

const router = new VueRouter({ routes })
export default router