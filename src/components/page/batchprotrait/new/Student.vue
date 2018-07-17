<template>
  <div class="student_content">
    <div>
      <div class="addZD">
        <el-button type="warning" class="reverseBtn" size="small" @click="addZb">
          <i class="iconfont">&#xe623;</i>自选指标</el-button>
      </div>
      <div class="CourseSituation ">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="schoolShow">
              <el-card class="box-card clearfix">
                <div class="countBoxL">
                  <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">学生人数 </p>
                  <p class="num">
                    <span>{{value_xsrs}}</span>
                    人
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="schoolShow">
              <el-card class="box-card clearfix">
                <div class="countBoxL">
                  <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">体质健康优秀率</p>
                  <p class="num">
                    <span>{{value_tzjk}}</span>
                    %
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- <div class="row-content">
    <el-row :gutter="25">
      <div class="first">
        <el-col :span="8">
        <div class="first-left">
        <div class="first-left-top">
          <el-card class="box-card clearfix" style="height: 105px">
            <div class="countBoxL">
              <i class="iconfont" style="color: white ">&#xe644;</i>
            </div>
            <div class="countBoxR" style="margin-left: 0">
              <p class="text">学生人数</p>
              <p class="num">
                <span v-html="studentCount"></span>
                人
              </p>
            </div>
          </el-card>
        </div>
          <div class="first-left-bottom">
            <el-card >
              <div id="first-left-chart" class="chartBox"></div>
            </el-card>
          </div>
        </div>
      </el-col>

      <el-col :span="16">
        <el-card>
        <div class="first-right-are">

            <div id="first-right-chart" class="chartBox"></div>

        </div>
        </el-card>
      </el-col>

      </div>
    </el-row>
    </div> -->
    <!-- <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="second-left-top-chart" style="height: 245px" class="chartBox"></div>
                </el-card>
              </div>
              <div class="first-left-bottom">
                <el-card>
                  <div id="second-left-bottom-chart" style="height: 245px" class="chartBox"></div>
                </el-card>
              </div>
            </div>
          </el-col>

          <el-col :span="12">
            <el-card>
              <div class="first-right-are">

                <div id="second-right-chart" class="chartBox"></div>

              </div>
            </el-card>
          </el-col>

        </div>
      </el-row>
      <div class="row-content">
        <el-row>
          <el-col :span="24">
            <el-card>
              <div id="third-chart" class="chartBox"></div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div> -->
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="f-left-top-chart" style="height: 500px" class="chartBox chart_box_cjs">
                    <img src="../../../../assets/empty.jpg" alt="">
                  </div>
                </el-card>
              </div>
              <div class="first-left-bottom">
                <el-card>
                  <div id="f-left-bottom-chart" style="height: 400px" class="chartBox chart_box_cjs">
                    <img src="../../../../assets/empty.jpg" alt="">
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
                    <div id="f-right-top-chart" style="height: 500px" class="chartBox chart_box_cjs">
                      <img src="../../../../assets/empty.jpg" alt="">
                      <!--<table style="width: 100%;" class="special_table">
                            <thead>
                              <th>排名</th>
                              <th>生源地</th>
                              <th>招生人数</th>
                            </thead>
                            <tbody>
                              <template v-for="(item, index) in tableData_001">
                                <tr :key="index">
                                  <td align="center">{{index + 1}}</td>
                                  <td align="center">{{item.value1}}</td>
                                  <td align="center">{{item.value2}}</td>
                                </tr>
                              </template>
                            </tbody>
                          </table>-->
                    </div>
                  </el-card>
                </div>
                <div class="first-left-bottom">
                  <el-card>
                    <div id="f-right-bottom-chart" style="height: 400px" class="chartBox chart_box_cjs">
                      <img src="../../../../assets/empty.jpg" alt="">
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
            <div id="five-chart" class="chartBox chart_box_cjs">
              <img src="../../../../assets/empty.jpg" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="six-chart" class="chartBox chart_box_cjs">
              <img src="../../../../assets/empty.jpg" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="row-content">

      <el-row :gutter="25">
        <div class="first">

          <el-col :span="12">
            <el-card style="padding: 0 20px">
            <div class="second-left">
              <div class="second-left-top">
                <div class="sorePicBox marginBto24">
                  <el-row >
                    <el-col :span="12">

                      <div class="zhuxuetitle">
                      <span>助学贷款</span>
                      </div>

                    </el-col>
                    <el-col :span="12">
                      <div class="zhuxuetitle-sub">
                        <span>今年共有</span><span class="spec-display" v-html="peopleCount+'人'"></span><span>获得助学贷款，共计</span><span class="spec-display">60000000元</span>
                      </div>

                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="24">
                      <div class="showPicBox showPicBoxA">
                        <span class="daikuan-guojia" style="background-color: rgb(112, 173, 71)">国家助学贷款</span>
                        <el-card  class="box-card" style="background-color: white ;    box-shadow: none;
    border: none;">

                          <el-row >
                            <el-col :span="8">
                              <div class="xqItem xqItemA">
                                <p class="num" v-html="guojiaCount"></p>
                                <p><i class="iconfont">&#xe680;</i></p>
                                <p >人数（个）</p>
                              </div>
                            </el-col>
                            <el-col :span="8">
                              <div class="xqItem">
                                <p class="num" v-html="guojiaAvg"></p>
                                <p><i class="iconfont">&#xe680;</i></p>
                                <p>人均（元）</p>
                              </div>
                            </el-col>
                            <el-col :span="8">
                              <div class="xqItem xqItemB">
                                <p class="num" v-html="guojiaZhanbi+'%'" ></p>
                                <p><i class="iconfont">&#xe680;</i></p>
                                <p>占比</p>
                              </div>
                            </el-col>
                          </el-row>
                        </el-card>

                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="24">
                      <div class="showPicBox showPicBoxA shengyuandi">
                          <span class="daikuan-guojia">生源地信用助学贷款</span>
                          <el-row >
                            <el-col :span="8">
                              <div class="xqItem xqItemA">
                                <p class="num">{{xinyongCount}}</p>
                                <p><i class="iconfont">&#xe680;</i></p>
                                <p>人数（个）</p>
                              </div>
                            </el-col>
                            <el-col :span="8">
                              <div class="xqItem">
                                <p class="num">{{xingyongAvg}}</p>
                                <p><i class="iconfont">&#xe680;</i></p>
                                <p>人均（元）</p>
                              </div>
                            </el-col>
                            <el-col :span="8">
                              <div class="xqItem xqItemB">
                                <p class="num">{{xinyongZhanbi}}%</p>
                                <p><i class="iconfont">&#xe680;</i></p>
                                <p>占比</p>
                              </div>
                            </el-col>
                          </el-row>

                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            </el-card>
          </el-col>

          <el-col :span="12">
            <div class="f-right-are">

              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="six-right-chart" style="height: 565px" class="chartBox"></div>
                  </el-card>
                </div>
              </div>

            </div>
          </el-col>

        </div>
      </el-row>

    </div> -->
    <!-- <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="eight-chart" class="chartBox"></div>
          </el-card>
        </el-col>
      </el-row>
    </div> -->
    <div class="row-content">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="nine-left-chart" style="height: 400px" class="chartBox chart_box_cjs">
                    <img src="../../../../assets/empty.jpg" alt="">
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
                    <div id="nine-right-chart" style="height: 400px" class="chartBox chart_box_cjs">
                      <img src="../../../../assets/empty.jpg" alt="">
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
                  <div id="cjs-one-left-chart" style="height: 400px" class="chartBox chart_box_cjs">
                    <img src="../../../../assets/empty.jpg" alt="">
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
                    <div id="cjs-two-right-chart" style="height: 400px" class="chartBox chart_box_cjs">
                      <img src="../../../../assets/empty.jpg" alt="">
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <!-- <div class="row-content">
      <el-row>
        <el-col :span="24">
          <el-card>
            <div id="ten-chart" class="chartBox"></div>
          </el-card>
        </el-col>
      </el-row>
    </div> -->
    <div class="row-content" v-if="false">
      <el-row :gutter="25">
        <div class="first">
          <el-col :span="12">
            <div class="second-left">
              <div class="second-left-top">
                <el-card class="clearfix">
                  <div id="eleven-left-chart" style="height: 400px" class="chartBox"></div>
                </el-card>
              </div>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="f-right-are">

              <div class="f-right">
                <div class="f-right-top">
                  <el-card class="clearfix">
                    <div id="eleven-right-chart" style="height: 400px" class="chartBox"></div>
                  </el-card>
                </div>
              </div>

            </div>
          </el-col>

        </div>
      </el-row>

    </div>
    <div class="teachTOP">
      <el-card class="box-card">
        <div class="textTitle listTitle_w">{{Toptitle}}</div>
        <template v-if="TOP5ListFlag">
          <div class="chartBox chart_box_cjs">
            <img src="../../../../assets/empty.jpg" alt="">
          </div>
        </template>
        <template v-else>
          <table style="width: 100%;" class="special_table twoCenter">
            <thead>
              <tr>
                <th style="width:25%">排 名</th>
                <th style="width:50%">学生姓名</th>
                <th style="width:25%">得 分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in TOP5List" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.value}}</td>
              </tr>
            </tbody>
          </table>
        </template>
      </el-card>
    </div>

    <div class="teachTOP">
      <el-card class="box-card">
        <div class="textTitle listTitle_w">{{Toptitle1}}</div>
        <template v-if="TOP5ListFlag1">
          <div class="chartBox chart_box_cjs">
            <img src="../../../../assets/empty.jpg" alt="">
          </div>
        </template>
        <template v-else>
          <table style="width: 100%;" class="special_table twoCenter">
            <thead>
              <tr>
                <th style="width:25%">排 名</th>
                <th style="width:50%">学生姓名</th>
                <th style="width:25%">得 分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in TOP5List1" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.value}}</td>
              </tr>
            </tbody>
          </table>
        </template>
      </el-card>
    </div>

    <div class="teachTOP">
      <el-card class="box-card">
        <div class="textTitle listTitle_w">{{Toptitle2}}</div>
        <template v-if="TOP5ListFlag2">
          <div class="chartBox chart_box_cjs">
            <img src="../../../../assets/empty.jpg" alt="">
          </div>
        </template>
        <template v-else>
          <table style="width: 100%;" class="special_table twoCenter">
            <thead>
              <tr>
                <th style="width:25%">排 名</th>
                <th style="width:50%">学生姓名</th>
                <th style="width:25%">得 分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in TOP5List2" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.value}}</td>
              </tr>
            </tbody>
          </table>
        </template>
      </el-card>
    </div>

    <zxzb-common type="2"></zxzb-common>
    <chart-common flag="5" v-if="is_show"></chart-common>
    <btnCommon :dialogVisible="addZb_dialogVisible" @cancel='cancel' :sureADD="sureAdd" flag="5" v-if="addZb_dialogVisible"></btnCommon>

  </div>
