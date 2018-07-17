<template><div id="workbench">
  <div class="tab-control tab-controlFixed clearfix">
    <div class="tab-control-item" v-for="(item,index) in items" >
      <div v-if="index==0" class="active tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>
      <div v-else-if="index!=0" class="tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>
    </div>
  </div>
    <div class="mainContentB paddingTop66">
        <div class="tab-content">
            <div class="titleTop firstTitleTop">
              <span><i class="iconfont">&#xe62b;</i></span>我的目标</div>
            <div class="noticeBox">
                <el-card class="box-card">
                    <div class="noticeL">
                        <i class="iconfont">&#xe6e8;</i>
                        <span>通知</span>
                    </div>
                    <div class="noticeR">
                        <div class="scrollbar">
                            <el-scrollbar :wrapStyle="wrapStyle">
                                <div class="noticeRList" v-for="(targetNotice,index) in targetNotices">
                                  <div class="diogBox">
                                      <div  @click="openDiog(index)"  class="diogMark" ></div>
                                      <el-alert title="" :type="targetNotice.message_type === '1' ? 'info' : 'warning'"  show-icon @close="close(targetNotice.id)">{{targetNotice.content}} </el-alert>
                                  </div>
                                </div>
                                <div v-if="targetNotices.length==0" class="nodata"><img src="../../../assets/empty_tongzhi.jpg"/></div>
                            </el-scrollbar>
                        </div>
                    </div>
                 </el-card>
            </div>
             <el-dialog
              title="通知"
              :visible.sync="dialogVisible"
              width="30%">
              <span>{{contentA}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="goDetailTar">查看详情</el-button>
              </span>
            </el-dialog>
            <div class="countBox">
                <el-row>
                    <el-col :span="6">
                        <div class="targetCount"  @click="$router.push({path: '/slgl-wfzd'})">
                            <el-card class="box-card clearfix">
                                <div class="countBoxL">
                                    <i class="iconfont">&#xe680;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">目标总数</p>
                                    <p class="num">
                                        <span>{{targetComplateData}}</span>
                                        个
                                    </p>
                                </div>
                        </el-card>
                        </div>
                    </el-col>
                    <el-col :span="18">
                          <div class="banner clearfix">
                            <el-carousel indicator-position="none" :autoplay="false">
                                <el-carousel-item v-for="(target, index) in targets" :key="index">
                                    <div v-for="(dataItem,index1) in target">
                                        <div class="list_card">
                                         <el-card class="box-card clearfix">
                                            <div class="countBoxL">
                                                    <template v-if="index1%3==0">
                                                        <i class="iconfont iconColor">&#xe644;</i>
                                                    </template>
                                                    <template v-if="index1%3==1">
                                                        <i class="iconfont iconColor1">&#xe644;</i>
                                                    </template>
                                                    <template v-if="index1%3==2">
                                                        <i class="iconfont iconColor2">&#xe644;</i>
                                                    </template>
                                            </div>
                                            <div class="countBoxR">
                                                <p class="text">{{dataItem.indexName}}</p>
                                                <p class="num">
                                                    <span>{{dataItem.standValue}}</span>
                                                    {{dataItem.unit}}
                                                </p>
                                            </div>
                                         </el-card>
                                        </div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                            </div>
                    </el-col>
                </el-row>
            </div>

            <div class="targetBox">
                <el-row :gutter="20">
                    <el-col :span="11">
                        <el-card class="box-card">
                            <div class="title">目标完成率</div>
                            <div id="targeCompent" class="chartBox"></div>
                            <div v-if="this.flag1.length==0" class="nodataPic">
                              <img src="../../../assets/empty.jpg"/>
                            </div>
                         </el-card>
                    </el-col>
                    <el-col :span="13">
                        <el-card class="box-card">
                            <div class="title">目标列表
                              <div class="filterList clearfix">
                                  <el-button size="mini" round @click="targetListFnNew">全部</el-button>
                                  <el-button size="mini" round @click="todayTargetList">今日</el-button>
                                  <el-button size="mini" round @click="monthTargetList">30天内</el-button>
                              </div>
                            </div>
                             <div v-if="targetTableData.length==0" class="nodataPic">
                                  <img src="../../../assets/empty.jpg"/>
                             </div>
                            <div v-else class="targeTable">
                                <el-table  ref="multipleTable"  :data="targetTableData"
                                    style="width: 100%"  @sort-change="sortList">
                                    <el-table-column  label="目标" align="left">
                                        <template  slot-scope="scope">
                                          <a href="javascript:void(0)" @click="toDetailTar(scope.row.id)">
                                                {{scope.row.target_name}}
                                          </a>
                                        </template>
                                    </el-table-column>
                                  <el-table-column   label="起止日期" align="center" sortable>
                                        <template  slot-scope="scope">{{scope.row.start_time + '-' + scope.row.end_time}}</template>
                                    </el-table-column>
                                    <el-table-column
                                    label="完成情况"
                                    width="110" align="center">
                                    <template slot-scope="scope">
                                        <span
                                        class="span_state"
                                        :class="scope.row.styleName"
                                        >{{scope.row.result_type}}</span>
                                    </template>
                                    </el-table-column>
                                </el-table>

                                <el-pagination background
                                layout="prev, pager, next"
                                  style="margin-top: 10px"
                                  @current-change = "getCurrentPage"
                                  :current-page="currentPage"
                                  :page-size="pageSize"
                                  :total="total"
                                  v-show="total" >
                                </el-pagination>
                            </div>

                         </el-card>
                    </el-col>
                </el-row>

            </div>
        </div>

       <div class="tab-content">
            <div class="titleTop">
              <span><i class="iconfont">&#xe620;</i></span>
              我的计划</div>
            <div class="noticeBox">
                <el-card class="box-card">
                    <div class="noticeL">
                        <i class="iconfont">&#xe6e8;</i>
                        <span>通知</span>
                    </div>
                    <div class="noticeR">
                        <div class="scrollbar">
                            <el-scrollbar :wrapStyle="wrapStyle">
                                <div class="noticeRList" v-for="(planNotice,index) in planNotices">
                                 <div class="diogBox">
                                      <div  @click="openDiog1(index)"  class="diogMark" ></div>
                                     <el-alert title="" :type="planNotice.message_type === '1' ? 'info' : 'warning'" show-icon  @close="closePlan(planNotice.id)">{{planNotice.content}} </el-alert>
                                  </div>
                                </div>
                                <div v-if="planNotices.length==0" class="nodata"> <img src="../../../assets/empty_tongzhi.jpg"/></div>
                            </el-scrollbar>
                        </div>
                    </div>
                 </el-card>
            </div>
             <el-dialog
              title="通知"
              :visible.sync="dialogVisible1"
              width="30%">
              <span>{{contentA}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="goDetailTarPlan">查看详情</el-button>
              </span>
            </el-dialog>
            <div class="countBox">
                <el-row>
                    <el-col :span="6">
                        <div class="targetCount" @click="$router.push({path: '/zgjhydb-wfzd'})">
                            <el-card class="box-card clearfix">
                                <div class="countBoxL">
                                    <i class="iconfont">&#xe680;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">计划总数</p>
                                    <p class="num">
                                        <span>{{planComplateData}}</span>
                                        个
                                    </p>
                                </div>
                        </el-card>
                        </div>
                    </el-col>
                    <el-col :span="18">
                          <div class="banner clearfix">
                            <el-carousel indicator-position="none" :autoplay="false">
                                <el-carousel-item v-for="(planBz, index) in planBzs" :key="index">
                                    <div v-for="(planDataItem,index1) in planBz">
                                        <div class="list_card">
                                         <el-card class="box-card clearfix">
                                            <div class="countBoxL">
                                                     <template v-if="index1%3==0">
                                                        <i class="iconfont iconColor">&#xe644;</i>
                                                    </template>
                                                    <template v-if="index1%3==1">
                                                        <i class="iconfont iconColor1">&#xe644;</i>
                                                    </template>
                                                    <template v-if="index1%3==2">
                                                        <i class="iconfont iconColor2">&#xe644;</i>
                                                    </template>
                                            </div>
                                            <div class="countBoxR">
                                                <p class="text">{{planDataItem.indexName}}</p>
                                                <p class="num">
                                                    <span>{{planDataItem.standValue}}</span>
                                                    {{planDataItem.unit}}
                                                </p>
                                            </div>
                                         </el-card>
                                        </div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                            </div>
                    </el-col>
                </el-row>
            </div>

            <div class="targetBox">
                <el-row :gutter="20">
                    <el-col :span="11">
                        <el-card class="box-card">
                            <div class="title">计划完成率</div>
                            <div  class="chartBox"></div>
                            <div v-if="this.flag2.length==0" class="nodataPic">
                              <img src="../../../assets/empty.jpg"/>
                            </div>
                         </el-card>
                    </el-col>
                    <el-col :span="13">
                        <el-card class="box-card">
                            <div class="title">计划列表
                              <div class="filterList clearfix">
                                  <el-button size="mini" round @click="planeListFnNew">全部</el-button>
                                  <el-button size="mini" round @click="todayPlanList">今日</el-button>
                                  <el-button size="mini" round @click="monthPlanList">30天内</el-button>
                              </div>
                            </div>
                            <div v-if="planeTableData.length==0" class="nodataPic">
                                <img src="../../../assets/empty.jpg"/>
                              </div>
                            <div class="targeTable" v-else>
                              <el-table  :data="planeTableData"  style="width: 100%"  @sort-change="sortListPlan">
                                  <el-table-column  prop="target_name" label="目标" align="left">
                                    <template  slot-scope="scope">
                                       <a href="javascript:void(0)" @click="toDetailPlan(scope.row.id)">
                                            {{scope.row.plan_name}}
                                       </a>
                                     </template>
                                  </el-table-column>
                                    <el-table-column   label="起止日期" align="center" sortable>
                                    <template  slot-scope="scope">{{scope.row.start_time + '-' + scope.row.end_time}}</template>
                                </el-table-column>
                                <el-table-column
                                label="完成情况"
                                width="110" align="center">
                                <template slot-scope="scope">
                                    <span
                                    class="span_state"
                                    :class="scope.row.styleName"
                                    >{{scope.row.result_type}}</span>
                                </template>
                                </el-table-column>
                            </el-table>

                            <el-pagination
                               background
                                layout="prev, pager, next"
                                  style="margin-top: 10px"
                                  @current-change = "getCurrentPagePlan1"
                                  :current-page="currentPagePlan"
                                  :page-size="pageSize"
                                  :total="totalPlan"
                                  v-show="totalPlan">
                            </el-pagination>
                            </div>

                         </el-card>
                    </el-col>
                </el-row>

            </div>
        </div>

         <div class="tab-content">
            <div class="titleTop">
              <span><i class="iconfont">&#xe677;</i></span>
              我审核的</div>
            <div class="noticeBox">
                <el-card class="box-card">
                     <div class="noticeL">
                        <i class="iconfont">&#xe6e8;</i>
                        <span>通知</span>
                    </div>
                    <div class="noticeR">
                        <div class="scrollbar">
                            <el-scrollbar :wrapStyle="wrapStyle">
                                <div class="noticeRList" v-for="(auditingNotice,index) in auditingNotices">
                                  <div class="diogBox">
                                      <div  @click="openDiog2(index)"  class="diogMark" ></div>
                                      <el-alert title="" :type="auditingNotice.message_type === '1' ? 'info' : 'warning'" show-icon @close="closeAud(auditingNotice.id)">{{auditingNotice.content}} </el-alert>
                                  </div>
                                </div>
                                <div v-if="auditingNotices.length==0" class="nodata"><img src="../../../assets/empty_tongzhi.jpg"/></div>
                            </el-scrollbar>
                        </div>
                    </div>
                 </el-card>
            </div>
            <el-dialog
              title="通知"
              :visible.sync="dialogVisible2"
              width="30%">
              <span>{{contentA}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="goDetailTarAudit">查看详情</el-button>
              </span>
            </el-dialog>
            <div class="targetBox">
                <el-row :gutter="20">
                    <el-col :span="11">
                        <el-card class="box-card">
                            <div class="title">
                                <el-dropdown @command="handleCommand">
                                <span class="el-dropdown-link">
                                    目标完成率<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="1">目标完成率</el-dropdown-item>
                                    <el-dropdown-item command="2">计划完成率</el-dropdown-item>
                                </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                            <div class="chartBox"></div>
                             <div v-if="this.flag3.length==0" class="nodataPic">
                              <img src="../../../assets/empty.jpg"/>
                            </div>
                         </el-card>
                    </el-col>
                    <el-col :span="13">
                        <el-card class="box-card">
                            <div class="title">
                                     <el-dropdown @command="handleCommandList">
                                <span class="el-dropdown-link">
                                    目标列表<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="1">目标列表</el-dropdown-item>
                                    <el-dropdown-item command="2">计划列表</el-dropdown-item>
                                </el-dropdown-menu>
                                </el-dropdown>

                              <div class="filterList clearfix">
                                  <el-button size="mini" round @click="AuditListFnNew">全部</el-button>
                                  <el-button size="mini" round @click="todayAuditList">今日</el-button>
                                  <el-button size="mini" round @click="monthAuditList">30天内</el-button>
                              </div>
                            </div>
                            <div class="targeTable">
                                 <div v-if="auditingListData.length==0" class="nodataPic">
                                  <img src="../../../assets/empty.jpg"/>
                                </div>

                                 <el-table v-else :data="auditingListData"  style="width: 100%" @sort-change="sortListAud">
                                  <el-table-column  label="目标" align="left">
                                     <template slot-scope="scope">
                                      <a href="javascript:void(0)" @click="toDetailSHPlan(scope.row.id)">{{scope.row.target_name}}</a>
                                    </template>
                                  </el-table-column>
                                  <el-table-column   label="起止日期" align="center" sortable>
                                    <template  slot-scope="scope" >{{scope.row.start_time + '-' + scope.row.end_time}}</template>
                                </el-table-column>
                                <el-table-column
                                label="完成情况"
                                width="110" align="center">
                                <template slot-scope="scope">
                                    <span
                                    class="span_state"
                                    :class="scope.row.styleName"
                                    >{{scope.row.result_type}}</span>
                                </template>
                                </el-table-column>
                            </el-table>

                            <el-pagination background
                             layout="prev, pager, next"
                              :current-page="currentPageAud"
                             :page-size="pageSize"
                             :total="totalAuditing" v-show="totalAuditing" style="margin-top: 10px"  @current-change = "getCurrentPageAuditing">
                            </el-pagination>

                            </div>
                         </el-card>
                    </el-col>
                </el-row>

            </div>

        </div>

    <div class="tab-content">
            <div class="titleTop">
              <span><i class="iconfont"> &#xe634;</i></span>我督办的</div>
            <div class="noticeBox">
                <el-card class="box-card">
                     <div class="noticeL">
                        <i class="iconfont">&#xe6e8;</i>
                        <span>通知</span>
                    </div>
                    <div class="noticeR">
                        <div class="scrollbar">
                            <el-scrollbar :wrapStyle="wrapStyle">
                                <div class="noticeRList" v-for="(Supervise,index) in Supervises">
                                     <div class="diogBox">
                                      <div  @click="openDiog3(index)"  class="diogMark" ></div>
                                       <el-alert title="" :type="Supervise.message_type === '1' ? 'info' : 'warning'" show-icon  @close="closeSup(Supervise.id)">{{Supervise.content}} </el-alert>
                                  </div>
                                </div>
                                <div v-if="Supervises.length==0" class="nodata"><img src="../../../assets/empty_tongzhi.jpg"/></div>
                            </el-scrollbar>
                        </div>
                    </div>
                 </el-card>
            </div>
            <el-dialog
              title="通知"
              :visible.sync="dialogVisible3"
              width="30%">
              <span>{{contentA}}</span>
              <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="goDetailTarSup">查看详情</el-button>
              </span>
            </el-dialog>
            <div class="targetBox">
                <el-row :gutter="20">
                    <el-col :span="11">
                        <el-card class="box-card">
                            <div class="title">计划完成率</div>
                            <div class="chartBox"></div>
                                  <div v-if="this.flag4.length==0" class="nodataPic">
                              <img src="../../../assets/empty.jpg"/>
                            </div>
                         </el-card>
                    </el-col>
                    <el-col :span="13">
                        <el-card class="box-card">
                            <div class="title">计划列表
                                <div class="filterList clearfix">
                                  <el-button size="mini" round @click="SupervisesListFnNew">全部</el-button>
                                  <el-button size="mini" round @click="todaySupitList">今日</el-button>
                                  <el-button size="mini" round @click="monthSupitList">30天内</el-button>
                              </div>
                            </div>
                            <div class="targeTable">
                                 <div v-if="SupervisesData.length==0" class="nodataPic">
                                    <img src="../../../assets/empty.jpg"/>
                                  </div>
                                 <el-table v-else :data="SupervisesData"  style="width: 100%"  @sort-change="sortListSup">
                                  <el-table-column label="计划" align="left" >
                                    <template slot-scope="scope">
                                      <a href="javascript:void(0)" @click="toDetailJD(scope.row.id)">{{scope.row.target_name}}</a>
                                    </template>
                                  </el-table-column>
                                    <el-table-column   label="起止日期" align="center" sortable>
                                    <template  slot-scope="scope">{{scope.row.start_time + '-' + scope.row.end_time}}</template>
                                </el-table-column>
                                <el-table-column
                                label="完成情况"
                                width="110" align="center">
                                <template slot-scope="scope">
                                    <span
                                    class="span_state"
                                    :class="scope.row.styleName"
                                    >{{scope.row.result_type}}</span>
                                </template>
                                </el-table-column>
                            </el-table>

                            <el-pagination background  layout="prev, pager, next"
                              :current-page="currentPageSup"
                             :page-size="pageSize"
                              :total="totalSupervises" v-show="totalSupervises" style="margin-top: 10px"  @current-change = "getCurrentPageSupervises">
                            </el-pagination>
                            </div>
                         </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      reformId: 0,
      reformType: 0,
      path: '/shTargetDetail/',
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      wrapStyle: [{'height': '10 0%'}],
      deptId: 1,
      items: [], // 顶部切换
      // total:4,
      command: 1,
      targetNotices: [], // 我的目标消息通知
      targetNoticeType: '',
      targets: [], // 我的目标-标准值
      targetComplateData: 0, // 我的目标-标准值总值
      targetNum: 1, // 目标总数
      targetTableData: [], // 我的目标 目标列表
      targetOptions: [], // 我的目标完成率
      planNotices: [], // 我的计划-消息通知
      planBzs: [], // 我的计划-标准值
      planComplateData: 0, // 我的目标-标准值总值
      planeTableData: [],
      auditingNotices: '',
      auditingListData: [],
      Supervises: [],
      SupervisesData: [],
      targetComplateWsh: [], // wo==我审核的目标完成数据
      planComplateWsh: [], // wo==我审核的计划完成数据
      total: 0, // 总条数
      currentPage: 1, // 当前页
      currentPagePlan: 1, // 计划列表当前页面
      currentPageAud: 1, // 计划列表当前页面
      currentPageSup: 1, // 计划列表当前页面
      pageSize: 5,
      totalPage: 5,
      totalPlan: 0,
      totalPlanPlag: 5,
      totalAuditing: 0,
      totalAuditingplag: 5,
      totalPlanAuditing: 0,
      totalPlanAuditingplag: 5,
      totalSupervises: 0,
      totalSupervisesplag: 5,
      resultTypeObj: {
        '未开始': 'style_star',
        '进行中': 'style_ing',
        '已完成': 'style_fish',
        '已延期': 'style_yanqi',
        '延期完成': 'style_yFish'
      },
      contentA: '',
      flag1: [],
      flag2: [],
      flag3: [],
      flag4: [],
      ColorTypeObj: {
        '未开始': '#a5a5a5',
        '进行中': '#ffc000',
        '已完成': '#70ad47',
        '已延期': '#ed7d31',
        '延期完成': '#4472c4'
      },
      TypeObj: {
        '未开始': 1,
        '进行中': 2,
        '已完成': 3,
        '已延期': 4,
        '延期完成': 5
      },
      TargetNumType: 0,
      TargetNumType1: 0,
      TargetNumType2: 0,
      TargetNumType3: 0,
      commandFlag: 1,
      commandFlagList: 1,
      flagSort: 'true',
      flagSort_targetList: true,
      flagSortPlan: 'true',
      flagSort_plan: true,
      flagSortAud: 'true',
      flagSort_Aud: true,
      flagSortSup: 'true',
      flagSort_Sup: true,
      newTime: '',
      newTime2: '',
      newTimePlan: '',
      newTimePlan2: '',
      newTimeAud: '',
      newTimeAud2: '',
      newTimeSup: '',
      newTimeSup2: ''
    }
  },
  created () {

  },
  mounted () {
    let self = this
    self.$ajax('post', self.HOST + '/tr/autognosis/web/autognosiShow', {}, (res) => {
      if (res.success) {
        self.items = res.obj
        let defaultDepId = res.obj[0].deptId
        self.deptId = defaultDepId
        self.targetNoticeFn(defaultDepId)

        // 我的目标-目标标准值
        self.targetFn(defaultDepId)

        // 我的计划-消息通知
        self.planNoticesFn(defaultDepId)

        // 我审核的通知
        self.auditingNoticesFn(defaultDepId)

        // 我督办的通知
        self.SupervisesNoticesFn(defaultDepId)

        // 我的目标-目标列表
        self.targetListFn(defaultDepId)

        // 我的计划-目标列表
        self.planeListFn(defaultDepId)

        // 我的审核-目标列表
        self.auditingListFn(defaultDepId)

        // 我的督办-目标列表
        self.SupervisesListFn(defaultDepId)
      } else {
        self.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
  },
  methods: {
    toDetailTar (id) {
      this.$router.push({ path: '/targetDetail/' + id })
    },
    toDetailPlan (id) {
      this.$router.push({path: '/wcyPlanDetail/' + id})
    },
    toDetailSHPlan (id) {
      this.$router.push({path: this.path + id})
    },
    toDetailJD (id) {
      this.$router.push({path: '/wjdPlanDetail/' + id})
    },
    //   切换顶部用户身份
    jobSwitch (item, event) {
      let e = event || window.event
      let aaaList = document.getElementsByClassName('tab')
      for (let i = 0; i < aaaList.length; i++) {
        aaaList[i].className = 'tab'
      }
      e.currentTarget.className = 'tab active'

      // 部门id
      this.deptId = item.deptId
      // 我的目标-消息通知
      this.targetNoticeFn(this.deptId)

      // 我的目标-目标标准值
      this.targetFn(this.deptId)

      // 我的计划-消息通知
      this.planNoticesFn(this.deptId)

      // 我审核的通知
      this.auditingNoticesFn(this.deptId)

      // 我督办的通知
      this.SupervisesNoticesFn(this.deptId)

      // 我的目标-目标列表
      this.targetListFn(this.deptId)

      // 我的计划-目标列表
      this.planeListFn(this.deptId)

      // 我的审核-目标列表
      this.auditingListFn(this.deptId)

      // 我的审核-计划列表
      // this.auditingPlanListFn(this.deptId)

      // 我的督办-目标列表
      this.SupervisesListFn(this.deptId)
    },
    // 图表和 轮播的请求
    targetFn (deptId) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/workbench/web/getWorkbenchData', {deptId: deptId}, (res) => {
        if (res.success) {
          // 处理数据 我的目标 标准值
          let result = []
          for (var i = 0, len = res.data.targerIndex.length; i < len; i += 3) {
            result.push(res.data.targerIndex.slice(i, i + 3))
          }
          self.targets = result

          // 我的目标 完成率
          //  总值
          let targetComplate = 0
          for (var i = 0, len = res.data.targetComplate.wfz.length; i < len; i++) {
            targetComplate += res.data.targetComplate.wfz[i].value
          }
          self.targetComplateData = targetComplate

          // 我的目标完成率
          let charsLeg = []
          let color = []
          let charsData = res.data.targetComplate.wfz
          self.flag1 = charsData
          for (var i = 0, len = res.data.targetComplate.wfz.length; i < len; i++) {
            charsLeg.push(res.data.targetComplate.wfz[i].name)
            color.push(self.ColorTypeObj[res.data.targetComplate.wfz[i].name])
          }
          self.targetOptionsFn(charsLeg, charsData, 0, color)

          // 我的计划 标准值
          let planResult = []
          for (var i = 0, len = res.data.planIndex.length; i < len; i += 3) {
            planResult.push(res.data.planIndex.slice(i, i + 3))
          }
          self.planBzs = planResult

          //    我的计划总值
          let planComplate = 0
          for (var i = 0, len = res.data.planComplate.wfz.length; i < len; i++) {
            planComplate += res.data.planComplate.wfz[i].value
          }
          self.planComplateData = planComplate

          // 我的计划完成率
          let charsLeg1 = []
          let color1 = []
          let charsData1 = res.data.planComplate.wfz
          self.flag2 = charsData1
          for (var i = 0, len = res.data.planComplate.wfz.length; i < len; i++) {
            charsLeg1.push(res.data.planComplate.wfz[i].name)
            color1.push(self.ColorTypeObj[res.data.planComplate.wfz[i].name])
          }
          self.targetOptionsFn(charsLeg1, charsData1, 1, color1)

          // 我审核的切换完成率
          self.targetComplateWsh = res.data.targetComplate.wsh
          self.planComplateWsh = res.data.planComplate.wsh
          // 默认显示审核的目标
          let _charsLeg2 = []
          let color2 = []
          if (self.commandFlag == 1) {
            let _charsData2 = self.targetComplateWsh
            self.flag3 = _charsData2
            for (var i = 0, len = self.targetComplateWsh.length; i < len; i++) {
              _charsLeg2.push(self.targetComplateWsh[i].name)
              color2.push(self.ColorTypeObj[self.targetComplateWsh[i].name])
            }
            self.targetOptionsFn(_charsLeg2, _charsData2, 2, color2)
          } else if (self.commandFlag == 2) {
            let charsLeg2 = []
            let _charsDataA2 = self.planComplateWsh
            self.flag3 = _charsDataA2
            for (var i = 0, len = self.planComplateWsh.length; i < len; i++) {
              charsLeg2.push(self.planComplateWsh[i].name)
              color2.push(self.ColorTypeObj[self.planComplateWsh[i].name])
            }
            self.targetOptionsFn(charsLeg2, _charsDataA2, 2, color2)
          }

          // 我督办的完成率
          let charsLeg3 = []
          let color3 = []
          let charsData3 = res.data.planComplate.wjd
          self.flag4 = charsData3
          for (var i = 0, len = res.data.planComplate.wjd.length; i < len; i++) {
            charsLeg3.push(res.data.planComplate.wjd[i].name)
            color3.push(self.ColorTypeObj[res.data.planComplate.wjd[i].name])
          }
          self.targetOptionsFn(charsLeg3, charsData3, 3, color3)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 饼形的Echarts
    targetOptionsFn (leg, data, index, color) {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: leg
        },
        // color: ['#a5a5a5','#ffc000', '#70ad47', '#ed7d31', '#4472c4'],
        color: color,
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['45%', '70%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter: '{d}%'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 5
              }
            },
            data: data
          }
        ]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('chartBox')[index])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      if (index == 0) {
        myChart.on('click', this.eConsole)
      } else if (index == 1) {
        myChart.on('click', this.eConsole1)
      } else if (index == 2) {
        myChart.on('click', this.eConsole2)
      } else if (index == 3) {
        myChart.on('click', this.eConsole3)
      }
    },

    // 目标--------------------------------------------
    // 目标的通知请求
    targetNoticeFn (deptId) {
      let self = this
      let newData = {
        messageStatus: 0,
        deptId: deptId, // 计划归属
        reformType: 1, // 类型 1 目标 2 计划
        targetClass: 2, // 2 负责人 3 审核人
        pageNumber: 1,
        pageSize: 6
      }
      self.$ajaxMore('post', self.HOST + '/tr/trUser/web/getMessageInfo', newData, (res) => {
        if (res.success) {
          self.targetNotices = []
          self.targetNotices = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    close (v) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/trUser/web/delBatchMessage', {list: v}, (res) => {
        if (res.success) {
          self.targetNoticeFn(self.deptId)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    //  目标的列表-ajax请求
    ajaxListTargetList (newData) {
      let self = this
      self.$ajaxMore('post', self.HOST + '/tr/trTarget/web/getTargetList', newData, (res) => {
        if (res.success) {
          if(res.data){
            self.total = res.data.totalSize
          }
          
          self.targetTableData = []
          for (let item of res.obj) {
            item.styleName = self.resultTypeObj[item.result_type]
            self.targetTableData.push(item)
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 目标的列表-初始化请求
    targetListFn (deptId) {
      let self = this
      let newData = {
        targetClass: 2, // 目标分类 1：我创建的 2：我负责的 3：我审核的 4：我创建或我负责
        deptId: self.deptId, // 计划归属
        pageNumber: self.currentPage, // 页码
        pageSize: self.pageSize,
        resultType: self.TargetNumType,
        descStr: self.flagSort,
        startTime: self.newTime,
        endTime: self.newTime2
      }
      self.ajaxListTargetList(newData)
    },
    targetListFnNew () {
      let self = this
      self.newTime = ''
      self.newTime2 = ''
      self.flagSort = 'true'
      self.currentPage = 1
      self.TargetNumType = 0
      self.targetListFn()
    },
    // 目标的列表-今日
    todayTargetList () {
      let self = this
      let data = new Date()
      self.newTime = this.mydateFormat.dateCodeYmd(data)
      self.newTime2 = this.mydateFormat.dateCodeYmd(data.getTime() + 24 * 60 * 60 * 1000)
      self.flagSort = 'true'
      self.TargetNumType = 0
      if (self.currentPage > 1) {
        self.currentPage = 1
      }
      let newData = {
        targetClass: 2, // 目标分类 1：我创建的 2：我负责的 3：我审核的 4：我创建或我负责
        startTime: self.newTime,
        endTime: self.newTime2,
        deptId: self.deptId, // 计划归属
        pageNumber: self.currentPage, // 页码
        pageSize: self.pageSize,
        descStr: self.flagSort,
        resultType: self.TargetNumType
      }
      self.ajaxListTargetList(newData)
    },
    // 目标的列表-30天内
    monthTargetList () {
      let self = this
      let data = new Date()
      self.newTime2 = this.mydateFormat.dateCodeYmd(data)
      self.newTime = this.mydateFormat.dateCodeYmd(data.getTime() - 24 * 60 * 60 * 1000 * 30)
      self.flagSort = 'true'
      self.TargetNumType = 0
      if (self.currentPage > 1) {
        self.currentPage = 1
      }
      let newData = {
        targetClass: 2, // 目标分类 1：我创建的 2：我负责的 3：我审核的 4：我创建或我负责
        startTime: self.newTime,
        endTime: self.newTime2,
        deptId: self.deptId, // 计划归属
        pageNumber: self.currentPage, // 页码
        pageSize: self.pageSize,
        resultType: self.TargetNumType,
        descStr: self.flagSort
      }
      self.ajaxListTargetList(newData)
    },
    // 目标的列表排序
    sortList (v) {
      let self = this
      if (v.order) {
        if (v.order === 'ascending') {
          // 升序
          self.flagSort = 'false'
        } else {
          // 降序
          self.flagSort = 'true'
        }
      } else {
        self.flagSort = 'false'
      }
      if (self.currentPage > 1) {
        self.currentPage = 1
      }
      self.targetListFn()

      // if (self.flagSort_targetList) {
      //   self.flagSort = 'false'
      //   // self.flagSort_targetList = false
      //   if (self.currentPage > 1) {
      //     self.currentPage = 1
      //   }
      //   self.targetListFn()
      // } else {
      //   self.flagSort = 'true'
      //   self.flagSort_targetList = true
      //   if (self.currentPage > 1) {
      //     self.currentPage = 1
      //   }
      //   self.targetListFn()
      // }
    },
    // 我的目标点击图表 相应右侧列表变化
    eConsole (param) {
      let self = this
      self.TargetNumType = 0
      self.currentPage = 1
      self.newTime = ''
      self.newTime2 = ''
      self.flagSort = 'true'
      self.TargetNumType = self.TypeObj[param.name]
      self.targetListFn(self.deptId)
    },
    // 目标列表分页
    getCurrentPage: function (val) {
      let self = this
      self.currentPage = val
      self.targetListFn()
    },

    // 计划--------------------------------------------
    closePlan (v) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/trUser/web/delBatchMessage?list=' + v, {}, (res) => {
        if (res.success) {
          self.planNoticesFn(self.deptId)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    //  计划通知
    planNoticesFn (deptId) {
      let self = this
      let newData = {
        deptId: deptId, // 计划归属
        reformType: 2, // 类型 1 目标 2 计划
        planType: 2, // 2 负责人 3 审核人
        pageNumber: 1,
        pageSize: 6
      }
      self.$ajaxMore('post', self.HOST + '/tr/trUser/web/getMessageInfo', newData, (res) => {
        if (res.success) {
          self.planNotices = []
          self.planNotices = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 计划请求的Ajax
    ajaxListPlanList (newData) {
      let self = this
      self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/getPlanLists', newData, (res) => {
        if (res.success) {
          if(res.data){
             self.totalPlan = res.data.totalSize
          }
         
          self.totalPlanPlag = res.data.totalPage
          self.planeTableData = []
          for (let item of res.obj) {
            item.styleName = self.resultTypeObj[item.result_type]
            self.planeTableData.push(item)
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 计划请求的初始化
    planeListFn (deptId) {
      let self = this
      let newData = {
        deptId: self.deptId, // 计划归属
        planType: 2,
        pageNumber: self.currentPagePlan,
        pageSize: self.pageSize,
        resultType: self.TargetNumType1,
        descStr: self.flagSortPlan,
        startTime: self.newTimePlan,
        endTime: self.newTimePlan2
      }
      self.ajaxListPlanList(newData)
    },
    planeListFnNew () {
      let self = this
      self.newTimePlan = ''
      self.newTimePlan2 = ''
      self.flagSortPlan = 'true'
      self.currentPagePlan = 1
      self.TargetNumType1 = 0
      self.planeListFn()
    },
    // 计划-----今日
    todayPlanList () {
      let self = this
      let data = new Date()
      self.newTimePlan = self.mydateFormat.dateCodeYmd(data)
      self.newTimePlan2 = self.mydateFormat.dateCodeYmd(data.getTime() + 24 * 60 * 60 * 1000)
      self.flagSortPlan = 'true'
      self.TargetNumType1 = 0
      if (self.currentPagePlan > 1) {
        self.currentPagePlan = 1
      }
      let newData = {
        startTime: self.newTimePlan,
        endTime: self.newTimePlan2,
        deptId: self.deptId, // 计划归属
        planType: 2,
        pageNumber: self.currentPagePlan,
        pageSize: self.pageSize,
        resultType: self.TargetNumType1,
        descStr: self.flagSortPlan
      }
      self.ajaxListPlanList(newData)
    },
    // 计划-----30天内
    monthPlanList () {
      let self = this
      let data = new Date()
      self.newTimePlan2 = this.mydateFormat.dateCodeYmd(data)
      self.newTimePlan = this.mydateFormat.dateCodeYmd(data.getTime() - 24 * 60 * 60 * 1000 * 30)
      self.flagSortPlan = 'true'
      self.TargetNumType1 = 0
      if (self.currentPagePlan > 1) {
        self.currentPagePlan = 1
      }
      let newData = {
        startTime: self.newTimePlan,
        endTime: self.newTimePlan2,
        deptId: self.deptId, // 计划归属
        planType: 2,
        pageNumber: self.currentPagePlan,
        pageSize: self.pageSize,
        resultType: self.TargetNumType1,
        descStr: self.flagSortPlan
      }
      self.ajaxListPlanList(newData)
    },
    // 计划排序的列表
    sortListPlan (v) {
      let self = this
      if (v.order) {
        if (v.order === 'ascending') {
          // 升序
          self.flagSortPlan = 'false'
        } else {
          // 降序
          self.flagSortPlan = 'true'
        }
      } else {
        self.flagSortPlan = 'false'
      }
      if (self.currentPagePlan > 1) {
        self.currentPagePlan = 1
      }
      self.planeListFn()

      // let self = this
      // if (self.flagSort_plan) {
      //   self.flagSortPlan = 'false'
      //   self.flagSort_plan = false
      //   if (self.currentPagePlan > 1) {
      //     self.currentPagePlan = 1
      //   }
      //   self.planeListFn()
      // } else {
      //   self.flagSortPlan = 'true'
      //   self.flagSort_plan = true
      //   if (self.currentPagePlan > 1) {
      //     self.currentPagePlan = 1
      //   }
      //   self.planeListFn()
      // }
    },
    // 我的计划点击图表 相应右侧列表变化
    eConsole1 (param) {
      let self = this
      self.TargetNumType1 = 0
      self.currentPagePlan = 1
      self.newTimePlan = ''
      self.newTimePlan2 = ''
      self.flagSortPlan = 'true'
      self.TargetNumType1 = self.TypeObj[param.name]
      self.planeListFn(self.deptId)
    },
    // 计划列表分页
    getCurrentPagePlan1: function (currentPage) {
      let self = this
      self.currentPagePlan = currentPage
      self.planeListFn()
    },

    // 我审核的-------------------------------------------------------
    closeAud (v) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/trUser/web/delBatchMessage?list=' + v, {}, (res) => {
        if (res.success) {
          self.auditingNoticesFn(self.deptId)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我审核的通知
    auditingNoticesFn (deptId) {
      let self = this
      let newData = {
        deptId: deptId, // 计划归属
        reformType: 2, // 类型 1 目标 2 计划
        planType: 3,
        pageNumber: 1,
        pageSize: 6

      }
      self.$ajaxMore('post', self.HOST + '/tr/trUser/web/getMessageInfo', newData, (res) => {
        if (res.success) {
          self.auditingNotices = []
          self.auditingNotices = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我审核的目标-ajax
    ajaxAuditingListFn (newData) {
      let self = this
      self.$ajaxMore('post', self.HOST + '/tr/trTarget/web/getTargetList', newData, (res) => {
        if (res.success) {
          if(res.data){
             self.totalAuditing = res.data.totalSize
          }
         
          self.totalAuditingplag = res.data.totalPage
          self.auditingListData = []
          for (let item of res.obj) {
            item.styleName = self.resultTypeObj[item.result_type]
            self.auditingListData.push(item)
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我审核的目标初始化
    auditingListFn (deptId) {
      let self = this
      let newData = {
        targetClass: 3, // 目标分类 1：我创建的 2：我负责的 3：我审核的 4：我创建或我负责
        deptId: self.deptId, // 计划归属
        planType: 2,
        pageNumber: self.currentPageAud,
        pageSize: self.pageSize,
        resultType: self.TargetNumType2,
        descStr: self.flagSortAud,
        startTime: self.newTimeAud,
        endTime: self.newTimeAud2

      }
      self.ajaxAuditingListFn(newData)
    },
    // 我审核的计划-ajax
    ajaxAuditingPlanListFn (newData) {
      let self = this
      self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/getPlanLists', newData, (res) => {
        if (res.success) {
          if(res.data){
            self.totalAuditing = res.data.totalSize
          }
          
          self.totalAuditingplag = res.data.totalPage
          self.auditingListData = []
          for (let item of res.obj) {
            item.styleName = self.resultTypeObj[item.result_type]
            self.auditingListData.push(item)
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我审核的计划-初始化
    auditingPlanListFn (deptId) {
      let self = this
      let newData = {
        deptId: self.deptId, // 计划归属
        planType: 3,
        pageNumber: self.currentPageAud,
        pageSize: self.pageSize,
        resultType: self.TargetNumType2,
        descStr: self.flagSortAud,
        startTime: self.newTimeAud,
        endTime: self.newTimeAud2

      }
      self.ajaxAuditingPlanListFn(newData)
    },
    handleCommand (command) {
      let self = this
      if (command == 1) {
        self.commandFlag = command
        // 我审核的目标完成率
        let _charsLeg2 = []
        let _charsData2 = self.targetComplateWsh
        let color2 = []
        self.flag3 = _charsData2
        for (var i = 0; i < self.targetComplateWsh.length; i++) {
          _charsLeg2.push(self.targetComplateWsh[i].name)
          color2.push(self.ColorTypeObj[self.targetComplateWsh[i].name])
        }
        self.targetOptionsFn(_charsLeg2, _charsData2, 2, color2)
      } else {
        // 我审核的计划完成率
        self.commandFlag = command
        let charsLeg2 = []
        let charsData2 = self.planComplateWsh
        let color2 = []
        self.flag3 = charsData2
        for (var i = 0, len = self.planComplateWsh.length; i < len; i++) {
          charsLeg2.push(self.planComplateWsh[i].name)
          color2.push(self.ColorTypeObj[self.planComplateWsh[i].name])
        }
        self.targetOptionsFn(charsLeg2, charsData2, 2, color2)
      }
    },
    handleCommandList (command) {
      let self = this
      if (command == 1) {
        this.commandFlagList = command
        // 我的审核-目标列表
        this.auditingListData = []
        this.currentPageAud = 1
        self.TargetNumType2 = 0
        this.auditingListFn(this.deptId)
        this.path = '/shTargetDetail/'
      } else {
        this.commandFlagList = command
        // 我的审核-计划列表
        this.auditingListData = []
        this.currentPageAud = 1
        self.TargetNumType2 = 0
        this.auditingPlanListFn(this.deptId)
        this.path = '/wshPlanDetail/'
      }
    },
    // 我的审核的点击图表 相应右侧列表变化
    eConsole2 (param) {
      let self = this
      self.newTimeAud = ''
      self.newTimeAud2 = ''
      self.flagSortAud = 'true'
      self.TargetNumType2 = 0
      if (self.commandFlag == 1) {
        self.currentPageAud = 1
        self.TargetNumType2 = self.TypeObj[param.name]
        self.auditingListFn(self.deptId)
      } else if (self.commandFlag == 2) {
        self.currentPageAud = 1
        self.TargetNumType2 = self.TypeObj[param.name]
        self.auditingPlanListFn(self.deptId)
      }
    },
    AuditListFnNew () {
      let self = this
      self.newTimeAud = ''
      self.newTimeAud2 = ''
      self.flagSortAud = 'true'
      self.TargetNumType2 = 0
      if (self.commandFlagList == 1) {
        self.currentPageAud = 1
        self.auditingListFn()
      } else if (self.commandFlagList == 2) {
        self.currentPageAud = 1
        self.auditingPlanListFn()
      }
    },
    // 今日
    todayAuditList () {
      let self = this
      let data = new Date()
      self.newTimeAud = this.mydateFormat.dateCodeYmd(data)
      self.newTimeAud2 = this.mydateFormat.dateCodeYmd(data.getTime() + 24 * 60 * 60 * 1000)
      self.flagSortAud = 'true'
      self.TargetNumType2 = 0
      if (self.currentPageAud > 1) {
        self.currentPageAud = 1
      }
      if (self.commandFlagList == 1) {
        let newData = {
          startTime: self.newTimeAud,
          endTime: self.newTimeAud2,
          targetClass: 3,
          deptId: self.deptId, // 计划归属
          planType: 2,
          pageNumber: self.currentPageAud,
          pageSize: self.pageSize,
          resultType: self.TargetNumType2,
          descStr: self.flagSortAud
        }
        self.ajaxAuditingListFn(newData)
      } else if (self.commandFlagList == 2) {
        if (self.currentPageAud > 1) {
          self.currentPageAud = 1
        }
        self.TargetNumType2 = 0
        let newData1 = {
          startTime: self.newTimeAud,
          endTime: self.newTimeAud2,
          deptId: self.deptId, // 计划归属
          planType: 3,
          pageNumber: self.currentPageAud,
          pageSize: self.pageSize,
          resultType: self.TargetNumType2,
          descStr: self.flagSortAud
        }
        self.ajaxAuditingPlanListFn(newData1)
      }
    },
    // 30天内
    monthAuditList () {
      let self = this
      let data = new Date()
      self.newTimeAud2 = this.mydateFormat.dateCodeYmd(data)
      self.newTimeAud = this.mydateFormat.dateCodeYmd(data.getTime() - 24 * 60 * 60 * 1000 * 30)
      self.flagSortAud = 'true'
      self.TargetNumType2 = 0
      if (self.currentPageAud > 1) {
        self.currentPageAud = 1
      }
      if (self.commandFlagList == 1) {
        let newData = {
          startTime: self.newTimeAud,
          endTime: self.newTimeAud2,
          targetClass: 3,
          deptId: self.deptId, // 计划归属
          planType: 2,
          pageNumber: self.currentPageAud,
          pageSize: self.pageSize,
          resultType: self.TargetNumType1,
          descStr: self.flagSortAud
        }
        self.ajaxAuditingListFn(newData)
      } else if (self.commandFlagList == 2) {
        if (self.currentPageAud > 1) {
          self.currentPageAud = 1
        }
        let newData1 = {
          startTime: self.newTimeAud,
          endTime: self.newTimeAud2,
          deptId: self.deptId, // 计划归属
          planType: 3,
          pageNumber: self.currentPageAud,
          pageSize: self.pageSize,
          resultType: self.TargetNumType2,
          descStr: self.flagSortAud
        }
        self.ajaxAuditingPlanListFn(newData1)
      }
    },
    sortListAud (v) {
      let self = this
      if (v.order) {
        if (v.order === 'ascending') {
          // 升序
          self.flagSortAud = 'false'
        } else {
          // 降序
          self.flagSortAud = 'true'
        }
      } else {
        self.flagSortAud = 'false'
      }
      if (self.commandFlagList > 1) {
        self.commandFlagList = 1
      }
      if (self.commandFlagList == 1) {
        self.auditingListFn()
      } else if (self.commandFlagList == 2) {
        self.auditingPlanListFn()
      }

      // let self = this
      // if (self.flagSort_Aud) {
      //   self.flagSortAud = 'false'
      //   self.flagSort_Aud = false
      //   if (self.currentPageAud > 1) {
      //     self.currentPageAud = 1
      //   }
      //   if (self.commandFlagList == 1) {
      //     self.auditingListFn()
      //   } else if (self.commandFlagList == 2) {
      //     self.auditingPlanListFn()
      //   }
      // } else {
      //   self.flagSortAud = 'true'
      //   self.flagSort_Aud = true
      //   if (self.currentPageAud > 1) {
      //     self.currentPageAud = 1
      //   }
      //   if (self.commandFlagList == 1) {
      //     self.auditingListFn()
      //   } else if (self.commandFlagList == 2) {
      //     self.auditingPlanListFn()
      //   }
      // }
    },

    getCurrentPageAuditing: function (currentPage) {
      let self = this
      self.currentPageAud = currentPage
      if (self.commandFlagList == 1) {
        self.auditingListFn()
      } else if (self.commandFlagList == 2) {
        self.auditingPlanListFn()
      }
    },

    // 我的督办-----------------------------------------------------------------------
    // 我的督办的点击图表 相应右侧列表变化
    eConsole3 (param) {
      let self = this
      self.TargetNumType3 = 0
      self.currentPageSup = 1
      self.newTimeSup = ''
      self.newTimeSup2 = ''
      self.flagSortSup = 'true'
      self.TargetNumType3 = self.TypeObj[param.name]
      self.SupervisesListFn(self.deptId)
    },
    closeSup (v) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/trUser/web/delBatchMessage', {list: v}, (res) => {
        if (res.success) {
          self.SupervisesNoticesFn(self.deptId)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我督办的消息通知
    SupervisesNoticesFn (deptId) {
      let self = this
      let newData = {
        deptId: deptId, // 计划归属
        reformType: 2, // 类型 1 目标 2 计划
        planType: 6,
        pageNumber: 1,
        pageSize: 6
      }
      self.$ajaxMore('post', self.HOST + '/tr/trUser/web/getMessageInfo', newData, (res) => {
        if (res.success) {
          self.Supervises = []
          self.Supervises = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我督办的 -ajax
    ajaxSupervisesListFn (newData) {
      let self = this
      self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/getPlanLists', newData, (res) => {
        if (res.success) {
          if(res.data){
            self.totalSupervises = res.data.totalSize
          }
          
          self.totalSupervisesplag = res.data.totalPage
          self.SupervisesData = []
          for (let item of res.obj) {
            item.styleName = self.resultTypeObj[item.result_type]
            self.SupervisesData.push(item)
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 我督办的 -初始化
    SupervisesListFn (deptId) {
      let self = this
      let newData = {
        deptId: self.deptId, // 计划归属
        planType: 6,
        pageNumber: self.currentPageSup,
        pageSize: self.pageSize,
        resultType: self.TargetNumType3,
        descStr: self.flagSortSup,
        startTime: self.newTimeSup,
        endTime: self.newTimeSup2
      }
      self.ajaxSupervisesListFn(newData)
    },
    SupervisesListFnNew () {
      let self = this
      self.newTimeSup = ''
      self.newTimeSup2 = ''
      self.flagSortSup = 'true'
      self.currentPageSup = 1
      self.TargetNumType3 = 0
      self.SupervisesListFn()
    },
    // 我督办的 -今日
    todaySupitList () {
      let self = this
      let data = new Date()
      self.newTimeSup = this.mydateFormat.dateCodeYmd(data)
      self.newTimeSup2 = this.mydateFormat.dateCodeYmd(data.getTime() + 24 * 60 * 60 * 1000)
      self.flagSortSup = 'true'
      self.TargetNumType3 = 0
      if (self.currentPageSup > 1) {
        self.currentPageSup = 1
      }
      let newData = {
        startTime: self.newTimeSup,
        endTime: self.newTimeSup2,
        deptId: self.deptId, // 计划归属
        planType: 6,
        pageNumber: self.currentPageSup,
        pageSize: self.pageSize,
        resultType: self.TargetNumType1,
        descStr: self.flagSortSup
      }
      self.ajaxSupervisesListFn(newData)
    },
    // 我督办的 -30天内
    monthSupitList () {
      let self = this
      let data = new Date()
      self.newTimeSup2 = this.mydateFormat.dateCodeYmd(data)
      self.newTimeSup = this.mydateFormat.dateCodeYmd(data.getTime() - 24 * 60 * 60 * 1000 * 30)
      self.flagSortSup = 'true'
      self.TargetNumType3 = 0
      if (self.currentPageSup > 1) {
        self.currentPageSup = 1
      }
      let newData = {
        startTime: self.newTimeSup,
        endTime: self.newTimeSup2,
        deptId: self.deptId, // 计划归属
        planType: 6,
        pageNumber: self.currentPageSup,
        pageSize: self.pageSize,
        resultType: self.TargetNumType1,
        descStr: self.flagSortSup
      }
      self.ajaxSupervisesListFn(newData)
    },
    // 我督办的 -排序
    sortListSup (v) {
      let self = this
      if (v.order) {
        if (v.order === 'ascending') {
          // 升序
          self.flagSortSup = 'false'
        } else {
          // 降序
          self.flagSortSup = 'true'
        }
      } else {
        self.flagSortSup = 'false'
      }
      if (self.currentPageSup > 1) {
        self.currentPageSup = 1
      }
      self.SupervisesListFn()
      // let self = this
      // if (self.flagSort_Sup) {
      //   self.flagSortSup = 'false'
      //   self.flagSort_Sup = false
      //   if (self.currentPageSup > 1) {
      //     self.currentPageSup = 1
      //   }
      //   self.SupervisesListFn()
      // } else {
      //   self.flagSortSup = 'true'
      //   self.flagSort_Sup = true
      //   if (self.currentPageSup > 1) {
      //     self.currentPageSup = 1
      //   }
      //   self.SupervisesListFn()
      // }
    },
    // 我督办的分页
    getCurrentPageSupervises: function (currentPage) {
      let self = this
      self.currentPageSup = currentPage
      self.SupervisesListFn()
    },

    openDiog (index) {
      this.dialogVisible = true
      this.contentA = '',
      this.reformId = 0
      this.contentA = this.targetNotices[index].content
      this.reformId = this.targetNotices[index].reform_id
    },
    openDiog1 (index) {
      this.dialogVisible1 = true
      this.contentA = '',
      this.reformId = 0
      this.contentA = this.planNotices[index].content
      this.reformId = this.planNotices[index].reform_id
      // this.reformType=this.planNotices[index].reform_type
    },
    openDiog2 (index) {
      this.dialogVisible2 = true
      this.contentA = '',
      this.reformId = 0
      this.contentA = this.auditingNotices[index].content
      this.reformId = this.auditingNotices[index].reform_id
      this.reformType = this.auditingNotices[index].reform_type
    },
    openDiog3 (index) {
      this.dialogVisible3 = true
      this.contentA = '',
      this.reformId = 0
      this.contentA = this.Supervises[index].content
      this.reformId = this.Supervises[index].reform_id
      //  this.reformType=this.Supervises[index].reform_type
    },
    goDetailTar () {
      let self = this
      self.$router.push({ path: '/targetDetail/' + self.reformId})
    },
    goDetailTarPlan () {
      this.$router.push({path: '/wfzPlanDetail/' + this.reformId})
    },
    goDetailTarAudit () {
      if (this.reformType == 1) {
        this.$router.push({ path: '/shTargetDetail/' + this.reformId})
      } else {
        this.$router.push({ path: '/wshPlanDetail/' + this.reformId})
      }
    },
    goDetailTarSup () {
      this.$router.push({path: '/wjdPlanDetail/' + this.reformId})
    }

  }
}
</script>
<style>
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

.mainContentB {
  background-color: #f1f4f5;
  padding:0 1.64%;
}
.paddingTop66{
  padding-top: 66px
}
.mainContentB .box-card{
  position: relative;
  box-shadow: none
}
.mainContentB .box-card:hover{
  z-index: 2;
  /* -moz-box-shadow:4px 10px 20px #BDBDBD;
   -webkit-box-shadow:4px 10px 14px #BDBDBD;
    box-shadow:4px 10px 14px #BDBDBD; */
   -webkit-box-shadow: 0 5px 30px rgba(0,0,0,0.1);
  box-shadow: 0 5px 30px rgba(0,0,0,0.1);
  -webkit-transform: translate3d(0,-2px,0);
  transform: translate3d(0,-2px,0)
}
.mainContentB .el-table{
height: 340px;
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
        top: 0px;
    z-index: 2;
    height: 38px;
    background-color: #f1f4f5;
    border-right: 1px solid #e4eaec;
    border-bottom: 1px solid #f1f4f5;
        margin-bottom: -1px;
}

.titleTop{
  padding-top: 12px;
    line-height: 22px;
    font-size: 18px;
    color: #37474f;
    /* padding-left:10px; */
    /* border-left:5px solid #70ad47; */
    margin-bottom: 16px;
}
.firstTitleTop{
   padding-top: 0;
}
.mainContentB .titleTop span{
 display: inline-block;
 width: 22px;
 height: 22px;
 border-radius: 4px;
 background-color: #70ad47;
 margin-right: 5px;
 text-align: center;

}
.mainContentB .titleTop span i{
 font-size: 18px;
  color: #fff;
  line-height: 22px;
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
.noticeR .el-alert__content{
     width: 88%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    height: 158px !important;
}
.banner .list_card{
  float: left;
  width: 31%;
  margin-left: 2.33333%
}
.countBox .targetCount .el-card{
    background-color:#70ad47;
    cursor: pointer;
}
.countBox .targetCount .text,
.countBox .targetCount p,
.countBox .targetCount .num span{
    color: #fff
}
.countBoxL, .countBoxR{
    vertical-align: middle;
    display: inline-block;
    height: 70px;
    padding-bottom: 14px;
    padding-top: 14px;
}
.countBoxL{
    width: 30%;
    text-align: center;
}
.countBoxL .iconfont{
    font-size: 32px;
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
.targetBox .box-card{
    height: 452px;
}
.targetBox .title{
    font-size: 16px;
    color: #37474f;
    line-height: 16px;
    margin-bottom: 20px;
}
.mainContentB .box-card{
    margin-bottom: 24px;
}

/* /我的目标 */
.targeTable .has-gutter  th,
.targeTable .has-gutter .el-table tr{
    background-color: #f5f8fa
}
#workbench .chartBox{
    width: 80%;
    height:350px;
    margin-left: 10%;
    margin-right: 10%
}
/*
'未开始': '#a5a5a5',
          '进行中': '#ffc000',
          '已完成': '#70ad47',
          '已延期': '#ed7d31',
          '延期完成': '#4472c4'
*/
 .style_star {
  background: #a5a5a5;
}
.style_ing {
  background: #ffc000
}
.style_fish {
  background: #70ad47;
}
.style_yanqi {
  background: #ed7d31
}
.style_yFish {
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
.mainContentB a{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mainContentB .el-alert--warning .el-alert__icon {
    font-size: 16px;
    width: 16px;
    color: #70ad47;
}
.mainContentB  .el-alert--info .el-alert__icon{
    font-size: 16px;
    width: 16px;
    color: #e6553c;
}
.mainContentB .el-alert--warning {
    background-color: #f0f9eb ;
    color: #67c23a;
    cursor: pointer;
;
}
.mainContentB .el-alert--info{
    background-color: #fef0f0;
    color: #f56c6c;
        cursor: pointer;
}
.nodata{
    height: 80px;
    text-align: center;
}
.nodata img{
   display: inline-block;
     height: 80px;
}
.nodataPic{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -123px;
  margin-left: -208px;
}
.nodataPic img{
   display: inline-block;

}
.targeTable .el-table .cell{
line-height: 32px;
}
/* .targeTable  .el-table,.targeTable .el-table th{
    text-align: center;

} */
.targeTable .el-table td, .el-table th{
  white-space: nowrap;
 text-overflow:ellipsis;
 overflow:hidden;
}
.filterList{
  position: absolute;
  right: 20px;
  top: 15px;
}
.diogBox{
  position: relative;
}
.diogMark{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 46px;
  z-index: 9;
  cursor: pointer;
}
.mainContentB .el-carousel__arrow--right{
  right: 4px;
}
.mainContentB .el-carousel__arrow--left{
  left: 32px
}
.targeTable .el-table .cell a{
  display: block
}
</style>
