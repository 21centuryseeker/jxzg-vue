<template>
  <el-dialog
        title="自选指标"
        :visible.sync="dialogVisible"
        width="800px" id="zjdialog">
        <!-- 步骤 -->
        <div class="my_dialog_container" style="padding-bottom:5px;">
          <el-tabs v-model="activeNameTab" @tab-click="handleClick"  class="my_tab_style">
            <el-tab-pane label="标准指标库" name="first">
              <div key="table1">
                <div class="newZwzdStyle xgxBox">
                  <div class="tree_left scroll_x_hidden_box">
                    <el-scrollbar :wrapStyle="wrapStyle">
                      <el-card class="box-card">
                        <el-tree :data="propsZb" @node-click="nodeClick" node-key="id" accordion :default-expanded-keys="keysArr" :default-checked-keys="ckeckedKeysArr">
                          <!-- <span class="custom-tree-node" slot-scope="{ node, data }" @click="getAllZb(node)"> -->
                          <span class="custom-tree-node" slot-scope="{ node, data }" @click="node.isActive = true">
                            <span>
                              <i class="iconfont" style="color: #cccccc" v-if="isChile(node)" :class="{ active: node.isActive}">&#xe605;</i>
                              <i class="iconfont" style="color: #cccccc" v-else :class="{ active: node.isActive}">&#xe639;</i>
                              {{ node.label }}</span>
                          </span>
                        </el-tree>
                      </el-card>
                    </el-scrollbar>
                  </div>
                  <div class="table_right">
                     <div  v-show="!totalSize" style="text-align:center">暂无数据</div>
                    <el-radio-group v-model="radio_zb" style="width: 100%;">
                      <table style="width: 100%">
                        <tbody>
                          <template v-for="(item, index) in zbItems">
                            <tr :key="index">
                          <template v-for="vo in item">
                            <td :key="vo.id">
                          <el-radio :label="vo.id" :key="vo.id" :disabled="!vo.indexSql">{{vo.name}}</el-radio>
                          </td>
                          </template>
                        </tr>
                      </template>
                        </tbody>
                      </table>
                    </el-radio-group>
                    <div style="text-align: center;margin-top: 30px;">
                      <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout="prev, pager, next"
                        v-show="totalSize"
                        :total="totalSize">
                      </el-pagination>
                    </div>
                   
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="许职专用指标库" name="second">
              <!-- 自定义库 -->
              <div  key="table2" class="newZwzdStyle xgxBox">
                 <div class="tree_left scroll_x_hidden_box">
                    <el-scrollbar :wrapStyle="wrapStyle">
                      <el-card class="box-card">
                        <el-tree :data="propsXz" @node-click="nodeClick_xz" node-key="id" accordion :default-expanded-keys="[openFlag]" :default-checked-keys="[chKey]">
                          <!-- <span class="custom-tree-node" slot-scope="{ node, data }" @click="getAllZb(node)"> -->
                          <span class="custom-tree-node" slot-scope="{ node, data }" @click="node.isActive = true">
                            <span>
                              <i class="iconfont" style="color: #cccccc" v-if="xz_isChile(node)" :class="{ active: node.isActive}">&#xe605;</i>
                              <i class="iconfont" style="color: #cccccc" v-else :class="{ active: node.isActive}">&#xe639;</i>
                              {{ node.label }}</span>
                          </span>
                        </el-tree>
                      </el-card>
                    </el-scrollbar>
                  </div>
                  <div class="table_right">
                    <div  v-show="!totalSize2" style="text-align:center">暂无数据</div>
                    <el-radio-group v-model="radio_zb2" style="width: 100%;">
                        <table style="width: 100%">
                          <tbody>
                            <template v-for="(item, index) in zbItems2">
                              <tr :key="index">
                              <td >
                              <el-radio :label="item.id" :key="item.id" >{{item.index_name}}</el-radio>
                              </td>
                          </tr>
                        </template>
                          </tbody>
                        </table>
                      </el-radio-group>
                     <div style="text-align: center;margin-top: 30px;">
                      <el-pagination
                        background
                        @current-change="handleCurrentChange2"
                        :current-page="currentPage2"
                        :page-size="pageSize2"
                        layout="prev, pager, next"
                        v-show="totalSize2"
                        :total="totalSize2">
                      </el-pagination>
                    </div>
                  </div>
              </div>
            </el-tab-pane>
          </el-tabs>     
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="$emit('cancel')">取 消</el-button>
          <el-button type="primary" v-if="addBzFlag" @click="bzZxSure">确 定</el-button>
          <el-button type="primary" v-else @click="xzZxSure">确 定</el-button>
          
        </span>
      </el-dialog>
