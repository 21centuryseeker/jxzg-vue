<!--suppress ALL -->
<template>
  <div id="zgrer">
    <table border="0" cellspacing="0" cellpadding="0" style="width: 100%">
    <tr>
      <td width="260px" style="vertical-align: top;">
        <el-aside width="260px" >
        <el-card class="box-card" style="min-height: 776px">
          <el-tree
            :props="props1"
            :data="treeData"
            @node-click = "nodeClick"
            accordion
            :default-expanded-keys="[openFlag]"
            :default-checked-keys="[chKey]"
            node-key="id"
          >
         <span class="custom-tree-node" slot-scope="{ node, data }">
             <span><i class="iconfont" style="color: #feb078" v-if="isChile(node)" >&#xe605;</i>
                    <i class="iconfont"  style="color: #cccccc"  v-else >&#xe639;</i>
               {{ node.label }}</span>
           </span>
          </el-tree>
        </el-card>
      </el-aside>
      </td>
      <td style="vertical-align: top;">
        <el-container style="margin-left: 24px">

        <el-main > <el-card class="box-card" style="min-height: 450px">
          <el-row :gutter="20">
            <el-col :span="10"><div class="grid-content bg-purple">     <el-input width="50px"
                                                                                  placeholder="输入关键字进行过滤"
                                                                                  v-model="filterText"
                                                                                  size="small"
                                                                                  @keyup.enter.native="searchInfo">
            </el-input></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">  <el-button type="info"  size="mini"  @click="searchInfo">搜索</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> </div></el-col>
          </el-row>
          <el-row  :gutter="20" style="margin-top: 10px" class="shizititle">
            <el-col :span="5" style="padding-left:0"><div class="grid-content bg-purple little_title"><span v-html="subTitle">师资数量</span></div></el-col>
            <el-col :span="13"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
              <div style="margin: 15px 0;"></div></div></el-col>
          </el-row>

          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">

            <!-- <table class="zhibiao">
              <tr>
                <td>指标名称</td>
                <td>当前值</td>
                <td>学校目标</td>
                <td>指标完成度</td>
              </tr>
              <tr v-for="(city,key) in cities" v-if="key <cities.length" :key="key">
                <td><el-checkbox  :label="city.id" :key="city.id" :disabled="city.isenable==0">{{city.indexName}}</el-checkbox></td>
                <td>{{city.currentValue}}</td>
                <td>{{city.standValue}}</td>
                <td>{{city.percentValue}}</td>
              </tr>
            </table> -->
             <el-row  :gutter="20" style="min-height: 300px">
              <el-col :span="10">
                <div class="grid-content bg-purple" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" :title="city.indexName" v-for="(city,key) in cities" v-if="key <cities.length/2" :key="key">

                 <template v-if="city.flag==1" >
                    <el-checkbox class="zz_blue" :label="city.id" :key="city.id"
                    :disabled="city.isenable==0">
                     {{city.indexName}}
                       </el-checkbox>
                 </template>
                 <template v-else>
                      <el-checkbox :label="city.id" :key="city.id" :disabled="city.isenable==0">
                     {{city.indexName}}
                       </el-checkbox>
                 </template>

              </div>
              </el-col>
              <el-col :span="10">
                <div class="grid-content bg-purple" v-for="(city,key) in cities" v-if="key >=cities.length/2" :key="key"  style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" :title="city.indexName" >
                   <template v-if="city.flag==1" >
                     <el-checkbox class="zz_blue" :label="city.id" :key="city.id"  :disabled="city.isenable==0">
                     {{city.indexName}}
                      </el-checkbox>
                 </template>
                 <template v-else>
                      <el-checkbox  :label="city.id" :key="city.id"  :disabled="city.isenable==0">
                     {{city.indexName}}
                      </el-checkbox>
                 </template>

              </div>
              </el-col>
            </el-row>

          </el-checkbox-group>

          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            style="margin-top: 10px"
            @current-change = "getCurrentPage"
            :current-page="currentP"
            :page-size="pageSize"
          >
          </el-pagination>
        </el-card>

