<template>
  <div>
  <div class="content1">

    <table style="width: 100%;text-align:left"  >
      <tr styly="min-height:200px">
        <td width="48%" class="specl-td" valign="top" >
          <div  class=" card"  style="padding-top: 20px">
            <div id="fendiyi" style="height: 415px;width: 100%"></div>
            <div>
            </div>
          </div>
          <div  class=" card"  style="padding-top: 20px ;margin-top: 15px">
            <div id="chart10" style="height: 415px;width: 100%"></div>
            <div>
            </div>
          </div>

        </td>
        <td width="48%" valign="top">
          <div class=" card">
            <div id="chart3" style="height: 300px;width: 100%"></div>
            <div>
            </div>
          </div>
          <div style="margin: 10px 0">
            <span class="spantitle">视频资源学习情况</span>
          </div>
          <div style="text-align: center">
            <el-row>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }" style="height: 150px;background-color: #70ad47">
                  <div style="padding: 7px ">
                    <div style="margin-top: 30px">
                      <span style="font-size: 25px;color: white;" v-html="shipinziyuan.value1"></span>
                      <div class="bottom clearfix">
                        <i class="iconfont" style="color: white;font-size: 28px ">&#xe627;</i>
                        <div>
                          <span style="font-size: 14px;color: white ">视频资源总数个</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>

              </el-col>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }" style="height: 150px;">
                  <div style="padding:7px ">
                    <div style="margin-top: 30px">
                      <span style="font-size: 25px" v-html="shipinziyuan.value2"></span>
                      <div class="bottom clearfix">
                        <i class="iconfont" style="color: #a5a5a5;font-size: 28px ">&#xe627;</i>
                        <div>
                          <span style="font-size: 14px;color: #a5a5a5 ">视频总时长（分）</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card></el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }" style="height: 150px;">
                  <div style="padding: 7px ">
                    <div style="margin-top: 30px">
                      <span style="font-size: 25px" v-html="shipinziyuan.value3"></span>
                      <div class="bottom clearfix">
                        <i class="iconfont" style="color: #a5a5a5;font-size: 28px ">&#xe627;</i>
                        <div>
                          <span style="font-size: 14px;color: #a5a5a5 ">实看视频时长(分)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card></el-col>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }" style="height: 150px;">
                  <div style="padding: 7px ">
                    <div style="margin-top: 30px">
                      <span style="font-size: 25px" v-html="shipinziyuan.value4"></span>
                      <div class="bottom clearfix">
                        <i class="iconfont" style="color: #a5a5a5;font-size: 28px ">&#xe627;</i>
                        <div>
                          <span style="font-size: 14px;color: #a5a5a5 ">观看超过95%的视频个数(个)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card></el-col>
            </el-row>

          </div>
          <div style="margin: 10px 0">
          <span class="spantitle">非视频资源学习情况</span>
          </div>
          <div  style="text-align: center">
            <el-row>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }" style="height: 150px;background-color: #ed7d31">
                  <div style="padding: 14px ">
                    <div style="margin-top: 30px">
                      <span style="font-size: 25px;color: white;" v-html="fshipinziyuan.value1"></span>
                      <div class="bottom clearfix">
                        <i class="iconfont" style="font-size: 28px ;color: white">&#xe627;</i>
                        <div>
                        <span style="font-size: 14px;color: white ">非视频资源总数(个)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>

              </el-col>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }" style="height: 150px;">
                  <div style="padding: 14px ">
                    <div style="margin-top: 30px">
                      <span style="font-size: 25px" v-html="fshipinziyuan.value2"></span>
                      <div class="bottom clearfix">
                        <i class="iconfont" style="color: #a5a5a5;font-size: 28px ">&#xe627;</i>
                        <div>
                        <span style="font-size: 14px;color: #a5a5a5 ">非视频资源查看总数(次)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card></el-col>

            </el-row>

          </div>
        </td>

      </tr>
      <tr styly="min-height:200px">
        <td colspan="2">
        <div class="countBox">

          <div class="split-t"><el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">课程表现参与次数</p>
              <p class="num">
                <span v-html="fshipinziyuan.value3"></span>
                个
              </p>
            </div>
          </el-card></div>
          <div class="split-t"><el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">投票问卷参与次数</p>
              <p class="num">
                <span v-html="fshipinziyuan.value4"></span>
                个
              </p>
            </div>
          </el-card></div>
          <div class="split-t"><el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #4472c4  ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">头脑风暴点赞次数</p>
              <p class="num">
                <span v-html="fshipinziyuan.value5"></span>
                个
              </p>
            </div>
          </el-card></div>
          <div class="split-t"><el-card class="box-card clearfix">
            <div class="countBoxL">
              <i class="iconfont" style="color: #ed7d31  ">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">讨论答疑讨论次数</p>
              <p class="num">
                <span v-html="fshipinziyuan.value6"></span>
                个
              </p>
            </div>
          </el-card></div>
        </div>
        </td>
      </tr>
      <tr styly="min-height:200px">
        <td colspan="2">
          <span class="spantitle">测试情况</span>
          <div class="countBox">

            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">测试总数</p>
                <p class="num">
                  <span v-html="ceshiqingkuang.value1"></span>
                  个
                </p>
              </div>
            </el-card></div>
            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">测试总经验值</p>
                <p class="num">
                  <span v-html="ceshiqingkuang.value2"></span>
                  分
                </p>
              </div>
            </el-card></div>
            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #4472c4  ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">参与次数</p>
                <p class="num">
                  <span v-html="ceshiqingkuang.value3"></span>
                  个
                </p>
              </div>
            </el-card></div>
            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #ed7d31  ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">网络课程</p>
                <p class="num">
                  <span v-html="ceshiqingkuang.value4"></span>
                  个
                </p>
              </div>
            </el-card></div>
          </div>
        </td>

      </tr>
      <tr styly="min-height:200px">
        <td colspan="2">
          <span class="spantitle">作业/小组任务</span>
          <div class="countBox three">

            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #70ad47 ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">作业/小组任务总数</p>
                <p class="num">
                  <span v-html="zuoyexiaozurenwu.value1"></span>
                  个
                </p>
              </div>
            </el-card></div>
            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #ffc000 ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">作业/小组任务总经验值</p>
                <p class="num">
                  <span v-html="zuoyexiaozurenwu.value2"></span>
                  分
                </p>
              </div>
            </el-card></div>
            <div class="split-t"><el-card class="box-card clearfix">
              <div class="countBoxL">
                <i class="iconfont" style="color: #4472c4  ">&#xe644;</i>
              </div>
              <div class="countBoxR">
                <p class="text">参与次数</p>
                <p class="num">
                  <span v-html="zuoyexiaozurenwu.value3"></span>
                  个
                </p>
              </div>
            </el-card></div>
          </div>
        </td>

      </tr>
    </table>

  </div>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',
  mounted: function () {
    this.getData(this.cid)
    // this.getFenDiyi()
  },
  props: {
    cid: String,
    searchkey: String
  },
  watch: {
    cid (val) {
      console.log('学生情况', val, this.searchkey)
      this.getData(this.cid, this.searchkey)
    },
    searchkey (val) {
      console.log('搜索', val)
      this.getData(this.cid, val)
    }
  },
  methods: {
    getData: function (cid, search) {
      this.baseAjax(1, cid, 's1111', search).then(this.getChengjihuizong)
      this.baseAjax(2, cid, 's2222', search).then(this.getAllJingyanzhi)
      this.baseAjax(3, cid, 's3333', search).then(this.getQiandaoqingkuang)
      this.baseAjax(4, cid, 's4444', search).then(this.getShipinziyuan)
      this.baseAjax(5, cid, 's5555', search).then(this.getFShipinziyuan)
      this.baseAjax(6, cid, 's4444', search).then(this.getCeshiqingkuang)
      this.baseAjax(7, cid, 's5555', search).then(this.getZuoyexiaozurenwu)
    },
    getFShipinziyuan: function (data) {
      this.fshipinziyuan = data.data
    },
    getShipinziyuan: function (data) {
      this.shipinziyuan = data.data
    },
    getCeshiqingkuang: function (data) {
      this.ceshiqingkuang = data.data
    },
    getZuoyexiaozurenwu: function (data) {
      this.zuoyexiaozurenwu = data.data
    },
    getQiandaoqingkuang: function (data) {
      let ldata = data.data.legend
      let sdata = data.data.series
      this.getChart10(ldata, sdata)
    },
    getAllJingyanzhi: function (data) {
      let xdata = data.data.xAxis
      let sdata = data.data.series
      this.getChart3(xdata, sdata)
    },
    getChengjihuizong: function (data) {
      let ldata = data.data.legend
      let sdata = data.data.series
      this.getFenDiyi(ldata, sdata)
    },
    getChart10: function (ldata, sdata) {
      let series = [
        {
          name: '签到情况',
          type: 'pie',
          color: ['#70ad47', '#ed7d31', '#ffc000', '#a5a5a5 ', '#4472c4', '#dd6969', '#00a6a6', '#70ad47'],
          data: sdata
        }
      ]
      this.$ChartUtil.drawChartNoXY('chart10', '签到情况', ldata, this.$ChartUt.VERTICAL, series, [], {}, this)
    },
    getFenDiyi: function (ldata, sdata) {
      let series = [
        {
          name: '成绩汇总',
          type: 'pie',
          data: sdata
        }
      ]
      this.$ChartUtil.drawChartNoXY('fendiyi', '成绩汇总', ldata, this.$ChartUt.VERTICAL, series, [], {}, this)
    },
    getChart3: function (xdata, sdata) {
      let series = [
        {
          name: '总经验值',
          type: 'bar',
          itemStyle: {
            color: '#70ad47',
            line: '10px'
          },
          data: sdata
        }
      ]
      this.$ChartUtil.drawChartNoLegend('chart3', '总经验值', series, xdata, true, {}, this)
    },
    baseAjax: function (id, cid, consoleflag, search) {
      search || (search = '')
      let promise = new Promise((resolve, reject) => {
        this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getYbkInfoById', {id: id, classId: cid, search: search}, (data) => {
          console.log(consoleflag, data)
          let flag = data.success
          if (flag === true) {
            resolve(data)
          } else {
          }
        })
      })
      return promise
    }
  },
  data () {
    return {
      shipinziyuan: {},
      fshipinziyuan: {},
      ceshiqingkuang: {},
      zuoyexiaozurenwu: {},
      searchText: ''
    }
  }
}
</script>

<style scoped>
  .content1{
    margin: 0 15px 0 5px;

  }
  .content1 h3{
    padding: 10px 0;
  }
  .card{
    border-radius: 5px;
    background-color: white;
  }
  .little_title{
    font-size: 14px;
    color:#526069
  }
  #chart3{
    padding-top: 20px;
  }
  .content1  table td{
    /* valign:'top'; */
    padding-left: 20px;
    padding-top: 20px;
  }
  .split-t{
    float: left;
    width: 25%;
    /* margin-right: 17px; */
    box-sizing: border-box;
    padding-right: 17px;

  }

  .three .split-t{
    float: left;
    width: 33.3%;
    /* margin-right: 17px; */
    box-sizing: border-box;
    padding-right: 17px
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
    width: 60%
  }
  .countBox .box-card{
    height: 134px;

  }

  .countBox p,.countBox .text {
    text-align: left;
    font-size: 14px;
    color: #a3afb7;
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .countBox {
    padding-top: 20px;
    box-sizing: border-box;
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
    height: 452px;
  }
  .spantitle{
    color: #37474f;
    font-size: 16px;
  }
</style>
