<template>
    <div id="barrouter">
        <h1></h1>
</template>



<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import Menu from './menu'
import About from './about'
import Contact from './contact'


Vue.use(VueRouter)

var routes = [{
        name: 'home',
        title: 'Home Page',
        path: '/',
        component: Home
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

var router = new VueRouter({ routes })
const app = new Vue({router}).$mount('#app')

export default router
</script>

