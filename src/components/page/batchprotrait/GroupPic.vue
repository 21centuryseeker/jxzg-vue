<template>
  <div class="teacher_box">
    <div class="bg_box">
      <!-- 教职工人数 -->
      <div class="jzgrs_box">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="col_item_box theAll boxShadow">
              <div class="col_item_box_left">
                <i class="iconfont" style="font-size: 24px;">&#xe74c;</i>
              </div>
              <div class="col_item_box_right">
                <div>在职教职工人数</div>
                <div>
                  <span>{{list_jsjbqk.value1}}</span>人</div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="col_item_box boxShadow">
              <div class="gender_box">
                <div class="gender_item">
                  <span class="gender_span man">
                    <i class="iconfont" style="color: #62a8ea;font-size: 33px;">&#xe6a6;</i>
                  </span>
                  <span class="font_bold_black">{{list_jsjbqk.value2}}</span>人
                </div>
                <div class="gender_item">
                  <span class="gender_span woman">
                    <i class="iconfont" style="color: #ff8b91;font-size: 33px;">&#xe6a7;</i>
                  </span>
                  <span class="font_bold_black">{{list_jsjbqk.value4}}</span>人
                </div>
                <div class="gender_line">
                  <div class="gender_outside man">男{{list_jsjbqk.value3 * 100}}%</div>
                  <div class="gender_rate">
                    <!-- <span class="gender_rate_span" :style="genderRateStyle"></span> -->
                    <span class="gender_rate_span" :style="{'width': list_jsjbqk.value3 * 100 + '%'}"></span>
                  </div>
                  <div class="gender_outside woman">女{{list_jsjbqk.value5 * 100}}%</div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="col_item_box boxShadow">
              <div class="col_item_box_left">
                <i class="iconfont" style="color: #ffc000">&#xe644;</i>
              </div>
              <div class="col_item_box_right">
                <div>生师比</div>
                <div>
                  <span>{{list_jsjbqk.value6}}:1</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- charts区域 -->
      <div class="charts_box">
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_szjg boxShadow chart_box_cjs" id="chart_box_jzgfbqk">
                <img src="../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_jzgzcjbzc boxShadow chart_box_cjs" id="chart_box_xyjgqk">
                <!-- 学院教工情况 -->
                <img src="../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_3 boxShadow chart_box_cjs" id="chart_box_zrjsnljg">
                <!-- 专任教师年龄结构 -->
                <img src="../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_4 boxShadow chart_box_cjs" id="chart_box_zrjszyjszwjg">
                <!-- 专任教师专业技术职务结构 -->
                <img src="../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="chart_show chart_5 boxShadow chart_box_cjs" id="chart_box_zrjsxljg">
                <img src="../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="chart_show chart_age boxShadow chart_box_cjs" id="chart_box_zrjsxwjg">
                <img src="../../../assets/empty.jpg" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <div class="chart_show chart_9 boxShadow chart_box_cjs" id="chart_box_gyxjsstj">
            <!-- 各院系教师数统计 -->
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </div>
        <div>
          <div class="chart_show chart_9 boxShadow chart_box_cjs" id="chart_box_gyxssb">
            <!-- 各院系师生比 -->
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </div>
        <div>
          <div class="chart_show chart_9 boxShadow chart_box_cjs" id="chart_box_lnjsfb">
            <!-- 历年教师分布情况 -->
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </div>
        <div>
          <div class="chart_show chart_9 boxShadow chart_box_cjs" id="chart_box_gyxssszjsjggjsrs">
            <!-- 各院系双师素质教师及骨干教师人数 -->
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </div>
        <div>
          <div class="chart_show chart_9 boxShadow chart_box_cjs" id="chart_box_gyshdzyzgzsrs">
            <!-- 历年各院系获得职业资格证书人数 -->
            <img src="../../../assets/empty.jpg" alt="">
          </div>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div>
              <div class="chart_show chart_szjg boxShadow" style="height: 490px;">
                <div class="title">授课课程量TOP10</div>
                <el-table :data="skkclData" style="width: 100%">
                  <el-table-column label="排名" align="center" width="50">
                    <template slot-scope="scope">
                      {{1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="value1" label="姓名" align="center">
                  </el-table-column>
                  <el-table-column prop="value2" label="学院" align="left">
                  </el-table-column>
                  <el-table-column prop="value3" label="授课课程量" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <div class="chart_show chart_szjg boxShadow" style="height: 490px;">
                <div class="title">授课课时量TOP10</div>
                <el-table :data="skkslData" style="width: 100%">
                  <el-table-column label="排名" align="center" width="50">
                    <template slot-scope="scope">
                      {{1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="value1" label="姓名" align="center">
                  </el-table-column>
                  <el-table-column prop="value2" label="学院" align="left">
                  </el-table-column>
                  <el-table-column prop="value3" label="授课课时量" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <div class="chart_show chart_szjg boxShadow" style="height: 490px;">
                <div class="title">培训进修次数TOP10</div>
                <el-table :data="pxjxcsData" style="width: 100%">
                  <el-table-column label="排名" align="center" width="50">
                    <template slot-scope="scope">
                      {{1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="value1" label="姓名" align="center">
                  </el-table-column>
                  <el-table-column prop="value2" label="学院" align="left">
                  </el-table-column>
                  <el-table-column prop="value3" label="次数" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <div class="chart_show chart_szjg boxShadow" style="height: 490px;">
                <div class="title">顶岗实践次数TOP10</div>
                <el-table :data="dgsjcsData" style="width: 100%">
                  <el-table-column label="排名" align="center" width="50">
                    <template slot-scope="scope">
                      {{1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="value1" label="姓名" align="center">
                  </el-table-column>
                  <el-table-column prop="value2" label="学院" align="left">
                  </el-table-column>
                  <el-table-column prop="value3" label="次数" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <div class="chart_show chart_szjg boxShadow" style="height: 490px;">
                <div class="title">社会兼职次数TOP10</div>
                <el-table :data="jhjzcsData" style="width: 100%">
                  <el-table-column label="排名" align="center" width="50">
                    <template slot-scope="scope">
                      {{1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="value1" label="姓名" align="center">
                  </el-table-column>
                  <el-table-column prop="value2" label="学院" align="left">
                  </el-table-column>
                  <el-table-column prop="value3" label="次数" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <div class="chart_show chart_szjg boxShadow" style="height: 490px;">
                <div class="title">获奖项目（包括行政性奖励）次数TOP10</div>
                <el-table :data="hjxmcsData" style="width: 100%">
                  <el-table-column label="排名" align="center" width="50">
                    <template slot-scope="scope">
                      {{1 + scope.$index}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="value1" label="姓名" align="center">
                  </el-table-column>
                  <el-table-column prop="value2" label="学院" align="left">
                  </el-table-column>
                  <el-table-column prop="value3" label="次数" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import chartCommon from "./pic_common.js";
export default {
  data() {
    return {
      baseUrl: this.HOST + "/tr/GroupPortrait/web/getPortraitInfoById",
      listUrl: this.HOST + "/tr/GroupPortrait/web/getListInfoById",
      list_jsjbqk: {
        // 教师基本情况
        value1: "", //在职教职工人数
        value2: "", // 男
        value3: "", // 男比例
        value4: "", // 女
        value5: "", // 女比例
        value6: "" //师生比
      },
      skkclData: [],
      skkslData: [],
      pxjxcsData: [],
      dgsjcsData: [],
      jhjzcsData: [],
      hjxmcsData: []
    };
  },
  mounted() {
    // 获取教师基本信息
    this.getList(40, data => {
      Object.assign(this.list_jsjbqk, data);
    });
    // 教职工分布情况
    chartCommon.getLineOrBar(this, this.baseUrl, 41, "chart_box_jzgfbqk", -30, {
      grid: { y2: 80 }
    });
    // 学院教工情况
    chartCommon.getPie(this, this.baseUrl, 42, "chart_box_xyjgqk");
    // 专任教师年龄结构
    chartCommon.getPie(this, this.baseUrl, 43, "chart_box_zrjsnljg");
    // 专任教师专业技术职务结构
    chartCommon.getPie(this, this.baseUrl, 44, "chart_box_zrjszyjszwjg");
    // 专任教师学历结构
    chartCommon.getPie(this, this.baseUrl, 45, "chart_box_zrjsxljg");
    // 专任教师学位结构
    chartCommon.getPie(this, this.baseUrl, 46, "chart_box_zrjsxwjg");
    // 各院系教师数统计
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      47,
      "chart_box_gyxjsstj",
      -30,
      { grid: { y2: 80 } }
    );
    // 历年教师分布情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 107,
      dom: "chart_box_lnjsfb",
      type: "line"
    });
    // 各院系师生比情况
    chartCommon.getSubText(this, this.baseUrl, 49, 50, "chart_box_gyxssb");
    // 历年教师分布情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 51,
      dom: "chart_box_gyxssszjsjggjsrs",
      type: "bar"
    });
    // 历年各院系获得职业资格证书人数
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 95,
      dom: "chart_box_gyshdzyzgzsrs",
      type: "line"
    });
    // 授课课程量top10
    this.getTop10(68, data => {
      this.skkclData = data.data;
    });
    // 授课课时量TOP10
    this.getTop10(69, data => {
      this.skkslData = data.data;
    });
    // 培训进修次数TOP10
    this.getTop10(70, data => {
      this.pxjxcsData = data.data;
    });
    // 顶岗实践次数TOP10
    this.getTop10(71, data => {
      this.dgsjcsData = data.data;
    });
    // 社会兼职次数TOP10
    this.getTop10(72, data => {
      this.jhjzcsData = data.data;
    });
    // 获奖项目（包括行政性奖励）次数TOP10
    this.getTop10(73, data => {
      this.hjxmcsData = data.data;
    });
  },
  methods: {
    getList(id, func) {
      this.$ajaxGet(this.baseUrl, { id: id }, res => {
        if (res.success) {
          if (this.variable_type(func) === "[object Function]") {
            func(res.data);
          }
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    getTop10(id, func) {
      this.$ajaxGet(this.listUrl, { id: id, pageNum: 1, pageSize: 10 }, res => {
        if (res.success) {
          if (this.variable_type(func) === "[object Function]") {
            func(res.data);
          }
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.col_item_box {
  height: 160px;
  position: relative;
  box-sizing: border-box;
  padding: 0 10px;
  vertical-align: top;
  background: #fff;
  border-radius: 4px;
}
.col_item_box.theAll {
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
  line-height: 160px;
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
.gender_box {
  font-size: 0;
}
.gender_item {
  display: inline-block;
  vertical-align: top;
  width: 50%;
  text-align: center;
  line-height: 50px;
  margin: 32px 0;
}
.gender_span {
  display: inline-block;
  vertical-align: top;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
}
.gender_span.man {
  border: 1px solid #d9e8fe;
  background: #ebf3ff;
}
.gender_span.woman {
  background: #fff2f5;
  border: 1px solid #ffdae3;
}
.font_bold_black {
  font-size: 23px;
  color: #526069;
}
div.gender_rate {
  display: inline-block;
  height: 8px;
  width: 70%;
  border-radius: 4px;
  background: #ff8b91;
  overflow: hidden;
}
div.gender_rate .gender_rate_span {
  display: block;
  height: 100%;
  background: #62a8ea;
  width: 50%;
}
.gender_line {
  font-size: 0;
}
div.gender_outside {
  display: inline-block;
  width: 15%;
  font-size: 12px;
}
.gender_outside.man {
  text-align: right;
  color: #62a8ea;
}
.gender_outside.woman {
  color: #ff8b91;
}
.jzgrs_box {
  margin-top: 20px;
}
.chart_show {
  height: 360px;
  background: #fff;
  overflow: hidden;
}
.topList {
  padding-top: 40px;
}
.topListItem {
  margin-bottom: 8px;
}
.topListItem .number {
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
.topListItem .topName {
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
.topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.showCard .el-card__body {
  padding: 0;
}
.showCard li {
  float: left;
  width: 19.8%;
  height: 130px;
  text-align: left;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #e4eaec;
}
.showCard li p {
  padding: 0 19%;
}
.showCard li:nth-child(5n) {
  border-right: none;
}
.showCard li .name {
  font-size: 13px;
  line-height: 22px;
  padding-top: 34px;
  color: #76838f;
}
.showCard li span {
  font-size: 24px;
  padding-right: 10px;
  color: #70ad47;
}
.showCard li .number {
  font-size: 12px;
  color: #a3afb7;
}
.showCard li:nth-child(2) span {
  color: #ee8239;
}
.showCard li:nth-child(3) span {
  color: #ffc000;
}
.showCard li:nth-child(4) span {
  color: #4472c4;
}
.showCard li:nth-child(5) span {
  color: #dd6969;
}
.showCard li:nth-child(6) span {
  color: #5b9bd5;
}
.showCard li:nth-child(7) span {
  color: #00a6a6;
}
.showCard li:nth-child(8) span {
  color: #6c6fbf;
}
.showCard li:nth-child(9) span {
  color: #ffb980;
}
.col_div {
  height: 138px;
  border-bottom: 1px solid #e4eaec;
  border-left: 1px solid #e4eaec;
  box-sizing: border-box;
  padding-top: 40px;
}
/* .last_oDiv .col_div:nth-of-type(odd) {
  border-left: 0 !important;
} */
.col_div .col_title {
  font-size: 12px;
  color: #585858;
}
.col_div > div {
  width: 160px;
  margin: 0 auto;
}
.col_div > div span {
  color: #a3afb7;
  font-size: 12px;
}
.col_div > div > span:first-child {
  color: #6c6fbf;
  font-size: 30px;
  font-family: "Arial";
}
.chart_show {
  margin-top: 22px;
  padding: 20px;
  box-sizing: border-box;
}
/* .chart_show_child {
  width: 100%;
  height: 100%;
} */
div.title {
  height: 58px;
  line-height: 58px;
  font-size: 16px;
  color: #37474f;
  padding-left: 26px;
}
/* .titleTop {
    line-height: 18px;
    padding-top: 0;
    font-size: 18px;
    color: #37474f;
    padding-left: 10px;
    border-left: 5px solid #70ad47;
    margin-bottom: 24px;
}
.content_item {
  background:#fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
  display: none;
} */

.addZD {
  text-align: right;
  margin-bottom: 10px;
  margin-top: -10px;
}
</style>
