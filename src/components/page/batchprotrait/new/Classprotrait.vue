<template>
  <div class="mainContent1">
     <div class="addZD">
        <el-button type="warning"  class="reverseBtn" size="small"  @click="addZb"><i class="iconfont">&#xe623;</i>自选指标</el-button>
     </div> 
    <div class="tab-content">
      <div>
            <div class="courseInfo">
                 <el-row :gutter="20">
                       <el-col :span="8">
                            <div class="schoolShow schoolShowInfo">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont">&#xe680;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">课程总数</p>
                                            <p class="num">
                                                <span>{{value_1_01}}</span>
                                                门
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="8">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor2">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">公共素质课</p>
                                            <p class="num">
                                                <span>{{value_1_02}}</span>
                                                门
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="8">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">专业课</p>
                                            <p class="num">
                                                <span>{{value_1_03}}</span>
                                                门
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <!-- <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">实践课</p>
                                            <p class="num">
                                                <span>{{value_1_04}}</span>
                                                门
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col> -->
                    </el-row>
            </div>
        </div>
      <!-- <div class="countBox">
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">国家级精品在线开放课程</p>
            <p class="num">
              <span>75</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">省级精品在线开放课程</p>
            <p class="num">
              <span>60</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #4472c4  ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">省级创新创业教育专业课程</p>
            <p class="num">
              <span>5</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #ed7d31  ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">网络课程</p>
            <p class="num">
              <span>5</span>
              个
            </p>
          </div>
        </el-card></div>
        <div class="split-t"><el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont" style="color: #a5a5a5 ">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">核心课程</p>
            <p class="num">
              <span>14</span>
              个
            </p>
          </div>
        </el-card></div>
      </div> -->
      <!-- <div class="conutSecondRowBox">
        <el-row :gutter="15">
          <el-col :span="14" >
            <el-card>
              <span class="second_title">选用教材</span>
              <el-row >
                <el-col :span="8">
                  <div class="targetCount">
                      <div class="countBoxL">
                        <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                      </div>
                      <div class="countBoxR">
                        <p class="text">国家级规化教材</p>
                        <p class="num">
                          <span>{{gjiaGuihua}}</span>
                          %
                        </p>
                      </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="targetCount">
                    <div class="box-card">
                    <div class="countBoxL">
                      <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                    </div>
                    <div class="countBoxR">
                      <p class="text">省级重点教材</p>
                      <p class="num">
                        <span>{{shengzhongdian}}</span>
                        %
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
                      <p class="text">校企合作开发的样本教材</p>
                      <p class="num">
                        <span>{{xiaoqihezuo}}</span>
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
              <span class="second_title">课时组成</span>
              <el-row >
                <el-col :span="12">
                  <div class="targetCount">
                    <div class="box-card">
                      <div class="countBoxL">
                        <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
                      </div>
                      <div class="countBoxR">
                        <p class="text">理论占比</p>
                        <p class="num">
                          <span>{{lilunzhanbi}}</span>
                          %
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
                      <p class="text">实践占比</p>
                      <p class="num">
                        <span>{{shijianzhanbi}}</span>
                        5%
                      </p>
                    </div>
                  </div>

                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div> -->
      <!-- <div style="padding: 0 10px" class="targetBox" v-if="false">
        <el-row :gutter="20">

          <el-card class="box-card">
            <div class="title">课程列表</div>
            <div class="targeTable">
              <el-table  ref="multipleTable"  :data="targetTableData1"
                         style="width: 100%">

                <el-table-column   align="center" label="序号" >
                  <template  slot-scope="scope">{{scope.row.index+1}}</template>
                </el-table-column>
                <el-table-column  align="center"  label="课程名称" show-overflow-tooltip>
                  <template  slot-scope="scope">{{scope.row.kcmc}}</template>
                </el-table-column>
                <el-table-column  align="center"  label="课程代码" >
                  <template  slot-scope="scope">{{'00'+(scope.row.kcdm)}}</template>
                </el-table-column>
                <el-table-column   align="center" label="适用专业" show-overflow-tooltip>
                  <template  slot-scope="scope">{{scope.row.syzy}}</template>
                </el-table-column>
                <el-table-column   align="center" label="总学时" >
                  <template  slot-scope="scope">{{scope.row.zxs}}</template>
                </el-table-column>
                <el-table-column  align="center"  label="周学时" >
                  <template  slot-scope="scope">{{scope.row.zhxs}}</template>
                </el-table-column>
                <el-table-column   align="center" label="是否专业核心课程" >
                  <template  slot-scope="scope">{{scope.row.ishx==0?'否':'是'}}</template>
                </el-table-column>
              </el-table>

              <el-pagination background
                             layout="prev, pager, next"
                             style="margin-top: 10px"
                             :current-page="currentPageKlb"
                             :page-size="5"
                             :total="libiaototal"
                             @current-change="kcliebiaopagtion"
                             v-show="true" >
              </el-pagination>

            </div>

          </el-card>
        </el-row>

      </div > -->
      <div class="targetBox">
        <el-row :gutter="20">

            <el-col :span="12">
              <el-card class="box-card">
                <!-- 课程分布情况 -->
                <div id="zhuanyekaishe" class="chartBox chart_box_cjs">
                  <img src="../../../../assets/empty.jpg" alt="">
                </div>
              </el-card>
            </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- <div id="zhuanrenjiaoshi" class="chartBox"></div> -->
              <!-- 课时数分布情况 -->
              <div id="kechengziyuan" class="chartBox chart_box_cjs">
                <img src="../../../../assets/empty.jpg" alt="">
              </div>
            </el-card>
          </el-col>
        </el-row>

      </div>
      <!-- <div class="targetBox" >
            <el-card class="box-card">
              <div id="xiaoqihezuo1" class="chartBox">各专业开设课程情况</div>
            </el-card>
      </div> -->
      <!-- <div class="targetBox" >
            <el-card class="box-card">
              <div id="xiaoqihezuo2" class="chartBox">使用国家规划教材情况</div>
            </el-card>
      </div> -->
      <!-- <div class="targetBox" >
            <el-card class="box-card" style="position: relative;">
              <div style="position: absolute;right: 30px; top: 30px;">
                <el-select size="small"></el-select>
              </div>
              <div id="xiaoqihezuo2" class="chartBox">教师备课情况及反馈</div>
            </el-card>
      </div> -->
      <!-- <div class="targetBox" v-if="false">
        <el-row :gutter="20">

          <el-col :span="12">
            <el-card class="box-card">
              <div id="kechengziyuan" class="chartBox"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div id="xiaoqihezuo" class="chartBox"></div>
            </el-card>
          </el-col>
        </el-row>
      </div> -->
      <div style="padding: 0 10px" class="targetBox" v-if="false">
        <el-row :gutter="20">

          <el-card class="box-card">
            <div class="title">
              课程平均成绩排名TOP10
              <!-- <el-select style="float: right;" size="small"></el-select> -->
              <!-- <el-select style="float: right; margin-right: 20px;" size="small"></el-select> -->
            </div>
            <div class="targeTable">
              <el-table  ref="multipleTable" :data="gradeTableData"
                         style="width: 100%;border: none">

                <el-table-column   label="平均成绩排名"  align="center" show-overflow-tooltip >
                  <template  slot-scope="scope">{{scope.$index + 1}}</template>
                </el-table-column>
                <el-table-column   label="平均成绩"  align="center" >
                  <template  slot-scope="scope">{{scope.row.value1}}</template>
                </el-table-column>
                <el-table-column label="课程代码"   align="center">
                  <template  slot-scope="scope">{{scope.row.value2}}</template>
                </el-table-column>
                <el-table-column label="课程名称"  align="center">
                  <template  slot-scope="scope">{{scope.row.value3}}</template>
                </el-table-column>
                <el-table-column label="课程类型"  align="center">
                  <template  slot-scope="scope">{{scope.row.value4}}</template>
                </el-table-column>
                <el-table-column label="优秀率"  align="center">
                  <template  slot-scope="scope">{{scope.row.value5}}</template>
                </el-table-column>
                <el-table-column  label="不及格率"  align="center">
                  <template  slot-scope="scope">{{scope.row.value6}}</template>
                </el-table-column>
              </el-table>

              <el-pagination background
                             layout="prev, pager, next"
                             style="margin-top: 10px"
                             :current-page="currentPageKczhuangkuang"
                             :page-size="5"
                             @current-change="zhuangkuangpagtion"
                             :total="zhuangkuangtotal"
                             v-show="true" >
              </el-pagination>
            </div>

          </el-card>
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
                        <th style="width:50%">课程名称</th>
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
                        <th style="width:50%">课程名称</th>
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
                        <th style="width:50%">课程名称</th>
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

    </div>
     <zxzb-common type="3"></zxzb-common>
       <chart-common flag="3" v-if="is_show"></chart-common>
     <btnCommon :dialogVisible="addZb_dialogVisible" @cancel='cancel' :sureADD="sureAdd" flag="3" v-if="addZb_dialogVisible"></btnCommon>

  </div>