<div style="margin-top: 10px">
          <el-card class="box-card" style="min-height:240px">
            <el-row :gutter="20" style="margin-top: 10px" class="shizititle">
              <el-col :span="4"><div class="grid-content bg-purple little_title" ><span>已选指标数量</span></div></el-col>
              <el-col :span="16"><div class="grid-content bg-purple">&nbsp;</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple" >  <el-button type="warning" size="mini" @click="outDATA">导出</el-button></div>
              </el-col>
            </el-row>

              <el-row  :gutter="20">
                <el-col :span="10">    <div class="grid-content bg-purple"  style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" :title="city.indexName"  v-for="(city,key) in newSelectCity" v-if="key <newSelectCity.length/2" :key="key+'123'">
                  <el-checkbox @change="changeCK"  :label="city.id" :key="city.id" :checked="true" >{{city.indexName}}</el-checkbox>
                </div>
                </el-col>
                <el-col :span="10"><div class="grid-content bg-purple"  style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" :title="city.indexName"  v-for="(city,key) in newSelectCity" v-if="key >=newSelectCity.length/2" :key="key+'234'">
                  <el-checkbox @change="changeCK"  :label="city.id" :key="city.id" :checked="true">{{city.indexName}}</el-checkbox>
                </div>
                </el-col>
              </el-row>

          </el-card>
