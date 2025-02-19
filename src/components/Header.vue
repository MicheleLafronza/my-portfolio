<template>
    <header>
      ciao sono header 
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Progetti</router-link>
        <router-link to="/contact">Contatti</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>

  </style>