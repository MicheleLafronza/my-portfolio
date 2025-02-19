<script>

</script>

<template>
  <main>

    <section>
      <h1>BENVENUTO</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quas error saepe sunt cumque iure, quo similique corrupti aliquid facilis consequuntur at deleniti sequi iste earum mollitia culpa cupiditate. Id?</p>
    </section>

    <div id="projects-container">
      <ul id="projects-list">
        <li>Progetto 1</li>
        <li>Progetto 2</li>
        <li>Progetto 3</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }

  section {
    width: 35%;
    /* debug */
    /* border: 2px blue solid; */
  }

  #projects-container {
    align-self: flex-start;
    margin-top: 50px;
    /* debug */
    /* border: 2px yellow solid; */
  }

  #projects-list {
    list-style-type: none;

  }
</style>