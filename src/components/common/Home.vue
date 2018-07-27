<template>
  <div class="wrapper" style="background: #f1f4f5">
    <cHead></cHead>
    <cSlider></cSlider>
    <div id="out-contetn" class="content" v-loading="isLoading" element-loading-text="拼命加载中">
      <div style="width: 100%;min-width: 1010px;min-height: 100%;box-sizing:border-box;padding-bottom: 60px;position: relative;">
        <div style="padding: 1.64% 1.64% 12px 1.64%;" v-if="isShow">
          <span style="font-size: 18px;color: #37474f" v-html="changeTitle"></span>
        </div>
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
        <el-footer class="home_footer">
          <el-row :gutter="0">
            <el-col :span="8" style="text-align: left">
              Copyright 精华教育科技股份有限公司 版权所有
            </el-col>
            <el-col :span="12">
              &nbsp;
            </el-col>
            <el-col :span="4" style="text-align: right">
              当前版本：V1.5
            </el-col>
          </el-row>
        </el-footer>
      </div>

    </div>
  </div>
</template>

<script>
import cHead from "./Header.vue";
import cSlider from "./Slider.vue";
export default {
  components: {
    cHead,
    cSlider
  },
  computed: {
    isLoading: function() {
      let loading = this.$store.state.allLoading;
      return loading;
    },
    changeTitle: function() {
      let title = this.$store.state.checkTitle;
      // console.log(title)
      return title;
    },
    isShow: function() {
      let isShow = this.$store.state.isShowSubTitle;
      // console.log(isShow)
      return isShow;
    }
  }
};
</script>
<style>
.home_footer {
  color: #76838f;
  font-size: 12px;
  border: 1px solid #e4eaec !important;
  position: absolute !important;
  bottom: 0 !important;
  height: 40px !important;
  background-color: white !important;
  width: 100% !important;
  line-height: 40px !important;
}
.home_footer .el-col {
  font-size: 12px;
}
.group td div {
  font-size: 20px !important;
}
.el-pagination {
  text-align: center;
}
.span_need {
  color: #de0e0e !important;
}
/* .el-dialog {border-radius: 6px;width: 700px;} */
/* 公共头部 */
div.box_title {
  font-size: 16px;
  color: #303133;
  height: 16px;
  line-height: 16px;
  margin-bottom: 21px;
}
i.title_left {
  display: inline-block;
  width: 4px;
  height: 16px;
  background: #069fed;
  border-radius: 2px;
  vertical-align: top;
  margin-right: 8px;
}
/* 搜索条件样式 */
.search_box {
  overflow: hidden;
}
.input_box {
  width: 323px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 20px;
}
.input_box span {
  font-size: 14px;
  color: #324158;
}
.input_box .input_box_left {
  width: 100px;
  display: inline-block;
  text-align: right;
}
.input_box .input_box_right {
  width: 200px;
  margin-left: 20px;
  /* float: right; */
}
.search_btn_box {
  display: inline-block;
}
div.btn_box {
  margin: 45px 0 20px 0;
}
/* 公共不同状态信息的容器样式 */
div.state_box_item {
  font-size: 0;
  padding-left: 40px;
}
div.state_div_right {
  display: inline-block;
  font-size: 0;
  border: 1px solid #dcdfe6;
  height: 34px;
  line-height: 34px;
  border-radius: 4px;
  margin-left: 24px;
  margin-top: 33px;
}
div.state_div_right a {
  display: inline-block;
  font-size: 14px;
  padding: 0 58px;
}
div.state_div_right a.active {
  background: #409eff;
  color: #fff;
}
.routerLinkStyle {
  color: #409eff;
}
.upload-demo .el-upload {
  width: auto !important;
  height: auto !important;
  overflow: initial;
}
.content {
  padding: 0;
  background: #f1f4f5;
  /* min-width: 1240px; */
  overflow-y: auto;
}
.el-icon-close-tip {
  display: none !important;
}

