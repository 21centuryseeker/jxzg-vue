<template>
  <div class="cell_pointer glfwjx">
    <!--<div class="container_box_header">我负责的目标</div>-->
    <!-- 操作容器 -->
    <div class="bg_box">
      <div class="operation_box boxShadow">
        <!-- 计划类型 -->
        <div class="operation_item">
          <!-- <div class="operation_item_left">所属部门</div> -->
          <div class="operation_item_right">
            <el-select v-model="targetClass" placeholder="全部学院"   style="width: 155px;" size="small" @change="stateChange">
              <el-option  v-for="item in yuanXiList" :key="item.id" :label="item.deptName" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
        <!-- 所属部门 -->
        <div class="operation_item" >
          <div class="operation_item_right">
            <el-select v-model="quanbuXueNian" placeholder="全部学年" style="width: 155px;" size="small" @change="stateChange">
              <el-option v-for="item in yearList" :key="item.id" :label="item.value" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="operation_item" style="margin-left: 50px">
          <div style="margin-top: 20px">
            <span style="font-size: 13px">评分范围：</span>
            <el-radio-group v-model="typePingfen" size="small" @change="stateChange">
              <el-radio-button label="1" class="radio_s" >专业</el-radio-button>
              <el-radio-button label="3" class="radio_s">课程</el-radio-button>
              <el-radio-button label="2" class="radio_s">教师</el-radio-button>
              <el-radio-button label="4" class="radio_s">学生</el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <!-- 审核情况 -->
        <div class="operation_item" v-if="targetClass - 0 === 3" style="margin-left: 6px;" key="select1">
          <!-- <div class="operation_item_left">所属部门</div> -->
          <div class="operation_item_right">
            <el-select v-model="shqkInput" placeholder="审核情况" style="width: 110px;" size="small" @change="searchFunc">
              <el-option
                label="审核情况"
                value=""
              ></el-option>
              <el-option
                v-for="item in shskOptions"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>

        <!-- 搜索按钮 -->
      </div>
      <!-- 视图容器 -->
      <div class="table_page_box boxShadow"  key="table1">
        <el-table size="mini" ref="multipleTable" :data="tableData" style="width: 100%"
        >
          <el-table-column label="排名"  align="center" width="100">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
            <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
          </el-table-column>
          <el-table-column align="left" :label="cName" show-overflow-tooltip  prop="perform_name" >
            <!-- width="480" -->
          </el-table-column>
          <el-table-column prop="dept_name" label="学院"   show-overflow-tooltip align="left" >
            <!-- width="380" -->
          </el-table-column>
          <el-table-column label="年份"  align="center" >
            <template slot-scope="scope">
              {{scope.row.year}}-{{parseInt(scope.row.year)+1}} &nbsp;学年
            </template>
          </el-table-column>
          <el-table-column label="综合得分" align="center" prop="score">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background  @current-change="handleCurrentChange" :current-page="currentPage"  layout="total, prev, pager, next" :total="totalPage">
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
      targetClass: '999',
      quanbuXueNian:'999',
      typePingfen:'1',
      targetYear:'999',
      yuanXiList:[],
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      tableData:[],
      cName:'专业名称',
      yearList:[]
    }
  },
  mounted(){
    this.getYuanxiList()
    this.getYearList()
    this.getPerformanceList()
  },
  methods:{
    getPerformanceList(){
      let param  = {
        type:this.typePingfen,
        pageNum:this.currentPage,
        pageSize:this.pageSize
      }
      if(this.targetClass != '999'){
        param.deptId = this.targetClass
      }
      if(this.quanbuXueNian !='999'){
        param.year = this.quanbuXueNian
      }
      this.$ajaxGet(this.HOST+'/tr/manageService/web/getPerformanceList',param,(res)=>{
        let {data,obj,success,msg} = res
        if(success==true){
          let {totalPage,totalSize} = data
          this.totalPage = totalSize
          this.tableData = obj
        }else{

        }
        console.log("list",res)
      })
    },
    getYuanxiList(){
      this.$ajaxGet(this.HOST+'/tr/manageService/web/getDepartmentList',{},(res)=>{
          console.log("xueyuan",res)
        let {obj} = res
        this.yuanXiList = obj;
        this.yuanXiList.unshift({id:"999",deptName:'全部学院'})
      })
    },
    getYearList(){

      this.$ajaxGet(this.HOST+'/tr/manageService/web/getYearList',{},(res)=>{
        console.log("yearlist",res)

        let {obj} = res
        this.yearList = obj.map(item=>{
          let newItem = {
            id:item,
            value:item+'-'+(parseInt(item)+1)+' 学年'
          }
          return newItem
        })
        this.yearList.unshift({
          id:'999',
          value:'全部学年'
        })
        console.log("new",this.yearList)
      })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getPerformanceList()
    },
    stateChange(val) {
      this.currentPage = 1;
      switch (this.typePingfen){
        case '1' :
          this.cName = '专业名称';
          break;
        case '2':
          this.cName = '教师名称';
          break;
        case '3':
          this.cName = '课程名称';
          break;
        case '4':
          this.cName = '学生名称';
          break;
      }
      this.getPerformanceList()
    },
    targetClassChange (val) {

      this.getPerformanceList()
    }
  }
}
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
    padding-top:0
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
    background:#ed7d31;
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
    transform: translateY(3px)
  }
  .radio_i+span {
    color: #333;
  }
  .radio_s{
    margin-left: 20px;
    border-radius: 0px;
  }
  .radio_s span{
    border-radius: 0px;
  }
</style>