</template>
<script>
export default {
 props: ['dialogVisible', 'cancel','sureADD', 'flag'],
  data () {
    return {
    job: '',//角色
     jobItems: [],//部门
    //  dialogVisible:false,//弹窗的开关
     historyFlag:false,//是否有历史纪录
     content_xz:[],//历史纪录的渲染容器
     chartDates:[],//历史画像的容器
     colorArr: ['#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#dd6969', '#00a6a6'],//颜色容器
     activeNameTab: 'first',//弹窗切换
     radio_zb: '',//标准单选
     radio_zb2: '',//自选指标单选
     propsZb:[],//标准指标树形结构
     keysArr: [],
     ckeckedKeysArr: [],
     zb_before_id: '',
     wrapStyle: [{ height: '100%' }],
     zbItems:[],
     currentPage: 1,
     pageSize: 12,
     totalSize: 0,
     zbItems2: [],
      currentPage2: 1,
      pageSize2: 12,
      totalSize2: 0,
      propsXz:[],//许职专用
      openFlag: 0,
      chKey: 0,
      nodeTypeName:'',
      currentP:1,
       currentTypeId: 0,
       treeNodeId: 1,
      labelName: '',
      addBzFlag:true
    }
  },
  mounted () {
    document.getElementById('zjdialog').onmousedown = () => {
      this.sureADD()
    }
    document.getElementById('zjdialog').getElementsByClassName('el-dialog')[0].onmousedown = (ev) => {
      let e = ev || window.event
      e.stopPropagation()
      e.preventDefault()
    }
    this.addZb()
  },
  methods: {
    // 添加指标
    addZb: function () {
      this.activeNameTab = 'first'
      this.getTreeHtml()
      this.radio_zb=''
      this.radio_zb2 = ''
      this.getCoreIndexTypeList()
      this.addBzFlag=true
      // this.dialogVisible = true
 
    },
    //  切换标准和自定义
   handleClick () {   
      if(this.activeNameTab=== 'first'){
        this.radio_zb = ''
        this.addBzFlag=true
      }else{
         this.radio_zb2 = ''
         this.addBzFlag=false
      }
    
    },
   // 选择指标后弹窗点击确定
    bzZxSure(){
      let self = this
      if(this.radio_zb==''){
         self.$message({
            message: '指标选取不能为空',
            type: 'error'
          })
          return
      }
      this.$ajax(
        'get',
         this.HOST + '/tr/indexChart/web/addIndexConfig?indexId='+this.radio_zb+ '&flag=' + this.flag,
        {},
        data => {
          let flag = data.success
          if (flag === true) {
             self.$message({
              message: data.msg,
              type: 'success'
            })
            // self.dialogVisible=false
            // 重新调用历史纪录
            // self.historyFn()
            self.sureADD()
            document.getElementById('out-contetn').scrollTop = 100000
          }else{
             self.$message({
              message: '暂无相关数据',
              type: 'error'
            })
            // self.dialogVisible=false
             self.sureADD()
          }
        }
      )

    },
    // 标准--------------------------------
    // 标准树形结构
    getTreeHtml () {
     let self = this
      // 获取指标树形控件 
      this.$ajax(
        'get',
        this.HOST + '/tr/trIndex/web/getCoreIndexTypeList',
        {},
        (res) => {
          if (res.success) {
            // self.dialogVisible = true
            self.propsZb = []
            self.keysArr = []
            self.ckeckedKeysArr = []
            self.propsZb = res.obj
            self.keysArr.push(res.obj[0].id)
            if (res.obj[0].children) {
              self.ckeckedKeysArr.push(res.obj[0].children[0].id)
              self.zb_before_id = res.obj[0].children[0].id
            } else {
              self.ckeckedKeysArr.push(res.obj[0].id)
              self.zb_before_id = res.obj[0].id
            }
            self.getZbList()
          } else {
            self.$message({
              type: 'error',
              message: res.msg
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
    nodeClick (data) {
      data.isActive = true
      let self = this
      self.zb_before_id = data.id
      self.currentPage = 1
      self.$ajax(
         'get',
         this.HOST + '/tr/indexChart/web/getAllIndexByType2?indexType2=' + data.id + '&pageSize=' + self.pageSize + '&startPage=' + self.currentPage + '&search=' + '',
         {},
        (res) => {
          if (res.success) {
            self.zbItems = []
              if( res.data){
                self.totalSize = res.data.total
              }
            
            let arr = []
            for (let item of res.data.data) {
                self.zbItems.push(arr)
                arr = [item]
              
            }
            // self.zbItemsOld = res.data.data
            self.zbItems.push(arr)
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
        // 获取指标
    getZbList () {
      let self = this
      self.$ajax(
         'get',
         this.HOST + '/tr/indexChart/web/getAllIndexByType2?indexType2=' + self.zb_before_id + '&pageSize=' + self.pageSize + '&startPage=' + self.currentPage + '&search=' + '',
         {},
        (res) => {
          if (res.success) {
            self.zbItems = []
            if( res.data){
                self.totalSize = res.data.total
              }
            let arr = []
            for (let item of res.data.data) {
                self.zbItems.push(arr)
                arr = [item]
            }
            // self.zbItemsOld = res.data.data
            self.zbItems.push(arr)
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
      this.getZbList()
    },

    // 许职专用-----------------------------------
    // 获取指标类型
    getCoreIndexTypeList () {
      let self = this
      this.$ajax(
        'get',
        this.HOST + '/tr/trXzIndex/web/getIndexTypeList',
        {},
        data => {
          let flag = data.success
          if (flag === true) {
            self.propsXz = data.obj
            self.openFlag = data.obj[0].id
            self.chKey = data.obj[0].children[0].id
            self.currentTypeId = data.obj[0].id
            this.getZiZhi_xz(this.chKey, this.pageSize2, this.currentPage2, '')
          }
        }
      )
    },
        // 指标类型是否有子集
    xz_isChile (node) {
      if (node == null) {
        return false
      }
      let childSize = node.childNodes.length
      if (childSize === 0) {
        return false
      }
      return true
    },
   nodeClick_xz: function (data, currentNode, node) {
      if (currentNode.childNodes.length === 0) {
        this.currentTypeId = data.id
        this.openFlag = data.id
        this.nodeTypeName = data.label
        let firstName = this.labelName + '-' + this.nodeTypeName
        this.currentPage2 = 1
        this.getZiZhi_xz(this.currentTypeId, this.pageSize2, this.currentPage2, '')
      }
    },
    nodeExpand: function (data, node) {
      this.treeNodeId = data.id
      this.labelName = data.label
    },
      // 获取指标
    getZiZhi_xz: function (typeId, pageSize, pageNum, searchName) {
      let self = this
      this.$ajax(
        'post',
        this.HOST +
          '/tr/trXzIndex/web/getIndexList?typeId=' + typeId + '&pageSize=' + pageSize + '&pageNum=' + pageNum + '&searchName=' + searchName,
        {},
        (res) => {
          if (res.success) {
            if(res.data){
               this.totalSize2 = res.data.totalSize
            }
            if (res.obj) {
              this.zbItems2 = res.obj
            } else {
              this.zbItems2 = []
            }
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    handleCurrentChange2(val){
      this.currentPage2 = val
      this.getZiZhi_xz(this.currentTypeId, this.pageSize2, this.currentPage2, '')
    },
    xzZxSure(){
       let self = this
      if(this.radio_zb2==''){
         self.$message({
            message: '指标选取不能为空',
            type: 'error'
          })
          return
      }
      this.$ajax(
        'get',
         this.HOST + '/tr/trXzIndexConfig/web/addIndexConfig?indexId='+this.radio_zb2+ '&flag=' + this.flag,
        {},
        data => {
          let flag = data.success
          if (flag === true) {
             self.$message({
              message: data.msg,
              type: 'success'
            })
            // self.dialogVisible=false
            // 重新调用历史纪录
            // self.historyFn()
            self.sureADD()
            document.getElementById('out-contetn').scrollTop = 100000
          }else{
             self.$message({
              message: '暂无相关数据',
              type: 'error'
            })
            // self.dialogVisible=false
             self.sureADD()
          }
        }
      )

    }
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
.mainContent {
  background-color: #f1f4f5;
  padding: 1.64%;
}
.mainContentAA {
  padding-top: 0;
}
.ContentTitle {
  font-size: 18px;
  color: #37474f;
  line-height: 24px;
  margin-bottom: 20px;
}
.paddingBto20 {
  padding-bottom: 20px;
}
.textALignR {
  text-align: right;
}
.marginBto20 {
  margin-bottom: 20px;
}
.shizititle {
  margin-top: 20px;
  color: #888888;
}
.shizititle > span {
  color: #cccccc;
}
.el-main {
  padding: 0;
}
.el-footer {
  padding: 0;
}
.el-tree-node__expand-icon + span::before {
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: -3px;
  width: 20px;
}

.zBDialog .el-checkbox__input.is-checked .el-checkbox__inner,
.zBDialog .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #70ad47;
  border-color: #70ad47;
}
.zBDialog .el-tabs__item.is-active,
.zBDialog .el-tabs__item:hover{
 color:#70ad47
}
.zBDialog  .el-tabs__active-bar{
  background-color: #70ad47;
}
.zbContent {
  line-height: 40px;
  font-size: 14px;
  color: #526069;
}
.XBtitle {
  float: left;
  width: 80%;
}
.XBContent {
  float: left;
  width: 20%;
}
.tableBox .cell {
  text-align: left;
  padding: 0 10%;
  color: #76838f;
  font-size: 14px;
  line-height: 33px;
}
.tableBox .el-table .cell{
  line-height: 33px!important
}
.tableBox  .zBDialog .el-dialog {
  width: 620px;
  height: 734px;
}
.addTtop{
  font-size: 14px;
  line-height: 14px;
  color: #666;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 12px;
      margin-bottom: 20px;
}
.addTtop span{
   display: inline-block;
   border-left: 4px solid #00b8ac;
   padding-left: 8px;
}
.defaultInput{
  width: 120px;
  margin-left: 10px;
}
.zBDialog .el-input--suffix .el-input__inner{
  width: 115px;
}
.zBDialog .group{
    padding: 0 20px;
    margin-top: -30px;
}
.zBDialog .el-form-item__label{
  padding-right: 45px;
}
.zBDialog .el-tabs__content{
  padding-right: 30px
}
.zBDialog .unitBox .el-input {
margin-left: 30px;
width: 115px;
}
#zBDialog .el-form-item{
  position: relative;
}
#zBDialog .infoIcon{
 position: absolute;
 right: -26px;
 top: 16px;
 color: #ffc000;
 font-size: 20px;
 transform: translateY(-5px)
}
#zBDialog .mustIcon{
  color: #e41622;
  padding-right: 4px;
  position: absolute;
  left: -75px;
  top: 0
}
#zBDialog .mustIconA{
   left: -90px;
}
#zBDialog .mustIconB{
   left: -48px;
}
.marginBto10{
  margin-bottom: 10px
}
.zbTile{
  font-size: 16px;
  color: #37474f
}
.nodataPic_zg{
  width: 100%;
  height: 600px;
  background-color: #fff;
  text-align: center
}
.nodataPic_zg img{
    display: inline-block;
   margin-top: 100px;
}
.selectUnit{
 display: inline-block;
 margin-left: 20px
}
.selectUnit .el-select{
  width: 146px
}
.hover_bj,.hover_sc{
    display: inline-block;
    height: 54px;
    width: 54px;
    vertical-align: top;
    line-height: 54px;
    cursor: pointer;
    margin-left: -5px
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
.w_tableBoxA .el-table td{
padding: 5px 0
}
  .colorTable  .el-table th{
    background-color: #70ab47
  }
  .colorTable  .el-table th .cell{
    color: #fff;
    font-size: 13px
  }
  .colorTable  .el-table .cell{
    font-size: 12px
  }
  /* .tableBox .tableWidth .has-gutter tr th:first-child, */
  .colorTable .el-table__row>td:first-child {
    background: #f3f7fb !important;
  }
   .dialogEdit li{
     margin-bottom: 10px
   }
     .dialogEdit li.q_last{
     text-align: right;
     margin-bottom: 0
   }
     .dialogEdit li.msStyle{
     font-size: 12px;
     line-height: 20px;
     padding: 0 10px;
     margin-bottom: 20px
   }
   .tableRow{
     width: 100%;
     display: table
   }
   .tableRow .tableRowL,
    .tableRow .tableRowR{
     /* display: table-cell; */
     background-color: #fff;
     min-height: 670px;
     vertical-align: top;
     /* float: left; */
  
   }
    .tableRow .tableRowL{
      float: left;
      width:21%;
      /* border-right: 24px  solid #f1f4f5; */
    }
    .tableRow .tableRowR{
     width:77%;  
     float: right;
    }
    .tableRow .tableRowR  .tableYiLan{
       padding:2%;
    }
.xgxBox .newZwzdStyle {
  font-size: 0;
}
.xgxBox .tree_left {
  width: 250px;
  display: inline-block;
  height: 500px;
  vertical-align: top;
}
.xgxBox .table_right {
  margin-left: 10px;
  display: inline-block;
  width: 474px;
  vertical-align: top;
    padding-left: 20px;
    padding-top: 20px;
}

.xgxBox .chart_type_img {
  width: 32px;
  height: 27px;
  transform: translateY(5px)
}
.xgx_table caption{
   font-size: 18px;
    margin-bottom: 15px;
}
.xgxBox .nodataPicAN {
  background-color: #fff;
  height: 300px;
  text-align: center;
}
.xgxBox .nodataPicAN img {
  display: inline-block;
  margin: auto;
  margin-top: 20px
}
.newZwzdStyle td{
   box-sizing: border-box;
    height: 32px;
    padding-left: 10px;
    
   /* border-bottom: 1px solid #e6e6e6; */
}
.lastSpan{
  display: inline-block;
  width:100%;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.w_tableBoxA .box-card{
  position: relative;
  margin-bottom: 20px
}
 .w_tableBoxA  .close_i {
      position: absolute;
      top: 20px;
       right: 20px;
      cursor: pointer;
      color: #f00;
      z-index: 999
    }
    .step_item.active {
  background: #70ad47;
  color: #fff;
}
.step_item.active .step_item_left {
  background: #fff;
  color: #70ad47;
}
.is-expanded > .el-tree-node__content .expanded + span i.iconfont {
  color: #feb078 !important;
}
.is-current > .el-tree-node__content > .custom-tree-node .iconfont {
  color: #feb078 !important;
}
.el-upload-list__item.is-success .el-icon-close-tip {
  display: none !important;
}
.addZD{
  position: absolute;
    right: 1.64%;
    top: 12px;
}
</style>
