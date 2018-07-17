<template><div id="workbench">
  <div class="tab-control tab-controlFixed clearfix">
    <div class="tab-control-item" v-for="(item,index) in items" >
      <div v-if="index==0" class="active tab"  @click="jobSwitch(item, $event)">{{item.deptName}}</div>
      <div v-else-if="index!=0" class="tab"  @click="jobSwitch(item, $event)">{{item.deptName}}</div>
    </div>
  </div>

  <div class="mainContentB paddingTop66">
        <div class="tab-content">
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
                                <div v-if="targetNoticesFlag" class="nodata"><img src="../../../assets/empty_tongzhi.jpg"/></div>
                            </el-scrollbar>
                        </div>
                    </div>
                 </el-card>
            </div>
             <el-dialog
              title="通知"
              :visible.sync="dialogVisible"
              width="30%" @close="close1">
              <span>{{contentA}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="goDetailTar">查看详情</el-button>
              </span>
            </el-dialog>
            <div class="countBox">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <!-- <div class="targetCount"  @click="$router.push({path: '/slgl-wfzd'})"> -->
                          <div class="targetCount"  @click="$router.push({path: '/slgl/2'})" style="cursor: pointer;">
                            <el-card class="box-card clearfix" >
                                <div class="countBoxL">
                                    <i class="iconfont">&#xe644;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">我的目标总数</p>
                                    <p class="num">
                                        <span>{{targetComplateNum}}</span>
                                        个
                                    </p>
                                </div>
                        </el-card>
                        </div>
                    </el-col>
                     <el-col :span="6">
                        <div class="targetCount targetCountB" @click="$router.push({path: '/zgjhydb/2'})" style="cursor: pointer;">
                            <el-card class="box-card clearfix" >
                                <div class="countBoxL">
                                     <i class="iconfont">&#xe644;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">我的计划总数</p>
                                    <p class="num">
                                        <span>{{planNum}}</span>
                                        个
                                    </p>
                                </div>
                        </el-card>
                        </div>
                    </el-col>
                   <el-col :span="6">
                        <div class="targetCount targetCountC" @click="$router.push({path: '/zgjhydb/3'})" style="cursor: pointer;">
                            <el-card class="box-card clearfix" >
                                <div class="countBoxL">
                                     <i class="iconfont">&#xe644;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">计划审核总数</p>
                                    <p class="num">
                                        <span>{{planShNum}}</span>
                                        个
                                    </p>
                                </div>
                        </el-card>
                        </div>
                    </el-col>
                     <el-col :span="6">
                        <div class="targetCount targetCountD" @click="$router.push({path: '/zgjhydb/6'})"  style="cursor: pointer;">
                            <el-card class="box-card clearfix" >
                                <div class="countBoxL">
                                     <i class="iconfont">&#xe644;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">计划监督总数</p>
                                    <p class="num">
                                        <span>{{planJdNum}}</span>
                                        个
                                    </p>
                                </div>
                        </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="planarge">
                <el-row>
                    <el-col :span="24">
                        <el-card class="box-card">
                            <div class="title">目标与计划</div>
                            <div v-if="gatherDataFlag" class="nodataPicA">
                              <img src="../../../assets/empty.jpg"/>
                            </div>
                            <div v-else>
                              <div class="planargeTitle">
                                <ul>
                                  <li class="firstL">目标</li>
                                  <li class="nameL">负责人</li>
                                  <li class="date">起止日期</li>
                                  <li class="operate">操作</li>
                                  <li class="last"></li>
                                </ul>
                              </div>
                              <div class="contentX">
                                <el-collapse accordion @change="accordionFn">
                                  <template v-for="(item,index) in gatherData" >
                                    <el-card class="box-card" :class="flagAdd==item.id?'activeCardStyle':''">
                                        <el-collapse-item :key="index" :name="item.id">
                                        <template slot="title">
                                          <div class="targerLIst">
                                              <ul class="clearfix">
                                                <li class="firstL">
                                                  <!-- <div class="text"> -->
                                                    <div class="nameTarge">
                                                        <span style="padding-left:10px">

                                                          <i class="iconfont" v-if="flagAdd!=item.id">&#xe8de;</i>
                                                          <i class="iconfont" :class="flagAdd==item.id?'bgGreen':''"  v-else-if="flagAdd==item.id&&targerLIstFlag||planTbableListFlag">&#xe8b6;</i>
                                                          <i  class="iconfont" :class="flagAdd==item.id?'bgGreen':''"  v-else-if="!targerLIstFlag&&!planTbableListFlag">&#xe8e2;</i>
                                                        </span>
                                                      <!-- <span :class="flagAdd==item.id?'bgGreen':''"> -->
                                                         <a href="javascript:void(0)" class="goTablelink "  :class="flagAdd==item.id?'bgGreen':''">
                                                             {{item.target_name}}
                                                            </a>
                                                       <!-- </span>  -->
                                                    </div>

                                                    <!-- // <div class="group cleatfix">
                                                    //   <div class="prgross">
                                                    //     <el-progress :text-inside="true" :stroke-width='6' :percentage="item.progress ? item.progress - 0 : 0" status="success"></el-progress>
                                                    //   </div>
                                                    //   <div class="prgrossText">
                                                    //     {{item.progress ? item.progress - 0 : 0}}%
                                                    // </div>
                                                    // </div> -->

                                                    <!-- </div> -->
                                                  </li>
                                                <li class="nameL">
                                                  <span class="el-tag">{{item.manager_name}}</span>
                                                </li>
                                                <li class="date">{{item.start_time}}-{{item.end_time}}</li>
                                                <li class="operate clearfix">
                                                  <template v-if="item.is_manager==1">
                                                      <!-- <span class="bgColor bgColor0" title="进度填报" @click.stop="showJdBox(item)">
                                                        <i class="iconfont">&#xe634;</i>
                                                      </span> -->
                                                      <span  class="bgColor bgColor1" title="分解目标" @click.stop="toDetailTarFJ(item.id)">
                                                        <i class="iconfont">&#xe7ac;</i>
                                                      </span>
                                                      <span  class="bgColor bgColor2" title="制定计划"  @click.stop="(item.result_type !== '已完成'&&item.result_type !== '已延期完成')? $router.push({path: '/zdPlan/' + item.id}): $message({type: 'warning',message: '该目标已完成，无法制定计划'})">
                                                      <i class="iconfont">&#xe641;</i>
                                                      </span>
                                                      <span  class="bgColor bgColor3" title="编辑"  @click.stop="router_to_edit(item.id)">
                                                      <i class="iconfont">&#xe6b3;</i>
                                                      </span>
                                                  </template>

                                                </li>
                                                <li class="last clearfix">
                                                    <a href="javascript:void(0)"   @click.stop="$router.push({path: '/targetDetail/' + item.id})">
                                                      <span class="goTablelink ">查看详情</span>
                                                    </a>
                                                </li>
                                              </ul>
                                          </div>
                                        </template>

                                        <div>
                                             <div class="planTbableList" style="width:100%"  v-if="planTbableListFlag">
                                                  <el-table
                                                        size="mini"
                                                        ref="multipleTable"
                                                      :data="planTbable"
                                                      @row-click="rowClickPlan"
                                                      style="width: 100%">
                                                      <el-table-column  label="计划"  class="planTitle" align="left">
                                                        <template slot-scope="scope">
                                                            <a href="javascript:void(0)" class="goTablelink "  @click.stop="$router.push({path: '/wfzPlanDetail/' + scope.row.id})">
                                                             {{scope.row.plan_name}}
                                                            </a>

                                                          <div class="groupA cleatfix">
                                                            <div class="prgrossA">
                                                              <el-progress :text-inside="true" :stroke-width='6' :percentage="scope.row.progress ? scope.row.progress - 0 : 0" status="success"></el-progress>
                                                            </div>
                                                            <div class="prgrossTextA">
                                                              {{scope.row.progress ? scope.row.progress - 0 : 0}}%
                                                          </div>
                                                          </div>
                                                        </template>
                                                      </el-table-column>
                                                      <el-table-column  label="1月"   align="center" width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span v-if="scope.row.month.length!=0" :class="resultTypeObj[scope.row.month[0].monthStatus]"></span>
                                                        </template>
                                                      </el-table-column>
                                                      <el-table-column label="2月"   align="center" width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[1].monthStatus]"></span>
                                                        </template>
                                                      </el-table-column>
                                                      <el-table-column label="3月"   align="center" width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[2].monthStatus]"></span>
                                                        </template>
                                                      </el-table-column>
                                                    <el-table-column  label="4月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                        <span v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[3].monthStatus]"></span>
                                                        </template>
                                                        </el-table-column>
                                                      <el-table-column  label="5月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[4].monthStatus]"></span>
                                                        </template>
                                                      </el-table-column>
                                                      <el-table-column  label="6月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span  v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[5].monthStatus]"></span>
                                                        </template>
                                                    </el-table-column>
                                                      <el-table-column label="7月"   align="center"  width="40" class="monthCell" >
                                                        <template slot-scope="scope">
                                                          <span  v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[6].monthStatus]"></span>

                                                        </template>
                                                        </el-table-column>
                                                    <el-table-column label="8月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                        <span  v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[7].monthStatus]"></span>
                                                        </template>
                                                        </el-table-column>
                                                      <el-table-column  label="9月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span v-if="scope.row.month.length!=0"   :class="resultTypeObj[scope.row.month[8].monthStatus]"></span>
                                                        </template>
                                                        </el-table-column>
                                                      <el-table-column label="10月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span  v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[9].monthStatus]"></span>

                                                        </template>
                                                      </el-table-column>
                                                    <el-table-column label="11月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span  v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[10].monthStatus]"></span>
                                                        </template>
                                                        </el-table-column>
                                                    <el-table-column label="12月"   align="center"  width="40" class="monthCell">
                                                        <template slot-scope="scope">
                                                          <span v-if="scope.row.month.length!=0"  :class="resultTypeObj[scope.row.month[11].monthStatus]"></span>
                                                        </template>
                                                        </el-table-column>
                                                      <el-table-column  label="负责人"  align="center" width="85" >
                                                        <template slot-scope="scope">
                                                            <span class="bgSpan smallSpan">{{scope.row.manager_name}}</span>
                                                        </template>
                                                      </el-table-column>
                                                      <el-table-column  class="contentTable" label="操作" align="center" >
                                                          <template slot-scope="scope">
                                                            <span v-if="scope.row.is_manager">
                                                                <a href="javascript:void(0)" class="contentTablelink " @click="showJdBoxPlan(scope.row)">
                                                              进度填报
                                                            </a>
                                                            <a href="javascript:void(0)" class="contentTablelink1" @click="router_to_edit_plan(scope.row.id)">
                                                              编辑
                                                            </a>
                                                            </span>
                                                            <span v-if="scope.row.is_supervisor">
                                                                <a href="javascript:void(0)" class="contentTablelink2"  @click="planAudit(scope.row.id)">
                                                              催办
                                                            </a>

                                                            </span>
                                                          </template>
                                                      </el-table-column>
                                                    </el-table>
                                              </div>
                                              <!-- 分解目标 -->
                                              <div class="targerLIstA" v-if="targerLIstFlag">
                                                    <div class="targerLIst " >
                                                      <template v-for="(item,index) in decomposeData">
                                                      <ul class="clearfix" :key="index" style="cursor: pointer"  @click.stop="$router.push({path: '/targetDetail/' + item.id})">
                                                        <li class="firstL">
                                                              <!-- <div class="text"> -->
                                                                <!-- <span style="padding-left:10px">
                                                                  <i class="iconfont">&#xe6c9;</i>
                                                                </span>
                                                                分解目标{{index+1}}
                                                                {{item.target_name}}  -->
                                                                <!-- </div> -->
                                                                <div class="nameTarge">
                                                                  <span style="padding-left:10px">
                                                                    <i class="iconfont bgGreen">&#xe8e2;</i>
                                                                  </span>

                                                                   <a href="javascript:void(0)" class="goTablelink ">
                                                                        子目标{{index+1}}: 
                                                                        {{item.target_name}}
                                                                    </a>
                                                                 <!-- <span >  分解目标{{index+1}}{{item.target_name}} </span>  -->
                                                              </div>

                                                              <!-- <div class="group cleatfix">
                                                                <div class="prgross">
                                                                  <el-progress :text-inside="true" :stroke-width='6' :percentage="item.progress ? item.progress - 0 : 0" status="success"></el-progress>
                                                                </div>
                                                                <div class="prgrossText">
                                                                  {{item.progress ? item.progress - 0 : 0}}%
                                                              </div>
                                                              </div> -->

                                                              </li>
                                                            <li class="nameL"> <span class="el-tag smallSpan">{{item.manager_name}}</span></li>
                                                            <li class="date">{{item.start_time}}-{{item.end_time}}</li>
                                                            <li class="operate clearfix">
                                                              <template>
                                                                  <!-- <span class="bgColor bgColor0" title="进度填报" @click="showJdBoxFJ(item)">
                                                                    <i class="iconfont">&#xe634;</i>
                                                                  </span> -->
                                                                  <!-- <span  class="bgColor bgColor2" title="制定计划" @click.stop="FJplan(item.id)">
                                                                  <i class="iconfont">&#xe620;</i>
                                                                  </span> -->
                                                                  <span  class="bgColor bgColor3" title="编辑" @click.stop="router_to_editTa(item.id)">
                                                                  <i class="iconfont">&#xe6b3;</i>
                                                                  </span>
                                                              </template>

                                                            </li>
                                                      </ul>
                                                      </template>

                                                    </div>
                                              </div>
                                        </div>

                                      </el-collapse-item>
                                      </el-card>
                                  </template>
                                </el-collapse>
                              </div>
                            </div>

                         </el-card>
                    </el-col>
                </el-row>
            </div>


             <!-- <div class="targetBox">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div class="title">分科目经费使用比例</div>
                            <div  class="w_targeTable">
                                <el-table  ref="multipleTable"  :data="fundsData"
                                    style="width: 100%" >
                                    <el-table-column  label="名称" align="left"  prop="name" >
                                    </el-table-column>
                                  <el-table-column   label="总计" align="center"  prop="maney" >
                                    </el-table-column>
                                    <el-table-column
                                    label="使用情况"
                                    width="160" align="center" >
                                      <template slot-scope="scope">
                                        <div class="clearfix">
                                          <div class="prgross">
                                           <el-progress :text-inside="true" :stroke-width='6' :percentage="scope.row.progress ? scope.row.progress - 0 : 0" status="success"></el-progress>
                                        </div>
                                         <div class="prgrossText">
                                             {{scope.row.progress ? scope.row.progress - 0 : 0}}%
                                         </div>
                                        </div>

                                      </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                         </el-card>
                    </el-col>
                       <el-col :span="12">
                        <el-card class="box-card">
                            <div class="title">总经费使用历史曲线</div>
                            <div id="targeCompent" class="chartBox"></div>
                         </el-card>
                    </el-col>
                </el-row>
            </div> -->
        </div>
