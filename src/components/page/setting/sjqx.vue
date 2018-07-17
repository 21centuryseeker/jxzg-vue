<template>
<div class="sjqxcontent">
  <table border="0" cellspacing="0" cellpadding="0" style="width: 100%">
    <tr>
      <td style="width: 267px;vertical-align: top;">
        <el-aside width="267px"  >
        <!--<el-scrollbar style="height: 800px;">-->
        <el-card class="box-card tree-side" style="min-height: 800px;overflow-y: scroll">
          <el-tree
            :load="loadNode1"
            :props="props1"
            lazy
            node-key="did"
            :default-expanded-keys="[openFlag]"
            :default-checked-keys="[chKey]"
            @node-expand="expan"
            @node-click = "nodeClick"
          >
           <span class="custom-tree-node" slot-scope="{ node, data }">
             <span><i class="iconfont" style="color: #feb078" v-if="isChile(node)" >&#xe605;</i>
                    <i class="iconfont"  style="color: #cccccc"  v-else >&#xe639;</i>
               {{ node.label }}</span>
           </span>
          </el-tree>
        </el-card>
        <!--</el-scrollbar>-->
      </el-aside>
      </td>
      <td style="vertical-align: top;">
        <el-container style="margin-left: 24px">
      <el-header>
        <el-card class="box-card" >
          <el-row :gutter="15">
            <el-col :span="8"><div class="grid-content bg-purple">     <el-input width="50px"
                                                                                  size="small"
                                                                                  placeholder="可根据姓名、职工号、手机号 模糊查询"
                                                                                  v-model="filterText"
                                                                                 @keyup.enter.native="searchInfo"
            >
            </el-input></div></el-col>
            <el-col :span="1"><div class="grid-content bg-purple" >  <el-button type="info"  size="small"  @click="searchInfo">搜索</el-button></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"> </div></el-col>
          </el-row>

        </el-card>
      </el-header>

      <el-main style="margin-top: 30px"> <el-card class="box-card" style="min-height: 710px"><el-table
        ref="multipleTable"
        :data="userList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          prop="in"
          width="50"
          align="center"
          label="序号"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="userId"
          align="center"
          label="教职工号"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="gender"
          align="center"
          label="性别"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="TYPE"
          align="center"
          label="角色"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="depId"
          align="center"
          label="部门唯一标识"

          v-if="false"
          show-overflow-tooltip>
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="100">
          <template slot-scope="scope">
            <el-button  v-if="scope.row.isenable!=1" disabled   style="background-color: grey;color:white" round size="mini" @click="edit(scope.row)">设置</el-button>
            <el-button  v-else  style="background-color: #ed7d31;color:white" round size="mini" @click="edit(scope.row)">设置</el-button>
          </template>
        </el-table-column>
      </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          style="margin-top: 10px"
          :page-count="pagecount"
          :current-page.sync ="currentP"
        >
        </el-pagination>
      </el-card>
        </el-main>

    </el-container>
      </td>
    </tr>
  </table>
  <el-dialog
    v-if="dialogVisible"
    title="权限设置"
    :visible.sync="dialogVisible"
    :before-close="beforeCloseDialog"
    width="60%">
    <el-collapse accordion @change="changeTable" v-model="activeName" class="s-span">
      <el-collapse-item v-for="(n,index) of userTables" :name="n.id" :key="index" >
        <template slot="title" v-on:click.stop = "demo">
         {{n.table_desc}}<el-button type="warning" class="save_in_dialog"  size="small"  v-on:click.stop="saveRole(n.id)"  >保存</el-button>
        </template>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkedCities"  @change="handleCheckedCitiesChange">
            <div v-if="isCurrent(n.id)">
              <el-row  >
                <el-col :span="6">
                  <div class="grid-content bg-purple" v-for="(role,key) in roleList"  v-if="key <roleList.length/4" :key="key">
                    <el-tooltip :content="role.column_desc" placement="left"  :open-delay="delay">
                      <el-checkbox   :label="role.id"  :key="role.id"  @change="getSelectRole" :checked="role.is_check==1">{{role.column_desc}}</el-checkbox>
                    </el-tooltip>

                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" v-for="(role,key) in roleList"  v-if="key >=roleList.length/4&&key<roleList.length/4*2" :key="key">
                    <el-tooltip :content="role.column_desc" placement="left"   :open-delay="delay">
                    <el-checkbox   :label="role.id"  :key="role.id"  @change="getSelectRole" :checked="role.is_check==1">{{role.column_desc}}</el-checkbox>
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" v-for="(role,key) in roleList"  v-if="key >=(roleList.length/4)*2&&key<roleList.length/4*3" :key="key">
                    <el-tooltip :content="role.column_desc" placement="left"   :open-delay="delay">
                    <el-checkbox   :label="role.id"  :key="role.id"  @change="getSelectRole" :checked="role.is_check==1">{{role.column_desc}}</el-checkbox>
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" v-for="(role,key) in roleList"  v-if="key >=(roleList.length/4)*3" :key="key">
                    <el-tooltip :content="role.column_desc" placement="left" :open-delay="delay">
                    <el-checkbox   :label="role.id"  :key="role.id"  @change="getSelectRole" :checked="role.is_check==1">{{role.column_desc}}</el-checkbox>
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>

            </div>
        </el-checkbox-group>

      </el-collapse-item>
    </el-collapse>
    <!-- <span slot="footer" class="dialog-footer"> -->
    <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
    <!-- <el-button type="primary" style="background: #5daf34" @click="dialogVisible = false">确 定</el-button> -->
  <!-- </span> -->
  </el-dialog>
