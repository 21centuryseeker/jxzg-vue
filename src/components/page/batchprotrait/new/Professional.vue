<template>
  <div class="mainContent1">
    <div class="addZD">
        <el-button type="warning"  class="reverseBtn" size="small"  @click="addZb"><i class="iconfont">&#xe623;</i>自选指标</el-button>
     </div> 
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
              <span>{{value_1_01}}</span>
              个
            </p>
          </div>
        </el-card>
        </div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">国家示范专业</p>
            <p class="num">
              <span>{{value_1_02}}</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #4472c4  ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">省级示范专业</p>
            <p class="num">
              <span>{{value_1_03}}</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t" style="padding-right: 0;"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #ed7d31  ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">市级重点专业</p>
            <p class="num">
              <span>{{value_1_04}}</span>
              个
            </p>
          </div>
        </el-card></div>
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
              <span>{{value_1_08}}</span>
              个
            </p>
          </div>
        </el-card>
        </div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #a5a5a5 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">新增专业数</p>
            <p class="num">
              <span>{{value_1_05}}</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t">
          <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">停招专业数</p>
            <p class="num">
              <span>{{value_1_06}}</span>
              个
            </p>
          </div>
        </el-card>
        </div>
        <div class="split-t" style="padding-right: 0;"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">撤销专业数</p>
            <p class="num">
              <span>{{value_1_07}}</span>
              个
            </p>
          </div>
        </el-card></div>
      </div>


      <div class="countBox">
	  <template v-for="(item, index) in zybList">
		<div class="split-t" style="width: 50%;padding-right: 0;height: 96px;margin-bottom: 20px;" :style="{'padding-left': index%2 * 8.5 + 'px', 'padding-right': (index+1)%2 * 8.5 + 'px'}" :key="index">
          <!-- <el-card class="box-card clearfix"> -->
            <div class="countBoxR" style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);width: 100%;height: 100%;background: #fff;padding-left: 0;box-sizing: border-box;padding-top: 0;padding-bottom: 0;">
              <!-- <p class="text">{{item.dept_name}}</p> -->
              <div style="height: 100%;">
                <table style="width: 100%;height: 100%;" class="newZy_table" border="0" cellspacing="0" cellpadding="0">
                  <tbody border="0">
                    <tr>
                      <td style="height: 100%;width: 10%;">
                        <div style="height: 100%;background: #70ad47;color: #fff;word-break: break-all;box-sizing: border-box;position: relative;">
                          <div style="position: absolute;top: 50%;transform: translateY(-50%);width: 100%;">{{item.dept_name.slice(0, -3)}}<br/>{{item.dept_name.slice(-3)}}</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value1}}</span>
                          <div>专业数</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value2}}</span>
                          <div>教师数</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value3}}</span>
                          <div>学生数</div>
                        </div>
                      </td>
                      <td style="height: 100%;width: 22.5%;">
                        <div style="height: 100%;box-sizing: border-box;padding: 15px 0;">
                          <span>{{item.value4}}</span>
                          <div>实训室数量</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          <!-- </el-card> -->
        </div>
	  </template>
      </div>
      <!-- <div class="conutSecondRowBox">
      <el-row :gutter="15">
        <el-col :span="14" >
          <el-card>
            <span class="second_title">重点专业</span>
          <el-row >
            <el-col :span="8">
              <div class="targetCount">
                <div class="box-card">
                  <div class="countBoxL">
                    <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                  </div>
                  <div class="countBoxR">
                    <p class="text">国家级</p>
                    <p class="num">
                      <span>{{value_2_01}}</span>
                      个
                    </p>
                  </div>
                </div>
              </div>

            </el-col>
            <el-col :span="8">
              <div class="targetCount">
                  <div class="countBoxL">
                    <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                  </div>
                  <div class="countBoxR">
                    <p class="text">省级</p>
                    <p class="num">
                      <span>{{value_2_02}}</span>
                      个
                    </p>
                  </div>
              </div>

            </el-col>
            <el-col :span="8">
              <div class="targetCount">
                <div class="countBoxL">
                  <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                </div>
                <div class="countBoxR">
                  <p class="text">比率</p>
                  <p class="num">
                    <span>{{value_2_03}}</span>
                    %
                  </p>
                </div>
              </div>

            </el-col>
          </el-row>
          </el-card>
        </el-col>
        <el-col :span="10">
          <el-card>
            <span class="second_title">特色专业</span>
            <el-row >
              <el-col :span="12">
                <div class="targetCount">
                  <div class="box-card">
                    <div class="countBoxL">
                      <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                    </div>
                    <div class="countBoxR">
                      <p class="text">国家级</p>
                      <p class="num">
                        <span>{{value_3_01}}</span>
                        个
                      </p>
                    </div>
                  </div>
                </div>

              </el-col>
              <el-col :span="12">
                <div class="targetCount">
                  <div class="countBoxL">
                    <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                  </div>
                  <div class="countBoxR">
                    <p class="text">省级</p>
                    <p class="num">
                      <span>{{value_3_02}}</span>
                      个
                    </p>
                  </div>
                </div>

              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      </div> -->
      <!-- <div class="targetBox" v-if="false">
        <el-row :gutter="20">

          <el-col :span="12">
            <el-card class="box-card">
              <div class="title">{{new Date().getFullYear()}}各专业人数</div>
              <div class="targeTable">
                <el-table  ref="multipleTable"  :data="targetTableData1"
                           style="width: 100%">

                  <el-table-column   label="专业" align="center">
                    <template  slot-scope="scope">{{scope.row.name}}</template>
                  </el-table-column>
                  <el-table-column   label="人数"  align="center">
                    <template  slot-scope="scope">{{scope.row.value}}</template>
                  </el-table-column>
                </el-table>

                <el-pagination background
                               layout="prev, pager, next"
                               style="margin-top: 10px"
                               :current-page="currentPage1"
                               :page-size="pageSize1"
                               :total="totalPage1"
                               @current-change="handleCurrentChange1"
                               v-show="true" >
                </el-pagination>

              </div>

            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <el-row>
                <el-col :span="8">       <div class="title">近5年专业人数趋势</div></el-col>
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8">
                </el-col>
              </el-row>

              <div id="wunianqushi" class="chartBox"></div>
            </el-card>
          </el-col>
        </el-row>

      </div> -->
      <div class="targetBox">

            <el-card class="box-card">
                     <!-- <div class="title">当前学年各专业招生人数</div> -->

              <div id="zhaoshengrenshu" class="chartBox chart_box_cjs">
                <img src="../../../../assets/empty.jpg" alt="">
              </div>
            </el-card>

      </div>
      <div class="targetBox">

        <el-card class="box-card">
          <!-- <div class="title">各专业在校生人数</div>
          <p class="caption">
            女生人数最多专业: <span style="color: #70ad47;">{{value_zxs_01}}</span>
          </p>
          <p class="caption">
            男女比:<span style="color: #70ad47;">{{value_zxs_02}}</span>
          </p> -->
          <div id="baodaorenshu" class="chartBox chart_box_cjs">
            <img src="../../../../assets/empty.jpg" alt="">
          </div>
        </el-card>

      </div>
      <div class="targetBox">

        <el-card class="box-card">
          <!-- <div class="title">各专业部师资数量</div> -->

          <div id="jiuyelv" class="chartBox chart_box_cjs">
            <img src="../../../../assets/empty.jpg" alt="">
          </div>
        </el-card>

      </div>
      <div class="targetBox">

        <el-card class="box-card">
          <!-- <div class="title">各专业部师资结构</div> -->

          <div id="biandonglv" class="chartBox chart_box_cjs">
            <img src="../../../../assets/empty.jpg" alt="">
          </div>
        </el-card>

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
                        <th style="width:50%">专业名称</th>
                        <th style="width:25%">得 分</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr  v-for="(item,index) in TOP5List" :key="index">
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
                        <th style="width:50%">专业名称</th>
                        <th style="width:25%">得 分</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr  v-for="(item,index) in TOP5List1" :key="index">
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
                        <th style="width:50%">专业名称</th>
                        <th style="width:25%">得 分</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr  v-for="(item,index) in TOP5List2" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.value}}</td>
                      </tr>
                    </tbody>
                  </table>
                </template>
          </el-card>
      </div>

      <!-- <div class="targetBox">

        <el-card class="box-card">
          <div class="title">当学年各专业师生获奖情况</div>

          <div id="huojiang" class="chartBox"></div>
        </el-card>

      </div>
      <div class="targetBox">

        <el-card class="box-card">
          <div class="title">当学年各专业培训情况</div>

          <div id="peixun" class="chartBox"></div>
        </el-card>

      </div>
      <div class="targetBox">

        <el-card class="box-card">
          <div class="title">各专业校企合作情况</div>

          <div id="xiaoqihezuo" class="chartBox"></div>
        </el-card>

      </div> -->
      <!-- <div style="padding: 0 10px" class="targetBox" v-if="false">
        <el-row :gutter="20">

            <el-card class="box-card">
              <div class="title">各专业成绩分布</div>
              <div class="targeTable">
                <el-table  ref="multipleTable"  :data="targetTableData2"
                           style="width: 100%">

                  <el-table-column   label="专业"  align="center" show-overflow-tooltip>
                    <template  slot-scope="scope">{{scope.row.zymc}}</template>
                  </el-table-column>
                  <el-table-column   label="平均成绩"  align="center">
                    <template  slot-scope="scope">{{scope.row.pjcj}}</template>
                  </el-table-column>
                  <el-table-column   label="公共基础课"  align="center">
                    <template  slot-scope="scope">{{scope.row.ggjck}}</template>
                  </el-table-column>
                  <el-table-column   label="学科基础课"  align="center">
                    <template  slot-scope="scope">{{scope.row.xkjck}}</template>
                  </el-table-column>
                  <el-table-column   label="专业课"  align="center">
                    <template  slot-scope="scope">{{scope.row.zyk}}</template>
                  </el-table-column>
                  <el-table-column   label="专业基础平台课"  align="center">
                    <template  slot-scope="scope">{{scope.row.zyjcptk}}</template>
                  </el-table-column>
                  <el-table-column   label="平均成绩排名变化"  align="center">
                    <template  slot-scope="scope">{{scope.row.pjcjpmbh}}</template>
                  </el-table-column>
                </el-table>

                <el-pagination background
                               layout="prev, pager, next"
                               style="margin-top: 10px"
                               :current-page="currentPage2"
                               @current-change="handleCurrentChange2"
                               :page-size="pageSize2"
                               :total="totalPage2"
                               v-show="true" >
                </el-pagination>

              </div>

            </el-card>
        </el-row>

      </div> -->
      <!-- <div style="padding: 0 10px" class="targetBox" v-if="false">
        <el-row :gutter="20">

          <el-card class="box-card">
            <div class="title">各专业不及格率</div>
            <div class="targeTable">
              <el-table  ref="multipleTable"  :data="targetTableData3"
                         style="width: 100%">
                <el-table-column   label="专业" align="center" show-overflow-tooltip>
                  <template  slot-scope="scope">{{scope.row.zymc}}</template>
                </el-table-column>
                <el-table-column   label="平均不及格率"  align="center">
                  <template  slot-scope="scope">{{scope.row.pjbjgl}}</template>
                </el-table-column>
                <el-table-column   label="公共基础课"  align="center">
                  <template  slot-scope="scope">{{scope.row.ggjck}}</template>
                </el-table-column>
                <el-table-column   label="学科基础课"  align="center">
                  <template  slot-scope="scope">{{scope.row.xkjck}}</template>
                </el-table-column>
                <el-table-column   label="专业课"  align="center">
                  <template  slot-scope="scope">{{scope.row.zyk}}</template>
                </el-table-column>
                <el-table-column   label="专业基础平台课"  align="center">
                  <template  slot-scope="scope">{{scope.row.zyjcptk}}</template>
                </el-table-column>
                <el-table-column   label="平均不及格率排名变化" width="200"  align="center">
                  <template  slot-scope="scope">{{scope.row.pjbjglpmbh}}</template>
                </el-table-column>
              </el-table>

              <el-pagination background
                             layout="prev, pager, next"
                             style="margin-top: 10px"
                             :current-page="currentPage3"
                             @current-change="handleCurrentChange3"
                             :page-size="pageSize3"
                             :total="totalPage3"
                             v-show="true" >
              </el-pagination>

            </div>

          </el-card>
        </el-row>

      </div > -->
      <zxzb-common type="4"></zxzb-common>
       <chart-common flag="2" v-if="is_show"></chart-common>
      <btnCommon :dialogVisible="addZb_dialogVisible" @cancel='cancel' :sureADD="sureAdd" flag="2" v-if="addZb_dialogVisible"></btnCommon>

    </div>
    
  </div>
