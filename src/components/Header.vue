<template>
    <header>

      <div class="logo"><img src="/M.jpg" alt="logo"></div>
      
      <nav>
        <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
        <router-link to="/contact"><i class="fa-solid fa-file-signature"></i></router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
    header {
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 50px;
        /* debug */
        /* border: 2px white solid; */
    }

    nav {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        margin-right: 120px;
        font-size: 1.5rem;
        /* debug */
        /* border: 2px wheat solid; */
    }

    .logo {
      display: block;
      height: 100px;
      width: 100px;
      margin-left: 120px;
      /* debug */
      /* border: 2px gray solid; */
    }

    img {
      max-width: 100%;
    }

  </style>