</div>
        </el-main>
      </el-container>
      </td>
    </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'zgrepostitory',
  watch: {
    filterText (val) {
    },
    checkedCities (val, target) {
      if (this.pushFLag) {
        this.tem = new Array(...this.newSelectCity)
        this.pushFLag = false
      }
      this.newSelectCity = this.cities.filter((item) => {
        for (let citem of this.checkedCities) {
          if (item.id === citem) {
            return true
          }
        }
        return false
      })
      // 去重
      for (let i = 0; i < this.tem.length; i++) {
        for (let j = 0; j < this.newSelectCity.length; j++) {
          if (this.tem[i].id === this.newSelectCity[j].id) {
            this.tem.splice(i, 1)
          }
        }
      }
      this.newSelectCity.push(...this.tem)
    }
  },
  mounted: function () {
    //  1.获取指标类型(element 数据类型)
    this.getCoreIndexTypeList()
  },
  methods: {
    changeCK (data, target) {
      let cValue = target.srcElement.defaultValue
      if (data === false) {
        this.outList.push(cValue)
      } else {
        let index = this.outList.indexOf(cValue)
        if (index > -1) {
          this.outList.splice(index, 1)
        }
      }
      console.log('outlist', this.outList)
    },
    diGuiTree (data) {
      data.children || (data.children = [])
      for (let i = 0; i <= data.children.length; i++) {
        data.children[i].id || (data.children[i].id = 1)
        this.getZiZhi(data.children[i].id, this.pageSize, 1, '')
        this.subTitle = data.children[i].label
        break
      }
    },

    getCoreIndexTypeList () {
      this.$ajax('get', this.HOST + '/tr/trIndex/web/getIndexTypeList', {}, (data) => {
        console.log('tree', data)
        let flag = data.success
        if (flag === true) {
          this.treeData = data.obj
          if (this.treeData.length > 0) {
            this.openFlag = this.treeData[0].id
            this.diGuiTree(this.treeData[0])
            this.currentTypeId = this.treeData[0].children[0].id
          }
        }
      })
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
    getSelectItmes: function () {
      return this.cities.filter((item) => {
        for (let citem of this.checkedCities) {
          if (item.id === citem) {
            return true
          }
        }
        return false
      })
    },
    isCheck: function (ischeck) {
      if (ischeck === 1) {
        return true
      }
    },
    searchInfo: function () {
      this.currentP = 1
      this.getZiZhi(this.currentTypeId, this.pageSize, this.currentP, this.filterText)
    },
    getSelectRole () {
      console.log(this.checkedCities)
    },
    handleCheckAllChange (val) {
      var newCitys = []
      for (let city of this.cities) {
        console.log(city.isenable)
        if (city.isenable !== 0) {
          newCitys.push(city.id)
        }
      }
      this.checkedCities = val ? newCitys : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange1 (value) {
      alert(value)
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    getCurrentPage: function (currentPage) {
      this.currentP = currentPage
      this.getZiZhi(this.currentTypeId, this.pageSize, this.currentP, this.filterText)
      // this.getDepUsers(this.currentDep, currentPage)
    },
    getZiZhi: function (typeId, pageSize, pageNum, searchName) {
      //  /tr/trIndex/web/getCoreIndexList?typeId=6&pageNum=1&pageSize=10&searchName=总量
      this.$ajax('get', this.HOST + '/tr/trIndex/web/getIndexList?typeId= ' + typeId + ' &pageSize= ' + pageSize + ' &pageNum=' + pageNum + '&searchName=' + searchName, {}, (data) => {
        console.log(data)
        let flag = data.success
        if (flag === true) {
          this.cities = []
          // for (let item of data.obj) {}
          console.log('data.obj',data)
          this.cities = data.obj
          this.checkedCities = []
          if (this.newSelectCity.length) {
            for (let item of this.newSelectCity) {
              for (let item1 of this.cities) {
                if (item.id === item1.id) {
                  this.checkedCities.push(item.id)
                }
              }
            }
            let len = 0
            for (let item of this.cities) {
              if (item.isenable) {
                len++
              }
            }
            console.log(len, this.checkedCities.length)
            if (len === this.checkedCities.length) {
              this.checkAll = true
            } else {
              this.checkAll = false
            }
          }
          if (data.data == null) {
            this.total = 0
          } else {
            this.total = data.data.totalSize
          }
        }
      })
    },
    outDATA: function () {
      let arr = [];
      this.newSelectCity.filter(item=>{
         arr.push(item.id)
      })

      let temOut = arr
      console.log("选",JSON.stringify(temOut[0]))

      temOut = temOut.filter(item => {
        for (let out of this.outList) {
          if (item == out) {
            return false
          }
        }
        return true
      })
      if (this.checkedCities.length === 0 || temOut.length === 0) {
        this.$message({
          type: 'info',
          message: '请选择数据!'
        })
        return
      }
      let stringList = temOut.join(',')
      location.href = this.HOST + '/tr/trDataPlatForm/web/exportExcel?indexIds=' + stringList
    },
    /**
       * 节点被点中后回调事件
       *
       */
    nodeClick: function (data, currentNode, node) {
      // this.checkedCities = []
      // this.selectNewTemp = []
      // this.newSelectCity = []=
      console.log('ddddddd', data.id)
      console.log('nnnnnnn', this.currentTypeId)
      console.log('')
      if (data.id !== this.currentTypeId) {
        this.pushFLag = true
      }
      if (currentNode.childNodes.length === 0) {
        this.subTitle = data.label
        console.log(currentNode)
          this.filterText=""
         this.currentP = 1
        this.currentTypeId = data.id
        this.getZiZhi(data.id, this.pageSize, 1, '')
      }
    }
  },

  data: function () {
    return {
      tem: [],
      pushFLag: true,
      subTitle: '',
      selectNewTemp: [],
      newSelectCity: [],
      cities: [],
      openFlag: '',
      chKey: 0,
      treeData: [],
      currentTypeId: '',
      currentUserId: '',
      currentActiveNames: '',
      userTables: [],
      total: 0,
      activeName: 1,
      currentP: 1,
      currentDep: {},
      props1: {
        children: 'children',
        label: 'label'
      },
      checkAll: false,
      checkedCities: [],
      outList: [],
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
      pageSize: 20,
      currentP: 0
    }
  }
}
</script>

<style scoped>

  .shizititle{
    margin-top: 20px;
    color: #888888;
    border-bottom: solid 1px #e4eaec;
    margin-left: 0!important;
    height: 50px;
  }
  .shizititle
  .shizititle >span {
    color: #cccccc;
  }
  .little_title{
    margin-top: 10px;
  }
  #zgrer .el-card{
    box-shadow:  0 2px 12px 0 rgba(0,0,0,.1)
  }
  #zgrer .el-checkbox{
    margin: 8px;
  }
  .content_title{
    margin: 20px;font-size: 18px
  }
  .el-main{
    padding: 0 ;
  }
  .el-footer{
    padding: 0;
  }
  .el-tree-node__expand-icon+span::before {
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: -3px;
    width: 20px;
  }

  .el-tree-node__expand-icon+span::before {
  }
  .el-tree-node__expand-icon+span::before {
  }
  .box-card {
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #70ad47;
    border-color: #70ad47;
  }

  #zgrer .el-checkbox__input.is-checked+.el-checkbox__label{
    color:  #70ad47;
  }
  #zgrer .zz_blue.el-checkbox{
    color: #4e89cb!important
  }
  #zgrer .zz_blue.el-checkbox  .el-checkbox__input.is-disabled+span.el-checkbox__label {
    color: #4e89cb;
    cursor: not-allowed;
}
</style>
