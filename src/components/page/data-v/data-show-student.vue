<template>
<div class="data-show">
  <div class="wrapper">
    <div class="headerBox">
      <div class="bg_box clearfix">
        <div class="bg_box_L floatL"></div>
        <div class="bg_box_R floatR"></div>
      </div>
      <div class="inner">
        <i class="pic picL"></i>
        <i class="pic picR"></i>
        <div class="text">
          <div class="line lineL"></div>
          <div class="line lineR"></div>
          <h2 style="text-align: center">国防科技学校大屏展示监控系统</h2>
          <h5 style="text-align: center">内部质量保证体系诊断与改进</h5>
        </div>
      </div>
    </div>
    <!--headerBox end-->

    <div class="mainNav clearfix">
      <ul>
        <li :class="{'active':isShow==1}"><a href="javascript:void(0)" >课程画像</a></li>
        <li :class="{'active':isShow==2}"><a href="javascript:void(0)">专业画像</a>/</li>
        <li :class="{'active':isShow==3}"><a href="javascript:void(0)">学校画像</a>/</li>
      </ul>
      <ul class="mainNav_ulR">
        <li :class="{'active':isShow==4}"><a href="javascript:void(0)">教师画像</a>/</li>
        <li :class="{'active':isShow==5}"><a href="javascript:void(0)">学生画像</a>/</li>
        <li :class="{'active':isShow==6}"><a href="javascript:void(0)">驾驶舱</a></li>
      </ul>
    </div>
    <!--mainNav end-->

    <div class="mianWrapper clearfix">
      <!--左侧部分-->
      <div class="leftPart floatL">
        <div class="item" :class="{'item1':isShow ==2}">
          <h5 class="title">{{titleMap.title1}}</h5>
          <div id="chart_zsqk" class="chart_zsqk"></div>
        </div>
        <div class="item" :class="{'item1':isShow ==2}">
          <h5 class="title">{{titleMap.title2}}</h5>
          <div id="chart_2" class="chart_zsqk"></div>
        </div>
        <div class="item" v-if="isShow !=2" >
          <h5 class="title">{{titleMap.title3}}</h5>
          <div id="chart_3" class="chart_zsqk"></div>
        </div>
      </div>
      <!--左侧部分 end-->

      <!--中间部分-->
      <div class="MiddlePart  floatL">
        <div class="MiddlePart_inner" >
          <div class="MiddlePart_one bg_1b marginbot30">
            <h6 class="small_title marginbot30" style="background-color: #1b1b1b">{{bigTitle}}</h6>
            <ul class="clearfix" style="background-color: #1b1b1b">
              <li class="numPeoper" style="background-color: #1b1b1b">
                <div class="numGroup" style="background-color: #1b1b1b">
                  <span  v-for="(item,key) of value_xsrs_list" :key="key+'oo'">{{item}}</span>
                </div>
                <span style="background-color: #1b1b1b">{{sutil}}</span>
              </li>
              <li style="background-color: #1b1b1b">
                <p style="background-color: #1b1b1b">{{title1}}</p>
                <h6 style="background-color: #1b1b1b">{{c2}}</h6>
              </li>
              <li v-show="title2 != 999" style="background-color: #1b1b1b">
                <p style="background-color: #1b1b1b">{{title2}}</p>
                <h6 style="background-color: #1b1b1b">{{c3}}</h6>
              </li>
            </ul>
          </div>
          <div class="MiddlePart_one bg_1b marginbot30  countBox" v-if="isShow==2" >
            <template v-for="(item, index) in zybList">
              <div class="split-t" style="width: 100%;padding-right: 0;" :key="index">
                <el-card class="box-card clearfix">
                  <div class="countBoxR" style="width: 100%;background-color: #1b1b1b">
                    <p class="text" style="background-color: #1b1b1b;">
                      <i class="iconfont"  style="color: #ed7d31;background-color: #1b1b1b;font-size: 32px ">&#xe644;</i>
                      <span class="stitle">{{item.dept_name}}</span>
                    </p>
                    <div style="background-color: #1b1b1b;margin-top: 20px">
                      <table style="width: 100%;background-color: #1b1b1b" class="newZy_table">
                        <tbody style="background-color: #1b1b1b">
                        <tr >
                          <td align="left" >
                            <div >
                              <span>{{item.value1}}</span><span class="sname">专业数</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span>{{item.value2}}</span><span class="sname">教师数</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span>{{item.value3}}</span><span class="sname">学生数</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <span>{{item.value4}}</span><span class="sname">实训室数量</span>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </el-card>
              </div>
            </template>
          </div>
          <!--MiddlePart_one end-->

          <div class="MiddlePart_two">
            <h6 class="small_title marginbot30">{{titleMap.title4}}</h6>
            <div id="chart_sydfx"></div>
          </div>

        </div>
      </div>
      <!--中间部分end-->

      <!--右侧部分-->
      <div class="rightPart  floatL">
        <div class="item" :class="{'item1':isShow ==2}">
          <h5 class="title">{{titleMap.title5}}</h5>
          <div id="chart_bysjy" class="chart_zsqk"></div>
        </div>
        <div class="item" :class="{'item1':isShow ==2}">
          <h5 class="title">{{titleMap.title6}}</h5>
          <div id="chart_bysjy1" class="chart_zsqk"></div>
        </div>
        <div class="item" v-show="isShow !=2">
          <h5 class="title">{{titleMap.title7}}</h5>
          <div id="chart_bysjy2" class="chart_zsqk"></div>
        </div>
      </div>
      <!--右侧部分end-->
    </div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      isShow: 1,
      title1: '',
      title2: 999,
      title3: '',
      title4: '',
      title5: '',
      title6: '',
      title7: '',
      bigTitle: '',
      sutil: '',
      value_xsrs_list: [],
      c2: '',
      c3: '',
      titleMap: {},
      zybList: [],
      value_tzjk: 0,
      baseUrl: this.HOST + '/tr/GroupPortrait/web/getPortraitInfoById'
    }
  },
  watch: {
    isShow (val) {
      this.process(val)
      // console.log(val)
      // setTimeout(() => {
      //   this.process(val)
      // }, 4000)
    }
  },
  mounted () {
    this.qihuan()
  },
  methods: {

    processStudent: function (val) {
      this.baseAjax(66, '2017各专业部毕业生情况').then((res) => { this.graphByLine(res, 'chart_zsqk', 'title1') })
      this.baseAjax(56, '当前学年学生流失情况').then((res) => { this.graphByBing(res, 'chart_2', 'title2') })
      this.baseAjax(57, '历年学生流失情况').then((res) => { this.graphByLine(res, 'chart_3', 'title3') })
      this.baseAjax(54, '当前学年招生地域分布').then(this.graphByGEO)
      this.baseAjax(60, '学生违纪专业分布').then((res) => { this.graphByLine(res, 'chart_bysjy', 'title5') })
      this.baseAjax(61, '学生违纪情节分布').then((res) => { this.graphByBing(res, 'chart_bysjy1', 'title6') })
      this.baseAjax(62, '学生获奖分布').then((res) => { this.graphByBing(res, 'chart_bysjy2', 'title7') })
      this.baseAjax(53, '学生人数').then(this.graphByXueSheng)
    },
    graphByXueSheng: (res) => {
      this.value_xsrs_list = res.data.value1 + ''
      this.c2 = res.data.value2 + '%'
      this.sutil = '人'
    },

    graphByGEO: (res) => {
      this.$set(this.titleMap, 'title4', res.data.title)
      this.showMap(document.getElementById('chart_sydfx'), '', res.data.data)
    },
    graphByLine: function (res, el, titleKey) {
      this.$set(this.titleMap, titleKey, res.data.title)
      this.$ChartUtil.drawChartShow(el, '', res.data.legend, '', res.data.series, res.data.xAxis, false, {

      }, this, res.data.unit)
    },
    graphByBing: function (res, el, titleKey) {
      this.$set(this.titleMap, titleKey, res.data.title)
      // f-left-bottom-chart
      res.data.series[0].radius = ['0%', '60%']
      res.data.series[0].center = ['50%', '60%']
      res.data.series[0].label = {
        normal: {
          show: true,
          formatter: '{b}({c}' + res.data.unit + ')'
          // position: 'inside'
        }
      }
      this.$ChartUtil.drawChartNoXY(el, '', [], this.$ChartUt.VERTICAL, res.data.series, [], {}, this)
    },

    process: function (val) {
      // this.processSchool(val)
      // this.bigTitle = '固定资产'
      // this.title1 = '专业部数'
      // this.title2 = '教育特色项目'
      this.switch(val)
    },
    switch: function (val) {
      switch (val) {
        case 5: // 学生画像
          this.bigTitle = '在籍生总人数'
          this.title1 = '体质健康优质率'
          this.processStudent(val)
          break
      }
    },
    showMap (ele, title, data) {
      let myChart = this.$echarts.init(ele)
      let option = {
        title: {
          show: true,
          top: '2%',
          text: title,
          textStyle: {
            // 标题内容的样式
            fontStyle: 'normal', // 主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: 'lighter', // 可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: 'san-serif', // 主题文字字体，默认微软雅黑
            fontSize: 18 // 主题文字字体大小，默认为18px
          }
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            // var value = (params.value + '').split('.')
            // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
            if (params.data) {
              return params.name + ':' + params.data.value[2] + '人'
            } else {
              // return '无数据'
            }
          }
        },
        visualMap: {
          min: 0,
          max: 150,
          show: false,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        geo: {
          map: 'henan',
          roam: false,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            coordinateSystem: 'geo',
            type: 'map',
            // type: 'scatter',
            // name: '地域分布',
            // roam: true,
            data: this.$ChartUtil.convertData(data),
            map: 'henan',
            symbolSize: 8,
            symbolRotate: 35,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#F06C00'
              }
            }
          }
        ]
      }
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    baseAjax: function (id, consoleflag) {
      let promise = new Promise((resolve, reject) => {
        this.$ajaxGet(this.baseUrl, {id: id}, (data) => {
          // console.log(consoleflag, data)
          let flag = data.success
          if (flag === true) {
            resolve(data)
          } else {
            this.$message({
              message: data.msg,
              type: 'error'
            })
          }
        })
      })
      return promise
    },
    qihuan: function () {
      this.isShow = 5
    }
  }
}
</script>
<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: black;
  }

  *:after,*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body{
    background-color: black!important;
  }

  body #app{
    background-color: black!important;
  }

  /*border-box模式*/

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

  /*清除浮动*/

  html,body,h1,h2,h3,h4,h5,h6,p,ol,ul,li,dl,dt,dd,table,caption,thead,tbody,tfoot,tr,td,th,form,fieldset,label,input,button,textarea,select,option,img,iframe {
    margin: 0;
    padding: 0;
    border: 0;
  }

  input:focus,button:focus,textarea:focus,select:focus {
    outline: none;
  }
  input[type="text"]::-ms-clear{
    display:none;
  }
  input[type="password"]::-ms-reveal{
    display:none;
  }
  select::-ms-expand {
    display: none;
  }
  /*ie10兼容*/
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #555;
  }

  a:focus,a:hover {
    text-decoration: none;
    color: #0088f5;
  }

  i,em {
    font-style: normal;
  }

  .mark, mark {
    padding: 0;
    background-color: transparent;
  }

  h1,h2,h3,h4,h5,h6,dt,label,b,th {
    font-weight: normal;
  }
  label{
    max-width: none;
  }
  body {
    font-family: "Microsoft Yahei", "微软雅黑","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    text-align: center;
    color: #ccc;
    background-color: #111111;
  }
  h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{
    font-family: "Microsoft Yahei", "微软雅黑","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  /*全局样式*/

  .floatL {
    float: left;
  }

  .floatR {
    float: right;
  }

  .floatN {
    float: none;
  }
  .bg_1b{
    background-color: #1b1b1b;
  }
  .marginbot30{
    margin-bottom: 30px;
  }
  .mianWrapper h5.title{
    padding-left: 10px;
    border-left: 4px solid #f57c23;
    /*border-radius: 8px;*/
  }
  .mianWrapper h5.title,
  .mianWrapper h6.small_title{
    font-size: 20px;
    line-height: 20px;
    color: #ccc;
    text-align: left;
  }
  .mianWrapper .item{
    height: 30vh;
  }
  .mianWrapper .item1{
    height: 50vh;
  }
  .mianWrapper {
    min-height: 100vh;
  }
  /*页面开始*/
  .wrapper{
    margin: 0 auto;
    width: 100%;
  }

  /*头部*/
  .headerBox{
    position: relative;
  }
  .headerBox .bg_box {
    margin-bottom: 18px;
    padding-bottom: 20px;
    background-color: #111;
    border-bottom: 1px solid #3d3d3d;
  }
  .headerBox .bg_box .bg_box_L,
  .headerBox .bg_box .bg_box_R{
    width: 31.6%;
    height: 44px;
    position: relative;
  }
  .headerBox .bg_box .bg_box_L,
  .headerBox  .inner .lineR{
    background: -webkit-linear-gradient(90deg,  #151515 , #313131 ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(90deg, #151515 , #313131); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(90deg,  #151515 , #313131); /* Firefox 3.6 - 15 */
    background: linear-gradient(90deg, #151515 , #313131); /* 标准的语法（必须放在最后） */
  }
  .headerBox .bg_box .bg_box_R,
  .headerBox  .inner .lineL{
    background: -webkit-linear-gradient(90deg,  #313131, #151515); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(90deg,  #313131, #151515); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(90deg,  #313131, #151515); /* Firefox 3.6 - 15 */
    background: linear-gradient(90deg,  #313131, #151515); /* 标准的语法（必须放在最后） */
  }

  .headerBox .inner{
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -18.4%;
    width: 36.8%;
    background-color: #111;
    padding: 5px 89px 8px;
  }
  .headerBox .inner .pic{
    display: block;
    position: absolute;
    top: 1px;
    width: 89px;
    height: 89px;
  }
  .headerBox .inner .picL{
    left: 0;
    background: url(../../../assets/img/xiantiao.png) no-repeat left top;

  }
  .headerBox .inner .picR{
    right: 0;
    background: url(../../../assets/img/xiantiaoR.png) no-repeat right top;

  }
  .headerBox  .inner .line{
    position: absolute;
    bottom: 0;
    width: 32%;
    height: 1px;
  }
  .headerBox  .inner .lineL{
    left: 89px;
  }
  .headerBox  .inner .lineR{
    right: 89px;
  }
  .headerBox h2{
    position: relative;
    font-size: 32px;
    line-height: 48px;
    background: linear-gradient(to bottom, #fafafa, #7d7d7d);
    -webkit-background-clip: text;
    color: transparent;
  }

  .headerBox h5{
    font-size: 22px;
    line-height: 32px;
    color: #a09f9f;
  }

  /*导航栏*/
  .mainNav ul{
    float: left;
    width: 33.75%;
  }
  .mainNav ul.mainNav_ulR {
    float: right;
  }
  .mainNav ul li {
    float: right;
  }
  .mainNav ul li a{
    padding: 0 50px;
    font-size: 18px;
    line-height: 28px;
    color: #ccc;
  }
  .mainNav ul.mainNav_ulR li{
    float: left;
  }
  .mainNav ul li.active a{
    color: #70ad47;
    /*	font-size: 20px;*/
  }

  /*主题内容*/
  .mianWrapper{
    margin: 0 auto;
    width: 100%;
    padding: 60px 4% 0;
  }
  .mianWrapper .leftPart{
    width: 28.6%;
  }
  .mianWrapper .MiddlePart{
    width: 43.7%;
  }
  .mianWrapper .rightPart{
    width: 27.7%;
  }

  /*table 样式*/
  .table_style {
    width: 100%;
    border: 1px solid #326311;
    border-collapse: collapse
  }
  .table_style thead th,
  .table_style tbody td{
    text-align: center;
    padding: 8px 5px;
    color: #ccc;
    line-height: 16px;
  }
  .table_style thead th{
    font-size: 12px;
    border: 1px solid #326311;
  }
  .table_style tbody td{
    font-size: 13px;
    border-right: 1px solid #326311;
  }
  .table_style tbody tr:first-child td{
    padding-top: 12px;
  }
  .table_style tbody tr:last-child td{
    padding-bottom: 12px;
  }

  .tanleBox{
    padding-top: 24px;
  }

  /*居中部分*/
  .MiddlePart_inner{
    padding: 0 9.6%;
  }
  .MiddlePart_one{
    text-align: left;
    padding: 30px 5.8% 45px;
  }
  .MiddlePart li.numPeoper{
    font-size: 18px;
    color: #999;
    width: 48%;
  }
  .MiddlePart .numGroup{
    display: inline-block;
  }
  .MiddlePart .numGroup span{
    margin-right: 2px;
    text-align: center;
    display: inline-block;
    font-size: 44px;
    line-height: 54px;
    color: #fff;
    /*font-weight: bold;*/
    width: 28px;
    height: 54px;
    background-color: #254f09;
  }
  .MiddlePart li{
    width: 26%;
    float: left;
  }
  .MiddlePart li p{
    font-size: 14px;
    line-height: 20px;
    color: #9a9a9a;
    margin-bottom: 8px;
  }
  .MiddlePart li h6{
    font-size: 32px;
    line-height: 26px;
    color: #70ad47;
  }

  .mianWrapper .MiddlePart_two {
    padding-top: 15px;
  }
  .mianWrapper .MiddlePart_two .small_title{
    text-align: center;
  }

  .chart_zsqk{
    width: 100%;
    height:80%
  }

  #chart_sydfx{
    width: 100%;
    height: 60vh
  }
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
  .mainContent1 {
    background-color: #f1f4f5;
    padding:0 1.64%;
    margin-top: 25px;
  }
  .mainContent1 .el-table{
    min-height: 336px;
  }
  .tab-control{
    width:100%;
    font-size: 14px;
    color: #76838f;
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
    margin-bottom: 26px;
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
    top: 1px;
    height: 39px;
    background-color: #f1f4f5;
    border-right: 1px solid #e4eaec;
    border-bottom: 1px solid #f1f4f5
  }

  .titleTop{
    line-height: 18px;
    font-size: 18px;
    color: #37474f;
    padding-left:10px;
    border-left:5px solid #70ad47;
    margin-bottom: 24px;
  }
  .marbottom24{
    margin-bottom: 24px;
  }
  .noticeBox .box-card{
    height: 120px;
  }
  .noticeBox .el-scrollbar__wrap{
    overflow-x: hidden;
  }
  .noticeL{
    float: left;
    width: 110px;
    height: 80px;
    text-align: right;
    line-height: 80px;
    color: #e96c72;
    font-size: 18px;
  }
  .noticeL span{
    font-size: 18px;
    vertical-align: top;
  }
  .noticeL .iconfont{
    font-size: 45px;
  }
  .noticeR{
    margin-left: 110px;
    padding-left: 50px;

  }
  .noticeR .scrollbar {
    height: 80px;
  }
  .noticeRList{
    float: left;
    width: 50%;
  }
  .noticeRList .el-alert{
    /* min-width:400px; */
    width: 98%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
    /* margin-left:3% */
  }
  .mainContent1 .el-alert:nth-child(2n-1){
    margin-right: 2%
  }
  .countBox{
    text-align: center
  }
  .countBox .el-carousel,
  .el-carousel__container{
    height: 145px !important;
  }
  .banner .list_card{
    float: left;
    width: 31%;
    margin-left: 2.2%
  }
  .countBox .targetCount .el-card{
    background-color:#70ad47
  }
  .countBox .targetCount .text,
  .countBox .targetCount p,
  .countBox .targetCount .num span{
    color: #fff
  }
  .countBoxL, .countBoxR{
    vertical-align: middle;
    display: inline-block;
    padding-bottom: 14px;
    padding-top: 14px;
  }
  .countBoxL{
    width: 20%;
    text-align: center;
  }
  .countBoxL .iconfont{
    font-size: 42px;
    color: #fff;
    line-height: 62px;
  }
  .banner .list_card  .countBoxL .iconfont{
    font-size: 48px;
    line-height: 72px;
  }
  .banner .countBoxL .iconColor{
    color: #ffc000
  }
  .banner .countBoxL .iconColor1{
    color: #4472c4
  }
  .banner .countBoxL .iconColor2{
    color: #ed7d31
  }
  .countBoxR{
    width: 60%;
    padding-left: 15px;
  }
  .countBox .box-card{
    height: 134px;

  }

  .countBox p,.countBox .text {
    text-align: left;
    font-size: 14px;
    color: #a3afb7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .countBox p.num span {
    font-size: 30px;
    color: #526069;
    line-height: 43px;
  }
  .targetBox{
    margin-top: 15px;
  }
  .targetBox .box-card{
    height: 390px;
  }
  .targetBox .title{
    font-size: 16px;
    color: #37474f;
    line-height: 16px;
    margin-bottom: 20px;
  }
  .box-card{
    margin-bottom: 24px;
  }

  /* /我的目标 */
  .targeTable .has-gutter  th,
  .targeTable .has-gutter .el-table tr{
    background-color: #f5f8fa
  }
  .chartBox{
    height:350px
  }
  /*
  '未开始': '#a5a5a5',
            '进行中': '#ffc000',
            '已完成': '#70ad47',
            '已延期': '#ed7d31',
            '延期完成': '#4472c4'
  */
  .style_one {
    background: #ffc000;
  }
  .style_two {
    background: #a5a5a5
  }
  .style_three {
    background: #70ad47;
  }
  .style_four {
    background: #ed7d31
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
  .split-t{
    float: left;
    width: 20%;
    /* margin-right: 17px; */
    box-sizing: border-box;
    padding-right: 17px
  }

  .conutSecondRowBox .el-col-10 .el-card{
    background-color: #ed7d31
  ;
  }
  .conutSecondRowBox .el-col-14 .el-card{
    background-color: #70ad47
  ;
  }
  .conutSecondRowBox .el-col-14  .iconfont{
    color: #95cf6e!important;
  ;
  }
  .conutSecondRowBox .el-col-10 .iconfont{
    color: #f6a670!important;
  ;
  }
  .conutSecondRowBox .el-card__body{
    padding-top: 20px;
  }

  .conutSecondRowBox .el-card__body .text{
    font-size: 14px;
    font-weight: bold;
    color: white;

  }
  .conutSecondRowBox .el-card__body   .num{
    font-size: 14px;
    color: white;
    padding-top: 10px;

  }
  .conutSecondRowBox .el-card__body   .num span{
    font-size: 20px;
    color: white;

  }
  .conutSecondRowBox .targetCount{
    margin-left: 15px;
  }
  .second_title{
    font-size: 16px;
    color: white;
    font-weight: bold;
  }
  .newZy_table {
    color: #a3afb7;
    font-size: 12px;
  }
  .newZy_table span {
    font-size: 30px;
    color: #ccc;
    background-color: #1b1b1b;
    margin-right: 9px;
  }
  .newZy_table div{
    background-color: #1b1b1b;
  }
  .newZy_table td{
    background-color: #1b1b1b;
  }
  .countBox.newZy_1 .split-t {
    width: 25%;
  }
  .countBox.newZy_2 .split-t {
    width: 33.33%;
  }
  .sname{
    color: #9a9a9a;
    font-size: 14px!important;
  }
  .countBox{
    height: 90vh;
    background-color: #1b1b1b
  }
  .split-t {
    background-color: #1b1b1b!important;
  }
  .split-t div{
    border: none;
    background-color: #1b1b1b!important;
  }
  .stitle{
    line-height: 25px;
    position: relative;
    top:-5px;
    font-size: 16px;
    color: #ed7d31;
    background-color: #1b1b1b;
  }
  .box-card div{
    padding: 0;
  }
  /*#chart_bysjy{*/
    /*width: 100%;*/
    /*height: 30vh*/
  /*}*/
</style>
