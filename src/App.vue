<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (document.documentElement.clientWidth > 1600) {
      this.$store.commit('changeScreenWidth', '200px')
    } else if (document.documentElement.clientWidth > 1440) {
      this.$store.commit('changeScreenWidth', '180px')
    } else if (document.documentElement.clientWidth > 1360) {
      this.$store.commit('changeScreenWidth', '100px')
    } else {
      this.$store.commit('changeScreenWidth', '80px')
    }
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth > 1600) {
        this.$store.commit('changeScreenWidth', '200px')
      } else if (document.documentElement.clientWidth > 1440) {
        this.$store.commit('changeScreenWidth', '180px')
      } else if (document.documentElement.clientWidth > 1360) {
        this.$store.commit('changeScreenWidth', '100px')
      } else {
        this.$store.commit('changeScreenWidth', '80px')
      }
    })
  }
}
</script>

<style>
@import "../static/css/main.css";
@import "../static/css/color-dark.css";

</style>
