function dataOption (timelist, zxlist, ybmlist, zytblist) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['咨询', '预报名', '志愿填报'],
      // data: ['报到', '咨询', '预报名', '志愿填报'],
      right: 0
    },
    color: ['#58ce8b', '#64d0e5', '#fe7c7d'],
    // color: ['#6eaee3','#58ce8b','#64d0e5','#fe7c7d'],
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center'
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: timelist
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      // {
      //     name: '报到',
      //     type: 'bar',
      //     barGap: 0,
      //     data: [320, 332, 301, 334, 390],
      //     barWidth: 26
      // },
      {
        name: '咨询',
        type: 'bar',
        data: zxlist
        // barWidth: 26
      },
      {
        name: '预报名',
        type: 'bar',
        data: ybmlist
        // barWidth: 26
      },
      {
        name: '志愿填报',
        type: 'bar',
        data: zytblist
        // barWidth: 26
      }
    ]
  }
  return option
}

export default dataOption
