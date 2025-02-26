// store.js
import { reactive } from 'vue'

export const store = reactive({
  projects: [
    {
      title: 'Progetto 1',
      summary: 'summary progetto 1',
      description: 'descrizione progetto 1',
      img1: '',
      img2: '',
      img3: ''
    },
    {
      title: 'Progetto 2',
      summary: 'summary progetto 2',
      description: 'descrizione progetto 2',
      img1: '',
      img2: '',
      img3: ''
    },
    {
      title: 'Progetto 3',
      summary: 'summary progetto 3',
      description: 'descrizione progetto 3',
      img1: '',
      img2: '',
      img3: ''
    }
  ]
});