.type_group {
  height: 80px;
  background: #fff;
}
.type_group .el-radio-group {
  height: 100%;
}
.type_group .el-radio-button__inner {
  border: 0;
  display: inline-block;
  height: 80px;
  width: 100px;
  padding: 15px 0;
}
.type_group .el-radio-button__inner img {
  height: 30px;
}
.type_group .el-radio-button:first-child .el-radio-button__inner {
  border-left: 0;
}
.type_group .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background: #fff;
  color: #70ad47;
  border: 0;
  -webkit-box-shadow: 0px 0 0 0 transparent;
  box-shadow: 0px 0 0 0 transparent;
  border-bottom: 3px solid #70ad47;
}
.boxShadow:hover {
  /* z-index: 99; */
  /* box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1); */
  -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
  position: relative;
  transition: all 0.5s ease-in 0s;
  /* top: -2px; */
}
.el-table .cell {
  line-height: 24px;
  color: #76838f;
}
.zb_table_style .cell {
  line-height: 20px;
}
.el-table .cell a {
  color: #76838f;
}
.bg_box {
  padding: 0 1.64%;
  background: #f1f4f5;
}
.container_box_header {
  padding-left: 1.64%;
  /* height: 60px; */
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #80b748;
  background: #80b748;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #80b748;
}
.el-upload.el-upload--text {
  border: 0;
}
.el-button--primary {
  background: #80b748;
  border-color: #80b748;
}
.el-button--primary:hover,
.el-button--primary.active {
  background: #57a026;
  border-color: #57a026;
}
.el-tabs__item {
  width: 50%;
  text-align: center;
}
.hover_fj,
.hover_zd {
  text-align: center;
}
.my_tab_style .el-tabs__nav {
  width: 100%;
}
.my_tab_style .el-tabs__item.is-active {
  color: #80b748;
}
.my_tab_style .el-tabs__active-bar {
  background-color: #80b748;
}
.my_tab_style .el-tabs__item:hover {
  color: #80b748;
  cursor: pointer;
}
.title_box {
  background: #fff;
}
.title_box .el-radio-button__inner {
  background: transparent !important;
  border: 0 !important;
}
.title_box .el-radio-button__inner:hover {
  color: #76838f !important;
}
.title_box .el-radio-button__inner {
  color: #76838f !important;
}
.title_box .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0;
}
.title_box .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background: #f1f4f5 !important;
  border: 0 !important;
  color: #76838f !important;
  box-shadow: 0 0 0 !important;
}
/* 群体画像，教师 */
.teacher_box .el-table td,
.teacher_box .el-table th {
  padding: 0 !important;
}
.teacher_box div.cell {
  height: 32px;
  line-height: 32px;
}

/**/
.el-pager li.active {
  color: #70ad47;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #70ad47;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #70ad47;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #70ad47;
  border-color: #70ad47;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #70ad47;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #70ad47;
}
.el-checkbox__inner:hover {
  border-color: #70ad47;
}
.grDialog .el-dialog {
  width: 440px;
}
.mainContentB .box-card {
  margin-left: 0;
}
/*计划目标详情*/
.my_tab_style .detail_item_left {
  text-align: right;
}
.tableBox .el-table .cell {
  line-height: 32px;
  padding: 0 30px !important;
}
.tableBoxNoPadding .el-table .cell {
  padding: 0 !important;
}
.tableBoxNoPadding .el-table th > .cell {
  line-height: 16px;
}
.table_page_box .cell {
  line-height: 54px !important;
}
.el-loading-text {
  color: #70ad47 !important;
}
.el-loading-spinner .path {
  stroke: #70ad47 !important;
}

.el-radio-button__inner:hover {
  color: #70ad47;
}
.operation_item_right .el-range-input:nth-last-of-type(1) {
  /* margin-left: 20px; */
}
.item_right .el-range-input:nth-last-of-type(1) {
  margin-left: 20px;
}
.zgcoreyw .el-tag {
  background-color: rgb(112, 171, 71) !important;
  border-color: rgb(112, 171, 71) !important;
}
.el-tag {
  background-color: #f1f7ed !important;
  border-color: #d5e7c9 !important;
}
#zgzjdyyjy .el-tabs__nav-scroll {
  background-color: white;
}
#zgzjdyyjy .is-active {
  background-color: #f1f4f5 !important;
  color: #76838f;
}
/* #zgzjdyyjy .el-tabs__nav > div:nth-child(2){
  margin-left: 10px;
}
#zgzjdyyjy .el-tabs__nav > div:nth-child(1){
  margin-right: 20px;
} */
#zgzjdyyjy .el-tabs__item {
  color: #76838f !important;
}
#zgzjdyyjy .el-tabs__item:hover {
  color: #76838f !important;
}
#zgzjdyyjy .el-tabs__item {
  border: none;
}
#zgzjdyyjy .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
}
#zgzjdyyjy .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom: none;
}
#zgzjdyyjy .el-tabs__item {
  width: auto;
  line-height: 38px;
  padding: 0 25px;
  height: 38px;
  color: #76838f;
  font-size: 14px;
}
#zgzjdyyjy .el-tabs__item.is-active {
  color: #76838f;
}