</template>

<script>

import zxzbCommon from './zxzbCommon.vue'
import chartCommon from '../../myhxCommon/chartCommon.vue'
import btnCommon from '../../myhxCommon/btnCommon.vue'
export default {
  components: { zxzbCommon,chartCommon, btnCommon  },
  name: 'classprotrait',
  data () {
    return {
      is_show: true,
      addZb_dialogVisible:false,
      baseUrl: this.HOST + '/tr/GroupPortrait/web/getPortraitInfoById',
      value_1_01: '',
      value_1_02: '',
      value_1_03: '',
      value_1_04: '',
      gradeTableData: [],
      gjiaGuihua: '',
      shengzhongdian: '',
      xiaoqihezuo: '',
      lilunzhanbi: '',
      shijianzhanbi: '',
      currentPageKlb: 0, // 解决控制台报错的问题，将空字符串修改为0 (cjs)
      libiaototal: 0,
      value2: '建筑工程',
      currentPageKczhuangkuang: 0,
      zhuangkuangtotal: 0,

      targetTableData: [
      ],
      targetTableData1: [
      ],
      targetTableData2: [
      ],
      Toptitle:'',
      TOP5List:[],
      TOP5ListFlag:false,
      Toptitle1:'',
      TOP5List1:[],
      TOP5ListFlag1:false,
      Toptitle2:'',
      TOP5List2:[],
      TOP5ListFlag2:false


    }
  },
  mounted () {
    // top 排名  id=54
    this.$ajaxMore('post',this.HOST +  '/tr/trPortraitTop/web/search', {
      id: 54
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
    })
        // top 排名  id=54
    this.$ajaxMore('post',this.HOST +  '/tr/trPortraitTop/web/search', {
      id: 58
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
    })
            // top 排名  id=61
    this.$ajaxMore('post',this.HOST +  '/tr/trPortraitTop/web/search', {
      id: 61
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
    this.$ajaxGet(
      this.baseUrl,
      {id: 33},
      res => {
        if (res.success) {
          this.value_1_01 = res.data.value1
          this.value_1_02 = res.data.value2
          this.value_1_03 = res.data.value3
          this.value_1_04 = res.data.value4
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // 课程分布情况
    this.$ajaxGet(
      this.baseUrl,
      {id: 34},
      res => {
        if (res.success) {
          res.data.series[0].radius = '60%'
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'zhuanyekaishe',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
    // 课时数分布情况
    this.$ajaxGet(
      this.baseUrl,
      {id: 36},
      res => {
        if (res.success) {
          res.data.series[0].radius = '60%'
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'kechengziyuan',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
    getData: function () {
      // 获取第一个

      this.baseAjax(503, {}, '选用教材').then(this.getXuanyongjiacai)
      this.baseAjax(504, {}, '课时组成').then(this.getKeshizucheng)
      this.baseAjax(505, {pageSize: 1, pageLength: 5}, '课程列表').then(this.getClassList)
      this.baseAjax(506, {}, '专业开设课程情况').then(this.getZhuanyekekaishiqingkuang)
      this.baseAjax(501, {}, '专任者教师授课情况').then(this.getZhuanyejiashishouke)
      this.baseAjax(509, {}, '课程资源').then(this.getKechengziyuan)
      this.baseAjax(507, {}, '校企合作开发课程门数占开设课程总门数比率变化').then(this.getXiaoqihezuo)
      this.baseAjax(508, {pageSize: 1, pageLength: 5}, '课程状况').then(this.getKechengZhuangkuang)
    },
    getKechengZhuangkuang: function (data) {
      this.targetTableData = data.data.data
      this.currentPageKczhuangkuang = data.data.currentPage
      this.zhuangkuangtotal = data.data.total
      this.targetTableData.filter((item, index) => {
        item.index = (this.currentPageKczhuangkuang - 1) === 0 ? (index) : ((this.currentPageKczhuangkuang - 1) * 5 + index)
      })
    },
    zhuangkuangpagtion: function (cp) {
      this.baseAjax(508, {pageSize: cp, pageLength: 5}, '课程状况').then(this.getKechengZhuangkuang)
      this.currentPageKczhuangkuang = cp
    },
    getXiaoqihezuo: function (data) {
      let series = data.data.series
      let xdata = data.data.xAxis
      this.drawXiaoqihezuo(series, xdata)
    },
    getKechengziyuan: function (data) {
      let ldata = data.data.legend
      let series = data.data.series
      let xdata = data.data.yAxis

      this.drawKechengziyuanChart(series, xdata, ldata)
    },
    getZhuanyejiashishouke: function (data) {
      let ldata = data.data.legend
      let series = data.data.series
      this.getZhuanrenjiashi(ldata, series)
    },
    getZhuanyekekaishiqingkuang: function (data) {
      let ldata = data.data.legend
      let series = data.data.series
      this.getZhuanyekaishe(ldata, series)
    },
    kcliebiaopagtion: function (cp) {
      this.baseAjax(505, {pageSize: cp, pageLength: 5}, '课程列表').then(this.getClassList)
      this.currentPageKlb = cp
    },
    getClassList: function (data) {
      this.targetTableData1 = data.data.data
      this.currentPageKlb = data.data.currentPage
      this.libiaototal = data.data.total
      this.targetTableData1.filter((item, index) => {
        item.index = (this.currentPageKlb - 1) === 0 ? (index) : ((this.currentPageKlb - 1) * 5 + index)
      })
    },
    getKeshizucheng: function (data) {
      let {value1, value2} = data.data.series
      this.lilunzhanbi = value1
      this.shijianzhanbi = value2
    },
    getXuanyongjiacai: function (data) {
      let {value1, value2, value3} = data.data.series
      this.gjiaGuihua = value1
      this.shengzhongdian = value2
      this.xiaoqihezuo = value3
    },
    getZhuanrenjiashi: function (ldata, series) {
      this.$ChartUtil.drawChartNoXY('zhuanrenjiaoshi', '专任教师授课情况', ldata, this.$ChartUt.HORIZONTAL, series, [], {}, this)
    },
    getZhuanyekaishe: function (ldata, series) {
      this.$ChartUtil.drawChartNoXY('zhuanyekaishe', '专业课开设情况', ldata, this.$ChartUt.HORIZONTAL, series, [], {}, this)
    },

    getBiandonglv: function () {
      let continer = this.baseChart('biandonglv')
      let option = {
        title: {
          show: false,
          left: '3%',
          text: '在线学习学生时长',
          textStyle: {// 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 18// 主题文字字体大小，默认为18px
          }
        },
        backgroundColor: 'white',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          left: '80%',
          data: ['申请变动', '实际变动']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: false},
            dataZoom: {show: false},
            dataView: {show: false},
            magicType: {show: false, type: ['tiled']},
            restore: {show: false},
            saveAsImage: {show: false}
          }
        },
        calculable: true,
        dataZoom: {
          show: true,
          realtime: true,
          dataBackground: { // 数据阴影的样式。
            lineStyle: {borderColor: 'red'}, // 阴影的线条样式
            areaStyle: {} // 阴影的填充样式
          },
          start: 0,
          end: 100,
          borderColor: '#70ad47',
          backgroundColor: 'white',
          fillerColor: 'rgba(167,183,204,0.4)'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              interval: 0,
              rotate: -20
            },
            top: '20%',
            data: (function () {
              var list = ['文学', '政法', '外国语', '数学与统计', '物理与电信工程', '化学化工',
                '生命科学与农学', '计算机科学与技术', '教育科学', '美术', '音乐舞蹈', '体育', '经济与管理', '新闻与传媒',
                '软件', '机械与电气工程', '网络工程', '设计', '马克思主义', '公共艺术与职业技能']
              return list
            }())
          }

        ],
        grid: {
          x: 100,
          x2: 80,
          y2: 80
        },
        yAxis: [
          {
            type: 'value',
            'name': '变动比率(%)'
          }
        ],
        series: [
          {
            name: '申请变动',
            type: 'bar',
            itemStyle: {
              color: '#70ad47',
              line: '50px'
            },
            lineStyle: {
              width: 4
            },

            data: (function () {
              var list = []
              for (var i = 1; i <= 20; i++) {
                list.push(Math.round(Math.random() * 100))
              }
              return list
            }())
          },
          {
            name: '实际变动',
            type: 'bar',
            itemStyle: {
              color: '#ed7d31'
            },
            lineStyle: {
              width: 4
            },
            data: (function () {
              var list = []
              for (var i = 1; i <= 20; i++) {
                list.push(Math.round(Math.random() * 100))
              }
              return list
            }())
          }
        ]
      }
      continer.setOption(option)
    },

    getJiuyelv: function () {
      let continer = this.baseChart('jiuyelv')
      let option = {
        title: {
          show: false,
          left: '1.5%',
          text: '在线学习学生人数',
          textStyle: {// 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 18// 主题文字字体大小，默认为18px
          }
        },
        backgroundColor: 'white',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false,
          x: 'center',
          data: ['就业率']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: false},
            dataZoom: {show: false},
            dataView: {show: false},
            magicType: {show: false, type: ['tiled']},
            restore: {show: false},
            saveAsImage: {show: false}
          }
        },
        calculable: true,
        dataZoom: {
          show: true,
          borderColor: 'green'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,

            axisLabel: {
              interval: 0,
              rotate: -20
            },
            data: (function () {
              var list = ['建筑工程', '计算机工程', '大数据', '数学与统计学院', '高等数学', '化学化工学院',
                '建筑工程', '计算机科学与技术学院', '教育科学学院', '美术学院', '音乐舞蹈学院', '体育学院', '经济与管理学院', '新闻与传媒学院',
                '软件学院', '机械与电气工程学院', '网络工程学院', '设计学院', '马克思主义学院', '公共艺术与职业技能教学部']
              return list
            }())
          }
        ],
        grid: {
          x: 100,
          x2: 100,
          y2: 100
        },
        yAxis: [
          {
            'type': 'value',
            'name': '就业率（%）'
          }
        ],
        series: [
          {
            name: '就业率',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              color: '#70ad47',
              line: '20px'
            },
            lineStyle: {
              width: 2
            },

            data: (function () {
              var list = []
              for (var i = 1; i <= 20; i++) {
                list.push(Math.round(Math.random() * 1000))
              }
              return list
            }())
          }
        ]
      }
      continer.setOption(option)
    },
    getBaodaorenshu: function () {
      let continer = this.baseChart('kechengziyuan')
      let option = {
        title: {
          show: false,
          left: '1.5%',
          text: '在线学习学生人数',
          textStyle: {// 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 18// 主题文字字体大小，默认为18px
          }
        },
        backgroundColor: 'white',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: true,
          x: 'center',
          data: ['报道人数', '报道率']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: false},
            dataZoom: {show: false},
            dataView: {show: false},
            magicType: {show: false, type: ['tiled']},
            restore: {show: false},
            saveAsImage: {show: false}
          }
        },
        calculable: true,
        dataZoom: {
          show: true,
          borderColor: 'green'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,

            axisLabel: {
              interval: 0,
              rotate: -20
            },
            data: (function () {
              var list = ['建筑工程', '计算机工程', '大数据', '数学与统计学院', '高等数学', '化学化工学院',
                '建筑工程', '计算机科学与技术学院', '教育科学学院', '美术学院', '音乐舞蹈学院', '体育学院', '经济与管理学院', '新闻与传媒学院',
                '软件学院', '机械与电气工程学院', '网络工程学院', '设计学院', '马克思主义学院', '公共艺术与职业技能教学部']
              return list
            }())
          }
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value'
          },
          {
            'type': 'value',
            'name': '报道率（%）'
          }
        ],
        series: [
          {
            name: '报道人数',
            type: 'bar',
            barWidth: '40px',
            itemStyle: {
              color: '#70ad47',
              line: '30px'
            },
            lineStyle: {
              width: 4
            },

            data: (function () {
              var list = []
              for (var i = 1; i <= 20; i++) {
                list.push(Math.round(Math.random() * 1000))
              }
              return list
            }())
          },
          {
            name: '报道率',
            type: 'line',
            barWidth: 30,
            yAxisIndex: 1,
            itemStyle: {
              color: '#ed7d31 ',
              line: '30px'
            },
            lineStyle: {
              width: 2
            },

            data: (function () {
              var list = []
              for (var i = 1; i <= 20; i++) {
                list.push(Math.round(Math.random() * 50) + 50)
              }
              return list
            }())
          }
        ]
      }
      continer.setOption(option)
    },
    drawKechengziyuanChart (series, xdata, ldata) {
      let legend = this.$ChartUt.CENTER_TOP
      // let xdata = ['2014年', '2015年', '2016年', '2017年', '2018年']
      this.$ChartUtil.drawChart('kechengziyuan', '课程资源情况', [], this.$ChartUt.HORIZONTAL, series, xdata, true, {legend: legend}, this, (param) => {
      })
    },

    drawXiaoqihezuo (series, xdata) {
      this.$ChartUtil.drawChart('xiaoqihezuo', '校企合作开发课程门数占开设课程总门数比率变化', [], this.$ChartUt.HORIZONTAL, series, xdata, false, {
        customattrs: {xrotate: 0}
      }, this, (param) => {
      })
    },
    baseAjax: function (id, params, consoleflag, continer) {
      let promise = new Promise((resolve, reject) => {
        let param = {portraitId: id}
        Object.assign(param, params)
        this.$ajaxMore('post', this.HOST + '/tr/FivePortrait/web/getPortraitInfoById', param, (data) => {
          // console.log(consoleflag, data)
          let flag = data.success
          if (flag === true) {
            resolve(data)
          } else {
            // reject('ss')
          }
        })
      })
      return promise
    },
    baseChart (continerid) {
      let first = document.getElementById(continerid)
      let continer = this.$echarts.init(first, 'wonderland')
      return continer
    }
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

  /* .titleTop{
    line-height: 18px;
    font-size: 18px;
    color: #37474f;
    padding-left:10px;
    border-left:5px solid #70ad47;
    margin-bottom: 24px;
  } */
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
    text-align: center;
    overflow:hidden;
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
  .countBoxR{
    padding-left: 15px  ;
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
    width: 60%
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
    height: 452px;
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
    height:400px;
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
.schoolShow p.num span {
    font-size: 30px;
    color: #526069;
    line-height: 43px;
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
