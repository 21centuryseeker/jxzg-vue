<template>
<div v-loading="load" class="commonLoading" style="height: 100%;width: 100%;">
  <slot name="infos"></slot>
</div>
</template>

<script>
export default {
  name: 'BlockLoading111',
  props: {
    dataFill: Object
  },
  data () {
    return {
      load: true
    }
  },
  watch: {
    dataFill (val) {
      let data = val.datas
      if (typeof data === 'object') {
        if (data !== '') {
          this.load = false
        }
      } else {
        if (data.length > 0) {
          this.load = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
