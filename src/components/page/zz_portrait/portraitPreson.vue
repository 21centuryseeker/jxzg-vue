<template>
  <div class="mainContent1 mainContentA mainContentC">
    <div class="filterBox marginBto24">
      <el-card class="box-card">
        <div class="w_seachGroup">
          <ul class=" clearfix">
            <li>
              <div class="title_seach">院系</div>
              <div class="title_select">
                <el-select v-model="valueYx" placeholder="请选择专业部" size="small" style="width: 300px" filterable @change="selectYXFn">
                  <el-option v-for="item in optionsYx" :key="item.code" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="title_seach">专业</div>
              <div class="title_select">
                <el-select v-model="valueZy" style="width: 300px" size="small" placeholder="请选择专业" @change="selectZyFn" filterable :disabled="flagZY">
                  <el-option v-for="(item,index) in optionsZy" :key="index" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="title_seach">班级</div>
              <div class="title_select">
                <el-select v-model="valueBj" style="width: 300px" size="small" placeholder="请选择班级" filterable :disabled="flagBj" @change="selectBjFn">
                  <el-option v-for="(item,index) in optionsBj" :key="index" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li>
              <div class="title_seach">学生</div>
              <div class="title_select">
                <el-select v-model="valueXs" style="width: 300px" size="small" placeholder="请选择学生" filterable :disabled="flagXs">
                  <el-option v-for="item in optionsXs" :key="item.code" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li style="width:110px; text-align: right;">
              <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>
            </li>
          </ul>
          <!-- <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>   -->
        </div>
      </el-card>
    </div>
    <div>
      <div class="infoBox marginBto24">
        <el-card class="box-card" :data="baseInfo">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="infoLeft">
                <img style=“width:40%” src="../../../assets/xueshenghuaxiang.png" />

                <p class="name">{{baseInfo.XM?baseInfo.XM:''}}
                  <template v-if="baseInfo.XZ_XB=='男'">
                    <i class="iconfont" style="color:#4472c4">&#xe650;</i>
                  </template>
                  <template v-else>
                    <i class="iconfont" style="color:#ed7d31">&#xe652;</i>
                  </template>
                </p>
                <p class="num">学号 {{baseInfo.XSXH?baseInfo.XSXH:''}} </p>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="infoList" style="padding-top:20px">
                <ul class="clearfix">
                  <li>
                    <span>民族：</span> {{baseInfo.XZ_MZ?baseInfo.XZ_MZ:'--'}}</li>
                  <li>
                    <span>学制：</span>{{baseInfo.XZ_XZ?baseInfo.XZ_XZ:'--'}}</li>
                  <li>
                    <span>生源地：</span>{{baseInfo.SYD?baseInfo.SYD:'--'}} </li>
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>学籍状态： </span>{{baseInfo.XZ_XJZT?baseInfo.XZ_XJZT:'--'}}</li>
                  <li>
                    <span>入学时间：</span>{{baseInfo.RXRQ?baseInfo.RXRQ:'--'}} </li>
                  <li>
                    <span>生源类型：</span> {{baseInfo.XZ_SYLX?baseInfo.XZ_SYLX:'--'}}</li>
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>年级：</span> {{baseInfo.XZ_NJ?baseInfo.XZ_NJ:'--'}}</li>
                  <li>
                    <span>入学总分：</span>{{baseInfo.RXCJZF?baseInfo.RXCJZF:'--'}} </li>
                  <li>
                    <span>招生方式：</span> {{baseInfo.XZ_ZSFS?baseInfo.XZ_ZSFS:'--'}}</li>

                </ul>
                <ul class="clearfix">

                  <li>
                    <span>来自军队：</span>{{baseInfo.XZ_SFJD?baseInfo.XZ_SFJD:'--'}} </li>
                  <li>
                    <span>是否常住户口在农村：</span> {{baseInfo.XZ_SFNCHK?baseInfo.XZ_SFNCHK:'--'}}</li>
                  <li>
                    <span>是否建档立卡贫困家庭：</span>{{baseInfo.XZ_SFPKH?baseInfo.XZ_SFPKH:'--'}} </li>
                </ul>
                <ul class="clearfix">

                  <li>
                    <span>是否订单（定向）培养：</span>{{baseInfo.XZ_SFDDPY?baseInfo.XZ_SFDDPY:'--'}} </li>
                  <li class="width55">
                    <span>电子邮箱：</span>{{baseInfo.DZYX?baseInfo.DZYX:'--'}} </li>
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
        <div>
