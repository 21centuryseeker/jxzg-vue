<template>
<div class="mainContent">
      <!--<div class="tab-control  tab-controlFixed clearfix">-->
        <!--<div class="tab-control-item" v-for="(item,index) in TitleItems" >-->
          <!--<div v-if="index==0" class="active tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>-->
          <!--<div v-else-if="index!=0" class="tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>-->
        <!--</div>-->
      <!--</div>-->
       <div class="headerTitle paddingTop46">诊改制度库</div>
    <div class="zgItem zgForm clearfix" style="margin-top: 46px;">
        <div  class="allDown">
            <el-button  :disabled="!flagAllDown" :class="{Nodisabled:flagAllDown}" size="small" type="info" @click="onAllDown"><i class="iconfont bigIcon">&#xe63a;</i>全部下载</el-button>
        </div>
        <div class="zgGroup">
               <div class="timerBox">
                  <el-date-picker
                    style="width: 298px;"
                    v-model="targetTime"
                    type="daterange"
                    size="small"
                    :editable="false"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
            <el-input class="zgInput marginBto22" size="small"  v-model="searchName" placeholder="请输入搜索内容" clearable></el-input>
            <el-button type="info" class="marginBto22 reverseBtn" size="small" @click="onSeach">搜索</el-button>
        </div>
    </div>
     <div v-show="dataFlag" class="nodataPic_zg" key="box1">
           <img src="../../../assets/empty.jpg"/>
     </div>
    <div v-show="!dataFlag" class="zgItem list clearfix" key="box2">
    <div class="table_page_box table_page_boxA">
       <el-table @sort-change="sortList"  size="mini"  ref="multipleTable" :data="items"
          @selection-change="handleSelectionChange"  style="width: 100%">
          <el-table-column   type="selection" width="100" align="center" >  </el-table-column>
          <el-table-column label="序号"  width="150" align="center" >
            <template slot-scope="scope">
              {{pageSize * (pageNumber - 1) + 1 + scope.$index}}
            </template>
          </el-table-column>
          <el-table-column  class="contentTable" label="名称" align="left" >
              <template slot-scope="scope">
                <template v-if="typeValue!=1">
                      <a class="linkText" v-if="scope.row.textType=='pdf'" :href="host + scope.row.upUrl" :download="scope.row.fullName">
                        <i class="iconfont pdfClass">&#xe69b;</i>
                        <span>{{scope.row.name}}</span>
                    </a>
                    <a class="linkText"  v-else  :href="host + scope.row.upUrl" :download="scope.row.fullName" :title="scope.row.name" >
                       <i class="iconfont DocClass" v-if="scope.row.textType=='docx'||scope.row.textType=='doc'">&#xe618;</i>
                        <i class="iconfont xisClass" v-else-if="scope.row.textType=='xls'">&#xe71b;</i>
                        <i class="iconfont otherClass" v-else>&#xe643;</i>
                        <span> {{scope.row.name}}</span>
                    </a>
                </template>
                 <template v-else>
                      <a class="linkText" v-if="scope.row.textType=='pdf'" :href="host + scope.row.upUrl" :download="scope.row.fullName">
                        <i class="iconfont pdfClass">&#xe69b;</i>
                        <span>{{scope.row.name}}</span>
                    </a>
                    <a class="linkText"  v-else href="javascript:void(0)" :title="scope.row.name"   @click="$router.push({path: '/preview/'+scope.row.id})">
                        <i class="iconfont DocClass" v-if="scope.row.textType=='docx'||scope.row.textType=='doc'">&#xe618;</i>
                         <!-- <i class="iconfont DocClass" v-if="scope.row.textType=='docx'||scope.row.textType=='doc'">&#xe618;</i> -->
                        <i class="iconfont xisClass" v-else-if="scope.row.textType=='xls'">&#xe71b;</i>
                        <i class="iconfont otherClass" v-else>&#xe643;</i>
                        <span> {{scope.row.name}}</span>
                    </a>
                </template>
              </template>
          </el-table-column>
          <el-table-column label="日期" sortable  align="center"  width="200" >
              <template slot-scope="scope">
                  {{scope.row.pubtime?scope.row.pubtime:'----'}}
              </template>

           </el-table-column>
         <el-table-column label="操作" align="center" width="80" >
              <template slot-scope="scope">
                  <a  class="downLink"  :href="host + scope.row.upUrl"  :download="scope.row.fullName"><i class="iconfont">&#xe63a;</i></a>
              </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box page_boxA">
              <el-pagination background @size-change="handleSizeChange" @current-change="getCurrentPage" :current-page="pageNumber" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"  v-show="total">
                </el-pagination>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      host: this.HOST,
      multipleSelection: [],
      flagAllDown: false,
      TitleItems: [
        {
          deptName: '规章制度',
          value: 2
        },
        {
          deptName: '机构建设',
          value: 3
        },
        {
          deptName: '报告',
          value: 4
        },
        {
          deptName: '政策',
          value: 1
        }
      ],
      isAllChecked: false,
      items: [],
      pageNumber: 1,
      pageSize: 10,
      typeValue: 2,
      startTime: '',
      endTime: '',
      searchName: '',
      total: 0,
      dataFlag: true,
      typeSelect: [{
        value: '1',
        label: '规章制度'
      }, {
        value: '2',
        label: '机构建设'
      }, {
        value: '3',
        label: '报告'
      }, {
        value: '4',
        label: '政策'
      }],
      value: '',
      targetTime: '',
      basePath: '',
      descStr: 'desc'
    }
  },
  mounted () {
    this.ajaxDataFn(this.pageNumber, this.pageSize, this.typeValue, this.startTime, this.endTime, this.searchName, this.descStr)
  },
  methods: {
    // 请求数据
    ajaxDataFn (pageNumber, pageSize, typeValue, startTime, endTime, searchName, descStr) {
      let self = this
      self.$ajax('post', self.HOST + '/tr/trZsk/web/getZskList?pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&typeValue=' + typeValue + '&startTime=' + startTime + '&endTime=' + endTime + '&searchName=' + searchName + '&descStr=' + descStr, {}, (res) => {
        if (res.success) {
          if (res.data) {
            self.total = res.data.totalSize
          }
          if (res.obj == null) {
            self.dataFlag = true
          } else {
            self.dataFlag = false
            self.items = []
            // self.total = res.data.totalSize
            self.items = res.obj
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    getCurrentPage: function (val) {
      this.pageNumber = val
      this.ajaxDataFn(this.pageNumber, this.pageSize, this.typeValue, this.startTime, this.endTime, this.searchName, this.descStr)
    },
    //   切换顶部用户身份
    jobSwitch (item, event) {
      let e = event || window.event
      let aaaList = document.getElementsByClassName('tab')
      for (let i = 0; i < aaaList.length; i++) {
        aaaList[i].className = 'tab'
      }
      e.currentTarget.className = 'tab active'
      this.pageNumber = 1
      this.typeValue = item.value
      this.searchName = ''
      this.startTime = ''
      this.endTime = ''
      this.targetTime = ''
      this.ajaxDataFn(this.pageNumber, this.pageSize, this.typeValue, this.startTime, this.endTime, this.searchName, this.descStr)
    },
    onSeach () {
      let self = this
      this.items = []
      this.startTime = ''
      this.endTime = ''
      if (self.targetTime) {
        self.startTime = self.mydateFormat.dateCodeYmd(self.targetTime[0])
        self.endTime = self.mydateFormat.dateCodeYmd(self.targetTime[1])
      }
      this.pageNumber = 1
      this.ajaxDataFn(this.pageNumber, this.pageSize, this.typeValue, this.startTime, this.endTime, this.searchName, this.descStr)
    },
    onAllDown () {
      let self = this
      if (self.multipleSelection.length === 0) {
        self.flagAllDown = false
      } else {
        self.flagAllDown = true
        let data = self.multipleSelection
        for (let i = 0; i < data.length; i++) {
          (function (index) {
            setTimeout(() => {
              window.location.href = self.host + data[i].upUrl
            }, index * 500)
          })(i)
        }
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      if (this.multipleSelection.length >= 2) {
        this.flagAllDown = true
      } else {
        this.flagAllDown = false
      }
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.pageNumber = 1
      this.ajaxDataFn(this.pageNumber, this.pageSize, this.typeValue, this.startTime, this.endTime, this.searchName, this.descStr)
    },
    sortList (v) {
      if (v.order) {
        if (v.order === 'ascending') {
          // 升序
          this.descStr = 'asc'
        } else {
          // 降序
          this.descStr = 'desc'
        }
      } else {
        this.descStr = 'asc'
      }

      this.ajaxDataFn(this.pageNumber, this.pageSize, this.typeValue, this.startTime, this.endTime, this.searchName, this.descStr)
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
/* .el-checkbox__input.is-checked+.el-checkbox__label{color: #70ad47} */
.mainContent{background-color:#f1f4f5;padding:1.64%;padding-top: 0}
.ContentTitle{font-size:18px;color:#37474f;line-height:24px; margin-bottom: 20px;};
.baseColor{background-color:#70ad47}
.reverseColor{background-color:#ed7d31}
.gray{backGround-color:#a5a5a5}
.zgItem{
    margin-bottom: 20px;
    /* box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5; */
}
.zgInput{
    width: 298px;
    margin-right: 22px;
}
.zgForm{background-color:#fff;padding:22px 22px 0 35px;}
.reverseBtn{background-color:#ed7d31;color:#fff;float:right;border-color: #ed7d31;}
.reverseBtn:hover,.reverseBtn:active,.reverseBtn:focus {background-color:#ed975c;color:#fff;border-color: #ed975c;}
.marginBto22{
    margin-bottom: 22px;
}
.zgGroup{float:right;}
.allBtn{
  display: inline-block;
  padding-top: 11px;
}
.allBtn .el-checkbox__input.is-checked+.el-checkbox__label{
      color: #70ad47;
}
.allDown{
  display: inline-block;
}
.checkItem{
  position: relative;
  background-color: #fff;
  text-align: left;
  color:#37474f;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid #fff;
  margin-bottom: 24px;
  border-radius: 8px
}
.checkItem:hover{
 border-color: #70ad47;
}
.checkItem:hover .title{
   background-color: #70ad47;
   color: #fff;
}
.checkItem:hover .title .text{
   color: #fff;
}
.checkItem.active{
  border-color: #70ad47;
}
.checkItem.active .title{
   background-color: #70ad47;
   color: #fff;
}

.checkItem.active .title .text{
   color: #fff;
}
.checkItem .title .text:hover{
  color: #fff;
}
.checkItem.active .title .text:hover{
   color: #fff;
}
.checkItem.active p .iconfont{color: #70ad47;}
.checkItem p{
  height: 134px;
  text-align:center;
}
.checkItem p .iconfont{
  font-size: 60px;
  line-height: 134px;
    color: #dadada;
}
.checkItem .checkBtn{
  position: absolute;
  left: 0;
  top: -5px;
}
.checkItem .title{
  position:relative;
  padding: 18px 29px;
 margin-bottom: 0;
 height: 44px;
  overflow: hidden;
}
.checkItem .title .text{
   /* float: left; */
  display: table-cell;
  width: 90%;
  line-height: 22px;
  height: 44px;
  display: table-cell;
  vertical-align: middle;
  /* display: -webkit-box; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
   /* text-decoration:underline; */
   color:#37474f;
}
/* .checkItem .title .text:hover{
   color:#70ad47;
} */
.checkItem .center{
  text-align: center
}
.checkItem .title .downLink{
    /* float: left; */
    position: absolute;
    right: 15px;
    bottom: 10px;
    line-height: 44px;
    height: 44px;
    text-align: center;
}
.checkItem .title .downLink a{
  color: #fff;
  display: inline-block;
  height: 44px;
  text-decoration:none
}
.checkItem .title .downLink .iconfont{
  color: #fff;
  font-size: 32px
}
.checkItem .el-row {
    margin-bottom: 20px;
}
.checkItem .el-row:last-child{
  margin-bottom: 0;
}
.allDown .el-button{
  color:#fff;
   /* background-color: #70ad47; */
  /* line-height: 22px */
}
/* .allDown .el-button:hover,
.allDown .el-button:active, */
.allDown .Nodisabled{
  color:#fff;
  background-color: #70ad47;
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
.zgSelect{
  margin-right: 15px
}
.timerBox{
  display: inline-block;
  margin-right: 15px;
}

.tab-control{
    width:100%;
    font-size: 14px;
    color: #76838f;
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
    margin-bottom: 0px;
}
.tab-control .tab-control-item div{
    line-height: 38px;
    float: left;
    padding: 0 25px;
    background-color: #fff;
    border-right: 1px solid #fff;
    cursor: pointer;
}
.tab-control .tab-control-item .active{
        position: relative;
        top: 0px;
    z-index: 2;
    height: 38px;
    background-color: #f1f4f5;
    border-right: 1px solid #e4eaec;
    border-bottom: 1px solid #f1f4f5;
        margin-bottom: -1px;
}
.headerTitle{
      height: 30px;
    font-size: 18px;
    color: #37474f;
    line-height: 60px;
    background: #f1f4f5;
    padding-left: 0px;
}
.linkText{
  display: block;
  text-overflow:ellipsis;
   white-space:nowrap;
   overflow:hidden;

}
.linkText .iconfont{
  font-size: 20px;
  margin-right: 5px
}
.linkText .DocClass{
  color:  #5185ba
}
.linkText .pdfClass{
  color:  #ee6a71
}
.linkText .otherClass{
  color:  #888ead
}
.linkText .xisClass{
  color:  #70ad47
}
.downLink{
 display: block;
width: 60px;
height: 54px;
text-align: center
}
.downLink .iconfont{
  color: #cbcbcb;
  font-size: 28px
}
.downLink:hover{
  background-color: #70ad47
}
.downLink:hover .iconfont{
color: #fff;
}
.table_page_boxA{
  background-color: #fff
}
.page_boxA{
  margin-top: 26px;
  padding-bottom: 26px
}
/* .bigIcon{
  font-size: 20px;
  margin-right: 5px
} */
.paddingTop{
  padding-top: 46px;
}
</style>
