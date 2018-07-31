<template>
  <div class="mainContent_school">
    <!-- 实践教学条件 -->
    <div class="titleTop marginTop24">学校教室基本情况</div>
    <!-- 校内实践基地 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div>
          <table class="special_table">
            <thead>
              <tr>
                <td style="text-align: left;padding-left: 20px;">管理部门</td>
                <td style="text-align: left;padding-left: 20px;">教室类型</td>
                <td>教室数</td>
                <td>座位数</td>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in tableData_1">
                <tr :key="index">
                  <td style="text-align: left;padding-left: 20px;">{{item.value1}}</td>
                  <td style="text-align: left;padding-left: 20px;">{{item.value2}}</td>
                  <td>{{item.value3}}</td>
                  <td>{{item.value4}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </el-card>
    </div>
    <!-- 普通公共教室使用率 -->
    <div class="titleTop marginTop24">普通公共教室使用率</div>
    <!-- 普通公共教室使用率 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div>
          <table class="special_table">
            <thead>
              <tr>
                <td>教室编号</td>
                <td>该教室本学期总课时量</td>
                <td>本学期教学总课时数</td>
                <td>教室使用率</td>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in tableData_2">
                <tr :key="index">
                  <td>{{item.value1}}</td>
                  <td>{{item.value2}}</td>
                  <td>{{item.value3}}</td>
                  <td>{{item.value4}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </el-card>
    </div>
    <!-- 多媒体教室使用率 -->
    <div class="titleTop marginTop24">多媒体教室使用率</div>
    <!-- 多媒体教室使用率 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div>
          <table class="special_table">
            <thead>
              <tr>
                <td>教室编号</td>
                <td>该教室本学期总课时量</td>
                <td>本学期教学总课时数</td>
                <td>教室使用率</td>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in tableData_2">
                <tr :key="index">
                  <td>{{item.value1}}</td>
                  <td>{{item.value2}}</td>
                  <td>{{item.value3}}</td>
                  <td>{{item.value4}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </el-card>
    </div>
    <!-- 实验室使用率 -->
    <div class="titleTop marginTop24">实验室使用率</div>
    <div class="marginBtom24">
      <el-select size="small" placeholder="请选择学年" v-model="dxyqsbsyl_xn">
        <el-option v-for="(item, index) in dxyqsbsyl_options" :key="index" :label="item.label" :value="item.label"></el-option>
      </el-select>
      <el-select size="small" placeholder="请选择学期" v-model="dxyqsbsyl_xq">
        <el-option v-for="(item, index) in dxyqsbsyl_xq_options" :key="index" :label="item.label" :value="item.label"></el-option>
      </el-select>
    </div>
    <!-- 实验室使用率 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div>
          <table class="special_table">
            <thead>
              <tr>
                <td style="text-align: left;padding-left: 10px;">实验室名称</td>
                <td>实验室学时数（实际）</td>
                <td>实验室学时数（额定）</td>
                <td>实验室利用率（%）</td>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in tableData_syssyl">
                <tr :key="index" :style="{'font-weight': item.value1 === '平均值' ? 700 : 400}">
                  <td style="text-align: left;padding-left: 10px;">{{item.value1}}</td>
                  <td>{{item.value2}}</td>
                  <td>{{item.value3}}</td>
                  <td>{{item.value4}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </el-card>
    </div>
    <!-- 大型仪器设备使用率 -->
    <div class="titleTop marginTop24">大型仪器设备使用率</div>
    <div class="marginBtom24">
      <el-select size="small" placeholder="请选择学年" v-model="dxyqsbsyl_xn_2">
        <el-option v-for="(item, index) in dxyqsbsyl_options" :key="index" :label="item.label" :value="item.label"></el-option>
      </el-select>
      <el-select size="small" placeholder="请选择学期" v-model="dxyqsbsyl_xq_2">
        <el-option v-for="(item, index) in dxyqsbsyl_xq_options" :key="index" :label="item.label" :value="item.label"></el-option>
      </el-select>
    </div>
    <!-- 大型仪器设备使用率 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div>
          <table class="special_table">
            <thead>
              <tr>
                <td>学院名称</td>
                <td style="text-align: left;padding-left: 10px;">仪器设备名称</td>
                <td>实际学时数</td>
                <td>计划学时数</td>
                <td>使用率（%）</td>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in tableData_dxyqsbsyl">
                <tr :key="index">
                  <td>{{item.value1}}</td>
                  <td style="text-align: left;padding-left: 10px;">{{item.value2}}</td>
                  <td>{{item.value3}}</td>
                  <td>{{item.value4}}</td>
                  <td>{{item.value5}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData_1: [
        {
          value1: "图书馆",
          value2: "阅览室",
          value3: 5,
          value4: 2160
        },
        {
          value1: "图书馆",
          value2: "自习室",
          value3: 7,
          value4: 544
        },
        {
          value1: "教务处",
          value2: "普通公共教室",
          value3: 62,
          value4: 7500
        },
        {
          value1: "教务处",
          value2: "多媒体教室",
          value3: 54,
          value4: 7755
        },
        {
          value1: "汽修学院",
          value2: "自习室",
          value3: 6,
          value4: 1638
        },
        {
          value1: "信息工程学院",
          value2: "自习室",
          value3: 4,
          value4: 932
        },
        {
          value1: "财经学院",
          value2: "自习室",
          value3: 3,
          value4: 614
        }
      ],
      tableData_2: [
        {
          value1: "001",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "002",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "003",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "004",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "005",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "006",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "007",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "008",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "009",
          value2: "20",
          value3: "100",
          value4: "20%"
        },
        {
          value1: "010",
          value2: "20",
          value3: "100",
          value4: "20%"
        }
      ],
      tableData_syssyl: [
        {
          value1: "公共机房1",
          value2: "774",
          value3: "576",
          value4: "134.38"
        },
        {
          value1: "公共机房2",
          value2: "736",
          value3: "576",
          value4: "127.78"
        },
        {
          value1: "公共机房3",
          value2: "832",
          value3: "576",
          value4: "144.44"
        },
        {
          value1: "公共机房4",
          value2: "412",
          value3: "576",
          value4: "71.53"
        },
        {
          value1: "公共机房5",
          value2: "176",
          value3: "576",
          value4: "30.56"
        },
        {
          value1: "公共机房6",
          value2: "608",
          value3: "576",
          value4: "105.56"
        },
        {
          value1: "影视制作实验室",
          value2: "476",
          value3: "576",
          value4: "82.64"
        },
        {
          value1: "多媒体作品制作实验室",
          value2: "316",
          value3: "576",
          value4: "54.86"
        },
        {
          value1: "三维设计实验室",
          value2: "408",
          value3: "576",
          value4: "70.83"
        },
        {
          value1: "动画设计与制作实验室",
          value2: "352",
          value3: "576",
          value4: "61.11"
        },
        {
          value1: "交互设计实验室",
          value2: "210",
          value3: "576",
          value4: "36.46"
        },
        {
          value1: "平面设计实验室",
          value2: "252",
          value3: "576",
          value4: "43.75"
        },
        {
          value1: "虚拟现实实验室",
          value2: "206",
          value3: "576",
          value4: "35.76"
        },
        {
          value1: "平均值",
          value2: "442.92",
          value3: "",
          value4: "76.9"
        }
      ],
      tableData_dxyqsbsyl: [
        {
          value1: "机电与汽车工程学院",
          value2: "电控柴油发动机测控台架及附件",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "电控共轨柴油车检修实训台及附件",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "电控汽油发动机实训台及附件",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "柴油机解码器",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "自动变速器实训台与台架",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "线切割机",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "PLC实训台",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "气动综合实训台",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "卧式铣床",
          value3: 20,
          value4: 50,
          value5: "40%"
        },
        {
          value1: "机电与汽车工程学院",
          value2: "立式铣床",
          value3: 20,
          value4: 50,
          value5: "40%"
        }
      ],
      dxyqsbsyl_xn: "2017-2018",
      dxyqsbsyl_options: [
        {
          label: "2017-2018",
        },
        {
          label: '2016-2017',
        },
        {
          label: '2015-2016'
        }
      ],
      dxyqsbsyl_xq: "第一学期",
      dxyqsbsyl_xn_2: "2017-2018",
      dxyqsbsyl_xq_2: "第一学期",
      dxyqsbsyl_xq_options: [
        {
          label: "第一学期"
        },
        {
          label: "第二学期"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
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
.marginBtom24 {
  margin-bottom: 24px;
}
.mainContent_school {
  background-color: #f1f4f5;
  padding: 0 1.64%;
}
.mainContent_school .titleTop {
  line-height: 18px;
  padding-top: 0;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
.mainContent_school .box-card {
  position: relative;
}
.mainContent_school .textTitle {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
}
.captionTitle {
  padding-left: 15px;
  font-size: 16px;
  color: #76838f;
  line-height: 58px;
  margin-bottom: 10px;
  height: 58px;
  border-bottom: 1px solid #e4eaec;
}
.mainContent_school .box-card .caption {
  padding-left: 15px;
  font-size: 14px;
  color: #76838f;
  line-height: 24px;
  margin-bottom: 10px;
}
.mainContent_school .box-card .caption span {
  color: #70ad47;
}
.mainContent_school .box-card .captionA span {
  margin-right: 15px;
}
.mainContent_school .box-card .caption .down {
  color: #ed7d31;
  padding-left: 10px;
}
.schoolShow {
  margin-top: 24px;
  float: left;
  width: 24%;
  margin-right: 1.3%;
}
.schoolShow .box-card {
  margin-bottom: 0;
}
.list_card .last {
  margin-right: 0;
}
.schoolShow .countBoxL,
.countBoxR {
  vertical-align: middle;
  display: inline-block;
  height: 70px;
  padding-bottom: 14px;
  padding-top: 14px;
}
.schoolShow .countBoxL {
  width: 30%;
  text-align: center;
}
.schoolShowA .countBoxL {
  width: 26%;
  text-align: center;
}
.schoolShow .countBoxL .iconfont {
  font-size: 32px;
  color: #fff;
  line-height: 62px;
}
.schoolShow .countBoxL .iconfont {
  font-size: 48px;
  line-height: 72px;
}
.schoolShow .countBoxL .iconColor1 {
  color: #70ad47;
}
.schoolShow .countBoxL .iconColor2 {
  color: #ffc000;
}
.schoolShow .countBoxL .iconColor3 {
  color: #62a8ea;
}
.schoolShow .countBoxL .iconColor4 {
  color: #ed7d31;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxL .iconColorA {
  color: #dd6969;
}
.schoolShow .countBoxL .iconColorB {
  color: #f1cdcd;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxR {
  width: 60%;
}
.schoolShowA .countBoxR {
  width: 70%;
}
.schoolShow p,
.schoolShow .text {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.schoolShow p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.schoolGroup .box-card {
  /* height: 529px; */
}
.schoolGroup .acreageEcharts,
.schoolGroup .fundsEcharts {
  height: 400px;
}
.resourceBox .el-card__body {
  padding: 0;
}
.resourceBox .caption {
  font-size: 16px;
  line-height: 58px;
  color: #37474f;
  padding-right: 24px;
  border-bottom: 1px solid #e4eaec;
}

.resourceBox .item {
  float: left;
  width: 24.9%;
  height: 105px;
  padding-top: 32px;
  border-right: 1px solid #e4eaec;
}
.resourceBox .borderNone {
  border-right: none;
}
.resourceBox .resName {
  padding-left: 38px;
  line-height: 24px;
  font-size: 13px;
  color: #76838f;
  padding-bottom: 14px;
}
.resourceBox .resNum em {
  font-size: 30px;
  font-style: normal;
  line-height: 28px;
}
.resourceBox .resNum {
  padding-left: 38px;
  font-size: 14px;
}
.resourceBox .first {
  padding-right: 10px;
}
.color1 {
  color: #70ad47;
}
.color2 {
  color: #ffc000;
}
.color3 {
  color: #62a8ea;
}
.color4 {
  color: #ed7d31;
}
.schoolShowGroup {
  text-align: center;
}
.expandBox .schoolShow {
  float: none;
  display: inline-block;
  margin-right: 24px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  width: 25%;
}
.expandBox .schoolShowA {
  width: 30%;
}
.expandEcharts,
.RecruitStudentsEcharts,
.SituationEcharts,
.graduatioEcharts {
  height: 336px;
}
.schoolTerm_List .schoolShow,
.CollegeInfo .schoolShow,
.courseInfo .schoolShow,
.CourseSituation .schoolShow {
  width: 100%;
  margin-top: 0;
  margin-bottom: 24px;
}
.teachTOPA .box-card {
  height: 400px;
}
.teachTOPA .topListItem {
  margin-bottom: 8px;
}
.teachTOPA .listTop {
  padding-top: 10px;
}
.teachTOPA .topListItem .number {
  float: left;
  margin-top: 4px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: #70ad47;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-radius: 50%;
  vertical-align: middle;
}
.teachTOPA .topListItem .topName {
  margin-left: 18px;
  float: left;
  width: 70%;
  display: block;
  line-height: 32px;
  color: #37474f;
  padding-left: 24px;
  font-size: 14px;
  background-color: #f5f8fa;
}
.teachTOPA .topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.situationGroup .ratioEcharts,
.situationGroup .teachSituation {
  height: 360px;
}
.peopleGroup .peopleNum {
  height: 360px;
}
.teachSturdentRaio {
  height: 360px;
}
.averageEcharts {
  height: 360px;
}
.courseInfo .schoolShowInfo .box-card {
  background-color: #70ad47;
}
.courseInfo .schoolShowInfo p,
.courseInfo .schoolShowInfo .text,
.courseInfo .schoolShowInfo p.num span {
  color: #fff;
}
.schoolShowInfo .countBoxL .iconfont {
  font-size: 36px;
}
.studentAndTeach {
  height: 263px;
}
.bookNumEcharts {
  height: 360px;
}
.teachMoney {
  height: 360px;
}
.FiveMoney {
  height: 360px;
}
.deviceEcharts,
.fundsCompareEcharts,
.deviceEchartsScale,
.studentScale {
  height: 360px;
}

.bookGroup .xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.bookGroup .xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.bookGroup .xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.bookGroup .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #526069;
}
.bookGroup .item_book {
  width: 45%;
  float: left;
}
.bookGroup .item_bookA {
  float: right;
}
.bookGroup .xqItem {
  width: 49%;
  float: left;
  border-top: 1px solid #e4eaec;
  margin-top: 14px;
}
.book_topTitle {
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  background-color: #70ad47;
}
.book_topTitleA {
  background-color: #ed7d31;
}
.bookGroup .borderNone {
  border-right: none;
}
.borderTop {
  border-top: 1px solid #e4eaec;
}
.bookGroup .xqItem .num {
  color: #70ad47;
}
.bookGroup .item_bookA .num {
  color: #ed7d31;
}
.pieEcharts {
  height: 360px;
}
.selectYear {
  position: absolute;
  right: 7%;
  top: 48px;
  z-index: 99;
}
.chart_show_div {
  width: 100%;
  height: 100%;
}
.width_3 .schoolShow {
  width: 32%;
  margin-right: 2%;
}
.width_3 .schoolShow.last {
  margin-right: 0;
}
.width_2 .schoolShow {
  width: 49%;
  margin-right: 2%;
}
.width_2 .schoolShow.last {
  margin-right: 0;
}
.marginTop24 {
  margin-top: 24px;
}
.special_table {
  width: 100%;
}
</style>
