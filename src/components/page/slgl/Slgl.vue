<template>
  <div class="cell_pointer">
    <!--<div class="container_box_header">我负责的目标</div>-->
    <fiveSelect></fiveSelect>
    <!-- 操作容器 -->
    <div class="bg_box">
      <div class="operation_box boxShadow">
        <!-- 计划类型 -->
        <div class="operation_item">
          <div class="operation_item_right">
            <el-select v-model="targetClass" placeholder="目标类型" style="width: 130px;" size="small" @change="targetClassChange">
              <el-option label="我负责的目标" value="1"></el-option>
              <el-option label="我审核的目标" value="2"></el-option>
            </el-select>
          </div>
        </div>
        <!-- 所属部门 -->
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
        <div class="operation_item" v-if="targetClass - 0 === 2" style="margin-left: 6px;" key="select1">
          <div class="operation_item_right">
            <el-select v-model="shqkInput" placeholder="审核情况" style="width: 110px;" size="small" @change="searchFunc">
              <el-option label="审核情况" value=""></el-option>
              <el-option v-for="item in shskOptions" :key="item.value" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 完成情况 -->
        <div class="operation_item" style="margin-left: 6px;" v-if="targetClass - 0 === 1" key="select2">
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
            <el-date-picker style="width: 248px;" v-model="targetTime" type="daterange" size="small" :editable="false" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="timeChange">
            </el-date-picker>
          </div>
        </div>
        <!-- 姓名 -->
        <div class="operation_item" style="margin-left: 6px;">
          <div class="operation_item_right">
            <el-input v-model="targetName" placeholder="请输入目标名称" size="small" style="width: 152px;" clearable @keyup.native.enter="searchFunc"></el-input>
          </div>
        </div>
        <!-- 搜索按钮 -->
        <el-button type="info" icon="el-icon-refresh" style="height: 32px;width: 32px;margin-left: 0;transform: translateY(1px);text-align: center;padding: 9px 0;" size="small" @click="refreshCondition"></el-button>
        <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchFunc">查询</el-button>
        <!-- 右侧操作按钮 -->
        <div class="right_do_btn" style="float: right">
          <el-button type="primary" icon="el-icon-plus" style="height: 32px;background: #ed7d31;border: 0;" size="small" @click="router_to_add">添加目标</el-button>
        </div>
      </div>
      <!-- 视图容器 -->
      <div class="table_page_box boxShadow" v-if="isWfz" key="table1">
        <el-table size="mini" ref="multipleTable" :data="tableData" style="width: 100%" @sort-change="sortChange" @row-click="rowClick">
          <el-table-column label="序号" width="60" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
          </el-table-column>
          <el-table-column align="left" label="目标" show-overflow-tooltip>
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.targetName}}
                <i v-if="scope.row.fileTotal" class="iconfont">&#xe632;</i>
                <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="量化标准" show-overflow-tooltip :width="$store.state.$screenWidth" align="left">
            <template slot-scope="scope">
              {{scope.row.stand || "-"}}
            </template>
          </el-table-column>
          <el-table-column label="权重" show-overflow-tooltip width="50" align="center">
            <template slot-scope="scope">
              {{scope.row.targetQz || "-"}}
            </template>
          </el-table-column>
          <el-table-column label="完成情况" width="90" align="center">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.resultType}}</span>
            </template>
          </el-table-column>
          <el-table-column label="进度偏差" show-overflow-tooltip align="center" width="90">
            <template slot-scope="scope">
              {{scope.row.progressDeviation || "-"}}
            </template>
          </el-table-column>
          <el-table-column label="起止日期" width="190" align="center" sortable>
            <template slot-scope="scope">
              {{mydateFormat.dateCodeYmd(scope.row.startTime) + '至' + mydateFormat.dateCodeYmd(scope.row.endTime)}}</template>
          </el-table-column>
          <el-table-column label="子目标数" width="80" align="center">
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="go_child(scope.row.id)" style="display: block;height: 54px;">{{scope.row.childTotal}}</a>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="250" align="center">
            <template slot-scope="scope">
              <span class="hover_fj" @click="router_to_split(scope.row.id)" title="分解目标">
                <i class="iconfont">&#xe6c4;</i>
              </span>
              <span class="hover_zd" @click="toZdPlan(scope.row.id)" title="制定计划">
                <i class="iconfont">&#xe641;</i>
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
      <div class="table_page_box boxShadow" v-if="!isWfz" key="table2">
        <el-table size="mini" ref="multipleTable" :data="tableData" @sort-change="sortChange" @row-click="rowClick" style="width: 100%">
          <el-table-column label="序号" width="60" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
          </el-table-column>
          <el-table-column label="目标" show-overflow-tooltip>
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.targetName}}
                <i v-if="scope.row.fileTotal" class="iconfont">&#xe632;</i>
                <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="标准" show-overflow-tooltip :width="$store.state.$screenWidth" align="center">
            <template slot-scope="scope">
              {{scope.row.stand || "-"}}
            </template>
          </el-table-column>
          <el-table-column label="权重" show-overflow-tooltip width="50" align="center">
            <template slot-scope="scope">
              {{scope.row.targetQz || "-"}}
            </template>
          </el-table-column>
          <!-- <el-table-column prop="dept_name" label="所属部门" show-overflow-tooltip align="left" :width="$store.state.$screenWidth">
          </el-table-column> -->
          <el-table-column prop="managerName" label="负责人" width="80" align="center">
          </el-table-column>
          <el-table-column label="起止日期" width="190" align="center" sortable>
            <template slot-scope="scope">
              {{mydateFormat.dateCodeYmd(scope.row.startTime) + '至' + mydateFormat.dateCodeYmd(scope.row.endTime)}}</template>
          </el-table-column>
          <el-table-column label="完成情况" width="90" align="center">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.resultType}}</span>
            </template>
          </el-table-column>
          <el-table-column label="审核情况" width="100" align="center">
            <template slot-scope="scope">
              {{scope.row.checkStatus}}
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog title="本月进度填报" :visible.sync="dialogVisible_jd" width="30%">
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
  </div>
