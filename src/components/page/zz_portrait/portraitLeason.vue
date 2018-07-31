<template>
  <div class="mainContent1 mainContentA">
    <div class="filterBox marginBto24">
      <el-card class="box-card">
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
              <div class="title_seach">专业名称</div>
              <div class="title_select">
                <el-select v-model="valueZy" style="width: 300px" size="small" placeholder="请选择" filterable :disabled="flagZY" @change="selectZYFn">
                  <el-option v-for="(item,index) in optionsZy" :key="index" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="title_seach">课程名称</div>
              <div class="title_select">
                <el-select v-model="valueKc" style="width: 300px" size="small" placeholder="请选择" filterable :disabled="flagKc_seach">
                  <el-option v-for="(item,index) in optionsKc" :key="index" :label="item.name" :value="item.CODE">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li style="width:100px; text-align: right;">
              <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
    <div>
      <!-- kecheng 画像的页面 -->
      <div class="infoBox infoBoxA  marginBto24">
        <el-card class="box-card" :data="baseInfo">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="infoLeft">
                <img src="../../../assets/kechenghuaxiang.png" />
                <p class="leason">{{baseInfo.KCMC}}</p>
              </div>
            </el-col>
            <el-col :span="18" style="position: relative;">
              <div class="infoList" style=" padding-bottom: 10px;padding-right:0;padding-top: 35px;">
                <ul class="clearfix">
                  <li>
                    <span>课程代码：</span>{{baseInfo.KCDM?baseInfo.KCDM:'-'}}</li>
                  <li>
                    <span>授课年级：</span>{{baseInfo.XZ_SKNJ?baseInfo.XZ_SKNJ:'-'}}</li>
                  <li>
                    <span>计划学时：</span>{{baseInfo.ZXS?baseInfo.ZXS:'-'}}</li>
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>课程类型：</span>{{baseInfo.XZ_KCLX?baseInfo.XZ_KCLX:'-'}}</li>
                  <li>
                    <span>授课地点：</span>{{baseInfo.XZ_JXDD?baseInfo.XZ_JXDD:'-'}}</li>
                  <li>
                    <span>是否核心课程：</span>{{baseInfo.XZ_SFHXK?baseInfo.XZ_SFHXK:'-'}}</li>
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>课程性质：</span>{{baseInfo.XZ_KCXZ?baseInfo.XZ_KCXZ:'-'}}</li>
                  <li>
                    <span>考试方式：</span>{{baseInfo.KSFSM?baseInfo.KSFSM:'-'}}</li>
                  <li>
                    <span>是否校企合作开发课程：</span>{{baseInfo.XZ_SFXQHZ?baseInfo.XZ_SFXQHZ:'-'}}</li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>

      <div style="margin-bottom:20px">
        <div class="titleTop" style="margin-bottom:10px">
          <span style="font-size:14px">学年</span>
          <el-select v-model="valueXq" placeholder="请选择" size="small" style="width: 200px" filterable @change="selectXqFn">
            <el-option v-for="item in optionsXq" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </div>
        <div class=“”>
           <el-card class="box-card">
          <template v-if="zyZhLDFlag">
            <div class="nodataPic_zg" style="height:360px">
              <img src="../../../assets/empty.jpg" />
            </div>
          </template>
          <template v-else>
            <div class="textTitleA">该课程建设质量指数<span style="color:#70ad47;font-weight: bold;"> {{zdf?zdf:'-'}}</span>分</div> 
            <div class="textTitleA" style="margin-bottom:10px">
              全校排名 第<span style="color:#70ad47;font-weight: bold;">{{XXTOP?XXTOP:'-'}}</span>名
              &nbsp; 
              全院排名 第<span style="color:#70ad47;font-weight: bold;">{{YXTOP?YXTOP:'-'}}</span>名
               &nbsp; 
              全专业排名 第<span style="color:#70ad47;font-weight: bold;">{{ZYTOP?ZYTOP:'-'}}</span>名
            </div>
            <el-row :gutter="20">
              <el-col :span="12">  
                  <!-- 雷达图 -->
                  <div id="zyZhLD" style="height:367px"></div>
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

      <!-- 使用教材 -->
      <div class="marginBto24 special_table_box">
        <el-card class="box-card">
          <div class="textTitleA">使用教材</div>
          <div class="topList special_tableColor">
            <template v-if="teachbookFlag">
              <div class="nodataPic_zg" style="height:345px">
                <img src="../../../assets/empty.jpg" />
              </div>
            </template>
            <template v-else>
              <table class="special_table " width="100%">
                <thead>
                  <tr>
                    <th class="leftAlign">教材名称</th>
                    <th>版本日期</th>
                    <th class="leftAlign">出版社</th>
                    <th>第一作者</th>
                    <th class="leftAlign">教材类型</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in teacherbookData" :key="index">
                    <td class="leftAlign">{{item.JCMC?item.JCMC:'-'}}</td>
                    <td>{{item.CBRQ?item.CBRQ:'-'}}</td>
                    <td class="leftAlign">{{item.CBS?item.CBS:'-'}}</td>
                    <td>{{item.BZZXM?item.BZZXM:'-'}}</td>
                    <td class="leftAlign">{{item.XZ_JCLX?item.XZ_JCLX:'-'}}</td>
                  </tr>
                </tbody>
              </table>
              <!-- <el-pagination background  layout="prev, pager, next"  :total="total" v-show="total" style="margin-top: 10px"    @current-change = "getCurrentPage" :current-page="currentPage" :page-size="pageSize">
                          </el-pagination> -->
            </template>
          </div>
        </el-card>
      </div>

      <!-- 使用教材 -->
      <div class="marginBto24 special_table_box">
        <el-card class="box-card">
          <div class="textTitleA">教材性质</div>
          <div class="topList special_tableColor">
            <template v-if="teachbookFlag2 ">
              <div class="nodataPic_zg" style="height:345px">
                <img src="../../../assets/empty.jpg" />
              </div>
            </template>
            <template v-else>
              <table class="special_table " width="100%">
                <thead>
                  <tr>
                    <th>是否教育部规划教材</th>
                    <th>是否教育部精品教材</th>
                    <th>是否行业部委统编教材</th>
                    <th>是否校企合作教材</th>
                    <th>是否自编教材</th>
                    <th>是否讲义</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in teacherbookData1" :key="index">
                    <td>{{item.XZ_JCXZ1?item.XZ_JCXZ1:'-'}}</td>
                    <td>{{item.XZ_JCXZ2?item.XZ_JCXZ2:'-'}}</td>
                    <td>{{item.XZ_JCXZ3?item.XZ_JCXZ3:'-'}}</td>
                    <td>{{item.XZ_JCXZ4?item.XZ_JCXZ4:'-'}}</td>
                    <td>{{item.XZ_JCXZ5?item.XZ_JCXZ5:'-'}}</td>
                    <td>{{item.XZ_JCXZ6?item.XZ_JCXZ6:'-'}}</td>
                  </tr>
                </tbody>
              </table>
              <!-- <el-pagination background  layout="prev, pager, next"  :total="total" v-show="total" style="margin-top: 10px"    @current-change = "getCurrentPage" :current-page="currentPage" :page-size="pageSize">
                          </el-pagination> -->
            </template>
          </div>
        </el-card>
      </div>

    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      baseInfo: [], // 课程信息
      FailureAnalysis: [], // 2017届课程不及格人数分析
      tableScore: [],
      filterText: "", // 瘦素课程
      kcdmmc: "",
      flagKc: true,
      numbers: [1, 2.3, 4, 5, 6],
      leasonBoxFlag: true,
      passBoxFlag: true,
      scoreSpeardFlag: true,
      szSpeardFlag: true,
      cjSpeardFlag: true,
      yxlSpeardFlag111: true,
      tableScoreFlag: true,
      classOptionData: [],
      classChartDates: [],
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
      top10: [],
      passBoxtopFlag: true,
      jzkcData: [],
      jzPassBoxFlag: true,
      flagUser: 0, // 身份,如果是教师,则为0,校级以上为1
      valueYx: "",
      optionsYx: [],
      optionsZy: [],
      valueZy: "",
      optionsKc: [],
      valueKc: "",
      flagZY: false,
      flagKc_seach: false,
      flagkc: 1,
      yxlSpeardFlag: true,
      kccjFlag: true,
      docname: "",
      dtype: "",
      name: "",
      htmlText: "",
      flagWord: true,
      zyZhList: [], //专业雷达图各项得分列表
      zyZhLDFlag: true, //雷达图是否有数据flag
      valueXq: "", //雷达图选择学期
      optionsXq: [], //学期数组
      flagYear: 1, //设置默认
      zdf: "", //总得分
      XXTOP:'',
      YXTOP:'',
      ZYTOP:'',
      zyldtTable: [], //雷达图右侧列表
      teacherbookData: [], //使用教材
      teachbookFlag: true, //使用教材flag
      teacherbookData1: [], //使用教材
      teachbookFlag2: true //使用教材flag
    };
  },
  created() {},
  mounted() {
    //初始化- 获取专业部 专业 课程 默认数据
    this.getYxFn();
  },
  methods: {
    // 2018-7-17--------------------------------------------------
    //搜索课程
    searchInfo() {
      let self = this;
      if(self.valueKc){
         self.downFn(); //重新更新数据
      }else{
         self.$message({
              message: '请选择课程',
              type: "error"
            });
      }
     
    },
    downFn() {
      let self = this;
      self.baseInfoFn(); // 历届成绩分布
      self.getXqFn(), //学年雷达图的select
        self.teacherbookDataFn(); //使用教材
      self.teacherbookDataFn1(); //教材性质
    },

    // 搜素
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
    // 切换院系
    selectYXFn(v) {
      this.flagZY = false
      this.flagKc_seach=true
      this.valueZy = "";
      this.valueKc = "";
      this.getZyFn();
    },

    // 获取专业
    getZyFn() {
      let self = this;
      let dataNew = {
        id: 30,
        key: self.valueYx
      };
      self.$ajax(
        "post",
        this.HOST + "/tr/individualPortrait/web/getselectJbxx",
        dataNew,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
               self.flagZY = false
              self.optionsZy = res.obj;
              self.valueZy = res.obj[0].code;
              self.getKcFn();
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
    // 切换专业
    selectZYFn() {
      this.flagKc_seach = true
      this.valueKc = "";
      this.getKcFn();
    },

    // 获取课程
    getKcFn() {
      let self = this;
      let dataNew = {
        id: 44,
        key: self.valueZy
      };
      self.$ajax(
        "post",
        this.HOST + "/tr/individualPortrait/web/getselectJbxx",
        dataNew,
        res => {
          if (res.success) {
            self.flagKc_seach = false
            if (res.obj.length > 0) {
              
              self.optionsKc = res.obj;
              self.valueKc = res.obj[0].CODE;
              self.flagkc++;
              if (self.flagkc == 2) {
                self.downFn();
                // self.wordFn()
              }
            } else {
              self.optionsKc = res.obj;
              self.valueKc = "";
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

    //基本信息
    baseInfoFn() {
      let self = this;
      let newData = {
        id: 46,
        key: self.valueKc
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            self.baseInfo = [];
            self.baseInfo = res.obj[0];
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
        typeId: 3,
        key: self.valueKc
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
              self.XXTOPFn()
              self.YXTOPFn()
              self.ZYTOPFn()
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
        typeId: 3,
        key: self.valueKc,
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
        typeId: 3,
        key: self.valueKc,
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
        typeId: 3,
        key: self.valueKc,
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
        typeId: 3,
        key: self.valueKc,
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
    },

    // 使用教材
    teacherbookDataFn() {
      let self = this;
      let newData = {
        id: 43,
        key: self.valueKc
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

    // 教材性质
    teacherbookDataFn1() {
      let self = this;
      let newData = {
        id: 45,
        key: self.valueKc
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              self.teachbookFlag2 = false;
              self.teacherbookData1 = res.obj;
            } else {
              self.teachbookFlag2 = true;
              self.teacherbookData1 = [];
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
.identity {
  margin-bottom: 24px;
}
.portraitTable {
  margin-top: 40px;
}
.infoBox .infoLeft,
.infoBox .infoList {
  padding: 40px 0;
}
.infoBoxA .infoLeft,
.infoBoxA .infoList {
  padding: 20px 0;
}
.infoBox .infoList {
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
.infoLeft .leason {
  font-size: 16px;
  line-height: 40px;
  color: #444;
}
.infoLeft .num {
  font-size: 14px;
  line-height: 25px;
  color: #999;
}
.infoList ul:nth-child(2n-1) {
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
.infoList li span {
  display: inline-block;
  padding-right: 5px;
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
.studentA .contentEcharts {
  width: 100%;
  height: 350px;
}
.btnStudntGroup .btnStudntList {
  float: left;
  width: 43%;
  padding-bottom: 28px;
}
.btnStudntGroup .btn {
  font-size: 14px;
  color: #fff;
  line-height: 55px;
  text-align: center;
  background-color: #70ad47;
}
.btnStudntGroup .btnStudntListA {
  float: right;
}
.btnStudntGroup .btnStudntListA .btn {
  background-color: #ed7d31;
}
.btnStudntGroup .list {
  color: #76838f;
  line-height: 52px;
  border-top: 1px solid #e4eaec;
}
.btnStudntGroup span {
  display: inline-block;
  width: 48%;
  text-align: center;
}
.awardPic p.num {
  float: right;
  padding-right: 40px;
  font-size: 14px;
  color: #76838f;
}
.awardPic p.num span {
  color: #70ad47;
}
.mainContent1 .el-table thead th,
.mainContent1 .el-table thead th {
  background-color: #f5f8fa;
}

.picGroup .personEcharts,
.picGroup .awardEcharts,
.picGroupA .bookEcharts,
.picGroupA .RechargeEcharts,
.picGroupA .consumeEcharts,
.leasonEcharts,
.passEcharts,
.speardEcharts,
.kccjA {
  height: 360px;
}
.width50 {
  width: 50%;
  float: left;
}
.RechargeEcharts,
.consumeEcharts {
  width: 80%;
  display: inline-block;
  text-align: center;
}
.showBox {
  padding-top: 60px;
  height: 298px;
}
.showBox .xqTitle {
  height: 50px;
  line-height: 50px;
  color: #526069;
  text-align: center;
  font-size: 16px;
  background-color: #f5f8fa;
  margin-bottom: 24px;
}
.showBox .xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.showBox .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #70ad47;
}
.showBox .xqItemA .num {
  color: #ed7d31;
}
.showBox .xqItemB .num {
  color: #ffc000;
}
.showBox .xqItemB {
  border-right: none;
}
.tableScore {
  width: 100%;
  border: 1px solid #e4eaec;
  border-collapse: collapse;
}
.tableScore th,
.tableScore td,
.tableScore tr {
  border: 1px solid #e4eaec;
}
.tableScore th {
  font-size: 14px;
  color: #526069;
  line-height: 33px;
  background-color: #f5f8fa;
}
.tableScore tr {
  font-size: 14px;
  color: #76838f;
  line-height: 54px;
  text-align: center;
}
.tableScore th.corlor1 {
  background-color: #f0f9eb;
}
.tableScore th.corlor2 {
  background-color: #fdf6ec;
}
.tableScore th.corlor3 {
  background-color: #f5f8fa;
}
.tableScore th.corlor4 {
  background-color: #fef0f0;
}
.tableScore th.corlor5 {
  background-color: #eaf1fd;
}
.nodataPic_zg {
  width: 100%;
  height: 600px;
  background-color: #fff;
  text-align: center;
}
.nodataPic_zg img {
  display: inline-block;
  margin-top: 50px;
}
.mainContent1 .titleName {
  line-height: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 15px;
}
.passEcharts table {
  width: 100%;
}
.w_seachGroup li {
  float: left;
  margin-bottom: 15px;
}
.w_seachGroup .title_seach {
  float: left;
  width: 90px;
  line-height: 32px;
  font-size: 14px;
  text-align: right;
  padding-right: 15px;
  color: #606266;
}
.w_seachGroup .title_select {
  float: left;
}
.link_button {
  color: #fff;
  background: #80b748;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #80b748;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.link_button:hover {
  background: #57a026;
  border-color: #57a026;
}
/* .special_table_box .special_table th,
.special_table_box .special_table td{
  font-size: 12px!important
} */
.special_table_box .special_table .leftAlign {
  text-align: left;
  padding-left: 30px;
}
.mainContent1 .textTitleA {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 10px;
}
</style>
