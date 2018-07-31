<template>
  <div id="zgre">
    <!--<h3 class="content_title" >-->
    <!--诊改工作一览图-->
    <!--</h3>-->
    <table style="width: 100%;table-layout:fixed">
      <td style="width: 240px;    vertical-align: top;">
        <el-card>
          <div class="department-title-left">
            <span>我的部门</span>
          </div>
        </el-card>
        <el-card class="box-card tree-side" style="height: 820px;padding:0;margin-right: 0px;border:none" de>

          <div style="margin-top: 15px">
            <el-tree
              :load="loadNode1"
              :props="props1"
              lazy
              node-key="did"
              accordion
              :default-expanded-keys="ksList"
              @node-click = "nodeClick"
            >
           <span class="custom-tree-node" slot-scope="{ node, data }">
             <span><i class="iconfont" style="color: #feb078" v-if="isChile(node)" >&#xe605;</i>
                    <i class="iconfont" :class="[$store.state.currentId === node.key ? 'active': 'noactive',node.key===cclick ? 'cactive':'']"  v-else >&#xe631;</i>
               {{ node.label }}</span>
           </span>
            </el-tree>
          </div>
        </el-card>
      </td>
      <td style="margin-left: 10px">
        <el-row style="margin: -5px 0 0 20px">
          <el-col :span="12"> <el-card class="box-card" style="min-height: 880px">
            <div class="department-title">

              <span><em class="bgIconfont"><i class="iconfont" style="color: #feb078" >&#xe62b;</i></em></span><span>目标</span>
            </div>
            <div class="ylNodata">
              <img v-if="planList.length==0" src="../../../assets/empty.jpg">
            </div>
            <div class="warp-spec tree-side">
              <el-collapse style="border: none" v-model="activeName" accordion @change="changePanel"  >
                <el-collapse-item  :title="val.targetName" :name="val.id" v-for="(val,key) of planList"  :key="key">
                  <template slot="title">
                    <div>
                      <div style="float: left;width: 50%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;    margin-top: -7px;">
                        <el-tooltip :content="val.targetName" placement="right" :open-delay=500>
                          <span>{{val.targetName}}</span>
                        </el-tooltip>

                      </div>
                      <div style="float: right;margin: 0 auto;width: 30%;text-align: center;vertical-align: middle;"><span :class="val.styleName" class="span_state">{{val.resultType}}</span></div>
                      <div style="clear: both">
                        <el-progress :percentage="val.targetInfo.progress" color="#ffc100" style="    top: -26px;width: 40%;"></el-progress>
                        </div>
                    </div>

                  </template>
                  <div>

                    <div class="bg-purple ">
                      <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>目标描述:</span>&nbsp;&nbsp;<span>{{val.targetInfo.targetInfo}}</span>
                    </div>
                    <div class="bg-purple ">
                      <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>起止日期:</span>&nbsp;&nbsp;<span>{{val.targetInfo.startTime + '至' + val.targetInfo.endTime}}</span>
                    </div>
                    <div class="bg-purple ">
                      <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>审核方式:</span>&nbsp;&nbsp;<span>{{val.targetInfo.checkType}}</span>
                    </div>
                    <div class="bg-purple ">
                      <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>审核人:</span>&nbsp;&nbsp;<span>
                      {{val.targetInfo.managerName}}</span>
                    </div>
                    <div class="bg-purple ">
                      <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>考核标准:</span>&nbsp;&nbsp;<span>{{val.targetInfo.targetStand}}</span>
                    </div>
                    <div class="bg-purple ">
                      <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>标准描述:</span>&nbsp;&nbsp;<span>{{val.targetInfo.targetStandInfo}}</span>
                    </div>
                    <el-row style="margin-top: 10px" v-if="val.targetWarnList.length">
                      <el-col>
                        <div class="grid-content" style="background: #fff6f6;border: 1px solid #ffdada;width: 98%; word-wrap : break-word;   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;" >
                          <div class="detail_item_box" style="margin-left: 10px">
                            <div class="detail_item_left bg-purple" style="line-height: 40px;">
                              <i class="iconfont" style="color: #f56c6c;font-size: 30px;">&#xe6e8;</i>
                              <span style="font-size: 16px;color: #f56c6c;position: relative;top: -4px;">预警</span>
                            </div>
                            <div class="detail_item_right bg-purple" style="margin-bottom: 20px;
    top: 7px;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;" v-if="val.targetWarnList.length>0">

                              <template v-for="(val,key) in val.targetWarnList">
                                <el-tooltip :content="val.warnInfo" placement="top" :open-delay=500>
                                  <span :key="val.warnInfo+key" style="display: block">{{val.warnInfo}}</span>
                                </el-tooltip>
                              </template>

                            </div>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                    <div style="text-align: center;margin: 30px 0 10px 0">
                      <el-tag size="small"  style="background-color: #e4eaec;border-radius: 20px"> <a  style="font-size: 12px;color: #76838F" href="javascript:void(0)" @click="goInfo(val.id)">查看详情</a></el-tag>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card></el-col>
          <el-col :span="12">  <el-card class="box-card" style="min-height: 880px">
            <div class="department-title">

              <span><em class="bgIconfont"><i class="iconfont" style="color: #feb078" >&#xe641;</i></em></span><span>计划</span>
            </div>
            <div  class="ylNodata">
              <img v-if="targetPlanList.length==0" src="../../../assets/empty.jpg">
            </div>
            <el-collapse v-model="activeNamePlan" class="scrollbar-spec" accordion>
              <el-collapse-item :title="val.planName" :name="val.id" v-for="(val,key) of targetPlanList"  :key="key">
                <template slot="title">
                  <div>
                    <div style="float: left;width: 50%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;    margin-top: -7px;">
                      <el-tooltip :content="val.planName" placement="right" :open-delay=500>
                        <span>{{val.planName}}</span>
                      </el-tooltip>
                    </div>
                    <div style="float: right;margin: 0 auto;width: 30%;text-align: center;vertical-align: middle;"><span :class="val.styleName" class="span_state">{{val.resultType}}</span></div>
                    <div style="clear: both"><el-progress :percentage="val.progress-0" color="#ffc100" style="    top: -26px;width: 30%;"></el-progress></div>
                  </div>
                </template>
                <div>
                  <div class="bg-purple ">
                    <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>计划详情:</span>&nbsp;&nbsp;<span>{{val.planinfo.planContent}}</span>
                  </div>
                  <div class="bg-purple ">
                    <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>审核方式:</span>&nbsp;&nbsp;<span>{{val.planinfo.checkType}}</span>
                  </div>
                  <div class="bg-purple ">
                    <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>审核人:</span>&nbsp;&nbsp;<span>
                      {{val.managerName}}</span>
                  </div>
                  <div class="bg-purple ">
                    <i class="iconfont" style="color:#70ad47" >&#xe636;</i>&nbsp;<span>起止日期:</span>&nbsp;&nbsp;<span>{{val.planinfo.startTime}}至{{val.planinfo.endTime}}</span>
                  </div>
                  <div class="bg-purple bg-purpleA clearfix">
                    <div class="floatL titleTag">
                      <span class="el-tag-specl"><i class="iconfont" style="color:#70ad47" >&#xe636;</i></span>&nbsp;<span class="el-tag-specl">参与人:</span>
                    </div>
                    <div class="floatL nameTag">
                      <el-tag  v-for="(val,key) of val.joinList" :key="key">{{val.name}}</el-tag>
                    </div>

                  </div>
                  <div class="bg-purple bg-purpleA clearfix ">
                    <div class="floatL titleTag">
                      <span class="el-tag-specl"><i class="iconfont" style="color:#70ad47" >&#xe636;</i></span>&nbsp;<span class="el-tag-specl">监督人:</span>
                    </div>
                    <div class="floatL nameTag">
                      <el-tag  v-for="(val,key) of val.supervisorList" :key="key">{{val.name}}</el-tag>
                    </div>
                  </div>
                  <div style="text-align: center;margin: 30px 0 10px 0">
                    <el-tag size="small"  style="background-color: #e4eaec;border-radius: 20px"> <a  style="font-size: 12px;color: #76838F" href="javascript:void(0)" @click="goInfoPlan(val.id)">查看详情</a></el-tag>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-card></el-col>
        </el-row>
      </td>
    </table>

  </div>
