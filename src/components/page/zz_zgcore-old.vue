<template>
  <div>
    <button @click="ifShow">点击</button>
    <btnCommon :dialogVisible="if_show" @cancel="cancelFunc"></btnCommon>
    <chart-common :flag="0"></chart-common>
  </div>
</template>
<script>
import chartCommon from './myhxCommon/chartCommon.vue'
import btnCommon from './myhxCommon/btnCommon.vue'
export default {
  components: { chartCommon, btnCommon },
  data () {
    return {
      if_show: false
    }
  },
  methods: {
    ifShow () {
      this.if_show = true
    },
    cancelFunc () {
      this.if_show = false
    }
  }
}
</script>
<style>

</style>
