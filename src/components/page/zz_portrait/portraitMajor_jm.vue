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
                    <span>首次招生时间： </span>{{baseInfo.fzr?baseInfo.fzr:'--'}}</li>
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

      <div style="margin-bottom:24px">
        <div>总体变动</div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">申请专业变动比率</div>
              <div class="majorEchart" style="height:345px" id="studentNum" :key='101'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业变动比率</div>
              <div class="majorEchart" style="height:345px" id="studentNumA" :key='122'></div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!--历年招生录取情况 历年区域生源报到情况  -->
      <div style="margin-bottom:24px">
        <div>申请转出</div>
        <el-row :gutter="20">
          <el-col :span="12" style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转出申请人数</div>
              <div class="majorEchart" style="height:345px" id="studentNum9" :key='103'></div>
            </el-card>
          </el-col>
          <el-col :span="12" style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转出申请率</div>
              <div class="majorEchart" style="height:345px" id="studentNumB" :key='133'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转出人数</div>
              <div class="majorEchart" style="height:345px" id="studentNumC" :key='145'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转出率</div>
              <div class="majorEchart" style="height:345px" id="studentNumD" :key='193'></div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin-bottom:24px">
        <div>申请转入</div>
        <el-row :gutter="20">
          <el-col :span="12" style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转入申请人数</div>
              <div class="majorEchart" style="height:345px" id="studentNumQ" :key='173'></div>
            </el-card>
          </el-col>
          <el-col :span="12" style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转入申请率</div>
              <div class="majorEchart" style="height:345px" id="studentNumBQ" :key='173'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转入人数</div>
              <div class="majorEchart" style="height:345px" id="studentNumCQ" :key='175'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业转入率</div>
              <div class="majorEchart" style="height:345px" id="studentNumDQ" :key='173'></div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 在校生年级分布 -->
      <div style="margin-bottom:24px">
        <div>资源库</div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业教学资源库数量</div>
              <div class="majorEchart" style="height:345px" id="studentNumDQW" :key='1111'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业教学资源库数量及占比</div>
              <div class="majorEchart" style="height:345px;" id="studentNum3W" :key='10145'></div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 在校生年级分布 -->
      <div style="margin-bottom:24px">
        <div>实训</div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校内实训基地数量 </div>
              <div class="majorEchart" style="height:345px" id="scollList" :key='45'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校内实训基地建筑面积 </div>
              <div class="majorEchart" style="height:345px;" id="scollListA" :key='1521'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校外实训基地数量 </div>
              <div class="majorEchart" style="height:345px" id="scollListB" :key='95'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校外实训基地建筑面积 </div>
              <div class="majorEchart" style="height:345px;" id="scollListC" :key='4545'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">实训基地数量及占比</div>
              <div class="majorEchart" style="height:345px" id="sxjd" :key='91115'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">设备总值 </div>
              <div class="majorEchart" style="height:345px;" id="sbzz" :key='45415'></div>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">生均仪器设备值</div>
              <div class="majorEchart" style="height:345px;" id="sjsbz" :key='4541225'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">实训应开项目数 </div>
              <div class="majorEchart" style="height:345px;" id="sxykxm" :key='454115'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">实训实开项目数</div>
              <div class="majorEchart" style="height:345px;" id="sxskxm" :key='452241225'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">实开项目开出率 </div>
              <div class="majorEchart" style="height:345px;" id="sxykxmL" :key='454115'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">实训室使用率</div>
              <div class="majorEchart" style="height:345px;" id="sxskxml" :key='452241225'></div>
            </el-card>
          </el-col>
        </el-row>
      </div>

        <!-- 在校生年级分布 -->
      <div style="margin-bottom:24px">
        <div>校企合作</div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">合作企业数量</div>
                <div class="majorEchart" style="height:345px" id="hzqysl" :key='111211'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">合作企业类别</div>
                <div class="majorEchart" style="height:345px;" id="hzqylb" :key='1013245'></div>
             </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">合作企业层次及占比	</div>
                <div class="majorEchart" style="height:345px" id="hzqyslcc" :key='11124411'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">合作企业订单培养人数占全日制高职在校生人数比例	</div>
                <div class="majorEchart" style="height:345px;" id="hzqyrsb" :key='101344245'></div>
             </el-card>
          </el-col>
            <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">合作企业接受顶岗实习学生比例		</div>
                <div class="majorEchart" style="height:345px" id="hzqyslccbl" :key='1115'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">合作企业录用应届毕业生比例	</div>
                <div class="majorEchart" style="height:345px;" id="hzqyrsbl" :key='10855'></div>
             </el-card>
          </el-col>
              <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校企合作共同开发课程门数占开设课程总门数比例		</div>
                <div class="majorEchart" style="height:345px" id="hzqyslccblll" :key='225'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">专业拥有校企合作共同开发教材数		</div>
                <div class="majorEchart" style="height:345px;" id="hzqyrsblbl" :key='2855'></div>
             </el-card>
          </el-col>
             <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">企业捐赠设备数量			</div>
                <div class="majorEchart" style="height:345px" id="qyjzsbs" :key='22995'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">企业捐赠设备总价值			</div>
                <div class="majorEchart" style="height:345px;" id="qyjzzjz" :key='2851599'></div>
             </el-card>
          </el-col>
          	
     <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">企业接受教师企业实践数量			</div>
                <div class="majorEchart" style="height:345px" id="qyjsjssjs" :key='8822995'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校企合作研发成果数量				</div>
                <div class="majorEchart" style="height:345px;" id="xqhzyfcg" :key='882851599'></div>
             </el-card>
          </el-col>
         	
         <el-col :span="24">
            <el-card class="box-card" style="margin-bottom:24px">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">校企合作研发成果占研发成果比率				</div>
                <div class="majorEchart" style="height:345px;" id="xqhzbl" :key='9299'></div>
             </el-card>
          </el-col>
        </el-row>
      </div>


     <div style="margin-bottom:24px">
        <div>创新创业</div>
        <el-row :gutter="20">
          <el-col :span="12" style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">创业基地数量	</div>
              <div class="majorEchart" style="height:345px" id="cyjdsl" :key='17883'></div>
            </el-card>
          </el-col>
          <el-col :span="12" style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">学生创业比例  </div>
              <div class="majorEchart" style="height:345px" id="xscybl" :key='1783'></div>
            </el-card>
          </el-col>
          <el-col :span="12"  style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">学校创业资助额	</div>
              <div class="majorEchart" style="height:345px" id="xscyzze" :key='1875'></div>
            </el-card>
          </el-col>
          <el-col :span="12"  style="margin-bottom:24px">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">创业课程开设数</div>
              <div class="majorEchart" style="height:345px" id="cykckss" :key='18873'></div>
            </el-card>
          </el-col>
           <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">创业课程学习人数	</div>
              <div class="majorEchart" style="height:345px" id="cykcxxrs" :key='188875'></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <!-- 招生及录取情况 -->
              <div class="textTitleA">创业公司数</div>
              <div class="majorEchart" style="height:345px" id="cygss" :key='1888873'></div>
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
      XXTOP: "",
      ZYTOP: "",
      LQflag: true,
      dataY: [], //申请总变动数
      arr1: [],
      arr2: []
    };
  },
  created() {},
  mounted() {
    //获取初始化专业信息
    this.getYxFn();
  },
  methods: {
    getRandom(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    // 2018-7-17-------------------------------------------------
    searchInfo() {
      if (this.valueZy) {
        this.dataFn();
      } else {
        this.$message({
          message: "请选择专业",
          type: "error"
        });
      }
    },
    // 重新调用各个接口
    dataFn() {
      let self = this;
      self.baseInfoFn(); //基本信息
      this.RateChangeFnZt();
      this.zyRateChangeFnZt();
      this.zyRateChangeFnZtA();
      this.zrzyRateChangeFnZt();
      this.ZRzyRateChangeFnZtA();
      this.zyjxZyFn();
      this.zyjxZyZBFn();
      this.scollListFnZt();
      this.scollListFnZt1();
      this.scollListFnZt2();
      this.scollListFnZt3();
      this.sxjdBFn();
      this.sbzzFn();
      this.sjsbzFn();
      this.sxxmFn();
      this.sxykxmLfN();
      this.hzqyslfN();
      this.hzqylbBFn();
      this.hzqyslccBFn()
      this.sxykxmLfNA();
      this.sxykxmLfN1()
      this.sxykxmLfN2()
      this.sxykxmLfN3()
      this.hzqyrsblblfN()
      this.qyjzsbsfN()
      this.qyjzzjzfN()
      this.qyjsjssjsfN()
      this.xqhzyfcgfN()
      this.xqhzblFn()
      this.cyjdslfN()
      this.xscyblFn()
      this.xscyzzefN()
      this.cykckssfN()
      this.cykcxxrsfN()
       this.cygssfN()
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
    // 总体变动率
    RateChangeFnZt() {
      let arr = [];
      for (var i = 0; i < 10; i++) {
        arr.push(this.getRandom(0, 20));
      }
      arr.sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 10; i++) {
        i % 2 ? this.arr1.push(arr[i]) : this.arr2.push(arr[i]);
      }
      this.RateChangeFn("申请专业变动比率", this.arr2, "studentNum");
      this.RateChangeFn("专业变动比率", this.arr1, "studentNumA");
    },
    // 申请转出柱形图
    zyRateChangeFnZt() {
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      for (var i = 0; i < 10; i++) {
        arr.push(this.getRandom(0, 20));
      }
      arr.sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 10; i++) {
        i % 2 ? arr1.push(arr[i]) : arr2.push(arr[i]);
      }
      this.barChartsFn("专业转出申请人数", arr2, "studentNum9", 100, 0, "人");
      this.barChartsFn("专业转出人数", arr1, "studentNumC", 100, 0, "人");
    },
    // 申请转出折线图
    zyRateChangeFnZtA() {
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      for (var i = 0; i < 10; i++) {
        arr.push(this.getRandom(0, 10));
      }
      arr.sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 10; i++) {
        i % 2 ? arr1.push(arr[i]) : arr2.push(arr[i]);
      }
      this.RateChangeFn("专业转出申请率", arr2, "studentNumB");
      this.RateChangeFn("专业转出率", arr1, "studentNumD");
    },
    // 申请转RU柱形图
    zrzyRateChangeFnZt() {
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      for (var i = 0; i < 10; i++) {
        arr.push(this.getRandom(0, 20));
      }
      arr.sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 10; i++) {
        i % 2 ? arr1.push(arr[i]) : arr2.push(arr[i]);
      }
      this.barChartsFn("专业转入申请人数", arr2, "studentNumQ", 100, 0, "人");
      this.barChartsFn("专业转入人数", arr1, "studentNumCQ", 100, 0, "人");
    },
    // 申请转ru折线图
    ZRzyRateChangeFnZtA() {
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      for (var i = 0; i < 10; i++) {
        arr.push(this.getRandom(0, 10));
      }
      arr.sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 10; i++) {
        i % 2 ? arr1.push(arr[i]) : arr2.push(arr[i]);
      }
      this.RateChangeFn("专业转入申请率", arr2, "studentNumBQ");
      this.RateChangeFn("专业转入率", arr1, "studentNumDQ");
    },
    zyjxZyFn() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(3, 15));
      }
      this.barChartsFn(
        "专业教学资源库数量",
        arr,
        "studentNumDQW",
        100,
        0,
        "个"
      );
    },
    zyjxZyZBFn() {
      let arr = [];
      // 国家级10%-30%，省级20-50%，校级20-50%（合计为100%）
      arr.push(this.getRandom(10, 30));
      arr.push(this.getRandom(20, 50));
      let lastData = 100 - arr[0] - arr[1];
      arr.push(lastData);
      let legend = ["国家级", "省级", "校级"];
      let sdata = [];
      for (var i = 0; i < 3; i++) {
        sdata.push({
          name: legend[i],
          value: arr[i]
        });
      }
      this.pieChartsFn("专业教学资源库数量及占比", sdata, "studentNum3W");
    },
    // 申请转RU柱形图
    scollListFnZt() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(3, 15));
      }
      this.barChartsFn("专业教学资源库数量", arr, "scollList", 50, 0, "个");
    },
    // 申请转RU柱形图
    scollListFnZt1() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(450, 4500));
      }
      this.barChartsFn(
        "校内实训基地建筑面积",
        arr,
        "scollListA",
        5000,
        0,
        "平方米"
      );
    },
    scollListFnZt2() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(1, 8));
      }
      this.barChartsFn("校外实训基地数量", arr, "scollListB", 10, 0, "个");
    },
    scollListFnZt3() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(450, 4500));
      }
      this.barChartsFn(
        "校外实训基地建筑面积",
        arr,
        "scollListC",
        5000,
        0,
        "平方米"
      );
    },
    // 实训基地数量及占比
    sxjdBFn() {
      let arr = [];
      // 国家级10%-30%，省级20-50%，校级20-50%（合计为100%）
      arr.push(this.getRandom(10, 30));
      arr.push(this.getRandom(20, 50));
      let lastData = 100 - arr[0] - arr[1];
      arr.push(lastData);
      let legend = ["国家级", "省级", "校级"];
      let sdata = [];
      for (var i = 0; i < 3; i++) {
        sdata.push({
          name: legend[i],
          value: arr[i]
        });
      }
      this.pieChartsFn("实训基地数量及占比", sdata, "sxjd");
    },
    // 设备总值
    sbzzFn() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(3, 45));
      }
      this.barChartsFn("设备总值", arr, "sbzz", 50, 0, "万");
    },
    // 生均仪器设备值
    sjsbzFn() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(1,15));
      }
      this.barChartsFn("生均仪器设备值", arr, "sjsbz", 30, 0, "万");
    },
    // 实训应开项目数
    sxxmFn() {
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      for (var i = 0; i < 10; i++) {
        arr.push(this.getRandom(10, 30));
      }
      arr.sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 10; i++) {
        i % 2 ? arr1.push(arr[i]) : arr2.push(arr[i]);
      }
      for (let i = 0; i < 5; i++) {
        arr3.push((arr1[i] / arr2[i] * 100).toFixed(2));
      }
      this.barChartsFn("实训应开项目数", arr2, "sxykxm", 100, 0, "个");
      this.barChartsFn("实训实开项目数", arr1, "sxskxm", 100, 0, "个");
      this.RateChangeFn("实开项目开出率", arr3, "sxykxmL");
    },
    sxykxmLfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(70, 90));
      }
      this.RateChangeFn("实训室使用率", arr, "sxskxml");
    },
    hzqyslfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(10, 50));
      }
      this.barChartsFn("合作企业数量", arr, "hzqysl", 50, 0, "个");
    },
     hzqylbBFn() {
      let arr = [];
      // 国家级10%-30%，省级20-50%，校级20-50%（合计为100%）
      arr.push(this.getRandom(10, 30));
      arr.push(this.getRandom(20, 50));
      let lastData = 100 - arr[0] - arr[1];
      arr.push(lastData);
      let legend = ["国有", "集体", "私营"];
      let sdata = [];
      for (var i = 0; i < 3; i++) {
        sdata.push({
          name: legend[i],
          value: arr[i]
        });
      }
      this.pieChartsFn("合作企业类别", sdata, "hzqylb");
    },
   hzqyslccBFn() {
      let arr = [];
      // 国家级10%-30%，省级20-50%，校级20-50%（合计为100%）
      arr.push(this.getRandom(10, 30));
      let lastData = 100 - arr[0];
      arr.push(lastData);
      let legend = ["500强", "其他"];
      let sdata = [];
      for (var i = 0; i < 2; i++) {
        sdata.push({
          name: legend[i],
          value: arr[i]
        });
      }
      this.pieChartsFn("合作企业层次及占比", sdata, "hzqyslcc");
    },
    sxykxmLfNA() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(30, 60));
      }
      this.RateChangeFn("合作企业订单培养人数占全日制高职在校生人数比例", arr, "hzqyrsb");
    },
   sxykxmLfN1() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(60, 75));
      }
      this.RateChangeFn("合作企业接受顶岗实习学生比例", arr, "hzqyslccbl");
    },
  sxykxmLfN2() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(60, 90));
      }
      this.RateChangeFn("合作企业录用应届毕业生比例", arr, "hzqyrsbl");
    },
  sxykxmLfN3() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(15, 40));
      }
      this.RateChangeFn("校企合作共同开发课程门数占开设课程总门数比例", arr, "hzqyslccblll");
    },
   hzqyrsblblfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(3, 15));
      }
      this.barChartsFn("专业拥有校企合作共同开发教材数", arr, "hzqyrsblbl", 30, 0, "个");
    },
    qyjzsbsfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(10, 30));
      }
      this.barChartsFn("企业捐赠设备数量", arr, "qyjzsbs", 50, 0, "个");
    },
    qyjzzjzfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(10, 90));
      }
      this.barChartsFn("企业捐赠设备总价值", arr, "qyjzzjz", 100, 0, "万");
    },
    qyjsjssjsfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(10, 15));
      }
      this.barChartsFn("企业接受教师企业实践数量", arr, "qyjsjssjs", 30, 0, "个");
    },
    xqhzyfcgfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(0, 15));
      }
      this.barChartsFn("校企合作研发成果数量", arr, "xqhzyfcg", 30, 0, "个");
    },

    xqhzblFn() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(30, 70));
      }
      this.RateChangeFn("校企合作研发成果占研发成果比率", arr, "xqhzbl");
    },
    cyjdslfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(0, 15));
      }
      this.barChartsFn("创业基地数量", arr, "cyjdsl", 30, 0, "个");
    },
     xscyblFn() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(10, 45));
      }
      this.RateChangeFn("学生创业比例", arr, "xscybl");
    },
     xscyzzefN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(10, 25));
      }
      this.barChartsFn("学校创业资助额", arr, "xscyzze", 50, 0, "万");
    },
   cykckssfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(0, 15));
      }
      this.barChartsFn("创业课程开设数", arr, "cykckss", 30, 0, "个");
    },
     cykcxxrsfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(300, 800));
      }
      this.barChartsFn("创业课程学习人数", arr, "cykcxxrs", 300, 1000, "人");
    },
     cygssfN() {
      let arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(this.getRandom(3, 20));
      }
      this.barChartsFn("创业公司数", arr, "cygss", 0, 30, "个");
    },
    // 折线图
    RateChangeFn(legend, datay1List, el) {
      let self = this;
      let series = [
        {
          name: legend,
          type: "line",
          data: datay1List
        }
      ];
      let dataxList = ["2013", "2014", "2015", "2016", "2017"];
      setTimeout(() => {
        self.$ChartUtil.drawChart(
          el,
          "",
          legend,
          "",
          series,
          dataxList,
          false,
          {
            yAxis: [
              {
                type: "value",
                name: "（%）",
                max: 100,
                min: 0
              }
            ],
            tooltip: {
              trigger: "axis",
              formatter: "{b}<br/>{a0}:{c0}%"
            },
            grid: {
              x: 50,
              y: 40,
              x2: 30,
              y2: 60
            },
            customattrs: { xrotate: 0 }
          },
          self
        );
      }, 150);
    },
    // 柱形图
    barChartsFn(legend, datay1List, el, max, min, unit) {
      let self = this;
      let series = [
        {
          name: legend,
          type: "bar",
          data: datay1List
        }
      ];
      let dataxList = ["2013", "2014", "2015", "2016", "2017"];
      setTimeout(() => {
        self.$ChartUtil.drawChart(
          el,
          "",
          legend,
          "",
          series,
          dataxList,
          false,
          {
            yAxis: [
              {
                type: "value",
                name: "（" + unit + "）",
                max: max,
                min: min
              }
            ],
            tooltip: {
              trigger: "axis",
              formatter: "{b}<br/>{a0}:{c0}" + unit
            },
            grid: {
              x: 50,
              y: 40,
              x2: 30,
              y2: 60
            },
            customattrs: { xrotate: 0 }
          },
          self
        );
      }, 150);
    },
    // 饼状图
    pieChartsFn(legend, sdata, el) {
      let self = this;
      let series = [
        {
          name: legend,
          type: "pie",
          radius: "55%",
          label: {
            normal: {
              show: true,
              formatter: "{b}({c}%)"
              // position: 'inside'
            }
          },
          data: sdata
        }
      ];
      setTimeout(() => {
        self.$ChartUtil.drawChartNoXY(
          el,
          "",
          [],
          self.$ChartUt.VERTICAL,
          series,
          [],
          {},
          self
        );
      }, 150);
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
</style>
