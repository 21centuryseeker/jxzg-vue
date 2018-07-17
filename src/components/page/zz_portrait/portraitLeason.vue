<template>
    <div class="mainContent1 mainContentA">
        <div class="filterBox marginBto24">
            <el-card class="box-card">
              <div class="w_seachGroup">
               <ul class=" clearfix">
                  <li>
                    <div class="title_seach">院系</div>
                    <div class="title_select">
                      <el-select v-model="valueYx" placeholder="请选择"  size="small"  style="width: 300px" filterable @change="selectYXFn">
                      <el-option
                        v-for="item in optionsYx"
                        :key="item.code"
                        :label="item.name"
                        :value="item.code">
                      </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li>
                    <div class="title_seach">专业名称</div>
                    <div class="title_select">
                      <el-select v-model="valueZy" style="width: 300px" size="small"  placeholder="请选择"  filterable :disabled="flagZY" @change="selectZYFn">
                        <el-option
                          v-for="(item,index) in optionsZy"
                          :key="index"
                          :label="item.name"
                          :value="item.code">
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                 <li>
                    <div class="title_seach">课程名称</div>
                    <div class="title_select">
                        <el-select v-model="valueKc"  style="width: 300px" size="small"  placeholder="请选择" filterable :disabled="flagKc_seach">
                        <el-option
                          v-for="item in optionsKc"
                          :key="item.CODE"
                          :label="item.name"
                          :value="item.CODE">
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li style="width:100px; text-align: right;">
                    <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>  
                  </li>
                </ul>
                <!-- <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>   -->
              </div>   
            </el-card>
         </div>
        <div>
      <!-- kecheng 画像的页面 -->
         <div  class="infoBox infoBoxA  marginBto24">
            <el-card class="box-card" :data="baseInfo">
                <el-row :gutter="20" >
                    <el-col :span="6">
                        <div class="infoLeft">
                            <img src="../../../assets/kechenghuaxiang.png" />
                            <p class="leason">{{baseInfo.KCMC}}</p>
                        </div>
                    </el-col>
                    <el-col :span="18"  style="position: relative;">
                        <div class="infoList" style=" padding-bottom: 10px;padding-right:0;padding-top: 35px;"> 
                            <ul class="clearfix">
                                <li><span>课程代码：</span>{{baseInfo.KCDM?baseInfo.KCDM:'-'}}</li>
                                <li><span>授课年级：</span>{{baseInfo.XZ_SKNJ?baseInfo.XZ_SKNJ:'-'}}</li>
                                <li><span>计划学时：</span>{{baseInfo.ZXS?baseInfo.ZXS:'-'}}</li>
                            </ul>     
                             <ul class="clearfix">
                                <li><span>课程类型：</span>{{baseInfo.XZ_KCLX?baseInfo.XZ_KCLX:'-'}}</li>
                                <li><span>授课地点：</span>{{baseInfo.XZ_JXDD?baseInfo.XZ_JXDD:'-'}}</li>
                                <li><span>是否核心课程：</span>{{baseInfo.XZ_SFHXK?baseInfo.XZ_SFHXK:'-'}}</li>
                            </ul>  
                              <ul class="clearfix">
                                <li><span>课程性质：</span>{{baseInfo.XZ_KCXZ?baseInfo.XZ_KCXZ:'-'}}</li>
                                <li><span>考试方式：</span>{{baseInfo.KSFSM?baseInfo.KSFSM:'-'}}</li>
                                <li><span>是否校企合作开发课程：</span>{{baseInfo.XZ_SFXQHZ?baseInfo.XZ_SFXQHZ:'-'}}</li>
                            </ul>                                                                
                        </div>
                    </el-col>
                </el-row>
            </el-card>
        </div>

      <div style="margin-bottom:20px">
            <div class="titleTop" style="margin-bottom:10px">
              学年
               <el-select v-model="valueXq" placeholder="请选择"  size="small"  style="width: 200px" filterable @change="selectXqFn">
                <el-option
                  v-for="item in optionsXq"
                  :key="item.dm"
                  :label="item.mc"
                  :value="item.dm">
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
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <p class="details" style="padding-top:30px">
                          该课程综合得分<span style="color:#70ad47">{{kcNum}}</span>分
                          全校排名<span style="color:#70ad47">{{kcNum}}</span>名
                          全院排名<span style="color:#70ad47">{{kcNum}}</span>名
                          全专业排名<span style="color:#70ad47">{{kcNum}}</span>名
                        </p>
                        <!-- 雷达图 -->
                        <div id="zyZhLD" style="height:360px"></div>
                      </el-col>
                      <el-col :span="12">
                        <table>
                          <tbody>
                            <template v-for="(item,index) in zyZhList">
                              <tr :key="index">
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                              </tr>
                            </template>
                          </tbody>
                        </table>
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
                                  <th>教材名称</th>
                                  <th>版本日期</th>
                                  <th>出版社</th>
                                  <th>第一作者</th>
                                   <th >教材类型</th>                     
                                </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(item, index) in teacherbookData" :key="index">
                                    <td>{{item.JCMC?item.JCMC:'-'}}</td>          
                                    <td>{{item.CBRQ?item.CBRQ:'-'}}</td>
                                    <td>{{item.CBS?item.CBS:'-'}}</td>
                                    <td>{{item.BZZXM?item.BZZXM:'-'}}</td>
                                    <td>{{item.XZ_JCLX?item.XZ_JCLX:'-'}}</td>
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
                                  <th align="left" >是否教育部规划教材</th>
                                   <th align="left" >是否教育部精品教材</th>
                                  <th align="left">是否行业部委统编教材</th>
                                  <th align="left" >是否校企合作教材</th>
                                   <th align="left">是否自编教材</th>  
                                   <th align="left" >是否讲义</th>                      
                                </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(item, index) in teacherbookData1" :key="index">
                                    <td align="left" >{{item.XZ_JCXZ1}}</td>          
                                    <td align="left" >{{item.XZ_JCXZ2}}</td>
                                    <td align="left">{{item.XZ_JCXZ3}}</td>
                                    <td align="left">{{item.XZ_JCXZ4}}</td>
                                    <td align="left">{{item.XZ_JCXZ5}}</td>
                                     <td align="left">{{item.XZ_JCXZ6}}</td>
                                </tr>
                              </tbody>
                            </table>
                              <!-- <el-pagination background  layout="prev, pager, next"  :total="total" v-show="total" style="margin-top: 10px"    @current-change = "getCurrentPage" :current-page="currentPage" :page-size="pageSize">
                          </el-pagination> -->
                        </template>         
                  </div>
              </el-card>             
          </div>



        <div class="studentA marginBto24" v-if="false">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="studntPic">
                         <el-card class="box-card">
                             <div class="textTitle">当前学期课程成绩分布</div>
                            <template v-if="scoreSpeardFlag">
                              <div class="nodataPic_zg" style="height:358px">
                                <img src="../../../assets/empty.jpg" />
                              </div> 
                            </template>
                            <template v-else>
                              <div  class="speardEcharts" style="height:360px" id="scoreSpeard" key="103"></div>
                            </template>      
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="studntTable">
                         <el-card class="box-card">
                             <div class="textTitle">历届成绩对比</div>
                             <template v-if="yxlSpeardFlag">
                              <div class="nodataPic_zg" style="height:358px">
                                <img src="../../../assets/empty.jpg" />
                              </div> 
                            </template>
                             <template v-else>
                               <div class="passEcharts" id="yxlSpeard" key="122"></div>
                             </template>     
                         </el-card>
                    </div>
                </el-col>  
          </el-row>
        </div>


        <div class="studentA marginBto24" v-if="false">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="studntPic">
                         <el-card class="box-card">
                             <div class="textTitle">各年级平均分数对比分析</div>
                            <template v-if="cjSpeardFlag">
                        <div class="nodataPic_zg" style="height:358px">
                        <img src="../../../assets/empty.jpg" />
                      </div> 
                      </template>
                      <template v-else>
                        <div  class="speardEcharts" id="cjSpeard" key="103"></div>
                      </template>      
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="studntTable">
                         <el-card class="box-card"> 
                            <div class="textTitle">全校排名TOP</div>
                              <template v-if="passBoxtopFlag">
                                <div class="nodataPic_zg" style="height:358px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div class="passEcharts special_table" style="height:518px">
                                  <div style="color: #37474f; font-size: 16px; line-height: 24px;"> 全校成绩排名TOP10 </div>
                                 <table>
                                   <thead>
                                    <tr>
                                        <th>全校排名</th>
                                        <th>学生姓名</th>
                                        <th>学生成绩</th>
                                        <th>所在班级</th>                                  
                                    </tr>
                                   </thead>
                                   <tbody>
                                       <template  v-for="(item, index) in top10">
                                        <tr :key="index">
                                          <td>{{index+1}}</td>
                                          <td>{{item.xm}}</td>
                                          <td>{{item.cj}}</td>
                                          <td>{{item.bjdm}}</td>                                  
                                      </tr>
                                       </template>
                                   </tbody>
                                 </table>
                               </div>   
                             </template>     
                         </el-card>
                    </div>
                </el-col> 
          </el-row>
        </div>


                <!--课程授课情况  -->
        <div class="SituationBox" v-if="false">
          <div class="titleName"> 各班级成绩状况对比分析 </div>
            <div class="Situation_title ">
                <template v-for="(item,index) in classOptionData">
                <ul class="clearfix" :key="index">
                    <li class="marginBto24">
                        <el-card class="box-card"> 
                          <div class="classPic" style="height:300px"></div>
                        </el-card> 
                    </li>
                </ul>    
                </template>
            </div>  
        </div> 

        <div class="score marginBto24" v-if="false">
             <el-card class="box-card">
                <div class="textTitle">本学期各班级成绩具体明细</div>
                  <template v-if="tableScoreFlag">
                    <div class="nodataPic_zg" style="height:350px">
                    <img src="../../../assets/empty.jpg" />
                  </div> 
                  </template>
                  <template v-else>
                      <div class="portraitTable">
                            <table class="tableScore">
                                <thead>
                                    <tr>
                                        <th rowspan="2">班级</th>
                                        <th rowspan="2">上课人数</th>
                                        <th rowspan="2">有成绩人数</th>
                                        <th rowspan="2">平均成绩</th>
                                        <th colspan="2" class="corlor1">>=90分</th>
                                        <th colspan="2" class="corlor2">80-90分</th>
                                        <th colspan="2" class="corlor3">70-80分</th>
                                        <th colspan="2" class="corlor4">60-70分</th>
                                        <th colspan="2" class="corlor5">&lt;60分</th>
                                    </tr>
                                    <tr>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template  v-for="(item, index) in tableScore">
                                        <tr :key="index">
                                            <td>{{item.bjdm}}</td>
                                            <td>{{item.zrs}}</td>
                                            <td>{{item.ycjrs}}</td>
                                            <td>{{item.avg}}</td>
                                            <td>{{item.rs1}}</td>
                                            <td>{{item.rs1_}}%</td>
                                            <td>{{item.rs2}}</td>
                                            <td>{{item.rs2_}}%</td>
                                            <td>{{item.rs3}}</td>
                                            <td>{{item.rs3_}}%</td>
                                            <td>{{item.rs4}}</td>
                                            <td>{{item.rs4_}}%</td>
                                            <td>{{item.rs5}}</td>
                                            <td>{{item.rs5_}}%</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
            
                  </template> 
            </el-card>
        </div>


        <div class="studentA marginBto24" v-if="false">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="studntPic">
                         <el-card class="box-card">
                             <div class="textTitle">课程师资人数对比分析</div>
                             <template v-if="leasonBoxFlag">
                                <div class="nodataPic_zg" style="height:385px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div class="leasonEcharts" id="leasonBox" key="101" style="padding-bottom:25px"></div>
                             </template>       
                         </el-card>
                    </div>
                </el-col>
                
                <el-col :span="12" >
                    <div class="studntPic">
                      <el-card class="box-card">
                          <div class="textTitle">当前学期授课教师代课成绩分析</div>
                          <template v-if="kccjFlag">
                            <div class="nodataPic_zg" style="height:385px">
                            <img src="../../../assets/empty.jpg" />
                          </div> 
                          </template>
                          <template v-else>
                            <div class="kccjA" id="kccj" key="109" style="padding-top:25px"></div>
                          </template>       
                      </el-card>
                    </div>   
                </el-col>
          </el-row>
        </div>



