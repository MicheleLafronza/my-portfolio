<script>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>

<style scoped>

</style>
