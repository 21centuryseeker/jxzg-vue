<template>
  <div class="mainContent1">
    <div class="tab-content">
      <div class="countBox newZy_1">
        <div class="split-t">
          <el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">专业</p>
              <p class="num">
                <span>{{list_zyjbqk.value1}}</span>
                个
              </p>
            </div>
          </el-card>
        </div>
        <div class="split-t">
          <el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">重点专业</p>
              <p class="num">
                <span>{{list_zyjbqk.value2}}</span>
                个
              </p>
            </div>
          </el-card>
        </div>
        <div class="split-t" style="padding-right: 0;">
          <el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #4472c4  ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">特色专业</p>
              <p class="num">
                <span>{{list_zyjbqk.value3}}</span>
                个
              </p>
            </div>
          </el-card>
        </div>
      </div>
      <div class="countBox newZy_1">
        <div class="split-t">
          <el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">招生专业数</p>
              <p class="num">
                <span>{{list_zyjbqk.value4}}</span>
                个
              </p>
            </div>
          </el-card>
        </div>
        <div class="split-t">
          <el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #a5a5a5 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">新增专业数</p>
              <p class="num">
                <span>{{list_zyjbqk.value5}}</span>
                个
              </p>
            </div>
          </el-card>
        </div>
        <div class="split-t" style="padding-right: 0;">
          <el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">撤销专业数</p>
              <p class="num">
                <span>{{list_zyjbqk.value6}}</span>
                个
              </p>
            </div>
          </el-card>
        </div>
      </div>
      <div class="countBox clearfix">
        <template v-for="(item, index) in zybList">
          <div class="split-t" style="width: 50%;padding-right: 0;height: 96px;margin-bottom: 20px;" :style="{'padding-left': index%2 * 8.5 + 'px', 'padding-right': (index+1)%2 * 8.5 + 'px'}" :key="index">
            <div class="countBoxR" style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);width: 100%;height: 100%;background: #fff;padding-left: 0;box-sizing: border-box;padding-top: 0;padding-bottom: 0;">
              <div style="height: 100%;">
                <table style="width: 100%;height: 100%;" class="newZy_table" border="0" cellspacing="0" cellpadding="0">
                  <tbody border="0">
                    <tr>
                      <td style="height: 100%;width: 10%;">
                        <div style="height: 100%;background: #70ad47;color: #fff;word-break: break-all;box-sizing: border-box;position: relative;">
                          <div style="position: absolute;top: 50%;transform: translateY(-50%);width: 100%;">
                            <template v-if="item.value1.length > 3">
                              {{item.value1.slice(0, -3)}}<br/>{{item.value1.slice(-3)}}
                            </template>
                            <template v-else>
                              {{item.value1}}
                            </template>
                          </div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value2}}</span>
                          <div>专业数</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value3}}</span>
                          <div>课程数</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value4}}</span>
                          <div>教师数</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value5}}</span>
                          <div>学生数</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_lnszdzys" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_gyxjhzsqk" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_gyxsjzsybdqk" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_gyxsylx" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_lngyxbysrs" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <!-- <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_gyxbysqk" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div> -->
      <div class="targetBox">
        <el-card class="box-card">
          <div id="chart_box_gyxhdzs" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <!-- 历年各院系毕业生就业人数 -->
          <div id="chart_box_gyxbysjy" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <!-- 历年各院系毕业生就业率 -->
          <div id="chart_box_lngyxbysjyl" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <!-- 历年各院系毕业生对口就业人数 -->
          <div id="chart_box_gyxbysdkjy" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
      <div class="targetBox">
        <el-card class="box-card">
          <!-- 历年各院系毕业生对口就业率 -->
          <div id="chart_box_lngyxdkjyl" class="chartBox chart_box_cjs">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import chartCommon from "./pic_common.js";
