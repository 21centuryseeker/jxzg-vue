<template>
  <div class="student_content">
    <div>
      <div class="CourseSituation ">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="schoolShow">
              <el-card class="box-card clearfix">
                <div class="countBoxL">
                  <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">在校生人数 </p>
                  <p class="num">
                    <span>{{list_xsjbqqk.value1}}</span>人
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="schoolShow">
              <el-card class="box-card clearfix">
                <div class="countBoxL">
                  <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">计划招生人数 </p>
                  <p class="num">
                    <span>{{list_xsjbqqk.value2}}</span>人
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="schoolShow">
              <el-card class="box-card clearfix">
                <div class="countBoxL">
                  <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">实际录取人数 </p>
                  <p class="num">
                    <span>{{list_xsjbqqk.value3}}</span>人
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="schoolShow">
              <el-card class="box-card clearfix">
                <div class="countBoxL">
                  <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">实际报到人数 </p>
                  <p class="num">
                    <span>{{list_xsjbqqk.value4}}</span>人
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 历年各院系计划招生情况 -->
    <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="chart_box_lngyxjhzsqk" class="chartBox chart_box_cjs">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 历年各院系录取率和报到率 -->
    <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="chart_box_lngyxlqlhbdl" class="chartBox chart_box_cjs">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="chart_box_lngyxbdl" class="chartBox chart_box_cjs">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="chart_box_dqxnzsdyfb" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="f-right-are">
              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="chart_box_gyxbysqk" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="chart_box_bysbyqx" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="f-right-are">
              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="chart_box_bysbyqx_pie" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="chart_box_bysjydwxz" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="f-right-are">
              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="chart_box_bysjydwxz_pie" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="chart_box_bysjyqyfb" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="f-right-are">
              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="chart_box_bysjydkqk_pie" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="chart_box_byysr" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="f-right-are">
              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="chart_box_bysyrdwmyqk" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="chart_box_hjlbqk" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="f-right-are">
              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="chart_box_hjjbqk" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>

    <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="chart_box_gjlxmjzrs" class="chartBox chart_box_cjs">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
import chartCommon from "./pic_common.js";
export default {
  data() {
    return {
      baseUrl: this.HOST + "/tr/GroupPortrait/web/getPortraitInfoById",
      list_xsjbqqk: {} // 学生画像基本情况
    };
  },
  mounted() {
    // 获取学生画像基本情况
    this.getList(53, data => {
      this.list_xsjbqqk = data;
    });
    // 历年各院系计划招生情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 80,
      dom: "chart_box_lngyxjhzsqk",
      type: "line"
    });
    // 历年各院系录取率和报到率
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 81,
      dom: "chart_box_lngyxlqlhbdl",
      type: "line"
    });
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 106,
      dom: "chart_box_lngyxbdl",
      type: "line"
    });
    // 获取学生地域分布
    this.$ajaxGet(this.baseUrl, { id: 54 }, res => {
      this.showMap(
        document.getElementById("chart_box_dqxnzsdyfb"),
        res.data.title,
        res.data.data
      );
    });
    // 获取各院系毕业生情况
    chartCommon.getDataZoom(this, this.baseUrl, 55, "chart_box_gyxbysqk", {
      x: 30,
      y: 60,
      x2: 50,
      y2: 110
    });
    // 毕业生毕业去向
    chartCommon.getLineOrBar(this, this.baseUrl, 56, "chart_box_bysbyqx");
    chartCommon.getPie(this, this.baseUrl, 57, "chart_box_bysbyqx_pie", 1);
    // 毕业生就业单位性质
    chartCommon.getLineOrBar(this, this.baseUrl, 58, "chart_box_bysjydwxz");
    chartCommon.getPie(this, this.baseUrl, 59, "chart_box_bysjydwxz_pie", 1);
    // 毕业生就业区域分布
    this.$ajaxGet(this.baseUrl, { id: 60 }, res => {
      this.showMap(
        document.getElementById("chart_box_bysjyqyfb"),
        res.data.title,
        res.data.data
      );
    });
    // 毕业生就业对口情况
    chartCommon.getPie(this, this.baseUrl, 61, "chart_box_bysjydkqk_pie", 1);
    // 毕业月收入
    chartCommon.getCircle(this, this.baseUrl, 62, "chart_box_byysr", 1);
    // 毕业生用人单位满意情况
    chartCommon.getPie(this, this.baseUrl, 63, "chart_box_bysyrdwmyqk", 1);
    // 获奖类别情况
    chartCommon.getLineOrBar(this, this.baseUrl, 66, "chart_box_hjlbqk");
    // 获奖级别情况
    chartCommon.getPie(this, this.baseUrl, 74, "chart_box_hjjbqk", 1);
    // 各奖助项目奖助人数
    chartCommon.getLineOrBar(this, this.baseUrl, 75, "chart_box_gjlxmjzrs");
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
    },

    showMap(ele, title, data) {
      let maxNum = 0;
      for (let item of data) {
        item.value > maxNum ? (maxNum = item.value) : "";
      }
      let myChart = this.$echarts.init(ele);
      let option = {
        title: {
          show: true,
          top: "2%",
          text: title,
          textStyle: {
            fontStyle: "normal",
            fontWeight: "lighter",
            fontFamily: "san-serif",
            fontSize: 18
          }
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function(params) {
            if (params.data) {
              return params.name + ":" + params.data.value[2] + "人";
            } else {
              // return '无数据'
            }
          }
        },
        visualMap: {
          min: 0,
          max: maxNum / 2,
          show: false,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"]
          }
        },
        geo: {
          map: "henan",
          roam: false,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            coordinateSystem: "geo",
            type: "map",
            // type: 'scatter',
            // name: '地域分布',
            // roam: true,
            data: this.convertData(data),
            map: "henan",
            symbolSize: 8,
            symbolRotate: 35,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#F06C00"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    convertData(data) {
      var geoCoordMap = {
        安阳市: [114.352482, 36.103442],
        鹤壁市: [114.295444, 35.748236],
        濮阳市: [115.041299, 35.768234],
        新乡市: [113.883991, 35.302616],
        焦作市: [113.238266, 35.23904],
        济源市: [112.590047, 35.090378],
        三门峡市: [111.194099, 34.777338],
        洛阳市: [112.434468, 34.663041],
        郑州市: [113.665412, 34.757975],
        开封市: [114.341447, 34.797049],
        商丘市: [115.650497, 34.437054],
        许昌市: [113.826063, 34.022956],
        平顶山市: [113.307718, 33.735241],
        漯河市: [114.026405, 33.575855],
        周口市: [114.649653, 33.620357],
        南阳市: [112.540918, 32.999082],
        驻马店市: [114.024736, 32.980169],
        信阳市: [114.075031, 32.123274]
      };
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  }
};
</script>
<style scoped>
.student_content {
  background-color: #f1f4f5;
  padding: 0 1.64%;
  margin-top: 25px;
}
.student_content .first-left-bottom {
  margin-top: 20px;
}
.student_content .countBox {
  text-align: center;
}
.student_content .countBox .el-carousel,
.el-carousel__container {
  height: 145px !important;
}

