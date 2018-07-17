<template>
  <div class="mainContent_school schoolgroup">
    <div class="addZD">
        <el-button type="warning" class="reverseBtn" size="small"  @click="addZb"><i class="iconfont">&#xe623;</i>自选指标</el-button>
     </div>
      <div class="list_card marginBtom24 clearfix">
          <div class="schoolShow">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor1">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">教职工总数</p>
                    <p class="num">
                        <span>{{value1}}</span>
                        人
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">在校生总数</p>
                    <p class="num">
                        <span>{{value2}}</span>
                        人
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor3">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">院系数</p>
                    <p class="num">
                        <span>{{value3}}</span>
                      个
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor4">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">教育特色项目</p>
                    <p class="num">
                        <span>{{value4}}</span>
                        个
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow last">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor5">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">固定资产</p>
                    <p class="num">
                        <span>{{value5}}</span>
                         万元
                    </p>
                </div>
              </el-card>
          </div>
      </div>

      <div class="personnelBox marginBtom24">
        <div class="titleTop">人才培养</div>
         <div class="personneGroup marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="RecruitStudentsPic">
                         <el-card class="box-card">
                             <!-- <div>
                                 <p class="textTitle">{{value_1_title}}</p>
                                 <p class="caption">
                                  {{value_1_tip}}:<span>{{value_5_01}}</span>人
                                 </p>
                             </div> -->
                             <div class="RecruitStudentsEcharts chart_box_cjs" id="RecruitStudentsEcharts">
                               <img src="../../../../assets/empty.jpg" alt="">
                             </div>
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="SituationPic">
                         <el-card class="box-card">
                           <!-- <div>
                                 <p class="textTitle">{{value_2_title}}</p>
                                 <p class="caption">
                                  在校生人数：<span>{{value_6_01}}</span>人
                                 </p> -->
                                   <!-- <p class="caption captionA">
                                     女：<span>{{value_6_03}}人</span>
                                    男: <span>{{value_6_04}}人</span>
                                 </p> -->
                             <!-- </div> -->
                             <div class="SituationEcharts chart_box_cjs" id="SituationEcharts">
                               <img src="../../../../assets/empty.jpg" alt="">
                             </div>
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>
      </div>

        <div class="personnelBox marginBtom24">
                <div class="RecruitStudentsPic">
                  <el-row :gutter="20">
                <el-col :span="12">
                        <el-card class="box-card">
                            <!-- <div>
                                <p class="textTitle">{{value_3_title}}</p> -->
                                <!-- <p class="caption">
                                毕业人数：<span>{{value_7_01}}</span>人
                                就业率：<span>{{value_7_02}}%</span>
                                <span>
                                <i class="iconfont">&#xe614;</i>{{value_7_03}}%
                                </span>
                                </p> -->
                            <!-- </div> -->
                            <div class="graduatioEcharts chart_box_cjs" id="byqk_01">
                              <img src="../../../../assets/empty.jpg" alt="">
                            </div>
                        </el-card>
                </el-col>
                <el-col :span="12">
                        <el-card class="box-card">
                            <!-- <div>
                                <p class="textTitle">{{value_4_title}}</p> -->
                                <!-- <p class="caption">
                                毕业人数：<span>{{value_7_01}}</span>人
                                就业率：<span>{{value_7_02}}%</span>
                                <span>
                                <i class="iconfont">&#xe614;</i>{{value_7_03}}%
                                </span>
                                </p> -->
                            <!-- </div> -->
                            <div class="graduatioEcharts chart_box_cjs" id="bysrs_01">
                              <img src="../../../../assets/empty.jpg" alt="">
                            </div>
                        </el-card>
                </el-col>
                  </el-row>
                </div>
            </div>
      <!-- 素质教育>>>> -->
      <div>
             <div class="titleTop" style="margin-top: 20px;">素质教育</div>
             <div class="CourseSituation">
                 <el-row :gutter="20">
                    <el-col :span="12">
                         <div class="schoolShow">
                            <el-card class="box-card clearfix">
                                <div class="countBoxL">
                                    <i class="iconfont iconColor2">&#xe644;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">社团数</p>
                                    <p class="num">
                                        <span>{{value_sts}}</span>
                                        个
                                    </p>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="12">
                         <div class="schoolShow">
                            <el-card class="box-card clearfix">
                                <div class="countBoxL">
                                    <i class="iconfont iconColor2">&#xe644;</i>
                                </div>
                                <div class="countBoxR">
                                    <p class="text">四星级社团数</p>
                                    <p class="num">
                                        <span>{{value_sxsts}}</span>
                                        个
                                    </p>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                 </el-row>
             </div>
             <div class="schoolGroup marginBto24">
            <!-- <el-row :gutter="20">
                <el-col :span="12"> -->
                    <div class="fundsPic">
                         <el-card class="box-card">
                           <!-- <div>
                                 <p class="textTitle">{{value_5_title}}</p> -->
                                 <!-- <p class="caption">
                                  总投入：<span>{{value_2_01}}</span>千万元 <span>
                                    <i class="iconfont">&#xe614;</i>{{value_2_02}}%
                                  </span>
                                 </p> -->
                             <!-- </div> -->
                             <div class="acreageEcharts chart_box_cjs" id="st_chart">
                               <img src="../../../../assets/empty.jpg" alt="">
                             </div>
                         </el-card>
                    </div>
                <!-- </el-col>
          </el-row> -->
        </div>
        </div>
      <!-- <<<<素质教育 -->
      <!-- 义务活动 -->
      <div class="personnelBox marginBtom24">
        <div class="titleTop" style="margin-top: 20px;">义务活动情况</div>
                <div class="RecruitStudentsPic">
                  <el-row :gutter="20">
                <el-col :span="12">
                        <el-card class="box-card">
                            <!-- <div>
                                <p class="textTitle">{{value_6_title}}</p> -->
                                <!-- <p class="caption">
                                毕业人数：<span>{{value_7_01}}</span>人
                                就业率：<span>{{value_7_02}}%</span>
                                <span>
                                <i class="iconfont">&#xe614;</i>{{value_7_03}}%
                                </span>
                                </p> -->
                            <!-- </div> -->
                            <div class="graduatioEcharts chart_box_cjs" id="ywhd_001">
                              <img src="../../../../assets/empty.jpg" alt="">
                            </div>
                        </el-card>
                </el-col>
                <el-col :span="12">
                        <el-card class="box-card">
                            <!-- <div>
                                <p class="textTitle">{{value_7_title}}</p> -->
                                <!-- <p class="caption">
                                毕业人数：<span>{{value_7_01}}</span>人
                                就业率：<span>{{value_7_02}}%</span>
                                <span>
                                <i class="iconfont">&#xe614;</i>{{value_7_03}}%
                                </span>
                                </p> -->
                            <!-- </div> -->
                            <div class="graduatioEcharts chart_box_cjs" id="ywhd_002">
                              <img src="../../../../assets/empty.jpg" alt="">
                            </div>
                        </el-card>
                </el-col>
                  </el-row>
                </div>
            </div>
      <!-- 义务活动 -->
      <!-- 专业情况 -->
      <div class="schoolTerm marginBtom24" >
              <div class="titleTop">专业建设</div>
              <div class="list_card marginBtom24 clearfix">
          <div class="schoolShow" style="margin-top: 0;">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor1">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">专业部</p>
                    <p class="num">
                        <span>{{value_zy_05}}</span>
                        个
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow" style="margin-top: 0;">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor2">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">专业</p>
                    <p class="num">
                        <span>{{value_zy_01}}</span>
                        个
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow" style="margin-top: 0;">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor3">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">国家示范专业</p>
                    <p class="num">
                        <span>{{value_zy_02}}</span>
                      个
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow" style="margin-top: 0;">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor4">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">省级示范专业</p>
                    <p class="num">
                        <span>{{value_zy_03}}</span>
                        个
                    </p>
                </div>
              </el-card>
          </div>
          <div class="schoolShow last" style="margin-top: 0;">
               <el-card class="box-card clearfix">
                <div class="countBoxL">
                    <i class="iconfont iconColor5">&#xe644;</i>
                </div>
                <div class="countBoxR">
                    <p class="text">市级重点专业</p>
                    <p class="num">
                        <span>{{value_zy_04}}</span>
                         个
                    </p>
                </div>
              </el-card>
          </div>
      </div>
              <!-- <div class="schoolTerm_List">
                   <el-row :gutter="20">
                       <el-col :span="6">
                            <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor1">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">总专业数</p>
                                            <p class="num">
                                                <span>{{value_zy_01}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor2">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">国示范专业数</p>
                                            <p class="num">
                                                <span>{{value_zy_02}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">省示范专业数</p>
                                            <p class="num">
                                                <span>{{value_zy_03}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor4">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">市重点建设专业数</p>
                                            <p class="num">
                                                <span>{{value_zy_04}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                    </el-row>
              </div> -->

              <div>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-card class="box-card">
                      <div class="pieEcharts" id="zyjs_chart"></div>
                    </el-card>
                  </el-col>
                  <el-col :span="12">
                    <el-card class="box-card">
                      <div class="pieEcharts chart_box_cjs" id="zybzcg_chart"><img src="../../../../assets/empty.jpg" alt=""></div>
                    </el-card>
                  </el-col>
                </el-row>
             </div>
        </div>
      <!-- 专业情况 -->
      <!-- 课程情况 -->
      <div>
            <div class="titleTop" style="margin-top: 20px;">课程情况</div>
            <div class="courseInfo">
                 <el-row :gutter="20">
                       <el-col :span="8">
                            <div class="schoolShow schoolShowInfo">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont">&#xe680;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">课程总数</p>
                                            <p class="num">
                                                <span>{{value_10_01}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="8">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor2">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">公共素质课</p>
                                            <p class="num">
                                                <span>{{value_10_02}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="8">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">专业课</p>
                                            <p class="num">
                                                <span>{{value_10_03}}</span>
                                                个
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>

                    </el-row>
            </div>
        </div>

        <div>
            <div>
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-card class="box-card">
                      <div style="height: 310px;">
                      <div class="chart_show_div chart_box_cjs" id="xqhzkc_01">
                        <img src="../../../../assets/empty.jpg" alt="">
                      </div>
                    </div>
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card class="box-card">
                      <div style="height: 310px;">
                      <div class="chart_show_div chart_box_cjs" id="xqhzjc_01">
                        <img src="../../../../assets/empty.jpg" alt="">
                      </div>
                    </div>
                      </el-card>
                    </el-col>
                  </el-row>
                    <!-- <div class="averageEcharts" id="averageEcharts"></div> -->
            </div>
        </div>
      <!-- 课程情况 -->
      <!-- 教师概况 -->
      <div>
            <div class="titleTop" style="margin-top: 20px;">教师概况</div>
            <div class="courseInfo">
                 <el-row :gutter="20">
                       <el-col :span="6">
                            <div class="schoolShow schoolShowInfo">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont">&#xe680;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">在职教职工人数</p>
                                            <p class="num">
                                                <span>{{value_js_01}}</span>
                                                人
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor2">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">专任教师</p>
                                            <p class="num">
                                                <span>{{value_js_02}}</span>
                                                人
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">外聘教师</p>
                                            <p class="num">
                                                <span>{{value_js_03}}</span>
                                                人
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">生师比</p>
                                            <p class="num">
                                                <span>{{value_js_04}}</span>
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                    </el-row>
            </div>
        </div>

        <div>
            <div>
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-card class="box-card">
                      <div style="height: 310px;">
                      <div class="chart_show_div chart_box_cjs" id="js_chart_01">
                        <img src="../../../../assets/empty.jpg" alt="">
                      </div>
                    </div>
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card class="box-card">
                      <div style="height: 310px;">
                      <div class="chart_show_div chart_box_cjs" id="js_chart_02">
                        <img src="../../../../assets/empty.jpg" alt="">
                      </div>
                    </div>
                      </el-card>
                    </el-col>
                  </el-row>
                    <!-- <div class="averageEcharts" id="averageEcharts"></div> -->
            </div>
        </div>
      <!-- 教师概况 -->
      <!-- 资源建设 -->
      <div>
            <div class="titleTop" style="margin-top: 20px;">资源建设</div>
            <div class="resourceBox marginBtom24">
              <!--<div class="courseInfo">
                 <el-row :gutter="20">
                       <el-col :span="6">
                            <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor1">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">学校占地面积</p>
                                            <p class="num">
                                              <span class="first">{{value_3_01}}</span>万㎡
                  <span>{{value_3_02}}</span>㎡/生
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor2">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">校舍占地面积</p>
                                            <p class="num">
                                                <span class="first">{{value_3_03}}</span>万㎡
                  <span>{{value_3_04}}</span>㎡/生
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">纸质藏书</p>
                                            <p class="num">
                                                <span class="first">{{value_3_05}}</span>万册
                  <span>{{value_3_06}}</span>册/生
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">电子图书</p>
                                            <p class="num">
                                                <span class="first">{{value_3_07}}</span>万册
                  <span>{{value_3_08}}</span>册/生
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                    </el-row>
            </div>-->
          <el-card class="box-card clearfix">
            <!-- <div class="captionTitle">资源设备</div> -->
            <div class="clearfix">
              <div class="item">
                <p class="resName">学校占地面积</p>
                <p class="resNum color1">
                  <span class="first"><em>{{value_3_01}}</em>万㎡</span>
                  <span><em>{{value_3_02}}</em>㎡/生</span>
                </p>
              </div>
               <div class="item">
                <p class="resName">校舍占地面积</p>
                <p class="resNum color2">
                  <span class="first"><em>{{value_3_03}}</em>万㎡</span>
                  <span><em>{{value_3_04}}</em>㎡/生</span>
                </p>
              </div>
               <div class="item">
                <p class="resName">纸质藏书</p>
                <p class="resNum color3">
                  <span class="first"><em>{{value_3_05}}</em>万册</span>
                  <span><em>{{value_3_06}}</em>册/生</span>
                </p>
              </div>
               <div class="item borderNone">
                <p class="resName">电子图书</p>
                <p class="resNum color4">
                  <span class="first"><em>{{value_3_07}}</em>万册</span>
                  <span><em>{{value_3_08}}</em>册/生</span>
                </p>
              </div>
            </div>
         </el-card>
      </div>
                 <!-- <el-row :gutter="20">
                       <el-col :span="6">
                            <div class="schoolShow schoolShowInfo">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont">&#xe680;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">学校占地面积</p>
                                            <p class="num">
                                                <span>{{value_zyjs_01}}</span>
                                                万㎡
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor2">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">专任教师</p>
                                            <p class="num">
                                                <span>{{value_js_02}}</span>
                                                人
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">外聘教师</p>
                                            <p class="num">
                                                <span>{{value_js_03}}</span>
                                                人
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                        <el-col :span="6">
                             <div class="schoolShow">
                                    <el-card class="box-card clearfix">
                                        <div class="countBoxL">
                                            <i class="iconfont iconColor3">&#xe644;</i>
                                        </div>
                                        <div class="countBoxR">
                                            <p class="text">生师比</p>
                                            <p class="num">
                                                <span>{{value_js_04}}</span>
                                            </p>
                                        </div>
                                    </el-card>
                                </div>
                        </el-col>
                    </el-row> -->
            <!-- </div> -->
        </div>

        <div>
            <div class="marginBtom24">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-card class="box-card">
                      <div style="height: 310px;">
                      <div class="chart_show_div chart_box_cjs" id="zyjs_chart_01">
                        <img src="../../../../assets/empty.jpg" alt="">
                      </div>
                    </div>
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <!-- <el-card class="box-card">
                      <div style="height: 310px;">
                      <div class="chart_show_div" id="zyjs_chart_02"></div>
                    </div>
                      </el-card> -->
                      <el-card class="box-card">
                        <div class="bookGroup clearfix">
                            <div class="item_book" style="width: 100%">
                                <div class="book_topTitle">仪器设备</div>
                                 <div class="xqItem">
                                    <p class="num">{{value_13_01}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>总价值(万元)</p>
                                </div>
                                  <div class="xqItem borderNone">
                                    <p class="num">{{value_13_02}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>新增设备值(万元)</p>
                                </div>
                                  <div class="xqItem ">
                                    <p class="num">{{value_13_05}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>共拥有(件)</p>
                                </div>
                                  <div class="xqItem borderNone ">
                                    <p class="num">{{value_13_06}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>总价值（万元）</p>
                                </div>
                            </div>
                             <!-- <div class="item_book item_bookA" v-if="false">
                                  <div class="book_topTitle book_topTitleA">贵重设备</div>
                                  <div class="xqItem">
                                    <p class="num">{{value_13_03}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>共拥有(件)</p>
                                </div>
                                  <div class="xqItem borderNone">
                                    <p class="num">{{value_13_04}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>总价值（万元）</p>
                                </div>
                                    <div class="xqItem" v-if="false">
                                    <p class="num">{{value_13_07}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>共拥有(件)</p>
                                </div>
                                  <div class="xqItem borderNone" v-if="false">
                                    <p class="num">{{value_13_08}}</p>
                                    <p><i class="iconfont">&#xe680;</i></p>
                                    <p>总价值（万元）</p>
                                </div>
                            </div> -->
                        </div>
                 </el-card>
                    </el-col>
                  </el-row>
                    <!-- <div class="averageEcharts" id="averageEcharts"></div> -->
            </div>
        </div>
        <div>
        <div class="marginBtom24">
                  <el-row :gutter="20">
                      <el-col :span="12">
                           <el-card class="box-card">
                                <!-- <div class="textTitle">{{value_8_title}}</div> -->
                                <div class="deviceEcharts chart_box_cjs" id="deviceEcharts">
                                  <img src="../../../../assets/empty.jpg" alt="">
                                </div>
                            </el-card>
                      </el-col>
                      <el-col :span="12">
                           <el-card class="box-card">
                                <!-- <div class="textTitle">{{value_9_title}}</div> -->
                                <div class="fundsCompareEcharts chart_box_cjs" id="fundsCompareEcharts">
                                  <img src="../../../../assets/empty.jpg" alt="">
                                </div>
                            </el-card>
                      </el-col>
                  </el-row>

             </div>

            <!-- 2018/7/3添加 -->
            <!-- <div class="teachTOP"  >
               <el-card class="box-card">
              <div class="textTitle listTitle_w">学校本年度各指标变化</div>
                  <table style="width: 100%;word-wrap:break-word; word-break:break-all;" class="special_table twoCenter">
                    <thead>
                      <tr>
                        <th style="width:14%">上升教学指标</th>
                        <th style="width:14%">下降教学指标</th>

                        <th style="width:14%">年度快速变化指标</th>
                        <th style="width:14%">年度不合格指标</th>
                        <th style="width:14%">年度变化（改善、恶化）情况</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>{{TopList[0][0]}}</td>
                        <td>{{TopList[1][0]}}</td>

                        <td>{{TopList[4][0]}}</td>
                        <td>{{TopList[5][0]}}</td>
                        <template v-if="TopList[6][0].type">
                          <td style="color: #70ad47;">{{TopList[6][0]['label']}}</td>
                        </template>
                        <template v-else>
                          <td style="color: #f00;">{{TopList[6][0]['label']}}</td>
                        </template>
                      </tr>
                      <tr>
                        <td>{{TopList[0][1]}}</td>
                        <td>{{TopList[1][1]}}</td>
                        <td>{{TopList[4][1]}}</td>
                        <td>{{TopList[5][1]}}</td>
                        <template v-if="TopList[6][1].type">
                          <td style="color: #70ad47;">{{TopList[6][1]['label']}}</td>
                        </template>
                        <template v-else>
                          <td style="color: #f00;">{{TopList[6][1]['label']}}</td>
                        </template>
                      </tr>
                      <tr>
                        <td>{{TopList[0][2]}}</td>
                        <td>{{TopList[1][2]}}</td>
                        <td>{{TopList[4][2]}}</td>
                        <td>{{TopList[5][2]}}</td>
                        <template v-if="TopList[6][2].type">
                          <td style="color: #70ad47;">{{TopList[6][2]['label']}}</td>
                        </template>
                        <template v-else>
                          <td style="color: #f00;">{{TopList[6][2]['label']}}</td>
                        </template>
                      </tr>
                      <tr>
                        <td>{{TopList[0][3]}}</td>
                        <td>{{TopList[1][3]}}</td>
                        <td>{{TopList[4][3]}}</td>
                        <td>{{TopList[5][3]}}</td>
                        <template v-if="TopList[6][3].type">
                          <td style="color: #70ad47;">{{TopList[6][3]['label']}}</td>
                        </template>
                        <template v-else>
                          <td style="color: #f00;">{{TopList[6][3]['label']}}</td>
                        </template>
                      </tr>
                      <tr>
                        <td>{{TopList[0][4]}}</td>
                        <td>{{TopList[1][4]}}</td>
                        <td>{{TopList[4][4]}}</td>
                        <td>{{TopList[5][4]}}</td>
                        <template v-if="TopList[6][4].type">
                          <td style="color: #70ad47;">{{TopList[6][4]['label']}}</td>
                        </template>
                        <template v-else>
                          <td style="color: #f00;">{{TopList[6][4]['label']}}</td>
                        </template>
                      </tr>
                    </tbody>
                  </table>
          </el-card>
           </div> -->
            <!-- 2018/7/3添加 -->
          <!-- 2018/7/3添加 -->
          <!-- <div class="teachTOP" style="margin-top: 20px">
            <el-card class="box-card">
              <div class="textTitle listTitle_w">学校各指标历史变化</div>
              <table style="width: 100%;word-wrap:break-word; word-break:break-all;" class="special_table twoCenter">
                <thead>
                <tr>
                  <th style="width:14%">历史波动较大的指标</th>
                  <th style="width:14%">历史反复升降的指标</th>
                  <th style="width:14%">历史最低指标</th>
                  <th style="width:14%">历史最高指标</th>
                  <th style="width:14%">历史累计增长较大的指标</th>
                  <th style="width:14%">历史累计增长较小的指标</th>
                  <th style="width:14%">历史持续增长的指标</th>
                  <th style="width:14%">历史持续下降的指标</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{{TopList1[0][0]}}</td>
                  <td>{{TopList1[1][0]}}</td>
                  <td>{{TopList1[2][0]}}</td>
                  <td>{{TopList1[3][0]}}</td>
                  <td>{{TopList1[4][0]}}</td>
                  <td>{{TopList1[5][0]}}</td>
                  <td>{{TopList1[6][0]}}</td>
                  <td>{{TopList1[7][0]}}</td>

                </tr>
                <tr>
                  <td>{{TopList1[0][1]}}</td>
                  <td>{{TopList1[1][1]}}</td>
                  <td>{{TopList1[2][1]}}</td>
                  <td>{{TopList1[3][1]}}</td>
                  <td>{{TopList1[4][1]}}</td>
                  <td>{{TopList1[5][1]}}</td>
                  <td>{{TopList1[6][1]}}</td>
                  <td>{{TopList1[7][1]}}</td>

                </tr>
                <tr>
                  <td>{{TopList1[0][2]}}</td>
                  <td>{{TopList1[1][2]}}</td>
                  <td>{{TopList1[2][2]}}</td>
                  <td>{{TopList1[3][2]}}</td>
                  <td>{{TopList1[4][2]}}</td>
                  <td>{{TopList1[5][2]}}</td>
                  <td>{{TopList1[6][2]}}</td>
                  <td>{{TopList1[7][2]}}</td>

                </tr>
                <tr>
                  <td>{{TopList1[0][3]}}</td>
                  <td>{{TopList1[1][3]}}</td>
                  <td>{{TopList1[2][3]}}</td>
                  <td>{{TopList1[3][3]}}</td>
                  <td>{{TopList1[4][3]}}</td>
                  <td>{{TopList1[5][3]}}</td>
                  <td>{{TopList1[6][3]}}</td>
                  <td>{{TopList1[7][3]}}</td>

                </tr>
                <tr>
                  <td>{{TopList1[0][4]}}</td>
                  <td>{{TopList1[1][4]}}</td>
                  <td>{{TopList1[2][4]}}</td>
                  <td>{{TopList1[3][4]}}</td>
                  <td>{{TopList1[4][4]}}</td>
                  <td>{{TopList1[5][4]}}</td>
                  <td>{{TopList1[6][4]}}</td>
                  <td>{{TopList1[7][4]}}</td>
                </tr>

                </tbody>
              </table>
            </el-card>
          </div> -->
          <!-- 2018/7/3添加 -->
        </div>
       <zxzb-common type="3"></zxzb-common>
       <chart-common flag="1" v-if="is_show"></chart-common>
     <btnCommon :dialogVisible="addZb_dialogVisible" @cancel='cancel' :sureADD="sureAdd" flag="1" v-if="addZb_dialogVisible"></btnCommon>

  </div>
</template>
<script>
import zxzbCommon from './zxzbCommon.vue'
import chartCommon from '../../myhxCommon/chartCommon.vue'
import btnCommon from '../../myhxCommon/btnCommon.vue'
export default {
  components: { zxzbCommon ,chartCommon, btnCommon  },
  data () {
    return {
      is_show: true,
      addZb_dialogVisible:false,
      TopList: [
        ['教学工作量', '统考成绩 ','发表论文、专著','上课情况','科研开发'],
        ['当年新增图书数量', '当年新增杂志（期刊）数量 ','教学管理人员占比','学生管理人员占比','--'],
        ['当年电子图书总量', '全校专任师资数量 ','外籍教师数量','校级以上专业带头人数量','--'],
        ['全校专业师生比', '杂志总量 ','当年新增杂志数量','--','--'],
        ['外籍教师数量', '当年电子图书总量 ','当年新增杂志数量','--','--'],
        ['工资福利支出占比', '图书资源支出 ','学生补助支出','社团学生人数','--'],
        [{label: '当年新增图书数量', type: 0}, {label: '教学工作量', type: 1}, {label: '统考成绩', type: 1},{label: '发表论文、专著', type: 1},{label: '当年新增杂志（期刊）数量', type: 0}]
      ],
      TopList1: [
        [' 当年电子图书总量', '图书资源支出 ','当年新增杂志数量','--','--'],
        ['外籍教师数量', '教学管理人员占比 ','全校专业师生比','--','--'],
        ['当年电子图书总量', '全校专任师资数量 ','外籍教师数量','校级以上专业带头人数量','--'],
        ['全校专业师生比', '杂志总量 ','当年新增杂志数量','--','--'],
        ['当年电子图书总量', '外籍教师数量 ','全校专任师资数量 ','招生数量','--'],
        ['校级以上专业带头人数量', '教学管理人员占比 ','全校专业师生比','--','--'],
        ['当年电子图书总量 ', '全校专任师资数量 ','招生数量','省级以上获奖兼职教师数量占教师总量的百分比','--'],
        ['纸质图书总量 ', '图书资源支出 ','申请专业变动率','每个课程总学分','--'],



      ],
      baseUrl: this.HOST + '/tr/GroupPortrait/web/getPortraitInfoById',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value_1_01: '',
      value_1_02: '',
      value_1_03: '',
      value_1_04: '',
      value_1_05: '',
      value_1_06: '',
      value_2_01: '',
      value_2_02: '',
      value_3_01: '',
      value_3_02: '',
      value_3_03: '',
      value_3_04: '',
      value_3_05: '',
      value_3_06: '',
      value_3_07: '',
      value_3_08: '',
      value_4_01: '',
      value_4_02: '',
      value_4_03: '',
      value_5_01: '',
      value_5_02: '',
      value_5_03: '',
      value_5_04: '',
      value_6_01: '',
      value_6_02: '',
      value_6_03: '',
      value_6_04: '',
      value_7_01: '',
      value_7_02: '',
      value_7_03: '',
      value_8_01: '',
      value_8_02: '',
      value_8_03: '',
      value_8_04: '',
      value_9_01: '',
      value_9_02: '',
      value_9_03: '',
      value_9_04: '',
      value_9_05: '',
      value_9_06: '',
      value_9_07: '',
      value_9_08: '',
      value_10_01: '',
      value_10_02: '',
      value_10_03: '',
      value_10_04: '',
      value_11_01: '',
      value_11_02: '',
      value_12_01: '',
      value_12_02: '',
      value_12_03: '',
      value_12_04: '',
      value_13_01: '',
      value_13_02: '',
      value_13_03: '',
      value_13_04: '',
      value_13_05: '',
      value_13_06: '',
      value_13_07: '',
      value_13_08: '',
      value_1_title:'',
      value_1_tip:'',
      value_2_title:'',
      value_3_title:'',
      value_4_title:'',
      value_5_title:'',
      value_6_title:'',
      value_7_title:'',
      value_8_title:'',
      value_9_title:'',
      ysxkItems: [], // 优势学科
      options: [
        {
          value: '选项1',
          label: '2017年'
        },
        {
          value: '选项2',
          label: '2016年'
        },
        {
          value: '选项3',
          label: '2015年'
        },
        {
          value: '选项4',
          label: '2014年'
        },
        {
          value: '选项5',
          label: '2013年'
        }
      ],
      value: '',
      // 素质教育
      value_sts: '',
      value_sxsts: '',
      // 专业建设
      value_zy_01: '',
      value_zy_02: '',
      value_zy_03: '',
      value_zy_04: '',
	  value_zy_05: '',
      // 教师概况
      value_js_01: '',
      value_js_02: '',
      value_js_03: '',
      value_js_04: ''
    }
  },
  mounted () {
    // 获取基本情况
    this.$ajaxGet(
      this.baseUrl,
      {id: 1},
      res => {
        if (res.success) {
          this.value1 = res.data.value1
          this.value2 = res.data.value2
          this.value3 = res.data.value3
          this.value4 = res.data.value4
          this.value5 = res.data.value5
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // 获取招生情况
    // this.$ajaxGet(
    //   this.baseUrl,
    //   {
    //     id: 2
    //   },
    //   (res) => {
    //     if (res.success) {
    //       this.value_1_tip=res.data.title
    //       this.value_5_01 = res.data.value1
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: 'error'
    //       })
    //     }
    //   }
    // )
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 3
      },
      (res) => {
        if (res.success) {
          this.$ajaxGet(
              this.baseUrl,
            {
              id: 2
            },
          (res1) => {
           if (res1.success) {

          this.$ChartUtil.drawChart(
            'RecruitStudentsEcharts',
            res.data.title,
            res.data.legend,
            '',
            res.data.series,
            res.data.xAxis,
            false,
            {
              title: {
              text: res.data.title,
              subtext: res1.data.title+":" + res1.data.value1,
              textStyle: {// 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 16// 主题文字字体大小，默认为18px
          }
            },
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                  formatter : '{b}<br/>{c0}人'
              },
              grid: {
                x: 50,
                y: 100,
                x2: 30,
                y2: 60
              }
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
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // 获取在校生情况
    // this.$ajaxGet(
    //   this.baseUrl,
    //   {
    //     id: 4
    //   },
    //   (res) => {
    //     if (res.success) {
    //       this.value_6_01 = res.data.value1
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: 'error'
    //       })
    //     }
    //   }
    // )
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 5
      },
      (res) => {
        if (res.success) {
      this.$ajaxGet(
      this.baseUrl,
      {
        id: 4
      },
      (res1) => {
        if (res1.success) {
          this.$ChartUtil.drawChart(
            'SituationEcharts',
            res.data.title,
            res.data.legend,
            '',
            res.data.series,
            res.data.xAxis,
            false,
            {
              title: {
              text: res.data.title,
              subtext: res1.data.title+":" + res1.data.value1,
              textStyle: {// 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 16// 主题文字字体大小，默认为18px
          }
            },
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                  formatter : '{b}<br/>{c0}人'
              },
              grid: {
                x: 50,
                y: 100,
                x2: 80,
                y2: 80
              }
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
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // byqk_01
    // 获取毕业情况
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 6
      },
      (res) => {
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
            'byqk_01',
            res.data.title,
            res.data.legend,
            '',
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
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                    formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人'

              },
              grid: {
                x: 50,
                y: 100,
                x2: 30,
                y2: 60
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
    // 获取毕业生人数
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 7
      },
      (res) => {
        if (res.success) {
          res.data.series[0].radius = '60%'
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'bysrs_01',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
	// 获取专业标志成果
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 64
      },
      (res) => {
        if (res.success) {
          res.data.series[0].radius = '60%'
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+(res.data.unit || '个')+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'zybzcg_chart',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 8
      },
      (res) => {
        if (res.success) {
          this.value_sts = res.data.value1
          this.value_sxsts = res.data.value2
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
      {
        id: 9
      },
      (res) => {
        if (res.success) {
          let series = []
          for (let key in res.data.series) {
            series.push({
              name: key,
              type: 'bar',
              data: res.data.series[key]
            })
          }
          this.$ChartUtil.drawChart(
            'st_chart',
            res.data.title,
            res.data.legend,
            '',
            series,
            res.data.xAxis,
            true,
            {
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                    formatter : '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人'

              },
              grid: {
                x: 33,
                y:100,
                x2: 30,
                y2: 120
              },
              legend: {
                data: res.data.legend,
                y: 30
              }
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
    // 义务活动
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 10
      },
      (res) => {
        if (res.success) {
          this.value_6_title=res.data.title
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].radius = '60%'
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'ywhd_001',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 11
      },
      (res) => {
        if (res.success) {
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].radius = '60%'
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'ywhd_002',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 12
      },
      (res) => {
        if (res.success) {
          this.value_zy_01 = res.data.value1
          this.value_zy_02 = res.data.value2
          this.value_zy_03 = res.data.value3
          this.value_zy_04 = res.data.value4
		  this.value_zy_05 = res.data.value5
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
      {
        id: 13
      },
      (res) => {
        if (res.success) {
          this.$ChartUtil.drawChart(
            'zyjs_chart',
            res.data.title,
            res.data.legend,
            '',
            res.data.series,
            res.data.xAxis,
            true,
            {
              yAxis : [
                {
                  type : 'value',
                  name :'（'+res.data.unit+'）'
                }
              ],
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                    formatter : '{b}<br/>{c0}个'

              },
              grid: {
                x: 33,
                y:70,
                x2: 30,
                y2: 100
              }
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
    // 课程情况
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 14
      },
      (res) => {
        if (res.success) {
          this.value_10_01 = res.data.value1
          this.value_10_02 = res.data.value2
          this.value_10_03 = res.data.value3
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
      {
        id: 15
      },
      (res) => {
        if (res.success) {
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].radius = '60%'
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'xqhzkc_01',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 16
      },
      (res) => {
        if (res.success) {
          let series = []
          for (let key in res.data.series) {
            series.push({
              name: key,
              type: 'bar',
              // barGap: '0%',
              data: res.data.series[key]
            })
          }
          this.$ChartUtil.drawChart(
            'xqhzjc_01',
            res.data.title,
            res.data.legend,
            '',
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
                tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                    formatter : '{b}<br/>{a0}:{c0}个<br/>{a1}:{c1}个'

              },
              grid: {
                x: 33,
                x2: 30,
                y: 80,
                y2: 60
              },
              customattrs: {xrotate: 0}
              // legend: {
              //   data: res.data.legend,
              //   y: 10
              // }
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
      {
        id: 17
      },
      (res) => {
        if (res.success) {
          this.value_js_01 = res.data.value1
          this.value_js_02 = res.data.value2
          this.value_js_03 = res.data.value3
          this.value_js_04 = res.data.value4
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
      {
        id: 18
      },
      (res) => {
        if (res.success) {
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].radius = '60%'
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'js_chart_01',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 19
      },
      (res) => {
        if (res.success) {
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].radius = '60%'
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'js_chart_02',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 20
      },
      (res) => {
        if (res.success) {
          this.value_3_01 = res.data.value1
          this.value_3_02 = res.data.value2
          this.value_3_03 = res.data.value3
          this.value_3_04 = res.data.value4
          this.value_3_05 = res.data.value5
          this.value_3_06 = res.data.value6
          this.value_3_07 = res.data.value7
          this.value_3_08 = res.data.value8
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
      {
        id: 21
      },
      (res) => {
        if (res.success) {
          res.data.series[0].center = ['50%', '60%']
          res.data.series[0].radius = '60%'
          res.data.series[0].label = {
            normal: {
              formatter: '{b}({c}'+res.data.unit+')'
            }
          }
          this.$ChartUtil.drawChartNoXY(
            'zyjs_chart_01',
            res.data.title,
            [],
            '',
            res.data.series,
            '',
            {},
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
      {
        id: 22
      },
      (res) => {
        if (res.success) {
          this.value_13_01 = res.data.value1
          this.value_13_02 = res.data.value2
          this.value_13_05 = res.data.value3
          this.value_13_06 = res.data.value4
          // this.value_3_05 = res.data.value5
          // this.value_3_06 = res.data.value6
          // this.value_3_07 = res.data.value7
          // this.value_3_08 = res.data.value8
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
      {
        id: 23
      },
      (res) => {
        if (res.success) {
              let yAxis = [
              {
                axisLabel: {formatter: "{value}"},
                formatter: "{value} 万元",
                name: "设备资产值("+res.data.unit.split('-')[0]+")",
                position: 'left',
                type: "value"
              },
              {
                axisLabel: {formatter: "{value}"},
                formatter: "{value}",
                name: "生均设备值("+res.data.unit.split('-')[1]+")",
                position: 'right',
                type: "value"
              }
            ]
            let series = []
            for (let k in res.data.series) {
              if (k === '生均设备值') {
                series.push({
                  name: k,
                  type: "line",
                  yAxisIndex: 1,
                  data: res.data.series[k]
                })
                continue
              }
              series.push({
                name: k,
                type: "bar",
                stack: 1,
                yAxisIndex: 0,
                data: res.data.series[k]
              })
            }
            this.$ChartUtil.drawChart('deviceEcharts', res.data.title, res.data.legend, '', series, res.data.xAxis, false, {
              grid: {
                x: 50,
                y: 120,
                x2: 60,
                y2: 60
              },
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                    formatter : '{b}<br/>{a0}:{c0}万元<br/>{a1}:{c1}万元<br/>{a2}:{c2}万元/人'

              },
            //   legend: {
            //   y: '20',
            //   data: res.data.legend
            // },
            customattrs: {xrotate: 0},
            yAxis: yAxis
            }, this)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
    // 生均教学仪器设备值    fundsCompareEcharts
    this.$ajaxGet(
      this.baseUrl,
      {
        id: 24
      },
      (res) => {
        if (res.success) {
              let yAxis = [
              {
                axisLabel: {formatter: "{value}"},
                formatter: "{value} 人",
                name: "在校生数("+res.data.unit.split('-')[0]+")",
                position: 'left',
                type: "value"
              },
              {
                axisLabel: {formatter: "{value}"},
                formatter: "{value} 万元/人",
                name: "生均仪器值("+res.data.unit.split('-')[1]+")",
                position: 'right',
                type: "value"
              }
            ]
            let series = []
            for (let k in res.data.series) {
              if (k === '生均仪器值') {
                series.push({
                  name: k,
                  type: "line",
                  yAxisIndex: 1,
                  data: res.data.series[k]
                })
                continue
              }
              series.push({
                name: k,
                type: "line",
                yAxisIndex: 0,
                data: res.data.series[k]
              })
            }
            this.$ChartUtil.drawChart('fundsCompareEcharts', res.data.title, res.data.legend, '', series, res.data.xAxis, false, {
              grid: {
                x: 50,
                y: 120,
                x2: 70,
                y2: 60
              },
               tooltip : {
                  trigger: 'axis',
                  // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  // },
                    formatter : '{b}<br/>{a0}:{c0}万元/人<br/>{a1}:{c1}人'

              },
            //   legend: {
            //   y: '20',
            //   data: res.data.legend
            // },
            customattrs: {xrotate: 0},
            yAxis: yAxis
            }, this)
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
.marginBtom24 {
  margin-bottom: 24px;
}
.mainContent_school {
  background-color: #f1f4f5;
  padding: 0 1.64%;
}
.mainContent_school .titleTop {
  line-height: 18px;
  padding-top: 0;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
.mainContent_school .box-card {
  position: relative;
}
.mainContent_school .textTitle {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
}
.captionTitle {
  padding-left: 15px;
  font-size: 16px;
  color: #76838f;
  line-height: 58px;
  margin-bottom: 10px;
  height: 58px;
  border-bottom: 1px solid #e4eaec;
}
.mainContent_school .box-card .caption {
  padding-left: 15px;
  font-size: 14px;
  color: #76838f;
  line-height: 24px;
  margin-bottom: 10px;
}
.mainContent_school .box-card .caption span {
  color: #70ad47;
}
.mainContent_school .box-card .captionA span {
  margin-right: 15px;
}
.mainContent_school .box-card .caption .down {
  color: #ed7d31;
  padding-left: 10px;
}
.schoolShow {
  margin-top: 60px;
  float: left;
  width: 19%;
  margin-right: 1.2%;
}
.schoolShow .box-card {
  margin-bottom: 0;
}
.list_card .last {
  margin-right: 0;
}
.schoolShow .countBoxL,
.countBoxR {
  vertical-align: middle;
  display: inline-block;
  height: 70px;
  padding-bottom: 14px;
  padding-top: 14px;
}
.schoolShow .countBoxL {
  width: 30%;
  text-align: center;
}
.schoolShow .countBoxL .iconfont {
  font-size: 32px;
  color: #fff;
  line-height: 62px;
}
.schoolShow .countBoxL .iconfont {
  font-size: 48px;
  line-height: 72px;
}
.schoolShow .countBoxL .iconColor1 {
  color: #70ad47;
}
.schoolShow .countBoxL .iconColor2 {
  color: #ffc000;
}
.schoolShow .countBoxL .iconColor3 {
  color: #62a8ea;
}
.schoolShow .countBoxL .iconColor4 {
  color: #ed7d31;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxL .iconColorA {
  color: #dd6969;
}
.schoolShow .countBoxL .iconColorB {
  color: #f1cdcd;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxR {
  width: 62%;
}
.schoolShow p,
.schoolShow .text {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.schoolShow p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.schoolGroup .box-card {
  height: 419px;
}
.schoolGroup .acreageEcharts,
.schoolGroup .fundsEcharts {
  height: 400px;
}
.resourceBox .el-card__body {
  padding: 0;
}
.resourceBox .caption {
  font-size: 16px;
  line-height: 58px;
  color: #37474f;
  padding-right: 24px;
  border-bottom: 1px solid #e4eaec;
}

.resourceBox .item {
  float: left;
  width: 25%;
  height: 137px;
  padding-top: 32px;
  border-right: 1px solid #e4eaec;
  box-sizing: border-box;
}
.resourceBox .borderNone {
  border-right: none;
}
.resourceBox .resName {
  padding-left: 38px;
  line-height: 24px;
  font-size: 13px;
  color: #76838f;
  padding-bottom: 14px;
}
.resourceBox .resNum em {
  font-size: 30px;
  font-style: normal;
  line-height: 28px;
}
.resourceBox .resNum {
  padding-left: 38px;
  font-size: 14px;
}
.resourceBox .first {
  padding-right: 10px;
}
.color1 {
  color: #70ad47;
}
.color2 {
  color: #ffc000;
}
.color3 {
  color: #62a8ea;
}
.color4 {
  color: #ed7d31;
}
.schoolShowGroup {
  text-align: center;
}
.expandBox .schoolShow {
  float: none;
  display: inline-block;
  margin-right: 24px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  width: 25%;
}
.expandEcharts,
.RecruitStudentsEcharts,
.SituationEcharts,
.graduatioEcharts {
  height: 336px;
}
.schoolTerm_List .schoolShow,
.CollegeInfo .schoolShow,
.courseInfo .schoolShow,
.CourseSituation .schoolShow {
  width: 100%;
  margin-top: 0;
  margin-bottom: 24px;
}
.teachTOPA .box-card {
  height: 400px;
}
.teachTOPA .topListItem {
  margin-bottom: 8px;
}
.teachTOPA .listTop {
  padding-top: 10px;
}
.teachTOPA .topListItem .number {
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
.teachTOPA .topListItem .topName {
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
.teachTOPA .topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.situationGroup .ratioEcharts,
.situationGroup .teachSituation {
  height: 360px;
}
.peopleGroup .peopleNum {
  height: 360px;
}
.teachSturdentRaio {
  height: 360px;
}
.averageEcharts {
  height: 360px;
}
.courseInfo .schoolShowInfo .box-card {
  background-color: #70ad47;
}
.courseInfo .schoolShowInfo p,
.courseInfo .schoolShowInfo .text,
.courseInfo .schoolShowInfo p.num span {
  color: #fff;
}
.schoolShowInfo .countBoxL .iconfont {
  font-size: 36px;
}
.studentAndTeach {
  height: 263px;
}
.bookNumEcharts {
  height: 360px;
}
.teachMoney {
  height: 360px;
}
.FiveMoney {
  height: 360px;
}
.deviceEcharts,
.fundsCompareEcharts,
.deviceEchartsScale,
.studentScale {
  height: 360px;
}

.schoolgroup .bookGroup .xqItem {
  /* padding-top: 35px; */
  padding-top: 0;
  height: 112px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.bookGroup .xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.bookGroup .xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.bookGroup .xqItem .num {
  /* padding-top: 35px; */
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #526069;
}
.bookGroup .item_book {
  width: 45%;
  float: left;
}
.bookGroup .item_bookA {
  float: right;
}
.bookGroup .xqItem {
  width: 49%;
  float: left;
  border-top: 1px solid #e4eaec;
  margin-top: 14px;
}
.book_topTitle {
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  background-color: #70ad47;
}
.book_topTitleA {
  background-color: #ed7d31;
}
.bookGroup .borderNone {
  border-right: none;
}
.borderTop {
  border-top: 1px solid #e4eaec;
}
.bookGroup .xqItem .num {
  color: #70ad47;
}
.bookGroup .item_bookA .num {
  color: #ed7d31;
}
.pieEcharts {
  height: 360px;
}
.selectYear {
  position: absolute;
  right: 7%;
  top: 48px;
  z-index: 99;
}
.chart_show_div {
  width: 100%;
  height: 100%;
}
.special_table{
  table-layout: fixed;
}
.special_table td{
  word-wrap:break-word;
  word-break:break-all;
}
.special_table th{
  word-wrap:break-word;
  word-break:break-all;
  background-color: #f0f9eb ;
}
.twoCenter th, .twoCenter td {
  text-align: left;
  padding-left: 10px;
}
.addZD{
  position: absolute;
    right: 1.64%;
    top: 12px;
}
</style>
