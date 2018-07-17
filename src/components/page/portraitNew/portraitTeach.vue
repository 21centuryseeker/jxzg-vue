<template>
    <div class="mainContent1 mainContentA">
      <div class="filterBox marginBto24" v-if="flagUser">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="10">
                            <el-input class="zgInput" size="small"  placeholder="请输入教职工号进行搜索" clearable  v-model.trim="filterText"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo">搜索</el-button>
                        </el-col>
                </el-row>
            </el-card>
         </div>
          <div v-if="teachNull" class="nodataPicAB">
              <img src="../../../assets/empty.jpg"/>
          </div>
          <div v-else>
             <div class="infoBox marginBto24">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <div class="pic"><img src="../../../assets/jiaoshihuaxiang.png" /></div>
                                <p class="name">{{teachBaseInfo.xm}}</p>
                                <p class="num">工号 {{teachBaseInfo.zgh}}</p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList">
                                <div class="deptOptions">
                                        <span>所在部门</span>
                                        <el-select v-model="value" size="small" @change="jobSwitch">
                                        <el-option
                                        v-for="item in deptOptions"
                                        :key="item.dept_id"
                                        :label="item.dept_name"
                                        :value="item.dept_id">
                                        </el-option>
                                        </el-select>
                                </div>
                                <ul class="clearfix">
                                    <li><span>职称：</span> {{teachBaseInfo.zc}}</li>
                                    <li><span>学位：</span>{{teachBaseInfo.xw}}</li>
                                    <li><span>政治面貌：</span>{{teachBaseInfo.zzmm}}</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>籍贯： </span>{{teachBaseInfo.jg}}</li>
                                    <li><span>学历：</span>{{teachBaseInfo.xl}}</li>
                                    <li><span>民族：</span>{{teachBaseInfo.mz}}</li>
                                 </ul>
                                 <ul class="clearfix">
                                    <li><span>状态： </span>{{teachBaseInfo.zt}}</li>
                                    <li><span>任职时间： </span>{{teachBaseInfo.ksgzsj}}--{{teachBaseInfo.lzsj}}</li>
                                    <li><span>出生日期：</span>{{teachBaseInfo.csrq}}</li>
                                 </ul>
                                 <ul class="clearfix">
                                    <li><span>编制：</span>{{teachBaseInfo.bz}}</li>
                                    <li><span>工作年限： </span>{{teachBaseInfo.gznx}}</li>
                                    <li><span>身份证号：</span> {{teachBaseInfo.sfzh}}</li>
                                 </ul>
                            </div>
                        </el-col>
                </el-row>
            </el-card>
         </div>
     
      <div>
           <div class="showInfo marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                  
                    <div class="showInfoList">
                          <div class="nodataPicAB" v-if="depedIdFlag">
                              <img src="../../../assets/empty.jpg"/>
                          </div>            
                          <el-row v-else :gutter="20">
                            <el-col :span="8">
                                <div class="showInfoItem1">
                                 <el-card class="box-card">
                                     <p class="num">{{countCard.kcs}}</p>
                                     <p class="name">课程数量(个)</p>
                                 </el-card>
                                </div>
                            </el-col>
                             <el-col :span="8">
                                 <div class="showInfoItem2">
                                  <el-card class="box-card">
                                     <p class="num">{{countCard.xsh}}</p>
                                    <p class="name">学生数(个)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="8">
                                   <div class="showInfoItem3">
                                  <el-card class="box-card">
                                     <p class="num">{{countCard.bjs}}</p>
                                    <p class="name">班级数(个)</p>
                                 </el-card>
                                  </div>
                            </el-col>
                              <el-col :span="8">
                                   <div class="showInfoItem4">
                                 <el-card class="box-card">
                                     <p class="num">{{countCard.ksl}}</p>
                                     <p class="name">课时量(个)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                             <el-col :span="8">
                                    <div class="showInfoItem5">
                                  <el-card class="box-card">
                                     <p class="num">{{countCard.zks}}</p>
                                    <p class="name">周课时(个)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="8">
                                <div class="showInfoItem6">
                                  <el-card class="box-card">
                                     <p class="num">{{countCard.kthds}}</p>
                                    <p class="name">课堂活动数(个)</p>
                                 </el-card>
                                   </div>
                            </el-col>
                                 <el-col :span="8">
                                        <div class="showInfoItem7">
                                  <el-card class="box-card">
                                     <p class="num">{{countCard.kstgl}}</p>
                                    <p class="name">历来考试通过率(%)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="16">
                                     <div class="showInfoItem8">
                                  <el-card class="box-card">
                                     <p class="num">{{countCard.qdl}}</p>
                                    <p class="name">签到率（%）处于{{countCard.qdlsp}}水平</p>
                                 </el-card>
                                 </div>
                            </el-col>
                          </el-row >
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="showInfoPic">
                        <div class="titleName">综合评价</div>
                         <el-card class="box-card">
                             <div class="textTitle">本年度能力</div>
                             <template v-if="getRadarDataFlag1">
                                <div class="nodataPicAB" style="height:342px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div class="yearCapacity" id="yearCapacityBox" key="101"></div>
                             </template> 
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

        <div class="sorePicBox marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                   <div class="showInfoPic">
                         <el-card class="box-card">
                             <div class="textTitle">得分</div>
                              <template v-if="getRadarDataFlag2">
                                <div class="nodataPicAB" style="height:480px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div class="soreTeachPicEcharts" id="soreTeach" key="102"></div>
                             </template> 
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
               <div class="soreTable">
                    <el-card class="box-card">
                        <template v-if="teachScoreTableDataFlag">
                          <div class="nodataPicAB" style="height:342px">
                            <img src="../../../assets/empty.jpg" />
                          </div> 
                        </template>  
                        <template v-else>
                        <!-- <el-table :data="teachScoreTableData"  style="width: 100%">
                            <el-table-column  prop="type_name" label="类别" align="left"> </el-table-column>
                              <el-table-column  prop="type_value"  label="教职工得分"  align="center"></el-table-column>
                              <el-table-column prop="type_value1"  label="同部门教职工得分" align="center"> </el-table-column>
                          </el-table> -->
                         <table class="special_table" width="100%">
                          <thead>
                            <tr>
                            <th align="left">类别</th>
                            <th align="center">教职工得分</th>
                            <th align="center">同部门教职工得分</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in teachScoreTableData" :key="index">
                            <td>{{item.type_name}}</td>
                            <td align="center">{{item.type_value}}</td>
                            <td align="center">{{item.type_value1}}</td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- 分页 -->
                        <!-- <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px"  @current-change = "getCurrentPageScore">
                        </el-pagination> -->

                       </template> 
                    </el-card>
                </div>
                </el-col>
          </el-row>
        </div>

        <div class="teachBox  marginBto24">
            <div class=""><span class="marginR15 titleName">教学 </span>
                 <el-select v-model="teachSelect" filterable placeholder="请选择" style="margin-bottom:15px">
                    <el-option
                    v-for="item in teachSelectoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
             <el-row :gutter="20">
                <el-col :span="12">
                    <div class="coursePic">
                        <el-card class="box-card">
                            <div class="textTitle">授课满意度</div>
                             <template v-if="teachDegreeFlag">
                              <div class="nodataPicAB" style="height:318px">
                                <img src="../../../assets/empty.jpg" />
                              </div> 
                            </template>  
                             <template v-else>
                                 <div class="teachDegreeEcharts" id="teachDegree" key="104"></div>
                             </template> 
                        </el-card>
                    </div>
                    <div class="showInfoList">
                         <el-row :gutter="20">
                           <el-col :span="8">
                                    <div class="showInfoItem3">
                                  <el-card class="box-card">
                                     <p class="num">{{pleased.sxqmyl?pleased.sxqmyl:'-'}}</p>
                                    <p class="name">本学期满意度</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="8">
                                <div class="showInfoItem2">
                                  <el-card class="box-card">
                                     <p class="num">{{pleased.bxqmyl?pleased.bxqmyl:'-'}}</p>
                                    <p class="name">上学期满意度</p>
                                 </el-card>
                                   </div>
                            </el-col>
                                 <el-col :span="8">
                                        <div class="showInfoItem7">
                                  <el-card class="box-card">
                                     <p class="num">{{pleased.pmqs?pleased.pmqs:'-'}}</p>
                                    <p class="name">排名趋势</p>
                                 </el-card>
                                 </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="teachTOP">
                         <el-card class="box-card">
                            <div class="textTitle">授课满意度月度TOP5</div>
                            <div class="topList" >
                             <template v-if="TOP5ListFlag">
                              <div class="nodataPicAB nodataPicAB_small" >
                                <img src="../../../assets/empty.jpg" />
                              </div> 
                            </template>  
                              <template v-else v-for="(item,index) in TOP5List">
                                <div class="topListItem clearfix" :key="index">
                                    <span class="number">{{item.pm}}</span>
                                    <span class="topName">{{item.xm}}</span>
                                    <span class="month">{{item.yf}}月</span>
                                </div>
                              </template>

                            </div>
                        </el-card>
                    </div>
                </el-col>
                 <el-col :span="12">
                      <div class="teachPic teachPicCard">
                         <el-card class="box-card">
                             <div class="textTitle">教学工作量</div>
                              <template v-if="teachWorkEchartsFlag">
                              <div class="nodataPicAB" style="height:318px">
                                <img src="../../../assets/empty.jpg" />
                              </div> 
                            </template>  
                             <template v-else>
                                 <div class="teachWorkEcharts">   
                                    <div  id="teachWork" key="105"></div>    
                                    <div  id="teachWork1" key="106"></div>              
                                  </div>
                             </template> 
                             
                         </el-card>
                    </div>
                    <div class="teachPic teachPicCardA">
                         <el-card class="box-card">
                             <div class="textTitle">学期教学工作量</div>
                               <template v-if="WorkBoxFlag">
                              <div class="nodataPicAB" style="height:378px">
                                <img src="../../../assets/empty.jpg" />
                              </div> 
                            </template>  
                            <template v-else>
                             <div class="WorkEcharts" id="WorkBox" key="107"></div>
                             </template>
                         </el-card>
                    </div>
                 </el-col>
              </el-row>
        </div>

       <div class="Loan marginBto24">
             <el-card class="box-card">
                <div class="textTitle">个人教学能力评价情况</div>
                <div class="portraitTable">
                  <el-table :data="teachLoanTableData"  style="width: 100%">
                       <el-table-column  prop="zbmc" label="指标" > </el-table-column>
                        <el-table-column  prop="grpj"  label="个人指标"  align="center"></el-table-column>
                        <el-table-column  label="相比去年" align="center">
                            <template slot-scope="scope">
                                    <span class="span_state style_three" v-if="scope.row.xbqn==1">上升</span>
                                    <span class="span_state style_tow" v-else-if="scope.row.xbqn==0">持平</span>
                                    <span class="span_state style_one" v-else>下降</span>
                                </template>
                         </el-table-column>
                        <el-table-column prop="djrs"  label="全校该等级及以上教师人数" align="center"> </el-table-column>
                    </el-table>

                </div>
            </el-card>
        </div>

         <div class="sorePicBox marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                      <div class="showPicBox showPicBoxA showPicBoxNBorder showPicBoxbg">
                           <el-row >
                                    <el-col :span="8">
                                        <div class="xqItem xqItemA">
                                            <p class="num">{{scientificTJ.kyzf?scientificTJ.kyzf:'-'}}</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>科研总分</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem">
                                            <p class="num">{{scientificTJ.bzf?scientificTJ.bzf:'-'}}</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>标准分</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem xqItemB">
                                            <p class="num">{{scientificTJ.yxpjf?scientificTJ.yxpjf:'-'}}</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>专业大类平均分</p>
                                        </div>
                                    </el-col>
                                 </el-row>

                            <div class="schoolContent">
                                    <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="schoolBox schoolBox">
                                            <p class="title">
                                               <span class="round"> <i class="iconfont">&#xe627;</i></span>
                                                专业大类排名</p>
                                            <p class="number">{{scientificTJ.yxpm?scientificTJ.yxpm:'-'}}</p>
                                            <p class="text">相比上年度提高{{scientificTJ.yxpmxbqn?scientificTJ.yxpmxbqn:'-'}}名</p>
                                        </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="schoolBox schoolBoxA">
                                                <p class="title">
                                                     <span class="round"> <i class="iconfont">&#xe627;</i></span>全校排名</p>
                                                <p class="number">{{scientificTJ.qxpm?scientificTJ.qxpm:'-'}}</p>
                                                <p class="text">相比上年度提高{{scientificTJ.qxpmxbqn?scientificTJ.qxpmxbqn:'-'}}名</p>
                                            </div>
                                        </el-col>
                                </el-row>
                            </div>

                      </div>
                </el-col>
                <el-col :span="12">
                   <div class="showInfoPic">
                         <el-card class="box-card">
                             <div class="textTitle">科研能力对比</div>
                              <template v-if="getRadarDataFlag3">
                                <div class="nodataPicAB" style="height:342px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div  class="scientEcharts" id="scientBox" key="103"></div>
                             </template>      
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

        <div class="showCard marginBto24">
             <el-card class="box-card">
               <ul class="clearfix">
                    <li>
                        <p class="name">鉴定成果数</p>
                         <p class="number"><span>{{scientificCg.jdcgs?scientificCg.jdcgs:'-'}}</span>相比上年度：{{scientificCg.jdcgsper?scientificCg.jdcgsper:'-'}}%</p>
                    </li>
                     <li>
                        <p class="name">成果获奖数</p>
                         <p class="number"><span>{{scientificCg.cghjs?scientificCg.cghjs:'-'}}</span>相比上年度：{{scientificCg.cghjsper?scientificCg.cghjsper:'-'}}%</p>
                    </li>
                     <li>
                         <p class="name">科研项目数</p>
                         <p class="number"><span>{{scientificCg.kyxms?scientificCg.kyxms:'-'}}</span>相比上年度：{{scientificCg.kyxmsper?scientificCg.kyxmsper:'-'}}%</p>
                    </li>
                     <li>
                         <p class="name">科研论文数</p>
                         <p class="number"><span>{{scientificCg.kylws?scientificCg.kylws:'-'}}</span>相比上年度：{{scientificCg.kylwsper?scientificCg.kylwsper:'-'}}</p>
                    </li>
                     <li>
                        <p class="name">专利数</p>
                         <p class="number"><span>{{scientificCg.zls?scientificCg.zls:'-'}}</span>相比上年度：{{scientificCg.zlsper?scientificCg.zlsper:'-'}}%</p>
                    </li>
                     <li>
                        <p class="name">著作数</p>
                         <p class="number"><span>{{scientificCg.zzs?scientificCg.zzs:'-'}}</span>相比上年度：{{scientificCg.zzsper?scientificCg.zzsper:'-'}}%</p>
                    </li>
                     <li>
                        <p class="name">软件著作权数</p>
                         <p class="number"><span>{{scientificCg.rjzzqs?scientificCg.rjzzqs:'-'}}</span>相比上年度：{{scientificCg.rjzzqsper?scientificCg.rjzzqsper:'-'}}%</p>
                    </li>
                     <li>
                        <p class="name">美术作品数</p>
                         <p class="number"><span>{{scientificCg.mszps?scientificCg.mszps:'-'}}</span>相比上年度：{{scientificCg.mszpsper?scientificCg.mszpsper:'-'}}%</p>
                    </li>
                     <li>
                        <p class="name">音乐作品数</p>
                         <p class="number"><span>{{scientificCg.yyzps?scientificCg.yyzps:'-'}}</span>相比上年度：{{scientificCg.yyzpsper?scientificCg.yyzpsper:'-'}}%</p>
                    </li>
                </ul>
            </el-card>
        </div>

         <div class="salaryPic">
             <div class="titleName">薪资</div>
                <el-card class="box-card">
                  <template v-if="salaryBoxFlag">
                    <div class="nodataPicAB" style="height:342px">
                    <img src="../../../assets/empty.jpg" />
                  </div> 
                  </template>
                  <template v-else>
                     <div class="salaryEcharts" id="salaryBox" key="108"></div>
                  </template>   
                   
                </el-card>
        </div>
      </div>
       

   </div>
    
 </div>

