<template>
      <nav class="navbar sticky-top container border-bottom-1">
        <img class="pt-3" src="../../assets/Logo.svg" title="Click to Register" @click="$router.push('/')">
      </nav>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 nav{
   border-bottom: 1px solid ;
    background-color: #ffffff;
 }
</style>