.slgl_box .el-table th {
  text-align: center !important;
}

.lanmo .el-tabs__nav .is-active {
  border-bottom: none !important;
  background-color: #f1f4f5;
}
.lanmo .el-tabs__nav {
  border-left: none !important;
  background-color: #f1f4f5;
}
.lanmo .el-tabs__item {
  color: #76838f !important;
  background-color: white;
  border-bottom: 1px solid #f1f4f5 !important;
}
.lanmo .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-right: 0 !important;
}
#zgzjdyyjy .el-button {
  line-height: 15px;
}
.mainContentB .titleTop {
  padding-left: 0;
  border-left: none;
}
.zBDialog #tab-second {
  color: #303133;
}
.zBDialog .el-tabs__content {
  padding-right: 15px;
}
#zBDialog .el-tabs__content {
  padding-right: 30px;
}
.el-progress-bar__inner {
  background-color: #ffc100 !important;
}
.el-progress__text {
  font-size: 12px !important;
}
.el-progress-bar__outer {
  background-color: #dbe1e8 !important;
}
#zgre .el-collapse-item__header {
  height: 64px !important;
  line-height: 64px !important;
}
#zgre .el-collapse-item__arrow {
  line-height: 64px !important;
}
.mainContentB .box-card {
  position: relative;
  box-shadow: none;
}
.mainContentB .box-card:hover {
  z-index: 2;
  /* -moz-box-shadow:4px 10px 20px #BDBDBD;
   -webkit-box-shadow:4px 10px 14px #BDBDBD;
    box-shadow:4px 10px 14px #BDBDBD; */
  -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.tab-controlFixed {
  position: fixed;
  left: 240px;
  right: 0;
  top: 67px;
  z-index: 10;
  -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
/*#zgre .el-main{*/
/*padding: 0!important;*/
/*}*/
.marginTop66 {
  margin-top: 66px;
}
#zgzjdyyjy .el-tabs__header {
  position: fixed;
  z-index: 10;
  width: 100%;
}
/* 弹出层的定位 */
.wrapper .el-loading-mask {
  position: fixed;
  top: 70px;
  left: 241px;
}
.sjqxcontent .save_in_dialog {
  padding: 9px 15px;
  float: right;
  margin-right: 5%;
  margin-top: 10px;
  line-height: 8px;
}
.el-tooltip__popper.is-dark {
  height: 5px;
  line-height: 5px;
}
#mainPortrain .box-card,
#teachContent .box-card,
#majorContent .box-card,
#lessonContent .box-card {
  margin-bottom: 0;
}
.tree-side {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 800px;
}
.tree-side::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  position: absolute;
  padding-right: calc(100vw-100% +1rem);
}
.tree-side::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #dedfe0;
  position: relative;
  top: 0;
}
.tree-side::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: white;
  position: relative;
  top: 0;
}
  .glfwjx .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 4px!important;
  }
  .glfwjx .el-radio-button--small .el-radio-button__inner{
    border-left: 1px solid #ccc;
    border-radius: 4px!important;
  }
  .glfwjx .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    border-left: none!important;
  }
  #zgre .tree-side {
    height: 600px;
  }

  #table-fill-report table{
    border: none;
    background-color: white;
    padding: 20px;
  }
#table-fill-report table tbody tr:nth-child(1){
  height: 120px;
}
#table-fill-report table tbody tr:nth-child(n+2){
  height: 50px;
}
#table-fill-report table tbody tr td{
  padding-left: 8px;
}
  #table-fill-report .sinput{
    height: 26px;
    width: 80%;
  }
</style>