</template>
<script>
export default {
  data () {
    return {
      userId: '',
      value: '',
      deptId: '',
      zgh: '',
      deptOptions: [],
      teachBaseInfo: [], // 教师基本信息
      countCard: [], // 卡片统计个数
      teachScoreTableData: [], // 教职工得分
      teachSelectoptions: [{ value: '2016-2017-1' }], // 教学下拉菜单
      teachSelect: '2016-2017-1',
      pleased: [], // 满意度数组
      TOP5List: [],
      teachLoanTableData: [], // 个人教学能力评价
      resultTypeObj: {
        '1': 'style_three',
        '-1': 'style_one',
        '0':"style_tow"
      },
      scientificTJ: [], // 科研统计
      scientificCg: [], // 科研成果统计
      filterText:'',
      seachTeach:false,
      flagUser:0,
      teachNull:true,
      depedIdFlag:true,
      getRadarDataFlag1:true,
      getRadarDataFlag2:true,
      getRadarDataFlag3:true,
      teachScoreTableDataFlag:true,
      teachDegreeFlag:true,
      teachWorkEchartsFlag:true,
      TOP5ListFlag:true,
      WorkBoxFlag:true,
      salaryBoxFlag:true

    }
  },
  created () {},
  mounted () {
    this.checkUserLevelFn()
    this.departFn()
  },
  methods: {
    ajaxFn(newData){
      let self = this
            self.$ajaxMore(
              'post',
              self.HOST + '/tr/Portrait/web/searchJZG',
              newData,
              (res) => {
                if (res.success) {
                  if (Boolean(res.obj) === true) {
                    if(res.obj.length>0){
                        self.teachNull=false
                        self.userId = res.obj[0].user_id
                        self.deptOptions = res.obj
                        self.value = res.obj[0].dept_id
                        self.deptId = res.obj[0].dept_id
                        self.baseInfoFn()
                    }else{
                       //  显示暂无数据
                       self.teachNull=true
                    }
                    
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
    //  初始化
    departFn () {
      let newData={}
     this.ajaxFn(newData)
    },
    //   查询
    searchInfo () {
     let SearchData={
       searchKey:this.filterText
     }
     this.ajaxFn(SearchData)
    },
    checkUserLevelFn(){
       let self = this
          self.$ajax(
            'post',
            self.HOST + '/tr/Portrait/web/checkUserLevel',
            {},
            (res) => {
              if (res.success) {
               self.flagUser=res.obj.flag
              } else {
                self.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            }
          ) 
    },
    //   基本信息
    baseInfoFn () {
      let self = this
      let paraData = []
      paraData.push(self.userId)
      let newData = {
        id: 1, // 必输
        para: paraData // 数组类型，传入教师职工号
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.teachBaseInfo = []
            self.teachBaseInfo = res.obj[0]
            self.zgh = self.teachBaseInfo.zgh
            //  self.countCardFn()//统计个数信息
            self.downFn()
          } else {
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
        this.countCardFn()//统计个数信息
        this.yearCapacityFn()//本年度能力
        this.soreTeachFn()// 得分
        this.teachScoreTabFn()//得分列表
        this.teachDegreeFn() // 授课满意
        this.Satisfaction()//满意度 的3个
        this.WorkBoxFn()//教学工作量
        this.WorkBoxFn1() //教学工作量
        this.scientBoxFn() // 科研能力
        this.topFn() // 授课满意度Top列表
        this.xqWorkBoxFn() // 学期工作量走势
        this.teachLoanFn() // 个人教学能力评价情况
        this.scientificTJFn() //科研相对比的列表个数
        this.scientificCgFn() //科研统计结果
        this.salaryBoxFn()//薪资
    },
    jobSwitch () {
      let self = this
      self.deptId = self.value
      // self.downFn()
      self.downFn()
    },
    //   统计个数信息
    countCardFn () {
      let self = this
      self.countCard = []
      let newId = self.deptId.toString()
      let newData = {
        id: 7,
        para: [newId, self.zgh]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {              
            if(res.obj.length>0){         
               self.countCard = res.obj[0]
                self.depedIdFlag=false
                //  self.downFn()
            }else{
               self.depedIdFlag=true
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

    // 雷达图----------------------------------------
    RadarFn(newData,id,polar,flag){
      let self=this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getRadarData',
        newData,
        (res) => {
          if (res.success) { 
            if(res.obj.data[0].value.length>0){
                if(flag==1){
                  self.getRadarDataFlag1=false
                }else if(flag==2){
                  self.getRadarDataFlag2=false
                }else if(flag==3){
                  self.getRadarDataFlag3=false
                }
                 setTimeout(() => {
                  let sData = res.obj.data
                  let legend = res.obj.length
                  let series = [
                    {
                      type: 'radar',
                      data: sData
                    }
                  ]
                  self.$ChartUtil.drawChartNoXY(
                    id,
                    '',
                    legend,
                    self.$ChartUt.VERTICAL,
                    series,
                    [],
                    { polar: polar },
                    self
                  )
                 },150)
            }else{
              if(flag==1){
                  self.getRadarDataFlag1=true                            
                }else if(flag==2){
                  self.getRadarDataFlag2=true
                }else if(flag==3){
                  self.getRadarDataFlag3=true
                }
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
    // 本年度能力
    yearCapacityFn () {      
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 10,
        para: [newId, self.zgh]
      }
      let polar = {
          indicator: [
            { name: '教学能力', max: 5 },
            { name: '科研能力', max: 5 },
            { name: '学生管理与服务能力', max: 5 },
            { name: '综合成长能力', max: 5 }
          ]
       }
       self.RadarFn(newData,'yearCapacityBox',polar,1)
    },
    // 得分
    soreTeachFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 8,
        para: [newId, self.zgh]
      }
       let polar = {
              indicator: [
                { name: '考勤情况', max: 5 },
                { name: '课堂活跃度', max: 5 },
                { name: '学习活跃度', max: 5 },
                { name: '教学评价', max: 5 },
                { name: '成绩评价', max: 5 },
                { name: '课程建设', max: 5 },
                { name: '学生掌握程度', max: 5 },
                { name: '教师课后辅导', max: 5 },
                { name: '科研及创新能力', max: 5 }
              ]
            }
             self.RadarFn(newData,'soreTeach',polar,2)
      
    },
     //  科研能力对比
    scientBoxFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 38,
        para: [newId, self.zgh]
      }
       let polar = {
              indicator: [
                { name: '教学能力', max: 5 },
                { name: '科研能力', max: 5 },
                { name: '学生管理与服务能力', max: 5 },
                { name: '综合成长能力', max: 5 }
              ]
            }
            // 
      self.RadarFn(newData,'scientBox',polar,3)
    },
    // 雷达图----------------------------------------

    // 得分列表
    teachScoreTabFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 37,
        para: [newId, self.zgh, newId]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
                self.teachScoreTableDataFlag=false
            }else{
                 self.teachScoreTableDataFlag=true
            }
            self.teachScoreTableData = []
            self.teachScoreTableData = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    //  授课满意度
    teachDegreeFn () {
      let self = this
      let newId = self.deptId.toString()
      //  let xq=2006-1
      let newData = {
        id: 39,
        param: [newId, self.zgh, '2016-2017-1']
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataxList.length>0){
                self.teachDegreeFlag=false
                setTimeout(() => {
                 let legendData = res.obj.dataxList
                  let sdata = res.obj.datayList
                  let series = [
                    {
                      name: '',
                      type: 'pie',
                      color: [
                        '#70ad47',
                        '#ed7d31',
                        '#ffc000',
                        '#a5a5a5',
                        '#70ad47',
                        '#dd6969',
                        '#00a6a6'
                      ],
                      data: sdata
                    }
                  ]

                  self.$ChartUtil.drawChartNoXY(
                    'teachDegree',
                    '',
                    legendData,
                    self.$ChartUt.VERTICAL,
                    series,
                    [],
                    {},
                    self
                  )
                },150)
            }else{
                self.teachDegreeFlag=true
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

    // 教学工作量走势
    WorkBoxFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 40,
        param: [newId, self.zgh,'2016-2017-1']
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {  
            if(res.obj.dataxList.length>0){
               self.teachWorkEchartsFlag=false
               setTimeout(() => {
               self.averageEchartsfn(
                res.obj.title,
                res.obj.dataxList,
                res.obj.datayList,
                document.getElementById('teachWork'),
                ['#ed7d31', '#f8f1dd']
              )},150)
            } else{
                self.teachWorkEchartsFlag=true
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
    // 教学工作量走势
    WorkBoxFn1 () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 41,
        param: [newId, self.zgh,'2016-2017-1']
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataxList.length>0){
              setTimeout(() => {
                self.averageEchartsfn(
                res.obj.title,
                res.obj.dataxList,
                res.obj.datayList,
                document.getElementById('teachWork1'),
                ['#70ad47', '#f8f1dd']
              )
              },150)
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
    averageEchartsfn (title, leg, data, ele, color) {
      var option = {
        title: {
          text: title,
          x: 'center',
          y: 'bottom',
          textStyle: {
            fontSize: 16,
            color: '#37474f',
            fontWeight: 400
          }
        },
        color: color || [],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: leg
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center',
                textStyle: {
                  fontSize: '30',
                  fontWeight: 700
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          }
        ]
      }
      
      var myChart = this.$echarts.init(ele)
      myChart.setOption(option)  
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    // 满意度 的3个
    Satisfaction(){
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 12,
        para: [newId, self.zgh,'2016-2017-1']
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
             self.pleased = []
            if(res.obj.length>0){
               self.pleased = res.obj[0]  
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

    // 授课满意度Top列表
    topFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 13,
        para: [newId, self.zgh]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
             
            if(res.obj.length>0){
               self.TOP5ListFlag=false
            }else{
              self.TOP5ListFlag=true
            }
            self.TOP5List = []
            self.TOP5List = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    // 学期工作量走势
    xqWorkBoxFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 17,
        param: [newId, self.zgh]
      }
      self.$ajaxMore('post', self.HOST + '/tr/Portrait/web/getBarList', newData, (res) => {
        if (res.success) { 
          if(res.obj.dataX){
            if(res.obj.datayList.length>0){
                self.WorkBoxFlag=false
                setTimeout(() => {
                let xData = res.obj.dataX
                let ydata = res.obj.datayList
                let series=[{
                          type:"line",
                          data:ydata
                        }]
                  self.$ChartUtil.drawChartNoLegend('WorkBox', '', series, xData, '',{}, self)
                },150)
              }
            }else{
              self.WorkBoxFlag=true
            }                  
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    //  个人教学能力评价情况
    teachLoanFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 18,
        para: [newId, self.zgh]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.teachLoanTableData = []
            self.teachLoanTableData=res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    // 科研相对比的列表个数
    scientificTJFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 19,
        para: [newId, self.zgh]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
             self.scientificTJ = []
            if(res.obj.length>0){  
                self.scientificTJ = res.obj[0]
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
    // 科研统计结果
    scientificCgFn () {
      let self = this
      let newId = self.deptId.toString()
      let newData = {
        id: 21,
        para: [newId, self.zgh]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
             self.scientificCg = []
            if(res.obj.length>0){
                self.scientificCg = res.obj[0]
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
    // 薪资
    salaryBoxFn () {
      let self = this
       let newId = self.deptId.toString()
      let newData = {
        id: 24,
        param: [self.zgh]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getBarList',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataX.length>0){
              self.salaryBoxFlag=false
              setTimeout(() => {
                let xData = res.obj.dataX
                let ydata = res.obj.datayList
               let series=[{
                  type:"line",
                  data:ydata
                 }]
              self.$ChartUtil.drawChartNoLegend('salaryBox', res.obj.title, series, xData, '',{}, self)
              },150)
            }else{
              self.salaryBoxFlag=true
            }             
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
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
.showInfoItem3 .box-card {
  background-color: #70ad47;
}
.showInfoItem5 .box-card {
  background-color: #a6a6a6;
}
.showInfoItem6 .box-card {
  background-color: #4472c4;
  color: #4472c4;
}
.showInfoItem7 .box-card {
  background-color: #ed7d31;
}
.showInfoItem8 .box-card {
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
.showInfoList {
  margin-top: 24px;
}
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
  height: 393px;
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
</style>
