<template>
  <div>
      <hr />
      <div class="theFooter row justify-content-center mx-4 text-muted my-4 py-4">
        <div class="col imgBox ">

        </div>
        <div class="col">
          <p>MOTIONWARES</p>
          <ul class="list-unstyled">
          <li class="pb-2"><a href="https://motionwares.com/academy/"  class="text-muted">Our Academy</a></li>
          <li  class="pb-2"><a href="https://motionwares.com/hire"  class="text-muted">Hire a Pro</a></li>
          <li  class="pb-2"><a href="https://motionwares.com/mentor.motionwares.com"  class="text-muted">Volunteer as a Mentor</a> </li>
          <li  class="pb-2"><a href="https://motionwares.com/get-hired"  class="text-muted">Get Hired</a></li>
        </ul>
        </div>
        <div class="col text-muted">
          <p>COMPANY</p>
          <ul class="list-unstyled">
          <li  class="pb-2"><a href="https://motionwares.com/faq" class="text-muted">Our Academy FAQs</a></li>
          <li  class="pb-2"><a href="https://blog.motionwares.com/"  class="text-muted">Blog</a></li>
        </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
 width: 40px !important;
 height: 30px;
}
div.imgBox{
  padding-right: 0 !important;
  background-image: url("../../assets/company-logo.png");
  background-size: 25%;
  background-repeat: no-repeat;
  background-position: top;
}
p{
  font-weight: 700;
  line-height: 18px;
  font-size: 12px;
}
ul li {
   font-weight: 400;
  line-height: 21px;
  font-size: 14px;
}
@media screen and (max-width: 750px){
  div.imgBox{
    display:none;
  }
  .theFooter{
    display: grid;
    justify-content: left !important;
    margin-left: 0 !important;
  }
  .theFooter .col{
    margin-bottom: 40px ;
  }
}
</style>
