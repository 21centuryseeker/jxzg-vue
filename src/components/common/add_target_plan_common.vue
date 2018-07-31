<!--
    添加目标计划的公共的部分
    targetId_prop  目标id
    deptId_prop 部门id
    zbId_prop  指标id
    zbName_prop  指标名称
    khbz_prop  选择考核标准
    khbz_input_prop  选择标准的值
    targetStandInfo_prop   标准描述
    yjLists_prop  预警列表
    radio_prop   预警方式
    yjTime_prop   预警时间
    formChange   方法，父子组件通信的方法
-->
<template>
  <div>
    <div>
      <!-- 指标 -->
      <div class="zb_box box_list">
        <div class="box_header">{{targetId_prop === undefined ? '指标': '指标'}}</div>
        <!-- 指标 -->
        <div class="item_box" style="padding-bottom: 20px;">
          <div class="item_left">
            <span class="need">*</span>{{targetId_prop === undefined ? '指标': '指标'}}</div>
          <div class="item_right">
            <span class="zb_span" @click="showZbBox">{{zbName}}</span>
            <i class="el-icon-close" style="color: #80b748;margin-left: -23px;cursor: pointer;vertical-align: top;" v-if="zb_id" @click="romove_zb"></i>
          </div>
        </div>
        <!-- 考核标准 -->
        <div class="item_box" v-if="zb_id">
          <div class="item_left">
            <span class="need">*</span>考核标准</div>
          <div class="item_right" style="line-height: 0">
            <el-select v-model="khbz" placeholder="请选择" style="display: inline-block;width: 180px;">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="khbz_input" placeholder="请输入内容" style="display: inline-block;width: 200px;"></el-input>
            <span>{{unit}}</span>
            <span style="color: #80b748;margin-left: 30px;">{{standDesc}}</span>
          </div>
        </div>
        <!-- 标准描述 -->
        <div class="item_box" v-if="zb_id">
          <div class="item_left">标准描述</div>
          <div class="item_right">
            <el-input placeholder="请输入目标描述" style="width: 800px;margin-bottom: 20px;" type="textarea" :rows="2" v-model="targetStandInfo">
            </el-input>
          </div>
        </div>
      </div>
      <!-- 预警设置 -->
      <div class="yj_box box_list" v-if="zb_id">
        <div class="box_header">预警设置</div>
        <!-- 考核标准 -->
        <div class="item_box">
          <div class="item_left">预警设置</div>
          <div class="item_right">
            <template v-for="(item, index) in yjLists">
              <div :key="index">
                <span>{{zbName}}</span>
                <el-select v-model="item.value" placeholder="请选择" style="display: inline-block;width: 180px;" clearable>
                  <el-option v-for="items in options" :key="items.value" :label="items.label" :value="items.value">
                  </el-option>
                </el-select>
                <el-input v-model="item.input" placeholder="请输入内容" style="display: inline-block;width: 200px;"></el-input>
                <span>{{unitName}}</span>
                <span style="cursor: pointer;color:#80b748;font-size: 16px;" v-if="index == 0" @click="addNewYj">
                  <i class="el-icon-circle-plus-outline"></i>新增</span>
                <span style="cursor: pointer;color:#80b748;font-size: 16px;" v-if="index > 0" @click="removeThis(index)">
                  <i class="el-icon-remove-outline"></i>移除</span>
                <br>
              </div>
            </template>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left"></div>
          <div class="item_right">
            <span>预警时间</span>
            <el-radio v-model="radio" label="1">即时通知</el-radio>
            <el-radio v-model="radio" label="2">定时通知</el-radio>
            <br>
            <div v-if="radio == 1" style="color: #999">数据更新时自动进行通知</div>
            <div v-if="radio == 2" style="padding-bottom: 10px">
              <el-date-picker v-model="yjTime" :editable="false" type="date" placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- dialog -->
    <el-dialog title="选择指标" :visible.sync="dialogVisible" width="900px">
      <div class="my_tab_style">
        <el-tabs v-model="activeName">
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
              <el-container width="600px;" style="width: 600px;display: inline-block;" key="table1">
                <el-header>
                  <el-card class="box-card">
                    <el-select v-model="indexSource" placeholder="指标来源" style="display: inline-block;width: 120px;" size="small" v-if="false">
                      <el-option v-for="item in indexSourceOptions" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-input style="display: inline-block;width: 150px;" placeholder="搜索指标名称" v-model="indexName" size="small" @keyup.native.enter="search_zb"></el-input>
                    <el-button type="info" size="small" @click="search_zb">搜索</el-button>
                  </el-card>
                </el-header>
                <el-main style="box-sizing: border-box;display: block;" key="table1">
                  <el-card class="box-card" style="min-height: 300px;" key="table1">
                    <el-table ref="multipleTable" :data="zbList" tooltip-effect="dark" style="width: 100%" class="zb_table_style" @selection-change="handleSelectionChange" highlight-current-row key="table1">
                      <el-table-column width="50">
                        <template slot-scope="scope">
                          <el-radio v-model="zb_id_radio" :label="scope.$index" :disabled="!scope.row.isenable">
                            <span style="font-size: 0;">{{scope.$index}}</span>
                          </el-radio>
                        </template>
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
              <!-- 操作按钮 -->
              <div style="text-align: right">
                <el-button type="primary" @click="doSure" style="margin-right: 30px;">确定</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="自定义指标" name="second">
            <div key="table2">
              <el-header>
                <el-card class="box-card">
                  <el-input style="display: inline-block;width: 250px;" placeholder="搜索指标名称" v-model="indexName2" size="small" @keyup.native.enter="search_zb2"></el-input>
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
                      <template v-if="zbList2.length" v-for="(item, index) in zbList2">
                        <tr :key="index">
                          <td width="50" align="center">
                            <el-radio v-model="zb_id_radio_2" :label="index">
                              <span style="font-size: 0;">{{index}}</span>
                            </el-radio>
                          </td>
                          <td width="50" align="center">
                            {{pageSize2 * (currentPage2 - 1) + 1 + index}}
                          </td>
                          <td width="300" align="left">
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
                      <template>
                        <tr>
                          <td colspan="99">暂无数据</td>
                        </tr>
                      </template>
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
  </div>
