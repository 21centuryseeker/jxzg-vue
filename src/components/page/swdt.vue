<template>
  <div id="w_zdbg">
    <div class="tab-control tab-controlFixed clearfix">
      <div class="tab-control-item" v-for="(item,index) in items">
        <div v-if="index==0" class="active tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>
        <div v-else-if="index!=0" class="tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>
      </div>
    </div>

    <el-button type="warning" class="reverseBtn dcBtn" size="mini" @click="addDc" >
      <i class="iconfont">&#xe623;</i>导出</el-button>
    <div>
      <div>职业院校内部质量保证体系自我诊改报告</div>
      
     
    </div>
   
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [], // 顶部切换
      deptId:1
    };
  },
  watch: {},
  mounted() {
    let self = this;
    self.$ajax(
      "post",
      self.HOST + "/tr/autognosis/web/autognosiShow",
      {},
      res => {
        if (res.success) {
          self.items = res.obj;
          let defaultDepId = res.obj[0].deptId;
          self.deptId = defaultDepId;
          
        } else {
          self.$message({
            message: res.msg,
            type: "error"
          });
        }
      }
    );
  },
  methods: {
  
  }
};
</script>

<style scoped>
#w_zdbg{
  padding-top: 66px
}
.tab-control {
  width: 100%;
  font-size: 14px;
  color: #76838f;
  background-color: #fff;
  border-bottom: 1px solid #e4eaec;
  margin-bottom: 26px;
}
.tab-control .tab-control-item div {
  line-height: 38px;
  float: left;
  padding: 0 25px;
  background-color: #fff;
  border-right: 1px solid #fff;
  cursor: pointer;
}
.tab-control .tab-control-item .active {
  position: relative;
  top: 0px;
  z-index: 2;
  height: 38px;
  background-color: #f1f4f5;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #f1f4f5;
  margin-bottom: -1px;
}
</style>
