<template>
  <div class="cell_pointer">
    <!-- <div class="container_box_header">我负责的计划</div> -->
    <fiveSelect></fiveSelect>
    <!-- 操作容器 -->
    <div class="bg_box">
      <div class="operation_box boxShadow">
        <!-- 计划类型 -->
        <div class="operation_item">
          <!-- <div class="operation_item_left">所属部门</div> -->
          <div class="operation_item_right">
            <el-select v-model="planType" placeholder="计划类型" style="width: 130px;" size="small" @change="planTypeChange">
              <el-option label="我负责的计划" value="2"></el-option>
              <el-option label="我参与的计划" value="8"></el-option>
              <el-option label="我监督的计划" value="6"></el-option>
              <el-option label="我审核的计划" value="3"></el-option>
            </el-select>
          </div>
        </div>
        <!-- <div class="operation_item">
          <div class="operation_item_right">
            <el-select v-model="targetDept" placeholder="所属部门" style="width: 110px;" size="small">
              <el-option label="所属部门" value=""></el-option>
              <el-option v-for="item in deptOptions" :key="item.id" :label="item.deptname" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div> -->
        <!-- 审核情况 -->
        <div class="operation_item" style="margin-left: 6px;" v-if="planType - 0 === 3" key="select1">
          <!-- <div class="operation_item_left">所属部门</div> -->
          <div class="operation_item_right">
            <el-select v-model="shqkInput" placeholder="审核情况" style="width: 110px;" size="small" @change="searchFunc">
              <el-option label="审核情况" value=""></el-option>
              <el-option v-for="item in shskOptions" :key="item.value" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 完成情况 -->
        <div class="operation_item" style="margin-left: 6px;" v-if="planType - 0 !== 3" key="select2">
          <!-- <div class="operation_item_left">完成情况</div> -->
          <div class="operation_item_right">
            <el-select v-model="targetState" placeholder="完成情况" size="small" style="width: 110px;" @change="searchFunc">
              <el-option v-for="item in stateOptions" :key="item.value" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 日期 -->
        <div class="operation_item">
          <div class="operation_item_left">日期</div>
          <div class="operation_item_right">
            <el-date-picker style="width: 248px;" v-model="targetTime" type="daterange" size="small" :editable="false" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" clearable @change="timeChange">
            </el-date-picker>
          </div>
        </div>
        <!-- 姓名 -->
        <div class="operation_item" style="margin-left: 6px;">
          <!-- <div class="operation_item_left">目标名称</div> -->
          <div class="operation_item_right">
            <el-input v-model="targetName" placeholder="请输入计划名称" size="small" style="width: 152px;" clearable @keyup.native.enter="searchFunc"></el-input>
          </div>
        </div>
        <!-- 搜索按钮 -->
        <el-button type="info" icon="el-icon-refresh" style="height: 32px;width: 32px;margin-left: 0;transform: translateY(1px);text-align: center;padding: 9px 0;" size="small" @click="refreshCondition"></el-button>
        <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchFunc">查询</el-button>
        <!-- 右侧操作按钮 -->
        <div class="right_do_btn" style="float: right">
          <el-button type="primary" icon="el-icon-plus" style="height: 32px;background: #ed7d31;border: 0;" size="small" @click="router_to_add">添加计划</el-button>
          <!-- <el-button type="primary" icon="el-icon-edit" style="height: 32px;background: #5b9bd5;border: 0;" size="small" @click="router_to_edit"></el-button>         -->
          <!-- <el-button type="info" icon="el-icon-delete" style="height: 32px;" size="small" @click="deleteFunc" :disabled="isDisabledDelete"></el-button> -->
        </div>
      </div>
      <!-- 视图容器 -->
      <div class="table_page_box boxShadow" key="table1" v-if="planType1 - 0 === 2">
        <el-table size="mini" ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" @sort-change="sortChange" style="width: 100%" @row-click="rowClick">
          <el-table-column label="序号" width="80" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
            <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
          </el-table-column>
          <el-table-column label="计划" show-overflow-tooltip>
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.plan_name}}
                <i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
                <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="所属目标" show-overflow-tooltip align="left">
            <template slot-scope="scope">
              <a href="javascript:void(0)" style="" @click="$router.push({ path: '/targetDetail/' + scope.row.target_id })">{{scope.row.target_name}}</a>
            </template>
          </el-table-column>
          <el-table-column label="权重" align="center" show-overflow-tooltip width="60">
            <template slot-scope="scope">{{scope.row.plan_qz || '-'}}</template>
          </el-table-column>
          <el-table-column label="负责人" width="100" align="center">
            <template slot-scope="scope">
              <el-tag>{{scope.row.manager_name}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="起止日期" width="220" align="center" sortable>
            <template slot-scope="scope">
              {{scope.row.start_time + '至' + scope.row.end_time}}</template>
          </el-table-column>
          <el-table-column label="完成情况" align="center" width="90">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.result_type}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" align="center">
            <template slot-scope="scope">
              <span class="hover_jd" @click="showJdBox(scope.row)" title="进度填报">
                <i class="iconfont">&#xe634;</i>
              </span>
              <span class="hover_bj" @click="router_to_edit(scope.row.id)" title="编辑">
                <i class="el-icon-edit" style="font-size: 17px;"></i>
              </span>
              <span class="hover_sc" @click="deleteFunc(scope.row.id)" title="删除">
                <i class="el-icon-delete" style="font-size: 17px;"></i>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
        </div>
      </div>
      <!-- 我参与的 -->
      <div class="table_page_box boxShadow" key="table2" v-if="planType1 - 0 === 8">
        <el-table size="mini" ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" @sort-change="sortChange" @row-click="rowClick" style="width: 100%">
          <!-- <el-table-column
      type="selection"
      width="30">
    </el-table-column> -->
          <el-table-column label="序号" width="80" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
            <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
          </el-table-column>
          <el-table-column label="计划" show-overflow-tooltip align="left">
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.plan_name}}
                <i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
                <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="所属目标" show-overflow-tooltip align="left">
            <template slot-scope="scope">
              <a href="javascript:void(0)" style="" @click="$router.push({ path: '/targetDetail/' + scope.row.target_id })">{{scope.row.target_name}}</a>
            </template>
          </el-table-column>
          <el-table-column label="权重" align="center" show-overflow-tooltip  width="60">
            <template slot-scope="scope">{{scope.row.plan_qz || '-'}}</template>
          </el-table-column>
          <el-table-column label="负责人" width="120" align="center">
            <template slot-scope="scope">
              <el-tag>{{scope.row.manager_name}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="起止日期" width="250" align="center" sortable>
            <template slot-scope="scope">{{scope.row.start_time + '至' + scope.row.end_time}}</template>
          </el-table-column>
          <el-table-column label="完成情况" width="120" align="center">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.result_type}}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
        </div>
      </div>
      <!-- 我监督的6 -->
      <div class="table_page_box boxShadow" key="table3" v-if="planType1 - 0 === 6">
        <el-table size="mini" ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" @sort-change="sortChange" @row-click="rowClick" style="width: 100%">
          <!-- <el-table-column
      type="selection"
      width="30">
    </el-table-column> -->
          <el-table-column label="序号" width="80" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
            <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
          </el-table-column>
          <el-table-column label="计划" align="left" show-overflow-tooltip>
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.plan_name}}
                <i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
                <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="所属目标" show-overflow-tooltip align="left">
            <template slot-scope="scope">
              <a href="javascript:void(0)" style="" @click="$router.push({ path: '/targetDetail/' + scope.row.target_id })">{{scope.row.target_name}}</a>
            </template>
          </el-table-column>
          <el-table-column label="权重" align="center" show-overflow-tooltip  width="60">
            <template slot-scope="scope">{{scope.row.plan_qz || '-'}}</template>
          </el-table-column>
          <el-table-column label="负责人" width="120" align="center">
            <template slot-scope="scope">
              <el-tag>{{scope.row.manager_name}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="起止日期" width="250" align="center" sortable>
            <template slot-scope="scope">{{scope.row.start_time + '至' + scope.row.end_time}}</template>
          </el-table-column>
          <el-table-column label="完成情况" width="120" align="center">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.result_type}}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
        </div>
      </div>

      <!-- 我审核的3 -->
      <div class="table_page_box boxShadow" key="table4" v-if="planType1 - 0 === 3">
        <el-table size="mini" ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" @sort-change="sortChange" @row-click="rowClick" style="width: 100%">
          <!-- <el-table-column
      type="selection"
      width="30">
    </el-table-column> -->
          <el-table-column label="序号" width="80" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
            <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
          </el-table-column>
          <el-table-column label="计划" show-overflow-tooltip>
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.plan_name}}
                <i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
                <el-progress :percentage="scope.row.progress ? scope.row.progress - 0  : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="所属目标" show-overflow-tooltip align="left">
            <template slot-scope="scope">
              <a href="javascript:void(0)" style="" @click="$router.push({ path: '/targetDetail/' + scope.row.target_id })">{{scope.row.target_name}}</a>
            </template>
          </el-table-column>
          <el-table-column label="权重" align="center" show-overflow-tooltip width="60">
            <template slot-scope="scope">{{scope.row.plan_qz || '-'}}</template>
          </el-table-column>
          <el-table-column label="负责人" width="90" align="center">
            <template slot-scope="scope">
              <el-tag>{{scope.row.manager_name}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="起止日期" width="220" align="center" sortable>
            <template slot-scope="scope">{{scope.row.start_time + '至' + scope.row.end_time}}</template>
          </el-table-column>
          <el-table-column label="完成情况" width="90" align="center">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.result_type}}</span>
            </template>
          </el-table-column>
          <el-table-column label="审核情况" width="100" align="center">
            <template slot-scope="scope">
              {{scope.row.check_status}}
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
        </div>
      </div>
      <!-- <el-dialog
  title="填报进度"
  :visible.sync="dialogVisible_jd"
  width="30%">
  <el-slider v-model="slider_value"></el-slider>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_jd = false">取 消</el-button>
    <el-button type="primary" @click="addJdSure">确 定</el-button>
  </span>
