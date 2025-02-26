<template>
    <header>

      <div class="corner top-left">
        <div class="line horizontal"></div>
        <div class="line vertical"></div>
      </div>
      
      <div class="logo"><router-link class="ic" to="/"><img src="/M.jpg" alt="logo"></router-link></div>
      
      <nav>
        <router-link class="ic" to="/"><i class="fa-solid fa-house"></i></router-link>
        <a class="ic" href="https://www.linkedin.com/in/michele-lafronza-422017315/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a class="ic" href="https://github.com/MicheleLafronza" target="_blank"><i class="fa-brands fa-github"></i></a>
        <router-link class="ic" to="/contact"><i class="fa-solid fa-file-signature"></i></router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
<style scoped>
    .ic {
      transition: all 0.2s linear;
    }

    .ic:hover {
      cursor: pointer;
      scale: 1.5;
    }

    header {
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 50px;
        position: relative;
        /* debug */
        /* border: 2px white solid; */
    }

    nav {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        margin-right: 120px;
        font-size: 1.5rem;

        animation-name: fadein;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-timing-function: linear;
        /* debug */
        /* border: 2px wheat solid; */
    }

    .logo {
      display: block;
      height: 100px;
      width: 100px;
      margin-left: 120px;
      opacity: 0;

      animation-name: fadein;
      animation-fill-mode: forwards;
      animation-duration: 2s;
      animation-timing-function: linear;
      /* debug */
      /* border: 2px gray solid; */
    }

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      
      100% {
        opacity: 1;
      }
    }

    img {
      max-width: 100%;
    }

    .corner {
    position: absolute;
    }

    .top-left {
      top: 30px;
      left: 100px;
    }

    .line {
      position: absolute;
      background: rgba(204,204,204,255);
    }

    .horizontal {
      height: 5px;
      top: 0;
      left: 0;
      border-radius: 2.5px;

      animation-name: stretchh;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;

    }

    @keyframes stretchh{
      0% {
        width: 0px;
      }

      25% {
        width: calc(100px * 0.25);
      }

      50% {
        width: calc(100px * 0.5);
      }
      
      75% {
        width: calc(100px * 0.75);
      }

      100%{
        width: 100px;
      }
    }

    .vertical {
      width: 5px;
      border-radius: 2.5px;
      /* height: 50px; */
      top: 0;
      left: 0;

      animation-name: stretchv;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }

    @keyframes stretchv{
      0% {
        height: 0px;
      }

      25% {
        height: calc(100px * 0.25);
      }

      50% {
        height: calc(100px * 0.5);
      }
      
      75% {
        height: calc(100px * 0.75);
      }

      100%{
        height: 100px;
      }
    }


    @media only screen and (max-width: 676px){ 
    
    .corner {
      display: none;
    }

    .logo {
      display: none !important;
    }

    .logo img {
      display: none;
    }

    /* header {
      height: 100px;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    } */
    header {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: rgba(29,29,32,255); /* Assicurati che non sia trasparente */
    z-index: 1000;
    padding-top: 0px;
}

    nav {
      margin-right: 0px !important;
    }
    

  }
  </style>