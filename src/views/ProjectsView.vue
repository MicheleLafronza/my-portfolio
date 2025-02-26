<script>
  // import axios from 'axios';
  import { store } from '../store';
  export default {
    name: "ProjectView",
    props: {
      slug: String
    },
    data(){
      return {
        projects: [],
        selectedImage: null // Contiene l'URL dell'immagine selezionata
      };
    },
    methods: {
      takeProject(slug){
        this.projects = store.projects.filter((project) => project.slug === slug)
      },
      openImage(imgSrc) {
      this.selectedImage = imgSrc; // Imposta l'immagine selezionata
      },
      closeImage() {
      this.selectedImage = null; // Chiude l'immagine quando si clicca fuori
      }
    },
    mounted(){
      this.takeProject(this.slug);
      console.log(this.projects);
      
}

  }
</script>

<template>
  <main>
    <section v-for="(project, index) in projects" :key="index">
      <h1 class="title">{{ project.title }}</h1>
      <p class="description">{{ project.description }}</p>

      <div class="video-container">
        <video v-if="project.hasVideo" controls width="600">
          <source :src="project.video" type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      </div>
      
      <div v-if="project.hasImage" class="pre-image">Clicca sulle immagini per ingrandirle!!</div>
      <!-- Contenitore flex per allineare le immagini -->
      <div v-if="project.hasImage" class="image-container">
        <img v-if="project.img1" :src="project.img1" alt="Immagine 1"
        @click="openImage(project.img1)">
        <img v-if="project.img2" :src="project.img2" alt="Immagine 2"
        @click="openImage(project.img2)">
        <img v-if="project.img3" :src="project.img3" alt="Immagine 3"
        @click="openImage(project.img3)">
      </div>
    </section>
    
  </main>
  <div v-if="selectedImage" class="modal" @click="closeImage">
        <img :src="selectedImage" class="modal-image">
  </div>
</template>

<style scoped>
.pre-image {
  margin-top: 10px;
  text-align: center;
  font-size: 1.3rem;
}

.video-container {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container video {
  width: 100%;
  max-width: 700px; /* Evita che il video diventi troppo grande */
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
}

/* Rendi il cursore a "zoom out" quando l'immagine è aperta */
.modal img {
  cursor: zoom-out;
}

section {
  position: relative;
}

.loader {
    position: absolute;
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    width: 48px;
    height: 48px;
    border: 5px solid gray;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
  main {
    align-items: flex-start;
  }

  section {
    width: 80%;
  }

  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .description {
    font-size: 1.2rem;
    background-color: rgba(45, 45, 50, 255);
    border: 2px solid gray;
    border-radius: 20px;
    padding: 20px;
    letter-spacing: 1px;
  }

  .image-container {
  display: flex;
  justify-content: center; /* Allinea al centro */
  gap: 20px; /* Spazio tra le immagini */
  padding: 20px;
}

.image-container img {
  min-width: 30%; /* Le immagini occupano il 30% della larghezza del contenitore */
  max-width: 350px; /* Massima larghezza per non diventare troppo grandi */
  height: auto; /* Mantiene le proporzioni */
  border-radius: 10px; /* Angoli arrotondati per un aspetto più pulito */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Leggera ombra */
  transition: border 0.3s ease; /* Aggiungi una transizione fluida */
  border: 1px solid transparent;
  
}

.image-container img:hover {
  border: 1px solid wheat;
  cursor: pointer;
}

@media (max-width: 676px){
  section {
    margin: 0 auto;
  }
  .image-container {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
}

</style>