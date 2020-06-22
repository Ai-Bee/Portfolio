<template>
  <div>
      <img id="directional" src="../../assets/left-arrow.svg" title="View Profile" @click="$router.push('/profilePage')">
      <div class="row fullPage">
          <div id="pageOne" class="col-md-6 bg-light p-4">
              <div class="row justify-content-center ">
                <img src="../../assets/Logo.svg">
              </div>
            <div class="justify-content-center  row">
                 <img src="../../assets/draw.svg" class="img-fluid ">
            </div>

              <div class="row justify-content-center pb-4">
                  <p id="img-text" class="text-center">
                      We are a bridge that connects you to your dream job or employer.
                  </p>
              </div>
          </div>
          <div id="pageTwo" class="col-md-6 p-4">
              <div class="">
                <h1>Create Account</h1>
                <p class="supportText">Don’t wait for opportunity. Create it.</p>
              </div>
            <form class="">
                <div class="form-group">
                    <label for="full-name" class="theLabel">Fullname</label>
                    <input type="text" required class="form-control" v-model="form.name" id="full-name" aria-describedby="name" placeholder="John Chukwuka">
                    <small v-show="noName"><img src="../../assets/warning.svg" class="px-2">Name is required</small>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="phoneNumber" class="theLabel">Phone Number</label>
                        <input type="number" class="form-control" :v-model="form.number" id="phoneNumber" placeholder="09029290000" required >
                         <small v-show="noNumber"><img src="../../assets/warning.svg" class="px-2">Phone Number is required</small>
                    </div>
                    <div class="col">
                        <label for="mail" class="theLabel">Email Address</label>
                        <input type="email" class="form-control" v-model="form.mail" id="mail" placeholder="johnchuks@gmail.com" required>
                         <small v-show="noMail"><img src="../../assets/warning.svg" class="px-2">Email is required</small>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="theLabel">Password</label>
                    <input type="password" class="form-control" id="password" v-model="form.password" placeholder="********" required>
                     <small v-show="noPassword"><img src="../../assets/warning.svg" class="px-2">Password is required</small>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="Check1" required>
                    <label class="form-check-label" for="Check1">I am a digital professional and I am willing to work remotely or
                        on-site and I am aware that some of my information will be shared with clients during and after hiring.
                         Create Account</label>
                </div>
                <button type="submit" class="btn w-100 text-light" @click.prevent="validateForm">Create Account</button>
            </form>
            <p class="py-3">Already have an account? <a href="https://pro.motionwares.com/login">Login</a></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'registration',
  data () {
    return {
      form: {
        name: '',
        number: '',
        mail: '',
        password: ''
      },
      noPassword: false,
      noName: false,
      noMail: false,
      noNumber: false
    }
  },
  methods: {
    validateForm () {
      // eslint-disable-next-line eqeqeq
      if (this.form.name.length == 0) {
        this.noName = true
      } else {
        this.noName = false
      }
      // eslint-disable-next-line eqeqeq
      if (this.form.number.length == 0) {
        this.noNumber = true
      } else {
        this.noNumber = false
      }
      // eslint-disable-next-line eqeqeq
      if (this.form.mail.length == 0) {
        this.noMail = true
      } else {
        this.noMail = false
      }
      // eslint-disable-next-line eqeqeq
      if (this.form.password.length == 0) {
        this.noPassword = true
      } else {
        this.noPassword = false
      }
      if (!this.noNumber && this.noName && !this.noPassword && !this.noMail) {
        // Send Post Request
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
img#directional{
    position: absolute;
    z-index: 4000;
    padding: 10px;
}
img#directional:hover, img#directional:active{
    background-color: #ebe9e9;
    border-radius: 50%;;
}
div#pageOne{
    display: grid;
}
div#pageOne img{
    justify-content: center;
}
div#pageTwo{
    font-family: Montserrat;
}
button.w-100{
    background-color: #d42c2c;
    height: 50px;
}
button.w-100:hover, button.w-100:active{
    background-color: #e75151;
}
p#img-text{
    font-family: Eczar, serif;
    font-size: 25px;
    font-weight: 900;
    line-height: 33px;
}
h1{
    font-size: 2.25rem;
    line-height: 47px;
    font-weight:900;
}
label.theLabel{
    line-height: 18px;
    font-size:12px;
    color:#959595;
    font-weight: 600;
}
h4 + p{
     font-size: 14px;
    line-height: 22px;
    font-weight: 400px;
}
input{
    background-color: #e9ecef;
    border-radius: 0;
    height: 50px;
}
input:click{
    border-top: 2px solid gray;
}
input#Check1 + label{
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
}
a, small{
    color: #d42c2c;
}
small{
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
}
@media screen and (min-width: 990px) {
    div#pageTwo{
        padding: 45px 110px !important;
    }
}
</style>
