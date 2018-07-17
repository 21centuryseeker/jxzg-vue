<template>
  <div class="group_box">
    <div class="type_group" style="margin-bottom: 24px">
      <el-radio-group v-model="type" @change="chare">
        <el-radio-button label="3" >
          <img src="../../../assets/major-group.png" alt="">
          <div>专业</div>
        </el-radio-button>
        <el-radio-button label="4" >
          <img src="../../../assets/class-group.png" alt="">
          <div>课程</div>
        </el-radio-button>
         <el-radio-button label="1">
          <img src="../../../assets/teacher-group.png" alt="">
          <div>教师</div>
        </el-radio-button>
        <el-radio-button label="2">
          <img src="../../../assets/student-group.png" alt="">
          <div>学生</div>
        </el-radio-button>
      </el-radio-group>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: '3'
    }
  },
  mounted () {
    let route = this.$router.currentRoute.path.split('/')
    let r = route[route.length - 1]
    if (r && r !== 'sjhx-grhx') {
      if (r === 'teacher') {
        this.type = 1
      } else if (r === 'lesson') {
        this.type = 4
      } else if (r === 'student') {
        this.type = 2
      } else {
        this.type = 3
      }
    } else {
      this.type = 3
    }
  },
  methods: {
    chare: function (ty) {
    //  this.type = ty
      if (ty === '3') {
        this.$router.push('/sjhx-grhx/')
      } else if (ty === '2') {
        this.$router.push('/sjhx-grhx/student')
      } else if (ty === '1') {
        this.$router.push('/sjhx-grhx/teacher')
      } else if (ty === '4') {
        this.$router.push('/sjhx-grhx/lesson')
      }
    }
  }
}
</script>
<style scoped>
 .group_box .el-radio-button__inner{
    color: darkgrey!important;
  }
.group_box {
  margin-bottom: 24px;
}
.group_box .el-radio-button>div:hover,.el-radio-button__inner{
  color: #70ad47
}
</style>
