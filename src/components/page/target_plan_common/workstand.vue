<template>
  <div>
    <span class="zb_span" @click="showWsBox">{{desc || '工作标准'}}</span>
    <i class="el-icon-close" style="color: #80b748;margin-left: -23px;cursor: pointer;vertical-align: top;" v-if="workId" @click="romove_ws"></i>
    <el-dialog title="选择工作标准" :visible.sync="dialogVisible" width="900px">
      <div class="my_tab_style">
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
            <div style="font-size: 16px;padding: 10px;">工作标准</div>
            <div style="padding-left: 10px;">
              <el-radio v-model="workId"></el-radio>
              {{standDescription}}
            </div>
          </el-container>
          <!-- 操作按钮 -->
          <div style="text-align: right">
            <el-button type="primary" @click="doSure" style="margin-right: 30px;">确定</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  // props: ["workIdprops", 'wsChange', 'workStand'],
  props: {
    workIdprops: {},
    wsChange: {},
    workStand: {}
  },
  data() {
    return {
      desc: '',
      ws_name: "工作标准",
      workId: '',
      dialogVisible: false,
      wrapStyle: [{ height: "100%" }],
      propsZb: [],
      ckeckedKeysArr: [],
      keysArr: [],
      standDescription: "",
      workId_before: ''
    };
  },
  watch: {
    workId(val) {
      this.wsChange("workId", val);
    },
    desc (val) {
      this.wsChange('workStandprop', val)
    },
    workIdprops () {
      this.propsUpdate()
    }
  },
  created () {
    
  },
  mounted () {
    this.propsUpdate()
  },
  methods: {
    propsUpdate() {
      this.workId = this.workIdprops
      this.desc = this.workStand
    },
    nodeClick(data) {
      data.isActive = true;
      let id = data.id;
      if (!data.flag) {
        this.workId_before = data.id
        this.$ajaxGet(
          this.HOST + "/tr/trStandLink/web/getStandByWorkId",
          { workId: id },
          res => {
            if (res.success) {
              this.standDescription = res.data.workStand;
            } else {
              this.$message({
                message: res.msg,
                type: "error"
              });
            }
          }
        );
      }
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
    doSure() {
      this.desc = this.standDescription
      this.workId = this.workId_before
      this.dialogVisible = false
    },
    showWsBox() {
      let data = {
        roleId: this.$route.query.roleId
      };
      this.$ajaxGet(
        this.HOST + "/tr/trStandLink/web/getStandByRoleId",
        data,
        res => {
          if (res.success) {
            this.dialogVisible = true;
            this.propsZb = res.obj;
            this.keysArr = [];
            this.keysArr.push(res.obj[0].id);
            this.ckeckedKeysArr.push(res.obj[0].id);
            this.nodeClick(res.obj[0].children[0]);
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    romove_ws() {
      this.workId = ''
      this.desc = ''
    }
  }
};
</script>
<style scoped>
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
  /* height: 42px; */
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