</template>

<script>
  export default {
    name: 'zgrepostitory',
    watch: {
      filterText (val) {
      },
      checkedCities (val) {
        this.newSelectCity = this.cities.filter((item) => {
          for (let citem of this.checkedCities) {
            if (item.id === citem) {
              return true
            }
          }
          return false
        })
      }
    },
    mounted: function () {
      //  1.获取指标类型(element 数据类型)
      this.getCoreIndexTypeList()
    },
    methods: {
      goInfo: function (id) {
        this.$router.push('targetDetail/' + id)
      },
      goInfoPlan: function (id) {
        this.$router.push('wfzPlanDetail/' + id)
      },
      changePanel: function (aname) {
        this.targetPlanList = []
        this.getTargetInfo(aname)
      },
      getTargetInfo: function (aname) {
        this.$ajax('get', this.HOST + '/tr/doubleStrands/web/getPlansByCrn?targetId= ' + aname, {}, (obj) => {
          // console.log(obj)
          let flag = obj.success
          if (flag === true) {
            for (let item of obj.obj) {
              // console.log(item)
              let styleName = this.resultTypeObj[item.resultType]
              item.styleName = styleName
              if (item.planinfo.progress === null) {
                item.planinfo.progress = 0
              } else {
                item.planinfo.progress = parseInt(item.planinfo.progress)
              }
              // this.planList.push(item)
              this.targetPlanList.push(item)
            }
          }
        })
      },
      getDpartment: function (node, resolve) {
        this.$ajax('get', this.HOST + '/tr/doubleStrands/web/getDoubleStrands', {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            let objDep = data.data
            // console.log(objDep)
            let deptList = objDep.deptList
            var newDepList = []
            for (let [key, secondDep] of deptList.entries()) {
              var dep = {}
              dep.name = secondDep.label
              dep.did = secondDep.id
              dep.flag = (secondDep.flag) ? secondDep.flag : 'dept'
              dep.isManager = secondDep.isManager
              dep.leaf = true
              this.currentDepId = secondDep.id
              this.currentDep = dep
              newDepList.push(dep)
              if (key === 0) { // 做一次点击操作
                this.ksList.push(dep.did)
              }
            }
            resolve(newDepList)
          }
        })
        return resolve([])
      },

      /**
       *  懒加载叶子节点
       * @param node
       * @param resolve
       * @returns {*}
       */
      loadNode1: function (node, resolve) {
        if (node.level === 0) {
          this.getDpartment(node, resolve)
        } else if (node.level > 0) {
          if (node.data.flag === 'member') {
            // console.log('111', node)
            resolve([])
            return
          }
          let did = node.data.did
          let isManagerA = node.data.isManager
          // console.log(did)
          // console.log('isManagerA', isManagerA)
          this.$ajax('get', this.HOST + '/tr/doubleStrands/web/getUserByDeptid?deptId=' + did + '&isManager=' + isManagerA, {}, (data) => {
            // console.log('4444', data)
            let flag = data.success
            if (flag === true) {
              let objDep = data.data
              if (objDep) {
                let secondDepList = objDep.list

                if (secondDepList.length > 0) {
                  var newDepList = []
                  for (let secondDep of secondDepList) {
                    var dep = {}
                    dep.name = secondDep.label
                    dep.flag = (secondDep.flag) ? secondDep.flag : 'dept'
                    dep.did = secondDep.id
                    if (isManagerA === 0) {
                      if (did === '09') {
                        // TODO 在保证部门ID为01时为校长正确
                        dep.isManager = 1
                      } else {
                        dep.isManager = isManagerA
                      }
                    } else {
                      dep.isManager = isManagerA
                    }

                    newDepList.push(dep)
                    if (dep.flag === 'member') {
                      dep.leaf = true
                      if (!this.loadOnec) {
                        this.loadOnec = !this.loadOnec
                        let tem = {
                          parent: {
                            data: {
                              did: node.data.did
                            }
                          }
                        }
                        this.nodeClick(dep, tem)
                      }
                    }
                  }
                  resolve(newDepList)
                } else {
                  resolve([])
                }
              }
            }
          })
        }
      },

      getCoreIndexTypeList () {
        this.$ajax('get', this.HOST + '/tr/trIndex/web/getCoreIndexTypeList', {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            this.treeData = data.obj
          }
        })
      },
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      isChile (node) {
        // console.log('77777', node)
        if (node == null) {
          return false
        }
        let childSize = node.childNodes.length
        if (childSize === 0 && node.isLeaf === true) {
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
        this.getZiZhi(this.currentTypeId, 30, this.currentP, this.filterText)
      },
      getSelectRole () {
        // console.log(this.checkedCities)
      },
      handleCheckAllChange (val) {
        var newCitys = []
        for (let city of this.cities) {
          newCitys.push(city.id)
        }
        this.checkedCities = val ? newCitys : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      },
      getCurrentPage: function (currentPage) {
        this.currentP = currentPage
        // console.log(this.currentDep)
        // this.getDepUsers(this.currentDep, currentPage)
      },
      getZiZhi: function (typeId, pageSize, pageNum, searchName) {
        //  /tr/trIndex/web/getCoreIndexList?typeId=6&pageNum=1&pageSize=10&searchName=总量
        this.$ajax('get', this.HOST + '/tr/trIndex/web/getCoreIndexList?typeId= ' + typeId + ' &pageSize= ' + pageSize + ' &pageNum=' + pageNum + '&searchName=' + searchName, {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            this.cities = []
            // for (let item of data.obj) {}
            this.cities = data.obj
            if (data.data == null) {
              this.total = 0
            } else {
              this.total = data.data.totalSize
            }
          }
        })
      },
      outDATA: function () {
        let stringList = this.checkedCities.join(',')
        location.href = this.HOST + '/tr/trDataPlatForm/web/exportExcel?indexIds=' + stringList
      },
      getUserPlan: function (data) {
        this.$ajax('get', this.HOST + '/tr/doubleStrands/web/getTargetListByUserId?deptId= ' + data.pid + ' &userId= ' + data.did, {}, (obj) => {
          // console.log('进度', obj)
          let flag = obj.success
          if (flag === true) {
            for (let item of obj.obj) {
              let styleName = this.resultTypeObj[item.resultType]
              if (item.targetInfo.progress === null) {
                item.targetInfo.progress = 0
              } else {
                item.targetInfo.progress = parseInt(item.targetInfo.progress)
              }
              item.styleName = styleName
              this.planList.push(item)
            }
          }
        })
      },
      /**
       * 节点被点中后回调事件
       *
       */
      nodeClick: function (data, currentNode, node) {
        console.log('测试111 ', currentNode)
         this.cclick = currentNode.key
        //  如果是成员则加载成员计划
        if (data.flag === 'member') {
          this.planList = []
          this.targetPlanList = []
          this.activeName=1
          let pid = currentNode.parent.data.did
          data.pid = pid
          this.getUserPlan(data)
        }
      }
    },

    data: function () {
      return {
        loadOnec: false,
        planList: [],
        targetPlanList: [],
        selectNewTemp: [],
        newSelectCity: [],
        cities: [],
        treeData: [],
        currentTypeId: '',
        currentUserId: '',
        currentActiveNames: '',
        userTables: [],
        total: 0,
        activeName: 1,
        activeNamePlan: 1,
        currentP: 1,
        currentDep: {},
        props1: {
          label: 'name',
          di: 'did',
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
        resultTypeObj: {
          '未开始': 'style_two',
          '进行中': 'style_one',
          '已完成': 'style_three',
          '已延期': 'style_four',
          '延期完成': 'style_five'
        },
        multipleSelection: [],
        filterText: '',
        ksList: [],
        cclick:''
      }
    }
  }
