<template>
  <div>
     <div class="jumbotron">
          <div class="row justify-content-start">
                <div class="texts col align-self-center order-md-3">
                     <h1 class="display-4">Hi, I'm <br> <span>Iboro Inyang</span></h1>
                    <p class="lead">I am a Software Engineer based in Karu, Nasarawa with 1 - 3 Years of experience.  I am available for Remote Part Time jobs.</p>
               </div>
               <div class="image col order-md-5">
                    <img src="../../assets/Capture.jpeg" class="img-fluid">
               </div>
          </div>
     </div>
     <div>
          <ul class="list-unstyled skills">
               <div class="media mb-4">
               <p class="align-self-start mr-4 pr-md-4">ABOUT ME </p>
               <div class="media-body ml-md-4 pl-md-4">
               <p>I'm a highly self motivated person and a positive thinker. I enjoy solving problems and building products for the web that people not just enjoy using but also adds value. I'm quite creative and I love learning new things and challenging myself. Also I'm a good team player though I'm an introvert.</p>
               </div>
               </div>
               <div class="media mt-4">
               <p class="align-self-start mr-4 pr-md-4">SKILLS</p>
               <div class="media-body ml-md-4 pl-md-4">
               <p class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>HTML</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>CSS</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>JavaScript</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>jQuery</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Vue</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Version Control</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Testing/Debugging</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Node.js</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>TypeScript</p>
               <p  class="p-3"><span class="p-2"><img src="../../assets/right-arrow.svg" ></span>RESTApi</p>
               </div>
               </div>
          </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
     ul.skills div.media-body p{
          display: inline-block;
     }
     div.jumbotron{
          background-color: #ffffff;
     }
     div.jumbotron .texts h1 > span {
          font-weight: bolder;
     }
</style>
