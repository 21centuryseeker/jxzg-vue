<template>
  <div>
    <p>
        <button
         class="btn btn-default btn-block"
         data-toggle="lt-grid-only"
         data-target="#admin-grid"
         type="button"
         data-only="xs">
            xs
        </button>
        <button
         class="btn btn-default btn-block"
         data-toggle="lt-grid-only"
         data-target="#admin-grid"
         type="button"
         data-only="sm">
            sm
        </button>
        <button
         class="btn btn-default btn-block"
         data-toggle="lt-grid-only"
         data-target="#admin-grid"
         type="button"
         data-only="md">
            md
        </button>
        <button
         class="btn btn-default btn-block"
         data-toggle="lt-grid-only"
         data-target="#admin-grid"
         type="button"
         data-only="lg">
            lg
        </button>
    </p>

    <form id="admin-form">
        <div
         id="admin-grid"
         data-arrange="lt-grid"
         class="lt-container
                lt-xs-h-6
                lt-sm-h-4
                lt-md-h-3
                lt-lg-h-2">

            <div
             draggable="true"
             class="lt
                    lt-xs-x-0
                    lt-xs-y-0
                    lt-xs-w-1
                    lt-xs-h-1
                    lt-sm-x-0
                    lt-sm-y-0
                    lt-sm-w-1
                    lt-sm-h-1
                    lt-md-x-0
                    lt-md-y-0
                    lt-md-w-1
                    lt-md-h-1
                    lt-lg-x-0
                    lt-lg-y-0
                    lt-lg-w-1
                    lt-lg-h-1">
                <div class="lt-body note">
                    <h3>1</h3>

                    <input type="hidden" name="item[1][xs][x]" value=0 data-xs-x>
                    <input type="hidden" name="item[1][xs][y]" value=0 data-xs-y>

                    <input type="hidden" name="item[1][sm][x]" value=0 data-sm-x>
                    <input type="hidden" name="item[1][sm][y]" value=0 data-sm-y>

                    <input type="hidden" name="item[1][md][x]" value=0 data-md-x>
                    <input type="hidden" name="item[1][md][y]" value=0 data-md-y>

                    <input type="hidden" name="item[1][lg][x]" value=0 data-lg-x>
                    <input type="hidden" name="item[1][lg][y]" value=0 data-lg-y>

                </div>
            </div>
            <div
             draggable="true"
             class="lt
                    lt-xs-x-0
                    lt-xs-y-1
                    lt-xs-w-1
                    lt-xs-h-2
                    lt-sm-x-1
                    lt-sm-y-0
                    lt-sm-w-1
                    lt-sm-h-2
                    lt-md-x-2
                    lt-md-y-0
                    lt-md-w-1
                    lt-md-h-2
                    lt-lg-x-1
                    lt-lg-y-0
                    lt-lg-w-1
                    lt-lg-h-2">
                <div class="lt-body note">
                    <h3>2</h3>

                    <input type="hidden" name="item[2][xs][x]" value=0 data-xs-x>
                    <input type="hidden" name="item[2][xs][y]" value=1 data-xs-y>

                    <input type="hidden" name="item[2][sm][x]" value=1 data-sm-x>
                    <input type="hidden" name="item[2][sm][y]" value=0 data-sm-y>

                    <input type="hidden" name="item[2][md][x]" value=2 data-md-x>
                    <input type="hidden" name="item[2][md][y]" value=0 data-md-y>

                    <input type="hidden" name="item[2][lg][x]" value=1 data-lg-x>
                    <input type="hidden" name="item[2][lg][y]" value=0 data-lg-y>

                </div>
            </div>
            <div
             draggable="true"
             class="lt
                    lt-xs-x-0
                    lt-xs-y-3
                    lt-xs-w-1
                    lt-xs-h-1
                    lt-sm-x-0
                    lt-sm-y-1
                    lt-sm-w-1
                    lt-sm-h-1
                    lt-md-x-1
                    lt-md-y-0
                    lt-md-w-1
                    lt-md-h-1
                    lt-lg-x-0
                    lt-lg-y-1
                    lt-lg-w-1
                    lt-lg-h-1">
                <div class="lt-body note">
                    <h3>3</h3>

                    <input type="hidden" name="item[3][xs][x]" value=0 data-xs-x>
                    <input type="hidden" name="item[3][xs][y]" value=3 data-xs-y>

                    <input type="hidden" name="item[3][sm][x]" value=0 data-sm-x>
                    <input type="hidden" name="item[3][sm][y]" value=1 data-sm-y>

                    <input type="hidden" name="item[3][md][x]" value=1 data-md-x>
                    <input type="hidden" name="item[3][md][y]" value=0 data-md-y>

                    <input type="hidden" name="item[3][lg][x]" value=0 data-lg-x>
                    <input type="hidden" name="item[3][lg][y]" value=1 data-lg-y>

                </div>
            </div>
            <div
             draggable="true"
             class="lt
                    lt-xs-x-0
                    lt-xs-y-4
                    lt-xs-w-1
                    lt-xs-h-2
                    lt-sm-x-0
                    lt-sm-y-2
                    lt-sm-w-2
                    lt-sm-h-2
                    lt-md-x-0
                    lt-md-y-1
                    lt-md-w-2
                    lt-md-h-2
                    lt-lg-x-2
                    lt-lg-y-0
                    lt-lg-w-2
                    lt-lg-h-2">
                <div class="lt-body note">
                    <h3>4</h3>

                    <input type="hidden" name="item[4][xs][x]" value=0 data-xs-x>
                    <input type="hidden" name="item[4][xs][y]" value=4 data-xs-y>

                    <input type="hidden" name="item[4][sm][x]" value=0 data-sm-x>
                    <input type="hidden" name="item[4][sm][y]" value=2 data-sm-y>

                    <input type="hidden" name="item[4][md][x]" value=0 data-md-x>
                    <input type="hidden" name="item[4][md][y]" value=1 data-md-y>

                    <input type="hidden" name="item[4][lg][x]" value=2 data-lg-x>
                    <input type="hidden" name="item[4][lg][y]" value=0 data-lg-y>

                </div>
            </div>
        </div>

        <div class="wy-control-group">
            <label for="result">
                Save inputs
                <small> visualize input data </small>
            </label>
            <div class="wy-control">
                <textarea
                 id="result"
                 name="result"
                 rows="7"></textarea>
            </div>
        </div>

        <p>
            <button
             type="submit"
             class="btn">
                Save
            </button>
        </p>
    </form>
    <el-tabs v-model="activeName" >
    <el-tab-pane label="数据下钻" name="first">
      <h2>数据下钻</h2>
    <div style="margin-left:40%;margin-top:2%">
        <button id='return-button' value='' @click="returnBefore" v-if="ifShow">返回</button>
      </div>
      <div id="container" style="height: 500px"></div>
    </el-tab-pane>
    <el-tab-pane label="自定义x轴" name="second">
      <h2>选择要分析的字段</h2>
        <ul class="ul_list" style="display: inline-block;">
      <li v-for="item in list1" @dragstart="dragstart($event, item)" draggable="true" :key="item.value">{{item.name}}</li>
    </ul>
      <div style="display: inline-block;width: 200px;vertical-align: top;margin-left: 30px;">
      <h2>图例(系列)</h2>
      <ul class="ul_list" @dragover.prevent="dragover($event)" @drop="drop($event)">
        <li v-for="item in list2" :key="item.value">{{item.name}}</li>
      </ul>
    </div>
        <div style="display: inline-block;width: 200px;vertical-align: top;margin-left: 30px;">
      <h2>轴(类别)</h2>
      <ul class="ul_list three" @dragover.prevent="dragover($event)" @drop="drop2($event)">
        <li v-for="item in list3" :key="item.value">{{item.name}}</li>
      </ul>
      </div>
      <div style="display: inline-block;width: 200px;vertical-align: top;margin-left: 30px;">
      <h2>值</h2>
      <ul class="ul_list three" @dragover.prevent="dragover($event)" @drop="drop3($event)">
        <li v-for="item in list4" :key="item.value">{{item.name}}</li>
      </ul>
      </div>
      <div style="display: inline-block;width: 200px;vertical-align: top;margin-left: 30px;">
      <h2>计算类型</h2>
      <el-select v-model="select_value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      <!-- <select v-model="select_value">
        <option value="2">计数</option>
        <option value="1">求和</option>
        <option value="3">平均值</option>
        <option value="4">最大值</option>
        <option value="5">最小值</option>
      </select> -->
      </div>
      <!-- 搜索按钮 -->
      <button @click="btn" style="width: 100px;height: 32px;">搜索</button>
      <!-- 加载chart -->
      <div id="chart">

      </div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: '',
      list1: [{name: '性别代码', value: 'XBDM'}, {name: '单位代码', value: 'DWDM'}, {name: '学历代码', value: 'XLDM'}],
      list2: [],
      list3: [],
      list4: [],
      myChart: {},
      ifShow: false,
      activeName: 'first',
      select_value: '2',
      options: [
        {
          label: '计数',
          value: '2'
        },
        {
          label: '求和',
          value: '1'
        },
        {
          label: '平均值',
          value: '3'
        },
        {
          label: '最大值',
          value: '4'
        },
        {
          label: '最小值',
          value: '5'
        }
      ]
    }
  },
  mounted () {
    let p = this.$http({
      type: 'get', 
      url: '/tr/rcpy/web/getRcpy'
    })
    p.then((res) => {
      console.log(res)
    })
    this.returnBefore()
    // var dom = document.getElementById('container')
    // var myChart = this.$echarts.init(dom)
    // let drillDown = this.drildown(dom)
    // var option = drillDown.getOption()
    // drillDown.initChart(myChart, option)

    // $('#return-button').on('click', function () {
    //   var myChart = this.$echarts.init(dom)
    //   var option = drillDown.getOption()
    //   drillDown.initChart(myChart, option)
    // })
    $('#admin-form').on('submit', function (event) {
            event.preventDefault()

            $('#result').val(decodeURIComponent($('#form').serialize()))
        })

        $('#admin-grid').on('update', function () {
            $('#admin-grid .lt').each(function () {
                $(this).find('[data-xs-x]').val($(this).ltRect('xs').x)
                $(this).find('[data-xs-y]').val($(this).ltRect('xs').y)

                $(this).find('[data-sm-x]').val($(this).ltRect('sm').x)
                $(this).find('[data-sm-y]').val($(this).ltRect('sm').y)

                $(this).find('[data-md-x]').val($(this).ltRect('md').x)
                $(this).find('[data-md-y]').val($(this).ltRect('md').y)

                $(this).find('[data-lg-x]').val($(this).ltRect('lg').x)
                $(this).find('[data-lg-y]').val($(this).ltRect('lg').y)

            })
        })
  },
  methods: {
    returnBefore () {
      var dom = document.getElementById('container')
      var myChart = this.$echarts.init(dom)
      let drillDown = this.drildown(dom)
      var option = drillDown.getOption()
      drillDown.initChart(myChart, option)
    },
    dragstart (ev, item) {
      this.item = item
    },
    dragover (ev) {
      // console.log(ev)
      // console.log()
    },
    drop (ev) {
      ev.preventDefault()
      this.list2 = []
      this.list2.push(this.item)
    },
    drop2 (ev) {
      ev.preventDefault()
      this.list3 = []
      this.list3.push(this.item)
    },
    drop3 (ev) {
      ev.preventDefault()
      this.list4 = []
      this.list4.push(this.item)
    },
    showEveryChart (data, ele) {
      this.myChart = this.$echarts.init(ele)
      let option = {
        // color: this.colorArr[this.colorIndex],
        legend: {
          data: data.legend,
          y: 'top',
          type: 'scroll'
          // bottom: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            z: 999999999
          }
        },
        grid: {
          x: 100,
          x2: 80,
          y2: 80
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: data.list > 10 ? 2 : 35
          },
          {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: data.list > 10 ? 2 : 35
          }
        ],
        toolbox: {
          show: true,
          right: '30',
          top: '20',
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        // grid: {
        //   left: '3%',
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true
        // },
        // xAxis: [
        //   {
        //     type: 'category',
        //     data: data.datax,
        //     axisTick: {
        //       alignWithLabel: true
        //     }
        //   }
        // ],
        // yAxis: [
        //   {
        //     type: 'value'
        //   }
        // ],
        series: [
          {
            name: '',
            // type: 'bar',
            // barWidth: '60%',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
            // data: data.datay
          }
        ]
      }
      let series = []
      for (let item of data.list) {
        series.push({
          name: item.name,
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: item.data
        })
      }
      // 柱形图
      // for (let item of option.series) {
      //   item.type = 'bar'
      //   item.data = data.list.data
      // }
      option.series = series
      // option.series.type = 'bar'
      option.xAxis = [
        {
          type: 'category',
          data: data.xAxis,
          axisTick: {
            alignWithLabel: true
          }
        }
      ]
      option.yAxis = [
        {
          type: 'value'
        }
      ]
      option.toolbox.feature.magicType = {show: true, type: ['bar', 'line']}
      this.myChart.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart.resize()
      })
    },
    btn () {
      let data = {
        series: this.list2[0].value,
        xAxis: this.list3[0].value,
        type: this.select_value,
        yAxis: this.list4[0].value
      }
      // tr/test/web/testShow
      this.$ajax('post', this.HOST + '/tr/test/web/testShow', data, (res) => {
        if (res.success) {
          if (this.myChart.clear) {
            this.myChart.clear()
          }
          this.showEveryChart(res.obj.data, document.getElementById('chart'))
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // drildown
    drildown (dom) {
      let _this = this
      var drillDown = {
        getOption: function () {
          var option = null
          option = {
            color: ['#70ab47'],
            title: {
              text: '折线图下钻示例',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}'
            },
            // legend: {
            //   left: 'center',
            //   data: ['月数据']
            // },
            xAxis: {
              type: 'category',
              name: '',
              splitLine: {show: false},
              data: ['201801', '201802', '201803', '201804', '201805']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            yAxis: {
              type: 'log',
              name: ''
            },
            series: [
              {
                name: '',
                type: 'line',
                data: [8, 16, 32, 64, 128],
                id: JSON.stringify([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}, {id: 5, name: 'e'}]),
                symbolSize: 10,
                lineStyle: {
                  width: '3'
                }
              }
            ]
          }
          return option
        },
        initChart: function (myChart, option) {
          _this.ifShow = false
          myChart.setOption(option)
          myChart.on('click', function (object) {
            _this.ifShow = true
            // console.log(object.dataIndex)
            let index = object.dataIndex + 1
            // 销毁之前的echarts实例
            _this.$echarts.dispose(dom)
            // 初始化一个新的实例
            var myChart = _this.$echarts.init(dom)
            // object为当前的这个echart对象，大家可以自己打印出来看看
            // console.dir(object);
            // 我们可以看到name属性即为当前点击点的对应月份值，那么我们可以通过这个值去接口查询对应201609月份下的每一天的值.
            // 此处的201609月份数据可以通过接口读取
            // $.ajax(
            //     type : 'get',
            //     url : interfaceUrl + '&month=' + object.name, // 此处可以替换为你的接口地址
            //     dataType : 'json',
            //     success : function (msg){
            //         option.xAxis.data = msg.xAxis;
            //         option.series[0].data = msg.yAxis[0];
            //         myChart.setOption(option, true);
            //     }
            // );

            // 我这里就模拟一个测试数据，做为demo演示
            option.xAxis.data = [
              '2018-0' + index + '-01', '2018-0' + index + '-02', '2018-0' + index + '-03', '2018-0' + index + '-04', '2018-0' + index + '-05', '2018-0' + index + '-06', '2018-0' + index + '-07', '2018-0' + index + '-08',
              '2018-0' + index + '-09', '2018-0' + index + '-10', '2018-0' + index + '-11', '2018-0' + index + '-12', '2018-0' + index + '-13', '2018-0' + index + '-14', '2018-0' + index + '-15', '2018-0' + index + '-16',
              '2018-0' + index + '-17', '2018-0' + index + '-18', '2018-0' + index + '-19', '2018-0' + index + '-20', '2018-0' + index + '-21', '2018-0' + index + '-22', '2018-0' + index + '-23', '2018-0' + index + '-24',
              '2018-0' + index + '-25', '2018-0' + index + '-26', '2018-0' + index + '-27', '2018-0' + index + '-28', '2018-0' + index + '-29', '2018-0' + index + '-30'
            ]
            option.series[0].data = [
              3, 4, 5, 6, 5, 6, 7, 8, 8, 9,
              12, 13, 15, 16, 20, 12, 30, 21, 22, 29,
              30, 31, 33, 34, 35, 36, 20, 29, 33, 40
            ]
            myChart.setOption(option, true)
          })
        }
      }
      return drillDown
    }
  }
}
</script>
<style scoped>
.ul_list {
  min-height: 50px;
  width: 200px;
  background: #70ab47;
  margin-bottom: 30px;
}
.ul_list.three {
  background: #70ab47;
}
  .ul_list li {
    background: #70ab47;
    border: 1px solid #e0e0e0;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
  }
  div.div_left {
    display: inline-block;
    vertical-align: top;
  }
  div.div_right {
    display: inline-block;
    vertical-align: top;
  }
  #chart {
    width: 100%;
    height: 400px;
  }
  #admin-grid div {
    background: pink;
  }
</style>