export default {
  data() {
    return {
      zybList: [],
      baseUrl: this.HOST + "/tr/GroupPortrait/web/getPortraitInfoById",
      listUrl: this.HOST + "/tr/GroupPortrait/web/getListInfoById",
      list_zyjbqk: {
        // 基本情况
        value1: "", //专业
        value2: "", // 重点专业
        value3: "", //特色专业
        value4: "", //招生专业数
        value5: "", // 新增专业数
        value6: "" //撤销专业数
      }
    };
  },
  mounted() {
    // 获取专业画像基本信息
    this.getList(25, data => {
      Object.assign(this.list_zyjbqk, data);
    });
    // 各院系基本情况
    this.$ajaxGet(this.listUrl, { id: 65, pageNum: 1, pageSize: 1000 }, res => {
      if (res.success) {
        this.zybList = res.data.data;
      } else {
        this.$message({
          type: "error",
          message: res.msg
        });
      }
    });
    // 历年设置的专业数
    chartCommon.getLineOrBar(this,this.baseUrl,78,"chart_box_lnszdzys",
    );
    // 历年各院系计划招生情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 80,
      dom: "chart_box_gyxjhzsqk",
      type: "line"
    });
    // 各院系实际招生与报道情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 27,
      dom: "chart_box_gyxsjzsybdqk",
      type: "bar"
    });
    // 各院系生源类型
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 28,
      dom: "chart_box_gyxsylx",
      type: "bar"
    });
    // 历年各院系毕业生人数
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 82,
      dom: "chart_box_lngyxbysrs",
      type: "line"
    });
    // 各院系毕业生情况
    // chartCommon.getDataZoom(this, this.baseUrl, 29, "chart_box_gyxbysqk", {
    //   x: 30,
    //   y: 60,
    //   x2: 50,
    //   y2: 110
    // });
    // 各院系获得证书的毕业生情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 30,
      dom: "chart_box_gyxhdzs",
      type: "bar"
    });
    // 历年各院系毕业生就业人数
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 87,
      dom: "chart_box_gyxbysjy",
      type: "line"
    });
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 88,
      dom: "chart_box_lngyxbysjyl",
      type: "line"
    });
    // 历年各院系毕业生对口就业人数
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 89,
      dom: "chart_box_gyxbysdkjy",
      type: "line"
    });
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 90,
      dom: "chart_box_lngyxdkjyl",
      type: "line"
    });
  },
  methods: {
    getList(id, func) {
      this.$ajaxGet(this.baseUrl, { id: id }, res => {
        if (res.success) {
          if (this.variable_type(func) === "[object Function]") {
            func(res.data);
          }
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.clearfix {
  *zoom: 1;
}
.clearfix:after {
  display: block;
  clear: both;
  content: " ";
  height: 0;
  visibility: hidden;
}
.mainContent1 {
  background-color: #f1f4f5;
  padding: 0 1.64%;
  margin-top: 25px;
}
.mainContent1 .el-table {
  min-height: 336px;
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
  top: 1px;
  height: 39px;
  background-color: #f1f4f5;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #f1f4f5;
}

.titleTop {
  line-height: 18px;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
.marbottom24 {
  margin-bottom: 24px;
}
.noticeBox .box-card {
  height: 120px;
}
.noticeBox .el-scrollbar__wrap {
  overflow-x: hidden;
}
.noticeL {
  float: left;
  width: 110px;
  height: 80px;
  text-align: right;
  line-height: 80px;
  color: #e96c72;
  font-size: 18px;
}
.noticeL span {
  font-size: 18px;
  vertical-align: top;
}
.noticeL .iconfont {
  font-size: 45px;
}
.noticeR {
  margin-left: 110px;
  padding-left: 50px;
}
.noticeR .scrollbar {
  height: 80px;
}
.noticeRList {
  float: left;
  width: 50%;
}
.noticeRList .el-alert {
  /* min-width:400px; */
  width: 98%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  /* margin-left:3% */
}
.mainContent1 .el-alert:nth-child(2n-1) {
  margin-right: 2%;
}
.countBox {
  text-align: center;
}
.countBox .el-carousel,
.el-carousel__container {
  height: 145px !important;
}
.banner .list_card {
  float: left;
  width: 31%;
  margin-left: 2.2%;
}
.countBox .targetCount .el-card {
  background-color: #70ad47;
}
.countBox .targetCount .text,
.countBox .targetCount p,
.countBox .targetCount .num span {
  color: #fff;
}
.countBoxL,
.countBoxR {
  vertical-align: middle;
  display: inline-block;
  padding-bottom: 14px;
  padding-top: 14px;
}
.countBoxL {
  width: 20%;
  text-align: center;
}
.countBoxL .iconfont {
  font-size: 42px;
  color: #fff;
  line-height: 62px;
}
.banner .list_card .countBoxL .iconfont {
  font-size: 48px;
  line-height: 72px;
}
.banner .countBoxL .iconColor {
  color: #ffc000;
}
.banner .countBoxL .iconColor1 {
  color: #4472c4;
}
.banner .countBoxL .iconColor2 {
  color: #ed7d31;
}
.countBoxR {
  width: 60%;
  padding-left: 15px;
}
.countBox .box-card {
  height: 134px;
}

.countBox p,
.countBox .text {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.countBox p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.targetBox {
  margin-top: 15px;
}
.targetBox .box-card {
  height: 390px;
}
.targetBox .title {
  font-size: 16px;
  color: #37474f;
  line-height: 16px;
  margin-bottom: 20px;
}
.box-card {
  margin-bottom: 24px;
}

/* /我的目标 */
.targeTable .has-gutter th,
.targeTable .has-gutter .el-table tr {
  background-color: #f5f8fa;
}
.chartBox {
  height: 350px;
}
/*
  '未开始': '#a5a5a5',
            '进行中': '#ffc000',
            '已完成': '#70ad47',
            '已延期': '#ed7d31',
            '延期完成': '#4472c4'
  */
.style_one {
  background: #ffc000;
}
.style_two {
  background: #a5a5a5;
}
.style_three {
  background: #70ad47;
}
.style_four {
  background: #ed7d31;
}
.style_five {
  background: #4472c4;
}
.span_state {
  color: #fff;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  line-height: 22px;
  border-radius: 11px;
  padding: 0 10px;
  font-size: 12px;
}
.split-t {
  float: left;
  width: 20%;
  /* margin-right: 17px; */
  box-sizing: border-box;
  padding-right: 17px;
}

.conutSecondRowBox .el-col-10 .el-card {
  background-color: #ed7d31;
}
.conutSecondRowBox .el-col-14 .el-card {
  background-color: #70ad47;
}
.conutSecondRowBox .el-col-14 .iconfont {
  color: #95cf6e !important;
}
.conutSecondRowBox .el-col-10 .iconfont {
  color: #f6a670 !important;
}
.conutSecondRowBox .el-card__body {
  padding-top: 20px;
}
.conutSecondRowBox .el-card__body .text {
  font-size: 14px;
  font-weight: bold;
  color: white;
}
.conutSecondRowBox .el-card__body .num {
  font-size: 14px;
  color: white;
  padding-top: 10px;
}
.conutSecondRowBox .el-card__body .num span {
  font-size: 20px;
  color: white;
}
.conutSecondRowBox .targetCount {
  margin-left: 15px;
}
.second_title {
  font-size: 16px;
  color: white;
  font-weight: bold;
}
.newZy_table {
  color: #a3afb7;
  font-size: 12px;
}
.newZy_table span {
  font-size: 30px;
  color: #70ad47;
  margin-right: 9px;
}
.countBox.newZy_1 .split-t {
  width: 33.33%;
}
.countBox.newZy_2 .split-t {
  width: 33.33%;
}
</style>
