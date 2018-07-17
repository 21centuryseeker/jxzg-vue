<template>
  <div class="content-study  _content-study">

    <div class="first card" id="first" style="height: 400px;width: 100%">
    </div>
    <div class="second-content">
      <div class="second card" id="first-second" style="height: 300px;width: 49.5%">

      </div>
      <div class="second card" id="second-second" style="height: 300px;width: 49.5%">

      </div>
    </div>
    <div style="clear: both"></div>
    <div class="first card last" id="last" style="height: 400px;width: 100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1'
    }
  },
  methods: {
    getSecondFirst: function () {
      let series = [
        {
          name: '男生',
          type: 'bar',
          itemStyle: {
            color: '#70ad47',
            line: '50px'
          },
          lineStyle: {
            width: 4
          },
          symbol: 'none',
          smooth: true, // 这句就是让曲线变平滑的
          data: (function () {
            var list = []
            for (var i = 1; i <= 20; i++) {
              list.push(Math.round(Math.random() * 1000))
            }
            return list
          }())
        },
        {
          name: '女生',
          type: 'bar',
          symbol: 'none',
          smooth: true, // 这句就是让曲线变平滑的
          itemStyle: {
            color: '#ed7d31'
          },
          lineStyle: {
            width: 4
          },
          data: (function () {
            var list = []
            for (var i = 1; i <= 20; i++) {
              list.push(Math.round(Math.random() * 1000))
            }
            return list
          }())
        }]
      var list = ['文学', '政法', '外国语', '数学与统计', '物理与电信工程', '化学化工',
        '生命科学与农学', '计算机科学与技术', '教育科学', '美术', '音乐舞蹈', '体育', '经济与管理', '新闻与传媒',
        '软件', '机械与电气工程', '网络工程', '设计', '马克思主义', '公共艺术与职业技能']
      // let legend = this.$ChartUt.RIGHT_TOP
      let legend = this.$ChartUt.CENTER_TOP
      this.$ChartUtil.drawChart('first-second', '在线学习学生专业分布', ['男生', '女生'], this.$ChartUt.HORIZONTAL, series, list, true, {legend: legend}, this, (param) => {
      })
    },
    getSecondSecond: function () {
      let first = document.getElementById('second-second')
      let continer = this.$echarts.init(first, 'wonderland')
      var labelTop1 = {
        normal: {
          color: '#ed7d31',
          label: {
            show: true,

            position: 'bottom',
            formatter: '{b}',
            textStyle: {
              baseline: 'bottom'
            }
          },
          labelLine: {
            show: false
          }
        }
      }
      var labelTop = {
        normal: {
          color: '#70ad47',
          label: {
            show: true,

            position: 'bottom',
            formatter: '{b}',
            textStyle: {
              baseline: 'bottom'
            }
          },
          labelLine: {
            show: false
          }
        }
      }
      var labelFromatter = {
        normal: {
          label: {
            formatter: function (params) {
              return 100 - params.value + '%'
            },
            textStyle: {
              baseline: 'top'
            }
          }
        }
      }
      var labelBottom = {
        normal: {
          color: '#ccc',
          label: {
            show: true,
            position: 'center'
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          color: 'rgba(0,0,0,0)'
        }
      }
      var radius = [80, 55]
      let option = {
        legend: {
          x: '37%',
          y: '80%',
          data: [
            '每周学习3次以上', '每周学习1小时以上'
          ]
        },
        title: {
          text: '在线学习学生时长',
          subtext: '',
          x: '5%',
          textStyle: {// 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 16// 主题文字字体大小，默认为18px
          }
        },
        series: [
          {
            type: 'pie',
            center: ['30%', '50%'],
            radius: radius,
            x: 'center', // for funnel
            itemStyle: labelFromatter,
            data: [
              {name: 'other', value: 46, itemStyle: labelBottom},
              {name: '每周学习3次以上', value: 54, itemStyle: labelTop1}
            ]
          },
          {
            type: 'pie',
            center: ['75%', '50%'],
            radius: radius,
            x: '75%', // for funnel
            itemStyle: labelFromatter,
            data: [
              {name: 'other', value: 56, itemStyle: labelBottom},
              {name: '每周学习1小时以上', value: 44, itemStyle: labelTop}
            ]
          }
        ]
      }

      continer.setOption(option)
    },
    getFirst: function () {
      var xdata = ['文学院', '政法学院', '外国语学院', '数学与统计学院', '物理与电信工程学院', '化学化工学院',
        '生命科学与农学学院', '计算机科学与技术学院', '教育科学学院', '美术学院', '音乐舞蹈学院', '体育学院', '经济与管理学院', '新闻与传媒学院',
        '软件学院', '机械与电气工程学院', '网络工程学院', '设计学院', '马克思主义学院', '公共艺术与职业技能教学部']
      let series = [
        {
          name: '男生',
          type: 'line',
          itemStyle: {
            color: '#70ad47',
            line: '50px'
          },
          lineStyle: {
            width: 4
          },
          data: (function () {
            var list = []
            for (var i = 1; i <= 20; i++) {
              list.push(Math.round(Math.random() * 1000))
            }
            return list
          }())
        },
        {
          name: '女生',
          type: 'line',
          itemStyle: {
            color: '#ed7d31'
          },
          lineStyle: {
            width: 4
          },
          data: (function () {
            var list = []
            for (var i = 1; i <= 20; i++) {
              list.push(Math.round(Math.random() * 1000))
            }
            return list
          }())
        }
      ]
      let legend = this.$ChartUt.RIGHT_TOP
      this.$ChartUtil.drawChart('first', '在线学习学生人数', ['男生', '女生'], this.$ChartUt.HORIZONTAL, series, xdata, true, {legend: legend}, this, (param) => {
      })
    },
    getLast: function () {
      let series = [
        {
          name: '工作日',
          type: 'line',
          itemStyle: {
            color: '#70ad47',
            line: '50px'
          },
          lineStyle: {
            width: 4
          },

          data: (function () {
            var list = []
            for (var i = 1; i <= 20; i++) {
              list.push(Math.round(Math.random() * 1000))
            }
            return list
          }())
        },
        {
          name: '休息日',
          type: 'line',
          itemStyle: {
            color: '#ed7d31'
          },
          lineStyle: {
            width: 4
          },
          data: (function () {
            var list = []
            for (var i = 1; i <= 20; i++) {
              list.push(Math.round(Math.random() * 1000))
            }
            return list
          }())
        }
      ]
      var list = ['6:00-7:00', '7:00-8:00', '8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-15:00',
        '15:00-18:00', '18:00-20:00', '20:00-21:00', '21:00-22:00', '22:00-24:00']
      let legend = this.$ChartUt.RIGHT_TOP
      this.$ChartUtil.drawChart('last', '在线学习时间分布', ['工作日', '休息日'], this.$ChartUt.HORIZONTAL, series, list, true, {legend: legend}, this, (param) => {
      })
    }
  },

  mounted: function () {
    this.getFirst()
    this.getSecondFirst()
    this.getSecondSecond()
    this.getLast()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-study{
    padding: 20px;
  }
  .card{
    box-shadow: 2px 2px 15px grey;
    background-color: white;

  }
  /*.second{*/
  /*float:left;*/
  /*}*/
  .second-content{
    margin-top: 15px
  }
  ._content-study{
    padding-top: 0;
  }
  .second-content :nth-child(1){
    padding-top: 15px;
    float: left;
  }
  .second-content :nth-child(2){
    padding-top: 15px;

    float: right;
  }
  #first{
    /*margin: 10px;*/
    padding: 20px 0;

  }
  .last{
    margin-top: 20px;
    padding-top: 20px;
  }
</style>
