<script>

  // import axios from 'axios';
  import { store } from '../store'

    export default {
        name: "ProjectsSection",
        components:{

        },
        data() {
          return {
              projects: store.projects
          };
        },
        methods: {

        },
        mounted(){

        }

    }
</script>

<template>
    <div id="projects-container">
        <div class="line vertical"></div>
        <div class="line-horizontal"></div>
        <h2 class="title">I MIEI PROGETTI</h2>
        <ul id="projects-list">
          <li class="items" v-for="(project, index) in projects" :key="index"><router-link :to="{ name: 'projectsview', params: { slug: project.slug }}"><span>{{ project.title }}</span> - {{ project.summary }}</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.line-horizontal {
  display: none;
}

a {
  text-decoration: none;
}

.loader {
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
    width: 30%;
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

@media (max-width: 676px){
  #projects-container {
    width: 90%;
    margin: 30px auto;
  }

  .title {
    text-align: center;
  }

  .line-horizontal {
    display: block;
    background: rgba(204,204,204,255);
    height: 5px;
    width: 300px;
    border-radius: 2.5px;
    margin: 0 auto 20px auto;

    animation-name: stretchhh;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;

  }
  
  @keyframes stretchhh{
      0% {
        width: 0px;
      }

      25% {
        width: calc(300px * 0.25);
      }

      50% {
        width: calc(300px * 0.5);
      }
      
      75% {
        width: calc(300px * 0.75);
      }

      100%{
        width: 300px;
      }


}

}
</style>