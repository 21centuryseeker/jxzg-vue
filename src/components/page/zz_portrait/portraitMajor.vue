<template>
  <div class="mainContent1 mainContentA mainContentAA">
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
              <div class="title_seach">专业</div>
              <div class="title_select">
                <el-select v-model="valueZy" placeholder="请选择" size="small" style="width: 300px" filterable>
                  <el-option v-for="(item,index)  in optionsZy" :key="index" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </li>
            <li style="width:80px; text-align: right;">
              <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>
            </li>
          </ul>
        </div>
      </el-card>
    </div>

    <div class="">
      <div class="infoBox infoBoxA marginBto24">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="infoLeft">
                <div class="pic"><img src="../../../assets/zhuanyehuaxiang.png" /></div>
                <p class="leason">{{baseInfo.ZYMC}}</p>
              </div>
            </el-col>
            <el-col :span="18" style="position: relative;">

              <div class="infoList" style="padding-bottom: 10px;">
                <ul class="clearfix">
                  <li>
                    <span>专业代码：</span>{{baseInfo.ZYDM?baseInfo.ZYDM:'--'}}</li>
                  <li>
                    <span>专业负责人： </span>{{baseInfo.fzr?baseInfo.fzr:'--'}}</li>
                  <!-- <li><span>已建教学文本数： </span>{{}}</li> -->
                  <li>
                    <span>专业带头人： </span>{{baseInfo.dtr?baseInfo.dtr:'--'}}</li>
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>学制：</span>{{baseInfo.XZ?baseInfo.XZ:'--'}}</li>

                  <li>
                    <span>批准设置日期：</span>{{baseInfo.JLNY?baseInfo.JLNY:'--'}}</li>
                  <li>
                    <span>重点专业： </span>{{baseInfo.XZ_ZDZY?baseInfo.XZ_ZDZY:'--'}}</li>
                  <!-- <li><span>校内实训数： </span>{{}}</li> -->
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>特色专业： </span>{{baseInfo.XZ_TSZY?baseInfo.XZ_TSZY:'--'}}</li>
                  <li>
                    <span>专业对口率： </span>{{baseInfo.dkl?baseInfo.dkl:'--'}}%</li>
                  <li>
                    <span>就业率： </span>{{baseInfo.jyl?baseInfo.jyl:'--'}}%</li>
                </ul>

                <ul class="clearfix">
                  <li>
                    <span>班级总数：</span>{{baseInfo.BJZS?baseInfo.BJZS:'--'}} </li>
                  <li>
                    <span>现代学徒制试点专业： </span>{{baseInfo.XZ_SFXTZ?baseInfo.XZ_SFXTZ:'-'}}</li>
                  <li>
                    <span>是否有上届毕业生： </span>{{baseInfo.XZ_SFYSJBYS?baseInfo.XZ_SFYSJBYS:'--'}}</li>
                </ul>
                <ul class="clearfix">
                  <li>
                    <span>批准招生日期：</span>{{baseInfo.QSXQ?baseInfo.QSXQ:'--'}}</li>

                </ul>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>

      <div style="margin-bottom:24px" class="special_table_box ">
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
            <el-row :gutter="20">
              <el-col :span="12">  
                 <div class="textTitleA">该专业建设质量指数<span style="color:#70ad47;font-weight: bold;"> {{zdf?zdf:'-'}}</span>分</div> 
                  <div class="textTitleA" style="margin-bottom:10px">
                    全校排名 第<span style="color:#70ad47;font-weight: bold;">{{XXTOP?XXTOP:'-'}}</span>名
                    &nbsp; 
                    全院排名 第<span style="color:#70ad47;font-weight: bold;">{{ZYTOP?ZYTOP:'-'}}</span>名
                  </div>
                  <!-- 雷达图 -->
                  <div id="zyZhLD" style="height:367px"></div>
              </el-col>
              <el-col :span="12">             
                  <div style="padding-top: 50px;">
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

      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">历年招生录取情况</div>
              <template v-if="LQflag">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:345px" id="studentNum" :key='101'></div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">历年区域生源报到情况</div>
              <template v-if="studentNumFlag1">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:345px" id="studentNum1" :key='102'></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!--历年招生录取情况 历年区域生源报到情况  -->
      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">历年在校生人数</div>
              <template v-if="studentNumFlag9">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:345px" id="studentNum9" :key='103'></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 在校生年级分布 -->
      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitle">在校生年级分布</div>
              <p class="details" style="padding-top:30px">在校生总数：
                <span style="color:#70ad47">{{contentSchool}}</span>人</p>
              <template v-if="studentNumFlag2">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum2" :key='104'></div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">生源结构</div>
              <template v-if="studentNumFlag3">
                <div class="nodataPic_zg" style="height:358px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:358px;" id="studentNum3" :key='105'></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">毕业生就业情况</div>
              <template v-if="studentNumFlag4">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum4" :key='106'></div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">获得证书的毕业生</div>
              <template v-if="studentNumFlag5">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum5" :key='107'></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">授课教师情况</div>
              <template v-if="studentNumFlag6">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum6" :key='108'></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin-bottom:24px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">课程类型情况</div>
              <template v-if="studentNumFlag7">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum7" :key='109'></div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">课程属性情况</div>
              <template v-if="studentNumFlag8">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart" style="height:343px;" id="studentNum8" :key='110'></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="marginBto24 special_table_box">
        <el-card class="box-card">
          <div class="textTitle">课程及课时分布</div>
          <div class="topList special_tableColor">
            <template v-if="teacherFlag">
              <div class="nodataPic_zg" style="height:345px">
                <img src="../../../assets/empty.jpg" />
              </div>
            </template>
            <template v-else>
              <el-row :gutter="20">
                <el-col :span="12">
                     <table class="special_table " width="100%">
                      <thead>
                        <tr>
                          <th style="width:160px">序号</th>
                          <th class="leftAlign">课程名称</th>
                          <th style="width:240px">教学计划规定课时数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(list, index1) in teacherDistributeData" :key="index1">
                          <td>{{index1+1}}</td>
                          <td class="leftAlign"><span class="long">{{list.KCMC}}</span></td>
                          <td>{{list.zxs}}</td>
                        </tr>
                      </tbody>
                    </table>
                </el-col>
                 <el-col :span="12">
                     <table class="special_table " width="100%">
                      <thead>
                        <tr>
                          <th style="width:160px">序号</th>
                          <th class="leftAlign">课程名称</th>
                          <th style="width:240px">教学计划规定课时数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(list, index1) in teacherDistributeData1" :key="index1">
                          <td>{{teacherDistributeData.length + index1+1}}</td>
                          <td class="leftAlign"><span class="long">{{list.KCMC}}</span></td>
                          <td>{{list.zxs}}</td>
                        </tr>
                      </tbody>
                    </table>
                </el-col>
              </el-row>
             

              <!-- <el-pagination background  layout="prev, pager, next"  :total="total" v-show="total" style="margin-top: 10px"    @current-change = "getCurrentPage" :current-page="currentPage" :page-size="pageSize">
                          </el-pagination> -->
            </template>

          </div>
        </el-card>
      </div>

      <div class="majorBox marginBto24" v-if="false">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="textTitle"> 本专业课程数分布</div>
              <p class="details" style="padding-top:30px">课程总数：
                <span style="color:#70ad47">{{kcNum}}</span>
              </p>
              <template v-if="CurriculumFlag">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="normEcharts" id="Curriculum"></div>
              </template>

            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="textTitle">本专业课时数分布</div>
              <p class="details" style="padding-top:30px">课时总数：
                <span style="color:#70ad47">{{ksNum}}</span>
              </p>

              <template v-if="ksfbFlag">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart majorEcharts2" id="ksfb"></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="majorBox marginBto24" v-if="false">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="textTitleA">历年本专业部招生人数</div>
              <template v-if="FlagmajorBox">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart majorEcharts1" id="majorBox1"></div>
              </template>

            </el-card>
          </el-col>

        </el-row>
      </div>

      <div class="majorBox marginBto24" v-if="false">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="textTitleA">当学年度本专业部教师获奖数量</div>
              <template v-if="majorBox1Flag2">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart majorEcharts1" id="majorBox3"></div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="textTitleA">当学年度本专业部学生获奖数量</div>
              <template v-if="majorBox1Flag3">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart majorEcharts2" id="majorBox4"></div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12" v-if='false'>
            <el-card class="box-card">
              <div class="textTitleA">历年各专业升学率</div>
              <template v-if="majorBox1Flag1">
                <div class="nodataPic_zg" style="height:345px">
                  <img src="../../../assets/empty.jpg" />
                </div>
              </template>
              <template v-else>
                <div class="majorEchart majorEcharts2" id="majorBox2"></div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      baseInfo: [], // 个人信息
      paraId: "", // 默认id
      filterText: "",
      filterText1: "",
      checkMagor: true,
      flagUser: 0, // 身份,如果是教师,则为0,校级以上为1
      CurriculumFlag: true,
      total: 0,
      currentPage: 8,
      currentPage: 1,
      teacherDistributeData: [],
       teacherDistributeData1: [],
      zymc: "",
      kcNum: 0,
      valueYx: "",
      optionsYx: [],
      optionsZy: [],
      valueZy: "",
      flagZY: false,
      flagzycsh: 1,
      dialogVisible: false,
      ksfbFlag: true,
      teacherFlag: true,
      majorBox1Flag: true,
      majorBox1Flag1: true,
      majorBox1Flag2: true,
      majorBox1Flag3: true,
      FlagmajorBox: false,
      ksNum: 0,
      docname: "",
      dtype: "",
      htmlText: "",
      name: "",
      flagWord: true,
      zyZhList: [], //专业雷达图各项得分列表
      zyZhLDFlag: true, //雷达图是否有数据flag
      studentNumFlag: true, //历年招生录取情况
      studentNumFlag1: true, //历年区域生源报到情况
      studentNumFlag9: true, //历年在校生人数
      flagkc1: 1,
      studentNumFlag2: true, //在校生年级分布
      contentSchool: 0, //在校生总人数
      studentNumFlag3: true, //生源结构
      studentNumFlag4: true, //毕业生就业情况
      studentNumFlag5: true, //获得证书的毕业生
      studentNumFlag6: true, //教师授课情况
      studentNumFlag7: true, //课程类型情况
      studentNumFlag8: true, //课程属性情况

      valueXq: "", //学年学期选择
      optionsXq: [], //学期数组
      flagYear: 1, //设置默认
      zdf: "", //总得分
      zyldtTable: [], //雷达图右侧列表
      XXTOP:'',
      ZYTOP:'',
      LQflag:true
    };
  },
  created() {},
  mounted() {
    //获取初始化专业信息
    this.getYxFn();
  },
  methods: {
    // 2018-7-17-------------------------------------------------
    searchInfo() {
      if(this.valueZy){
          this.dataFn();
      }else{
         this.$message({
              message: '请选择专业',
              type: "error"
            });
      }
      
    },
    // 重新调用各个接口
    dataFn() {
      let self = this;
      self.baseInfoFn(); //基本信息
      self.getXqFn(), //学年雷达图的select
      self.njFbFn(); //在校生年级分布
      self.studerntNumFn(); //生源结构
      self.bysjyFn(), //毕业生就业情况
      self.bystuderntNumFn(), //获得证书的毕业生
      self.teachskFn(), //教师授课情况
      self.zykclxFn(), //课程类型情况
      self.zykcsxFn(), //课程属性情况
      self.teacherDistributeFn(); //课程及课时分布
      self.studentNumFn(); //历年招生录取情况
      self.studentNumFn1(); //历年区域生源报到情况
      self.studentNumFn2(); //历年在校生人数
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
      // this.flagZY = false
      this.valueZy = "";
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
              //  self.flagZY = false
              self.optionsZy = res.obj;
              self.valueZy = res.obj[0].code;
              self.flagzycsh++;
              if (self.flagzycsh == 2) {
                self.dataFn();
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
    //   基本信息
    baseInfoFn() {
      let self = this;
      let newData = {
        id: 31,
        key: self.valueZy
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            self.baseInfo = [];
            if (res.obj.length > 0) {
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
    // 获得学年的学期切换
    getXqFn() {
      let self = this;
      let dataNew = {
        typeId: 1,
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
              self.XXTOPFn()
              self.YXTOPFn()
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
    },
    // 获取学期雷达图数据
    zyZhFn() {
      let self = this;
      self.zyldtTable = [];
      let newData = {
        typeId: 1,
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
        typeId: 1,
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
        typeId: 1,
        key:self.valueZy,
        year:self.valueXq,
        yxid:self.valueYx
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/searchYXTOP",
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
          center: ['50%', '55%'],
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#76838f",
              backgroundColor: "#fff",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: ind,
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

    //在校生年级分布
    njFbFn() {
      let self = this;
      let newData = {
        id: 32,
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
                self.studentNumFlag2 = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    color: "#70ad47",
                    data: res.obj.datayList
                  }
                ];
                self.contentSchool = 0;
                for (let item of res.obj.datayList) {
                  self.contentSchool += item;
                }
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum2",
                    "",
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（人）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{c0}人"
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
    },

    // 生源结构
    studerntNumFn() {
      let self = this;
      let newData = {
        id: 33,
        key: self.valueZy
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/getPieData",
        newData,
        res => {
          if (res.success) {
            if (res.obj.legend.length > 0) {
              self.studentNumFlag3 = false;
              let legendData = res.obj.legend;
              let title = res.obj.title;
              let sdata = res.obj.datayList;
              let series = [
                {
                  name: "",
                  type: "pie",
                  radius: "55%",
                  label: {
                    normal: {
                      show: true,
                      formatter: "{b}({c}人)"
                      // position: 'inside'
                    }
                  },
                  data: sdata
                }
              ];
              setTimeout(() => {
                self.$ChartUtil.drawChartNoXY(
                  "studentNum3",
                  "",
                  [],
                  self.$ChartUt.VERTICAL,
                  series,
                  [],
                  {},
                  self
                );
              }, 150);
            } else {
              self.studentNumFlag3 = true;
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

    // 毕业生就业情况
    bysjyFn() {
      let self = this;
      let newData = {
        id: 36,
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
                self.studentNumFlag4 = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    color: "#ed7d31",
                    data: res.obj.datayList
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum4",
                    "",
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（人）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{c0}人"
                      },
                      grid: {
                        x: 50,
                        y: 50,
                        x2: 30,
                        y2: 60
                      },
                      customattrs: { xrotate: 0 }
                    },
                    self
                  );
                }, 150);
              } else {
                self.studentNumFlag4 = true;
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

    // 获得证书的毕业生
    bystuderntNumFn() {
      let self = this;
      let newData = {
        id: 35,
        key: self.valueZy
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/getPieData",
        newData,
        res => {
          if (res.success) {
            if (res.obj.legend.length > 0) {
              self.studentNumFlag5 = false;
              let legendData = res.obj.legend;
              let title = res.obj.title;
              let sdata = res.obj.datayList;
              let series = [
                {
                  name: "",
                  type: "pie",
                  radius: "55%",
                  label: {
                    normal: {
                      show: true,
                      formatter: "{b}({c}人)"
                      // position: 'inside'
                    }
                  },
                  data: sdata
                }
              ];
              setTimeout(() => {
                self.$ChartUtil.drawChartNoXY(
                  "studentNum5",
                  "",
                  [],
                  self.$ChartUt.VERTICAL,
                  series,
                  [],
                  {},
                  self
                );
              }, 150);
            } else {
              self.studentNumFlag5 = true;
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

    // 教师授课情况
    teachskFn() {
      let self = this;
      let newData = {
        id: 40,
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
                self.studentNumFlag6 = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    color: "#ffc000",
                    data: res.obj.datayList
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum6",
                    "",
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（人）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{c0}人"
                      },
                      grid: {
                        x: 50,
                        y: 50,
                        x2: 30,
                        y2: 60
                      },
                      customattrs: { xrotate: 0 }
                    },
                    self
                  );
                }, 150);
              } else {
                self.studentNumFlag6 = true;
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

    // 课程类型情况
    zykclxFn() {
      let self = this;
      let newData = {
        id: 37,
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
                self.studentNumFlag7 = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    color: "#4472c4",
                    data: res.obj.datayList
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum7",
                    "",
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
                        y: 50,
                        x2: 30,
                        y2: 60
                      },
                      customattrs: { xrotate: 0 }
                    },
                    self
                  );
                }, 150);
              } else {
                self.studentNumFlag7 = true;
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

    // 课程属性情况
    zykcsxFn() {
      let self = this;
      let newData = {
        id: 38,
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
                self.studentNumFlag8 = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    color: "#a5a5a5",
                    data: res.obj.datayList
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum8",
                    "",
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
                        y: 50,
                        x2: 30,
                        y2: 60
                      },
                      customattrs: { xrotate: 0 }
                    },
                    self
                  );
                }, 150);
              } else {
                self.studentNumFlag8 = true;
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

    // 课程及课时分布
    teacherDistributeFn() {
      let self = this;
      let newData = {
        id: 39,
        key: self.valueZy
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/individualPortrait/web/getselectJbxx",
        newData,
        res => {
          if (res.success) {
            if (res.obj.length > 0) {
              self.teacherFlag = false;
              self.teacherDistributeData = res.obj;
              let arr = res.obj
              self.teacherDistributeData = arr.slice(0, Math.floor(arr.length / 2))
              self.teacherDistributeData1 = arr.slice(Math.floor(arr.length / 2), arr.length - 1)
            } else {
              self.teacherFlag = true;
              self.teacherDistributeData = [];
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

    //历年招生录取情况
    studentNumFn() {
      let self = this;
      let newData = {
        id: 47,
        key: self.valueZy
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/getSomeBarData",
        newData,
        res => {
          if (res.success) {
            if (res.obj) {
              if (res.obj.dataxList.length > 0) {  
                self.LQflag = false;
                let series = [
                  {
                    name: res.obj.legend[0],
                    type: "line",
                    // color: '#70ad47',
                    data: res.obj.datay1List
                  },
                  {
                    name: res.obj.legend[1],
                    type: "line",
                    // color: '#70ad47',
                    data: res.obj.datay2List
                  },
                  {
                    name: res.obj.legend[2],
                    type: "line",
                    // color: '#70ad47',
                    data: res.obj.datay3List
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum",
                    '',
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（人）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人<br/>{a2}:{c2}人"
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
              }else{
                  self.LQflag = true;
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

    //区域生源报到情况
    studentNumFn1() {
      let self = this;
      let newData = {
        id: 42,
        key: self.valueZy
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/individualPortrait/web/getSomeBarData",
        newData,
        res => {
          if (res.success) {
            if (res.obj) {
              if (res.obj.dataxList.length > 0) {
                self.studentNumFlag1 = false;
                let series = [
                  {
                    name: res.obj.legend[0],
                    type: "line",
                    // color: '#70ad47',
                    data: res.obj.datay1List
                  },
                  {
                    name: res.obj.legend[1],
                    type: "line",
                    // color: '#70ad47',
                    data: res.obj.datay2List
                  },
                  {
                    name: res.obj.legend[2],
                    type: "line",
                    // color: '#70ad47',
                    data: res.obj.datay3List
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum1",
                    '',
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（人）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人<br/>{a2}:{c2}人"
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
                self.studentNumFlag1 = true;
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

    //区域生源报到情况
    studentNumFn2() {
      let self = this;
      let newData = {
        id: 48,
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
                self.studentNumFlag9 = false;
                let series = [
                  {
                    name: "",
                    type: "bar",
                    // color: '#70ad47',
                    data: res.obj.datayList
                  }
                ];
                setTimeout(() => {
                  self.$ChartUtil.drawChart(
                    "studentNum9",
                   '',
                    res.obj.legend,
                    "",
                    series,
                    res.obj.dataxList,
                    false,
                    {
                      yAxis: [
                        {
                          type: "value",
                          name: "（人）"
                        }
                      ],
                      tooltip: {
                        trigger: "axis",
                        formatter: "{b}<br/>{c0}人"
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
                self.studentNumFlag9 = true;
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
.pessonInfo .infoList li {
  width: 40%;
}
.infoList li span {
  display: inline-block;
  padding-right: 5px;
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
.mainContent1 .textTitleA {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 10px;
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
.infoBoxA .infoLeft,
.infoBoxA .infoList {
  padding: 20px 0;
}
.normEcharts {
  height: 345px;
}
.majorBox .majorEchart {
  height: 345px;
}
.teachTOP .box-card {
  height: 480px;
}
.mainContentAA .nodataPicAN {
  background-color: #fff;
  height: 600px;
  text-align: center;
}
.mainContentAA .nodataPicAN img {
  display: inline-block;
  margin: auto;
  margin-top: 100px;
}
.textTitle .details {
  float: right;
  padding-right: 40px;
  font-size: 14px;
  color: #76838f;
}
.textTitle .details spam {
  color: #70ad47;
}
.special_tableColor table,
.special_tableColor tr,
.special_tableColor td,
.special_tableColor th {
  border-collapse: collapse;
}
.special_tableColor th {
  padding-left: 10px;
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
.dropdownSpan {
  line-height: 28px;
  padding: 2px 10px;
  color: #fff;
  height: 28px;
  background: rgb(255, 192, 0);
  border-color: rgb(255, 192, 0) !important;
  display: inline-block;
  cursor: pointer;
}
/* .special_table_box .special_table th,
.special_table_box .special_table td{
  font-size: 12px!important
} */
.special_table_box .special_table .leftAlign {
  text-align: left;
  padding-left: 70px;
}
.long{
   white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
    max-width: 185px!important;
  width: 100%;
  
}
</style>