</script>

<style >

  #zgre .department-title-left{
    height: 60px;
    padding: 0 0 0 20px;
    line-height: 60px;
  }
  #zgre  .department-title{

    height: 60px;
    line-height: 60px;
  }
  #zgre  .department-title span{
    font-size: 16px;
    margin-left: 11px;
  }
  #zgre  .department-title i{
    color: white!important;
    /* background-color: #70ad47; */
    font-size: 16px;
    border-radius: 5px;
    display: inline-block;
    line-height: 22px;
    vertical-align: top;
  }
  #zgre .department-title span{
    display: inline-block;
    vertical-align: middle
  }
  #zgre .bgIconfont{
    /* display: inline-block; */
    text-align: center;
    display: inline-block;
    /* line-height: 60px; */
    vertical-align: middle;
    width: 22px;
    height: 22px;
    background-color: #70ad47;
  }
  .department-title .el-tag{
    font-size: 12px;
  }
  #zgre {
    margin: 0 0 0 20px;
  }
  #zgre .el-collapse-item__header{
    padding: 0 20px 0 20px;
  }
  #zgre .el-collapse-item__content{
    box-sizing: border-box;
    padding: 0 20px 0 20px;
  }
  #zgre .el-card{
  }
  .custom-aside{
    width: 260px!important;
    margin: 0;
  }
  #zgre .el-card__body{
    padding: 0!important;
  }
  #zgre .el-row{
    height: 45px;
  }

  #zgre .el-collapse-item__header .el-col{
    line-height: 46px;
  }
  #zgre .warninfo{
    line-height: 75px;
    font-size: 20px;
    padding-left: 10px
  }
  #zgre .warninfo i{
    font-size: 30px;
    color: #f56c6c;
  }
  #zgre .warninfo .title{
    font-size: 18px;
    color: #f56c6c;
    margin-left: 4px;
  }
  #zgre .warn_row{
    height: 75px;
    border: 1px solid #ffdada;
    background-color: #fff6f6;
  }
  .content_title{
    margin: 20px;font-size: 18px
  }
  /*
'未开始': '#a5a5a5',
          '进行中': '#ffc000',
          '已完成': '#70ad47',
          '已延期': '#ed7d31',
          '延期完成': '#4472c4'
*/
  #zgre .style_one {
    background: #ffc000;
  }
  #zgre .style_two {
    background: #a5a5a5
  }
  #zgre .style_three {
    background: #70ad47;
  }
  #zgre .style_four {
    background: #ed7d31
  }
  #zgre .style_five {
    background: #4472c4;
  }
  #zgre .span_state {
    color: #fff;
    display: inline-block;
    height: 22px;
    line-height: 22px;
    border-radius: 11px;
    padding: 0 10px;
    font-size: 12px;
  }
  #zgre  .span_background_
  #zgre .shizititle{
    margin-top: 20px;
    color: #888888;
  }
  #zgre .shizititle >span {
    color: #cccccc;
  }
  #zgre .el-main{
    padding: 0!important   ;
  }
  #zgre .el-footer{
    padding: 0;
  }
  #zgre .el-tree-node__expand-icon+span::before {
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: -3px;
    width: 20px;
  }

  #zgre .el-tree-node__expand-icon+span::before {
  }
  #zgre .el-tree-node__expand-icon+span::before {
  }
  #zgre .box-card {
    margin-right: 20px;
  }

  #zgre .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #70ad47;
    border-color: #70ad47;
  }
  #zgre .detail_item_left, .detail_item_right {
    display: inline-block;
    vertical-align: top;
  }
  #zgre  .bg-purple{
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
    /* overflow: hidden; */
    position: relative;
  }
  /* #zgre  .bg-purple span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  } */
  #zgre .bg-purpleA{
    white-space:normal;
    padding-bottom: 10px;
  }
  #zgre .el-tag-specl{
    display:inline-block;
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  #zgre .clearfix {
    *zoom: 1;
  }
  #zgre  .clearfix:after {
    display: block;
    clear: both;
    content: " ";
    height: 0;
    visibility: hidden;
  }
  #zgre .bg-purple .floatL{
    float: left;

  }
  #zgre .titleTag{
    margin-right: 14px;
  }
  #zgre .nameTag{
    width: 70%
  }
  #zgre .warp-spec{
  }
  #zgre .scrollbar-spec{
    /*height: 820px;*/
    border:none;
    overflow-y:scroll;
    overflow-x:hidden;
  }
  #zgre .scrollbar-spec:hover{
    overflow-y:scroll;
    overflow-x:hidden;
  }
  #zgre  .scrollbar-spec::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    position: absolute;
    padding-right: calc(100vw-100% +1rem);
  }
  #zgre  .scrollbar-spec::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    background: #DEDFE0;
    position: relative;
    top: 0;
  }
  #zgre  .scrollbar-spec::-webkit-scrollbar-track {/*滚动条里面轨道*/
    border-radius: 10px;
    background: white;
    position: relative;
    top: 0;
  }
  .ylNodata{
    margin: 0px auto;
    width: 68%;
    border: none;
    position: relative;
    top: 210px;
  }
  .ylNodata img{
    display: inline-block;
    width: 100%
  }
  #zgre .active{
    /*color: rgb(254, 176, 120)!important;*/
  }
  #zgre .noactive{
    color: #ccc;
  }
  #zgre .cactive{
    color: rgb(254, 176, 120)!important;
  }
</style>