</template>
<script>
import zxzbCommon from "./zxzbCommon.vue";
import chartCommon from "../../myhxCommon/chartCommon.vue";
import btnCommon from "../../myhxCommon/btnCommon.vue";
export default {
  components: { zxzbCommon, chartCommon, btnCommon },
  data: function() {
    return {
      is_show: true,
      addZb_dialogVisible: false,
      studentCount: 0,
      peopleCount: 0,
      allmoney: 0,
      guojiaCount: 0,
      guojiaAvg: 0,
      guojiaZhanbi: 0,
      xinyongCount: 0,
      xingyongAvg: 0,
      xinyongZhanbi: 0,
      value_xsrs: "",
      value_tzjk: "",
      baseUrl: this.HOST + "/tr/GroupPortrait/web/getPortraitInfoById",
      tableData_001: [],
      Toptitle: "",
      TOP5List: [],
      TOP5ListFlag: false,
      Toptitle1: "",
      TOP5List1: [],
      TOP5ListFlag1: false,
      Toptitle2: "",
      TOP5List2: [],
      TOP5ListFlag2: false
    };
  },
  mounted() {
    // top 排名  id=54
    this.$ajaxMore(
      "post",
      this.HOST + "/tr/trPortraitTop/web/search",
      {
        id: 72
      },
      res => {
        if (res.success) {
          if (res.data) {
            this.Toptitle = res.data.title;
            if (res.data.list.length > 0) {
              this.TOP5ListFlag = false;
            } else {
              this.TOP5ListFlag = true;
            }
            this.TOP5List = [];
            this.TOP5List = res.data.list;
          }
        } else {
          this.$message({
            type: "error",
            message: res.msg
          });
        }
      }
    );
    // top 排名  id=54
    this.$ajaxMore(
      "post",
      this.HOST + "/tr/trPortraitTop/web/search",
      {
        id: 74
      },
      res => {
        if (res.success) {
          if (res.data) {
            this.Toptitle1 = res.data.title;
            if (res.data.list.length > 0) {
              this.TOP5ListFlag1 = false;
            } else {
              this.TOP5ListFlag1 = true;
            }
            this.TOP5List1 = [];
            this.TOP5List1 = res.data.list;
          }
        } else {
          this.$message({
            type: "error",
            message: res.msg
          });
        }
      }
    );
    // top 排名  id=61
    this.$ajaxMore(
      "post",
      this.HOST + "/tr/trPortraitTop/web/search",
      {
        id: 78
      },
      res => {
        if (res.success) {
          if (res.data) {
            this.Toptitle2 = res.data.title;
            if (res.data.list.length > 0) {
              this.TOP5ListFlag2 = false;
            } else {
              this.TOP5ListFlag2 = true;
            }
            this.TOP5List2 = [];
            this.TOP5List2 = res.data.list;
          }
        } else {
          this.$message({
            type: "error",
            message: res.msg
          });
        }
      }
    );
    // this.getData()
    this.$ajaxGet(this.baseUrl, { id: 53 }, res => {
      if (res.success) {
        this.value_xsrs = res.data.value1;
        this.value_tzjk = res.data.value2;
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    }),
      this.$ajaxGet(this.baseUrl, { id: 54 }, res => {
        if (res.success) {
          this.showMap(
            document.getElementById("f-left-top-chart"),
            res.data.title,
            res.data.data
          );
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    /*this.$ajaxMore(
      'post',
      this.HOST + '/tr/GroupPortrait/web/getPortraitInfoByCon',
      {id: 55,pageSize: 1,
                pageLength: 10
},
      res => {
        if (res.success) {
        this.tableData_001 = res.data.data
      } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )*/
    this.$ajaxGet(this.baseUrl, { id: 66 }, res => {
      if (res.success) {
        this.$ChartUtil.drawChart(
          "f-right-top-chart",
          res.data.title,
          res.data.legend,
          "",
          res.data.series,
          res.data.xAxis,
          true,
          {
            yAxis: [
              {
                type: "value",
                name: "（" + res.data.unit + "）"
              }
            ],
            tooltip: {
              trigger: "axis",
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: "{b}<br/>{c0}人"
            },
            legend: {
              y: "20",
              data: res.data.legend
            },
            grid: {
              y2: 120
            }
          },
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
    this.$ajaxGet(this.baseUrl, { id: 56 }, res => {
      if (res.success) {
        // f-left-bottom-chart
        res.data.series[0].radius = ["0%", "60%"];
        res.data.series[0].center = ["50%", "60%"];
        res.data.series[0].label = {
          normal: {
            show: true,
            formatter: "{b}({c}" + res.data.unit + ")"
            // position: 'inside'
          }
        };
        this.$ChartUtil.drawChartNoXY(
          "f-left-bottom-chart",
          res.data.title,
          [],
          this.$ChartUt.VERTICAL,
          res.data.series,
          [],
          {},
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
    this.$ajaxGet(this.baseUrl, { id: 57 }, res => {
      if (res.success) {
        this.$ChartUtil.drawChart(
          "f-right-bottom-chart",
          res.data.title,
          res.data.legend,
          "",
          res.data.series,
          res.data.xAxis,
          false,
          {
            yAxis: [
              {
                type: "value",
                name: "（" + res.data.unit + "）"
              }
            ],
            tooltip: {
              trigger: "axis",
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: "{b}<br/>{c0}人"
            },
            legend: {
              y: "20",
              data: res.data.legend
            },
            customattrs: { xrotate: 0 }
          },
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    }),
      this.$ajaxGet(this.baseUrl, { id: 58 }, res => {
        if (res.success) {
          this.$ChartUtil.drawChart(
            "five-chart",
            res.data.title,
            res.data.legend,
            "",
            res.data.series,
            res.data.xAxis,
            true,
            {
              yAxis: [
                {
                  type: "value",
                  name: "（" + res.data.unit + "）"
                }
              ],
              tooltip: {
                trigger: "axis",
                // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                // },
                formatter: "{b}<br/>{c0}人"
              },
              legend: {
                y: "20",
                data: res.data.legend
              },
              grid: {
                y2: 120
              }
            },
            this
          );
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    this.$ajaxGet(this.baseUrl, { id: 59 }, res => {
      if (res.success) {
        this.$ChartUtil.drawChart(
          "six-chart",
          res.data.title,
          res.data.legend,
          "",
          res.data.series,
          res.data.xAxis,
          true,
          {
            yAxis: [
              {
                type: "value",
                name: "（" + res.data.unit + "）"
              }
            ],
            tooltip: {
              trigger: "axis",
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: "{b}<br/>{c0}人"
            },
            legend: {
              y: "20",
              data: res.data.legend
            },
            grid: {
              y2: 120
            }
          },
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
    this.$ajaxGet(this.baseUrl, { id: 60 }, res => {
      if (res.success) {
        this.$ChartUtil.drawChart(
          "nine-left-chart",
          res.data.title,
          res.data.legend,
          "",
          res.data.series,
          res.data.xAxis,
          false,
          {
            yAxis: [
              {
                type: "value",
                name: "（" + res.data.unit + "）"
              }
            ],
            tooltip: {
              trigger: "axis",
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: "{b}<br/>{c0}人"
            },
            legend: {
              y: "20",
              data: res.data.legend
            },
            grid: {
              y2: 100
            }
          },
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
    this.$ajaxGet(this.baseUrl, { id: 61 }, res => {
      if (res.success) {
        // f-left-bottom-chart
        res.data.series[0].radius = ["0%", "60%"];
        res.data.series[0].center = ["50%", "60%"];
        res.data.series[0].label = {
          normal: {
            show: true,
            formatter: "{b}({c}" + res.data.unit + ")"
            // position: 'inside'
          }
        };
        this.$ChartUtil.drawChartNoXY(
          "nine-right-chart",
          res.data.title,
          [],
          this.$ChartUt.VERTICAL,
          res.data.series,
          [],
          {},
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
    this.$ajaxGet(this.baseUrl, { id: 62 }, res => {
      if (res.success) {
        // f-left-bottom-chart
        res.data.series[0].radius = ["0%", "60%"];
        res.data.series[0].center = ["50%", "60%"];
        res.data.series[0].label = {
          normal: {
            show: true,
            formatter: "{b}({c}" + res.data.unit + ")"
            // position: 'inside'
          }
        };
        this.$ChartUtil.drawChartNoXY(
          "cjs-one-left-chart",
          res.data.title,
          [],
          this.$ChartUt.VERTICAL,
          res.data.series,
          [],
          {},
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
    this.$ajaxGet(this.baseUrl, { id: 63 }, res => {
      if (res.success) {
        this.$ChartUtil.drawChart(
          "cjs-two-right-chart",
          res.data.title,
          res.data.legend,
          "",
          res.data.series,
          res.data.xAxis,
          true,
          {
            yAxis: [
              {
                type: "value",
                name: "（" + res.data.unit + "）"
              }
            ],
            tooltip: {
              trigger: "axis",
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: "{b}<br/>{c0}人"
            },
            legend: {
              y: "20",
              data: res.data.legend
            },
            grid: {
              y2: 180,
              x2: 100
            }
          },
          this
        );
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    });
  },
  created() {},
  methods: {
    sureAdd() {
      this.addZb_dialogVisible = false;
      this.is_show = false;
      setTimeout(() => {
        this.is_show = true;
      }, 0);
    },
    cancel() {
      this.addZb_dialogVisible = false;
    },
    // 添加指标
    addZb: function() {
      this.addZb_dialogVisible = true;
    },
    getData: function() {
      this.baseAjax(201, "学生人数").then(this.getStudentCount);
      this.baseAjax(234, "助学贷款").then(this.getZhuxuedaikuanInfo);
      this.baseAjax(203, "毕业生就业情况").then(this.getJiuYeQingkuang);
      this.baseAjax(202, "生源地分析").then(this.getShengYuanDi);
      this.baseAjax(205, "近五年毕业生去向").then(
        this.getNearFiveYearStudentGO
      );
      this.baseAjax(204, "近五年升造学生去向").then(
        this.getNearFiveYearShengZaoStudentGO
      );
      this.baseAjax(206, "升造（高等职业、3+2高等职业、大学）分布").then(
        this.getShengzaoKaoyanChuguo
      );
      this.baseAjax(207, "各毕业生对比").then(this.getBiYeShengDuiBi);
      this.baseAjax(208, "毕业月收入").then(this.getBiyeYueShouRu);
      this.baseAjax(209, "毕业月收入趋势").then(this.getBiyeYueShouRuQuShi);
      this.baseAjax(230, "半年内离职率").then(this.getBanNianLizhilv);
      this.baseAjax(231, "离职原因统计").then(this.getLizhiyuanyinTongji);
      this.baseAjax(232, "历年未就业主要原因占比").then(this.getWeiJIuYeRea);
      this.baseAjax(233, "成绩分布").then(this.getChengjiFenbu);
      this.baseAjax(235, "助学金学生贷款行为").then(
        this.getZhunxunjindaikuanXingwei
      );
      this.baseAjax(236, "助学贷款分布").then(this.getZhuxuedaikuanfenbu);
      this.baseAjax(237, "贫困生人数变化").then(
        this.getPinkunshengrenshubianhua
      );
      this.baseAjax(238, "历年学费减免数据变化").then(
        this.getXueFeiJianMianQingKuang
      );
      this.baseAjax(239, "学生进入图书管次数散点图").then(
        this.getXunshengjinrutushuguanSanDianTu
      );
      this.baseAjax(240, "录取分数线").then(this.getLuqufenshuxian);
      this.baseAjax(241, "第一志愿录取率").then(this.getDiyizhiyuanluqulv);
    },
    getZhuxuedaikuanInfo: function(data) {
      let {
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8
      } = data.data.series;
      this.peopleCount = value1;
      this.allmoney = value2;
      this.guojiaCount = value3;
      this.guojiaAvg = value4;
      this.guojiaZhanbi = value5;
      this.xinyongCount = value6;
      this.xingyongAvg = value7;
      this.xinyongZhanbi = value8;
    },
    getStudentCount: function(data) {
      let { value1 } = data.data.series;
      this.studentCount = value1;
    },
    getDiyizhiyuanluqulv: function(data) {
      let series = data.data.series;
      let xdata = data.data.xAxis;
      this.getElevenRight(series, xdata);
    },
    getLuqufenshuxian: function(data) {
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getElevenLeft(series, xdata);
    },
    getXunshengjinrutushuguanSanDianTu: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      this.getTenChart(ldata, series);
    },
    getXueFeiJianMianQingKuang: function(data) {
      let series = data.data.series;
      let xdata = data.data.xAxis;
      this.getNineRight(series, xdata);
    },
    getPinkunshengrenshubianhua: function(data) {
      let series = data.data.series;
      let xdata = data.data.xAxis;
      this.getNineLeft(series, xdata);
    },
    getZhuxuedaikuanfenbu: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getEightChart(series, xdata, ldata);
    },
    getZhunxunjindaikuanXingwei: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let polar = data.data.indicator;
      this.getSixRithtChart(ldata, series, polar);
    },
    getChengjiFenbu: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getSixChart(series, xdata, ldata);
    },
    getWeiJIuYeRea: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getFiveChart(series, xdata, ldata);
    },
    getLizhiyuanyinTongji: function(data) {
      let series = data.data.series;
      let xdata = data.data.xAxis;
      this.getFRiaght4Chart(series, xdata);
    },
    getBanNianLizhilv: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      this.getFRiaght2Chart(ldata, series);
    },
    getBiyeYueShouRuQuShi: function(data) {
      let series = data.data.series;
      let xdata = data.data.xAxis;
      this.getFRiaght3Chart(series, xdata);
    },
    getBiyeYueShouRu: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      this.getFRiaght1Chart(ldata, series);
    },
    getBiYeShengDuiBi: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getThirdChart(series, xdata, ldata);
    },
    getShengzaoKaoyanChuguo: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      this.getSecondRIghtChart(ldata, series);
    },
    getNearFiveYearShengZaoStudentGO: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getSecondLeftBottomChart(series, xdata, ldata);
    },
    getNearFiveYearStudentGO: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      let xdata = data.data.xAxis;

      this.getSecondLeftTOpChart(series, xdata, ldata);
    },
    getShengYuanDi: function(data) {
      let series = data.data.series;
      this.getFirstRightChart(series);
    },
    getJiuYeQingkuang: function(data) {
      let ldata = data.data.legend;
      let series = data.data.series;
      this.getFirstLeftChart(series, ldata);
    },
    getSixRithtChart: function(ldata, series, option) {
      this.$ChartUtil.drawChartNoXY(
        "six-right-chart",
        "助学金学生贷款行为",
        ldata,
        this.$ChartUt.HORIZONTAL,
        series,
        [],
        option,
        this
      );
    },
    getTenChart: function(ldata, series) {
      let xAxis = [
        {
          type: "value",
          scale: true,
          axisLabel: {
            formatter: "{value} 次"
          }
        }
      ];
      let yAxis = [
        {
          type: "value",
          scale: true,
          axisLabel: {
            formatter: "{value} 名"
          }
        }
      ];
      let legend = this.$ChartUt.CENTER_TOP;

      this.$ChartUtil.drawChart(
        "ten-chart",
        "学生进入图书馆次数散点图",
        ldata,
        this.$ChartUt.HORIZONTAL,
        series,
        [],
        false,
        { xAxis: xAxis, yAxis: yAxis, legend: legend },
        this,
        param => {}
      );
    },
    getElevenLeft: function(series, xdata) {
      let xrotate = 0;
      this.$ChartUtil.drawChart(
        "eleven-left-chart",
        "录取分数线",
        [],
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        false,
        { customattrs: { xrotate: xrotate } },
        this,
        param => {}
      );
    },
    getElevenRight: function(series, xdata) {
      let xrotate = 0;
      this.$ChartUtil.drawChart(
        "eleven-right-chart",
        "第一志愿录取率",
        [],
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        false,
        { customattrs: { xrotate: xrotate } },
        this,
        param => {}
      );
    },
    getNineLeft: function(series, xdata) {
      let xrotate = 0;
      this.$ChartUtil.drawChart(
        "nine-left-chart",
        "贫困生人数变化",
        [],
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        false,
        { customattrs: { xrotate: xrotate } },
        this,
        param => {}
      );
    },
    getNineRight: function(series, xdata) {
      let xrotate = 0;
      this.$ChartUtil.drawChart(
        "nine-right-chart",
        "历年学费减免数据变化",
        [],
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        false,
        { customattrs: { xrotate: xrotate } },
        this,
        param => {}
      );
    },
    getEightChart: function(series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP;
      this.$ChartUtil.drawChart(
        "eight-chart",
        "助学贷款分布",
        ldata,
        this.$ChartUt.VERTICAL,
        series,
        xdata,
        false,
        { legend: legend, customattrs: { xrotate: 0 } },
        this,
        param => {}
      );
    },
    getSixChart: function(series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP;
      this.$ChartUtil.drawChart(
        "six-chart",
        "成绩分布",
        ldata,
        this.$ChartUt.VERTICAL,
        series,
        xdata,
        false,
        { legend: legend, customattrs: { xrotate: 0 } },
        this,
        param => {}
      );
    },
    getFiveChart: function(series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP;
      // let xdata = ['2014年', '2015年', '2016年', '2017年', '2018年']
      this.$ChartUtil.drawChart(
        "five-chart",
        "历年未就业主要原因占比",
        ldata,
        this.$ChartUt.VERTICAL,
        series,
        xdata,
        false,
        { legend: legend, customattrs: { xrotate: 0 }, grid: { y2: 120 } },
        this,
        param => {}
      );
    },
    getThirdChart: function(series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP;
      // let xdata = ['2014年', '2015年', '2016年', '2017年', '2018年']
      this.$ChartUtil.drawChart(
        "third-chart",
        "各毕业生对比",
        ldata,
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        true,
        { legend: legend },
        this,
        param => {}
      );
    },
    getFRiaght2Chart: function(ldata, series) {
      this.$ChartUtil.drawChartNoXY(
        "f-left-bottom-chart",
        "半年内离职率",
        ldata,
        this.$ChartUt.HORIZONTAL,
        series,
        [],
        {},
        this
      );
    },
    getFRiaght1Chart: function(ldata, series) {
      this.$ChartUtil.drawChartNoXY(
        "f-left-top-chart",
        "毕业月收入",
        ldata,
        this.$ChartUt.HORIZONTAL,
        series,
        [],
        {},
        this
      );
    },
    getFRiaght3Chart: function(series, xdata) {
      this.$ChartUtil.drawChart(
        "f-right-top-chart",
        "毕业月收入趋势",
        [],
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        false,
        { customattrs: { xrotate: 0 } },
        this,
        param => {}
      );
    },
    getFRiaght4Chart: function(series, xdata) {
      this.$ChartUtil.drawChart(
        "f-right-bottom-chart",
        "离职原因统计",
        [],
        this.$ChartUt.HORIZONTAL,
        series,
        xdata,
        false,
        {},
        this,
        param => {}
      );
    },
    getSecondRIghtChart: function(ldata, series) {
      this.$ChartUtil.drawChartNoXY(
        "second-right-chart",
        "升造（高等职业、3+2高等职业、大学）分布",
        ldata,
        this.$ChartUt.HORIZONTAL,
        series,
        [],
        {},
        this
      );
    },
    getSecondLeftBottomChart: function(series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP;
      // let xdata = ['2014年', '2015年', '2016年', '2017年', '2018年']
      let xrotate = 0;
      this.$ChartUtil.drawChart(
        "second-left-bottom-chart",
        "近五年升造学生生去向",
        // ['出国', '保研', '考研'],
        ldata,
        this.$ChartUt.VERTICAL,
        series,
        xdata,
        false,
        { legend: legend, customattrs: { xrotate: xrotate } },
        this,
        param => {}
      );
    },
    getSecondLeftTOpChart: function(series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP;
      // let xdata = ['2014年', '2015年', '2016年', '2017年', '2018年']
      let xrotate = 0;
      this.$ChartUtil.drawChart(
        "second-left-top-chart",
        "近五年毕业生去向",
        // ['出国', '保研', '考研'],
        ldata,
        this.$ChartUt.VERTICAL,
        series,
        xdata,
        false,
        { legend: legend, customattrs: { xrotate: xrotate } },
        this,
        param => {}
      );
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
            // 标题内容的样式
            fontStyle: "normal", // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: "lighter", // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: "san-serif", // 主题文字字体，默认微软雅黑
            fontSize: 18 // 主题文字字体大小，默认为18px
          }
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function(params) {
            // var value = (params.value + '').split('.')
            // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
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
    getFirstRightChart: function(data) {
      let series = [
        {
          type: "scatter",
          coordinateSystem: "geo",
          data: this.convertData(data),
          symbolSize: 15,
          symbolRotate: 35,
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: false
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
      ];

      this.$ChartUtil.drawChartNoXY(
        "f-left-top-chart",
        "当前学年招生地域分布",
        [],
        this.$ChartUt.VERTICAL,
        series,
        [],
        {
          tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function(params) {
              // var value = (params.value + '').split('.')
              // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
              return params.name + ": " + params.value[2];
            }
          },
          geo: {
            map: "henan",
            roam: true,
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
          }
        },
        this
      );
    },
    getFirstLeftChart: function(series, ldata) {
      this.$ChartUtil.drawChartNoXY(
        "first-left-chart",
        "毕业生就业情况",
        ldata,
        this.$ChartUt.VERTICAL,
        series,
        [],
        {},
        this
      );
    },
    randomValue: function() {
      return Math.round(Math.random() * 1000);
    },
    convertData: function(data) {
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
    },
    baseChart(continerid) {
      let first = document.getElementById(continerid);
      let continer = this.$echarts.init(first, "wonderland");
      return continer;
    },
    baseAjax: function(id, consoleflag) {
      let promise = new Promise((resolve, reject) => {
        this.$ajaxMore(
          "post",
          this.HOST + "/tr/FivePortrait/web/getPortraitInfoById",
          { portraitId: id },
          data => {
            // console.log(consoleflag, data)
            let flag = data.success;
            if (flag === true) {
              resolve(data);
            } else {
              // reject('ss')
            }
          }
        );
      });
      return promise;
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
  margin-left: 25px;
  box-sizing: border-box;
  /* float: right; */
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
