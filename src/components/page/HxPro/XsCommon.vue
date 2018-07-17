<template>
  <div class="group_box">
    <div class="title_box tab-controlFixed" >
      <el-radio-group v-model="type" @change="chare" v-if="$route.path.indexOf('xxhx') === -1">
        <el-radio-button label="1" >群体画像</el-radio-button>
        <el-radio-button label="2" >单体画像</el-radio-button>
      </el-radio-group>
    </div>
    <router-view style="margin-top: 60px;"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: '1'
    }
  },
  mounted () {
    let route = this.$router.currentRoute.path.split('/')
    let r = route[route.length - 1]
    if (r === 'qt') {
      this.type = 1
    } else if (r === 'dt') {
      this.type = 2
    }
    // if (r !== 'sjhx-qthx') {
    //   if (r === 'pr') {
    //     this.type = 4
    //   } else if (r === 'class') {
    //     this.type = 5
    //   } else if (r === 'student') {
    //     this.type = 2
    //   } else {
    //     this.type = 1
    //   }
    // } else {
    //   this.type = 3
    // }
  },
  methods: {
    chare: function (ty) {
      let route = this.$route.path.split('/')
      // alert(route[1])
      if (ty === '1') {
        // 跳转到个体
        this.$router.push('/' + route[1])
      } else if (ty === '2') {
        // 跳转到群体
        this.$router.push('/' + route[1] + '/dt')
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
