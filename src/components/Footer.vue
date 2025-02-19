<template>
    <footer>
      <section>
        Made By Michele Lafronza
      </section>
    </footer>
</template>
  
<script>
  export default {
    name: 'Footer'
  };
</script>
  
<style scoped>

  footer {
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    /* debug */
    /* border: 2px yellow solid; */
  }

  section {
    margin-right: 120px;
    /* debug */
    /* border: 2px solid blue; */
  }

</style>