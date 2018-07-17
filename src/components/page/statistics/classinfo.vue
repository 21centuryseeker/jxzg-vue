<template>
  <div>
  <div class="lanmo-header">

  </div>
      <div class="content1" v-if="true">

        <table style="width: 100%;text-align:left"  >
          <tr styly="min-height:200px">
            <td width="48%" valign="top">
              <div class=" card" style="min-height: 871px" >
                <div style="padding: 20px">
                  <span style="font-size:16px ">经验值排名第一的同学</span>
                </div>
                <el-table
                  :data="score"
                  stripe
                  style="width: 95%;margin: 0 auto">
                  <el-table-column
                    style="text-align: center"
                    prop="ms"
                    align="center"
                    label="名称"
                    width="280">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    align="center"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="value"
                    align="center"
                    label="分值">
                  </el-table-column>
                </el-table>
              </div></td>
            <td width="48%" class="specl-td" style="padding-left: 20px" >
              <div  class=" card"  style="padding-top: 20px;margin-left: 0">
                <div id="fendiyi" style="height: 380px;width: 100%"></div>
                <div>
                </div>
              </div>
              <div style="margin: 15px 0">
                <span style="font-size: 16px">视频资源学习情况</span>
              </div>
              <div style="text-align: center">
                <el-dialog :title="dialogTitle" :visible.sync="videoVisible" style="min-height:1000px" width="70%">
                  <el-table :data="videoData" v-if="isVideo">
                    <el-table-column property="xh" label="学号"  align="center"></el-table-column>
                    <el-table-column property="NAME" label="姓名"  align="center"></el-table-column>
                    <el-table-column property="spzgs" label="视频资源个数" align="center"></el-table-column>
                    <el-table-column property="gkcgsp" label="观看超过95%的视频个数"  align="center"></el-table-column>
                    <el-table-column property="skspsc" label="实看视频时长（分）" align="center"></el-table-column>
                    <el-table-column property="spzsc" label="视频总时长（分）" align="center"></el-table-column>
                  </el-table>
                  <el-table :data="videoData" v-if="!isVideo">
                    <el-table-column property="xh" label="学号"  align="center"></el-table-column>
                    <el-table-column property="NAME" label="姓名"  align="center"></el-table-column>
                    <el-table-column property="fspzyzs" label="非视频资源总数" align="center"></el-table-column>
                    <el-table-column property="fspzycks" label="非视频资源查看数" align="center"></el-table-column>
                  </el-table>
                  <el-pagination v-if="isVideo"
                    @current-change="pageChange"
                    background
                    :current-page.sync="currentPage"
                    layout="prev, pager, next"
                    :total="vtotal">
                  </el-pagination>
                  <el-pagination v-if="!isVideo"
                                 @current-change="pageChange1"
                                 background
                                 :total="vtotal"
                                 :current-page.sync="currentPage"
                                 layout="prev, pager, next"
                  >
                  </el-pagination>
                </el-dialog>
                <el-row>
                  <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" style="height: 174px;background-color: #70ad47 ">
                      <div style="">
                        <div style="margin-top: 30px">

                          <a href="javascript:void(0)"  ><span style="font-size: 25px;color: white;" v-html="shipinziyuan.value1" @click="videoCounts(36)"></span></a>
                          <div class="bottom clearfix btop">
                            <br>
                            <div>
                              <i class="iconfont" style="color: white;font-size: 25px">&#xe627;</i>
                            </div>
                            <br>
                            <span style="font-size: 14px;color: white ">视频资源总个数(个)</span>
                          </div>
                        </div>
                      </div>
                    </el-card>

                  </el-col>
                  <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" style="height: 174px;">
                      <div style="">
                        <div style="margin-top: 30px">
                          <a href="javascript:void(0)"  ><span style="font-size: 25px;color: black;" v-html="shipinziyuan.value3" @click="videoCounts(36)"></span></a>
                          <div class="bottom  btop clearfix">
                            <br>
                            <div>
                              <i class="iconfont" style="color: #a5a5a5;font-size: 25px">&#xe627;</i>
                            </div>
                            <br>
                            <span style="font-size: 14px;color: #a5a5a5 ">观看超过95%的视频总数(个)</span>
                          </div>
                        </div>
                      </div>
                    </el-card></el-col>
                  <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" style="height: 174px;">
                      <div style="">
                        <div style="margin-top: 30px">
                          <a href="javascript:void(0)"  ><span style="font-size: 25px;color: black;" v-html="shipinziyuan.value4" @click="videoCounts(36)"></span></a>
                          <div class="bottom  btop  clearfix">
                            <br>
                            <div>
                              <i class="iconfont" style="color: #a5a5a5;font-size: 25px">&#xe627;</i>
                            </div>
                            <br>
                            <span style="font-size: 14px;color: #a5a5a5 ">观看超过10分钟的视频总数(个)</span>
                          </div>
                        </div>
                      </div>
                    </el-card></el-col>
                </el-row>

              </div>
              <div style="margin: 15px 0">
                <span style="font-size: 16px">非视频资源学习情况</span>
              </div>
              <div  style="text-align: center">
                <el-row>
                  <el-col :span="12">
                    <el-card :body-style="{ padding: '0px' }" style="height: 174px;background-color: #ed7d31">
                      <div style="">
                        <div style="margin-top: 30px">
                          <a href="javascript:void(0)"  > <span style="font-size: 25px;color: white;" v-html="fshipinziyuan.value1" @click="videoCounts(37)">38</span></a>
                          <div class="bottom clearfix">
                            <br>
                            <div>
                              <i class="iconfont" style="color: white;font-size: 25px">&#xe627;</i>
                            </div>
                            <br>
                            <span style="font-size: 14px;color: white ">非视频资源总个数(个)</span>
                          </div>
                        </div>
                      </div>
                    </el-card>

                  </el-col>
                  <el-col :span="12">
                    <el-card :body-style="{ padding: '0px' }" style="height: 174px;">
                      <div style="">
                        <div style="margin-top: 30px">
                          <a href="javascript:void(0)"  ><span style="font-size: 25px"  v-html="fshipinziyuan.value2" @click="videoCounts(37)"></span></a>
                          <div class="bottom clearfix">
                            <br>
                            <div>
                              <i class="iconfont" style="color: #a5a5a5;font-size: 25px">&#xe627;</i>
                            </div>
                            <br>
                            <span style="font-size: 14px;color: #a5a5a5 ">视频资源查看总数(次)</span>
                          </div>
                        </div>
                      </div>
                    </el-card></el-col>

                </el-row>
              </div>
            </td>

          </tr>
          <tr styly="min-height:200px">
            <td width="48%">
              <div class=" card">
                <div id="chart2" style="height: 380px;width: 90%;margin: 0 auto;padding-top: 20px">
                  <span style="font-size:16px ">课堂表现TOP10</span>
                  <el-row v-for="(val,key) of classBiaoxian" :key="key+33">
                    <el-col :span="2"><span class="little_title">{{val.name}}</span></el-col>
                    <el-col :span="22"><el-progress :percentage="val.value" color="#ed7d31 "></el-progress></el-col>
                  </el-row>

                </div>
              </div>
            </td>
            <td width="48%">
              <div class=" card">
                <div id="chart3" style="height: 380px;width: 100%"></div>
                <div>
                </div>
              </div>

            </td>

          </tr>
          <tr styly="min-height:200px">
            <td width="48%">
              <div class="card">
                <div  style="height: 380px;width: 90%;margin: 0 auto;padding-top: 20px">
                  <span style="font-size:16px ">头脑风暴被老师点赞数TOP10</span>
                  <!--<table style="width: 100%">-->
                    <!--<tr v-for="(val,key) of tounaofengbao" :key="key+44">-->
                      <!--<td style="width: 10%"><span class="little_title">{{val.name}}</span></td>-->
                      <!--<td style = "width:80%"><el-progress :percentage="val.value" color="#ed7d31 "></el-progress></td>-->
                    <!--</tr>-->
                  <!--</table>-->
                  <el-row v-for="(val,key) of tounaofengbao" :key="key+44">
                    <el-col :span="2"><span class="little_title">{{val.name}}</span></el-col>
                    <el-col :span="22"><el-progress :percentage="val.value" color="#ed7d31 "></el-progress></el-col>
                  </el-row>

                </div>
              </div>
            </td>
            <td width="48%">
              <div class=" card">
                <div  style="height: 380px;width: 90%;margin: 0 auto;padding-top: 20px">
                  <span style="font-size:16px ">讨论答疑被老师点赞数TOP10</span>
                  <el-row v-for="(val,key) of taolundayi" :key="key+44">
                    <el-col :span="2"><span class="little_title">{{val.name}}</span></el-col>
                    <el-col :span="22"><el-progress :percentage="val.value" color="#ed7d31 "></el-progress></el-col>
                  </el-row>
                </div>
                <div>
                </div>
              </div>

            </td>

          </tr>
          <tr styly="min-height:200px">
            <td width="48%">
              <div class=" card">
                <div  style="height: 380px;width: 90%;margin: 0 auto;padding-top: 20px">
                  <span style="font-size:16px ">讨论答疑活跃度TOP10</span>
                  <el-row v-for="(val,key) of taolundayihuoyue" :key="key+55">
                    <el-col :span="2"><span class="little_title">{{val.name}}</span></el-col>
                    <el-col :span="22"><el-progress :percentage="val.value" color="#ed7d31 "></el-progress></el-col>
                  </el-row>
                </div>
              </div>
            </td>
            <td width="48%">
              <div class=" card">
                <div id="chart6" style="height: 380px;width: 90%;margin: 0 auto;padding-top: 20px"/>
                <div>
                </div>
              </div>

            </td>

          </tr>
        </table>

      </div>
  </div>
