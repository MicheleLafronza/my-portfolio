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

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #c9c9c8;
    background-color: rgba(29,29,32,255);
    font-family: "Roboto", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings:"wdth" 100;
}

main {
    height: calc(100vh - 280px);
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
  
    /* debug */
    /* border: 2px red solid; */
    
}

section {
    width: 35%;
    position: relative;
    opacity: 0;

    animation-name: fadein;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-timing-function: linear;
    }

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      
      100% {
        opacity: 1;
      }
    /* debug */
    /* border: 2px solid blue; */
    } 
</style>
