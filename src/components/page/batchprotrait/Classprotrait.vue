<template>
  <div class="mainContent_school">
    <div class="list_card marginBtom24 clearfix">
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">课程总数</p>
            <p class="num">
              <span>{{list_01.value1}}</span>门
            </p>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">公共课</p>
            <p class="num">
              <span>{{list_01.value2}}</span>门
            </p>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">公共基础课</p>
            <p class="num">
              <span>{{list_01.value3}}</span>门
            </p>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor4">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">专业课</p>
            <p class="num">
              <span>{{list_01.value4}}</span>门
            </p>
          </div>
        </el-card>
      </div>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lnszkczs"></div>
      </el-card>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_glxkcsfbqk"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_glxjhkssfbqk"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_gkclxfbqk"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_gkcxzfbqk"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_gyxkskcfbqk"></div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_gyxsjkckssfbqk"></div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lngyxkskcsfbqk"></div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lngyxsjkckssfbqk"></div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_gyxxqhzkchjpkc"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
import chartCommon from "./pic_common.js";
export default {
  data() {
    return {
      baseUrl: this.HOST + "/tr/GroupPortrait/web/getPortraitInfoById",
      list_01: {
        // 基本情况
        value1: "", //教职工总数
        value2: "", // 在校生总数
        value3: "", //生师比
        value4: "" //固定资产总值
      },
      list_jbbxtj: {
        value1: "", //学校总占地面积
        value2: "", // 学校产权校舍面积
        value3: "" //今年新增校舍
      },
      list_gctszl: {
        value1: "", //纸质图书总册数
        value2: "", // 本学年新增数
        value3: "", //生均图书
        value4: "", //中文纸质专业期刊
        value5: "", // 外文纸质专业期刊
        value6: "" //电子专业期刊
      },
      list_yls_jf_js: {
        // 阅览室、机房、教室
        value1: "", //阅览室座位数
        value2: "", // 计算机数
        value3: "" //教室数
      },
      list_xnsjjd: {
        // 校内实践基地
        value1: "", //实践基地总数
        value2: "", // 建筑面积
        value3: "", //设备总数
        value4: "" //设备总值
      },
      list_xwsjjd: {
        // 校外实践基地
        value1: "", //实践基地总数
        value2: "", // 实习实训项目
        value3: "", //接待学生量
        value4: "" //接收应届毕业生就业数
      },
      list_bxjf: {
        // 办学经费
        value1: "", //实践基地总数
        value2: "" // 实习实训项目
      },
      list_zy_kc: {
        // 专业及课程设置
        value1: "", //院系
        value2: "", // 专业
        value3: "" //课程
      },
      list_zslq: {
        // 招生及录取情况
        value1: "", //计划招生总人数
        value2: "", // 实际录取总人数
        value3: "" //实际报到总人数
      },
      list_xsst: {
        // 学生社团
        value1: "", //社团共计
        value2: "" // 现有成员
      }
    };
  },
  mounted() {
    // 获取课程画像基本情况
    this.getList(33, data => {
      Object.assign(this.list_01, data);
    });
    // 历年设置课程总数
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      79,
      "chart_box_lnszkczs",
      -30,
      { grid: { y2: 80 } }
    );
    // 各类型课程数分布情况
    chartCommon.getPie(this, this.baseUrl, 34, "chart_box_glxkcsfbqk");
    // 各类型计划课时数分布情况
    chartCommon.getPie(this, this.baseUrl, 35, "chart_box_glxjhkssfbqk");
    // 各课程类型分布情况
    chartCommon.getPie(this, this.baseUrl, 36, "chart_box_gkclxfbqk");
    // 各课程性质分布情况
    chartCommon.getPie(this, this.baseUrl, 37, "chart_box_gkcxzfbqk");
    // 各院系开设课程数分布情况
    chartCommon.getDataZoom(this, this.baseUrl, 38, "chart_box_gyxkskcfbqk", {
      x: 30,
      y: 60,
      x2: 50,
      y2: 110
    });
    // 各院系实践课程课时数分布情况
    chartCommon.getDataZoom(
      this,
      this.baseUrl,
      39,
      "chart_box_gyxsjkckssfbqk",
      { x: 30, y: 60, x2: 50, y2: 110 }
    );
    // 历年各院系开设课程数分布情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 92,
      dom: "chart_box_lngyxkskcsfbqk",
      type: "line"
    });
    // 历年各院系实践课程课时数分布情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 93,
      dom: "chart_box_lngyxsjkckssfbqk",
      type: "line"
    });
    // 各院系校企合作课程和精品课程分布情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 67,
      dom: "chart_box_gyxxqhzkchjpkc",
      type: "bar"
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
.marginBtom24 {
  margin-bottom: 24px;
}
.mainContent_school {
  background-color: #f1f4f5;
  padding: 0 1.64%;
}
.mainContent_school .titleTop {
  line-height: 18px;
  padding-top: 0;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
.mainContent_school .box-card {
  position: relative;
}
.mainContent_school .textTitle {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
}
.captionTitle {
  padding-left: 15px;
  font-size: 16px;
  color: #76838f;
  line-height: 58px;
  margin-bottom: 10px;
  height: 58px;
  border-bottom: 1px solid #e4eaec;
}
.mainContent_school .box-card .caption {
  padding-left: 15px;
  font-size: 14px;
  color: #76838f;
  line-height: 24px;
  margin-bottom: 10px;
}
.mainContent_school .box-card .caption span {
  color: #70ad47;
}
.mainContent_school .box-card .captionA span {
  margin-right: 15px;
}
.mainContent_school .box-card .caption .down {
  color: #ed7d31;
  padding-left: 10px;
}
.schoolShow {
  margin-top: 24px;
  float: left;
  width: 24%;
  margin-right: 1.3%;
}
.schoolShow .box-card {
  margin-bottom: 0;
}
.list_card .last {
  margin-right: 0;
}
.schoolShow .countBoxL,
.countBoxR {
  vertical-align: middle;
  display: inline-block;
  height: 70px;
  padding-bottom: 14px;
  padding-top: 14px;
}
.schoolShow .countBoxL {
  width: 30%;
  text-align: center;
}
.schoolShow .countBoxL .iconfont {
  font-size: 32px;
  color: #fff;
  line-height: 62px;
}
.schoolShow .countBoxL .iconfont {
  font-size: 48px;
  line-height: 72px;
}
.schoolShow .countBoxL .iconColor1 {
  color: #70ad47;
}
.schoolShow .countBoxL .iconColor2 {
  color: #ffc000;
}
.schoolShow .countBoxL .iconColor3 {
  color: #62a8ea;
}
.schoolShow .countBoxL .iconColor4 {
  color: #ed7d31;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxL .iconColorA {
  color: #dd6969;
}
.schoolShow .countBoxL .iconColorB {
  color: #f1cdcd;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxR {
  width: 60%;
}
.schoolShow p,
.schoolShow .text {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.schoolShow p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.schoolGroup .box-card {
  /* height: 529px; */
}
.schoolGroup .acreageEcharts,
.schoolGroup .fundsEcharts {
  height: 400px;
}
.resourceBox .el-card__body {
  padding: 0;
}
.resourceBox .caption {
  font-size: 16px;
  line-height: 58px;
  color: #37474f;
  padding-right: 24px;
  border-bottom: 1px solid #e4eaec;
}

.resourceBox .item {
  float: left;
  width: 24.9%;
  height: 105px;
  padding-top: 32px;
  border-right: 1px solid #e4eaec;
}
.resourceBox .borderNone {
  border-right: none;
}
.resourceBox .resName {
  padding-left: 38px;
  line-height: 24px;
  font-size: 13px;
  color: #76838f;
  padding-bottom: 14px;
}
.resourceBox .resNum em {
  font-size: 30px;
  font-style: normal;
  line-height: 28px;
}
.resourceBox .resNum {
  padding-left: 38px;
  font-size: 14px;
}
.resourceBox .first {
  padding-right: 10px;
}
.color1 {
  color: #70ad47;
}
.color2 {
  color: #ffc000;
}
.color3 {
  color: #62a8ea;
}
.color4 {
  color: #ed7d31;
}
.schoolShowGroup {
  text-align: center;
}
.expandBox .schoolShow {
  float: none;
  display: inline-block;
  margin-right: 24px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  width: 25%;
}
.expandEcharts,
.RecruitStudentsEcharts,
.SituationEcharts,
.graduatioEcharts {
  height: 336px;
}
.schoolTerm_List .schoolShow,
.CollegeInfo .schoolShow,
.courseInfo .schoolShow,
.CourseSituation .schoolShow {
  width: 100%;
  margin-top: 0;
  margin-bottom: 24px;
}
.teachTOPA .box-card {
  height: 400px;
}
.teachTOPA .topListItem {
  margin-bottom: 8px;
}
.teachTOPA .listTop {
  padding-top: 10px;
}
.teachTOPA .topListItem .number {
  float: left;
  margin-top: 4px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: #70ad47;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-radius: 50%;
  vertical-align: middle;
}
.teachTOPA .topListItem .topName {
  margin-left: 18px;
  float: left;
  width: 70%;
  display: block;
  line-height: 32px;
  color: #37474f;
  padding-left: 24px;
  font-size: 14px;
  background-color: #f5f8fa;
}
.teachTOPA .topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.situationGroup .ratioEcharts,
.situationGroup .teachSituation {
  height: 360px;
}
.peopleGroup .peopleNum {
  height: 360px;
}
.teachSturdentRaio {
  height: 360px;
}
.averageEcharts {
  height: 360px;
}
.courseInfo .schoolShowInfo .box-card {
  background-color: #70ad47;
}
.courseInfo .schoolShowInfo p,
.courseInfo .schoolShowInfo .text,
.courseInfo .schoolShowInfo p.num span {
  color: #fff;
}
.schoolShowInfo .countBoxL .iconfont {
  font-size: 36px;
}
.studentAndTeach {
  height: 263px;
}
.bookNumEcharts {
  height: 360px;
}
.teachMoney {
  height: 360px;
}
.FiveMoney {
  height: 360px;
}
.deviceEcharts,
.fundsCompareEcharts,
.deviceEchartsScale,
.studentScale {
  height: 360px;
}

.bookGroup .xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.bookGroup .xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.bookGroup .xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.bookGroup .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #526069;
}
.bookGroup .item_book {
  width: 45%;
  float: left;
}
.bookGroup .item_bookA {
  float: right;
}
.bookGroup .xqItem {
  width: 49%;
  float: left;
  border-top: 1px solid #e4eaec;
  margin-top: 14px;
}
.book_topTitle {
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  background-color: #70ad47;
}
.book_topTitleA {
  background-color: #ed7d31;
}
.bookGroup .borderNone {
  border-right: none;
}
.borderTop {
  border-top: 1px solid #e4eaec;
}
.bookGroup .xqItem .num {
  color: #70ad47;
}
.bookGroup .item_bookA .num {
  color: #ed7d31;
}
.pieEcharts {
  height: 360px;
}
.selectYear {
  position: absolute;
  right: 7%;
  top: 48px;
  z-index: 99;
}
.chart_show_div {
  width: 100%;
  height: 100%;
}
.width_3 .schoolShow {
  width: 32%;
  margin-right: 2%;
}
.width_3 .schoolShow.last {
  margin-right: 0;
}
.width_2 .schoolShow {
  width: 49%;
  margin-right: 2%;
}
.width_2 .schoolShow.last {
  margin-right: 0;
}
</style>