.student_content .countBox .targetCount .el-card {
  background-color: #70ad47;
}
.student_content .countBox .targetCount .text,
.student_content .countBox .targetCount p,
.student_content .countBox .targetCount .num span {
  color: #fff;
}
.student_content.countBoxL,
.student_content .countBoxR {
  vertical-align: middle;
  display: inline-block;
  padding-bottom: 14px;
  padding-top: 14px;
}
.student_content .countBoxL {
  width: 28%;
  text-align: right;
  /* float: left; */
  padding-top: 10px;
  display: inline-block;
  box-sizing: border-box;
}
.student_content .countBoxL .iconfont {
  font-size: 42px;
  /* color: #fff; */
  color: #ffc000;
  line-height: 62px;
}
.first-left-top .box-card {
  padding: 12px;
}
.student_content .countBoxR {
  width: 60%;
  display: inline-block;
  padding-left: 25px;
  box-sizing: border-box;
  /* float: right; */
}
.schoolShow {
  height: 138px;
  overflow: hidden;
}
.student_content .countBoxR p.text {
  color: #a3afb7;
}
.student_content .countBoxR p.num {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}

.student_content .countBoxR p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.student_content .countBox .box-card {
  height: 134px;
}
.student_content .box-card {
  background-color: #fff;
}
.student_content .first-left-top .el-card__body {
  width: 45%;
  margin: 0 auto;
}
.student_content .countBox p,
.countBox .text {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.student_content .countBox p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.student_content .chartBox {
  width: 100%;
  height: 400px;
}
.first-right-are div {
  min-height: 550px;
}
.row-content {
  margin-top: 20px;
}
.marginBto24 {
  margin-bottom: 24px;
}
.xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
  background-color: white;
}
.student_content .xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.student_content .xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.student_content .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #70ad47;
}
/* .student_content .xqItemA{
  } */
.student_content .xqItemA .num,
.student_content .xqItemB {
  border-right: none;
}
.el-card__body {
  padding: 0;
}
.student_content .zhuxuetitle {
  padding: 16px 0;
}
.student_content .zhuxuetitle span {
  font-size: 18px;
}
.student_content .zhuxuetitle-sub {
  padding: 16px 0;
}
.student_content .zhuxuetitle-sub span {
  font-size: 15px;
}
.student_content .zhuxuetitle-sub span.spec-display {
  font-size: 15px;
  color: #70ad47;
}
.daikuan-guojia {
  height: 50px;
  display: block;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: white;
}

.student_content .shengyuandi .xqItem p .iconfont {
  font-size: 23px;
  color: #ed7d31;
  line-height: 50px;
}
.student_content .shengyuandi .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #ed7d31;
}
/* .student_content .shengyuandi .xqItemA{
  } */
.student_content .shengyuandi .xqItemA .num,
s .student_content .shengyuandi .xqItemB {
  border-right: none;
}
.el-card__body {
  padding: 0;
}
.student_content .zhuxuetitle {
  padding: 16px 0;
}
.student_content .zhuxuetitle span {
  font-size: 18px;
}
.student_content .zhuxuetitle-sub {
  padding: 16px 0;
}
.student_content .zhuxuetitle-sub span {
  font-size: 15px;
}
.student_content .zhuxuetitle-sub span.spec-display {
  font-size: 15px;
  color: #70ad47;
}
.shengyuandi .daikuan-guojia {
  background-color: #ed7d31;
  height: 50px;
  display: block;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: white;
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
.listTitle_w {
  margin-bottom: 18px;
  font-size: 16px;
  color: #888787;
}
.twoCenter tr th:nth-child(2),
.twoCenter tr td:nth-child(2) {
  text-align: left;
  padding-left: 100px;
}
.twoCenter tr td:first-child {
  color: #70ad47;
}
.teachTOP {
  margin-top: 20px;
}
.addZD {
  text-align: right;
  margin-bottom: 10px;
  margin-top: -10px;
}
</style>
