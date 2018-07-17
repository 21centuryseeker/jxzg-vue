<template>
  <div>
    <div class="container_box_header" >诊改驾驶舱</div>
    <div class="bg_box">
      <div class="jsc_content">
        <div class="content_item">
          <div class="content_item_title">素质教育</div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="chart_2 chart_show boxShadow" style="height: 407px;" id="chart_2">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="chart_3 chart_show boxShadow" style="height: 407px;" id="chart_3">
                    <div style="background: #fff;text-align: center;">
                <img src="../../../assets/empty.jpg" alt="">
            </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chart_color: [
        '#70ad47',
        '#ed7d31',
        '#ffc000',
        '#a5a5a5',
        '#4472c4',
        '#dd6969',
        '#00a6a6',
        '#6c6fbf',
        '#62a8ea',
        '#ffb980',
        '#d56290',
        '#c4ccd3',
        '#ed7d31',
        '#ffc000',
        '#a5a5a5',
        '#4472c4',
        '#dd6969',
        '#00a6a6',
        '#6c6fbf',
        '#62a8ea',
        '#ffb980',
        '#d56290',
        '#c4ccd3'
      ]
    }
  },
  computed: {

  },
  mounted () {
    this.$ajax(
      'post',
      this.HOST + '/tr/trCockpit/web/getChartDataById',
      {
        chartId: 1
      },
      res => {
        if (res.success) {
          let series = [
            {
              name: '学生人数',
              type: 'bar',
              data: res.obj.datay2List
            },
            {
              name: '教师人数',
              type: 'bar',
              data: res.obj.datay1List
            }
          ]
          this.$ChartUtil.drawChart('chart_2', res.obj.title, [], '', series, res.obj.dataxList, false, {
            toolbox: {
              show: true,
              right: '30',
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}人)'
            },
            yAxis: [
              {
                type: 'value',
                name: '（人）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: '{b}<br/>{a0}:{c0}人<br/>{a1}:{c1}人'
            },
            legend: {
              data: ['学生人数', '教师人数'],
              y: 30
            }
          }, this)
        }
      }
    )
    this.$ajax(
      'post',
      this.HOST + '/tr/trCockpit/web/getChartDataById',
      {
        chartId: 2
      },
      res => {
        if (res.success) {
          let series = [
            {
              name: '学生人数',
              type: 'bar',
              data: res.obj.datayList
            }
          ]
          this.$ChartUtil.drawChart('chart_3', res.obj.title, [], '', series, res.obj.dataxList, false, {
            toolbox: {
              show: true,
              right: '30',
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}人)'
            },
            yAxis: [
              {
                type: 'value',
                name: '（人）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              // },
              formatter: '{b}<br/>{c0}人'
            }
          }, this)
        }
      }
    )
  },
  methods: {

  }
}
</script>
<style scoped>
.tab-control {
  width: 100%;
  font-size: 14px;
  color: #76838f;
  background-color: #fff;
  border-bottom: 1px solid #e4eaec;
  /* margin-bottom: 26px; */
}
.tab-control .tab-control-item div {
  line-height: 38px;
  float: left;
  padding: 0 25px;
  background-color: #fff;
  border-right: 1px solid #fff;
  cursor: pointer;
}
.tab-control .tab-control-item .active {
  position: relative;
  top: 1px;
  height: 39px;
  background-color: #f1f4f5;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #f1f4f5;
}
/* .slgl_box {
  padding: 0 0 0 20px;
  background: #eef1f2;
} */
.container_box_header {
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
  padding-left: 20px;
}
.col_item_father {
  font-size: 0;
}
.col_item_box:nth-of-type(1) {
  padding-left: 0;
}
.col_item_box {
  height: 134px;
  display: inline-block;
  width: 20%;
  position: relative;
  box-sizing: border-box;
  /* padding: 0 10px; */
  padding-left: 10px;
  vertical-align: top;
}
.col_item_box.three {
  width: 33.33%;
}
.col_item_box.four {
  width: 25%;
}
.col_item_box > div {
  position: relative;
  height: 134px;
  box-sizing: border-box;
  vertical-align: top;
  background: #fff;
  border-radius: 4px;
}
.col_item_box.theAll > div {
  background: #70ad47;
  color: #fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  height: 16px;
  border-left: 4px solid #70ad47;
  line-height: 16px;
  padding-left: 10px;
  margin: 15px 0;
}
.col_item_box_left i.iconfont {
  font-size: 47px;
  vertical-align: top;
}
div.col_item_box_left {
  width: 70px;
  line-height: 134px;
  text-align: center;
}
div.col_item_box_right {
  width: 100%;
  box-sizing: border-box;
  padding-left: 70px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #a3afb7;
}
.col_item_box.theAll div.col_item_box_right {
  color: #fff;
}
div.col_item_box_right > div:first-child {
  margin-top: 39px;
}
div.col_item_box_right > div > span {
  font-size: 24px;
  color: #526069;
}
.col_item_box.theAll div.col_item_box_right > div > span {
  color: #fff;
}
div.col_item_box_right > div:first-child + div {
  margin-top: 5px;
}
div.chart_show {
  background: #fff;
  margin-top: 18px;
  padding: 20px;
}
div.title {
  height: 60px;
  line-height: 60px;
  background: #fff;
  margin-top: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 20px;
}
.xb_items {
  text-align: center;
}
.xb_items_span_num {
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  border-radius: 3px;
  background: #a6a6a6;
  margin-left: 28px;
}
.xb_items_span_grade {
  font-size: 24px;
  color: #ed7d31;
  margin-left: 20px;
}
.nj_name {
  text-align: center;
  font-size: 14px;
}
.xb_items_span_nj {
  color: #999;
}
.xb_items_name {
  color: #444;
}
.xb_items_zy {
  color: #999;
  text-align: center;
}
/* .chart_box {
    position: relative;
}
.textTitle{
     color: #37474f;
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    left: 20px;
    top: 20px;
    width: 100%
 } */
</style>
