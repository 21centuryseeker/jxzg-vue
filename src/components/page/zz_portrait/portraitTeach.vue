<template>
  <div class="mainContent1 mainContentA">
    <!-- <div class="filterBox marginBto24" v-if="flagUser"> -->
    <div class="filterBox marginBto24">
      <el-card class="box-card">
        <el-row :gutter="20">
          <div class="w_seachGroup">
            <ul class=" clearfix">
              <li>
                <div class="title_seach">院系</div>
                <div class="title_select">
                  <el-select v-model="valueYx" placeholder="请选择" size="small" style="width: 300px" filterable @change="selectYXFn">
                    <el-option v-for="item in optionsYx" :key="item.code" :label="item.name" :value="item.code">
                    </el-option>
                  </el-select>
                </div>
              </li>
              <li>
                <div class="title_seach">教师</div>
                <div class="title_select">
                  <el-select v-model="valueZy" style="width: 300px" size="small" placeholder="请选择" filterable :disabled="flagZY">
                    <el-option v-for="(item,index) in optionsZy" :key="index" :label="item.name" :value="item.code">
                    </el-option>
                  </el-select>
                </div>
              </li>
              <li style="width:80px; text-align: right;">
                <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="seachFn">查询</el-button>
              </li>
            </ul>
            <!-- <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>   -->
          </div>
        </el-row>
      </el-card>
    </div>
    <div>
      <div class="infoBox marginBto24">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="infoLeft">
                <div class="pic"><img src="../../../assets/jiaoshihuaxiang.png" /></div>
                <p class="name">{{teachBaseInfo.XM?teachBaseInfo.XM:'--'}}
                  <template v-if="teachBaseInfo.XZ_XB=='男'">
                    <i class="iconfont" style="color:#4472c4">&#xe650;</i>
                  </template>
                  <template v-else>
                    <i class="iconfont" style="color:#ed7d31">&#xe652;</i>
                  </template>

                </p>
                <p class="num">工号 {{teachBaseInfo.GH?teachBaseInfo.GH:'--'}}</p>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="infoList" style="padding-top:50px">
                <ul class="clearfix">
                  <li>
                    <span>职称：</span> {{teachBaseInfo.ZYZGZS_MC?teachBaseInfo.ZYZGZS_MC:'--'}}</li>
                  <li>
                    <span>学位：</span>{{teachBaseInfo.XZ_XW?teachBaseInfo.XZ_XW:'--'}}</li>
                  <!-- <li><span>政治面貌：</span>{{teachBaseInfo.zzmmmc?teachBaseInfo.zzmmmc:'--'}}</li> -->
                  <li>
                    <span>专业领域：</span>{{teachBaseInfo.XZ_ZYLY?teachBaseInfo.XZ_ZYLY:'--'}}</li>
                </ul>
                <ul class="clearfix">
                  <!-- <li><span>籍贯： </span>{{teachBaseInfo.jgmc?teachBaseInfo.jgmc:'--'}}</li>   -->
                  <li>
                    <span>专业特长： </span>{{teachBaseInfo.ZYTC?teachBaseInfo.ZYTC:'--'}}</li>
                  <li>
                    <span>学历：</span>{{teachBaseInfo.XZ_XL?teachBaseInfo.XZ_XL:'--'}}</li>
                  <li>
                    <span>民族：</span>{{teachBaseInfo.XZ_MZ?teachBaseInfo.XZ_MZ:'--'}}</li>
                  <!-- <li><span>年龄：</span>{{teachBaseInfo.nl?teachBaseInfo.nl:'--'}}</li> -->
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>出生日期：</span>{{teachBaseInfo.CSRQ? teachBaseInfo.CSRQ:'--'}}</li>
                  <li>
                    <span>是否专业教师： </span>{{teachBaseInfo.XZ_SFZYJS?teachBaseInfo.XZ_SFZYJS:'--'}}</li>
                  <li>
                    <span>是否骨干教师： </span>{{teachBaseInfo.XZ_SFGGJS?teachBaseInfo.XZ_SFGGJS:''}}</li>

                </ul>
                <ul class="clearfix">
                  <li>
                    <span>是否双师素质教师：</span>{{teachBaseInfo.XZ_SFSSSZ?teachBaseInfo.XZ_SFSSSZ:'--'}}</li>
                  <li>
                    <span>是否教学名师： </span>{{teachBaseInfo.XZ_JXMS?teachBaseInfo.XZ_JXMS:'--'}}</li>
                  <!-- <li><span>身份证号：</span> {{teachBaseInfo.id_num?teachBaseInfo.id_num:'--'}}</li> -->
                  <li>
                    <span>所在部门：</span>{{teachBaseInfo.BMMC?teachBaseInfo.BMMC:'--'}}</li>
                </ul>

              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>

      <div style="margin-bottom:24px">
        <div class="titleTop" style="margin-bottom:10px">
          <span style="font-size:14px">学年</span>
          <el-select v-model="valueXq" placeholder="请选择" size="small" style="width: 200px" filterable @change="selectXqFn">
            <el-option v-for="item in optionsXq" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </div>
        <div class=“special_table_box”>
           <el-card class="box-card">
          <template v-if="zyZhLDFlag">
            <div class="nodataPic_zg" style="height:360px">
              <img src="../../../assets/empty.jpg" />
            </div>
          </template>
          <template v-else>
              <p class="details" style="margin-bottom:10px">
                    该教师建设质量指数 <span style="color:#70ad47">{{zdf}}</span>分
                     <span style="margin-left:10px">全校排名 第</span><span style="color:#70ad47">{{XXTOP?XXTOP:'-'}}</span>名
                    <span style="margin-left:10px">全院排名 第</span><span style="color:#70ad47">{{YXTOP?YXTOP:'-'}}</span>名
                     <span style="margin-left:10px">全专业排名 第</span><span style="color:#70ad47">{{ZYTOP?ZYTOP:'-'}}</span>名
                  </p>
            <el-row :gutter="20">
              <el-col :span="12">
                  <!-- 雷达图 -->
                  <div id="zyZhLD" style="height:360px"></div>
                
              </el-col>
              <el-col :span="12">
              
                  <div style="padding-top:30px" class="special_table_box">
                    <table class="special_table" style="width:100%">
                      <thead>
                        <tr>
                           <th style="width:150px">序号</th>
                          <th class="leftAlign">指标名称</th>
                          <th style="width:200px">得分</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="(item,index) in zyldtTable">
                          <tr :key="index">
                            <td >{{index+1}}</td>
                            <td class="leftAlign">{{item.name}}</td>
                            <td>{{item.value}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                
              </el-col>
            </el-row>
          </template>
</el-card>
        </div>
      </div>
      <!-- 专业雷达图 end -->

      <div class="showInfo">
        <div class="titleName"> 教学情况 </div>
        <div class="showInfoList">
          <el-row :gutter="20">
            <template v-for="(item,index) in countCard">
              <el-col :span="8" :key="index">
                <div :class="'showInfoItem'+(index+1)">
                  <el-card class="box-card">
                    <p class="num">{{item.value?item.value:'0'}}</p>
                    <p class="name">{{item.name?item.name:'--'}}(个)</p>
                  </el-card>
                </div>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>

      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <!-- <div class="textTitleA">历年授课课程数量</div> -->
              <template v-if="studentNumFlag">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:345px" id="studentNum" :key="101"></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 使用教材 -->
      <div class="marginBto24 special_table_box">
        <el-card class="box-card">
          <div class="textTitleA">课程授课情况</div>
          <div class="topList special_tableColor" style="padding-top:20px">
            <template v-if="teachbookFlag">
              <div class="nodataPic_zg" style="height:345px">
                <img src="../../../assets/empty.jpg" />
              </div>
            </template>
            <template v-else>
              <table class="special_table " width="100%">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th class="leftAlign">课程名称</th>
                    <th class="leftAlign">授课年级</th>
                    <th class="leftAlign">授课学期</th>
                    <th>教学工作量（学时）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in teacherbookData" :key="index">
                    <td>{{index+1}}</td>
                    <td class="leftAlign">{{item.KCMC?item.KCMC:'-'}}</td>
                    <td class="leftAlign">{{item.XZ_SKNJ?item.XZ_SKNJ:'-'}}</td>
                    <td class="leftAlign">{{item.XZ_SKXQ?item.XZ_SKXQ:'-'}}</td>
                    <td>{{item.JXGZL?item.JXGZL:'-'}}</td>
                  </tr>
                </tbody>
              </table>
              <!-- <el-pagination background  layout="prev, pager, next"  :total="total" v-show="total" style="margin-top: 10px"    @current-change = "getCurrentPage" :current-page="currentPage" :page-size="pageSize">
                        </el-pagination> -->
            </template>
          </div>
        </el-card>
      </div>

      <!--课程授课情况  -->
      <div class="SituationBox" v-if="false">
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
                  <p class="leftMc">课程： {{item.KCMC}}</p>
                  <div class="rightMc">
                    <template v-if="item.bjList.length>0">
                      班级：
                      <p v-for="(listItem,indexList) in item.bjList">
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
  data() {
    return {
      SituationData: [], //课程授课情况
      chartDates: [], //课程授课情况数据
      colorIndex: 0,
      colorArr: [
        "#d56290",
        "#70ad47",
        "#ed7d31",
        "#ffc000",
        "#4472c4",
        "#dd6969",
        "#00a6a6",
        "#6c6fbf",
        "#62a8ea",
        "#ffb980"
      ],
      userId: "",
      value: "",
      deptId: "",
      zgh: "",
      deptOptions: [],
      teachBaseInfo: [], // 教师基本信息
      countCard: [], // 卡片统计个数
      teachSelectoptions: [{ value: "2016-2017-1" }], // 教学下拉菜单
      teachSelect: "2016-2017-1",
      pleased: [], // 满意度数组
      TOP5List: [],
      resultTypeObj: {
        "1": "style_three",
        "-1": "style_one",
        "0": "style_tow"
      },
      scientificTJ: [], // 科研统计
      filterText: "",
      seachTeach: false,
      flagUser: 0,
      teachNull: true,
      depedIdFlag: true,
      getRadarDataFlag1: true,
      getRadarDataFlag3: true,
      teachDegreeFlag: true,
      teachWorkEchartsFlag: true,
      TOP5ListFlag: true,
      WorkBoxFlag: true,
      salaryBoxFlag: true,
      feedbackSelect: "",
      feedbackSelectGroup: [],
      curriculumFlag: true,
      valueYx: "",
      optionsYx: [],
      optionsZy: [],
      valueZy: "",
      flagZY: false,
      flagOne: 1,
      SituationFlag: true,
      studentNumFlag: true, //历年授课课程数量
      teachbookFlag: true, //课程授课情况flag
      teacherbookData: [], //课程授课情况
      zyZhLDFlag: true,
      zyZhLDFlag: true, //雷达图是否有数据flag
      valueXq: "", //雷达图选择学期
      optionsXq: [], //学期数组
      flagYear: 1, //设置默认
      zdf: "", //总得分
      XXTOP:'',
      YXTOP:'',
      ZYTOP:'',
      zyldtTable: [] //雷达图右侧列表
    };
  },
  created() {},
  mounted() {
    this.getYxFn();
  },
  methods: {
    seachFn(){
     if(this.valueZy){
       this.downFn()
     }else{
       this.$message({
              message: '请选择教师',
              type: "error"
            });
     }
    },
    // 关于执行接口
    downFn() {
      //  this.checkUserLevelFn()
      //  this.SituationFn()
      this.baseInfoFn();
      this.countCardFn();
      this.studentNumFn();
      this.teacherbookDataFn();
      this.getXqFn();
    },
    // 获取院系
    getYxFn() {
      let self = this;
      this.$ajax(
        "post",
        this.HOST + "/tr/individualPortrait/web/getselectJbxx?id=29",
        {},
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              self.optionsYx = res.obj;
              self.valueYx = res.obj[0].code;
              self.getZyFn();
            } else {
              self.optionsYx = [];
              self.valueYx = "";
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    selectYXFn(v) {
      this.flagZY = false;
      this.valueZy = "";
      this.getZyFn();
    },
    // 获取专业
    getZyFn() {
      let self = this;
      let dataNew = {
        id: 49,
        key: self.valueYx
      };
      self.$ajax(
        "post",
        this.HOST + "/tr/individualPortrait/web/getselectJbxx",
        dataNew,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              0;
              //  self.flagZY = false
              self.optionsZy = res.obj;
              self.valueZy = res.obj[0].code;
              self.flagOne++;
              if (self.flagOne == 2) {
                self.downFn();
              }
            } else {
              self.optionsZy = [];
              self.valueZy = "";
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    //   基本信息---------------------------
    baseInfoFn() {
      let self = this;
      let newData = {
        id: 50, // 必输
        key: self.valueZy
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            self.teachBaseInfo = [];
            if (res.obj.length > 0) {
              self.teachBaseInfo = res.obj[0];
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },

    //   教学情况统计个数信息
    countCardFn() {
      let self = this;
      let newData = {
        id: 55,
        key: self.valueZy
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            self.countCard = [];
            if (res.obj.length > 0) {
              self.countCard = res.obj;
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },

    //历年授课课程数量
    studentNumFn() {
      let self = this;
      let newData = {
        id: 56,
        key: self.valueZy
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/getBarData",
        newData,
        res => {
          if (res.success) {
            if (res.obj) {
              if (res.obj.dataxList.length > 0) {
                self.studentNumFlag = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    color: "#70ad47",
                    data: res.obj.datayList
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum",
                    res.obj.title,
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（门）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{c0}门"
                      },
                      grid: {
                        x: 50,
                        y: 80,
                        x2: 30,
                        y2: 60
                      },
                      customattrs: { xrotate: 0 }
                    },
                    self
                  );
                }, 150);
              } else {
                self.studentNumFlag = true;
              }
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },

    // 使用教材
    teacherbookDataFn() {
      let self = this;
      let newData = {
        id: 51,
        key: self.valueZy
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              self.teachbookFlag = false;
              self.teacherbookData = res.obj;
            } else {
              self.teachbookFlag = true;
              self.teacherbookData = [];
            }
            // total 总数 赋给 total
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },

    // 获得学年的学期切换
    getXqFn() {
      let self = this;
      let dataNew = {
        typeId: 2,
        key: self.valueZy
      };
      self.$ajaxMore(
        "post",
        this.HOST + "/tr/individualPortrait/web/searchYear",
        dataNew,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              this.optionsXq = res.obj;
              self.valueXq = res.obj[0].code;
              self.zyZhFn();
              self.XXTOPFn();
              self.YXTOPFn();
              self.ZYTOPFn();
            }else{
                self.valueXq=''
              self.optionsXq=[]
              self.zyZhLDFlag = true;
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 切换学期
    selectXqFn() {
      this.zyZhFn();
      this.XXTOPFn()
      this.YXTOPFn()
      this.ZYTOPFn()
    },
    // 获取学期雷达图数据
    zyZhFn() {
      let self = this;
      self.zyldtTable = [];
      let newData = {
        typeId: 2,
        key: self.valueZy,
        year: self.valueXq
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/searchTOP",
        newData,
        res => {
          if (res.data) {
            self.zdf = res.data.zdf;
            for (var i = res.data.dataxList.length - 1; i > 0; i--) {
              self.zyldtTable.push({
                name: res.data.indicator[i].text,
                value: res.data.dataxList[i]
              });
            }
            self.zyldtTable.unshift({
              name: res.data.indicator[0].text,
              value: res.data.dataxList[0]
            });
            if (self.zyldtTable.length > 0) {
              self.zyZhLDFlag = false;
            } else {
              self.zyZhLDFlag = true;
            }
            let series = [
              {
                value: res.data.dataxList,
                name: res.data.legend
              }
            ];
            setTimeout(() => {
              this.studentScaleFn(
                "",
                res.data.legend,
                res.data.indicator,
                series,
                document.getElementById("zyZhLD")
              );
            }, 150);
          }
        }
      );
    },

         // 全校排名
    XXTOPFn() {
      let self = this;
      let newData = {
       typeId: 2,
        key: self.valueZy,
        year: self.valueXq
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/searchXXTOP",
        newData,
        res => {
          self.XXTOP=res.data.pm
        }
      );
    },
        // 全校排名
        // 全校排名
    YXTOPFn() {
      let self = this;
      let newData = {
        typeId: 2,
        key: self.valueZy,
        year: self.valueXq,
        yxid:self.valueYx
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/searchYXTOP",
        newData,
        res => {
          self.YXTOP=res.data.pm
        }
      );
    },
    // 专业排名
   ZYTOPFn() {
      let self = this;
      let newData = {
       typeId: 2,
        key: self.valueZy,
        year: self.valueXq,
        zyid:self.valueZy
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/searchZYTOP",
        newData,
        res => {
          self.ZYTOP=res.data.pm
        }
      );
    },
    // 雷达图数据
    studentScaleFn(title, leg, ind, data, el) {
      var option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          left: "right",
          data: []
        },
        color: [
          "#70ad47",
          "#ed7d31",
          "#ffc000",
          "#4472c4",
          "#a5a5a5",
          "#dd6969",
          "#00a6a6"
        ],
        radar: {
           radius: '80%',
          center: ['50%', '50%'],
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#76838f",
              backgroundColor: "#fff",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: ind
        },
        series: [
          {
            name: "",
            type: "radar",
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: data
          }
        ]
      };
      var myChart = this.$echarts.init(el);
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
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
.style_tow {
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
.schoolBox {
  padding: 27px 10px 27px 25px;
  background-color: #ee8239;
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
#teachWork1 {
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
  margin-top: 50px;
}
.mainContentA .nodataPicAB_small {
  height: 199px;
}
.mainContentA .nodataPicAB_small img {
  margin-top: 0px;
  height: 90%;
}
.mainContentA .schoolBoxA {
  padding: 27px 10px 27px 25px;
}
.Situation_title .SituationPic {
  height: 362px;
}
.leftMc {
  margin-bottom: 10px;
}
.SituationBox .rightMc p {
  display: inline-block;
  margin-right: 10px;
}
.w_seachGroup li {
  float: left;
  margin-bottom: 15px;
}
.w_seachGroup .title_seach {
  float: left;
  width: 100px;
  line-height: 32px;
  font-size: 14px;
  text-align: right;
  padding-right: 15px;
  color: #606266;
}
.w_seachGroup .title_select {
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
/* .special_table_box .special_table th,
.special_table_box .special_table td{
  font-size: 12px!important
} */
.special_table_box .special_table .leftAlign {
  text-align: left;
  padding-left: 30px;
}
</style>
