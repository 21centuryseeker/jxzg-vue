/*
  公共的画像方法

*/
class chartCommon {
  // pie
  getPie (_this, url, id, dom, bool) {
    _this.$ajaxGet(
      url,
      {id: id},
      res => {
        if (res.success) {
          res.data.series[0].radius = ['0%', '60%']
          res.data.series[0].center = ['50%', '60%']
          let formatter = '{b}({c}' + (res.data.unit || '') + ')'
          if (bool) {
            formatter = '{b}({d}%)'
          }
          res.data.series[0].label = {
            normal: {
              show: true,
              formatter: formatter
            }
          }
          _this.$ChartUtil.drawChartNoXY(dom, res.data.title, [], _this.$ChartUt.VERTICAL, res.data.series, [], {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}' + (res.data.unit || '') + ' ({d}%)'
            }
          }, _this)
        } else {
          _this.$message({
            type: 'error',
            message: res.msg
          })
        }
      }
    )
  }
  // circle
  getCircle (_this, url, id, dom, bool) {
    _this.$ajaxGet(
      url,
      {id: id},
      res => {
        if (res.success) {
          res.data.series[0].radius = ['45%', '60%']
          res.data.series[0].center = ['50%', '60%']
          let formatter = '{b}({c}' + (res.data.unit || '') + ')'
          if (bool) {
            formatter = '{b}({d}%)'
          }
          res.data.series[0].label = {
            normal: {
              show: true,
              formatter: formatter
            }
          }
          _this.$ChartUtil.drawChartNoXY(dom, res.data.title, [], _this.$ChartUt.VERTICAL, res.data.series, [], {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}' + (res.data.unit || '') + ' ({d}%)'
            }
          }, _this)
        } else {
          _this.$message({
            type: 'error',
            message: res.msg
          })
        }
      }
    )
  }
  getLineOrBar (_this, url, id, dom, rot, option) {
    _this.$ajaxGet(
      url,
      {id: id},
      res => {
        if (res.success) {
          let xrotate
          if (res.data.xAxis.length > 6) {
            xrotate = -30
          } else {
            xrotate = 0
          }
          let options = {
            legend: {
              y: '20',
              data: res.data.legend
            },
            yAxis: [
              {
                type: 'value',
                name: '（' + (res.data.unit || '') + '）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{c0}' + (res.data.unit || '')
            },
            grid: {
              x: 30,
              x2: 30,
              y: 60,
              y2: 60
            },
            customattrs: {xrotate: (rot? rot : xrotate)}
          }
          if (options) {
            Object.assign(options, option)
          }
          _this.$ChartUtil.drawChart(dom, res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, false, options, _this)
        } else {
          _this.$message({
            type: 'error',
            message: res.msg
          })
        }
      }
    )
  }
  getDataZoom (_this, url, id, dom, grid) {
    _this.$ajaxGet(
      url,
      {id: id},
      res => {
        if (res.success) {
          _this.$ChartUtil.drawChart(dom, res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, true, {
            yAxis: [
              {
                type: 'value',
                name: '（' + (res.data.unit || '') + '）'
              }
            ],
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{c0}' + (res.data.unit || '')
            },
            legend: {
              y: '20',
              data: res.data.legend
            },
            grid: grid
          }, _this)
        } else {
          _this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
    )
  }
  getOneLineBar (_this, url, id, dom, rot) {
    _this.$ajaxGet(
      url,
      {id: id},
      res => {
        if (res.success) {
          let xrotate
          if (res.data.xAxis.length > 6) {
            xrotate = -30
          } else {
            xrotate = 0
          }
          _this.$ChartUtil.drawChart(dom, res.data.title, res.data.legend, '', res.data.series, res.data.xAxis, false, {legend: {
            y: '20',
            data: res.data.legend
          },
          yAxis: [
            {
              type: 'value',
              name: '（' + (res.data.unit || '') + '）'
            }
          ],
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{c0}' + (res.data.unit || '')
          },
          grid: {
            x: 30,
            x2: 30,
            y: 80,
            y2: 50
          },
          customattrs: {xrotate: (rot? rot : xrotate)}
          }, _this)
        } else {
          _this.$message({
            type: 'error',
            message: res.msg
          })
        }
      }
    )
  }
  getMoreLineOrBar (obj) {
    let { _this, url, id, dom, type, option } = obj
    _this.$ajaxGet(
      url,
      {id: id},
      res => {
        if (res.success) {
          let series = []
          for (let key in res.data.series) {
            series.push({
              type: type || 'bar',
              name: key,
              data: res.data.series[key]
            })
          }
          _this.$ChartUtil.drawChart(
            dom,
            res.data.title,
            res.data.legend,
            '',
            series,
            res.data.xAxis,
            false,
            option || {
              yAxis: [
                {
                  type: 'value',
                  name: '（' + (res.data.unit || '') + '）'
                }
              ],
              grid: {
                x: 30,
                x2: 90,
                y: 80,
                y2: 80
              },
              tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{a0}:{c0}' + (res.data.unit || '') + '<br/>{a1}:{c1}' + (res.data.unit || '')
              },
              customattrs: {xrotate: -30}
            },
            _this
          )
        } else {
          _this.$message({
            type: 'error',
            message: res.msg
          })
        }
      }
    )
  }
  // 获取有二级标题的
  getSubText (_this, url,  id1, id2, dom) {
    _this.$ajaxGet(url, {id: id1}, (res1) => {
      if (res1.success) {
        _this.$ajaxGet(url, {id: id2}, (res) => {
          if (res.success) {
            _this.$ChartUtil.drawChart(
            dom,
            res.data.title,
            [],
            _this.$ChartUt.VERTICAL,
            res.data.series,
            res.data.xAxis,
            false,
            {
              title: {
                text: res.data.title,
                subtext: res1.data.title+':{a|' + res1.data.value1 + '}',
                left: '2%',
                textStyle: {
                  fontStyle: 'normal',
                  fontWeight: 'lighter',
                  fontFamily: 'san-serif',
                  fontSize: 16
                },
                subtextStyle: {
                  rich: {
                    a: {
                      color: '#70ad47'
                    }
                  }
                }
              }, 
              yAxis : (res.data.unit ? [
                {
                  type : 'value',
                  name :'（'+(res1.data.unit || '')+'）'
                }
              ] : [{
                  type : 'value',
                  name :''
                }]),
              tooltip : {
                trigger: 'axis',
                formatter : '{b}<br/>{c0}' + (res1.data.unit || '')
              },
              grid: {
                x: 30,
                y: 100,
                x2: 30,
                y2: 60
              }
            },
            _this
          )
          } else {
            _this.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
    })
  }
}
export default new chartCommon()