</template>

<script>

import StudentInfo from './studentinfo'
export default {
  name: 'ClassInfo',
  props: {
    cid: String
  },
  data: function () {
    return {
      vtotal: 0,
      dialogTitle: '',
      currentPage: 1,
      isVideo: false,
      videoData: [],
      videoVisible: false,
      first: 'first',
      score: [],
      classBiaoxian: [],
      tounaofengbao: [],
      taolundayi: [],
      taolundayihuoyue: [],
      shipinziyuan: {},
      fshipinziyuan: {}
    }
  },
  watch: {
    cid (val) {
      this.getData(val)
    }
  },
  mounted: function () {
    this.getData(this.cid)
    console.log(this.$route)
  },
  created: function () {
  },
  components: {
    StudentInfo
  },
  methods: {
    videoCounts: function (data) {
      this.currentPage = 1
      let id = data
      let startPage = 1
      let pageSize = 10
      this.getInfo(id, startPage, pageSize).then(this.renderDialog)
    },
    pageChange: function (page) {
      this.getInfo(36, page, 10).then(this.renderDialog)
    },
    pageChange1: function (page) {
      this.getInfo(37, page, 10).then(this.renderDialog)
    },
    renderDialog: function (data) {
      console.log('333wo', data)
      this.videoData = data.data.data
      this.vtotal = data.data.total
      this.videoVisible = true
    },
    getInfo: function (id, startPage, pageSize) {
      if (id === 36) {
        this.isVideo = true
        this.dialogTitle = '视频资源学习情况'
      } else {
        this.isVideo = false
        this.dialogTitle = '非视频资源学习情况'
      }
      let params = {
        id: id,
        classId: this.cid,
        startPage: startPage,
        pageSize: pageSize
      }
      let promise = new Promise((resolve, reject) => {
        this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getListById', params, (data) => {
          let flag = data.success
          if (flag === true) {
            resolve(data)
          } else {
            // reject('ss')
          }
        })
      })
      return promise
    },
    getFShipinziyuan: function ([data]) {
      this.fshipinziyuan = data.data
    },
    getShipinziyuan: function ([data]) {
      this.shipinziyuan = data.data
    },
    getCeshifenshufenbu: function ([data, continer]) {
      let ldata = data.data.legend
      let sdata = data.data.series
      this.getChart6(ldata, sdata, continer)
    },
    getTaoLundayiHuoye: function ([data]) {
      this.taolundayihuoyue = data.data.data
    },
    getTaolundayi: function ([data]) {
      this.taolundayi = data.data.data
    },
    getTouNaoFengBao: function ([data]) {
      this.tounaofengbao = data.data.data
    },
    baseAjax: function (id, cid, consoleflag, continer) {
      let continerContent = void (0)
      if (continer !== undefined) {
        continerContent = this.$ChartUtil.goDraw(continer, void (0), this)
      }
      let promise = new Promise((resolve, reject) => {
        this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getYbkInfoById', {id: id, classId: cid}, (data) => {
          console.log(consoleflag, data)
          let flag = data.success
          if (flag === true) {
            resolve([data, continerContent])
          } else {
            // reject('ss')
          }
        })
      })
      return promise
    },
    getHuodong: function (id, cid) {
      let continer = this.$ChartUtil.goDraw('chart3', void (0), this)
      continer.showLoading()
      this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getYbkInfoById', {id: id, classId: cid}, (data) => {
        console.log('4444', data)
        continer.hideLoading()
        let flag = data.success
        if (flag === true) {
          let xdata = data.data.xAxis
          let sdata = data.data.series
          this.getChart3(xdata, sdata, continer)
        }
      })
    },
    getZaixianxuexiINfo: function (id, cid) {
      let continer = this.$ChartUtil.goDraw('fendiyi', void (0), this)
      continer.showLoading()
      this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getYbkInfoById', {id: id, classId: cid}, (data) => {
        console.log('2222', data)
        continer.hideLoading()
        let flag = data.success
        if (flag === true) {
          let ldata = data.data.legend
          let sdata = data.data.series
          this.getFenDiyi(ldata, sdata, continer)
        }
      })
    },
    getClassBiaoxian: function (id, cid) {
      this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getYbkInfoById', {id: id, classId: cid}, (data) => {
        console.log('3333', data)
        let flag = data.success
        if (flag === true) {
          this.classBiaoxian = data.data.data
        }
      })
    },
    getScore: function (id, cid) {
      this.$ajaxMore('post', this.HOST + '/tr/Ybk/web/getYbkInfoById', {id: id, classId: cid}, (data) => {
        console.log('1111', data)
        let flag = data.success
        if (flag === true) {
          this.score = data.data.data
        }
      })
    },
    getData: function (cid) {
      this.getScore(8, cid)
      this.getClassBiaoxian(9, cid)
      this.getZaixianxuexiINfo(3, cid)
      this.getHuodong(10, cid)
      this.baseAjax(11, cid, '55555').then(this.getTouNaoFengBao)
      this.baseAjax(12, cid, '666666').then(this.getTaolundayi)
      this.baseAjax(13, cid, '777777').then(this.getTaoLundayiHuoye)
      this.baseAjax(14, cid, '888888', 'chart6').then(this.getCeshifenshufenbu)
      this.baseAjax(4, cid, '999999').then(this.getShipinziyuan)
      this.baseAjax(5, cid, '10101010').then(this.getFShipinziyuan)
    },
    getFenDiyi: function (legendData, sdata, continer) {
      let series = [
        {
          name: '签到情况',
          type: 'pie',
          radius: [80, 120],
          color: ['#70ad47', '#ed7d31', '#ffc000', '#a5a5a5 ', '#70ad47', '#dd6969', '#00a6a6'],
          data: sdata
        }
      ]
      this.$ChartUtil.drawChartNoXY(continer, '签到情况', legendData, this.$ChartUt.VERTICAL, series, [], {}, this, (param) => {
      })
    },
    getChart3: function (xData, sdata, continer) {
      let series = [
        {
          name: '活动参与度',
          type: 'bar',
          itemStyle: {
            color: '#70ad47'
          },
          data: sdata
        }
      ]
      this.$ChartUtil.drawChartNoLegend(continer, '活动参与度', series, xData, false, {}, this)
    },
    getChart6: function (ldata, sdata, continer) {
      let series = [
        {
          name: '测试分数分布',
          type: 'pie',
          data: sdata,
          radius: [80, 100],
          color: ['#70ad47', '#ed7d31 ', '#ffc000']
        }
      ]
      this.$ChartUtil.drawChartNoXY(continer, '测试分数分布', ldata, this.$ChartUt.HORIZONTAL, series, [], {}, this)
    }
  }

}
</script>

<style scoped>
  .content1{
    margin: 0 15px 0 5px;

  }
  .lanmo-header{
    margin: 0 16px 0 25px;
  }
  .content1 h3{
    padding: 10px 0;
  }
  .card{
    border-radius: 5px;
    background-color: white!important;
    margin-left: 20px;
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
    padding-top: 20px;
  }
  /*.split-t{*/
    /*float: left;*/
    /*width: 20%;*/
    /*!* margin-right: 17px; *!*/
    /*box-sizing: border-box;*/
    /*padding-right: 17px*/
  /*}*/
</style>
