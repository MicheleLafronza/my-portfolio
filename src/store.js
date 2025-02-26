// store.js
import { reactive } from 'vue'

export const store = reactive({
  projects: [
    {
      title: 'DELIVEBOO',
      slug: 'deliveboo',
      summary: "App di Food Delivery",
      description: "Deliveboo è un'app di food delivery che permette di poter registrare il proprio ristorante, aggiungere dei prodotti e di visualizzare e avere le statistiche degli ultimi ordini effettuati dai clienti. E' possibile filtrare i ristoranti per tipologia e utilizzare un carrello dinamico che salva gli ultimi prodotti aggiunti. Inoltre ha un sistema di pagamento sicuro, il quale manda una mail al ristoratore per la preparazione dell'ordine e una al cliente per l'avvenuta conferma. Deliveboo è realizzata con VueJS in front, e supportata da un sito di gestione per i ristoratori che vogliono registrare il proprio ristorante, visualizzare e aggiungere i propri prodotti, e consultare gli ultimi ordini e guadagni in vari periodi. Qui sotto troverai un video che mostra tutto il funzionamento dell'app.",
      hasImage: false,
      img1: '',
      img2: '',
      img3: '',
      hasVideo: true,
      video: '/videos/Deliveboo.mp4'
    },
    {
      title: 'BOOLZAP',
      slug: 'boolzap',
      summary: 'App di messaggistica basata su whatsapp',
      description: "Boolzap è un'app di messaggistica basata sul famosissimo layout di whatsapp. Tra le varie funzionalità dell'app c'è la possibilità di eliminare i messaggi, una barra di ricerca per selezionare dei contatti specifici e la possibilità di mandare dei messaggi ai fantastici personaggi della stupenda serie tv Bojack Horseman (e già questo vale tantissimo).",
      hasImage: true,
      img1: '/images/Boolzap1.png',
      img2: '/images/Boolzap2.png',
      img3: '/images/Boolzap3.png',
      hasVideo: false,
      video: ''
    },
    {
      title: 'DASHBOARD',
      slug: 'dashboard-bootstrap',
      summary: 'Dashboard realizzata con Bootstrap',
      description: 'Una dashboard realizzata interamente con il framework CSS Bootstrap. Progetto solo frontend che mi ha permesso di imparare e utilizzare Bootstrap per realizzare delle dashboard in modo ordinato e user friendly.',
      hasImage: true,
      img1: '/images/Dashboard1.png',
      img2: '',
      img3: '',
      hasVideo: false,
      video: ''
    },
    {
      title: 'MAXCOACH',
      slug: 'maxcoach',
      summary: 'Replica del sito di educational learning Maxcoach',
      description: 'Questo progetto prende spunto dal sito reale di educational learning MaxCoach. In questo progetto realizzato con VueJS ho esplorato gran parte delle potenzialità del framework, per creare un sito funzionale e con una bella estetica. Mi è servito per esplorare e capire meglio Vue e le enormi possibilità che ti da a disposizione.',
      hasImage: true,
      img1: '/images/Maxcoach1.png',
      img2: '/images/Maxcoach2.png',
      img3: '/images/Maxcoach3.png',
      hasVideo: false,
      video: ''
    },
  ]
});