</template>
<script>
import fiveSelect from "../target_plan_common/five_select.vue";
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
      dialogVisible_jd: false, // 填报进度的容器
      isWfz: true,
      targetClass: "2",
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      targetTime: "",
      starttime: "",
      endtime: "",
      targetState: "",
      targetDept: "",
      targetName: "",
      deptOptions: [], //  部门option
      stateOptions: [
        {
          value: "",
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
      descStr: "true" // 升序或者降序的字段
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
    this.targetClass = this.$route.params.type;
    if (this.$route.query.deptId) {
      this.refreshCondition()
    }
  },
  methods: {
    refreshCondition() {
      // 重置筛选条件
      this.descStr = true
      this.shqkInput = ""
      this.targetState = ""
      this.targetTime = ""
      this.starttime = ""
      this.endtime = ""
      this.targetName = ""
      this.searchFunc()
    },
    rowClick(row, event, column) {
      // 点击某一行时触发
      if (column.label === "子目标数" || column.label === "操作") {
        // 不进行操作
      } else {
        // 跳转到详情
        if (this.targetClass - 0 === 1) {
          this.$router.push({ path: "/targetDetail/" + row.id });
        } else {
          this.$router.push({ path: "/shTargetDetail/" + row.id });
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
    targetClassChange(val) {
      if (val - 0 === 1) {
        this.shqkInput = "";
        this.isWfz = true;
      } else {
        this.targetState = "";
        this.isWfz = false;
      }
      this.$router.push({
        path: "/slgl/" + val,
        query: this.$route.query
      });
    },
    addJdSure() {
      let data = {
        reformId: this.reformId,
        reformType: 1,
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
            this.refreshDom()
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
      this.theDetailName = row.target_name;
    },
    sortChange(col, prop, order) {
      let self = this;
      if (col.order) {
        if (col.order === "ascending") {
          // 升序
          self.descStr = "false";
        } else {
          // 降序
          self.descStr = "true";
        }
      } else {
        self.descStr = "true";
      }
      this.refreshDom()
    },
    toDetail(id) {
      if (this.targetClass - 0 === 2) {
        this.$router.push({ path: "/targetDetail/" + id });
      } else {
        this.$router.push({ path: "/shTargetDetail/" + id });
      }
    },
    go_child(id) {
      this.$router.push({ path: "/childList/" + id, query: this.$route.query });
    },
    // 搜索以及分页时调用的方法
    refreshDom() {
      let data = {
        deptId: this.$route.query.deptId,
        roleId: this.$route.query.roleId,
        levelType: this.$route.query.levelType,
        targetType: this.targetClass,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        startPage: this.currentPage,
        pageSize: this.pageSize,
        targetStatus: this.targetState,
        checkStatus: this.shqkInput,
        orderBy: this.descStr
      };
      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trTarget/web/getTargetListByCon",
        data,
        res => {
          if (res.success) {
            if (this.targetClass - 0 === 1) {
              this.isWfz = true;
            } else {
              this.isWfz = false;
            }
            this.totalPage = res.data.total;
            this.tableData = [];
            for (let item of res.data.data) {
              item.styleName = this.resultTypeObj[item.resultType];
              this.tableData.push(item);
            }
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    handleCurrentChange(val) {
      let self = this;
      this.currentPage = val;
      this.refreshDom()
    },
    handleSizeChange(val) {
      let self = this;
      this.pageSize = val;
      self.currentPage = 1;
      this.refreshDom()
    },
    // 搜索方法
    searchFunc() {
      this.currentPage = 1
      this.refreshDom()
    },
    // 删除方法
    deleteFunc(id) {
      let self = this;
      this.$ajax(
        "post",
        this.HOST + "/tr/trTarget/web/checkBeforeDel",
        { targetId: id },
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
              self.$ajax(
                "post",
                self.HOST + "/tr/trTarget/web/delTargetById",
                { targetId: id },
                res => {
                  if (res.success) {
                    self.$message({
                      message: res.msg,
                      type: "success"
                    });
                    self.currentPage = 1;
                    let starttime = "";
                    let endtime = "";
                    if (self.targetTime) {
                      starttime = self.mydateFormat.dateCodeYmd(
                        self.targetTime[0]
                      );
                      endtime = self.mydateFormat.dateCodeYmd(
                        self.targetTime[1]
                      );
                    }
                    this.refreshDom()
                  } else {
                    self.$message({
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
      this.$router.push({
        path: "/addTarget",
        query: this.$route.query
      });
    },
    // 跳转到添加目标
    router_to_edit(id) {
      this.$ajax(
        "post",
        this.HOST + "/tr/trTarget/web/getTargetById",
        { targetId: id },
        res => {
          if (res.success) {
            this.$router.push({
              path: "/editTarget/" + id,
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
    },
    // 跳转到分解目标
    router_to_split(id) {
      this.$ajax(
        "post",
        this.HOST + "/tr/trTarget/web/checkBeforeSplit",
        { targetId: id },
        res => {
          if (res.success) {
            this.$router.push({
              path: "/splitTarget/" + id,
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
    },
    toZdPlan (id) {
      this.$ajax(
        "post",
        this.HOST + "/tr/trPlan/web/checkBeforeAddPlan",
        { targetId: id },
        res => {
          if (res.success) {
            this.$router.push({
              path: "/zdPlan/" + id,
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
/* .slgl_box {
  padding: 0 1.64%;
  background: #f1f4f5;
}
.container_box_header {
  padding-left: 1.64%;
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
} */
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
.hover_jd,
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
.hover_jd:hover {
  background: #ed7d31;
  color: #fff;
}
.hover_bj:hover {
  background: #5b9bd5;
  color: #fff;
}
.hover_sc:hover {
  background: #e96c72;
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
.el-table__row:hover .hover_jd {
  background: #ed7d31;
  color: #fff;
}
.el-table__row:hover .hover_fj {
  background: #ffc000;
  color: #fff;
}
.el-table__row:hover .hover_zd {
  background: #70ad47;
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
</style>
