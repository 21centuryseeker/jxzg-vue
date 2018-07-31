<template>
  <!-- 后台自选 -->
      <div class="personnelBox" style="margin-top: 20px;" v-if="chartDates.length">
        <div class="titleTop">学校自选指标</div>
         <div class="personneGroup marginBto24">
            <el-row :gutter="20">
              <template v-for="(item, index) in chartDates">
              <el-col :span="12" :key="index" style="margin-bottom: 20px;">
                <div class="content_item boxShadow" :key="index">
                  <div class="content_item_title">{{item.title}}</div>
                  <div class="chart_box big" style="position: relative">
                    <!-- <i title="删除" class="iconfont" style="position: absolute;z-index: 2;top: 8px;right: 10px;cursor: pointer;color: #f00;font-size: 18px;" @click="delete1(item.id)">&#xe635;</i> -->
                    <el-card class="box-card">
                    <div class="zxzb_chart_show" style="height: 430px;"></div>
                    </el-card>
                  </div>
                </div>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>
</template>
<script>
export default {
  data () {
    return {
      colorIndex: 0,
      colorArr: ['#70ad47', '#ed7d31', '#ffc000',
        '#4472c4', '#dd6969', '#00a6a6',
        '#6c6fbf', '#62a8ea', '#ffb980',
        '#d56290'
      ],
      chartDates: [],
    }
  },
  props: [ 'type' ],
  mounted () {
    this.getHistoryChart((this.type || 1))
  },
  methods: {
    // 获取后台自定义历史
    getHistoryChart (type) {
      this.$ajaxGet('/tr/GroupPortrait/web/getZxPortraitInfoById', {index_type: type}, (res) => {
        if (res.success) {
          this.chartDates = res.obj
          // 展示每一个chart
          setTimeout(() => {
            this.showChart()
          }, 150)
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    showChart () {
      this.colorIndex = 0
      for (let i = 0; i < this.chartDates.length; i++) {
        if (this.colorIndex > 9) {
          this.colorIndex = 0
        }
        let data = this.chartDates[i]
        let series = [{
          type: Math.random() > 0.5 ? 'bar' : 'line',
          data: data.datay
        }]
        this.$ChartUtil.drawChart(
            this.$echarts.init(document.getElementsByClassName('zxzb_chart_show')[i]),
            data.title,
            [],
            '',
            series,
            data.datax,
            true,
            {
              color: this.colorArr[this.colorIndex],
              toolbox: {
                show: true,
                right: '30',
                feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
                }
              },
              //  tooltip : {
              //     trigger: 'axis',
              //     formatter : '{b}<br/>{c0}个'
              // },
              grid: {
                x: 33,
                y:70,
                x2: 30,
                y2: 100
              }
            },
            this
          )
          this.colorIndex++
      }
    },
  }
}
</script>
<style scoped>
.titleTop {
  line-height: 18px;
  padding-top: 0;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
.content_item {
  /* height: 390px; */
  background:#fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
  display: none;
}
</style>
