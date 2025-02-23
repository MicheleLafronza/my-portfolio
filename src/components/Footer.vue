<template>
    <footer>
      <div class="ft">
        Made By <span>Michele Lafronza</span>   &reg
      </div>
    </footer>
</template>
  
<script>
  export default {
    name: 'Footer'
  };
</script>
  
<style scoped>

  footer {
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    z-index: 0;
    /* debug */
    /* border: 2px yellow solid; */
  }

  .ft {
    margin-right: 120px;
    opacity: 0;

    animation-name: fadein;
    animation-fill-mode: forwards;
    animation-duration: 2s;
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

  span {
    font-weight: 500;
  }

</style>