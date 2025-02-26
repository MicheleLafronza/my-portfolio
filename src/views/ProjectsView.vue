<script>
  // import axios from 'axios';
  import { store } from '../store';
  export default {
    name: "ProjectView",
    props: {
      id: String
    },
    data(){
      return {
        project: store.projects[this.id],
        selectedImage: null // Contiene l'URL dell'immagine selezionata
      };
    },
    methods: {
      openImage(imgSrc) {
      this.selectedImage = imgSrc; // Imposta l'immagine selezionata
      },
      closeImage() {
      this.selectedImage = null; // Chiude l'immagine quando si clicca fuori
      }
    },
    mounted(){
      console.log(this.project);
      
}

  }
</script>

<template>
  <main>
    <section>
      <h1 class="title">{{ project.title }}</h1>
      <p class="description">{{ project.description }}</p>
      
      <!-- Contenitore flex per allineare le immagini -->
      <!-- <div class="image-container">
        <img v-if="project.img1" :src="'http://127.0.0.1:8000/storage/' + project.img1" alt="Immagine 1"
        @click="openImage('http://127.0.0.1:8000/storage/' + project.img1)">
        <img v-if="project.img2" :src="'http://127.0.0.1:8000/storage/' + project.img2" alt="Immagine 2"
        @click="openImage('http://127.0.0.1:8000/storage/' + project.img2)">
        <img v-if="project.img3" :src="'http://127.0.0.1:8000/storage/' + project.img3" alt="Immagine 3"
        @click="openImage('http://127.0.0.1:8000/storage/' + project.img3)">
      </div> -->
    </section>
    
  </main>
  <!-- <div v-if="selectedImage" class="modal" @click="closeImage">
        <img :src="selectedImage" class="modal-image">
  </div> -->
</template>

<style scoped>

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
    width: 60%;
    
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
  transition: border 0.3s ease; /* Aggiungi una transizione fluida */
  border: 1px solid transparent;
  
}

.image-container img:hover {
  border: 1px solid wheat;
  cursor: pointer;
}

</style>