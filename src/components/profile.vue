<template>
  <div class="container">
    <top></top>
    <intro></intro>
    <projects></projects>
    <experience></experience>
    <footer>
      <bottom></bottom>
    </footer>
  </div>
</template>

<script>
import bottom from '../components/views/bottom'
import top from '../components/views/top'
import intro from '../components/views/intro'
import projects from '../components/views/projects'
import experience from '../components/views/experience'
export default {
  name: 'HelloWorld',
  components: {
    bottom, top, intro, projects, experience
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    font-family: Manrope;
  }
</style>
