<template>
  <!-- 历史部分 -->
      <div >
        <div v-if="flag!=0">
          <div class="titleTop"  v-if="content_xz.length!=0">自选指标</div>
        </div>

        <template v-if="content_xz.length==0&&flag==0">
            <div  class="nodataPic_zg">
              <img src="../../../assets/empty.jpg"/>
           </div>
        </template>
        <template v-else>
            <div  class="w_tableBoxA">
              <el-row :gutter="20">
                <template  v-for="(item,index) in content_xz">
                    <el-col :span="12" :key="index">
                    <el-card class="box-card">
                      <i class="iconfont close_i" @click="deleteFunc(item.id, item.type)" title="删除分析项">&#xe635;</i>
                      <div  class="xz_xgx_pic" style="height:400px"></div>
                    </el-card>
                  </el-col>
                </template>
              </el-row>
            </div>
        </template>
      </div>
</template>
<script>
export default {
  data () {
    return {
      job: '',//角色
     jobItems: [],//部门
     dialogVisible:false,//弹窗的开关
     historyFlag:true,//是否有历史纪录
     content_xz:[],//历史纪录的渲染容器
    //  chartDates:[],//历史画像的容器
     colorIndex: 0,
     colorArr: ['#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#a5a5a5', '#dd6969', '#00a6a6'],//颜色容器
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
      addBzFlag:true,
      baseUrl: this.HOST + '/tr/indexChart/web/getIndexConfig?flag=',
      chartBaseUrl: this.HOST + '/tr/indexChart/web/getChartDataById?id=',
      xzBaseUrl: this.HOST + '/tr/trXzIndexConfig/web/getIndexConfig?flag=',
      xzChartBaseUrl: this.HOST + '/tr/trXzIndexConfig/web/getChartDataById?id=',
    }
  },
  props: ['flag'],
  mounted () {
    this.historyFn(this.baseUrl,this.chartBaseUrl, 1)
    this.historyFn(this.xzBaseUrl,this.xzChartBaseUrl, 2)
  },
  methods: {
    // 默认进入的历史回显
    historyFn (baseUrl,chartBaseUrl, type) {
      let self = this
        this.content_xz=[]
        self.$ajax('get', baseUrl + this.flag, {},
          (res) => {
            if (res.success) {
              if (res.obj.length>0) {
                // 将每一个的里面的图表放到一个对象里面
                for (let item of res.obj) {
                  self.$ajax('get', chartBaseUrl+item, {},
                    (res) => {
                      if (res.success) {
                        if (res.data) {
                          (() => {
                            res.data.id = item
                            res.data.type = type
                            this.content_xz.push(res.data)
                            this.xgx_picfn(res.data, this.content_xz.length)
                          })()
                        }
                      } else {
                        self.$message({
                          type: 'error',
                          message: res.msg
                        })
                      }
                    }
                  )
                }
              }
            } else {
              self.$message({
                message: res.msg,
                type: 'error'
              })

            }
          }
        )
    },
    // 历史纪录生成图标
    xgx_picfn (chartDate, i) {
        setTimeout(() => {
           this.showEveryChart(chartDate, document.getElementsByClassName('xz_xgx_pic')[i-1])
        }, 150)
    },
    // 生成图表
    showEveryChart (data, ele) {
      this.colorIndex ++
       if(this.colorIndex>6){
          this.colorIndex=0
        }
       let series=data.series[0].data
       if(data.series){
        let myChart = this.$echarts.init(ele)
        var option = {
          title: {
              show: 'true',
              left: '2%',
              text: data.title,
              textStyle: {// 标题内容的样式
              fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
              fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
              fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
              fontSize: 16// 主题文字字体大小，默认为16px
              }
          },
          tooltip: {
            trigger: 'axis',
            formatter : '{b}：{c0}'
          },
          toolbox: {
            show: false,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
                axisLine: {
                  lineStyle: {
                    color: '#777'
                  }
                },
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
                data:data.xAxis
            }
          ],
          yAxis: [
            {
              type: 'value',
              // name :'（个）',
              axisLine: {
                lineStyle: {
                  color: '#777'
                }
              }
            }
          ],
          calculable: false,
          dataZoom: {
            show: true,
            realtime: true,
            dataBackground: { // 数据阴影的样式。
              lineStyle: {borderColor: 'red'}, // 阴影的线条样式
              areaStyle: {} // 阴影的填充样式
            },
            start: 30,
            end: 70,
            borderColor: '#70ad47',
            backgroundColor: 'white',
            fillerColor: 'rgba(167,183,204,0.4)'
          },
          series: [
            {
              name: '',
              type: 'bar',
              color: this.colorArr[this.colorIndex],
              // barWidth: '60%',
              label :{
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
              data: series
            }
          ]
        }
        myChart.setOption(option)
        window.addEventListener('resize', () => {
          myChart.resize()
        })

       }
    },
    // 删除历史图表
    deleteFunc (id,type) {
      console.log(type)
      let self = this
      this.$confirm(
        '您确定要删除吗？删除后,不可恢复', '删除确认',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(type==1){
             self.$ajax('get', self.HOST + '/tr/indexChart/web/delChartConfigById?id='+id, {}, (res) => {
              if (res.success) {
                self.$message({
                  message: res.msg,
                  type: 'success'
                })
              // self.historyFn(self.baseUrl,self.chartBaseUrl, 1)
               self.historyFn(self.baseUrl,self.chartBaseUrl, 1)
              self.historyFn(self.xzBaseUrl,self.xzChartBaseUrl, 2)
              } else {
                self.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            })
          }else{
            self.$ajax('get', self.HOST + '/tr/trXzIndexConfig/web/delChartConfigById?id='+id, {}, (res) => {
              if (res.success) {
                self.$message({
                  message: res.msg,
                  type: 'success'
                })
              // self.historyFn(self.xzBaseUrl,self.xzChartBaseUrl, 2)
               self.historyFn(self.baseUrl,self.chartBaseUrl, 1)
               self.historyFn(self.xzBaseUrl,self.xzChartBaseUrl, 2)
               } else {
                self.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            })
          }


      }).catch(() => {

      })
    },
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
.titleTop {
  line-height: 18px;
  padding-top: 0;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
</style>
