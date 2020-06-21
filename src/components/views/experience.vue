<template>
  <section class="experience container">
       <div class="row mt-lg-4">
            <div class="col-md-12 col-lg-4 text-muted title">WORK EXPERIENCE</div>
            <div class="col-md-12 col-lg-8 ">
                 <div class="mb-lg-4 mb-sm-2">
                    <h5>Web Developer(Freelance)</h5>
                    <div class="pb-3">
                         <p class="regular-text">eHealth4everyone</p>
                         <p  class="text-muted">3rd Feb 2020 till date <br>Garki, Abuja</p>
                    </div>
                    <p class="regular-text">I'm working in tandem with the in-house team to implement new features one of their web apps, also create a dashboard which is a PWA among other things.</p>
                 </div>
                 <div class="my-lg-4 my-sm-2">
                    <h5>Frontend Developer Intern(Intern)</h5>
                    <div class="pb-3">
                         <p>eHealth4everyone</p>
                         <p  class="text-muted">24th May 2019  -  20th Dec 2019 <br>Garki, Abuja</p>
                    </div>
                    <ul class="pl-0 regular-text">
                         <li>Implemented new features</li>
                         <li>Did research and worked on improving the performance of the companies web apps</li>
                         <li>Debugging</li>
                         <li>Making use of RESTful APIs</li>
                         <li>Extensive use of tools like <em>highcharts</em> and <em>highmaps</em> for charting and other other forms of data presentations on web apps</li>
                         <li>Codebase documentation and update</li>
                         <li>Converting design mock ups to web apps</li>
                    </ul>
                 </div>
            </div>
       </div>
       <div class="row my-lg-4">
            <div class="col-md-12 col-lg-4 text-muted title">HIGHEST EDUCATIONAL QUALIFICATION</div>
            <div class="col-md-12 col-lg-8 ">
                 <div class="mb-lg-4 mb-sm-2">
                    <h5>SSCE in Computer Science</h5>
                    <div class="pb-3">
                         <p class="regular-text">Federal University of technology, Minna, Niger State</p>
                    </div>
                 </div>
            </div>
       </div>
  </section>
</template>

<script>
export default {
  name: 'experience',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.experience{
     margin-top: 90px !important;
}
div.title{
     font-weight: 700;
     line-height: 20px;
     font-size: 16px;
}
.regular-text{
     font-weight: 400;
     line-height: 27px;
     font-size: 18px;
}
p.text-muted{
     font-weight: 500;
     line-height: 24px;
     font-size: 16px;
}
h5{
     font-weight: 600;
     line-height: 30px;
     font-size: 20px;
}
</style>