</template>
<script>
export default {
  props: {
    targetId_prop: "",
    deptId_prop: "",
    zbId_prop: "",
    zbName_prop: {
      default: "指标库"
    },
    khbz_prop: {},
    khbz_input_prop: {},
    unit_prop: {},
    standDesc_prop: {},
    targetStandInfo_prop: {},
    yjLists_prop: {
      default: () => {
        return [
          {
            value: "",
            input: ""
          }
        ];
      }
    },
    unitName_prop: {},
    radio_prop: {
      default: "1"
    },
    yjTime_prop: {},
    formChange: {}
  },
  watch: {
    deptId (val) {
      // this.deptId_change()
      // console.log(val)
    },
    zb_id(val) {
      this.formChange("zb_id", val);
    },
    zbName(val) {
      this.formChange("zbName", val);
    },
    khbz(val) {
      this.formChange("khbz", val);
    },
    khbz_input(val) {
      this.formChange("khbz_input", val);
    },
    targetStandInfo(val) {
      this.formChange("targetStandInfo", val);
    },
    yjLists: {
      handler(val) {
        this.formChange("yjLists", val);
      },
      deep: true
    },
    radio(val) {
      this.formChange("radio", val);
    },
    yjTime(val) {
      this.formChange("yjTime", val);
    }
  },
  data() {
    return {
      zbName: "",
      khbz: "",
      khbz_input: "",
      unit: "",
      standDesc: "",
      targetStandInfo: "",
      yjLists: [
        {
          value: "",
          input: ""
        }
      ],
      unitName: "",
      radio: "1",
      yjTime: "",
      targetId: "",
      /*
      <<<<<<
      下方为自定义指标库
       */
      zb_id_radio_2: "",
      pageSize2: 8,
      currentPage2: 1,
      totalPage2: 0,
      multipleTable2: [],
      zbList2: [],
      indexName2: "",
      /*
      >>>>>>
      上方为自定义指标库
       */
      activeName: "first",
      zb_id_radio: "",
      indexSourceOptions: [
        {
          label: "全部",
          value: ""
        },
        {
          label: "学校自建",
          value: 1
        },
        {
          label: "平台自建",
          value: 2
        }
      ],
      pageSize: 8,
      indexSource: "",
      ckeckedKeysArr: [],
      keysArr: [],
      indexClass: "",
      wrapStyle: [{ height: "100%" }],
      deptId: "",
      deptItems: [],
      zb_id: "",
      khbzOptions: [],
      value: "",
      options: [
        {
          value: 1,
          label: "大于等于"
        },
        {
          value: 2,
          label: "大于"
        },
        {
          value: 3,
          label: "等于"
        },
        {
          value: 4,
          label: "小于等于"
        },
        {
          value: 5,
          label: "小于"
        }
      ],
      input: "",
      shType: 3,
      dialogVisible: false,
      propsZb: [],
      indexName: "",
      currentPage: 1,
      zb_before_id: "",
      totalPage: 0,
      zbList: [],
      xzzbOptions: [
        {
          label: "全部指标",
          value: ""
        },
        {
          label: "定性",
          value: 2
        },
        {
          label: "定量",
          value: 1
        }
      ],
      multipleSelection: [],
      sgrOptions: [],
      checkUserId: "",
      warnNumList: []
    };
  },
  mounted() {
    this.propsUpdate();
  },
  methods: {
    propsUpdate() {
      this.deptId = this.deptId_prop;
      this.zb_id = this.zbId_prop;
      this.zbName = this.zbName_prop !== "" ? this.zbName_prop : "指标库";
      this.khbz = this.khbz_prop;
      this.khbz_input = this.khbz_input_prop;
      this.unit = this.unit_prop;
      this.standDesc = this.standDesc_prop;
      this.targetStandInfo = this.targetStandInfo_prop;
      this.yjLists = this.yjLists_prop.length
        ? this.yjLists_prop
        : [
            {
              value: "",
              input: ""
            }
          ];
      this.unitName = this.unitName_prop;
      this.radio = this.radio_prop !== "" ? this.radio_prop : "1";
      this.yjTime = this.yjTime_prop;
      this.targetId = this.targetId_prop;
      // console.log(this.deptId_prop)
    },
    refreshTable2() {
      let self = this;
      let obj = {
        deptId: self.deptId,
        searchName: self.indexName2,
        pageNum: self.currentPage2,
        pageSize: self.pageSize2
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/trIndex/web/getCustomIndexList",
        obj,
        res => {
          if (res.success) {
            this.zbList2 = [];
            this.zbList2 = (res.obj || []);
            if (res.data) {
              self.totalPage2 = res.data.totalSize;
            } else {
              this.totalPage2 = 0
            }
            // self.currentPage = 1;
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    doSure2() {
      if (this.zb_id_radio_2 === "") {
        this.$message({
          type: "warning",
          message: "请选择一项指标！"
        });
        return;
      }
      this.zbName = this.zbList2[this.zb_id_radio_2 - 0].indexName;
      this.zb_id = this.zbList2[this.zb_id_radio_2 - 0].id;
      this.dialogVisible = false;
      this.unit = this.zbList2[this.zb_id_radio_2 - 0].unit;
      this.unitName = this.zbList2[this.zb_id_radio_2 - 0].unit;
      this.standDesc = this.zbList2[this.zb_id_radio_2 - 0].standDesc;
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val;
      this.refreshTable2();
    },
    search_zb2() {
      this.refreshTable2();
    },
    deptId_change(val) {
      this.zb_id = "";
      this.zbName = "指标库";
      this.zbList = [];
      this.standDesc = "";
      this.khbz = "";
      this.khbz_input = "";
      this.targetStandInfo = "";
      this.yjLists = [
        {
          value: "",
          input: ""
        }
      ];
      this.unitName = "";
      this.radio = "1";
      this.yjTime = "";
      this.checkUserId = "";
    },
    romove_zb() {
      this.zb_id_radio = "";
      this.zb_id = "";
      this.zbName = "指标库";
      this.unitName = "";
      this.unit = "";
      // this.shType = 2
      this.khbz = "";
      this.khbz_input = "";
      this.targetStandInfo = "";
      this.yjLists = [
        {
          value: "",
          input: ""
        }
      ];
      this.unitName = "";
      this.radio = "1";
      this.yjTime = "";
      this.checkUserId = "";
    },
    doSure() {
      if (this.zb_id_radio === "") {
        this.$message({
          type: "warning",
          message: "请选择一项指标！"
        });
        return;
      }
      this.zbName = this.zbList[this.zb_id_radio - 0].indexName;
      this.zb_id = this.zbList[this.zb_id_radio - 0].id;
      this.dialogVisible = false;
      this.unit = this.zbList[this.zb_id_radio - 0].unit;
      this.standDesc = this.zbList[this.zb_id_radio - 0].standDesc;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshTable();
    },
    isChile(node) {
      if (node == null) {
        return false;
      }
      let childSize = node.childNodes.length;
      if (childSize === 0) {
        return false;
      }
      return true;
    },
    showZbBox() {
      this.propsUpdate();
      let self = this;
      this.activeName = "first";
      if (self.targetId === undefined && !self.deptId) {
        self.$message({
          type: "warning",
          message: "请先选择所属部门！"
        });
        return;
      }
      if (self.targetId !== undefined && !self.targetId) {
        self.$message({
          type: "warning",
          message: "请先选择所属目标！"
        });
        return;
      }
      // 获取自定义指标
      this.refreshTable2();
      // 获取指标树形控件
      self.$ajax(
        "post",
        self.HOST + "/tr/trIndex/web/getMyIndexTypeList1",
        { deptId: self.deptId },
        res => {
          if (res.success) {
            self.dialogVisible = true;
            self.propsZb = [];
            self.keysArr = [];
            self.ckeckedKeysArr = [];
            self.propsZb = res.obj;
            self.keysArr.push(res.obj[0].id);
            if (res.obj[0].children) {
              self.ckeckedKeysArr.push(res.obj[0].children[0].id);
              self.zb_before_id = res.obj[0].children[0].id;
            } else {
              self.ckeckedKeysArr.push(res.obj[0].id);
              self.zb_before_id = res.obj[0].id;
            }
            let obj = {
              deptId: self.deptId,
              typeId: res.obj[0].children[0].id,
              indexName: self.indexName,
              pageNum: self.currentPage,
              pageSize: self.pageSize
            };
            self.$ajaxMore(
              "post",
              self.HOST + "/tr/trIndex/web/getMyIndexList",
              obj,
              res => {
                if (res.success) {
                  if (res.data) {
                    self.totalPage = res.data.totalSize;
                  }
                  self.currentPage = 1;
                  self.zbList = res.obj;
                } else {
                  self.$message({
                    message: res.msg,
                    type: "error"
                  });
                }
              }
            );
          } else {
            self.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    refreshTable() {
      let self = this;
      let obj = {
        deptId: self.deptId,
        typeId: self.zb_before_id,
        indexName: self.indexName,
        indexSource: self.indexSource,
        pageNum: self.currentPage,
        indexClass: self.indexClass,
        pageSize: self.pageSize
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trIndex/web/getMyIndexList",
        obj,
        res => {
          if (res.success) {
            self.zbList = [];
            self.zbList = res.obj;
            if (res.data) {
              self.totalPage = res.data.totalSize;
            }
            // self.currentPage = 1;
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    search_zb() {
      this.refreshTable();
    },
    nodeClick(data) {
      data.isActive = true;
      let id = data.id;
      let self = this;
      self.indexSource = "";
      self.indexName = "";
      self.indexClass = "";
      self.zb_before_id = id;
      this.zb_id_radio_2 = "";
      this.zb_id_radio = "";
      self.currentPage = 1;
      let obj = {
        deptId: self.deptId,
        typeId: id,
        indexName: self.indexName,
        pageNum: self.currentPage,
        pageSize: self.pageSize
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trIndex/web/getMyIndexList",
        obj,
        res => {
          if (res.success) {
            if (res.data) {
              self.totalPage = res.data.totalSize;
            }
            self.currentPage = 1;
            self.zbList = res.obj;
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    removeThis(index) {
      this.yjLists.splice(index, 1);
    },
    addNewYj() {
      if (this.yjLists.length >= 5) {
        this.$message({
          message: "预警值最多为五个！",
          type: "warning"
        });
        return;
      }
      this.yjLists.push({
        value: "",
        input: ""
      });
    }
  }
};
</script>
<style scoped>
/* .el-scrollbar__wrap {
  overflow: hidden
} */
.slgl_box {
  padding: 0 0 0 20px;
  background: #eef1f2;
}
.container_box_header {
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
}
.operation_box {
  /* height: 78px; */
  background: #fff;
  /* line-height: 78px; */
  padding: 22px 25px;
}
div.item_box {
  font-size: 0;
  margin-top: 17px;
  margin-left: 24px;
}
div.item_box div.item_left {
  display: inline-block;
  width: 114px;
  text-align: right;
  vertical-align: top;
  height: 42px;
  line-height: 42px;
}
div.item_right {
  display: inline-block;
  vertical-align: top;
  margin-left: 32px;
  line-height: 42px;
}
span.need {
  color: #e41622;
  padding-right: 4px;
}
.zb_span {
  display: inline-block;
  vertical-align: top;
  height: 42px;
  box-sizing: border-box;
  border: 1px solid #80b748;
  color: #80b748;
  line-height: 41px;
  padding: 0 60px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}
.box_header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 14px;
  color: #666;
  padding-left: 27px;
}
.box_header::before {
  content: " ";
  display: inline-block;
  width: 4px;
  height: 14px;
  background: #80b748;
  vertical-align: top;
  margin-top: 18px;
  margin-right: 7px;
}
.box_list {
  background: #fff;
  margin-bottom: 11px;
}
/* .active {
  color: #ffa665 !important;
} */
.is-expanded > .el-tree-node__content .expanded + span i.iconfont {
  color: #feb078 !important;
}
.is-current > .el-tree-node__content > .custom-tree-node .iconfont {
  color: #feb078 !important;
}
.el-upload-list__item.is-success .el-icon-close-tip {
  display: none !important;
}
</style>