</div>
</template>

<script>

// import ElSelectDropdown from 'element-ui/packages/select/src/select-dropdown'
export default {
  name: 'sjqx',
  // components: {ElSelectDropdown},
  watch: {
    filterText (val) {
    },
    currentP (val) {
      console.log(this.currentDep)
      this.getDepUsers(this.currentDep, this.currentP)
    }
  },

  mounted () {
  },
  methods: {

    expan (data) {
      console.log('test1111', data)
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
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
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    isCurrent: function (tableId) {
      return this.currentTableId === tableId
    },
    // 编辑行
    edit (row) {
      this.checkedCities = []
      this.roleList = []
      this.checkAll = false
      console.log(row)
      let depId = row.depId
      this.currentUserId = row.userId
      this.dialogVisible = true

      this.$ajax('get', this.HOST + '/tr/TrMetaAuth/web/getTables?dept_id=' + depId + '&user_id=' + row.userId, {}, (data) => {
        console.log(data)
        let flag = data.success
        if (flag === true) {
          this.userTables = data.obj
          if (this.userTables.length > 0) {
            this.activeName = this.userTables[0].id //  默认展开第一个
            // TODO 渲染第一个数据
            this.changeTable(this.activeName)
          }
        }
      })
    },
    isCheck: function (ischeck) {
      if (ischeck === 1) {
        return true
      }
    },
    searchInfo: function () {
      this.currentP = 1
      let url = this.HOST + '/tr/trUser/web/getUserList?pageNumber= ' + this.currentP + ' &pageSize=10&deptId=' + this.currentDep.did + '&searchName=' + this.filterText
      this.$ajax('get', url, {}, (data) => {
        let flag = data.success
        if (flag === true) {
          let userList = data.obj
          if (data.data == null) {
            this.pagecount = 0
          } else {
            this.pagecount = data.data.totalPage
          }
          this.userList = userList

          for (let i = 0; i < this.userList.length; i++) {
            let itm = this.userList[i]
            console.log('--->', i)
            this.$set(itm, 'depId', this.currentDep.did)
            this.$set(itm, 'in', ((this.currentP - 1) === 0 ? ' ' : (this.currentP - 1)) + '' + (i + 1))
          }
        }
      })
    },
    changeTable (activeNames) {
      this.checkAll = false
      this.roleList = []
      if (this.currentTableId !== activeNames) {
        this.checkedCities = []
      }
      console.log(activeNames)
      if (activeNames !== '') {
        this.currentTableId = activeNames
        //  根据表ID查询权限
        this.searchRole(activeNames)
      }
    },
    //  根据查询所属权限
    searchRole (activeNames) {
      let url = this.HOST + '/tr/TrMetaAuth/web/getColumns?dept_id=' + this.currentDep.did + '&user_id=' + this.currentUserId + '&table_id=' + activeNames
      this.$ajax('get', url, {}, (data) => {
        console.log(data)
        let flag = data.success
        if (flag === true) {
          this.roleList = data.obj.columns

          for (let item of this.roleList) {
            if (item.column_desc === '编制类别代码') {
              console.log(item.column_desc)
            }
            this.checkAll = true
            this.isIndeterminate = false
            if (item.is_check !== 1) {
              this.checkAll = false
              this.isIndeterminate = true
              console.log('不是选中的', item)
              break
            }
            console.log(3)
          }
          // this.checkedCities = this.roleList.filter((item) => {
          //   if (item.is_check === 1) {
          //     return true
          //   }
          // })
        }
      })
    },

    /* 保存 */
    saveRole (tabId) {
      this.$ajaxMore('post', this.HOST + '/tr/TrMetaAuth/web/setColumns', {
        user_id: this.currentUserId,
        dept_id: this.currentDep.did,
        table_id: tabId,
        columns: this.checkedCities
      }, (data) => {
        console.log(data)
        let flag = data.success
        if (flag === true) {
          this.dialogVisible = false
          alert(data.msg)
        }
      })
    },
    beforeCloseDialog (done) {
      done()
    },
    getSelectRole () {
      console.log(this.checkedCities)
    },
    handleCheckAllChange (val) {
      console.log(val)
      var newCitys = []
      console.log('role', this.roleList)

      for (let city of this.roleList) {
        newCitys.push(city.id)
      }
      this.checkedCities = val ? newCitys : []
      this.isIndeterminate = false

      //
      // this.checkedCities = val ? this.roleList : []
      // this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.roleList.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.roleList.length
    },
    getCurrentPage: function (currentPage) {
      // alert(currentPage)
      this.currentP = currentPage
      console.log(this.currentDep)
      this.getDepUsers(this.currentDep, currentPage)
    },
    getDepUsers: function (data, currentPage) {
      this.$ajax('get', this.HOST + '/tr/trUser/web/getUserList?pageNumber= ' + currentPage + ' &pageSize=10&deptId=' + data.did + '&searchName=' + this.filterText, {}, (data) => {
        console.log(data)
        let flag = data.success
        if (flag === true) {
          let userList = data.obj
          if (data.data == null) {
            this.pagecount = 0
          } else {
            this.pagecount = data.data.totalPage
          }
          this.userList = userList
          this.currentP = currentPage
          for (let i = 0; i < this.userList.length; i++) {
            let itm = this.userList[i]
            console.log('--->', i)
            this.$set(itm, 'depId', this.currentDep.did)
            this.$set(itm, 'in', ((this.currentP - 1) === 0 ? ' ' : (this.currentP - 1)) + '' + (i + 1))
          }
        }
      })
    },
    /**
     * 节点被点中后回调事件
     *
     */
    nodeClick: function (data, currentNode, node) {
      console.log('sssss', this.currentDep)
      this.currentDep = data
      this.currentP = 1
      this.getDepUsers(data, this.currentP)
    },
    /**
     *  懒加载叶子节点
     * @param node
     * @param resolve
     * @returns {*}
     */
    loadNode1: function (node, resolve) {
      if (node.level === 0) {
        this.$ajax('get', this.HOST + '/tr/trDept/web/getMyDeptList', {}, (data) => {
          console.log('level1', data)
          let flag = data.success
          if (flag === true) {
            let objDep = data.obj
            let secondDepList = objDep.secondDeptList
            var newDepList = []
            this.openFlag = secondDepList[0].id
            for (let [index, secondDep] of secondDepList.entries()) {
              var dep = {}
              dep.name = secondDep.deptName
              dep.did = secondDep.id
              if (index === 0) {
                this.currentDepId = dep.id
                this.currentDep = dep
                console.log('ssss1', dep)
                this.nodeClick(dep)
              }
              newDepList.push(dep)
            }
            resolve(newDepList)
          }
        })
        return resolve([])
      } else if (node.level > 0) {
        this.openFlag = ''
        let did = node.data.did
        console.log(did)
        this.$ajax('get', this.HOST + '/tr/trDept/web/getDepartmentList?deptId=' + did, {}, (data) => {
          console.log(data)
          let flag = data.success
          if (flag === true) {
            let objDep = data.obj
            let secondDepList = objDep.secondDeptList
            if (secondDepList.length > 0) {
              var newDepList = []
              for (let secondDep of secondDepList) {
                var dep = {}
                dep.name = secondDep.deptName
                dep.did = secondDep.id
                newDepList.push(dep)
              }
              if (!this.loadOnec) {
                if (newDepList.length > 0) { this.loaadOnec = !this.loaadOnec }
                console.log('node', node)
                // this.nodeClick(newDepList[0])
              }
              resolve(newDepList)
            } else {
              resolve([])
            }
          }
        })
      }
    }
  },

  data () {
    return {
      fixPage: 0,
      initFlag: 0,
      delay: 300,
      loadOnec: false,
      openFlag: '',
      chKey: 0,
      currentTableId: '',
      currentUserId: '',
      currentActiveNames: '',
      userTables: [],
      total: 0,
      activeName: 1,
      currentP: 1,
      currentDep: {},
      props1: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
      checkAll: false,
      checkedCities: [],
      roleList: [],
      isIndeterminate: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogVisible: false,
      userList: [],
      multipleSelection: [],
      filterText: '',
      pagecount: 0
    }
  }
}
</script>

<style>
  .sjqxcontent  .el-header, .el-footer {
    color: #333;
    text-align: center;
    /*margin-top: 10px;*/
    padding: 0;
  }

  .sjqxcontent .el-checkbox__label{
    font-size: 12px;
  }

  .sjqxcontent .el-aside {
    color: #333;
    text-align: center;
    width:300px;
  }

  .sjqxcontent .el-main {
    color: #333;
    text-align: center;
    padding: 0;
  }

  body > .sjqxcontent .el-container {
    margin-bottom: 40px;
    margin-left: 24px;
  }

  .sjqxcontent .el-container:nth-child(5) .el-aside,
  .sjqxcontent .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .sjqxcontent .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .sjqxcontent .el-aside-paper {
    display: inline-block;
    text-align: center;
  }
  .sjqxcontent  .el-header-paper{
    display: inline-block;
    text-align: center;
    width:100%;
  }
  .sjqxcontent  .el-main-paper{
    display: inline-block;
    text-align: center;
    margin-top: 20px;
    margin-left: 15px;
    width: 96%;
  }

  .sjqxcontent .el-tree-node__expand-icon+span::before {
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: -3px;
    width: 20px;
  }
 #sjqxcontent .save_in_dialog{
   width: 60px!important;
   height:27px!important;
   margin-top: 10px!important;
   line-height: 5px!important;
   float: right!important;
   margin-right: 20px!important;
   background-color: #ed7d31!important;
 }
  .sjqxcontent  .el-collapse-item__header{
    padding-left: 10px;
  }
  .sjqxcontent .item_border{
    border: 1px solid #dfdfdf;
  }
  .sjqxcontent .el-checkbox__inner{
    background-color: white;
    border-color: gray();
  }
  .sjqxcontent .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #70ad47;
    border-color: #70ad47;
  }
  .sjqxcontent .el-collapse-item__content{
    padding-left: 20px;
  }
  .sjqxcontent .el-collapse-item__wrap{
    margin-left: -10px!important;
  }
  .sjqxcontent{
    padding: 0 1.64%
  }
  .sjqxcontent .el-button--primary{
    border: #70ad47;
  }
  .sjqxcontent .el-checkbox__input.is-checked+.el-checkbox__label{
    color:  #70ad47;
  }
  .sjqxcontent .el-checkbox__label{
    width:170px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;

  }
  .sjqxcontent .el-checkbox__label:hover{
    text-overflow: unset;
    overflow: visible;
    top:0;
    z-index: 111;
  }

</style>