<el-card class="box-card">
          <template v-if="zyZhLDFlag">
            <div class="nodataPic_zg" style="height:360px">
              <img src="../../../assets/empty.jpg" />
            </div>
          </template>
          <template v-else>
             <p class="details" >
                    该学生建设质量指数<span style="color:#70ad47">{{zdf}}</span>分 
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
        <div class="titleName" style="color:#ed7d31;    border-left: 5px solid #ed7d31;"> 学生情况 </div>
        <div class="showInfoList">
          <el-row :gutter="20">
            <template v-if="countCardFlag">
              <el-col :span="24">
                <el-card class="box-card">
                  <div class="nodataPic_zg" style="height:358px">
                    <img src="../../../assets/empty.jpg" />
                  </div>
                </el-card>
              </el-col>
            </template>
            <template v-for="(item,index) in countCard" v-else>
              <el-col :span="8" :key="index">
                <div :class="'showInfoItem'+(index+1)">
                  <el-card class="box-card">
                    <p class="num">{{item.value?item.value:'0'}}</p>
                    <p class="name" v-if="index!=2">{{item.name?item.name:'0'}}(个)</p>
                    <p class="name" v-else>{{item.name?item.name:'0'}}(门)</p>
                  </el-card>
                </div>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>

      <!-- 在校生年级分布 -->
      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <!-- <div class="textTitle">各学年上课课程数</div> -->
              <template v-if="studentNumFlag2">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum2" :key="1011"></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="score marginBto24 special_table_box" id="spacialLeft">
        <el-card class="box-card">
          <div class="textTitle" style="color:#ed7d31">成绩信息</div>
          <div class="portraitTable">
            <!-- <template v-if="scoreTabFlag">
              <div class="nodataPic_zg" style="height:358px">
                <img src="../../../assets/empty.jpg" />
              </div>
            </template>
            <template v-else> -->
            <template>
              <table class="special_table" width="100%">
                <thead>
                  <tr>
                    <th class="leftAlign">课程代码</th>
                    <th class="leftAlign">课程</th>
                    <th>成绩</th>
                    <th>学分</th>
                    <th>班级排名</th>
                    <th>是否重修</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in scoreTableData" :key="index">
                    <td class="leftAlign">{{item.KCDM?item.KCDM:'--'}}</td>
                    <td class="leftAlign">{{item.kcmc?item.kcmc:'--'}}</td>
                    <td>{{item.BFZKSCJ?item.BFZKSCJ:'--'}}</td>
                    <td>{{item.xf?item.xf:'--'}}</td>
                    <td>{{item.pm?item.pm:'--'}}</td>
                    <td>{{item.sfcx?item.sfcx:'--'}}</td>
                  </tr>
                </tbody>
              </table>
              <!-- <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px" :current-page="currentP" :page-size="pageSize"  @current-change = "getCurrentPageScore">
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
      SchoolNumber: 0,
      filterText: "", // 过滤信息
      baseInfo: [], // 基本信息
      TopFiveLists: [], // 班级前五名
      lastFiveLists: [], // 班级后五名
      scoreInfo: [], // 个人历史成绩
      LoanDetails: [], // 贷款明细
      checkPermissions: true,
      expenditure: 0,
      jyye: 0,
      recharge: 0,
      awardEchartsFlag: true,
      bookEchartsFlag: true,
      bookEchartsFlag: true,
      loanPicFlag: true,
      totalScore: 0,
      pageSize: 6,
      currentP: 1,
      scoreTableData: [
        {
          KCDM: "0105001",
          kcmc: "体育",
          BFZKSCJ: "86",
          xf: "",
          pm: "4",
          sfcx: ""
        },
        {
          KCDM: "0107001",
          kcmc: "军事（-）",
          BFZKSCJ: "",
          xf: "8",
          pm: "17",
          sfcx: ""
        },
        {
          KCDM: "0107002",
          kcmc: "军事（二）",
          BFZKSCJ: "",
          xf: "10",
          pm: "11",
          sfcx: ""
        },
        {
          KCDM: "0102001",
          kcmc: "数学",
          BFZKSCJ: "62.3",
          xf: "",
          pm: "",
          sfcx: ""
        },
        {
          KCDM: "0202003",
          kcmc: "汽车制造",
          BFZKSCJ: "",
          xf: "16",
          pm: "5",
          sfcx: ""
        },
        {
          KCDM: "0202006",
          kcmc: "汽车涂装技术",
          BFZKSCJ: "",
          xf: "12",
          pm: "3",
          sfcx: ""
        },
        {
          KCDM: "0202004",
          kcmc: "汽车电气设备制造与维修",
          BFZKSCJ: "",
          xf: "28",
          pm: "3",
          sfcx: ""
        },
        {
          KCDM: "0202024",
          kcmc: "汽车空间",
          BFZKSCJ: "89",
          xf: "",
          pm: "3",
          sfcx: ""
        },
        {
          KCDM: "0202024",
          kcmc: "汽车维护",
          BFZKSCJ: "",
          xf: "14",
          pm: "6",
          sfcx: ""
        }
      ],
      depedIdFlag: true,
      countCard: [],
      valueYx: "",
      optionsYx: [],
      optionsZy: [],
      valueZy: "",
      optionsBj: [],
      valueBj: "",
      optionsXs: [],
      valueXs: "",
      flagZY: false,
      flagBj: false,
      flagXs: false,
      scoreTabFlag: true,
      countCardFlag: true,
      Numflag: 1,
      /* cjs添加 */

      dialogTitle: "",
      dialogShow: false,
      dialogList: [],
      studentNumFlag2: true,
      valueXq: "", //学年学期选择
      optionsXq: [], //学期数组
      flagYear: 1, //设置默认
      zdf: "", //总得分
       XXTOP:'',
      YXTOP:'',
      ZYTOP:'',
      zyldtTable: [], //雷达图右侧列表
      zyZhLDFlag: true,
      zyZhList: []
    };
  },
  created() {},
  mounted() {
    // this.SchoolNumberFn()
    this.getYxFn();
  },
  methods: {
    getXqFn() {
      let self = this;
      let dataNew = {
        typeId: 4,
        key: self.valueXs
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
    selectXqFn(v) {
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
        typeId: 4,
        key: self.valueXs,
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
      typeId: 4,
        key: self.valueXs,
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
        typeId: 4,
        key: self.valueXs,
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
       typeId: 4,
        key: self.valueXs,
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
           radius: '60%',
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

    // 2018-6-19
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
    selectYXFn(v) {
      this.flagZY = false
      this.flagBj = true
      this.flagXs = true
      this.valueZy = "";
      this.valueBj = "";
      this.valueXs = "";
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
              self.getBjFn();
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
    selectZyFn() {
      this.flagBj = true
      this.flagXs = true
      this.valueBj = "";
      this.valueXs = "";
      this.getBjFn();
    },

    // 获取班级
    getBjFn() {
      let self = this;
      // console.log('dadad', self.valueZy)
      let dataNew = {
        id: 52,
        key: self.valueZy
      };
      self.$ajax(
        "post",
        this.HOST + "/tr/individualPortrait/web/getselectJbxx",
        dataNew,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              self.flagBj = false
              self.optionsBj = res.obj;
              self.valueBj = res.obj[0].code;
              self.getXsFn();
            } else {
              self.optionsBj = res.obj;
              self.valueBj = "";
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
    selectBjFn() {
       self.flagXs = false
      this.valueXs = "";
      this.getXsFn();
    },
    // 获取学生
    getXsFn() {
      let self = this;
      let dataNew = {
        id: 53,
        key: self.valueBj
      };
      self.$ajax(
        "post",
        this.HOST + "/tr/individualPortrait/web/getselectJbxx",
        dataNew,
        res => {
          if (res.success) {
             self.flagXs = false
            if (res.obj.length > 0) {
             
              self.optionsXs = res.obj;
              self.valueXs = res.obj[0].code;
              self.Numflag++;
              if (self.Numflag == 2) {
                self.downFn();
              }
            } else {
              self.optionsXs = res.obj;
              self.valueXs = "";
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
    downFn() {
      let self = this;

      self.baseInfoFn(); // 基本信息
      self.countCardFn(); //统计个数
      self.njFbFn(); //统计个数
      self.getXqFn(); //
    },
    // 查询
    searchInfo() {
      let self = this;
      if(self.valueXs){
         self.downFn();
      }else{
         self.$message({
          message: '请选择学生',
          type: "error"
        });
      }
     
    },

    // 基本信息
    baseInfoFn() {
      let self = this;
      let newData = {
        id: 54,
        key: self.valueXs
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            self.baseInfo = [];
            if (res.obj) {
              self.baseInfo = res.obj[0];
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

    //   统计个数信息
    countCardFn() {
      let self = this;
      let newData = {
        id: 57,
        key: self.valueXs
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
              self.countCard.push(
                { name: "助学金获奖", value: 1 },
                { name: "课程", value: 15 }
              );
              self.countCardFlag = false;
            } else {
              self.countCardFlag = true;
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

    // 成绩信息
    scoreInfoFn() {
      let self = this;
      let newData = {
        id: 15,
        key: self.valueXs
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getCjxx",
        newData,
        res => {
          if (res.success) {
            self.scoreTableData = [];
            if (res.obj.length > 0) {
              self.scoreTabFlag = false;
              self.scoreTableData = res.obj;
            } else {
              self.scoreTabFlag = true;
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

    getCurrentPageScore: function(currentPage) {
      this.currentP = currentPage;
      this.scoreInfoFn();
    },

    // 在校生年级分布
    njFbFn() {
      let self = this;
      let newData = {
        id: 58,
        key: self.valueXs
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/getBarData",
        newData,
        res => {
          if (res.success) {
            if (res.obj) {
              if (res.obj.dataxList.length > 0) {
                self.studentNumFlag2 = false;
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
                    "studentNum2",
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
                self.studentNumFlag2 = true;
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
.infoList li.width55 {
  width: 55%;
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
.picGroupA .consumeEcharts {
  height: 360px;
}
.picGroupA .bookEcharts {
  height: 362px;
}
.width50 {
  width: 50%;
  float: left;
}
.RechargeEcharts,
.consumeEcharts {
  width: 100%;
  display: inline-block;
  text-align: center;
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
.studntTable .box-card {
  height: 390px;
}
.mainContentC .nodataPicAC {
  background-color: #fff;
  height: 600px;
  text-align: center;
}
.mainContentC .nodataPicAC img {
  display: inline-block;
  margin: auto;
  margin-top: 100px;
}
.mainContentC .nodataPicAC_small {
  background-color: #fff;
  height: 350px;
  text-align: center;
}
.mainContentC .nodataPicAC_small img {
  display: inline-block;
  margin: auto;
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
/* #spacialLeft .special_table th:nth-child(2),
#spacialLeft .special_table tr td:nth-child(2){
text-align: left;
padding-left: 30px
} */
</style>
