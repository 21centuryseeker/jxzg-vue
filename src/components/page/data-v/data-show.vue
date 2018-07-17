<template>
<!--<div>-->
  <!--<keep-alive>-->
    <!--<data-show-schoole v-if="isShow === 1"></data-show-schoole>-->
  <!--</keep-alive>-->
  <!--<keep-alive>-->
    <!--<data-show-professional v-if="isShow === 2"></data-show-professional>-->
  <!--</keep-alive>-->
  <!--<keep-alive>-->
    <!--<data-show-class v-if="isShow ===3"></data-show-class>-->
  <!--</keep-alive>-->
  <!--<keep-alive>-->
    <!--<data-show-teach v-if="isShow ===4"></data-show-teach>-->
  <!--</keep-alive>-->
<!--<keep-alive>-->
    <!--<data-show-student v-if="isShow === 5"></data-show-student>-->
<!--</keep-alive>-->
  <!--<keep-alive>-->
    <!--<data-show-driver v-if="isShow === 6"></data-show-driver>-->
  <!--</keep-alive>-->
<!--</div>-->
  <div>
      <data-show-schoole v-if="isShow === 1"></data-show-schoole>
      <data-show-professional v-if="isShow === 2"></data-show-professional>
      <data-show-class v-if="isShow ===3"></data-show-class>
      <data-show-teach v-if="isShow ===4"></data-show-teach>
      <data-show-student v-if="isShow === 5"></data-show-student>
      <data-show-driver v-if="isShow === 6"></data-show-driver>
  </div>
</template>
<script>
import DataShowSchoole from './data-show-school'
import DataShowProfessional from './data-show-professional'
import DataShowClass from './data-show-class'
import DataShowDriver from './data-show-driver'
import DataShowTeach from './data-show-teach'
import DataShowStudent from './data-show-student'
export default {
  data () {
    return {
      isShow: 1
    }
  },
  watch: {
    isShow (val) {
      this.process(val)
      // console.log(val)
      // setTimeout(() => {
      //   this.process(val)
      // }, 4000)
    }
  },
  mounted () {
    // this.isShow = 2
    setInterval(() => {
      if (this.isShow >= 6) {
        this.isShow = 1
      } else {
        this.isShow++
      }
      // this.isShow = 2
    }, 10000)
  },
  methods: {

  },
  components: {
    DataShowSchoole,
    DataShowProfessional,
    DataShowClass,
    DataShowDriver,
    DataShowTeach,
    DataShowStudent
  }

}
</script>
<style scoped>
  /*页面开始*/
  .wrapper{
    margin: 0 auto;
    width: 100%;
  }

  /*头部*/
  .headerBox{
    position: relative;
  }
  .headerBox .bg_box {
    margin-bottom: 18px;
    padding-bottom: 20px;
    background-color: #111;
    border-bottom: 1px solid #3d3d3d;
  }
  .headerBox .bg_box .bg_box_L,
  .headerBox .bg_box .bg_box_R{
    width: 31.6%;
    height: 44px;
    position: relative;
  }
  .headerBox .bg_box .bg_box_L,
  .headerBox  .inner .lineR{
    background: -webkit-linear-gradient(90deg,  #151515 , #313131 ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(90deg, #151515 , #313131); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(90deg,  #151515 , #313131); /* Firefox 3.6 - 15 */
    background: linear-gradient(90deg, #151515 , #313131); /* 标准的语法（必须放在最后） */
  }
  .headerBox .bg_box .bg_box_R,
  .headerBox  .inner .lineL{
    background: -webkit-linear-gradient(90deg,  #313131, #151515); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(90deg,  #313131, #151515); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(90deg,  #313131, #151515); /* Firefox 3.6 - 15 */
    background: linear-gradient(90deg,  #313131, #151515); /* 标准的语法（必须放在最后） */
  }

  .headerBox .inner{
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -18.4%;
    width: 36.8%;
    background-color: #111;
    padding: 5px 89px 8px;
  }
  .headerBox .inner .pic{
    display: block;
    position: absolute;
    top: 1px;
    width: 89px;
    height: 89px;
  }
  .headerBox .inner .picL{
    left: 0;
    background: url(../../../assets/img/xiantiao.png) no-repeat left top;

  }
  .headerBox .inner .picR{
    right: 0;
    background: url(../../../assets/img/xiantiaoR.png) no-repeat right top;

  }
  .headerBox  .inner .line{
    position: absolute;
    bottom: 0;
    width: 32%;
    height: 1px;
  }
  .headerBox  .inner .lineL{
    left: 89px;
  }
  .headerBox  .inner .lineR{
    right: 89px;
  }
  .headerBox h2{
    position: relative;
    font-size: 32px;
    line-height: 48px;
    background: linear-gradient(to bottom, #fafafa, #7d7d7d);
    -webkit-background-clip: text;
    color: transparent;
  }

  .headerBox h5{
    font-size: 22px;
    line-height: 32px;
    color: #a09f9f;
  }
</style>