</el-dialog> -->
      <el-dialog title="本月进度填报" :visible.sync="dialogVisible_jd" width="30%">
        <div style="font-size: 16px;margin-bottom: 20px;padding-left: 20px;">{{theDetailName}}</div>
        <!-- <el-slider v-model="slider_value_bar" show-tooltip></el-slider> -->
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
            <span style="font-size: 16px;">已结项<span style="font-size: 14px;color:#333">（填报后将不可更改）</span></span>
          </el-radio><br><br>
        </el-radio-group>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible_jd = false">取 消</el-button>
          <el-button type="primary" @click="addJdSure">确 定</el-button>
        </span>
      </el-dialog>

    </div>
  </div>
</template>
<script>
import fiveSelect from "../../target_plan_common/five_select.vue";
export default {
  components: { fiveSelect },
  data() {
    return {
      deptId: "", // 部门id
      roleId: "", // 角色id
      shqkInput: "",
      shskOptions: [
        // {
        //   value: 1,
        //   name: '未提交'
        // },
        {
          value: 2,
          name: "待审核"
        },
        {
          value: 3,
          name: "审核不通过"
        },
        {
          value: 4,
          name: "审核通过"
        }
      ],
      theDetailName: "",
      reformId: "",
      slider_value: 0, // 填报进度
      slider_value_bar: 0, 
      dialogVisible_jd: false, // 填报进度的容器
      planType: "2",
      planType1: "2",
      isDisabledDelete: true,
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      targetTime: "",
      targetState: 6,
      targetDept: "",
      targetName: "",
      deptOptions: [], //  部门option
      stateOptions: [
        {
          value: 6,
          name: "完成情况"
        },
        {
          value: 1,
          name: "未开始"
        },
        {
          value: 2,
          name: "进行中"
        },
        {
          value: 3,
          name: "已完成"
        },
        {
          value: 4,
          name: "已延期"
        },
        {
          value: 5,
          name: "延期完成"
        }
      ],
      tableData: [],
      resultTypeObj: {
        未开始: "style_one",
        进行中: "style_two",
        已完成: "style_three",
        已延期: "style_four",
        延期完成: "style_five"
      },
      multipleSelection: [],
      descStr: "true"
    };
  },
  watch: {
    '$route' (to, from) {
      if (to.query ^ to.query.dr) {
        this.refreshCondition();
      }
    }
  },
  mounted() {
    let self = this;
    this.planType = this.$route.params.type;
    this.planType1 = this.$route.params.type;
    if (this.$route.query.deptId) {
      this.refreshCondition();
    }
  },
  methods: {
    refreshCondition() {
      // 清空筛选条件
      this.targetTime = "";
      this.starttime = "";
      this.endtime = "";
      this.targetState = "";
      this.targetName = "";
      this.shqkInput = "";
      this.searchFunc();
    },
    rowClick(row, event, column) {
      // 点击某一行时触发
      // console.log(row, event, column)
      if (column.label === "操作" || column.label === "所属目标") {
        // 不进行操作
      } else {
        // 跳转到详情
        if (this.planType1 - 0 === 2) {
          this.$router.push({ path: "/wfzPlanDetail/" + row.id });
        } else if (this.planType1 - 0 === 8) {
          this.$router.push({ path: "/wcyPlanDetail/" + row.id });
        } else if (this.planType1 - 0 === 6) {
          this.$router.push({ path: "/wjdPlanDetail/" + row.id });
        } else if (this.planType1 - 0 === 3) {
          this.$router.push({ path: "/wshPlanDetail/" + row.id });
        }
      }
    },
    timeChange() {
      if (this.targetTime) {
        this.starttime = this.mydateFormat.dateCodeYmd(this.targetTime[0]);
        this.endtime = this.mydateFormat.dateCodeYmd(this.targetTime[1]);
      } else {
        this.starttime = "";
        this.endtime = "";
      }
      this.searchFunc();
    },
    planTypeChange(val) {
      this.planType1 = val;
      this.currentPage = 1;
      if (this.planType - 0 === 3) {
        this.targetState = "";
      } else {
        this.shqkInput = "";
      }
      this.searchFunc();
      this.$router.push({
        path: "/zgjhydb/" + val,
        query: this.$route.query
      });
    },
    addJdSure() {
      let data = {
        reformId: this.reformId,
        reformType: 2,
        progress: this.slider_value
      };
      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trPlan/web/editProgress",
        data,
        res => {
          if (res.success) {
            this.$message({
              type: "success",
              message: res.msg
            });
            this.dialogVisible_jd = false;
            this.refreshCondition();
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    showJdBox(row) {
      this.dialogVisible_jd = true;
      this.slider_value = row.progress - 0;
      this.reformId = row.id;
      this.theDetailName = row.plan_name;
      this.slider_value = row.month[new Date().getMonth()]["monthStatus"];
    },
    sortChange(col, prop, order) {
      let self = this;
      if (col.order) {
        if (col.order === "ascending") {
          // 升序
          this.descStr = "false";
        } else {
          // 降序
          this.descStr = "true";
        }
      } else {
        this.descStr = "true";
      }
      this.refreshDom();
    },
    toDetail(id) {
      if (this.planType1 - 0 === 2) {
        this.$router.push({ path: "/wfzPlanDetail/" + id });
      } else if (this.planType1 - 0 === 8) {
        this.$router.push({ path: "/wcyPlanDetail/" + id });
      } else if (this.planType1 - 0 === 6) {
        this.$router.push({ path: "/wjdPlanDetail/" + id });
      } else if (this.planType1 - 0 === 3) {
        this.$router.push({ path: "/wshPlanDetail/" + id });
      }
    },
    go_child(id) {
      this.$router.push({ path: "/childList/" + id });
    },
    // 搜索以及分页时调用的方法
    refreshDom() {
      let data = {
        planType: this.planType,
        checkStatus: this.shqkInput,
        deptId: this.$route.query.deptId,
        resultType: this.targetState,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr,
        levelType: this.$route.query.levelType,
        targetRoleId: this.$route.query.roleId
      };
      let self = this;
      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trPlan/web/getPlanLists",
        data,
        res => {
          if (res.success) {
            // loading.close();
            this.planType1 = this.planType;
            this.totalPage = res.data.totalSize;
            this.tableData = [];
            for (let item of res.obj) {
              item.styleName = this.resultTypeObj[item.result_type];
              this.tableData.push(item);
            }
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    handleCurrentChange(val) {
      let self = this;
      this.currentPage = val;
      // let data = {
      //   planType: self.planType,
      //   deptId: self.targetDept,
      //   resultType: self.targetState,
      //   startTime: '',
      //   endTime: '',
      //   searchName: self.targetName,
      //   pageNumber: self.currentPage,
      //   pageSize: self.pageSize,
      //   descStr: self.descStr
      // }
      // self.refreshDom(data)
      let data = {
        planType: this.planType,
        checkStatus: this.shqkInput,
        deptId: this.targetDept,
        resultType: this.targetState,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      };
      this.refreshDom(data);
    },
    handleSizeChange(val) {
      let self = this;
      this.pageSize = val;
      this.currentPage = 1;
      // let data = {
      //   planType: self.planType,
      //   deptId: self.targetDept,
      //   resultType: self.targetState,
      //   startTime: '',
      //   endTime: '',
      //   searchName: self.targetName,
      //   pageNumber: self.currentPage,
      //   pageSize: self.pageSize,
      //   descStr: self.descStr
      // }
      // self.refreshDom(data)
      let data = {
        planType: this.planType,
        checkStatus: this.shqkInput,
        deptId: this.targetDept,
        resultType: this.targetState,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      };
      this.refreshDom(data);
    },
    // 搜索方法
    searchFunc() {
      let self = this;
      let starttime = "";
      let endtime = "";
      if (this.targetTime) {
        starttime = this.mydateFormat.dateCodeYmd(this.targetTime[0]);
        endtime = this.mydateFormat.dateCodeYmd(this.targetTime[1]);
      }
      // let data = {
      //   planType: self.planType,
      //   deptId: self.targetDept,
      //   resultType: self.targetState,
      //   startTime: starttime,
      //   endTime: endtime,
      //   searchName: self.targetName,
      //   pageNumber: self.currentPage,
      //   pageSize: self.pageSize,
      //   descStr: self.descStr
      // }
      // self.refreshDom(data)
      let data = {
        planType: this.planType,
        checkStatus: this.shqkInput,
        deptId: this.targetDept,
        resultType: this.targetState,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      };
      this.refreshDom(data);
    },
    handleSelectionChange(val) {
      if (val.length !== 1) {
        this.isDisabledDelete = true;
      } else {
        this.isDisabledDelete = false;
      }
      this.multipleSelection = val;
    },
    // 删除方法
    deleteFunc(id) {
      let self = this;
      this.$ajax(
        "post",
        this.HOST + "/tr/trPlan/web/checkUser",
        { id: id },
        res1 => {
          if (res1.success) {
            this.$confirm(
              "你确定要删除该条信息吗？删除后，不可恢复",
              "删除确认",
              {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
              }
            ).then(() => {
              this.$ajax(
                "post",
                this.HOST + "/tr/trPlan/web/delBatchPlan",
                { planIds: id },
                res => {
                  if (res.success) {
                    this.$message({
                      message: res.msg,
                      type: "success"
                    });
                    // if (self.currentPage > 1) {
                    this.currentPage = 1;
                    // return
                    // }
                    let starttime = "";
                    let endtime = "";
                    if (this.targetTime) {
                      starttime = this.mydateFormat.dateCodeYmd(
                        this.targetTime[0]
                      );
                      endtime = this.mydateFormat.dateCodeYmd(
                        this.targetTime[1]
                      );
                    }
                    let data = {
                      planType: this.planType,
                      checkStatus: this.shqkInput,
                      deptId: this.targetDept,
                      resultType: this.targetState,
                      startTime: this.starttime,
                      endTime: this.endtime,
                      searchName: this.targetName,
                      pageNumber: this.currentPage,
                      pageSize: this.pageSize,
                      descStr: this.descStr
                    };
                    this.refreshDom(data);
                  } else {
                    this.$message({
                      message: res.msg,
                      type: "error"
                    });
                  }
                }
              );
            });
          } else {
            this.$message({
              message: res1.msg,
              type: "warning"
            });
          }
        }
      );
    },
    // 跳转到添加目标
    router_to_add() {
      this.$router.push({ path: "/addPlan", query: this.$route.query });
    },
    // 跳转到添加目标
    router_to_edit(id) {
      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trPlan/web/getPlanDetail",
        { planId: id },
        res => {
          if (res.success) {
            this.$router.push({
              path: "/editPlan/" + id,
              query: this.$route.query
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    }
  }
};
</script>
<style scoped>
.operation_item {
  display: inline-block;
}
.operation_item_left {
  display: inline-block;
  width: 36px;
  height: 32px;
  color: #6f7374;
  line-height: 32px;
  vertical-align: top;
  text-align: right;
}
.operation_item_right {
  display: inline-block;
  /* height: 34px; */
  box-sizing: border-box;
}
.operation_box {
  /* height: 78px; */
  background: #fff;
  /* line-height: 78px; */
  padding: 22px 25px;
}
.table_page_box {
  margin-top: 20px;
  background: #fff;
}
.el-table__row:hover .hover_jd {
  background: #ed7d31;
  color: #fff;
}
.hover_jd,
.hover_fj,
.hover_zd {
  display: inline-block;
  height: 54px;
  width: 54px;
  vertical-align: top;
  line-height: 54px;
  cursor: pointer;
}
.hover_jd:hover {
  background: #ed7d31;
  color: #fff;
}
.hover_fj:hover {
  background: #ffc000;
  color: #fff;
}
.hover_zd:hover {
  background: #70ad47;
  color: #fff;
}
.el-table__row td {
  height: 54px;
}
.page_box {
  height: 56px;
  line-height: 56px;
  box-sizing: border-box;
  padding-top: 15px;
}
/*
'未开始': '#a5a5a5',
          '进行中': '#ffc000',
          '已完成': '#70ad47',
          '已延期': '#ed7d31',
          '延期完成': '#4472c4'
*/
.style_one {
  background: #a5a5a5;
}
.style_two {
  background: #ffc000;
}
.style_three {
  background: #70ad47;
}
.style_four {
  background: #ed7d31;
}
.style_five {
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
.hover_bj:hover {
  background: #5b9bd5;
  color: #fff;
}
.hover_sc:hover {
  background: #e96c72;
  color: #fff;
}
.el-table__row:hover .hover_bj {
  background: #5b9bd5;
  color: #fff;
}
.el-table__row:hover .hover_sc {
  background: #e96c72;
  color: #fff;
}
.hover_fj,
.hover_zd,
.hover_bj,
.hover_sc {
  display: inline-block;
  height: 54px;
  width: 54px;
  vertical-align: top;
  line-height: 54px;
  cursor: pointer;
}
.radio_i {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  transform: translateY(3px);
}
.radio_i + span {
  color: #333;
}
.plan_list table tbody div.cell {
  cursor: pointer;
}
</style>
