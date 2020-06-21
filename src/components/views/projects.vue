<template>
  <div>
      <section class="container">
           <h6 class="section-head text-muted">PROJECTS</h6>
           <div class="card-deck">
                <div class="row justify-content-betwen my-3">
                     <div class="card col-md-6">
                    <div class="card-body">
                         <div class="row justify-content-between  mb-md-4 pb-4">
                              <img src="../../assets/icons8-box.svg">
                              <img src="../../assets/upper-right-arrow.svg">
                         </div>
                         <h5 class="mt-md-4 pt-4">The Multisource data analytics and triangulation dashboard</h5>
                         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         <span class="badge px-3 py-2  mb-2">HTML</span>
                         <span class="badge px-3 py-2 mb-2">CSS</span>
                         <span class="badge px-3 py-2 mb-2">JavaScript</span>
                         <span class="badge px-3 py-2 mb-2">Vue</span>
                         <span class="badge px-3 py-2 mb-2">Version Control</span>
                         <span class="badge px-3 py-2 mb-2">Testing/Debugging</span>
                    </div>
                    </div>
                    <div class="card col-md-6">
                    <div class="card-body">
                         <div class="row justify-content-between mb-md-4 pb-4">
                              <img src="../../assets/icons8-box.svg">
                              <img src="../../assets/upper-right-arrow.svg">
                         </div>
                         <h5 class="mt-md-4 pt-4">Quiz App</h5>
                         <p class="card-text">A simple quiz App built with vue, utilising REST APIs</p>
                         <span class="badge px-3 py-2 mb-2">CSS</span>
                         <span class="badge px-3 py-2 mb-2">Vue</span>
                         <span class="badge px-3 py-2 mb-2">JavaScript</span>
                         <span class="badge px-3 py-2  mb-2">HTML</span>
                    </div>
                    </div>
                </div>
                <div class="card col-md-6 col-sm-12">
                    <div class="card-body">
                         <div class="row justify-content-between mb-md-4 pb-4">
                              <img src="../../assets/icons8-box.svg">
                              <img src="../../assets/upper-right-arrow.svg">
                         </div>
                         <h5 class="mt-md-4 pt-4">To-do App</h5>
                         <p class="card-text">A To-do App built with vue.js</p>
                         <span class="badge px-3 py-2 mb-2">JavaScript</span>
                         <span class="badge px-3 py-2 mb-2">Vue</span>
                         <span class="badge px-3 py-2 mb-2">CSS</span>
                         <span class="badge px-3 py-2  mb-2">HTML</span>
                    </div>
                    </div>
                    <div class=" col-md-6 d-sm-none">
                    </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
     border-radius: 0;
}
.card span.badge{
     background-color: #edf2f6;
}
h5{
     font-weight: 500;
     line-height: 38px;
     font-size: 30px;
}
h5 + p{
     font-weight: 400;
     line-height: 24px;
     font-size: 16px;
}
span.badge{
     font-weight: 500;
     line-height: 18px;
     font-size: 12px;
}
</style>