</template>

<script>
import zxzbCommon from './zxzbCommon.vue'
import chartCommon from '../../myhxCommon/chartCommon.vue'
import btnCommon from '../../myhxCommon/btnCommon.vue'
export default {
  components: { zxzbCommon ,chartCommon, btnCommon },
  name: 'Professional',
  data () {
    return {
      is_show: true,
      addZb_dialogVisible:false,
      colorIndex: 0,
      colorArr: ['#70ad47', '#ed7d31', '#ffc000',
        '#4472c4', '#dd6969', '#00a6a6',
        '#6c6fbf', '#62a8ea', '#ffb980',
        '#d56290'
      ],
      chartDates: [],
      baseUrl: this.HOST + '/tr/GroupPortrait/web/getPortraitInfoById',
      value_1_01: '',
      value_1_02: '',
      value_1_03: '',
      value_1_04: '',
      value_1_05: '',
	  value_1_06: '',
	  value_1_07: '',
	  value_1_08: '',
      value_2_01: '',
      value_2_02: '',
      value_2_03: '',
      value_3_01: '',
      value_3_02: '',
      currentPage1: 1,
      pageSize1: 6,
      totalPage1: 0,
      targetTableData1: [],
      currentPage2: 1,
      pageSize2: 6,
      totalPage2: 0,
      targetTableData2: [],
      currentPage3: 1,
      pageSize3: 6,
      totalPage3: 0,
      targetTableData3: [],
      value2: '建筑工程',
      targetTableData: [
        {
          pname: '建筑工程',
          counts: 200
        }, {
          pname: '计算机工程',
          counts: 178
        }, {
          pname: '大数据',
          counts: 211
        }, {
          pname: '信息工程',
          counts: 385
        }, {
          pname: '高等数学',
          counts: 169
        }, {
          pname: '建筑工程',
          counts: 286
        }
      ],
      value_zxs_01: '',
      value_zxs_02: '',
    zybList: [],
    TOP5List:[],
    TOP5ListFlag:true,
    Toptitle:'',
    TOP5List1:[],
    TOP5ListFlag1:true,
    Toptitle1:'',
    TOP5List2:[],
    TOP5ListFlag2:true,
    Toptitle2:''
    }
  },
  mounted () {
    
  this.$ajaxMore(
  'post',
      '/tr/GroupPortrait/web/getPortraitInfoByCon',
      {id:65,
pageLength:100,
pageSize:1},
      res => {
        if (res.success) {
          this.zybList = res.data.data
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // 获取专业基本情况
    this.$ajaxGet(
      this.baseUrl,
      {id: 25},
      res => {
        if (res.success) {
          this.value_1_01 = res.data.value1
          this.value_1_02 = res.data.value3
          this.value_1_03 = res.data.value4
          this.value_1_04 = res.data.value5
          this.value_1_05 = res.data.value6
		  this.value_1_06 = res.data.value7
		  this.value_1_07 = res.data.value8
		  this.value_1_08 = res.data.value2
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // 各专业招生人数
    this.$ajaxGet(
      this.baseUrl,
      {id: 26},
      res => {
        if (res.success) {
          this.$ChartUtil.drawChart(
            'zhaoshengrenshu',
            res.data.title,
            res.data.legend,
            '',
            res.data.series,
            res.data.xAxis,
            true,
            {
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
              tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                  formatter : '{b}<br/>{c}人'
              },
              grid: {
                x: 33,
                x2: 30,
                y: 60,
                y2: 100
              }
            },
            this
          )
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // this.$ajaxGet(
    //   this.baseUrl,
    //   {id: 29},
    //   res => {
    //     if (res.success) {
    //       this.value_zxs_01 = res.data.value1
    //       this.value_zxs_02 = res.data.value2
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: 'error'
    //       })
    //     }
    //   }
    // )
    this.$ajaxGet(this.baseUrl, {
      id: 30
    }, (res) => {
      if (res.success) {
        let subtext
        this.$ajaxGet(
          this.baseUrl,
          {id: 29},
          res1 => {
            if (res1.success) {
              subtext='女生人数最多专业:'+res1.data.value1+'   男女比:'+res1.data.value2
              let series = []
              for (let key in res.data.series) {
              series.push({
                  type: 'bar',
                  name: key,
                  // barGap: '0%',
                  data: res.data.series[key]
              })
              }
              this.$ChartUtil.drawChart('baodaorenshu', res.data.title, res.data.legend, '', series, res.data.xAxis, true, {
              title: {
                   text: res.data.title,
                   subtext: subtext,
                  textStyle: {// 标题内容的样式
                  fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                  fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
                  fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
                  fontSize: 16// 主题文字字体大小，默认为18px
                  }
              },
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
              tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                  formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人'
              },
              grid:{
                y: 120,
                y2: 120
              },
              legend: {
              y: '50',
              data: res.data.legend
              },
        // yAxis: yAxis
        }, this)
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error'
                  })
                  }
                  }
            )

      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    })
    // jiuyelv
    this.$ajaxGet(this.baseUrl, {
      id: 31
    }, (res) => {
      if (res.success) {
        // let series = []
        // for (let key in res.data.series) {
        //   series.push({
        //       type: 'bar',
        //       name: key,
        //       data: res.data.series[key]
        //     })
        // }
        this.$ChartUtil.drawChart('jiuyelv', res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, true, {
          yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
              tooltip : {
              trigger: 'axis',
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter : '{b}<br/>{c0}人'
          },
          legend: {
          // y: '20',
          data: res.data.legend
        },
        grid: {
          y2: 90
        }
        // yAxis: yAxis
        }, this)
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    })
    // biandonglv
    this.$ajaxGet(this.baseUrl, {
      id: 32
    }, (res) => {
      if (res.success) {
        let series = []
        for (let key in res.data.series) {
          series.push({
              type: 'bar',
              name: key,
              stack: 1,
              data: res.data.series[key]
            })
        }
        this.$ChartUtil.drawChart('biandonglv', res.data.title, res.data.legend, '', series, res.data.xAxis, true, {
          yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
              tooltip : {
              trigger: 'axis',
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人'
          },
          legend: {
          // y: '20',
          data: res.data.legend
        },
        grid: {
          y2: 90
        }
        // yAxis: yAxis
        }, this)
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    }),
    // top 排名
    this.$ajaxMore('post',this.HOST +  '/tr/trPortraitTop/web/search', {
      id: 1
    }, (res) => {
      if (res.success) {
        if(res.data){
          this.Toptitle=res.data.title
         if(res.data.list.length>0){
            this.TOP5ListFlag=false
          }else{
            this.TOP5ListFlag=true
          }
          this.TOP5List = []
          this.TOP5List = res.data.list
        }
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    }),
    // top 排名   id=2
    this.$ajaxMore('post',this.HOST +  '/tr/trPortraitTop/web/search', {
      id: 2
    }, (res) => {
      if (res.success) {
        if(res.data){
          this.Toptitle1=res.data.title
         if(res.data.list.length>0){
            this.TOP5ListFlag1=false
          }else{
            this.TOP5ListFlag1=true
          }
          this.TOP5List1 = []
          this.TOP5List1 = res.data.list
        }
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    }),
        // top 排名  id=13
    this.$ajaxMore('post',this.HOST +  '/tr/trPortraitTop/web/search', {
      id: 13
    }, (res) => {
      if (res.success) {
        if(res.data){
          this.Toptitle2=res.data.title
         if(res.data.list.length>0){
            this.TOP5ListFlag2=false
          }else{
            this.TOP5ListFlag2=true
          }
          this.TOP5List2 = []
          this.TOP5List2 = res.data.list
        }
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    })
  },
  created () {},
  methods: {
   sureAdd () {
      this.addZb_dialogVisible = false
      this.is_show = false
      setTimeout(() => {
        this.is_show = true
      },0)
    },
    cancel(){
      this.addZb_dialogVisible=false
    },
    // 添加指标
    addZb: function () {
      this.addZb_dialogVisible=true
    },
  }
  
}
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
    padding:0 1.64%;
    margin-top: 25px;
  }
  .mainContent1 .el-table{
    min-height: 336px;
  }
  .tab-control{
    width:100%;
    font-size: 14px;
    color: #76838f;
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
    margin-bottom: 26px;
  }
  .tab-control .tab-control-item div{
    line-height: 38px;
    float: left;
    padding: 0 25px;
    background-color: #fff;
    border-right: 1px solid #fff;
    cursor: pointer;
  }
  .tab-control .tab-control-item .active{
    position: relative;
    top: 1px;
    height: 39px;
    background-color: #f1f4f5;
    border-right: 1px solid #e4eaec;
    border-bottom: 1px solid #f1f4f5
  }

  .titleTop{
    line-height: 18px;
    font-size: 18px;
    color: #37474f;
    padding-left:10px;
    border-left:5px solid #70ad47;
    margin-bottom: 24px;
  }
  .marbottom24{
    margin-bottom: 24px;
  }
  .noticeBox .box-card{
    height: 120px;
  }
  .noticeBox .el-scrollbar__wrap{
    overflow-x: hidden;
  }
  .noticeL{
    float: left;
    width: 110px;
    height: 80px;
    text-align: right;
    line-height: 80px;
    color: #e96c72;
    font-size: 18px;
  }
  .noticeL span{
    font-size: 18px;
    vertical-align: top;
  }
  .noticeL .iconfont{
    font-size: 45px;
  }
  .noticeR{
    margin-left: 110px;
    padding-left: 50px;

  }
  .noticeR .scrollbar {
    height: 80px;
  }
  .noticeRList{
    float: left;
    width: 50%;
  }
  .noticeRList .el-alert{
    /* min-width:400px; */
    width: 98%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
    /* margin-left:3% */
  }
  .mainContent1 .el-alert:nth-child(2n-1){
    margin-right: 2%
  }
  .countBox{
    text-align: center
  }
  .countBox .el-carousel,
  .el-carousel__container{
    height: 145px !important;
  }
  .banner .list_card{
    float: left;
    width: 31%;
    margin-left: 2.2%
  }
  .countBox .targetCount .el-card{
    background-color:#70ad47
  }
  .countBox .targetCount .text,
  .countBox .targetCount p,
  .countBox .targetCount .num span{
    color: #fff
  }
  .countBoxL, .countBoxR{
    vertical-align: middle;
    display: inline-block;
    padding-bottom: 14px;
    padding-top: 14px;
  }
  .countBoxL{
    width: 20%;
    text-align: center;
  }
  .countBoxL .iconfont{
    font-size: 42px;
    color: #fff;
    line-height: 62px;
  }
  .banner .list_card  .countBoxL .iconfont{
    font-size: 48px;
    line-height: 72px;
  }
  .banner .countBoxL .iconColor{
    color: #ffc000
  }
  .banner .countBoxL .iconColor1{
    color: #4472c4
  }
  .banner .countBoxL .iconColor2{
    color: #ed7d31
  }
  .countBoxR{
    width: 60%;
    padding-left: 15px;
  }
  .countBox .box-card{
    height: 134px;

  }

  .countBox p,.countBox .text {
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
  .targetBox{
    margin-top: 15px;
  }
  .targetBox .box-card{
    height: 390px;
  }
  .targetBox .title{
    font-size: 16px;
    color: #37474f;
    line-height: 16px;
    margin-bottom: 20px;
  }
  .box-card{
    margin-bottom: 24px;
  }

  /* /我的目标 */
  .targeTable .has-gutter  th,
  .targeTable .has-gutter .el-table tr{
    background-color: #f5f8fa
  }
  .chartBox{
    height:350px
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
    background: #a5a5a5
  }
  .style_three {
    background: #70ad47;
  }
  .style_four {
    background: #ed7d31
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
  .split-t{
    float: left;
    width: 20%;
    /* margin-right: 17px; */
    box-sizing: border-box;
    padding-right: 17px
  }

  .conutSecondRowBox .el-col-10 .el-card{
    background-color: #ed7d31
  ;
  }
  .conutSecondRowBox .el-col-14 .el-card{
    background-color: #70ad47
  ;
  }
  .conutSecondRowBox .el-col-14  .iconfont{
   color: #95cf6e!important;
  ;
  }
  .conutSecondRowBox .el-col-10 .iconfont{
    color: #f6a670!important;
  ;
  }
  .conutSecondRowBox .el-card__body{
    padding-top: 20px;
  }
  .conutSecondRowBox .el-card__body .text{
    font-size: 14px;
    font-weight: bold;
    color: white;

  }
  .conutSecondRowBox .el-card__body   .num{
    font-size: 14px;
    color: white;
    padding-top: 10px;

  }
  .conutSecondRowBox .el-card__body   .num span{
    font-size: 20px;
    color: white;

  }
  .conutSecondRowBox .targetCount{
    margin-left: 15px;
  }
  .second_title{
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
    width: 25%;
  }
  .countBox.newZy_2 .split-t {
    width: 33.33%;
  }
  .topList{
    padding-top: 20px
}
.topListItem {
    margin-bottom: 8px;
}
.topListItem .number{
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
.topListItem .topName{
    margin-left:18px;
    float:left;
    width: 80%;
    display: block;
    line-height: 32px;
    color: #37474f;
    padding-left: 24px;
    font-size: 14px;
    background-color: #f5f8fa

}
.topListItem .month{
    float: right;
    padding-right: 25px;
    line-height: 32px;
    color: #76838f;
    font-size: 12px;
    vertical-align: middle;
}
.listTitle_w{
      margin-bottom: 18px;
    font-size: 16px;
    color: #888787;
}
.twoCenter tr th:nth-child(2),
.twoCenter tr td:nth-child(2){
text-align: left;
padding-left: 100px
}
.twoCenter tr td:first-child{
color: #70ad47
}
.addZD{
  text-align: right;
  margin-bottom: 10px;
  margin-top: -10px;
}
</style>