</div>
    
 </div>

</template>
<script>
export default {
  data () {
    return {
      dialogVisible:false,
      baseInfo: [], // 课程信息
      FailureAnalysis: [], // 2017届课程不及格人数分析
      tableScore: [],
      filterText: '', // 瘦素课程
      kcdmmc: '',
      flagKc: true,
      numbers:[1,2.3,4,5,6],
      leasonBoxFlag:true,
      passBoxFlag:true,
      scoreSpeardFlag:true,
      szSpeardFlag:true,
      cjSpeardFlag:true,
      yxlSpeardFlag111:true,
      tableScoreFlag:true,
      classOptionData:[],
      classChartDates:[],
      colorIndex:0,
      colorArr: ['#d56290','#70ad47', '#ed7d31', '#ffc000',
        '#4472c4', '#dd6969', '#00a6a6',
        '#6c6fbf', '#62a8ea', '#ffb980',
       
      ],
      top10:[],
      passBoxtopFlag:true,
      jzkcData:[],
      jzPassBoxFlag:true,
      flagUser: 0,// 身份,如果是教师,则为0,校级以上为1
      valueYx:'',
      optionsYx:[],
       optionsZy: [],
      valueZy: '',
      optionsKc: [],
      valueKc: '',
      flagZY:false,
      flagKc_seach:false,
      flagkc:1,
      yxlSpeardFlag:true,
      kccjFlag:true,
      docname:'',
      dtype:'',
      name:'',
      htmlText:'',
      flagWord:true,
      zyZhList:[],//专业雷达图各项得分列表
      zyZhLDFlag:true,//雷达图是否有数据flag
      valueXq:'',//雷达图选择学期
      optionsXq:[],
      teacherbookData:[],//使用教材
      teachbookFlag:true,//使用教材flag
      teacherbookData1:[],//使用教材
      teachbookFlag2:true,//使用教材flag
      

    }
  },
  created () {},
  mounted () {
    // this.checkUserLevelFn()
    // this.getClassDefaultFn();
    //初始化- 获取专业部 专业 课程 默认数据
    this.getYxFn()

  },
  methods: {
    getClassDefaultFn () {
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/searchKC',
        {},
        (res) => {
          if (res.success) {
            if (res.obj) {
              self.kcdmmc = res.obj.KCDM
              self.baseInfoFn() // 课程信息
              self.scoreSpeardFn() // 2017届课程成绩人数分布
              self.cjSpeardFn() // 成绩
              self.yxlSpeardFn() // 优秀率
              self.classOptionDataFn() // 各班级成绩情况
             self.tableScoreFn()//本学期课程成绩具体明细
             self.top10Fn() //全校top10
              self.flagKc = false
            } else {
              self.flagKc = true
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
      // /tr/Portrait/web/checkUserLevel
    checkUserLevelFn () {
      let self = this
      self.$ajax(
        'post',
        self.HOST + '/tr/Portrait/web/checkUserLevel',
        {},
        (res) => {
          if (res.success) {
            // self.flagUser = res.obj.flag
            self.flagUser = 1
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    // 2018-6-19--------------------------------------------------
    //   搜索课程
    searchInfo () {
      let self = this
      self.downFn() //重新更新数据
    },

    downFn(){
      let self =this
      self.baseInfoFn() // 历届成绩分布  
      // self.zyZhFn() //课程雷达图
      self.teacherbookDataFn()//使用教材
      self.teacherbookDataFn1()//教材性质

      // self.yxlSpeardFn() // 优秀率
      // self.leasonEchartsFn() // 历届成绩分布            
      // self.scoreSpeardFn() // 2017届课程成绩人数分布
      // self.classOptionDataFn() // 各班级成绩情况
      // self.tableScoreFn()//本学期课程成绩具体明细
      // self.top10Fn() //全校top10
      // self.wordFn()
      // self.kccjOptionDataFn()
    },

      // 搜素
    // 获取院系
    getYxFn () {
      let self = this
      this.$ajax('post', this.HOST + '/tr/individualPortrait/web/getselectJbxx?id=29', {}, (res) => {
        if (res.success) {
          if(res.obj.length>0){
           self.optionsYx = res.obj
           self.valueYx= res.obj[0].code
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
      // this.flagZY = false
      // this.flagKc_seach=true
      this.valueZy = ''
      this.valueKc=""
      this.getZyFn()
    },

      // 获取专业
    getZyFn () {
      let self = this
      let dataNew = {
        id:30,
        key: self.valueYx,   
      }
      self.$ajax('post', this.HOST + '/tr/individualPortrait/web/getselectJbxx', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
            //  self.flagZY = false
             self.optionsZy = res.obj
             self.valueZy= res.obj[0].code
             self.getKcFn()
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
    selectZYFn () {
      // this.flagKc_seach = true
      this.valueKc = ''
      this.getKcFn()
    },
     // 获取课程
    getKcFn () {
      let self = this
      let dataNew = {
        id:44,
        key: self.valueZy, 
      }
      self.$ajax('post', this.HOST + '/tr/individualPortrait/web/getselectJbxx', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              // self.flagKc_seach = false
              self.optionsKc = res.obj
              self.valueKc=res.obj[0].CODE
              self.flagkc++
              if(self.flagkc==2){
                self.downFn()
                // self.wordFn()
              }
            }else{ 
              self.optionsKc = res.obj
              self.valueKc=''
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


      //   课程信息
    baseInfoFn () {
      let self = this
      let newData = {
        id: 46,
        key: self.valueKc
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getselectJbxx',
        newData,
        (res) => {
          if (res.success) {
             self.baseInfo = []
             self.baseInfo = res.obj[0]    
          } else {
            self.$message({
              message: res.msg + '12112',
              type: 'error'
            })
          }
        }
      )
    },
  
    getXqFn(){
     let self = this
      let dataNew = {
        
      }
      self.$ajax('post', this.HOST + '', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              
              this.optionsXq=res.obj
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
   selectXqFn () {
     
    },
    zyZhFn(){
        let self = this
        let newData = {
          
        }
        self.$ajaxMore(
          'post',
          self.HOST + '',
          newData,
          (res) => {
            this.studentScaleFn('', res.data.legeng, res.data.indicator, res.data.series, document.getElementById('zyZhLD'))
          })
    },
    studentScaleFn (title, leg, ind, data, el) {
      var option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          left: 'right',
          data: leg
        },
        color: [
          '#70ad47',
          '#ed7d31',
          '#ffc000',
          '#4472c4',
          '#a5a5a5',
          '#dd6969',
          '#00a6a6'
        ],
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#999',
              backgroundColor: '#fff',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: ind
        },
        series: data
      }
      var myChart = this.$echarts.init(el)
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },

     // 使用教材
    teacherbookDataFn () {
      let self = this
      let newData = {
        id:43,
        key: self.valueKc,
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getselectJbxx', newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
               self.teachbookFlag=false
               self.teacherbookData = res.obj
            }else{
              self.teachbookFlag=true
              self.teacherbookData = []
            }

            // total 总数 赋给 total

          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
 

     // 使用教材
    teacherbookDataFn1 () {
      let self = this
      let newData = {
        id:45,
        key: self.valueKc,
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getselectJbxx',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
               self.teachbookFlag2=false
               self.teacherbookData1 = res.obj
            }else{
              self.teachbookFlag2=true
              self.teacherbookData1 = []
            }

            // total 总数 赋给 total

          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },


    // 历届成绩分布
    leasonEchartsFn () {
      let self = this
      let newData = {
        id: 10,
        key: self.valueKc
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.legend.length>0){
              self.leasonBoxFlag=false
              let legendData = res.obj.legend
              let sdata = res.obj.datayList
              let series = [
                {
                  name: '',
                  type: 'pie',
                  radius : '70%',
                  center: ['50%', '60%'],
                  color: [
                    '#70ad47',
                    '#ed7d31',
                    '#ffc000',
                    '#a5a5a5 ',
                    '#70ad47',
                    '#dd6969',
                    '#00a6a6'
                  ],
                  label: {
                    normal: {
                      show: true,
                      formatter: '{b}({c}人)'
                      // position: 'inside'
                    }
                  },
                  data: sdata
                }
              ]
             setTimeout(() => {
              self.$ChartUtil.drawChartNoXY(
                'leasonBox',
                '',
                [],
                self.$ChartUt.VERTICAL,
                series,
                [],
                {},
                self
              )},150)
              }else{
                self.leasonBoxFlag=true
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

    // 历届课程不及格率
    failureRateFn () {
      let self = this
      let newData = {
        id: 3,
        param: [self.valueKc]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getBarList',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataX.length>0){
              self.passBoxFlag=false
               let xList = res.obj.dataX
              let newData = res.obj.datayList
              //   let legend = res.obj.dataX

              let series = [
                {
                  name: '',
                  type: 'bar',
                  itemStyle: {
                    color: '#70ad47'
                  },
                  data: newData
                }
              ]
               setTimeout(() => {
              self.$ChartUtil.drawChartNoLegend(
                'passBox',
                '',
                series,
                xList,
                false,
                { customattrs: { xrotate: 0 } },
                self
              )},150)
            }else{
              self.passBoxFlag=true
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

    // 2017届课程成绩人数分布
    scoreSpeardFn () {
      let self = this
      let newData = {
        id: 11,
        key: self.valueKc
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.legend.length>0){
              self.scoreSpeardFlag=false
              let legendData = res.obj.legend
              let sdata = res.obj.datayList
              let series = [
                {
                  name: '',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  color: [
                    '#70ad47',
                    '#ed7d31',
                    '#ffc000',
                    '#a5a5a5 ',
                    '#70ad47',
                    '#dd6969',
                    '#00a6a6'
                  ],
                  label:{
                    normal: {
                      show: true,
                      formatter: '{b}({c}人)'
                      // position: 'inside'
                    }
                  },
                  data: sdata
                }
              ]
             setTimeout(() => {
              self.$ChartUtil.drawChartNoXY(
                'scoreSpeard',
                '',
                [],
                self.$ChartUt.VERTICAL,
                series,
                [],
                {
              yAxis : [
                {
                  type : 'value',
                  name :'（分数）'
                }
              ],
            },
                self
              )},150)
              }else{
                self.scoreSpeardFlag=true
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
        // 2017届课程不及格人数分析
    top10Fn () {
      let self = this
      let newData = {
        id: 22,
        key: self.valueKc
      }

      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getKc_cj',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              self.passBoxtopFlag=false
            }else{
              self.passBoxtopFlag=true
            }
            self.top10 = []
            self.top10 = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    jzkcFn(){
      let self = this
      let newData = {
        id: 23,
        key: self.valueKc
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getKc_cj',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              self.jzPassBoxFlag=false
            }else{
              self.jzPassBoxFlag=true
            }
            self.jzkcData = []
            self.jzkcData = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    szSpeardFn (){
      let self = this
      let newData = {
        id: 22,
        key: self.valueKc
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.legend.length>0){
              self.szSpeardFlag=false
              let legendData = res.obj.legend
              let  title  =res.obj.title 
              let sdata = res.obj.datayList
              let series = [
                {
                  name: '',
                  type: 'pie',
                  radius: [80, 120],
                  color: [
                    '#70ad47',
                    '#ed7d31',
                    '#ffc000',
                    '#a5a5a5 ',
                    '#70ad47',
                    '#dd6969',
                    '#00a6a6'
                  ],
                  label: {
                    normal: {
                      show: true,
                      formatter: '{b}({c}人)'
                      // position: 'inside'
                    }
                  },
                  data: sdata
                }
              ]
             setTimeout(() => {
              self.$ChartUtil.drawChartNoXY(
                'szSpeard',
                '',
                [],
                self.$ChartUt.VERTICAL,
                series,
                [],
                {},
                self
              )},150)
              }else{
                self.szSpeardFlag=true
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

    // 2017届课程不及格人数分析
    FailureAnalysisFn () {
      let self = this
      let newData = {
        id: 3,
        para: [self.valueKc, '2008', '0']
      }

      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.FailureAnalysis = []
            if(res.obj.length>0){
             self.FailureAnalysis = res.obj[0]
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

    // 2017届课程不及格人数分析
    tableScoreFn () {
      let self = this
      let newData = {
        id: 21,
        key: self.valueKc
      }

      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getKc_cj',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              self.tableScoreFlag=false
            }else{
              self.tableScoreFlag=true
            }
            self.tableScore = []
            self.tableScore = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    //班级成绩
    cjSpeardFn () {
      let self = this
      let newData = {
        id: 18,
        key: self.valueKc
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getBarData',
        newData,
        (res) => {
          if (res.success) {
            self.cjSpeardFlag=false
            let dataxList = res.obj.dataxList
            let datayList = res.obj.datayList
            let legend = res.obj.legend
            let series = [
              {
                name: '',
                type: 'bar',
                color: '#70ad47',
                // barWidth: 27, // 柱图宽度
                data: datayList
              }
            ]
          setTimeout(() => {
              self.$ChartUtil.drawChartNoLegend(
                'cjSpeard',
                '',
                series,
                dataxList,
                false,
                {
              yAxis : [
                {
                  type : 'value',
                  name :'（分数）'
                }
              ],
              grid: {
                x: 30,
                y: 60,
                x2: 30,
                y2: 50
              },
              tooltip : {
                trigger: 'axis',
                formatter : '{b}<br/>{c}分'
            },
               customattrs: {xrotate: 0}
            },
                self
              )},150)
          } else {
           self.cjSpeardFlag=true
          }
        }
      )
    },
    //班级优秀率
   yxlSpeardFn () {
      let self = this
      let newData = {
        id: 19,
        key:self.valueKc
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getSomeBarData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataxList.length>0){
                self.yxlSpeardFlag=false
                let dataxList = res.obj.dataxList
                let datay1List = res.obj.datay1List
                let datay2List = res.obj.datay2List
                let legend = res.obj.legend
                // console.log('legend=============='+legend)
                let series = [
                  {
                    name: legend[0],
                    type: 'line',              
                    data: datay1List
                  },
                  {
                    name: legend[1],
                    type: 'line',               
                    data: datay2List
                  }
                ]
                setTimeout(() => { 
              self.$ChartUtil.drawChart('yxlSpeard', '', legend, '',series, dataxList,false,{
                  yAxis : [
                    {
                      type : 'value',
                      name :'（百分比）',
                       axisLabel : {
                      formatter: '{value} %'
                  }
                    }
                  ],
                  grid: {
                    x: 30,
                    y: 60,
                    x2: 30,
                    y2: 50
                  },
                  tooltip : {
                      trigger: 'axis',
                      // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      // },
                      formatter : '{b}<br/>{c}%'
                  },
                  customattrs: {xrotate: 0}
                },self)
                },150)

            }else{
                self.yxlSpeardFlag=true
            }
          }
        }
      )
    },

    classOptionDataFn(){
      let self = this
      let newData = {
          id: 17, // 必输
          key:self.valueKc
        }
        self.$ajax(
          'post',
          self.HOST + '/tr/individualPortrait/web/getBj_cj',
          newData,
          (res) => {
            if (res.success) {
               self.classOptionData = []
              if(res.obj.length>0){
                  self.classOptionData = res.obj
                  self.classChartDates=res.obj
                  setTimeout(() => {
                      self.showChart()
                  }, 150)
                
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
      showChart(){
         this.colorIndex = 0
        for(var i=0;i<this.classChartDates.length; i++){
            this.colorIndex ++;
            this.classPicFn(this.classChartDates[i],document.getElementsByClassName('classPic')[i],index)
        }  
      },

      classPicFn(dataChart, ele,index){
        let myChart = this.$echarts.init(ele)
        let leg= dataChart.legend
        
        if(index>5){
            this.colorIndex=0
        }
        let option = {
          calculable : true,
          legend: {
              data:leg
          },
          tooltip : {
              trigger: 'axis',
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人<br/>{a2}:{c2}人<br/>{a3}:{c3}%<br/>{a4}:{c4}%'
          },
           grid: {
                x: 40,
                y: 60,
                x2: 40,
                y2: 50
              },
          xAxis : [
              {
                  type : 'category',
                  data :dataChart.bjdmList
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
                  name : '（人）',
                  axisLabel : {
                      formatter: '{value} '
                  }
              },
              {
                  type : 'value',
                  name : '（百分比）',
                  axisLabel : {
                      formatter: '{value} %'
                  }
              }
          ],
          series : [
              {
                  name:leg[0],
                  type:'bar',
                 stack: '总量',
                 itemStyle : { normal: {label : {show: true}}},
                  // barWidth: 20, // 柱图宽度
                  color:this.colorArr[this.colorIndex],
                  data:dataChart.zrsList
              },
              {
                  name:leg[1],
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true}}},
                  // barWidth: 20, // 柱图宽度
                  color:this.colorArr[this.colorIndex+1],
                  data:dataChart.yxrsList
              },
              {
                  name:leg[2],
                  type:'bar',
                   stack: '总量',
                   itemStyle : { normal: {label : {show: true}}},
                  // barWidth: 20, // 柱图宽度
                  color:this.colorArr[this.colorIndex+2],
                  data:dataChart.bjgrsList
              },
          
              {
                  name:leg[3],
                  type:'line',
                  yAxisIndex: 1,
                  color:this.colorArr[this.colorIndex+3],
                  data:dataChart.yxlList,
                  itemStyle: {
                    normal: {
                      lineStyle: {
                        width: 2,
                        type: 'solid' // 'dotted'虚线 'solid'实线
                      },
                      label : {show: true}
                    },
                 
                  }
              },
               {
                  name:leg[4],
                  type:'line',
                  yAxisIndex: 1,
                  color:this.colorArr[this.colorIndex+4],
                  data:dataChart.bjglList,
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

      // 当前学期授课教师代课成绩分析
      kccjOptionDataFn(){
      let self = this
      let newData = {
          // id: 17, // 必输
          kcdm :self.valueKc
        }
        self.$ajaxMore(
          'post',
          self.HOST + '/tr/portrait/web/getJzgSkCj',
          newData,
          (res) => {
            if (res.success) {
               self.kccjData = []
              if(res.obj.length>0){
                self.kccjFlag=false
                  self.kccjData = res.obj[0]
                  setTimeout(() => {
                      self.kccjshowChart()
                  }, 150)
                
              }else{
                 self.kccjFlag=true
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

      kccjshowChart(){
         this.classPicFn1(this.kccjData,document.getElementsByClassName('kccjA')[0],1)
      },

      classPicFn1(dataChart, ele,index){
        let myChart = this.$echarts.init(ele)
        let leg= dataChart.legend
        
        if(index>5){
            this.colorIndex=0
        }
        let option = {
          calculable : true,
          legend: {
              data:leg,
              // x: 'right',
          },
          tooltip : {
              trigger: 'axis',
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}%<br/>{a2}:{c2}%'
          },
           grid: {
                x: 40,
                y: 60,
                x2: 40,
                y2: 50
              },
          xAxis : [
              {
                  type : 'category',
                  data :dataChart.jzgList
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
                  name : '（人）',
                  axisLabel : {
                      formatter: '{value} '
                  }
              },
              {
                  type : 'value',
                  name : '（百分比）',
                  axisLabel : {
                      formatter: '{value} %'
                  }
              }
          ],
          series : [
              {
                  name:leg[0],
                  type:'bar',
                 stack: '总量',
                 itemStyle : { normal: {label : {show: true}}},
                  // barWidth: 20, // 柱图宽度
                  color:this.colorArr[this.colorIndex],
                  data:dataChart.avgList
              },

              {
                  name:leg[1],
                  type:'line',
                  yAxisIndex: 1,
                  color:this.colorArr[this.colorIndex+1],
                  data:dataChart.yxlList,
                  itemStyle: {
                    normal: {
                      lineStyle: {
                        width: 2,
                        type: 'solid' // 'dotted'虚线 'solid'实线
                      },
                      label : {show: true}
                    },
                 
                  }
              },
               {
                  name:leg[2],
                  type:'line',
                  yAxisIndex: 1,
                  color:this.colorArr[this.colorIndex+2],
                  data:dataChart.bjglList,
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

        // 请求文档
    wordFn(){
      let self = this
      self.htmlText=''
       let newData={
         kcdm:self.valueKc,
       }
       self.$ajaxMore(
        'post',
        self.HOST + '/tr/portrait/web/getDocument',
        newData,
        (res) => {
          if (res.success) { 
            if(res.data){
              // self.flagWord=false
              self.docname=res.data.dname
              self.name=res.data.name
              self.dtype=res.data.suffix    
              self.htmlText=self.HOST + '/tr/preview/web/prewWord/'+self.name+'/'+self.dtype
              setTimeout(() => {
               self.dialogVisible=true
              },150)
          }else{
              // self.flagWord=true
              self.$message({
                message: '暂无相关文档',
                type: 'error'
              })
            }
            
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
    },
            // 人才相关文档
    openDialog(){
       let self = this
       self.wordFn()
    },
    // 打印
    printFn(){
       let iframe = document.getElementById('frame')
        iframe.contentWindow.focus()
        iframe.contentWindow.print()
    },

 },
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
.passEcharts table{
width: 100%
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
.link_button{
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
    -webkit-transition: .1s;
    transition: .1s;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.link_button:hover{
      background: #57a026;
    border-color: #57a026;
}
.special_table_box .special_table th,
.special_table_box .special_table td{
  text-align: left;
  padding-left: 10px
}
.mainContent1 .textTitleA {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 10px
}
</style>
