<template>
    <div class="mainContent1 mainContentA">
      <!-- <div class="filterBox marginBto24" v-if="flagUser"> -->
        <div class="filterBox marginBto24">
        <el-card class="box-card">
            <el-row :gutter="20" >
             <div class="w_seachGroup">
               <ul class=" clearfix">
                  <li>
                    <div class="title_seach">专业部</div>
                    <div class="title_select">
                      <el-select v-model="valueYx" placeholder="请选择"  size="small"  style="width: 300px" filterable @change="selectYXFn">
                      <el-option
                        v-for="item in optionsYx"
                        :key="item.id"
                        :label="item.deptName"
                        :value="item.id">
                      </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li>
                    <div class="title_seach">教师</div>
                    <div class="title_select">
                      <el-select v-model="valueZy" style="width: 300px" size="small"  placeholder="请选择"  filterable :disabled="flagZY" >
                        <el-option
                          v-for="item in optionsZy"
                          :key="item.zgh"
                          :label="item.jsxm"
                          :value="item.zgh">
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li style="width:80px; text-align: right;">
                    <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>  
                  </li>
                </ul>
                <!-- <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>   -->
              </div>  
            </el-row>
        </el-card>
      </div>
      <!-- <div v-if="teachNull" class="nodataPicAB">
          <img src="../../../assets/empty.jpg"/>
      </div> -->
      <!-- <div v-else> -->
        <div>
        <div class="infoBox marginBto24">
          <el-card class="box-card">
              <el-row :gutter="20" >
                      <el-col :span="6">
                          <div class="infoLeft">
                              <div class="pic"><img src="../../../assets/jiaoshihuaxiang.png" /></div>
                              <p class="name">{{teachBaseInfo.XM?teachBaseInfo.XM:'--'}}
                                     <template v-if="teachBaseInfo.gender=='男'">
                                      <i class="iconfont" style="color:#4472c4">&#xe650;</i>
                                  </template>
                                  <template v-else>
                                      <i class="iconfont" style="color:#ed7d31">&#xe652;</i>
                                  </template>

                              </p>
                              <p class="num">工号 {{teachBaseInfo.zgh?teachBaseInfo.zgh:'--'}}</p>
                          </div>
                      </el-col>
                      <el-col :span="18">
                          <div class="infoList" style="padding-top:50px">
                              <!-- <div class="deptOptions">
                                      <span>所在部门</span>
                                      <el-select v-model="value" size="small" @change="jobSwitch">
                                      <el-option
                                      v-for="item in deptOptions"
                                      :key="item.dept_id"
                                      :label="item.dept_name"
                                      :value="item.dept_id">
                                      </el-option>
                                      </el-select>
                              </div> -->
                              <ul class="clearfix">
                                  <li><span>职称：</span> {{teachBaseInfo.zc?teachBaseInfo.zc:'--'}}</li>
                                  <li><span>学历：</span>{{teachBaseInfo.xlmc?teachBaseInfo.xlmc:'--'}}</li>
                                  <!-- <li><span>学位：</span>{{teachBaseInfo.xw?teachBaseInfo.xw:'--'}}</li> -->
                                  <li><span>政治面貌：</span>{{teachBaseInfo.zzmmmc?teachBaseInfo.zzmmmc:'--'}}</li>
                              </ul>
                              <ul class="clearfix">
                                  <li><span>籍贯： </span>{{teachBaseInfo.jgmc?teachBaseInfo.jgmc:'--'}}</li>  
                                  <li><span>民族：</span>{{teachBaseInfo.mzmc?teachBaseInfo.mzmc:'--'}}</li>
                                  <li><span>年龄：</span>{{teachBaseInfo.nl?teachBaseInfo.nl:'--'}}</li>
                              </ul>
                              <ul class="clearfix">
                                  <li><span>状态： </span>{{teachBaseInfo.zzztmc?teachBaseInfo.zzztmc:'--'}}</li>
                                  <li><span>任职时间： </span>{{teachBaseInfo.RZRQ?teachBaseInfo.RZRQ:''}}--{{teachBaseInfo.LZRQ?teachBaseInfo.LZRQ:''}}</li>
                                  <li><span>工作年限： </span>{{teachBaseInfo.gznx?teachBaseInfo.gznx:'--'}}</li>
                                  <!-- <li><span>出生日期：</span>{{teachBaseInfo.csrq?teachBaseInfo.csrq:'--'}}</li> -->
                              </ul>
                              <!-- <ul class="clearfix">
                                  <li><span>编制：</span>{{teachBaseInfo.bz?teachBaseInfo.bz:'--'}}</li>
                                  
                                  <li><span>类型：</span>{{teachBaseInfo.JZGLBMC?teachBaseInfo.JZGLBMC:'--'}}</li> 
                              </ul> -->
                              <ul class="clearfix">
                                <li><span>类型：</span>{{teachBaseInfo.JZGLBMC?teachBaseInfo.JZGLBMC:'--'}}</li> 
                                <li><span>所在部门：</span>{{teachBaseInfo.dept_name?teachBaseInfo.dept_name:'--'}}</li> 
                                  <!-- <li class="large"><span>身份证号：</span> {{teachBaseInfo.id_num?teachBaseInfo.id_num:'--'}}</li> -->
                              </ul>
                          </div>
                      </el-col>
              </el-row>
          </el-card>
        </div>
              
        <div class="showInfo">
            <div class="titleName"> 教学情况 </div>              
              <div class="showInfoList">
                    <el-row :gutter="20">
                      <template v-for="(item,index) in countCard">
                        <el-col :span="8" :key="index">
                            <div :class="'showInfoItem'+(index+1)">
                              <el-card class="box-card">
                                  <p class="num">{{item.VALUE?item.VALUE:'0'}}</p>
                                  <p class="name">{{item.name?item.name:'--'}}(个)</p>
                              </el-card>
                            </div>
                        </el-col>
                      </template> 
                    </el-row >
              </div>
        </div>


        <!--课程授课情况  -->
        <div class="SituationBox">
          <div class="titleName"> 课程授课情况 </div>
        
            <div class="Situation_title">
               <template v-if="SituationFlag">
                  <div class="nodataPic_zg" style="height:358px">
                    <img src="../../../assets/empty.jpg" />
                  </div> 
                </template>
                <template v-for="(item,index) in SituationData" v-else>
                <ul class="clearfix" :key="index">
                    <li>
                        <el-card class="box-card">
                          <p class="leftMc" >课程： {{item.KCMC}}</p>
                          <div class="rightMc">
                              <template v-if="item.bjList.length>0">
                                班级：
                                  <p  v-for="(listItem,indexList) in item.bjList">
                                    <span :key="indexList">{{listItem.BJMC}}</span>
                                  </p>
                              </template>
                          </div>
                          
                          <div class="SituationPic"></div>
                        </el-card> 
                    </li>
                </ul>    
                </template>
            </div>  
        </div> 

      </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      SituationData:[],//课程授课情况
      chartDates:[],//课程授课情况数据
      colorIndex:0,
      colorArr: ['#d56290','#70ad47', '#ed7d31', '#ffc000',
        '#4472c4', '#dd6969', '#00a6a6',
        '#6c6fbf', '#62a8ea', '#ffb980'
      ],
      userId: '',
      value: '',
      deptId: '',
      zgh: '',
      deptOptions: [],
      teachBaseInfo: [], // 教师基本信息
      countCard: [], // 卡片统计个数
      teachSelectoptions: [{ value: '2016-2017-1' }], // 教学下拉菜单
      teachSelect: '2016-2017-1',
      pleased: [], // 满意度数组
      TOP5List: [],
      resultTypeObj: {
        '1': 'style_three',
        '-1': 'style_one',
        '0':"style_tow"
      },
      scientificTJ: [], // 科研统计
      filterText:'',
      seachTeach:false,
      flagUser:0,
      teachNull:true,
      depedIdFlag:true,
      getRadarDataFlag1:true,
      getRadarDataFlag3:true,
      teachDegreeFlag:true,
      teachWorkEchartsFlag:true,
      TOP5ListFlag:true,
      WorkBoxFlag:true,
      salaryBoxFlag:true,
      feedbackSelect:'',
      feedbackSelectGroup:[],
      curriculumFlag:true,
     valueYx:'',
      optionsYx:[],
       optionsZy: [],
      valueZy: '',
      flagZY:false,
      flagOne:1,
      SituationFlag:true

    }
  },
  created () {},
  mounted () {
    this.getYxFn()
  },
  methods: {
    // 是否有搜素权限
    // checkUserLevelFn(){
    //   let self = this
    //   self.$ajax(
    //     'post',
    //     self.HOST + '/tr/individualPortrait/web/checkUserLevel',
    //     {},
    //     (res) => {
    //       if (res.success) {
    //         self.flagUser=res.obj.flag
    //       } else {
    //         self.$message({
    //           message: res.msg,
    //           type: 'error'
    //         })
    //       }
    //     }
    //   ) 
    // },
    //   查询
    searchInfo () {
      // console.log(this.valueZy)
     let SearchData={
       searchKey:this.valueZy
     }
    
    this.ajaxFn(SearchData)
    },
    ajaxFn(newData){
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/searchJZG',
        newData,
        (res) => {
          if (res.success) {
            // self.teachNull=false
            self.downFn()  
          } else {
            //  self.teachNull=true
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

   // 关于执行接口
    downFn(){
      //  this.checkUserLevelFn()
        this.baseInfoFn()
        this.SituationFn()
        this.countCardFn()
    },
    //   基本信息---------------------------
    baseInfoFn () {
      let self = this
      let newData = {
        id: 1, // 必输
        key:self.valueZy
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getJbxx',
        newData,
        (res) => {
          if (res.success) {
            self.teachBaseInfo = []
            if(!res.obj){
                self.teachBaseInfo = res.data
            }
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

     //   课程授课情况
    SituationFn () {
      let self = this
      let newData = {
        id: 3, // 必输
        zgh:self.valueZy
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getKc_Bj1',
        newData,
        (res) => {
          if (res.success) {
             self.SituationData = []
             
            if(res.obj.length>0){
              self.SituationFlag=false
                self.SituationData = res.obj
                self.chartDates=res.obj
                setTimeout(() => {
                    self.showChart()
                }, 150)
            }
            //  self.SituationFlag=true
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    showChart(){
       this.colorIndex = 0
        for(var i=0;i<this.chartDates.length; i++){
            this.colorIndex ++;
            this.SituationPicFn(this.chartDates[i].legend,this.chartDates[i].dataxList, this.chartDates[i].datay1List, this.chartDates[i].datay2List,document.getElementsByClassName('SituationPic')[i],index)
        }  
    },

    SituationPicFn(leg,xdata, series,series1, ele,index){   
     let myChart = this.$echarts.init(ele)
     if(index>7){
        this.colorIndex = 0
     }
     let option = {
          calculable : true,
          legend: {
              data:leg
          },

         tooltip : {
              trigger: 'axis',
              formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}%'
          },
          xAxis : [
              {
                  type : 'category',
                  data :xdata
              }
          ],
           dataZoom: [{
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              left: '9%',
              bottom: -5,
              start: 10,
              end: 90 //初始化滚动条
          }],
          yAxis : [
              {
                  type : 'value',
                  name : '平均成绩',
                  axisLabel : {
                      formatter: '{value} '
                  }
              },
              {
                  type : 'value',
                  name : '优秀率',
                  axisLabel : {
                      formatter: '{value} %'
                  }
              }
          ],
          series : [
              {
                  name:leg[0],
                  type:'bar',
                 label :{
                    normal: {
                      show: true,
                      position: 'top'
                    }
                 },
                  // barWidth: 20, // 柱图宽度
                  color:this.colorArr[this.colorIndex],
                  data:series
              },
              {
                  name:leg[1],
                  type:'line',
                  yAxisIndex: 1,
                  color:this.colorArr[this.colorIndex+1],
                  data:series1,
                  itemStyle: {
                    normal: {
                      lineStyle: {
                        width: 2,
                        type: 'solid' // 'dotted'虚线 'solid'实线
                      },
                      label : {show: true}
                    }
                  }
              }
          ]
      };
        myChart.setOption(option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
                    
    },

    //   统计个数信息
    countCardFn () {
      let self = this
      let newData = {
        id: 2,
        key:self.valueZy
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getJxqk',
        newData,
        (res) => {
          if (res.success) { 
            self.countCard = []             
            if(res.obj.length>0){     
                self.countCard = res.obj
                // self.depedIdFlag=false
            }
           
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },


       // 获取院系
    getYxFn () {
      let self = this
      let dataNew = {
        searchName: ''
      }
      this.$ajax('post', this.HOST + '/tr/trDept/web/getIsDeptList', {}, (res) => {
        if (res.success) {
          if(res.obj.length>0){
           self.optionsYx = res.obj
           self.valueYx= res.obj[0].id 
           self.getZyFn()
          }else{
             self.optionsYx=[]
             self.valueYx=''
          }
        
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
      )
    },
   selectYXFn (v) {
      this.flagZY = false
      this.getZyFn()
    },
      // 获取专业
    getZyFn () {
      let self = this
      let dataNew = {
        type: 1,
        zy: self.valueYx,
        tableId: ''
      }
      self.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/getCoreList', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){0
            //  self.flagZY = false
             self.optionsZy = res.obj
             self.valueZy= res.obj[0].zgh
             self.flagOne++
            //  console.log('self.flagOne',self.flagOne)
             if(self.flagOne<3){
                self.downFn()
             }     
            }else{
             self.optionsZy = []
             self.valueZy= ''
            }
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
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
.mainContentA {
  background-color: #f1f4f5;
  padding: 0 1.64%;
}
.marginBto24 {
  margin-bottom: 24px;
}
.deptOptions {
  padding-left: 4%;
  margin-bottom: 14px;
}
.deptOptions span {
  padding-right: 10px;
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
  height: 38px;
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

.marbottom24 {
  margin-bottom: 24px;
}
.portraitTable {
  margin-top: 40px;
}
.mainContent1 .box-card {
  position: relative;
  min-height: 60px;
}
.mainContent1 .textTitle {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100%;
}

.infoBox .infoLeft,
.infoBox .infoList {
  padding: 40px 0;
}
.infoBox .infoList {
  padding-top: 20px;
  padding-right: 28px;
}
.infoLeft {
  text-align: center;
}
.infoLeft .pic {
  height: 110px;
  margin-bottom: 15px;
}
.infoLeft .pic img {
  display: inline-block;
  height: 100%;
}
.infoLeft .name {
  font-size: 20px;
  line-height: 40px;
  color: #444;
}
.infoLeft .num {
  font-size: 14px;
  line-height: 25px;
  color: #999;
}
.infoList ul:nth-child(2n) {
  background-color: #f7f8f9;
}
.infoList li {
  float: left;
  width: 26.333%;
  font-size: 14px;
  color: #666;
  line-height: 42px;
  padding-left: 4%;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.infoList li.large {
  width: 42%;

}
.infoList li span {
  display: inline-block;
  padding-right: 5px;
}

.showInfoList .num {
  font-size: 30px;
  line-height: 52px;
  text-align: center;
  color: #fff;
}
.showInfoList .name {
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
}
.showInfoList .box-card {
  margin-bottom: 20px;
}

.showInfoItem1 .box-card {
  background-color: #70ad47;
}
.showInfoItem3 .box-card {
  background-color: #ffc000;
}
.showInfoItem2 .box-card .num,
.showInfoItem4 .box-card .num {
  color: #70ad47;
}
.showInfoItem2 .box-card .name,
.showInfoItem4 .box-card .name {
  color: #999;
}

.showInfoItem8 .box-card {
  background-color: #a6a6a6;
}
.showInfoItem6 .box-card {
  background-color: #4472c4;
  color: #4472c4;
}
.showInfoItem5 .box-card {
  background-color: #ed7d31;
}
.showInfoItem7 .box-card {
  background-color: #5b9bd5;
}
.mainContent1 .titleName {
  line-height: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 15px;
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
.yearCapacity {
  height: 342px;
}
.teachDegreeEcharts {
  height: 317px;
}
.soreTeachPicEcharts {
  height: 480px;
}
.marginR15 {
  margin-right: 16px;
}
/* .showInfoList {
  margin-top: 24px;
} */
.teachPicCard {
  height: 359px;
}
.teachWorkEcharts {
  height: 317px;
}
.teachPicCardA .WorkEcharts {
  height: 378px;
}
.scientEcharts {
  height: 334px;
}
.teachPicCard {
  margin-bottom: 24px;
}
.style_one {
  background: #ffc000;
}

.style_three {
  background: #70ad47;
}
.style_tow{
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
.showPicBox .xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.showPicBox .xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.showPicBox .xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.showPicBox .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #526069;
}
.showPicBox .xqItemA .num,
.showPicBox .xqItemA p {
  color: #fff;
}
.showPicBox .xqItemB {
  border-right: none;
}
.showPicBoxA .el-card__body {
  padding: 0;
}
.showPicBoxbg .xqItem {
  height: 172px;
  background-color: #fff;
}
.showPicBox .xqItemA {
  background-color: #70ad47;
}
.showPicBoxbg .xqItem,
.schoolContent .schoolBox {
  position: relative;
  box-shadow: none;
}
.showPicBoxbg .xqItem:hover,
.schoolContent .schoolBox:hover {
  z-index: 2;
  /* -moz-box-shadow:4px 10px 20px #BDBDBD;
   -webkit-box-shadow:4px 10px 14px #BDBDBD;
    box-shadow:4px 10px 14px #BDBDBD; */
  -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.schoolBox{
    padding: 27px 10px 27px 25px;
    background-color:#ee8239
}
.schoolBox .title {
  font-size: 12px;
  color: #fff;
  line-height: 48px;
}
.schoolBox .number {
  font-size: 30px;
  color: #fff;
  line-height: 50px;
  padding-left: 40px;
}
.schoolBox .text {
  line-height: 32px;
  color: #fff;
  padding-left: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.schoolBoxA {
  background-color: #5b9bd5;
}

.schoolBox .round {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #f6a670;
  /* margin-right: 20px */
}
.schoolBox .iconfont {
  font-size: 20px;
  line-height: 40px;
}
.schoolBoxA .round {
  background-color: #89b8e2;
}
.schoolContent {
  padding-top: 20px;
}
.salaryEcharts {
  height: 380px;
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
  padding: 0 5%;
  padding-left: 15%;
  /* text-align: center */
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
  font-size: 30px;
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
.soreTable .el-card {
  height: 520px;
}
/* .soreTable  .el-table,.soreTable .el-table th ,
.portraitTable  .el-table,.portraitTable .el-table th{
    text-align: center
} */
.soreTable .el-table .cell,
.portraitTable .el-table .cell {
  line-height: 32px;
}
.showPicBoxNBorder .box-card {
  margin-bottom: 0;
}
#teachWork,
#teachWork1{
  float: left;
  width: 50%;
  height: 317px;
}
.mainContentA .nodataPicAB {
  background-color: #fff;
  height: 600px;
  text-align: center;
}
.mainContentA .nodataPicAB img {
  display: inline-block;
  margin: auto;
  margin-top: 50px
}
.mainContentA .nodataPicAB_small {
  height: 199px;
}
.mainContentA .nodataPicAB_small img {
  margin-top: 0px;
  height: 90%;
}
.mainContentA  .schoolBoxA{
padding: 27px 10px 27px 25px;
}
.Situation_title .SituationPic{
  height: 362px;
}
.leftMc{
  margin-bottom: 10px;
}
.SituationBox .rightMc p{
display: inline-block;
margin-right: 10px;
}
.w_seachGroup li{
 float: left;
 margin-bottom: 15px
}
.w_seachGroup .title_seach{
  float: left;
  width: 100px;
 line-height: 32px;
 font-size: 14px;
 text-align: right;
 padding-right: 15px;
 color: #606266
}
.w_seachGroup .title_select{
  float: left;

}
.nodataPic_zg {
  width: 100%;
  background-color: #fff;
  text-align: center;
}
.nodataPic_zg img {
  display: inline-block;
  margin-top: 50px;
}
</style>