</div>
    <el-dialog
      title="本月进度填报"
      :visible.sync="dialogVisible_jd"
      width="30%">
      <div style="font-size: 16px;margin-bottom: 20px;padding-left: 20px;">{{theDetailName}}</div>
      <el-radio-group v-model="slider_value" style="margin-left: 20px;">
        <el-radio :label="1">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #70ad47"></i>
            <span style="font-size: 16px;">正常</span>
        </el-radio><br><br>
        <el-radio :label="2">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #fec000"></i>
            <span style="font-size: 16px;">有问题或时间到但未填报</span>
        </el-radio><br><br>
        <el-radio :label="3">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #e96c72"></i>
            <span style="font-size: 16px;">停滞</span>
        </el-radio><br><br>
        <el-radio :label="4">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #333333"></i>
            <span style="font-size: 16px;">已结项</span>
        </el-radio><br><br>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_jd = false">取 消</el-button>
        <el-button type="primary" @click="addJdSure">确 定</el-button>
      </span>
    </el-dialog>

  <el-dialog
      title="本月进度填报"
      :visible.sync="dialogVisible_pl"
      width="30%">
      <div style="font-size: 16px;margin-bottom: 20px;padding-left: 20px;">{{theDetailName}}</div>
      <el-radio-group v-model="slider_valuePl" style="margin-left: 20px;">
        <el-radio :label="1">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #70ad47"></i>
            <span style="font-size: 16px;">正常</span>
        </el-radio><br><br>
        <el-radio :label="2">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #fec000"></i>
            <span style="font-size: 16px;">有问题或时间到但未填报</span>
        </el-radio><br><br>
        <el-radio :label="3">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #e96c72"></i>
            <span style="font-size: 16px;">停滞</span>
        </el-radio><br><br>
        <el-radio :label="4">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #333333"></i>
            <span style="font-size: 16px;">已结项</span>
        </el-radio><br><br>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_pl = false">取 消</el-button>
        <el-button type="primary" @click="addJdSurePl">确 定</el-button>
      </span>
    </el-dialog>

  <el-dialog
      title="本月进度填报"
      :visible.sync="dialogVisible_FJ"
      width="30%">
  <div style="font-size: 16px;margin-bottom: 20px;padding-left: 20px;">{{theDetailName}}</div>
      <el-radio-group v-model="slider_valueFJ" style="margin-left: 20px;">
        <el-radio :label="1">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #70ad47"></i>
            <span style="font-size: 16px;">正常</span>
        </el-radio><br><br>
        <el-radio :label="2">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #fec000"></i>
            <span style="font-size: 16px;">有问题或时间到但未填报</span>
        </el-radio><br><br>
        <el-radio :label="3">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #e96c72"></i>
            <span style="font-size: 16px;">停滞</span>
        </el-radio><br><br>
        <el-radio :label="4">
            <span style="display: inline-block;width: 6px;height: 20px;"></span>
            <i class="radio_i" style="background: #333333"></i>
            <span style="font-size: 16px;">已结项</span>
        </el-radio><br><br>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_FJ = false">取 消</el-button>
        <el-button type="primary" @click="addJdSureFJ">确 定</el-button>
      </span>
    </el-dialog>
 </div>
