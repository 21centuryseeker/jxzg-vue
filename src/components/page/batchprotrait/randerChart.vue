<template>
  <div style="margin-bottom: 20px;">
    <!-- 区分专业课程教师学生 -->
    <!-- 教师 -->
    <div v-if="flag - 0 === 0">
      <div class="targetBox">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="chart_show chart_szjg  chart_box_cjs" id="chart_box_randarChart_teacher_1" style="margin-top: 0;">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart_show chart_jzgzcjbzc  chart_box_cjs" id="chart_box_randarChart_teacher_2" style="margin-top: 0;">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="targetBox">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="chart_show chart_szjg  chart_box_cjs" id="chart_box_randarChart_teacher_3">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart_show chart_jzgzcjbzc  chart_box_cjs" id="chart_box_randarChart_teacher_4">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 专业 -->
    <div v-if="flag - 0 === 1">
      <!-- <div class="select_jh_box">
        <el-select v-model="yxValue" placeholder="请选择" @change="yxChange">
          <el-option v-for="item in yxOptions" :key="item.dm" :label="item.mc" :value="item.dm">
          </el-option>
        </el-select>
      </div> -->
      <div class="targetBox" style="overflow: hidden;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);margin-top: 10px;padding: 20px;box-sizing: border-box;background: #fff;">
        <div class="chart_show chart_szjg  chart_box_cjs" id="chart_box_randarChart_teacher_1" style="margin-top: 0;width: 50%;float: left;box-shadow: none;">
          <img src="../../../assets/empty.jpg" alt="">
        </div>
        <div class="chart_show chart_jzgzcjbzc  chart_box_cjs" style="margin-top: 0px;width: 50%;float: left;box-shadow: none;">
          <div class="title">{{tableData3.title}}</div>
          <div class="table_box_content" style="height: 350px;padding-top: 7px;">
            <table class="special_table">
              <thead>
                <tr>
                  <td>排名</td>
                  <td style="text-align: left;padding-left: 50px;">学院</td>
                  <td>得分</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData3.data" :key="index">
                  <td>{{item.value3}}</td>
                  <td style="text-align: left;padding-left: 50px;">{{item.value1}}</td>
                  <td>{{item.value2}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <el-pagination background :pager-count="pagerCount" @current-change="handleCurrentChange3" :current-page="currentPage3" :page-size="pageSize3" layout="total, prev, pager, next, jumper" :total="totalSize3">
          </el-pagination>
        </div>
      </div>
      <div>
        <div class="select_jh_box">
          <el-select v-model="yxValue2" placeholder="请选择" @change="yxChange2">
            <el-option v-for="item in yxOptions" :key="item.dm" :label="item.mc" :value="item.dm">
            </el-option>
          </el-select>
          <el-select v-model="xnValue2" placeholder="请选择" @change="handleCurrentChange2(1)">
            <el-option v-for="item in xnOptions" :key="item.dm" :label="item.mc" :value="item.dm">
            </el-option>
          </el-select>
          <el-select v-model="zbValue2" placeholder="请选择" @change="zbChange2">
            <el-option v-for="item in zbOptions" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="targetBox" style="margin-top: 10px;">
        <el-card class="box-card">
          <div class="chart_szjg  chart_box_cjs" id="chart_box_randarChart" style="margin-top: 0px;width: 50%;float: left;">
            <img src="../../../assets/empty.jpg" alt="">
          </div>
          <div class="chartBox chart_box_cjs " style="height: 380px;width: 50%;float: right;">
            <div class="targetBox">
              <div class="table_box_content">
                <div class="title">{{tableData2.title}}</div>
                <table class="special_table">
                  <thead>
                    <tr>
                      <td>排名</td>
                      <td style="text-align: left;">学院</td>
                      <td style="text-align: left;">专业名称</td>
                      <td>专业负责人</td>
                      <td>学年</td>
                      <td>得分</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in tableData2" :key="index">
                      <td>{{pageSize2 * (currentPage2 - 1) + index + 1}}</td>
                      <td style="text-align: left;">{{item.value1}}</td>
                      <td style="text-align: left;">{{item.value2}}</td>
                      <td>{{item.value3}}</td>
                      <td>{{item.value4}}</td>
                      <td>{{item.value5}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <el-pagination background :pager-count="pagerCount" @current-change="handleCurrentChange2" :current-page="currentPage2" :page-size="pageSize2" layout="total, prev, pager, next, jumper" :total="totalSize2">
              </el-pagination>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 课程 -->
    <div v-if="flag - 0 >= 2">
      <div class="targetBox" style="overflow: hidden;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);margin-top: 10px;padding: 20px;box-sizing: border-box;background: #fff;">
        <div class="chart_show chart_szjg  chart_box_cjs" id="chart_box_randarChart_teacher_1" style="margin-top: 0;width: 50%;float: left;box-shadow: none;">
          <img src="../../../assets/empty.jpg" alt="">
        </div>
        <div class="chart_show chart_jzgzcjbzc  chart_box_cjs" style="margin-top: 0px;width: 50%;float: left;box-shadow: none;">
          <div class="title">{{tableData3.title}}</div>
          <div class="table_box_content" style="height: 350px;padding-top: 7px;">
            <table class="special_table">
              <thead>
                <tr>
                  <td>排名</td>
                  <td style="text-align: left;padding-left: 50px;">学院</td>
                  <td>得分</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData3.data" :key="index">
                  <td>{{item.value3}}</td>
                  <td style="text-align: left;padding-left: 50px;">{{item.value1}}</td>
                  <td>{{item.value2}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <el-pagination background :pager-count="pagerCount" @current-change="handleCurrentChange3" :current-page="currentPage3" :page-size="pageSize3" layout="total, prev, pager, next, jumper" :total="totalSize3">
          </el-pagination>
        </div>
      </div>
      <div class="select_jh_box">
        <el-select v-model="yxValue" placeholder="请选择" @change="yxChange">
          <el-option v-for="item in yxOptions" :key="item.dm" :label="item.mc" :value="item.dm">
          </el-option>
        </el-select>
        <el-select v-model="xnValue" placeholder="请选择" @change="xnChange">
          <el-option v-for="item in xnOptions" :key="item.dm" :label="item.mc" :value="item.dm">
          </el-option>
        </el-select>
        <el-select v-model="zbValue" placeholder="请选择" @change="zbChange">
          <el-option v-for="item in zbOptions" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="targetBox">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="chart_show chart_szjg  chart_box_cjs" id="chart_box_randarChart" style="margin-top: 10px;">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart_show chart_jzgzcjbzc  chart_box_cjs" style="margin-top: 10px;">
              <div class="table_title">该学院各专业所有{{ flag - 0 ===3 ? '课程': (flag - 0 === 2 ? '教师' : '学生')}}排名</div>
              <div class="table_box_content">
                <table class="special_table">
                  <thead>
                    <tr>
                      <td width="60">排名</td>
                      <td style="text-align: left;padding-left: 20px;max-width: 50%;">专业</td>
                      <td>学年</td>
                      <td>得分</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                      <td width="60">{{pageSize * (currentPage - 1) + index + 1}}</td>
                      <td style="text-align: left;padding-left: 20px;">{{item.value1}}</td>
                      <td>{{item.value2}}</td>
                      <td>{{item.value3}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <el-pagination background :pager-count="pagerCount" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalSize">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div class="select_jh_box">
          <el-select v-model="yxValue2" placeholder="请选择" @change="yxChange2">
            <el-option v-for="item in yxOptions" :key="item.dm" :label="item.mc" :value="item.dm">
            </el-option>
          </el-select>
          <el-select v-model="zyValue" placeholder="请选择" @change="zyChange">
            <el-option v-for="item in zyOptions" :key="item.dm" :label="item.mc" :value="item.dm">
            </el-option>
          </el-select>
          <el-select v-model="xnValue2" placeholder="请选择" @change="xnChange2">
            <el-option v-for="item in xnOptions" :key="item.dm" :label="item.mc" :value="item.dm">
            </el-option>
          </el-select>
          <el-select v-model="zbValue2" placeholder="请选择" @change="zbChange2">
            <el-option v-for="item in zbOptions" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="targetBox">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="chart_show chart_szjg  chart_box_cjs" id="chart_box_randarChart2" style="margin-top: 10px;">
              <img src="../../../assets/empty.jpg" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart_show chart_jzgzcjbzc  chart_box_cjs" style="margin-top: 10px;">
              <div class="table_title">该专业所有{{ flag - 0 ===3 ? '课程': (flag - 0 === 2 ? '教师' : '学生')}}排名</div>
              <div class="table_box_content">
                <table class="special_table">
                  <thead>
                    <tr>
                      <td>排名</td>
                      <td style="text-align: left; padding-left: 50px;">{{ flag - 0 ===3 ? '课程': (flag - 0 === 2 ? '教师' : '学生')}}</td>
                      <td>学年</td>
                      <td>得分</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in tableData2" :key="index">
                      <td>{{pageSize2 * (currentPage2 - 1) + index + 1}}</td>
                      <td style="text-align: left;padding-left: 50px;">{{item.value1}}</td>
                      <td>{{item.value2}}</td>
                      <td>{{item.value3}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <el-pagination background :pager-count="pagerCount" @current-change="handleCurrentChange2" :current-page="currentPage2" :page-size="pageSize2" layout="total, prev, pager, next, jumper" :total="totalSize2">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import chartCommon from "./pic_common.js";
export default {
  /* 
  1：专业
  2: 教师
  3: 课程
  4: 学生
  */

  props: ["flag"],
  data() {
    return {
      pagerCount: 3,
      yxOptions: [],
      yxValue: "",
      zyOptions: [],
      zyValue: "",
      xnOptions: [],
      xnValue: "",
      zbOptions: [],
      zbValue: "",
      xnValue2: "",
      zbValue2: "",
      tableData: [],
      pageSize: 5,
      currentPage: 1,
      totalSize: 0,
      tableData2: [],
      pageSize2: 5,
      currentPage2: 1,
      totalSize2: 0,
      tableData3: [],
      pageSize3: 5,
      currentPage3: 1,
      totalSize3: 0,
      yxValue2: ""
    };
  },
  mounted() {
    // if (this.flag - 0 === 0) {
    this.getRanderChartSchool({
      flag: this.flag,
      yxid: "",
      year: "",
      zyid: "",
      dom: "chart_box_randarChart_teacher_1"
    });
    this.handleCurrentChange3(1);
    // this.getRanderChartSchool({
    //   flag: 3,
    //   yxid: "",
    //   year: "",
    //   zyid: "",
    //   dom: "chart_box_randarChart_teacher_2"
    // });
    // this.getRanderChartSchool({
    //   flag: 2,
    //   yxid: "",
    //   year: "",
    //   zyid: "",
    //   dom: "chart_box_randarChart_teacher_3"
    // });
    // this.getRanderChartSchool({
    //   flag: 4,
    //   yxid: "",
    //   year: "",
    //   zyid: "",
    //   dom: "chart_box_randarChart_teacher_4"
    // });
    // return;
    // } else {
    // 获取学年
    // this.getXn();
    // 获取指标
    // this.getZb();
    // 区分专业课程教师学生
    // this.getYx();
    this.getXn_zb();
    // }
  },
  methods: {
    // 获取院系
    getYx() {
      this.$ajaxGet(
        this.HOST + "/tr/GroupPortrait/web/getAllYx",
        { flag: this.flag },
        res => {
          if (res.success) {
            this.yxOptions = res.obj;
            this.yxValue = res.obj[0].dm;
            this.yxValue2 = res.obj[0].dm;
            if (this.flag - 0 === 1) {
              this.getZyMajor(this.yxValue);
            } else {
              this.getZy(this.yxValue);
            }
            if (this.flag - 0 === 1) {
              // 专业
              this.getRanderChart({
                yxid: this.yxValue2,
                year: "",
                zyid: "",
                dom: "chart_box_randarChart"
              });
              // this.$ajaxGet(
              //   "/tr/GroupPortrait/web/getRadarData",
              //   {
              //     flag: this.flag,
              //     yxid: this.yxValue,
              //     year: "",
              //     zyid: ""
              //   },
              //   res => {
              //     if (res.success) {
              //       this.tableData = res.data.list.reverse();
              //       this.tableData.unshift(this.tableData.pop());
              //     } else {
              //       this.$message({
              //         message: res.msg,
              //         type: "error"
              //       });
              //     }
              //   }
              // );
            } else {
              // 学年
              // this.getXn();
              // 指标
              this.getRanderChart({
                yxid: this.yxValue,
                year: this.xnValue2,
                zyid: this.zyValue,
                dom: "chart_box_randarChart2"
              });
              this.getRanderChart({
                yxid: this.yxValue,
                year: this.xnValue,
                zyid: this.zyValue,
                dom: "chart_box_randarChart"
              });
              this.getTableData({
                yxid: this.yxValue,
                year: this.xnValue,
                indexType: this.zbValue,
                startPage: this.currentPage,
                pageSize: this.pageSize
              });
            }
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 获取专业
    getZy(id) {
      this.zyValue = "";
      this.zyOptions = [];
      this.$ajaxGet(
        this.HOST + "/tr/GroupPortrait/web/getYxByYxdm",
        { flag: this.flag, yxdm: id },
        res => {
          if (res.success) {
            this.zyOptions = res.obj;
            if (this.floag - 0 !== 1) {
              this.zyValue = res.obj[0].dm;
            }
            if (this.flag - 0 !== 1) {
              this.getRanderChart({
                yxid: this.yxValue2,
                year: this.xnValue2,
                zyid: this.zyValue,
                dom: "chart_box_randarChart2"
              });
            }
            this.getTableData({
              yxid: this.yxValue2,
              year: this.xnValue2,
              zyid: this.zyValue,
              indexType: this.zbValue2,
              startPage: this.currentPage2,
              pageSize: this.pageSize2
            });
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 专业画像获取院系后执行的获取
    getZyMajor(id) {
      this.zyValue = "";
      // this.zyOptions = [];
      // this.$ajaxGet(
      //   this.HOST + "/tr/GroupPortrait/web/getYxByYxdm",
      //   { flag: this.flag, yxdm: id },
      //   res => {
      //     if (res.success) {
      // this.zyOptions = res.obj;
      // this.zyValue = res.obj[0].dm;
      if (this.flag - 0 !== 1) {
        this.getRanderChart({
          yxid: this.yxValue2,
          year: this.xnValue2,
          zyid: this.zyValue,
          dom: "chart_box_randarChart2"
        });
      }
      this.getTableData({
        yxid: this.yxValue2,
        year: this.xnValue2,
        zyid: "",
        indexType: this.zbValue2,
        startPage: this.currentPage2,
        pageSize: this.pageSize2
      });
      //   } else {
      //     this.$message({
      //       message: res.msg,
      //       type: "error"
      //     });
      //   }
      // }
      // );
    },
    // 获取学年
    getXn_zb() {
      // /tr/GroupPortrait/web/getYearByCon
      this.$ajaxGet(
        this.HOST + "/tr/GroupPortrait/web/getYearByCon",
        { flag: this.flag },
        res => {
          if (res.success) {
            this.xnOptions = res.obj;
            this.xnValue = res.obj[0].dm;
            this.xnValue2 = res.obj[0].dm;
            this.$ajaxGet(
              this.HOST + "/tr/GroupPortrait/web/getIndexTypeByCon",
              { flag: this.flag },
              res_zb => {
                if (res_zb.success) {
                  this.zbOptions = res_zb.obj;
                  this.zbValue = res_zb.obj[0].id;
                  this.zbValue2 = res_zb.obj[0].id;
                  this.getYx();
                } else {
                  this.$message({
                    message: res.msg,
                    type: "error"
                  });
                }
              }
            );
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 获取指标类型
    getZb() {
      this.$ajaxGet(
        this.HOST + "/tr/GroupPortrait/web/getIndexTypeByCon",
        { flag: this.flag },
        res => {
          if (res.success) {
            this.zbOptions = res.obj;
            this.zbValue = res.obj[0].id;
            this.zbValue2 = res.obj[0].id;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 获取学校雷达图
    getRanderChartSchool(obj) {
      let { flag, yxid, year, zyid, dom } = obj;
      chartCommon.getRanderChart({
        _this: this,
        url: "/tr/GroupPortrait/web/getRadarData",
        data: {
          flag: flag,
          yxid: yxid,
          year: year,
          zyid: zyid
        },
        dom: dom
      });
    },
    // 获取雷达图
    getRanderChart(obj) {
      let { yxid, year, zyid, dom } = obj;
      let qx = 0;
      let gy = 0;
      // if (dom === "chart_box_randarChart") {
      let data = {
        flag: this.flag,
        yxid: yxid,
        zyid: zyid
      };
      this.$ajaxGet("/tr/GroupPortrait/web/getPmByCon", data, res => {
        if (res.success) {
          qx = res.data.qx || 0;
          gy = res.data.gy || 0;
          chartCommon.getRanderChart({
            _this: this,
            url: "/tr/GroupPortrait/web/getRadarData",
            data: {
              flag: this.flag,
              yxid: yxid,
              year: year,
              zyid: zyid
            },
            dom: dom,
            qx: qx,
            gy: gy
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
      // } else {
      //   chartCommon.getRanderChart({
      //     _this: this,
      //     url: "/tr/GroupPortrait/web/getRadarData",
      //     data: {
      //       flag: this.flag,
      //       yxid: yxid,
      //       year: year,
      //       zyid: zyid
      //     },
      //     dom: dom
      //   });
      // }
    },
    // 获取第一个表格数据
    getTableDataNew(val) {
      let data = {
        flag: this.flag,
        startPage: val,
        pageSize: this.pageSize
      };
      let url = "/tr/GroupPortrait/web/getJszlList";
      this.getData({
        url: url,
        data: data,
        func: res => {
          this.tableData3 = res;
          this.totalSize3 = res.total;
        }
      });
    },
    // 获取表格数据
    getTableData(obj) {
      if (this.flag - 0 === 1) {
        // 专业
        // 获取专业列表数据
        // /tr/GroupPortrait/web/getZyListDataByCon
        /* 
          yxid 	是 	String 	院系ID 为空时返回全部
          year 	是 	String 	年份 为空时返回全部
          zyid 	是 	String 	专业ID 为空时返回全部
          indexType 	是 	String 	类型 为空时返回全部
          startPage 	是 	String 	开始页码
          pageSize 	是 	String 	每页展示的条数
        */

        let { yxid, zyid, year, indexType, startPage, pageSize } = obj;
        let data = {
          yxid: yxid,
          year: year,
          zyid: zyid,
          indexType: indexType,
          startPage: startPage,
          pageSize: pageSize
        };

        let url = "/tr/GroupPortrait/web/getZyListDataByCon";
        this.getData({
          url: url,
          data: data,
          func: res => {
            this.tableData2 = res.list;
            this.totalSize2 = res.total;
          }
        });
      } else if (this.flag - 0 >= 2) {
        // 课程
        let { yxid, zyid, year, indexType, startPage, pageSize } = obj;
        let data = {
          yxid: yxid,
          year: year,
          indexType: indexType,
          startPage: startPage,
          pageSize: pageSize
        };
        let arr = [
          [
            "",
            "",
            "/tr/GroupPortrait/web/getAllJsDataByCon",
            "/tr/GroupPortrait/web/getAllKcDataByCon",
            "/tr/GroupPortrait/web/getAllXsDataByCon"
          ],
          [
            "",
            "",
            "/tr/GroupPortrait/web/getJsDataByCon",
            "/tr/GroupPortrait/web/getKcDataByCon",
            "/tr/GroupPortrait/web/getXsDataByCon"
          ]
        ];
        if (zyid !== undefined) {
          data.zyid = zyid;
          let url = arr[1][this.flag - 0];
          this.getData({
            url: url,
            data: data,
            func: res => {
              this.tableData2 = res.list;
              this.totalSize2 = res.total;
            }
          });
        } else {
          let url = arr[0][this.flag - 0];
          this.getData({
            url: url,
            data: data,
            func: res => {
              this.tableData = res.list;
              this.totalSize = res.total;
            }
          });
        }
      } else if (this.flag - 0 === 2) {
        // 教师
      } else if (this.flag - 0 === 4) {
        // 学生
      }
    },
    getData(obj) {
      let { url, data, func } = obj;
      this.$ajaxGet(url, data, res => {
        if (res.success) {
          func(res.data);
        } else {
          this.$mseeage({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    yxChange() {
      if (this.flag - 0 === 1) {
        this.getRanderChart({
          yxid: this.yxValue,
          year: "",
          zyid: "",
          dom: "chart_box_randarChart"
        });
        this.$ajaxGet(
          "/tr/GroupPortrait/web/getRadarData",
          {
            flag: this.flag,
            yxid: this.yxValue,
            year: "",
            zyid: ""
          },
          res => {
            if (res.success) {
              this.tableData = res.data.list;
            } else {
              this.$message({
                message: res.msg,
                type: "error"
              });
            }
          }
        );
      } else {
        this.getRanderChart({
          yxid: this.yxValue,
          year: this.xnValue,
          zyid: "",
          dom: "chart_box_randarChart"
        });
        this.handleCurrentChange(1);
        // this.handleCurrentChange2(1);
      }
    },
    yxChange2(val) {
      if (this.flag - 0 === 1) {
        this.getRanderChart({
          yxid: this.yxValue2,
          year: "",
          zyid: "",
          dom: "chart_box_randarChart"
        });
        this.getZyMajor(this.yxValue2);
        // this.$ajaxGet(
        //   "/tr/GroupPortrait/web/getRadarData",
        //   {
        //     flag: this.flag,
        //     yxid: this.yxValue2,
        //     year: "",
        //     zyid: ""
        //   },
        //   res => {
        //     if (res.success) {
        //       this.tableData = res.data.list;
        //     } else {
        //       this.$message({
        //         message: res.msg,
        //         type: "error"
        //       });
        //     }
        //   }
        // );
        // this.handleCurrentChange2(1)
      } else {
        this.getZy(this.yxValue2);
        this.getRanderChart({
          yxid: this.yxValue2,
          year: this.xnValue2,
          zyid: this.zyValue,
          dom: "chart_box_randarChart2"
        });
        this.handleCurrentChange2(1);
      }
    },
    xnChange() {
      this.getRanderChart({
        yxid: this.yxValue,
        year: this.xnValue,
        zyid: "",
        dom: "chart_box_randarChart"
      });
      this.handleCurrentChange(1);
    },
    xnChange2() {
      this.getRanderChart({
        yxid: this.yxValue2,
        year: this.xnValue2,
        zyid: this.zyValue,
        dom: "chart_box_randarChart2"
      });
      this.handleCurrentChange2(1);
    },
    zyChange() {
      this.xnChange2();
      this.handleCurrentChange2(1);
    },
    zbChange() {
      this.handleCurrentChange(1);
    },
    zbChange2() {
      this.handleCurrentChange2(1);
    },
    handleCurrentChange3(val) {
      this.currentPage = val - 0;
      this.getTableDataNew(val);
    },
    handleCurrentChange(val) {
      this.currentPage = val - 0;
      if (this.flag - 0 === 1) {
        this.getTableDataNew(val);
        return;
      }
      this.getTableData({
        yxid: this.yxValue,
        year: this.xnValue,
        indexType: this.zbValue,
        startPage: this.currentPage,
        pageSize: this.pageSize
      });
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val - 0;
      this.getTableData({
        yxid: this.yxValue2,
        year: this.xnValue2,
        zyid: this.zyValue,
        indexType: this.zbValue2,
        startPage: this.currentPage2,
        pageSize: this.pageSize2
      });
    }
  }
};
</script>
<style scoped>
.targetBox .title {
  font-size: 16px;
  color: #37474f;
  line-height: 16px;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 20px;
}
.chart_box_cjs {
  position: relative;
  height: 450px;
}
.col_item_box {
  height: 160px;
  position: relative;
  box-sizing: border-box;
  padding: 0 10px;
  vertical-align: top;
  background: #fff;
  border-radius: 4px;
}
.col_item_box.theAll {
  background: #70ad47;
  color: #fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  height: 16px;
  border-left: 4px solid #70ad47;
  line-height: 16px;
  padding-left: 10px;
  margin: 15px 0;
}
.col_item_box_left i.iconfont {
  font-size: 47px;
  vertical-align: top;
}
div.col_item_box_left {
  width: 70px;
  line-height: 160px;
  text-align: center;
}
div.col_item_box_right {
  width: 100%;
  box-sizing: border-box;
  padding-left: 70px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #a3afb7;
}
.col_item_box.theAll div.col_item_box_right {
  color: #fff;
}
div.col_item_box_right > div:first-child {
  margin-top: 39px;
}
div.col_item_box_right > div > span {
  font-size: 24px;
  color: #526069;
}
.col_item_box.theAll div.col_item_box_right > div > span {
  color: #fff;
}
div.col_item_box_right > div:first-child + div {
  margin-top: 5px;
}
.gender_box {
  font-size: 0;
}
.gender_item {
  display: inline-block;
  vertical-align: top;
  width: 50%;
  text-align: center;
  line-height: 50px;
  margin: 32px 0;
}
.gender_span {
  display: inline-block;
  vertical-align: top;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
}
.gender_span.man {
  border: 1px solid #d9e8fe;
  background: #ebf3ff;
}
.gender_span.woman {
  background: #fff2f5;
  border: 1px solid #ffdae3;
}
.font_bold_black {
  font-size: 23px;
  color: #526069;
}
div.gender_rate {
  display: inline-block;
  height: 8px;
  width: 70%;
  border-radius: 4px;
  background: #ff8b91;
  overflow: hidden;
}
div.gender_rate .gender_rate_span {
  display: block;
  height: 100%;
  background: #62a8ea;
  width: 50%;
}
.gender_line {
  font-size: 0;
}
div.gender_outside {
  display: inline-block;
  width: 15%;
  font-size: 12px;
}
.gender_outside.man {
  text-align: right;
  color: #62a8ea;
}
.gender_outside.woman {
  color: #ff8b91;
}
.jzgrs_box {
  margin-top: 20px;
}
.chart_show {
  height: 450px;
  background: #fff;
  overflow: hidden;
}
.topList {
  padding-top: 40px;
}
.topListItem {
  margin-bottom: 8px;
}
.topListItem .number {
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
.topListItem .topName {
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
.topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.showCard .el-card__body {
  padding: 0;
}
.showCard li {
  float: left;
  width: 19.8%;
  height: 130px;
  text-align: left;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #e4eaec;
}
.showCard li p {
  padding: 0 19%;
}
.showCard li:nth-child(5n) {
  border-right: none;
}
.showCard li .name {
  font-size: 13px;
  line-height: 22px;
  padding-top: 34px;
  color: #76838f;
}
.showCard li span {
  font-size: 24px;
  padding-right: 10px;
  color: #70ad47;
}
.showCard li .number {
  font-size: 12px;
  color: #a3afb7;
}
.showCard li:nth-child(2) span {
  color: #ee8239;
}
.showCard li:nth-child(3) span {
  color: #ffc000;
}
.showCard li:nth-child(4) span {
  color: #4472c4;
}
.showCard li:nth-child(5) span {
  color: #dd6969;
}
.showCard li:nth-child(6) span {
  color: #5b9bd5;
}
.showCard li:nth-child(7) span {
  color: #00a6a6;
}
.showCard li:nth-child(8) span {
  color: #6c6fbf;
}
.showCard li:nth-child(9) span {
  color: #ffb980;
}
.col_div {
  height: 138px;
  border-bottom: 1px solid #e4eaec;
  border-left: 1px solid #e4eaec;
  box-sizing: border-box;
  padding-top: 40px;
}
/* .last_oDiv .col_div:nth-of-type(odd) {
  border-left: 0 !important;
} */
.col_div .col_title {
  font-size: 12px;
  color: #585858;
}
.col_div > div {
  width: 160px;
  margin: 0 auto;
}
.col_div > div span {
  color: #a3afb7;
  font-size: 12px;
}
.col_div > div > span:first-child {
  color: #6c6fbf;
  font-size: 30px;
  font-family: "Arial";
}
.chart_show {
  margin-top: 22px;
  padding: 20px;
  box-sizing: border-box;
}
/* .chart_show_child {
  width: 100%;
  height: 100%;
} */
/* .titleTop {
    line-height: 18px;
    padding-top: 0;
    font-size: 18px;
    color: #37474f;
    padding-left: 10px;
    border-left: 5px solid #70ad47;
    margin-bottom: 24px;
}
.content_item {
  background:#fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
  display: none;
} */

.addZD {
  text-align: right;
  margin-bottom: 10px;
  margin-top: -10px;
}
.special_table {
  width: 100%;
}
.table_title {
  font-size: 16px;
  text-align: left;
  padding-bottom: 10px;
  color: #5e5e5e;
  font-style: normal;
  font-weight: 400;
  font-family: "san-serif";
}
.table_box_content {
  height: 310px;
  margin-top: 10px;
  /* overflow-y: auto; */
}
.select_jh_box {
  margin-top: 20px;
}
.select_jh_box .el-select {
  margin-right: 20px;
}
.chart_show {
  background: #fff;
  /* box-sizing: content-box; */
  /* padding: 0; */
  /* box-shadow: none; */
}
</style>
