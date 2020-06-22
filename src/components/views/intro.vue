<template>
  <div>
     <div class="jumbotron">
          <div class="row justify-content-start">
                <div class="texts col-lg-8 col-sm-12 align-self-center">
                     <h1 class="">Hi, I'm <br> <span>Iboro Inyang</span></h1>
                    <p>I am a Software Engineer based in Karu, Nasarawa with 1 - 3 Years of experience.  I am available for Remote Part Time jobs.</p>
               </div>
               <div class="image col-lg-4 col-sm-12 text-sm-center text-xs-center">
                    <img src="../../assets/Capture.jpeg" class="img-responsive">
               </div>
          </div>
     </div>
     <div>
          <dl class="row">
               <dt class="col-lg-3 text-muted">ABOUT ME </dt>
               <df class="col-lg-9">I'm a highly self motivated person and a positive thinker. I enjoy solving problems and building products for the web that people not just enjoy using but also adds value. I'm quite creative and I love learning new things and challenging myself. Also I'm a good team player though I'm an introvert.</df>
               <dt class="col-lg-3 text-muted mt-4 pt-4">SKILLS</dt>
               <df class="col-lg-9 mt-lg-4 pt-lg-4 mt-sm-0">
               <p class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>HTML</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>CSS</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>JavaScript</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>jQuery</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Vue</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Version Control</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Testing/Debugging</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>Node.js</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg"></span>TypeScript</p>
               <p  class="p-2"><span class="p-2"><img src="../../assets/right-arrow.svg" ></span>RESTApi</p>
               </df>
          </dl>
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
     df p{
          display: inline-block;
     }
     div.image{
          width: 350px;
          height: 350px;
     }
     df, h1 + p{
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
     }
     h1{
          font-size: 48px;
          line-height: 60px;
          font-weight: 400;
     }
     h1 > span{
          font-weight: 700;
     }
     div.jumbotron{
          background-color: #ffffff;
     }
     div.jumbotron .texts h1 > span {
          font-weight: bolder;
     }
     @media screen and (max-width: 990px){
          div.texts{
               order: 2;
          }
          div.image{
               order: 1;
          }
          div.image img {
               width: 250px;
               height: 250px;
          }
     }
</style>
