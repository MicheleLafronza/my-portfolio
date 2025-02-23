<script>

  import axios from 'axios';

  export default {
    name: 'ContactView',
    data(){
      return {
        URL: "http://127.0.0.1:8000/api/contact",
        isLoading: false,
        email: "",
        message: "",
        successMessage: "",
        errorMessage: ""
      }
    },
    methods:{
      async sendMessage(){
        this.isLoading = true;
        this.successMessage = "";
        this.errorMessage = "";

        try {
          await axios.post(this.URL, {
            email: this.email,
            message: this.message
          });

          this.successMessage = 'Messaggio inviato correttamente!';
          this.email = "";
          this.message = "";
        } catch (error) {
          this.errorMessage = "Errore nell'invio del messaggio, assicurati che la l'indirizzo mail sia valido e che il messaggio non sia vuoto.";
          console.log(error.response.data.message);
        } finally {
          this.isLoading = false;
        }
      },
      resetForm(){
        this.email = "";
        this.message = "";
      }
    }
  }
</script>

<template>
  <main>
    <section>
      <h1 class="title">CONTATTAMI</h1>
      <form action="{{ URL }}" @submit.prevent="sendMessage" class="form-container" method="post">
        <label for="mail">Inserisci qui la tua mail</label>
        <input type="text" v-model="email" id="mail" placeholder="tua@mail.com">
        <label for="message">Inserisci il tuo messaggio</label>
        <textarea v-model="message" id="message" placeholder="Messaggio.."></textarea>
        <button type="submit" class="btn-submit" :disabled="isLoading">
          {{ isLoading ? "Invio..." : "Invia Messaggio" }}
        </button>
        <button type="button" class="btn-reset" @click="resetForm">
        Resetta
        </button>
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </section>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  }

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, textarea {
  padding: 10px;
  background-color: rgba(45, 45, 50, 255);
  border: 2px solid gray;
  border-radius: 20px;
}

button {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, transform 0.2s;
  font-size: 16px;
}

.btn-submit {
  background-color: #333; /* Nero */
  color: white;
  width: 100%;
  margin-bottom: 10px;
}

.btn-submit:hover {
  background-color: #555; /* Hover più chiaro */
  transform: scale(1.05);
}

.btn-submit:disabled {
  background-color: #888;
  cursor: not-allowed;
}

.btn-reset {
  background-color: #ccc; /* Grigio chiaro */
  color: #333;
  width: 100%;
}

.btn-reset:hover {
  background-color: #aaa; /* Hover più scuro */
  transform: scale(1.05);
}

</style>