</template>
<script>
export default {
  data () {
    return {
      theDetailName: '',
      userType: 1, // 判断分类
      reformId: '',
      slider_value: 0, // 填报进度
      dialogVisible_jd: false, // 填报进度的容器
      reformIdpl: '',
      slider_valuePl: 0, // 填报进度
      dialogVisible_pl: false, // 填报进度的容器
      reformIdFJ: '',
      slider_valueFJ: 0, // 填报进度
      dialogVisible_FJ: false, // 填报进度的容器
      contentA: '',
      fundsData: [
        {
          name: '学校资料档案费',
          maney: '￥2240',
          progress: 20
        },
        {
          name: '学校公务接待费',
          maney: '￥1660',
          progress: 60
        },
        {
          name: '学校公务运行费',
          maney: '￥2340',
          progress: 50
        },
        {
          name: '学校公议室管理费',
          maney: '￥1340',
          progress: 60
        },
        {
          name: '学校律师顾问及诉讼费',
          maney: '￥4340',
          progress: 40
        },
        {
          name: '学校校史经费',
          maney: '￥3340',
          progress: 30
        }
      ],
      reformId: 0,
      reformType: 0,
      path: '/shTargetDetail/',
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      wrapStyle: [{'height': '100%'}],
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
      targetNoticesFlag: true,
      targetComplateNum: 0,
      planNum: 0,
      planShNum: 0,
      planJdNum: 0,
      gatherData: [], // 第一级别数组
      planTbable: [],
      decomposeData: [],
      flagGather: true,
      planTbableListFlag: false,
      targerLIstFlag: false,
      resultTypeObj: {
        1: 'round1',
        2: 'round2',
        3: 'round3',
        4: 'round4'
      },
      flagAdd: 0,
      gatherDataFlag: true,
      fatherId: 0,
      NoticeId: 0
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
        // self.chartBoxFn()// 经费图表
        self.gatherFn()
      } else {
        self.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
  },
  methods: {
    //  点击计划的整行挑转
    rowClickPlan(row, event, column){
      // console.log(row, event, column)
      if (column.label === '操作') {
        // 不进行操作
      } else {
        // 跳转到详情
        this.$router.push({path: '/wfzPlanDetail/' + row.id })
      }
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
      this.chartBoxFn()// 经费图表
      this.gatherFn()
    },

    // 通知--------------------------------------------
    //通知请求
    targetNoticeFn (deptId) {
      let self = this
      self.messageFn()
      self.targetNotices = []
      let newData = {
        messageStatus: 0,
        deptId: deptId,
        pageNumber: 1,
        pageSize: 6
      }
      self.$ajaxMore('post', self.HOST + '/tr/trUser/web/getUserMessageInfo', newData, (res) => {
        if (res.success) {
          if (res.obj.length == 0) {
            self.targetNoticesFlag = true
          } else {
            self.targetNoticesFlag = false
          }
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
     // 通知弹窗打开
    openDiog (index) {
      this.dialogVisible = true
      this.contentA = ''
      this.reformId = 0
      this.contentA = this.targetNotices[index].content
      this.reformId = this.targetNotices[index].reform_id
      this.reformType = this.targetNotices[index].reform_type
      this.userType = this.targetNotices[index].userType
      this.NoticeId = this.targetNotices[index].id
      this.toDetaiLink(this.NoticeId)
    },
    // 通知弹窗关闭按钮
    close (v) {
          let id = ''
          if (v) {
            id = v
          } else {
            id = this.NoticeId
          }
          let self = this
          self.$ajax('post', self.HOST + '/tr/trUser/web/delBatchMessage', {list: id}, (res) => {
            if (res.success) {
              self.targetNoticeFn(self.deptId)
              self.messageFn()
            } else {
              self.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
    },
    // 消息通知弹窗关闭
    close1(){
      this.dialogVisible=false;
      this.targetNoticeFn(this.deptId)
    },
    
     
   // 通知 查看详情链接
    goDetailTar () {
      if (this.reformType - 0 === 1) {
        if (this.userType - 0 === 1) {
          this.$router.push({path: '/targetDetail/' + this.reformId})
        } else {
          this.$router.push({path: '/shTargetDetail/' + this.reformId})
        }
      } else if (this.reformType - 0 === 2) {
        if (this.userType - 0 === 1) {
          this.$router.push({path: '/wfzPlanDetail/' + this.reformId})
        } else if (this.userType - 0 === 2) {
          this.$router.push({path: '/wshPlanDetail/' + this.reformId})
        } else if (this.userType - 0 === 3) {
        this.$router.push({path: '/wcyPlanDetail/' + this.reformId})
        } else if (this.userType - 0 === 4) {
          this.$router.push({path: '/wjdPlanDetail/' + this.reformId})
        }
        // this.$router.push({path: '/targetDetail/' + this.reformId})
      } else {
        this.$router.push({path: '/zgzjdyyjy'})
      }
    },

     
    // 更新未读条数
    messageFn () {
      let self = this
      let Newdata = {
        messageStatus: 0, // 是否已读   1已读   0 未读
        messageType: 0// 消息通知类型   1 系统通知  2 预警通知
      }
      self.$ajaxMore('post', self.HOST + '/tr/trUser/web/getUserMessageInfoCount', Newdata, (res) => {
        if (res.success) {
          // if (res.obj != 0) {
          self.$store.commit('changeMessageNum', res.obj)
          // }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },

     // 弹窗打开后更新未读条数
    toDetaiLink (v) {
      let self = this
      self.Id = v
      // 1系统通知 2预警通知 3 专家答疑 4 目标与计划
      // reform_type 1 目标 2 计划 3专家答疑
      self.$ajax('post', self.HOST + '/tr/trUser/web/editUserMessageInfo?id=' + self.Id, {}, (res) => {
        if (res.success) {
          self.messageFn()
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
     // 通知 end--------------------------------------------


    // 总数的请求
    targetFn (deptId) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/workbench/web/getWorkbenchData', {deptId: deptId}, (res) => {
        if (res.success) {
          // 目标总数
          self.targetComplateNum = 0
          for (var i = 0, len = res.data.targetComplate.wfz.length; i < len; i++) {
            self.targetComplateNum += res.data.targetComplate.wfz[i].value
          }
          //  计划总数
          self.planNum = 0
          for (var i = 0, len = res.data.planComplate.wfz.length; i < len; i++) {
            self.planNum += res.data.planComplate.wfz[i].value
          }

          //  审核总数
          self.planShNum = 0
          for (var i = 0, len = res.data.planComplate.wsh.length; i < len; i++) {
            self.planShNum += res.data.planComplate.wsh[i].value
          }
          // for (var i = 0, len = res.data.targetComplate.wsh.length; i < len; i++) {
          //   self.planShNum += res.data.targetComplate.wsh[i].value
          // }
          //  监督总数
          self.planJdNum = 0
          for (var i = 0, len = res.data.planComplate.wjd.length; i < len; i++) {
            self.planJdNum += res.data.planComplate.wjd[i].value
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // end ----------------------------------------------------


    // 经费------------------------------------------
     //  经费趋势图表
    chartBoxFn () {
      var option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['1月', '2月', '3月', '4月']
        },
        color: ['#70ad47'],
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#777'
            }
          },
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月']
        },
        yAxis: {
          axisLabel: {
            // formatter: function (value) {
            // var texts = []
            // if (value == 0) {
            //   texts.push('0-500')
            // } else if (value <= 1) {
            //   texts.push('500以上')
            // } else if (value <= 2) {
            //   texts.push('500-1000')
            // } else if (value <= 3) {
            //   texts.push('2000-5000')
            // } else if (value <= 4) {
            //   texts.push('5000-10000')
            // } else {
            //   texts.push('10000以上')
            // }
            // return texts
            // }
          },

          axisLine: {
            lineStyle: {
              color: '#777'
            }
          }
        },
        series: [
          {
            name: '',
            type: 'line',
            data: [3000, 2598, 4852, 4567],
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 4,
                  type: 'solid' // 'dotted'虚线 'solid'实线
                }
              }
            }
          }
        ]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('chartBox')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    // 经费end------------------------------------------


    // 我的目标-----------------------
    gatherFn () {
      let self = this
      let newData = {
        targetClass: 5, // 目标分类 1：我创建的 2：我负责的 3：我审核的 4：我创建或我负责
        deptId: self.deptId, // 目标归属
        resultType: 6, // 完成情况 1：未开始；2：进行中；3：已完成; 4:已延期; 5:延期完成; 6:全部
        startTime: '', // 开始时间
        endTime: '', // 结束时间
        searchName: '', // 查询条件
        pageNumber: 1, // 页码
        pageSize: 1000// 每页显示条数
      }
      self.$ajaxMore('post', self.HOST + '/tr/trTarget/web/getTargetRootList', newData, (res) => {
        if (res.success) {
          if (res.obj.length != 0) {
            self.gatherDataFlag = false
          } else {
            self.gatherDataFlag = true
          }
          self.gatherData = []
          self.gatherData = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },


    //  点击目标  请求计划和分解目标
    accordionFn (v) {
      this.flagAdd = v
      if (v) {
      //  this.flagAdd=v
        let self = this
        self.planTbable = []
        self.decomposeData = []

        self.id = v
        let newData = {
          targetId: v,
          deptId: self.deptId,
          pageNumber: 1, // 页码
          pageSize: 1000// 每页显示条数
        }
        self.planTableFn(newData)

        let newdata1 = {
          deptId: self.deptId,
          parentId: v, // 父目标ID
          pageNumber: 1, // 页码
          pageSize: 1000// 每页显示条数
        }
        self.decomposeFn(newdata1)
      } 
    },

       //  点击手风琴  请求计划
    planTableFn (newData) {
      let self = this
      self.planTbable = []
      self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/getPlanLists', newData, (res) => {
        if (res.success) {
          // for (let i of res.obj) {
          //   let arr = [0,0,0,0,0,0,0,0,0,0,0,0]
          //   for (let item of i.month) {
          //   arr[item.month - 1] = item.monthStatus
          // }
          //    i.arr = arr
          // }
          //  resultType 1 未开始
          // 2 进行中
          // 3 已完成
          // 4  已延期
          // 5 延期完成
          if (res.obj.length == 0) {
            self.planTbableListFlag = false
          } else {
            self.planTbableListFlag = true
          }
          self.planTbable = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    

      //  点击手风琴  请求分解目标
    decomposeFn (newData) {
      let self = this
      self.decomposeData = []
      self.$ajaxMore('post', self.HOST + '/tr/trTarget/web/getTargetList', newData, (res) => {
        if (res.success) {
          //  resultType 1 未开始
          // 2 进行中
          // 3 已完成
          // 4  已延期
          // 5 延期完成
          if (res.obj.length == 0) {
            self.targerLIstFlag = false
          } else {
            self.targerLIstFlag = true
          }
          self.decomposeData = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },

    // 第一层我的目标里面的三哥操作 
     // 我的目标填报进度 -按钮
    showJdBox (row) {
      this.dialogVisible_jd = true
      this.slider_value = row.progress - 0
      this.reformId = row.id
      this.theDetailName = row.target_name
    },
    // -我的目标-----分解
    toDetailTarFJ (id) {
      let data = {
        targetId: id
      }
      this.$ajax('post', this.HOST + '/tr/trTarget/web/checkBeforeSplit', data, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.$router.push({ path: '/splitTarget/' + id })
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
      // 我的目标----编辑      跳转到添加目标-我的目标编辑跳转
    router_to_edit (id) {
      this.$ajax(
        'post',
        this.HOST + '/tr/trTarget/web/getTargetById',
        { targetId: id }, (res) => {
          if (res.success) {
            this.$router.push({path: '/editTarget/' + id})
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },

    // 我的计划 填报进度 -按钮
    showJdBoxPlan (row) {
      this.dialogVisible_pl = true
      if(row.progress!=0){
        this.slider_valuePl = row.month[new Date().getMonth()].monthStatus
      }else{
        this.slider_valuePl=0
      }
      
      this.reformIdpl = row.id
      this.theDetailName = row.plan_name
      // this.slider_valuePl = row.month[new Date().getMonth()]['monthStatus']
    },
    //  我的计划 编辑 -按钮
    router_to_edit_plan (id) {
      this.$ajaxMore(
        'post',
        this.HOST + '/tr/trPlan/web/getPlanDetail',
        { planId: id }, (res) => {
          if (res.success) {
            this.$router.push({path: '/editPlan/' + id})
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },

      // 我的计划 催办 -按钮 
    planAudit (id) {
      let data = {
        planId: id
      }
      this.$ajaxMore('post', this.HOST + '/tr/planAudit/web/sendMessage', data, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.targetNoticeFn(this.deptId)
          // this.messageFn()
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },

    // 子目标的操作
      // 子目标 ---填报进度 -按钮
    showJdBoxFJ (row) {
      this.dialogVisible_FJ = true
      this.slider_valueFJ = row.progress - 0
      this.reformIdFJ = row.id
      this.theDetailName = row.target_name
    },
    // 子目标 ---分解 -按钮
    FJplan (id) {
      let data = {
        targetId: id
      }
      this.$ajaxMore('post', this.HOST + '/tr/trPlan/web/checkBeforeAddPlan', data, (res) => {
        if (res.success) {
          // this.$message({
          //   type: 'success',
          //   message: res.msg
          // })
          this.$router.push({path: '/zdPlan/' + id})
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
       //-编辑 跳转到添加目标
    router_to_editTa (id) {
      this.$ajax(
        'post',
        this.HOST + '/tr/trTarget/web/getTargetById',
        { targetId: id },
        res => {
          if (res.success) {
            this.$router.push({
              path: '/editChildTarget/' + id + '/' + this.flagAdd
            })
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },

    // 我的目标填报进度
    addJdSure () {
      let data = {
        reformId: this.reformId,
        reformType: 1,
        progress: this.slider_value
      }
      this.$ajaxMore('post', this.HOST + '/tr/trPlan/web/editProgress', data, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          // this.slider_valuePl = row.month[new Date().getMonth()]['monthStatus']
          this.dialogVisible_jd = false
          this.gatherFn()
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
   
  // 我的计划进度填报确定按钮
    addJdSurePl () {
      let data = {
        reformId: this.reformIdpl,
        reformType: 2,
        progress: this.slider_valuePl
      }
      this.$ajaxMore('post', this.HOST + '/tr/trPlan/web/editProgress', data, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.dialogVisible_pl = false
          let newData = {
            deptId: this.deptId,
            targetId: this.flagAdd,
            pageNumber: 1, // 页码
            pageSize: 1000// 每页显示条数

          }
          this.planTableFn(newData)
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
 
    addJdSureFJ () {
      let data = {
        reformId: this.reformIdFJ,
        reformType: 1,
        progress: this.slider_valueFJ
      }
      this.$ajaxMore('post', this.HOST + '/tr/trPlan/web/editProgress', data, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.dialogVisible_FJ = false
          let newdata1 = {
            deptId: this.deptId,
            parentId: this.flagAdd, // 父目标ID
            pageNumber: 1, // 页码
            pageSize: 1000// 每页显示条数
          }
          this.decomposeFn(newdata1)
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
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
.mainContentB .box-card:hover,
.mainContentB .box-card.activeCardStyle{
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
height: 394px;
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
.noticeR .noticeRList .el-alert__content{
    width: 88%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    /* cursor: pointer; */
}
.countBox .targetCountB .el-card{
    background-color:#ed7d31!important;
}
.countBox .targetCountC .el-card{
    background-color:#a5a5a5!important;
}
.countBox .targetCountD .el-card{
    background-color:#ffc000!important;
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
    font-size: 46px;
    line-height: 66px;
     color: #fff;
    opacity: 0.8;
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
.targetBox .title,
.planarge .title{
    font-size: 16px;
    color: #37474f;
    line-height: 16px;
    margin-bottom: 20px;
}
.mainContentB .box-card{
    margin-bottom: 24px;
}

/* /我的目标 */
.w_targeTable .has-gutter  th,
.w_targeTable .has-gutter .el-table tr{
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
.nodataPicA{
  position: relative;
  height: 605px;
  text-align: center
  /* top: 50%;
  left: 50%;
  margin-top: -123px;
  margin-left: -208px; */
}
.nodataPicA  img{
   display: inline-block;
  text-align: center;
  margin:auto
}
.w_targeTable .el-table .cell{
line-height: 30px;
}
/* .targeTable  .el-table,.targeTable .el-table th{
    text-align: center;

} */
.w_targeTable .el-table td,
.w_targeTable .el-table th{
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
.targeTable .el-table .cell{
  white-space: nowrap;
 text-overflow:ellipsis;
 overflow:hidden;
}
.prgross{
  float: left;
  width: 100px;
  margin-top: 8px;
}
.prgrossText{
  float: left;
      padding-left: 5px;
    font-size: 12px;
}
.planargeTitle{
   width: 100%;
   display: table;
   margin-top: 30px
}
.planargeTitle ul{
  width: 100%;
 color: #526069;
 font-size: 14px;
 background-color: #f5f8fa;
 line-height: 54px;
 border-bottom: 1px solid #e4eaec;
 display: table-row;
}
.planargeTitle li{
   display: table-cell;
    vertical-align: middle;
    text-align: center
}
.targerLIst{
   width: 100%;
   display: table;
   table-layout: fixed;
}

.targerLIst ul{
  width: 100%;
 color: #76838f;
 font-size: 14px;
 background-color: #fff;
 line-height: 55px;
 border-bottom: 1px solid #e4eaec;
 display: table-row;
}
.mainContentB .el-collapse-item__arrow{
  display: none
}
.targerLIst li{
  /* float: left; */
    display: table-cell;
    vertical-align: middle;
     white-space: nowrap;
    text-overflow:ellipsis;
     overflow:hidden;
      text-align: center;
      position: relative;
}
.mainContentB .group{
  width: 80%;
  height: 21px;
  position: absolute;
  bottom: 10px;
  left: 29px;
}
.mainContentB .nameTarge{
    line-height: 26px;
    position: absolute;
    top: 16px;
    width: 100%
}
.mainContentB .group .prgrossText{
 font-size:10px ;
 line-height: 30px
}
.mainContentB  .el-collapse-item__header{
height: 55px;
}
.targerLIst li.firstL{
   text-align: left;
}
.planargeTitle .firstL,.targerLIst li.firstL{
  position: relative;
  width: 40%;
}
.targerLIst li.firstL .text{
  width: 90%;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
.planargeTitle .nameL,.targerLIst li.nameL{
  width: 10%;
}
.planargeTitle .date,.targerLIst li.date{
  width: 20%
}
.planargeTitle .operate,.targerLIst li.operate{
  width: 20%
}
.planargeTitle .last,.targerLIst li.last{
  width: 10%;
}
.targerLIst li.last .goTablelink{
    display: inline-block;
    background-color: #ffc000;
    padding: 0 8px;
    height: 22px;
    line-height: 22px;
    font-size: 10px;
    color: #fff;
    border-radius: 15px;
}
.targerLIst li.operate span{
display: inline-block;
width: 54px;
height: 54px;
margin-right: -6px;
cursor: pointer;
}
.targerLIst li.operate span .iconfont{
font-size: 16px;
color: #c2c2c2;
line-height: 54px;
}
.targerLIst li.operate .bgColor0:hover,
.targerLIst:hover .bgColor0,
.mainContentB .contentX .box-card:hover .bgColor0,
.mainContentB .box-card.activeCardStyle .targerLIst li.operate .bgColor0,
.mainContentB .box-card.activeCardStyle .targerLIst .bgColor0{
  background-color: #ed7d31;
}
.targerLIst li.operate .bgColor1:hover,
.targerLIst:hover .bgColor1,
.mainContentB .contentX .box-card:hover .bgColor1,
.mainContentB .box-card.activeCardStyle .targerLIst li.operate .bgColor1,
.mainContentB .box-card.activeCardStyle .targerLIst .bgColor1{
  background-color: #ffc000;
}
.targerLIst li.operate .bgColor2:hover,
.targerLIst:hover .bgColor2,
.mainContentB .contentX .box-card:hover .bgColor2,
.mainContentB .box-card.activeCardStyle .targerLIst li.operate .bgColor2,
.mainContentB .box-card.activeCardStyle .targerLIst .bgColor2{
  background-color: #70ad47 ;
}
.targerLIst li.operate .bgColor3:hover,
.targerLIst:hover .bgColor3,
.mainContentB .contentX .box-card:hover .bgColor3,
.mainContentB .box-card.activeCardStyle.targerLIst li.operate .bgColor3,
.mainContentB .box-card.activeCardStyle .targerLIst .bgColor3{
  background-color: #5b9bd5 ;
}
.targerLIst li.operate .bgColor:hover .iconfont,
.targerLIst:hover .bgColor .iconfont,
.mainContentB .contentX .box-card:hover .bgColor  .iconfont,
.mainContentB .box-card.activeCardStyle .targerLIst li.operate .bgColor .iconfont,
.mainContentB .box-card.activeCardStyle .targerLIst .bgColor .iconfont
{
  color: #fff
}
.mainContentB .contentX .box-card:hover .targerLIst ul,
.mainContentB .box-card.activeCardStyle  .targerLIst ul{
background-color: #f5f8fa
}
.mainContentB .contentX .box-card:hover .targerLIstA .targerLIst ul,
.mainContentB .box-card.activeCardStyle .targerLIstA .targerLIst ul{
background-color: #f9fbfc
}

.mainContentB .contentX .box-card{
margin-bottom: 0
}

.mainContentB .contentX .el-card__body{
  padding:0px
}
.planTbableList{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.planTbableList:after,
.planTbableList:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.planTbableList{
  padding: 18px
}
.planTbableList .el-table th{
  font-size: 12px;
  line-height: 48px;
  background-color: #f5f8fa;
  color: #526069
}
.planTbableList .el-table td{
font-size: 12px;
/* line-height: 32px */
}
.planTbableList .el-table th,
.planTbableList .el-table td,
.planTbableList .el-table tr{
border: 1px solid #e4eaec;
position: relative;
border-collapse:collapse;
}
.planTbableList  .el-table .cell{
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  font-size: 12px
}
.mainContentB .planTbableList  .el-table{
  height: auto;
   border-collapse:collapse;
   border: 1px solid #e4eaec;
}
.mainContentB  .el-progress-bar__innerText{
margin-left: 10000px
}
.groupA{
  height: 20px;
  line-height: 20px
}
.prgrossA{
  width: 60%;
  display: inline-block
}
.prgrossTextA{
   width: 24%;
   font-size: 10px;
   text-align: right;
  display: inline-block
}
.targerLIstA ul{
  border-bottom: 1px solid #e4eaec;
}
.targerLIstA li{
 font-size: 12px;
}
.targerLIstA{
  padding: 18px;
}
.bgSpan{
   padding: 2px 10px;
    border-radius: 8px;
       background-color: #f1f7ed;
    border-color: #d5e7c9;
    display: inline-block;
    color: #70AD47;
    line-height: 26px;
}
.round1{
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #70ad47;
  border: 1px solid #999
}
.round2{
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fec000
}
.round3{
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e96c72
}
.round4{
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #333
}

.planTbableList .el-table .cell a.contentTablelink{
  color: #ed7d31
}
.planTbableList .el-table .cell a.contentTablelink1{
  color: #70ad47
}
.planTbableList .el-table .cell a.contentTablelink2{
  color: #5b9bd5
}
.targerLIst .firstL .goTablelink{
color: #76838f
}
.targerLIst .firstL .bgGreen{
color: #70ad47
}
.planTbableList .goTablelink{
  color: #76838f
}
 .planTbableList .el-table .cell,  .planTbableList .el-table th.monthCell div{
 padding-left: 5px!important ;
 padding-right: 5px!important
}
.smallSpan{
  font-size: 12px;
}
#workbench .el-collapse-item__content{
  padding-bottom: 0!important
}
.radio_i {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    transform: translateY(3px)
}
.radio_i+span {
    color: #333;
}
</style>
