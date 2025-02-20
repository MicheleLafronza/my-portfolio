<script>
    export default {
        name: "ProjectsSection",
        components:{

        },
        data() {
        return {
            projects: [
                {
                    title: "Boolzap",
                    summary: "App simil Whatsapp a tema Bojack Horseman",
                    id: 0
                    
                },
                {
                    title: "Deliveboo",
                    summary: "App di foodelivery",
                    id: 1
                }
            ]
        };
    },
        methods: {

        }
    }
</script>

<template>
    <div id="projects-container">
        <div class="line vertical"></div>
        <h2 class="title">I MIEI PROGETTI</h2>
        <ul id="projects-list">
            <li class="items" v-for="(project, i) in projects" :key="i"><router-link :to="{ name: 'projectsview', params: { id: project.id }}"><span>{{ project.title }}</span> - {{ project.summary }}</router-link></li>
        </ul>
    </div>
</template>

<style scoped>

.items {
    margin-bottom: 10px;
    transition: all 0.2s linear;
}

.items:hover {
    cursor: pointer;
    scale: 1.1;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

#projects-container {
    align-self: flex-start;
    margin-top: 50px;
    position: relative;
    opacity: 0;
    /* debug */
    /* border: 2px yellow solid; */

    animation-name: fadein;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-timing-function: linear;
    }

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      
      100% {
        opacity: 1;
      }
    /* debug */
    /* border: 2px solid blue; */
    } 

  #projects-list {
    list-style-type: none;
  }

  .line {
    position: absolute;
    background: rgba(204,204,204,255);
  }

  .vertical {
      width: 3px;
      border-radius: 2.5px;
      top: 0px;
      left: -30px;

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
        height: calc(100px * 0.25);
      }

      50% {
        height: calc(100px * 0.5);
      }
      
      75% {
        height: calc(100px * 0.75);
      }

      100%{
        height: 100px;
      }
    }

span {
    font-weight: 500;
}
</style>