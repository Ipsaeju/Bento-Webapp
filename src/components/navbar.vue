<template>
    <div>
        <nav>
            <router-link class="spacing" v-for="paths in routes" v-bind:key="paths.id" :to="`${paths.page}`">{{paths.title}}</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return{
                routes: [
                    {
                        id: 0,
                        title: 'Home',
                        page: '/'
                    },
                    {
                        id: 1,
                        title: 'Menu',
                        page: '/menu'
                    },
                    {
                        id: 2,
                        title: 'About',
                        page: '/about'
                    },
                    {
                        id: 3,
                        title: 'Contact Us',
                        page: '/contact'
                    }
                ]
            }
        }
    }
</script>

<style>
    .spacing {
        margin: 10px;
    }
</style>