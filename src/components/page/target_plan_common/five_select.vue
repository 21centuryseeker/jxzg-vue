<template>
  <div class="zzjg_box">
    <div class="group_box1">
      <div class="title_box tab-controlFixed">
        <el-radio-group v-model="dept_role" @change="userChange">
          <el-radio-button v-for="item in userItems" :label="item.id" :key="item.id">{{item.deptName}}</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="group_box">
      <div class="type_group boxShadow">
        <el-radio-group v-model="levelType" @change="itemChange">
          <el-radio-button label="1">
            <img src="../../../assets/school-group.png" alt="">
            <div>学校层面</div>
          </el-radio-button>
          <el-radio-button label="2">
            <img src="../../../assets/major-group.png" alt="">
            <div>专业层面</div>
          </el-radio-button>
          <el-radio-button label="3">
            <img src="../../../assets/class-group.png" alt="">
            <div>课程层面</div>
          </el-radio-button>
          <el-radio-button label="4">
            <img src="../../../assets/teacher-group.png" alt="">
            <div>教师层面</div>
          </el-radio-button>
          <el-radio-button label="5">
            <img src="../../../assets/student-group.png" alt="">
            <div>学生层面</div>
          </el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    '$route' (to, from) {
      if (to.query && to.query.dr) {
        this.dept_role = to.query.dr
        this.levelType = to.query.levelType
      } else {
        this.dept_role = 0
        this.levelType = 1
        this.deptId = ''
        this.roleId = ''
        this.getDeptAndJob()
      }
    }
  },
  data() {
    return {
      dept_role: 0,
      levelType: 1,
      deptId: "",
      roleId: "",
      userItems: []
    };
  },
  created() {
    if (this.$route.query && this.$route.query.dr) {
      this.dept_role = this.$route.query.dr;
    }
    if (this.$route.query && this.$route.query.levelType) {
      this.levelType = this.$route.query.levelType;
    }
    if (this.$route.query && this.$route.query.deptId) {
      this.deptId = this.$route.query.deptId;
    }
    if (this.$route.query && this.$route.query.roleId) {
      this.roleId = this.$route.query.roleId;
    }
  },
  mounted() {
    this.getDeptAndJob();
  },
  methods: {
    getDeptAndJob() {
      this.$ajax(
        "post",
        this.HOST + "/tr/autognosis/web/autognosiShow",
        {},
        res => {
          if (res.success) {
            this.userItems = res.obj;
            if (this.dept_role - 0 === 0) {
              this.dept_role = res.obj[0].id;
              this.deptId = res.obj[0].deptId;
              this.roleId = res.obj[0].roleId;
              this.routerChange();
            }
          } else
            this.$message({
              type: "error",
              message: res.msg
            });
        }
      );
    },
    itemChange(val) {
      this.routerChange();
    },
    userChange(id) {
      for (let item of this.userItems) {
        if (id === item.id) {
          this.deptId = item.deptId;
          this.roleId = item.roleId;
          break;
        }
      }
      this.routerChange();
    },
    routerChange() {
      if (!this.$route.query.deptId) {
        this.$router.replace({
          path: this.$route.path,
          query: {
            levelType: this.levelType,
            dr: this.dept_role,
            deptId: this.deptId,
            roleId: this.roleId
          }
        });
      } else {
        this.$router.push({
          path: this.$route.path,
          query: {
            levelType: this.levelType,
            dr: this.dept_role,
            deptId: this.deptId,
            roleId: this.roleId
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.zzjg_box {
  margin-bottom: 20px;
}
.group_box {
  margin-top: 60px;
}
.group_box1 .el-radio-button__inner {
  color: darkgrey !important;
}
.group_box1 {
  margin-bottom: 24px;
}
.group_box1 .el-radio-button > div:hover,
.el-radio-button__inner {
  color: #70ad47;
}
</style>
