<template>
  <div>
    <div class="title_box tab-controlFixed">
      <el-radio-group v-model="job" @change="jobChange" v-if="jobItems.length > 1">
        <el-radio-button v-for="item in jobItems" :label="item.deptId + ',' + item.classType" :key="item.deptId">{{item.deptName + '：' + item.roleName}}</el-radio-button>
      </el-radio-group>
    </div>
    <div class="container_box_header" style="margin-top: 40px;">诊改驾驶舱
      <el-button type="primary" style="float: right;margin-top: 10px;margin-right: 20px;" @click="showTheDialog" v-if="false">自定义分析</el-button>
    </div>
    <!-- <<<<<<<<<<<<<<<<< -->
    <!-- 选择值或者table类型的数据 -->
    <el-dialog title="选择指标" :visible.sync="dialogVisible" width="900px">
        <div class="my_tab_style">
              <el-tabs v-model="activeName" >
                <el-tab-pane label="指标库选取" name="first">
                  <div key="table1">
                    <el-aside width="240px" style="display: inline-block;vertical-align: top;margin: 0;">
        <el-scrollbar :wrapStyle="wrapStyle">
          <el-card class="box-card">
            <el-tree :data="propsZb" @node-click="nodeClick" node-key="id" accordion :default-expanded-keys="keysArr" :default-checked-keys="ckeckedKeysArr">
              <span class="custom-tree-node" slot-scope="{ node, data }" @click="node.isActive = true">
                <span>
                  <i class="iconfont" style="color: #cccccc" v-if="isChile(node)" :class="{ active: node.isActive}">&#xe605;</i>
                  <i class="iconfont" style="color: #cccccc" v-else :class="{ active: node.isActive}">&#xe639;</i>
                  {{ node.label }}</span>
              </span>
            </el-tree>
          </el-card>
        </el-scrollbar>
      </el-aside>
      <el-container width="600px;" style="width: 600px;display: inline-block;"  key="table1">
        <el-header>
          <el-card class="box-card">
            <el-select v-model="indexSource" placeholder="指标来源" style="display: inline-block;width: 120px;" size="small" v-if="false">
              <el-option v-for="item in indexSourceOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input style="display: inline-block;width: 150px;" placeholder="搜索指标名称" v-model="indexName" size="small"></el-input>
            <el-button type="info" size="small" @click="search_zb">搜索</el-button>
          </el-card>
        </el-header>
        <el-main style="box-sizing: border-box;display: block;"  key="table1">
          <el-card class="box-card" style="min-height: 300px;"  key="table1">
            <el-table ref="multipleTable" :data="zbList" tooltip-effect="dark" style="width: 100%" class="zb_table_style" @selection-change="handleSelectionChange" highlight-current-row  key="table1">
              <el-table-column width="50" type="selection">
              </el-table-column>
              <el-table-column label="序号" width="50">
                <template slot-scope="scope">
                  {{pageSize * (currentPage - 1) + 1 + scope.$index}}
                </template>
              </el-table-column>
              <el-table-column prop="indexName" label="指标名称" width="200" show-overflow-tooltip key="zbmc_1">
              </el-table-column>
              <el-table-column prop="indexDesc" label="指标说明" show-overflow-tooltip align="center" key="zbsm_1">
              </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :current-page="currentPage" :total="totalPage" style="margin-top: 10px" @current-change="handleCurrentChange" :page-size="pageSize">
            </el-pagination>
          </el-card>
        </el-main>
      </el-container>
      <div style="text-align: right">
        <el-button type="primary" @click="doSure" style="margin-right: 30px;">确定</el-button>
      </div>
          </div>
                </el-tab-pane>
                 <el-tab-pane label="自定义指标" name="second">
                     <div key="table2">
                       <el-header>
          <el-card class="box-card">
            <el-input style="display: inline-block;width: 250px;" placeholder="搜索指标名称" v-model="indexName2" size="small"></el-input>
            <el-button type="info" size="small" @click="search_zb2">搜索</el-button>
          </el-card>
        </el-header>
        <el-main key="table2">
          <el-card class="box-card" style="min-height: 300px" key="table2">
            <table width="100%" class="special_table">
              <thead>
                <tr>
                  <th align="center"></th>
                  <th align="center">序号</th>
                  <th align="left">指标名称</th>
                  <th align="left">指标说明</th>
                </tr>
              </thead>
              <tbody>
                     <el-checkbox-group v-model="zb_id_radio_2">      
                <template v-for="(item, index) in zbList2">
                <tr :key="index">
                  <td width="50" align="center">
                       <el-checkbox :label="index">
                         <span style="font-size: 0;">{{index}}</span>
                         {{index}}</el-checkbox>
                    <!-- <el-radio v-model="zb_id_radio_2" :label="index">
                    <span style="font-size: 0;">{{index}}</span>
                  </el-radio> -->
                  </td>
                  <td width="50" align="center">
                    {{pageSize2 * (currentPage2 - 1) + 1 + index}}
                  </td>
                  <td width="300"  align="left">
                     <el-tooltip class="item" effect="dark" :content="item.indexName" placement="top">
                    <span>{{item.indexName}}</span>
                     </el-tooltip>
                  </td>
                  <td align="left">
                    <el-tooltip class="item" effect="dark" :content="item.indexDesc" placement="top">
                    <span>{{item.indexDesc}}</span>
                     </el-tooltip>
                  </td>
                </tr>
                </template>
                </el-checkbox-group>
              </tbody>
            </table>
          </el-card>
        </el-main>
            <el-pagination background layout="prev, pager, next" :current-page="currentPage2" :total="totalPage2" style="margin-top: 10px" @current-change="handleCurrentChange2" :page-size="pageSize2">
            </el-pagination>
            <div style="text-align: right">
        <el-button type="primary" @click="doSure2" style="margin-right: 30px;">确定</el-button>
      </div>
                     </div>
                 </el-tab-pane>
              </el-tabs>
              </div>
    </el-dialog>
    <!-- >>>>>>>>>>>>>>>>>> -->

    <div class="bg_box">
      <div class="jsc_content" v-show="!school">
        <div class="content_item" v-if="false">
          <div class="content_item_title">论文</div>
          <div class="col_item_father">
            <div class="col_item_box theAll">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>论文发表总数</div>
                  <div>
                    <span>{{value1}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>SCI/EI论文发表总量</div>
                  <div>
                    <span>{{value2}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>核心期刊论文发表总量</div>
                  <div>
                    <span>{{value3}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ed7d31;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>会议论文发表总量</div>
                  <div>
                    <span>{{value4}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #a5a5a5;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>中文普刊发表总量</div>
                  <div>
                    <span>{{value5}}</span>篇</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 各专业发表论文数量 -->
          <div class="chart_box big">
            <!-- <div class="chart_box_title">

          </div> -->
        <div class="chart_1 chart_show boxShadow" style="height: 430px;" id="chart_1">
            <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
        </div>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="chart_2 chart_show boxShadow" style="height: 407px;" id="chart_2">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="chart_3 chart_show boxShadow" style="height: 407px;" id="chart_3">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="content_item" v-if="false">
          <div class="content_item_title">科研项目</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>总申请科研项目</div>
                  <div>
                    <span>{{value6}}</span>个</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>申请成功科研项目</div>
                  <div>
                    <span>{{value7}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: rgb(98, 168, 234);">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>申请成功率</div>
                  <div>
                    <span>{{value8}}</span>%</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 表格 -->
          <div class="boxShadow">
            <div class="title">科研项目申请成功数量TOP10</div>
            <el-table :data="tableData1" style="width: 100%">
              <el-table-column label="排名" type="index" :index="indexMethod" width="50"  align="center">
              </el-table-column>
              <el-table-column prop="zgh" label="职工号"   align="center">
              </el-table-column>
              <el-table-column prop="name" label="姓名"  align="center">
              </el-table-column>
              <el-table-column label="性别"   align="center">
                <template slot-scope="scope">
                  {{scope.row.gender - 0 === 1 ? '男' : '女'}}
                </template>
              </el-table-column>
              <el-table-column prop="dept_name" label="部门"   align="center">
              </el-table-column>
              <el-table-column prop="mc" label="学历"  show-overflow-tooltip  align="center">
              </el-table-column>
              <el-table-column prop="cnt" label="申请成功项目数量"   align="center">
              </el-table-column>
              <el-table-column prop="totalje" label="项目总金额(万元)"   align="center" show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_title">图书借阅</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>总借书量</div>
                  <div>
                    <span>{{value9}}</span>本</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>男生借书</div>
                  <div>
                    <span>{{value10}}</span>本</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: rgb(98, 168, 234);">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>女生借书</div>
                  <div>
                    <span>{{value11}}</span>本</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 表格 -->
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="chart_4 chart_show boxShadow" style="height: 407px;" id="chart_4">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="chart_5 chart_show boxShadow" style="height: 407px;" id="chart_5">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="boxShadow">
            <div class="title">图书借阅总量TOP10</div>
            <el-table :data="tsjylTable" style="width: 100%">
              <el-table-column label="排名" type="index" :index="indexMethod" width="50"  align="center">
              </el-table-column>
              <el-table-column prop="xh" label="学号"   align="center">
              </el-table-column>
              <el-table-column prop="xm" label="姓名"  align="center">
              </el-table-column>
              <el-table-column prop="xb" label="性别"   align="center">
              </el-table-column>
              <el-table-column prop="zy" label="专业"   align="center">
              </el-table-column>
              <el-table-column prop="nj" label="年级"  align="center">
              </el-table-column>
              <el-table-column prop="total" label="借书量"  align="center">
              </el-table-column>
            </el-table>
          </div>

          <div class="boxShadow">
            <div class="title">图书逾期TOP10</div>
            <el-table :data="tsyqTable" style="width: 100%">
              <el-table-column label="排名" type="index" :index="indexMethod" width="50"  align="center">
              </el-table-column>
              <el-table-column prop="xh" label="学号"   align="center">
              </el-table-column>
              <el-table-column prop="xm" label="姓名"  align="center">
              </el-table-column>
              <el-table-column label="性别"   align="center">
                <template slot-scope="scope">{{scope.row.gender-0 === '1' ? '男' : '女'}}</template>
              </el-table-column>
              <el-table-column prop="zy" label="专业"  show-overflow-tooltip  align="center">
              </el-table-column>
              <el-table-column prop="jdnj" label="年级" align="center">
              </el-table-column>
              <el-table-column prop="total" label="逾期次数"  align="center">
              </el-table-column>
              <el-table-column prop="stotal" label="历史上榜次数"  align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 学生预警 -->
        <div class="content_item">
          <div class="content_item_title">学生预警</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three" style="margin-bottom: 23px;">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <!-- <i class="iconfont" style="color: #70ad47;">&#xe644;</i> -->
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>晚归学生数量</div>
                  <div>
                    <span>13</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three" style="margin-bottom: 23px;">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>沉迷游戏学生数量</div>
                  <div>
                    <span>3</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three" style="margin-bottom: 23px;">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>延期毕业学生数量</div>
                  <div>
                    <span>2</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three" style="padding-left: 0">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ed7d31;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>逃课学生数量</div>
                  <div>
                    <span>0</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #a5a5a5;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>不在校学生数量</div>
                  <div>
                    <span>6</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #dd6969;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>高消费学生数量</div>
                  <div>
                    <span>12</span>名</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 教学过程 -->
        <div class="content_item">
          <div class="content_item_title">教学过程</div>
          <!-- 各专业发表论文数量 -->
          <div class="chart_box big">
            <!-- <div class="chart_box_title">

          </div> -->
            <div class="chart_6 chart_show boxShadow" style="height: 430px;" id="chart_6">
                <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
            <div class="chart_7 chart_show boxShadow" style="height: 430px;" id="chart_7">
                <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
          </div>
        </div>
        <!-- 创新竞赛 -->
        <div class="content_item">
          <div class="content_item_title">创新竞赛</div>
          <div class="col_item_father">
            <div class="col_item_box theAll four">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>总参赛人数</div>
                  <div>
                    <span>13</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box four">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>参加国家级竞赛</div>
                  <div>
                    <span>13</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box four">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>参加省部级竞赛</div>
                  <div>
                    <span>13</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box four">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ed7d31;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>参加市厅级（校级）</div>
                  <div>
                    <span>13</span>名</div>
                </div>
              </div>
            </div>
          </div>
          <div class="chart_box big">
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="chart_8 chart_show boxShadow" style="height: 430px;" id="chart_8">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="chart_9 chart_show boxShadow" style="height: 430px;" id="chart_9">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
            <div class="chart_10 chart_show boxShadow" style="height: 430px;" id="chart_10">
                <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
          </div>
        </div>
        <!-- 学霸 -->
        <div class="content_item">
          <div class="content_item_title" style="height: 40px;border-left: 0">
              <div class="content_item_title" style="display: inline-block">学霸</div>
            <!-- 学霸 -->
            <el-radio-group v-model="xb_class" size="small" @change="class_change">
              <el-radio-button label="">全部</el-radio-button>
              <el-radio-button label="1">一年级</el-radio-button>
              <el-radio-button label="2">二年级</el-radio-button>
              <el-radio-button label="3">三年级</el-radio-button>
              <!-- <el-radio-button label="4">大四</el-radio-button> -->
            </el-radio-group>
            <el-select v-model="nowTerm" placeholder="请选择" size="small" @change="term_change">
              <el-option v-for="item in yToptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="xlValue" placeholder="请选择" size="small" @change="xl_change" v-if="false">
              <el-option v-for="item in xloptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-row :gutter="0">
              <div style="height: 34px;width: 305px;color: #f56c6c;background: #fef0f0;line-height: 34px;text-align: center;border-radius: 4px;">学霸：平均学分绩点达到3.2及以上的学生</div>
              <template v-for="(item, index) in xbItems">
                <el-col :span="6" :key="index">
                  <div style="height: 230px;box-sizing: border-box;padding-top: 42px;background: #fff;border: 1px solid #e4eaec">
                    <div class="xb_items">
                      <template v-if="index + 1 === 0">
                        <span class="xb_items_span_num" style="background: #70ad47">{{index + 1}}</span>
                      </template>
                      <template v-if="index + 1 === 1">
                        <span class="xb_items_span_num" style="background: #ed7d31">{{index + 1}}</span>
                      </template>
                      <template v-if="index + 1 === 2">
                        <span class="xb_items_span_num" style="background: #ffc000">{{index + 1}}</span>
                      </template>
                      <template v-if="index + 1 > 2">
                        <span class="xb_items_span_num">{{index + 1}}</span>
                      </template>
                      <img :src="item.avatar" alt="" style="width: 76px;height: 76px;" v-if="item.avatar">
                      <img src="../../../assets/user.png" alt="" style="width: 76px;height: 76px;" v-if="!item.avatar">
                      <span class="xb_items_span_grade">{{item.avjd}}</span>
                    </div>
                    <div class="nj_name">
                      <span class="xb_items_span_nj">{{item.jdnj}}级</span>
                      <span class="xb_items_name">{{item.xm}}</span>
                      <i class="iconfont" style="color: #24aaff;" v-if="item.xbdm - 0 === 1">&#xe650;</i>
                      <i class="iconfont" style="color: #ed7d31;" v-if="item.xbdm - 0 === 2">&#xe652;</i>
                    </div>
                    <div class="xb_items_zy">{{item.dept_name + '/' + item.mc}}</div>
                  </div>
                </el-col>
              </template>
              <template v-if="!xbItems || !xbItems.length">
                  <div style="background: #fff;text-align: center;">
                      <img src="../../../assets/empty.jpg" alt="">
                  </div>
              </template>
            </el-row>
          </div>
          <div class="chart_box big" style="padding-bottom: 50px;">
            <div class="chart_13 chart_show boxShadow" style="height: 364px;" id="chart_13">
            <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
          </div>
        </div>

      </div>
      <div class="jsc_content" v-show="school">
        <div class="content_item">
          <div class="content_item_title">师资数量</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>教职工总数</div>
                  <div>
                    <span>{{valueschool1}}</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>新增教职工人数</div>
                  <div>
                    <span>{{valueschool2}}</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>离职教职工人数</div>
                  <div>
                    <span>{{valueschool3}}</span>名</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="schoolChart_1 chart_show boxShadow" style="height: 407px;" id="schoolChart_1">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="schoolChart_2 chart_show boxShadow" style="height: 407px;" id="schoolChart_2">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 财政 -->
        <div class="content_item">
              <div class="content_item_title" style="border-left: 0">
              <div class="content_item_title" style="display: inline-block">财政</div>
            <el-select v-model="year_term" placeholder="请选择" @change="yearTermChange">
              <el-option v-for="item in yToptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="schoolChart_3 chart_show boxShadow" style="height: 407px;" id="schoolChart_3">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="schoolChart_4 chart_show boxShadow" style="height: 407px;" id="schoolChart_4">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 论文 -->
        <div class="content_item" v-if="false">
          <div class="content_item_title">论文</div>
          <div class="col_item_father">
            <div class="col_item_box theAll">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>论文发表总数</div>
                  <div>
                    <span>{{valueschool4}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>SCI/EI论文发表总量</div>
                  <div>
                    <span>{{valueschool5}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>会议论文发表总量</div>
                  <div>
                    <span>{{valueschool6}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ed7d31;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>中文普刊发表总量</div>
                  <div>
                    <span>{{valueschool7}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #a5a5a5;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>中文普刊发表总量</div>
                  <div>
                    <span>{{valueschool8}}</span>篇</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 各专业发表论文数量 -->
          <div class="chart_box big">
            <!-- <div class="chart_box_title">

          </div> -->
            <div class="schoolChart_5 chart_show boxShadow" style="height: 430px;" id="schoolChart_5">
                <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="schoolChart_6 chart_show boxShadow" style="height: 407px;" id="schoolChart_6">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="schoolChart_7 chart_show boxShadow" style="height: 407px;" id="schoolChart_7">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 学校科研 -->
        <div class="content_item" v-if="false">
          <div class="content_item_title">科研项目</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>总申请科研项目</div>
                  <div>
                    <span>{{valueschool9}}</span>个</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>申请成功科研项目</div>
                  <div>
                    <span>{{valueschool10}}</span>篇</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>申请成功率</div>
                  <div>
                    <span>{{valueschool11}}</span>%</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="schoolChart_8 chart_show boxShadow" style="height: 407px;" id="schoolChart_8">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="schoolChart_9 chart_show boxShadow" style="height: 407px;" id="schoolChart_9">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
            <div>
              <div class="schoolChart_10 chart_show boxShadow" style="height: 407px;" id="schoolChart_10">
                  <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 图书借阅 -->
        <div class="content_item">
          <div class="content_item_title">图书借阅</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>图书馆藏书</div>
                  <div>
                    <span>{{valueschool12}}</span>万本</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>馆内现有书籍</div>
                  <div>
                    <span>{{valueschool13}}</span>万本</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>总借书人数</div>
                  <div>
                    <span>{{valueschool14}}</span>人</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="schoolChart_11 chart_show boxShadow" style="height: 407px;" id="schoolChart_11">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="schoolChart_12 chart_show boxShadow" style="height: 407px;" id="schoolChart_12">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
            <div>
              <div class="schoolChart_13 chart_show boxShadow" style="height: 407px;" id="schoolChart_13">
                  <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 学生预警 -->
        <div class="content_item">
          <div class="content_item_title">学生预警</div>
          <div class="col_item_father">
            <div class="col_item_box theAll three" style="margin-bottom: 23px;">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
                </div>
                <div class="col_item_box_right">
                  <div>晚归学生数量</div>
                  <div>
                    <span>13</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three" style="margin-bottom: 23px;">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ffc000;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>沉迷游戏学生数量</div>
                  <div>
                    <span>18</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three" style="margin-bottom: 23px;">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #62a8ea;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>延期毕业学生数量</div>
                  <div>
                    <span>3</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three" style="padding-left: 0">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #ed7d31;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>逃课学生数量</div>
                  <div>
                    <span>5</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #a5a5a5;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>不在校学生数量</div>
                  <div>
                    <span>29</span>名</div>
                </div>
              </div>
            </div>
            <div class="col_item_box three">
              <div class="boxShadow">
                <div class="col_item_box_left">
                  <i class="iconfont" style="color: #dd6969;">&#xe644;</i>
                </div>
                <div class="col_item_box_right">
                  <div>高消费学生数量</div>
                  <div>
                    <span>54</span>名</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 教学过程 -->
        <div class="content_item">
          <div class="content_item_title">教学过程</div>
          <!-- 各专业发表论文数量 -->
          <div class="chart_box big">
            <!-- <div class="chart_box_title">

          </div> -->
            <div class="chart_6_1 chart_show boxShadow" style="height: 430px;" id="chart_6_1">
                <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
            <div class="chart_7_1 chart_show boxShadow" style="height: 430px;" id="chart_7_1">
                <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
            </div>
          </div>
        </div>
        <!-- 课程 -->
        <div class="content_item">
          <div class="content_item_title">课程</div>
          <div class="boxShadow" style="margin-bottom: 50px;">
            <el-table :data="kcTable" style="width: 100%">
              <el-table-column prop="name" label="专业">
              </el-table-column>
              <el-table-column prop="value1" label="总课程数" width="150px" align="center">
              </el-table-column>
              <el-table-column prop="value2" label="精品课程数" width="160px" align="center">
              </el-table-column>
              <el-table-column prop="rate" label="精品课程占比" width="200px" align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      /* <<<<<<<<<<<<<<<<<<<<<< */
      // 自定义分析
      dialogVisible: false,
      activeName: 'first',
      wrapStyle: [{ height: '100%' }],
      propsZb: [],
      keysArr: [],
      ckeckedKeysArr: [],
      indexSource: '',
      indexSourceOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '学校自建',
          value: 1
        },
        {
          label: '平台自建',
          value: 2
        }
      ],
      indexName: '',
      indexName2: '',
      zbList: [],
      zbList2: [],
      pageSize: 10,
      pageSize2: 10,
      currentPage: 1,
      currentPage2: 1,
      totalPage: 0,
      totalPage2: 0,
      zb_id_radio_2: [],
      /* >>>>>>>>>>>>>>>>>>>>>>>> */ 
      xbItems: [],
      xlValue: 1,
      xloptions: [
        {
          label: '本专科',
          value: 1
        },
        {
          label: '研究生',
          value: 2
        },
        {
          label: '博士',
          value: 3
        }
      ],
      nowTerm: new Date().getFullYear() - 1 + ',1',
      xb_class: '', // 学霸
      school: true,
      job: '',
      jobItems: [],
      value1: '', // 论文发表总量
      value2: '', // SCI/EI论文发表总量
      value3: '', // 核心期刊论文发表总量
      value4: '', // 会议论文发表总量
      value5: '', // 中文普刊发表总量
      value6: '', // 总申请科研项目
      value7: '', // 申请成功科研项目
      value8: '', // 申请成功率
      value9: '', // 总借书量
      value10: '', // 男生借书
      value11: '', // 女生结束
      deptId: '',
      items: [
        {
          name: '校长',
          value: 1
        },
        {
          name: '诊改办主任',
          value: 2
        }
      ],
      tableData1: [],
      tableData2: [],
      // 院级
      valueschool1: '',
      valueschool2: '',
      valueschool3: '',
      valueschool4: '',
      valueschool5: '',
      valueschool6: '',
      valueschool7: '',
      valueschool8: '',
      valueschool9: '', // 学校科研
      valueschool10: '', // 学校科研
      valueschool11: '', // 学校科研
      valueschool12: '', // 图书借阅
      valueschool13: '', // 图书借阅
      valueschool14: '', // 图书借阅
      year_term: new Date().getFullYear() - 1 + ',1',
      tsjylTable: [], // 图书借阅量
      tsyqTable: [], // 图书逾期
      kcTable: [], // 课程
      chart_color: [
        '#70ad47',
        '#ed7d31',
        '#ffc000',
        '#a5a5a5',
        '#4472c4',
        '#dd6969',
        '#00a6a6',
        '#6c6fbf',
        '#62a8ea',
        '#ffb980',
        '#d56290',
        '#c4ccd3',
        '#ed7d31',
        '#ffc000',
        '#a5a5a5',
        '#4472c4',
        '#dd6969',
        '#00a6a6',
        '#6c6fbf',
        '#62a8ea',
        '#ffb980',
        '#d56290',
        '#c4ccd3'
      ]
    }
  },
  computed: {
    yToptions () {
      return [
        {
          label: new Date().getFullYear() - 1 + '年第一学期',
          value: new Date().getFullYear() - 1 + ',1'
        },
        {
          label: new Date().getFullYear() - 1 + '年第二学期',
          value: new Date().getFullYear() - 1 + ',2'
        }
      ]
    }
  },
  mounted () {
    // 获取用户身份
    this.$ajax(
      'post',
      this.HOST + '/tr/trCockpit/web/getClassType',
      {},
      res => {
        if (res.success) {
          if (res.obj) {
            for (let i = 0; i < res.obj.length; i++) {
              if (i === 0) {
                this.job = res.obj[i].deptId + ',' + res.obj[i].classType
                this.deptId = res.obj[i].deptId
                this.school = !(res.obj[i].classType - 1)
              }
              this.jobItems.push(res.obj[i])
            }
          }
          this.showAllHtml()
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
    /* <<<<<<<<<<<<<<<<<<<< */
    showTheDialog () {
      this.dialogVisible = true
    },
    nodeClick (data) {
      data.isActive = true
      let id = data.id
      let self = this
      self.indexSource = ''
      self.indexName = ''
      self.indexClass = ''
      self.zb_before_id = id
      this.zb_id_radio_2 = ''
      this.zb_id_radio = ''
      self.currentPage = 1
      let obj = {
        deptId: self.deptId,
        typeId: id,
        indexName: self.indexName,
        pageNum: self.currentPage,
        pageSize: self.pageSize
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexList',
        obj,
        (res) => {
          if (res.success) {
            if (res.data) {
              self.totalPage = res.data.totalSize
            }
            self.currentPage = 1
            self.zbList = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    isChile (node) {
      if (node == null) {
        return false
      }
      let childSize = node.childNodes.length
      if (childSize === 0) {
        return false
      }
      return true
    },
    search_zb () {
      this.refreshTable()
    },
    search_zb2 () {
      this.refreshTable2()
    },
    refreshTable2 () {
      let self = this
      let obj = {
        deptId: self.deptId,
        searchName: self.indexName2,
        pageNum: self.currentPage2,
        pageSize: self.pageSize2
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/trIndex/web/getCustomIndexList',
        obj,
        (res) => {
          if (res.success) {
            self.zbList2 = []
            self.zbList2 = res.obj
            if (res.data) {
              self.totalPage2 = res.data.totalSize
            }
            // self.currentPage = 1;
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    refreshTable () {
      let self = this
      let obj = {
        deptId: self.deptId,
        typeId: self.zb_before_id,
        indexName: self.indexName,
        indexSource: self.indexSource,
        pageNum: self.currentPage,
        indexClass: self.indexClass,
        pageSize: self.pageSize
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexList',
        obj,
        (res) => {
          if (res.success) {
            self.zbList = []
            self.zbList = res.obj
            if (res.data) {
              self.totalPage = res.data.totalSize
            }
            // self.currentPage = 1;
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.refreshTable()
    },
    handleCurrentChange2 (val) {
      this.currentPage2 = val
      this.refreshTable2()
    },
    doSure () {

    },
    doSure2 () {

    },
    handleSelectionChange (val) {
      console.log(val)
    },
    /* >>>>>>>>>>>>>>>>>>>> */ 
    class_change (val) {
      this.showXb()
    },
    term_change (val) {
      this.showXb()
    },
    xl_change (val) {
      this.showXb()
    },
    showXb () {
      let data = {
        deptId: this.deptId,
        classType: this.xb_class,
        xn: this.nowTerm.split(',')[0],
        xq: this.nowTerm.split(',')[1],
        xlType: this.xlValue
      }
      this.$ajaxMore(
        'post',
        this.HOST + '/tr/trCockpit/web/getXBDataByCon',
        data,
        res => {
          if (res.success) {
            this.xbItems = res.obj
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    showAllHtml () {
      if (this.school) {
        // 加载校级数据
        this.showSchool_1()
        this.showSchool_2()
        this.showSchool_3()
        this.showSchool_4() // 财政
        this.showSchool_5() // 财政
        this.showSchool_6() // 论文
        // this.showSchool_7()
        // this.showSchool_8()
        // this.showSchool_9()
        this.showSchool_10()
        // this.showSchool_11()
        // this.showSchool_12()
        // this.showSchool_13()
        this.showSchool_14()
        this.showSchool_15()
        this.showSchool_16()
        this.showSchool_17()
        this.showSchool_18()
        //
        this.showSchool01()
        this.showSchool02()
      } else {
        // 院级
        this.showHtml1()
        // this.showHtml2()
        // this.showHtml3()
        // this.showHtml4()
        this.showHtml5()
        this.showHtml6()
        this.showHtml7() // 图书借阅
        this.showHtml8()
        this.showHtml9()
        this.showHtml10()
        this.showHtml11() // 图书逾期
        this.showHtml12() // 学霸
        this.showXb()
        // 静态数据
        this.show01()
        this.show02()
        this.show03()
        this.show04()
        this.show05() // 各级别竞赛获奖等级人数
      }
    },
    showSchool01 () {
      setTimeout(() => {
        let series = [{
          name: '',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          smooth: true,
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            rotate: -20
          },
          data: [86, 95, 90, 89, 80, 79, 93, 90, 92, 85, 92, 84, 96, 89, 91, 83, 92]
        }]
        this.$ChartUtil.drawChart('chart_6_1', '各专业平均上课率', [], '', series, [
          '计算机应用',
          '电子商务',
          '计算机平面设计',
          '计算机动漫与游戏制作',
          '城市轨道交通运营管理',
          '计算机网络技术',
          '运动训练',
          '机电技术应用',
          '汽车车身修复',
          '汽车整车与配件营销',
          '焊接技术应用',
          '市场营销',
          '音乐',
          '船舶驾驶',
          '法律事务',
          '数控技术应用',
          '农业机械使用与维护'
        ], true, {}, this)
      }, 150)
    },
    showSchool02 () {
      setTimeout(() => {
        let series = [{
          name: '',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          smooth: true,
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            rotate: -20
          },
          data: [86, 95, 90, 89, 80, 79, 93, 90, 92, 85, 92, 84, 96, 89, 91, 83, 92]
        }]
        this.$ChartUtil.drawChart('chart_7_1', '各专业平均抬头率', [], '', series, [
          '计算机应用',
          '电子商务',
          '计算机平面设计',
          '计算机动漫与游戏制作',
          '城市轨道交通运营管理',
          '计算机网络技术',
          '运动训练',
          '机电技术应用',
          '汽车车身修复',
          '汽车整车与配件营销',
          '焊接技术应用',
          '市场营销',
          '音乐',
          '船舶驾驶',
          '法律事务',
          '数控技术应用',
          '农业机械使用与维护'
        ], true, {}, this)
      }, 150)
    },
    yearTermChange (val) {
      this.showSchool_4()
      this.showSchool_5()
    },
    indexMethod (index) {
      return index - 0 + 1
    },
    jobChange (str) {
      let arr = str.split(',')
      if (arr[1] - 0 === 2) {
        this.school = false
      } else {
        this.school = true
      }
      this.deptId = arr[0]
      // this.school = !this.school;
      this.showAllHtml()
    },
    // 学校
    showSchool_1 () {
      let data = {
        chartId: 1,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.valueschool1 = res.obj.data[0].value
            this.valueschool2 = res.obj.data[1].value
            this.valueschool3 = res.obj.data[2].value
          }
        }
      )
    },
    showSchool_2 () {
      let data = {
        chartId: 2,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              barWidth: '60%',
              boundaryGap: false,
              axisLabel: {
                interval: 0,
                rotate: -20
              },
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChart('schoolChart_1', res.obj.title, [], '', series, res.obj.dataxList, true, {}, this)
          }
        }
      )
    },
    showSchool_3 () {
      let data = {
        chartId: 3,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [
              {
                name: '',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
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
                data: res.obj.datayList
              }
            ]
            this.$ChartUtil.drawChartNoXY('schoolChart_2', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_4 () {
      let data = {
        chartId: 4,
        deptId: this.deptId,
        xn: this.year_term.split(',')[0],
        xq: this.year_term.split(',')[1]
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              barWidth: '60%',
              boundaryGap: false,
              axisLabel: {
                interval: 0,
                rotate: -20
              },
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChart('schoolChart_3', res.obj.title, [], '', series, res.obj.dataxList, true, {}, this)
          }
        }
      )
    },
    showSchool_5 () {
      let data = {
        chartId: 5,
        deptId: this.deptId,
        xn: this.year_term.split(',')[0],
        xq: this.year_term.split(',')[1]
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
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
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoXY('schoolChart_4', res.obj.title, res.obj.legend, this.$ChartUt.VERTICAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_6 () {
      let data = {
        chartId: 6,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.valueschool4 = res.obj.data[0].value
            this.valueschool5 = res.obj.data[1].value
            this.valueschool6 = res.obj.data[2].value
            this.valueschool7 = res.obj.data[1].value
            this.valueschool8 = res.obj.data[2].value
          }
        }
      )
    },
    showSchool_7 () {
      let data = {
        chartId: 7,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              barWidth: '60%',
              boundaryGap: false,
              axisLabel: {
                interval: 0,
                rotate: -20
              },
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChart('schoolChart_5', res.obj.title, [], '', series, res.obj.dataxList, true, {}, this)
          }
        }
      )
    },
    showSchool_8 () {
      let data = {
        chartId: 8,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
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
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoXY('schoolChart_6', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_9 () {
      let data = {
        chartId: 9,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
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
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoXY('schoolChart_7', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_10 () {
      let data = {
        chartId: 10,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.valueschool9 = res.obj.data[0].value
            this.valueschool10 = res.obj.data[1].value
            this.valueschool11 = res.obj.data[2].value
          }
        }
      )
    },
    showSchool_11 () {
      let data = {
        chartId: 12,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
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
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoXY('schoolChart_8', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_12 () {
      let data = {
        chartId: 13,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            let dataleg = ['申请总数', '成功数量']
            let datay = [
              {
                name: '申请总数',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: res.obj.datay1List
              },
              {
                name: '成功数量',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: res.obj.datay2List
              }
            ]
            this.$ChartUtil.drawChart(
              'schoolChart_9',
              res.obj.title,
              dataleg,
              '',
              datay,
              res.obj.dataxList,
              false,
              {
                legend: {
                  y: '20',
                  x: 'right',
                  data: dataleg
                },
                customattrs: {xrotate: 0}
              },
              this
            )
          }
        }
      )
    },
    showSchool_13 () {
      let data = {
        chartId: 14,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            let dataleg = ['价值', '数量']
            let datay = [
              {
                name: '数量',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: res.obj.datay1List
              },
              {
                name: '价值',
                type: 'line',
                yAxisIndex: 1,
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: res.obj.datay2List
              }
            ]
            this.$ChartUtil.drawChart('schoolChart_10', res.obj.title, dataleg, '', datay, res.obj.dataxList, true, {
              legend: {
                x: 'right',
                y: 'top'
              },
              yAxis: [{
                type: 'value',
                name: '数量(册)',
                // interval: 50,
                axisLabel: {
                  formatter: '{value}册'
                }
              },
              {
                type: 'value',
                name: '价值(元)',
                axisLabel: {
                  formatter: '{value}元'
                }
              }]
            }, this)
          }
        }
      )
    },
    showSchool_14 () {
      let data = {
        chartId: 15,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.valueschool12 = res.obj.data[0].value
            this.valueschool13 = res.obj.data[1].value
            this.valueschool14 = res.obj.data[2].value
          }
        }
      )
    },
    showSchool_15 () {
      let data = {
        chartId: 16,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
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
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoXY('schoolChart_11', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_16 () {
      let data = {
        chartId: 17,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false,
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
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoXY('schoolChart_12', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          }
        }
      )
    },
    showSchool_17 () {
      let data = {
        chartId: 18,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            let dataleg = ['价值', '数量']
            let datay = [
              {
                name: '数量',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: res.obj.datay1List
              },
              {
                name: '价值',
                type: 'line',
                yAxisIndex: 1,
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data: res.obj.datay2List
              }
            ]
            this.$ChartUtil.drawChart('schoolChart_13', res.obj.title, dataleg, '', datay, res.obj.dataxList, true, {
              legend: {
                x: 'right',
                y: 'top'
              },
              yAxis: [{
                type: 'value',
                name: '数量(册)',
                // interval: 50,
                axisLabel: {
                  formatter: '{value}册'
                }
              },
              {
                type: 'value',
                name: '价值(元)',
                axisLabel: {
                  formatter: '{value}元'
                }
              }]
            }, this)
          }
        }
      )
    },
    showSchool_18 () {
      let data = {
        chartId: 19,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.kcTable = res.obj.data
          }
        }
      )
    },
    show01 () {
      setTimeout(() => {
        let series = [{
          name: '',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          smooth: true,
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            rotate: -20
          },
          data: [86, 95, 90, 89, 80, 79, 93, 90, 92, 85, 92, 84, 96, 89, 91, 83, 92]
        }]
        this.$ChartUtil.drawChart('chart_6', '各专业平均上课率', [], '', series, [
          '计算机应用',
          '电子商务',
          '计算机平面设计',
          '计算机动漫与游戏制作',
          '城市轨道交通运营管理',
          '计算机网络技术',
          '运动训练',
          '机电技术应用',
          '汽车车身修复',
          '汽车整车与配件营销',
          '焊接技术应用',
          '市场营销',
          '音乐',
          '船舶驾驶',
          '法律事务',
          '数控技术应用',
          '农业机械使用与维护'
        ], true, {}, this)
      }, 150)
    },
    show02 () {
      setTimeout(() => {
        let series = [{
          name: '',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          smooth: true,
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            rotate: -20
          },
          data: [86, 95, 90, 89, 80, 79, 93, 90, 92, 85, 92, 84, 96, 89, 91, 83, 92]
        }]
        this.$ChartUtil.drawChart('chart_7', '各专业平均抬头率', [], '', series, [
          '计算机应用',
          '电子商务',
          '计算机平面设计',
          '计算机动漫与游戏制作',
          '城市轨道交通运营管理',
          '计算机网络技术',
          '运动训练',
          '机电技术应用',
          '汽车车身修复',
          '汽车整车与配件营销',
          '焊接技术应用',
          '市场营销',
          '音乐',
          '船舶驾驶',
          '法律事务',
          '数控技术应用',
          '农业机械使用与维护'
        ], true, {}, this)
      }, 150)
    },
    show03 () {
      let data = {
        obj: {
          title: '各项竞赛参赛人数及获奖人数',
          dataxList: ['挑战杯', '数学建模大赛', '电子设计大赛', '英语演讲大赛'],
          datayList: [
            {
              name: '参加比赛人数',
              data: [15, 3, 25, 36],
              type: 'line',
              // stack: '1',
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 4,
                    type: 'solid'
                  }
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            },
            {
              name: '获奖人数',
              data: [3, 2, 12, 8],
              type: 'line',
              // stack: '2',
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 4,
                    type: 'solid'
                  }
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            }
          ],
          dataleg: ['参加比赛人数', '获奖人数']
        }
      }
      setTimeout(() => {
        this.$ChartUtil.drawChart(
          'chart_8',
          data.obj.title,
          data.obj.dataleg,
          '',
          data.obj.datayList,
          data.obj.dataxList,
          false,
          {
            legend: {
              y: '20',
              data: data.obj.dataleg
            },
            xAxis: {
              boundaryGap: false,
              data: data.obj.dataxList
            },
            grid: {
              left: '50',
              right: '50',
              bottom: '3%',
              containLabel: true
            }
          },
          this
        )
      }, 150)
    },
    show04 () {
      let data = {
        success: true,
        msg: '操作成功',
        obj: {
          title: '学生参加各种竞赛占比',
          dataxList: [
            '挑战杯', '数学建模大赛', '电子设计大赛', '英语演讲大赛', '其他'
          ],
          datayList: [
            { name: '挑战杯', value: 20 },
            { name: '数学建模大赛', value: 9 },
            { name: '电子设计大赛', value: 20 },
            { name: '英语演讲大赛', value: 41 },
            { name: '其他', value: 21 }
          ]
        },
        data: null
      }
      setTimeout(() => {
        let series = [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
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
            data: data.obj.datayList
          }
        ]
        this.$ChartUtil.drawChartNoXY('chart_9', data.obj.title, data.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
      }, 150)
    },
    show05 () {
      let data = {
        obj: {
          title: '各项竞赛参赛人数及获奖人数',
          dataxList: ['一等奖', '二等奖', '三等奖', '优秀奖'],
          datayList: [
            {
              name: '国家级',
              data: [15, 3, 25, 36],
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            },
            {
              name: '省部级',
              data: [3, 2, 12, 8],
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            },
            {
              name: '市厅级（校级）',
              data: [3, 2, 12, 8],
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            }
          ],
          dataleg: ['国家级', '省部级', '市厅级（校级）']
        }
      }
      setTimeout(() => {
        this.$ChartUtil.drawChart(
          'chart_10',
          data.obj.title,
          data.obj.dataleg,
          '',
          data.obj.datayList,
          data.obj.dataxList,
          false,
          {
            legend: {
              y: '20',
              data: data.obj.dataleg
            },
            customattrs: {xrotate: 0}
          },
          this
        )
      }, 150)
    },
    showHtml1 () {
      let data = {
        chartId: 20,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.value1 = res.obj.data[0].value
            this.value2 = res.obj.data[1].value
            this.value3 = res.obj.data[2].value
            this.value4 = res.obj.data[3].value
            this.value5 = res.obj.data[4].value
          }
        }
      )
    },
    showHtml2 () {
      let data = {
        chartId: 21,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              barWidth: '60%',
              boundaryGap: false,
              axisLabel: {
                interval: 0,
                rotate: -20
              },
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChart('chart_1', res.obj.title, [], '', series, res.obj.dataxList, true, {}, this)
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    showHtml6 () {
      let data = {
        chartId: 25,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.tableData1 = res.obj.data
          }
        }
      )
    },
    showHtml7 () {
      let data = {
        chartId: 26,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.value9 = res.obj.data[0].value
            this.value10 = res.obj.data[1].value
            this.value11 = res.obj.data[2].value
          }
        }
      )
    },
    showHtml8 () {
      let data = {
        chartId: 27,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              barWidth: '60%',
              boundaryGap: false,
              axisLabel: {
                interval: 0,
                rotate: 0
              },
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChartNoLegend('chart_4', res.obj.title, series, res.obj.dataxList, '', {customattrs: {xrotate: 0}}, this)
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    showHtml9 () {
      let data = {
        chartId: 28,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [{
              name: '',
              type: 'line',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              barWidth: '60%',
              boundaryGap: false,
              axisLabel: {
                interval: 0,
                rotate: -20
              },
              data: res.obj.datayList
            }]
            this.$ChartUtil.drawChart('chart_5', res.obj.title, [], '', series, res.obj.dataxList, true, {}, this)
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    showHtml10 () {
      let data = {
        chartId: 29,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.tsjylTable = res.obj.data
          }
        }
      )
    },
    showHtml11 () {
      let data = {
        chartId: 30,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.tsyqTable = res.obj.data
          }
        }
      )
    },
    showHtml12 () {
      let data = {
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getExamResult',
        data,
        res => {
          if (res.success) {
            //   return
            if (!res.data) {
              return
            }
            let datay = res.data ? res.data.zyDataList : []
            for (let item of datay) {
              item['type'] = 'bar'
            }
            setTimeout(() => {
              this.$ChartUtil.drawChart(
                'chart_13',
                '各专业各年级考试及格率',
                res.obj,
                '',
                datay,
                ['一年级', '二年级', '三年级'],
                false,
                {
                  legend: {
                    y: '20',
                    data: res.obj
                  },
                  customattrs: {xrotate: 0}
                },
                this
              )
            }, 150)
          }
        }
      )
    },
    showHtml5 () {
      let data = {
        chartId: 24,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            this.value6 = res.obj.data[0].value
            this.value7 = res.obj.data[1].value
            this.value8 = res.obj.data[2].value
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    showHtml3 () {
      let data = {
        chartId: 22,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [
              {
                name: '',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
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
                data: res.obj.datayList
              }
            ]
            this.$ChartUtil.drawChartNoXY('chart_2', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    showHtml4 () {
      let data = {
        chartId: 23,
        deptId: this.deptId
      }
      this.$ajax(
        'post',
        this.HOST + '/tr/trCockpit/web/getChartDataById',
        data,
        res => {
          if (res.success) {
            if (!res.obj || !res.obj.datayList) {
              return
            }
            let series = [
              {
                name: '',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
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
                data: res.obj.datayList
              }
            ]
            this.$ChartUtil.drawChartNoXY('chart_3', res.obj.title, res.obj.legend, this.$ChartUt.HORIZONTAL, series, [], {}, this)
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    }
  }
}
</script>
<style scoped>
.tab-control {
  width: 100%;
  font-size: 14px;
  color: #76838f;
  background-color: #fff;
  border-bottom: 1px solid #e4eaec;
  /* margin-bottom: 26px; */
}
.tab-control .tab-control-item div {
  line-height: 38px;
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
/* .slgl_box {
  padding: 0 0 0 20px;
  background: #eef1f2;
} */
.container_box_header {
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
  padding-left: 20px;
}
.col_item_father {
  font-size: 0;
}
.col_item_box:nth-of-type(1) {
  padding-left: 0;
}
.col_item_box {
  height: 134px;
  display: inline-block;
  width: 20%;
  position: relative;
  box-sizing: border-box;
  /* padding: 0 10px; */
  padding-left: 10px;
  vertical-align: top;
}
.col_item_box.three {
  width: 33.33%;
}
.col_item_box.four {
  width: 25%;
}
.col_item_box > div {
  position: relative;
  height: 134px;
  box-sizing: border-box;
  vertical-align: top;
  background: #fff;
  border-radius: 4px;
}
.col_item_box.theAll > div {
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
  line-height: 134px;
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
div.chart_show {
  background: #fff;
  margin-top: 18px;
  padding: 20px;
}
div.title {
  height: 60px;
  line-height: 60px;
  background: #fff;
  margin-top: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 20px;
}
.xb_items {
  text-align: center;
}
.xb_items_span_num {
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  border-radius: 3px;
  background: #a6a6a6;
  margin-left: 28px;
}
.xb_items_span_grade {
  font-size: 24px;
  color: #ed7d31;
  margin-left: 20px;
}
.nj_name {
  text-align: center;
  font-size: 14px;
}
.xb_items_span_nj {
  color: #999;
}
.xb_items_name {
  color: #444;
}
.xb_items_zy {
  color: #999;
  text-align: center;
}
/* .chart_box {
    position: relative;
}
.textTitle{
     color: #37474f;
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    left: 20px;
    top: 20px;
    width: 100%
 } */
</style>
