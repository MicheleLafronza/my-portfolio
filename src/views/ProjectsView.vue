<script>
  import axios from 'axios';
  export default {
    name: "ProjectView",
    props: {
      slug: String
    },
    data(){
      return {
        slugToFind: this.slug,
        project: {},
        URL: 'http://127.0.0.1:8000/api/project/'
      };
    },
    methods: {
      callProject(){
            axios.get(this.URL + this.slugToFind)
              .then((response) => {
                // success
                this.project = response.data;
                console.log(this.project);
                
              })
              .catch((error) => {
                // error
                console.log(error);
              })
          }
    },
    mounted(){
      this.callProject();
}

  }
</script>

<template>
  <main>
    <section>
      <h1 class="title">{{ project.project_title }}</h1>
      <p class="description">{{ project.description }}</p>
      
      <!-- Contenitore flex per allineare le immagini -->
      <div class="image-container">
        <img v-if="project.img1" :src="'http://127.0.0.1:8000/storage/' + project.img1" alt="Immagine 1">
        <img v-if="project.img2" :src="'http://127.0.0.1:8000/storage/' + project.img2" alt="Immagine 2">
        <img v-if="project.img3" :src="'http://127.0.0.1:8000/storage/' + project.img3" alt="Immagine 3">
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    align-items: flex-start;
  }

  section {
    width: 60%;
  }

  .title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .description {
    font-size: 1.2rem;
  }

  .image-container {
  display: flex;
  justify-content: center; /* Allinea al centro */
  gap: 20px; /* Spazio tra le immagini */
  margin-top: 20px;
  padding: 40px;
}

.image-container img {
  width: 50%; /* Le immagini occupano il 30% della larghezza del contenitore */
  max-width: 350px; /* Massima larghezza per non diventare troppo grandi */
  height: auto; /* Mantiene le proporzioni */
  border-radius: 10px; /* Angoli arrotondati per un aspetto più pulito */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Leggera ombra */
}

</style>