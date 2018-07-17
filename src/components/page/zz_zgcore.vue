<template>
  <div>
     <div class="addZD">
        <el-button type="warning" class="reverseBtn" size="small"  @click="addZb"><i class="iconfont">&#xe623;</i>自选指标</el-button>
     </div> 
     <div style="padding:20px 1.64% 0">
       <chart-common flag="0" v-if="is_show"></chart-common>  
     </div>
     <btnCommon :dialogVisible="addZb_dialogVisible" @cancel='cancel' :sureADD="sureAdd" flag="0" v-if="addZb_dialogVisible"></btnCommon>
  </div>
</template>
<script>
import chartCommon from './myhxCommon/chartCommon.vue'
import btnCommon from './myhxCommon/btnCommon.vue'
export default {
  components: { chartCommon, btnCommon },
  data () {
    return {
      is_show: true,
      addZb_dialogVisible:false,
    }
  },
  methods: {
    sureAdd () {
      this.addZb_dialogVisible = false
      this.is_show = false
      setTimeout(() => {
        this.is_show = true
      },0)
    },
    cancel(){
      this.addZb_dialogVisible=false
    },
    // 添加指标
    addZb: function () {
      this.addZb_dialogVisible=true
    },
  }
}
</script>
<style scoped>
.addZD{
  position: absolute;
    right: 1.64%;
    top: 12px;
}
</style>
