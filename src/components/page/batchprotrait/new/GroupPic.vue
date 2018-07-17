<template>
  <div class="teacher_box">
    <div class="addZD">
        <el-button type="warning"  class="reverseBtn" size="small"  @click="addZb"><i class="iconfont">&#xe623;</i>自选指标</el-button>
     </div> 
    <div class="bg_box">
      <!-- 教职工人数 -->
      <div class="jzgrs_box">
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="col_item_box theAll boxShadow">
              <div class="col_item_box_left">
                <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
              </div>
              <div class="col_item_box_right">
                <div>在职教职工人数</div>
                <div>
                  <span>{{zxjzgrs}}</span>人</div>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="col_item_box boxShadow">
              <div class="gender_box">
                <div class="gender_item">
                  <span class="gender_span man">
                    <i class="iconfont" style="color: #62a8ea;font-size: 33px;">&#xe6a6;</i>
                  </span>
                  <span class="font_bold_black">{{man_num}}</span>人
                </div>
                <div class="gender_item">
                  <span class="gender_span woman">
                    <i class="iconfont" style="color: #ff8b91;font-size: 33px;">&#xe6a7;</i>
                  </span>
                  <span class="font_bold_black">{{woman_num}}</span>人
                </div>
                <div class="gender_line">
                  <div class="gender_outside man">男{{man_rate}}%</div>
                  <div class="gender_rate">
                    <!-- <span class="gender_rate_span" :style="genderRateStyle"></span> -->
                    <span class="gender_rate_span" :style="{'width': man_rate + '%'}"></span>
                  </div>
                  <div class="gender_outside woman">女{{woman_rate}}%</div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="col_item_box boxShadow">
              <div class="col_item_box_left">
                <i class="iconfont" style="color: #ffc000">&#xe644;</i>
              </div>
              <div class="col_item_box_right">
                <div>生师比</div>
                <div>
                  <span>{{ssb}}:1</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="col_item_box boxShadow">
              <div class="col_item_box_left">
                <i class="iconfont" style="color: #ffc000">&#xe644;</i>
              </div>
              <div class="col_item_box_right">
                <div>教学事故</div>
                <div>
                  <span>{{jxsg}}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- charts区域 -->
      <div class="charts_box">
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_szjg boxShadow chart_box_cjs"  id="chart_szjg"  >
                <img src="../../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_jzgzcjbzc boxShadow chart_box_cjs" id="chart_jzgzcjbzc">
                <!-- 教职工岗位分类占比 -->
                <img src="../../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_3 boxShadow chart_box_cjs" id="chart_3">
                <!-- 历年教师职称变化情况 -->
                <img src="../../../../assets/empty.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_4 boxShadow chart_box_cjs" id="chart_4">
                <!-- 历年教师学历变化情况 -->
                <img src="../../../../assets/empty.jpg" alt="">
                </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <!-- 历年教职工人数变化情况 -->
              <div class="chart_show chart_5 boxShadow chart_box_cjs"  id="chart_5">
                <img src="../../../../assets/empty.jpg" alt="">
                <!-- 人员类别组成 -->
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_age boxShadow chart_box_cjs"  id="chart_age">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <!-- 专业部门教师数统计 -->
              <div class="chart_show chart_5 boxShadow chart_box_cjs"  id="chart_zybm">
                <img src="../../../../assets/empty.jpg" alt="">
                <!-- 授课教师分布情况 -->
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_age boxShadow chart_box_cjs"  id="chart_skjs">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="false">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_6 boxShadow chart_box_cjs" id="chart_6">
                <!-- 学历组成 -->
                <img src="../../../../assets/empty.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_7 boxShadow chart_box_cjs" id="chart_7">
                <!-- 在职教职工当前学位组成 -->
                <img src="../../../../assets/empty.jpg" alt="">
                </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="false">
          <div class="chart_show chart_8 boxShadow chart_box_cjs" id="chart_8">
            <!-- 各单位学历分布对比统计 -->
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
        </div>
        <div>
          <div class="chart_show chart_9 boxShadow chart_box_cjs" id="chart_9">
            <!-- 各专业部师生比情况 -->
              <img src="../../../../assets/empty.jpg" alt="">
            </div>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_10 boxShadow chart_box_cjs" id="chart_10" style="height: 500px;">
                <!-- 参与义工教职工人数 -->
                <img src="../../../../assets/empty.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_11 boxShadow" id="chart_11" style="height: 500px;">
                <!-- 教师毕业院校层次组成 -->
                <table style="width: 100%;" class="special_table">
                            <thead>
                              <th>德育机构名称</th>
                              <th>机构成员</th>
                              <th>担任职务</th>
                            </thead>
                            <tbody>
                              <template v-for="(item, index) in tableData_002">
                                <tr :key="index">
                                  <td align="center">{{item.value1}}</td>
                                  <td align="center">{{item.value2}}</td>
                                  <td align="center">{{item.value3}}</td>
                                </tr>
                              </template>
                            </tbody>
                          </table>
                <!-- <div style="background: #fff;text-align: center;">
                <img src="../../../../assets/empty.jpg" alt="">
            </div> -->
                </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="false">
          <div class="chart_show chart_12 boxShadow chart_box_cjs" id="chart_12">
            <!-- 民族组成 -->
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
        </div>
        <div v-if="false">
          <div class="chart_show chart_13 boxShadow chart_box_cjs" id="chart_13">
            <!-- 在职教职工人数变化趋势 -->
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
        </div>
        <div v-if="false">
          <div class="chart_show">
            <div class="title">近5年数据学院人员结构变化</div>
            <div class="showCard marginBto24">
              <el-card class="box-card">
                <ul class="clearfix">
                  <li>
                    <p class="name">高学历人员占比</p>
                    <p class="number">
                        <template v-if="people1 > 0">
                            <span style="color: #70ad47">{{people1 + '%'}}</span>
                        </template>
                        <template v-else-if="people1 < 0">
                            <span style="color :#ee8239">{{people1 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">青年教师占比</p>
                    <p class="number">
                      <template v-if="people2 > 0">
                            <span style="color: #70ad47">{{people2 + '%'}}</span>
                        </template>
                        <template v-else-if="people2 < 0">
                            <span style="color :#ee8239">{{people2 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">中年教师占比</p>
                    <p class="number">
                        <template v-if="people3 > 0">
                            <span style="color: #70ad47">{{people3 + '%'}}</span>
                        </template>
                        <template v-else-if="people3 < 0">
                            <span style="color :#ee8239">{{people3 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">外聘教师占比</p>
                    <p class="number">
                        <template v-if="people4 > 0">
                            <span style="color: #70ad47">{{people4 + '%'}}</span>
                        </template>
                        <template v-else-if="people4 < 0">
                            <span style="color :#ee8239">{{people4 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">专任教师占比</p>
                    <p class="number">
                        <template v-if="people5 > 0">
                            <span style="color: #70ad47">{{people5 + '%'}}</span>
                        </template>
                        <template v-else-if="people5 < 0">
                            <span style="color :#ee8239">{{people5 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">中层干部占比</p>
                    <p class="number">
                        <template v-if="people6 > 0">
                            <span style="color: #70ad47">{{people6 + '%'}}</span>
                        </template>
                        <template v-else-if="people6 < 0">
                            <span style="color :#ee8239">{{people6 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">教授占比</p>
                    <p class="number">
                        <template v-if="people7 > 0">
                            <span style="color: #70ad47">{{people7 + '%'}}</span>
                        </template>
                        <template v-else-if="people7 < 0">
                            <span style="color :#ee8239">{{people7 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">本省教师占比</p>
                    <p class="number">
                        <template v-if="people8 > 0">
                            <span style="color: #70ad47">{{people8 + '%'}}</span>
                        </template>
                        <template v-else-if="people8 < 0">
                            <span style="color :#ee8239">{{people8 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">同源教师占比</p>
                    <p class="number">
                        <template v-if="people9 > 0">
                            <span style="color: #70ad47">{{people9 + '%'}}</span>
                        </template>
                        <template v-else-if="people9 < 0">
                            <span style="color :#ee8239">{{people9 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                  <li>
                    <p class="name">高层次人员占比</p>
                    <p class="number">
                        <template v-if="people10 > 0">
                            <span style="color: #70ad47">{{people10 + '%'}}</span>
                        </template>
                        <template v-else-if="people10 < 0">
                            <span style="color :#ee8239">{{people10 + '%'}}</span>
                        </template>
                        <template v-else>
                            <span style="color: #5b9bd5">无变化</span>
                        </template>
                    </p>
                  </li>
                </ul>
              </el-card>
            </div>
          </div>
        </div>
        <div v-if="false">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_14 boxShadow" id="chart_14">
                <!-- 各单位职称级别分布对比统计 -->
                <div style="background: #fff;text-align: center;">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_15 boxShadow" id="chart_15">
                <!-- 职称级别分布变化趋势统计 -->
                <div style="background: #fff;text-align: center;">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
                </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="false">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_szjg boxShadow" style="height: 740px;">
                <div class="title">各部门综合得分评比</div>
                <el-table :data="gbmzhdfData" style="width: 100%">
                  <el-table-column label="排名" align="center">
                    <template slot-scope="scope">
                      {{pageSize1 * (currentPage1 - 1) + 1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="deptname" label="部门" align="center">
                  </el-table-column>
                  <el-table-column prop="score" label="综合得分" align="center">
                  </el-table-column>
                </el-table>
                <div style="text-align: center;margin-top: 30px;">
                    <el-pagination
                    @size-change="handleSizeChange1"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-size="pageSize1"
                    background
                    layout="prev, pager, next"
                    :total="totalSize1">
                    </el-pagination>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show boxShadow">
                <div class="title">历年学历提升人员</div>
                <el-table :data="lnxlData" style="width: 100%">
                  <el-table-column align="center" label="序号" width="50">
                    <template slot-scope="scope">
                      {{pageSize2 * (currentPage2 - 1) + 1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="username" label="名称"  align="center">
                  </el-table-column>
                  <el-table-column prop="qdxlsj" label="取得学历时间"  align="center">
                  </el-table-column>
                  <el-table-column prop="xxl" label="现学历" align="center" show-overflow-tooltip>
                  </el-table-column>
                </el-table>
                <div style="text-align: center;margin-top: 30px;">
                    <el-pagination
                    @current-change="handleCurrentChange2"
                    :current-page="currentPage2"
                    :page-size="pageSize2"
                    background
                    layout="prev, pager, next"
                    :total="totalSize2">
                    </el-pagination>
                </div>
              </div>
              <div class="chart_show chart_jzgzcjbzc boxShadow">
                <div class="title">各单位职称级别综合排名</div>
                <el-table :data="zcData" style="width: 100%">
                  <el-table-column label="排名" align="center">
                    <template slot-scope="scope">
                      {{pageSize3 * (currentPage3 - 1) + 1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="deptname" label="部门" align="center">
                  </el-table-column>
                  <el-table-column prop="zc_score" label="职级综合得分" align="center">
                  </el-table-column>
                </el-table>
                <div style="text-align: center;margin-top: 30px;">
                    <el-pagination
                    background
                    @current-change="handleCurrentChange3"
                    :current-page="currentPage3"
                    :page-size="pageSize3"
                    layout="prev, pager, next"
                    :total="totalSize3">
                    </el-pagination>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div  v-if="false">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_szjg boxShadow">
                <div class="title">历年职称晋级人员</div>
                <el-table :data="lnData" style="width: 100%">
                  <el-table-column label="序号" align="center" width="50">
                    <template slot-scope="scope">
                      {{pageSize4 * (currentPage4 - 1) + 1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="username" label="名称"  align="center" show-overflow-tooltip>
                  </el-table-column>
                  <el-table-column prop="jjnf" label="晋级年份" >
                  </el-table-column>
                  <el-table-column prop="xzc" label="现职称" show-overflow-tooltip align="center">
                  </el-table-column>
                </el-table>
                <div style="text-align: center;margin-top: 30px;">
                    <el-pagination
                    background
                    @current-change="handleCurrentChange4"
                    :current-page="currentPage4"
                    :page-size="pageSize4"
                    layout="prev, pager, next"
                    :total="totalSize4">
                    </el-pagination>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_jzgzcjbzc boxShadow">
                <div class="title">个人年龄排名</div>
                <el-table :data="oneData" style="width: 100%">
                  <el-table-column label="序号" align="center" width="50">
                     <template slot-scope="scope">
                      {{pageSize5 * (currentPage5 - 1) + 1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="username" label="姓名"  align="center">
                  </el-table-column>
                  <el-table-column prop="ssbm" label="所属部门" align="center" show-overflow-tooltip>
                  </el-table-column>
                  <el-table-column prop="age" label="年龄"  align="center">
                  </el-table-column>
                </el-table>
                <div style="text-align: center;margin-top: 30px;">
                    <el-pagination
                    background
                    @current-change="handleCurrentChange5"
                    :current-page="currentPage5"
                    :page-size="pageSize5"
                    layout="prev, pager, next"
                    :total="totalSize5">
                    </el-pagination>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="last_oDiv"  v-if="false">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_16 boxShadow" id="chart_16">
                <!-- 教师参加培训 -->
                <div style="background: #fff;text-align: center;">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
                </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_17 boxShadow" id="chart_17">
                <!-- 教师流失率分析 -->
                <div style="background: #fff;text-align: center;">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
                </div>
            </el-col>
          </el-row>
        </div>
        <div  v-if="false">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_szjg boxShadow" style="height: 411px;">
                <el-row :gutter="0">
                  <el-col :span="12">
                    <div class="col_div" style="border-left: 0">
                      <div class="col_title">
                        <a href="javascript:void(0)">EI论文收录</a>
                      </div>
                      <div>
                        <span style="color: #70ad47">{{ value1 }}</span>
                        <span>相比上年度</span>
                        <span>{{ value2 }}%</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="col_div">
                      <div class="col_title">
                        <a href="javascript:void(0)">SCI引用论文收录</a>
                      </div>
                      <div>
                        <span style="color: #ee8239">{{ value3 }}</span>
                        <span>相比上年度</span>
                        <span>{{ value4 }}%</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="col_div" style="border-left: 0">
                      <div class="col_title">
                        <a href="javascript:void(0)">CSSCI论文收录</a>
                      </div>
                      <div>
                        <span style="color: #ffc000">{{ value5 }}</span>
                        <span>相比上年度</span>
                        <span>{{ value6 }}%</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="col_div">
                      <div class="col_title">
                        <a href="javascript:void(0)">SCI论文收录</a>
                      </div>
                      <div>
                        <span style="color: #5b9bd5">{{ value7 }}</span>
                        <span>相比上年度</span>
                        <span>{{ value8 }}%</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="col_div" style="border-left: 0">
                      <div class="col_title">
                        <a href="javascript:void(0)">EL扩展论文收录</a>
                      </div>
                      <div>
                        <span style="color: #00a6a6">{{ value9 }}</span>
                        <span>相比上年度</span>
                        <span>{{ value10 }}%</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="col_div">
                      <div class="col_title">
                        <a href="javascript:void(0)">SCIE论文收录</a>
                      </div>
                      <div>
                        <span style="color: #6c6fbf">{{ value11 }}</span>
                        <span>相比上年度</span>
                        <span>{{ value12 }}%</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_18 boxShadow" style="height: 411px;" id="chart_18">
                <!-- 历年发表各类论文/篇 -->
                <div style="background: #fff;text-align: center;">
                <img src="../../../../assets/empty.jpg" alt="">
            </div>
                </div>
            </el-col>
          </el-row>
        </div>
      </div>
      
      <!-- 后台自选 -->
      <zxzb-common type="1"></zxzb-common>
      <chart-common flag="4" v-if="is_show"></chart-common>
       <btnCommon :dialogVisible="addZb_dialogVisible" @cancel='cancel' :sureADD="sureAdd" flag="4" v-if="addZb_dialogVisible"></btnCommon>

    </div>
  </div>
</template>
<script>
import zxzbCommon from './zxzbCommon.vue'
import chartCommon from '../../myhxCommon/chartCommon.vue'
import btnCommon from '../../myhxCommon/btnCommon.vue'
export default {
  components: { zxzbCommon ,chartCommon, btnCommon },
  data () {
    return {
       is_show: true,
      addZb_dialogVisible:false,
      tableData_002: [],
      jxsg: '',
      genderRateStyle: 'width: ' + this.man_rate + '%',
      zzmmList: [], // 政治面貌
      people1: '',
      people2: '',
      people3: '',
      people4: '',
      people5: '',
      people6: '',
      people7: '',
      people8: '',
      people9: '',
      people10: '',
      lnData: [],
      oneData: [],
      lnxlData: [],
      zcData: [],
      gbmzhdfData: [],
      type: '1',
      zxjzgrs: '', // 在校教职工人数
      ssb: '', // 师生比
      man_num: '',
      woman_num: '',
      man_rate: '',
      woman_rate: '',
      baseUrl: this.HOST + '/tr/GroupPortrait/web/getPortraitInfoById',
      currentPage1: 1,
      pageSize1: 17,
      totalSize1: 0,
      currentPage2: 1,
      pageSize2: 5,
      totalSize2: 0,
      currentPage3: 1,
      pageSize3: 5,
      totalSize3: 0,
      currentPage4: 1,
      pageSize4: 5,
      totalSize4: 0,
      currentPage5: 1,
      pageSize5: 5,
      totalSize5: 0,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: ''
    }
  },
  mounted () {
    // 获取教师基本信息
    this.$ajaxGet(
      this.baseUrl,
      {id: 40},
      res => {
        if (res.success) {
          this.zxjzgrs = res.data.value1
          this.man_num = res.data.value2
          this.woman_num = res.data.value4
          this.man_rate = res.data.value3 * 100
          this.woman_rate = res.data.value5 * 100
          this.ssb = res.data.value6
          this.jxsg = res.data.value7
          this.genderRateStyle = 'width: ' + res.data.series.value4 + '%'
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 41},
      res => {
        if (res.success) {
          res.data.series[0].radius = ['0%', '60%']
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              show: true,
              formatter: '{b}({c}' + res.data.unit + ')'
            // position: 'inside'
            }
          }
          this.$ChartUtil.drawChartNoXY('chart_szjg', res.data.title, [], this.$ChartUt.VERTICAL, res.data.series, [], {}, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 42},
      res => {
        if (res.success) {
          res.data.series[0].radius = ['0%', '60%']
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              show: true,
              formatter: '{b}({c}' + res.data.unit + ')'
            // position: 'inside'
            }
          }
          this.$ChartUtil.drawChartNoXY('chart_jzgzcjbzc', res.data.title, [], this.$ChartUt.VERTICAL, res.data.series, [], {}, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 43},
      res => {
        if (res.success) {
          let series = []
          for (let key in res.data.series) {
            series.push({
              type: 'line',
              name: key,
              data: res.data.series[key]
            })
          }
          this.$ChartUtil.drawChart(
            'chart_3',
            res.data.title,
            res.data.legend,
            this.$ChartUt.VERTICAL,
            series,
            res.data.xAxis,
            false,
            {
              // legend: {
              //   data: res.data.legend,
              //   orient: 'horizontal',
              //   y: 25
              // },
              yAxis: [
                {
                  type: 'value',
                  name: '（' + res.data.unit + '）'
                }
              ],
              grid: {
                x: 30,
                x2: 120,
                y2: 20
              },
              tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人<br/>{a2}:{c2}人<br/>{a3}:{c3}人<br/>{a4}:{c4}人'
              },
              customattrs: {xrotate: 0}
            },
            this
          )
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 44},
      res => {
        if (res.success) {
		 res.data.series[0].radius = ['0%', '60%']
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              show: true,
              formatter: '{b}({c}' + res.data.unit + ')'
            // position: 'inside'
            }
          }
          this.$ChartUtil.drawChartNoXY('chart_4', res.data.title, [], this.$ChartUt.VERTICAL, res.data.series, [], {}, this)
        /* let series = []
          for (let key in res.data.series) {
            series.push({
              type: 'bar',
              name: key,
              data: res.data.series[key]
            })
          }
          this.$ChartUtil.drawChart(
            'chart_4',
            res.data.title,
            res.data.legend,
            this.$ChartUt.VERTICAL,
            series,
            res.data.xAxis,
            false,
            {
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
              grid: {
                x: 30,
                x2: 120,
                y2: 60
              },
               tooltip : {
                trigger: 'axis',
                formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人<br/>{a2}:{c2}人<br/>{a3}:{c3}人<br/>{a4}:{c4}人'
              },
              customattrs: {xrotate: 0}
            },
            this
          ) */
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 45},
      res => {
        if (res.success) {
          this.$ChartUtil.drawChart('chart_5', res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, false, {legend: {
            y: '20',
            data: res.data.legend
          },
          yAxis: [
            {
              type: 'value',
              name: '（' + res.data.unit + '）'
            }
          ],
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{c0}人'
          },
          customattrs: {xrotate: 0}
          }, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 46},
      res => {
        if (res.success) {
          this.$ChartUtil.drawChart('chart_age', res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, false, {
            yAxis: [
              {
                type: 'value',
                name: '（' + res.data.unit + '）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{c0}人'
            },
            legend: {
              y: '20',
              data: res.data.legend
            }}, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 47},
      res => {
        if (res.success) {
          this.$ChartUtil.drawChart('chart_zybm', res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, true, {
            yAxis: [
              {
                type: 'value',
                name: '（' + res.data.unit + '）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{c0}人'
            },
            legend: {
              y: '20',
              data: res.data.legend
            },
            grid: {
              y2: 100
            }
          }, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 48},
      res => {
        if (res.success) {
          res.data.series[0].radius = ['0%', '60%']
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              show: true,
              formatter: '{b}({c}' + res.data.unit + ')'
            // position: 'inside'
            }
          }
          this.$ChartUtil.drawChartNoXY('chart_skjs', res.data.title, [], this.$ChartUt.VERTICAL, res.data.series, [], {}, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 49},
      res1 => {
        if (res1.success) {
          this.$ajaxGet(
            this.baseUrl,
            {id: 50},
            res => {
              if (res.success) {
                this.$ChartUtil.drawChart('chart_9', res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, true, {
                  title: {
                    text: res.data.title,
                    subtext: '全校生师比 ' + res1.data.value1,
                    textStyle: {// 标题内容的样式
                      fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                      fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
                      fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
                      fontSize: 18// 主题文字字体大小，默认为18px
                    }
                  },
                  // yAxis : [
                  //     {
                  //       type : 'value',
                  //       name :'（'+res.data.unit+'）'
                  //     }
                  //   ],
                  grid: {
                    x: 50,
                    x2: 50,
                    y: 90,
                    y2: 100
                  },
                  tooltip: {
                    trigger: 'axis',
                    formatter: '{b}<br/>{c0}人'
                  },
                  legend: {
                    y: '20',
                    data: res.data.legend
                  }}, this)
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            }
          )
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxGet(
      this.baseUrl,
      {id: 51},
      res => {
        if (res.success) {
          this.$ChartUtil.drawChart('chart_10', res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, true, {
            yAxis: [
              {
                type: 'value',
                name: '（' + res.data.unit + '）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{c0}人'
            },
            legend: {
              y: '20',
              data: res.data.legend
            },
            grid: {
              y2: 80
            }
          }, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    this.$ajaxMore(
      'post',
      this.HOST + '/tr/GroupPortrait/web/getPortraitInfoByCon',
      {id: 52,
        pageSize: 1,
        pageLength: 10},
      res => {
        if (res.success) {
          this.tableData_002 = res.data.data
        // this.$ChartUtil.drawChart('chart_10', '参与义工教职工人数', res.data.legend, '', res.data.series, res.data.xAxis, true, {legend: {
        //   y: '20',
        //   data: res.data.legend
        // }}, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
  },
  methods: {
    sureAdd () {
      this.addZb_dialogVisible = false
      this.is_show = false
      setTimeout(() => {
        this.is_show = true
      },0)
    },
    cancel(){
      this.addZb_dialogVisible=false
    },
    // 添加指标
    addZb: function () {
      this.addZb_dialogVisible=true
    },
    handleSizeChange1 (val) {
      console.log(val)
    },
    handleCurrentChange1 (val) {
      this.getList_1(val, 17)
    },
    handleCurrentChange2 (val) {
      this.getList_2(val, 5)
    },
    handleCurrentChange3 (val) {
      this.getList_3(val, 5)
    },
    handleCurrentChange4 (val) {
      this.getList_4(val, 5)
    },
    handleCurrentChange5 (val) {
      this.getList_5(val, 5)
    },
    indexMethod (index) {
      return index + 1
    },
    //
    getList_1 (n, len) {
      this.$ajaxMore('post', this.baseUrl, {
        portraitId: 120,
        pageSize: n,
        pageLength: len
      }, (res) => {
        if (res.success) {
          this.totalSize1 = res.data.total
          this.currentPage1 = res.data.currentPage
          this.gbmzhdfData = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    getList_2 (n, len) {
      this.$ajaxMore('post', this.baseUrl, {
        portraitId: 121,
        pageSize: n,
        pageLength: len
      }, (res) => {
        if (res.success) {
          this.totalSize2 = res.data.total
          this.currentPage2 = res.data.currentPage
          this.lnxlData = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    getList_3 (n, len) {
      this.$ajaxMore('post', this.baseUrl, {
        portraitId: 122,
        pageSize: n,
        pageLength: len
      }, (res) => {
        if (res.success) {
          this.totalSize3 = res.data.total
          this.currentPage3 = res.data.currentPage
          this.zcData = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    getList_4 (n, len) {
      this.$ajaxMore('post', this.baseUrl, {
        portraitId: 123,
        pageSize: n,
        pageLength: len
      }, (res) => {
        if (res.success) {
          this.totalSize4 = res.data.total
          this.currentPage4 = res.data.currentPage
          this.lnData = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    getList_5 (n, len) {
      this.$ajaxMore('post', this.baseUrl, {
        portraitId: 124,
        pageSize: n,
        pageLength: len
      }, (res) => {
        if (res.success) {
          this.totalSize5 = res.data.total
          this.currentPage5 = res.data.currentPage
          this.oneData = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    showMap (ele, title, data) {
      let myChart = this.$echarts.init(ele)
      let option = {
        title: {
          show: true,
          top: '2%',
          text: '教师毕业院校地域分布',
          textStyle: {
            // 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 18 // 主题文字字体大小，默认为18px
          }
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            // var value = (params.value + '').split('.')
            // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
            return params.name + ': ' + params.value[2]
          }
        },
        geo: {
          map: 'china',
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            coordinateSystem: 'geo',
            // type: 'map',
            type: 'scatter',
            // name: '地域分布',
            // roam: true,
            data: this.convertData(data),
            // map: 'china',
            symbolSize: 8,
            symbolRotate: 35,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#F06C00'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    convertData: function (data) {
      var geoCoordMap = {
        '安徽': [117.17, 31.52],
        '北京': [116.24, 39.55],
        '重庆': [106.54, 29.59],
        '福建': [119.18, 26.05],
        '甘肃': [103.51, 36.04],
        '广东': [113.14, 23.08],
        '广西': [108.19, 22.48],
        '贵州': [106.42, 26.35],
        '海南': [110.20, 20.02],
        '河北': [114.30, 38.02],
        '河南': [113.40, 34.46],
        '黑龙江': [126.36, 45.44],
        '湖北': [114.17, 30.35],
        '湖南': [112.59, 28.12],
        '吉林': [125.19, 43.54],
        '江苏': [118.46, 32.03],
        '江西': [115.55, 28.40],
        '辽宁': [123.25, 41.48],
        '内蒙古': [111.41, 40.48],
        '宁夏': [106.16, 38.27],
        '青海': [101.48, 36.38],
        '山东': [117.00, 36.40],
        '山西': [112.33, 37.54],
        '陕西': [108.57, 34.17],
        '上海': [121.29, 31.14],
        '四川': [104.04, 30.40],
        '天津': [117.12, 39.02],
        '西藏': [91.08, 29.39],
        '新疆': [87.36, 43.45],
        '云南': [102.42, 25.04],
        '浙江': [120.10, 30.16],
        '香港': [115.12, 21.23],
        '澳门': [115.07, 21.33],
        '台湾': [121.30, 25.03]
      }
      var res = []
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }
  }
}
</script>
<style scoped>
.col_item_box {
    height: 160px;
    position: relative;
    box-sizing: border-box;
    padding: 0 10px;
    vertical-align: top;
    background: #fff;
    border-radius: 4px;
}
.col_item_box.theAll {
    background: #70ad47;
    color: #fff;
}
.content_item_title {
    font-size: 16px;
    color: #37474f;
    height: 16px;
    border-left: 4px solid #70ad47;
    line-height: 16px;
    padding-left: 10px;
    margin: 15px 0;
}
.col_item_box_left i.iconfont {
    font-size: 47px;
    vertical-align: top;
}
div.col_item_box_left {
    width: 70px;
    line-height: 160px;
    text-align: center;
}
div.col_item_box_right {
    width: 100%;
    box-sizing: border-box;
    padding-left: 70px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: #a3afb7;
}
.col_item_box.theAll div.col_item_box_right {
    color: #fff;
}
div.col_item_box_right > div:first-child {
    margin-top: 39px;
}
div.col_item_box_right > div > span {
    font-size: 24px;
    color: #526069;
}
.col_item_box.theAll div.col_item_box_right > div > span {
    color: #fff;
}
div.col_item_box_right > div:first-child + div {
    margin-top: 5px;
}
.gender_box {
    font-size: 0;
}
.gender_item {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    text-align: center;
    line-height: 50px;
    margin: 32px 0;
}
.gender_span {
    display: inline-block;
    vertical-align: top;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
}
.gender_span.man {
    border: 1px solid #d9e8fe;
    background: #ebf3ff;
}
.gender_span.woman {
    background: #fff2f5;
    border: 1px solid #ffdae3;
}
.font_bold_black {
    font-size: 23px;
    color: #526069;
}
div.gender_rate {
    display: inline-block;
    height: 8px;
    width: 70%;
    border-radius: 4px;
    background: #ff8b91;
    overflow: hidden;
}
div.gender_rate .gender_rate_span {
    display: block;
    height: 100%;
    background: #62a8ea;
    width: 50%;
}
.gender_line {
    font-size: 0;
}
div.gender_outside {
    display: inline-block;
    width: 15%;
    font-size: 12px;
}
.gender_outside.man {
    text-align: right;
    color: #62a8ea;
}
.gender_outside.woman {
    color: #ff8b91;
}
.jzgrs_box {
    margin-top: 20px;
}
.chart_show {
    height: 360px;
    background: #fff;
    overflow: hidden;
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
    padding: 0 19%;
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
    font-size: 24px;
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
.col_div {
    height: 138px;
    border-bottom: 1px solid #e4eaec;
    border-left: 1px solid #e4eaec;
    box-sizing: border-box;
    padding-top: 40px;
}
/* .last_oDiv .col_div:nth-of-type(odd) {
  border-left: 0 !important;
} */
.col_div .col_title {
    font-size: 12px;
    color: #585858;
}
.col_div > div {
    width: 160px;
    margin: 0 auto;
}
.col_div > div span {
    color: #a3afb7;
    font-size: 12px;
}
.col_div > div > span:first-child {
    color: #6c6fbf;
    font-size: 30px;
    font-family: "Arial";
}
.chart_show {
    margin-top: 22px;
    padding: 20px;
    box-sizing: border-box;
}
/* .chart_show_child {
  width: 100%;
  height: 100%;
} */
div.title {
    height: 58px;
    line-height: 58px;
    font-size: 16px;
    color: #37474f;
    padding-left: 26px;
}
/* .titleTop {
    line-height: 18px;
    padding-top: 0;
    font-size: 18px;
    color: #37474f;
    padding-left: 10px;
    border-left: 5px solid #70ad47;
    margin-bottom: 24px;
}
.content_item {
  background:#fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
  display: none;
} */

.addZD{
  text-align: right;
  margin-bottom: 10px;
  margin-top: -10px;
}
</style>
