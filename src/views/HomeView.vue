<script>
import ProjectsSection from '@/components/ProjectsSection.vue';

export default {
  name: "HomeView",
  components: {
    ProjectsSection
  }
}
</script>

<template>
  <main>

    <section>
      <div class="line vertical"></div>
      <h1 class="title">BENVENUTO</h1>
      <p id="p1">Mi chiamo <span>Michele Lafronza</span> e sono un <span>Full Stack Web Developer</span>. In questo sito puoi dare uno sguardo ai miei progetti, puoi contattarmi per offrirmi dei lavori, oppure per dirmi qualsiasi cosa ti venga in mente.</p>
      <p id="p2">Tra le mie competenze ci sono vari linguaggi come <span>JAVASCRIPT</span> e <span>PHP</span>, e frameworks come <span>VueJs</span> e <span>Laravel</span>, in più ho skills anche in database relazionali come <span>MYSQL</span>.</p>
      <p id="p3">Quello che mi contradistingue è la passione e la voglia di imparare nuove tecnologie e l'attenzione e la cura verso i miei clienti e i miei colleghi di lavoro.</p>
    </section>

    <ProjectsSection></ProjectsSection>
  </main>
</template>

<style scoped>

  span {
    font-weight: 500;
  }

  #p1, #p2 {
    margin-bottom: 10px;
  }
  
  .title {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .line {
    position: absolute;
    background: rgba(204,204,204,255);
  }

  .vertical {
      width: 3px;
      border-radius: 2.5px;
      top: 0px;
      left: -20px;

      animation-name: stretchv;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }

    @keyframes stretchv{
      0% {
        height: 0px;
      }

      25% {
        height: calc(250px * 0.25);
      }

      50% {
        height: calc(250px * 0.5);
      }
      
      75% {
        height: calc(250px * 0.75);
      }

      100%{
        height: 250px;
      }
    }

    @media (max-width: 676px){
      .line {
        display: none;
      }

      section {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  
</style>