<script>
  export default {
    name: "ProjectView",
    props: {
      id: String
    },
    data(){
      return {
        projects: []
      };
    },
  }
</script>

<template>
  <main>
    Project {{ id }}
  </main>
</template>

<style scoped>

</style>