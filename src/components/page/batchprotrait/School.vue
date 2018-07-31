<template>
  <div class="mainContent_school">
    <div class="list_card marginBtom24 clearfix">
      <div class="schoolShow cjs_add_new">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">教职工总数</p>
            <p class="num">
              <span>{{list_01.value1}}</span> 人
            </p>
            <template v-if="list_01.value5 !== undefined">
              <template v-if="list_01.value5 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_01.value5}} 人
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_01.value5}} 人
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow cjs_add_new">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">在校生总数</p>
            <p class="num">
              <span>{{list_01.value2}}</span> 人
            </p>
            <template v-if="list_01.value6 !== undefined">
              <template v-if="list_01.value6 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_01.value6}} 人
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_01.value6}} 人
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow cjs_add_new">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">生师比</p>
            <p class="num">
              <span>{{list_01.value3}}:1</span>
            </p>
            <template v-if="list_01.value7 !== undefined">
              <template v-if="list_01.value7 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_01.value7}}
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_01.value7}}
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last cjs_add_new">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor4">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">固定资产总值</p>
            <p class="num">
              <span>{{list_01.value4}}</span> 万元
            </p>
            <template v-if="list_01.value8 !== undefined">
              <template v-if="list_01.value8 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_01.value8}} 万元
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_01.value8}} 万元
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_lnjzgrs"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_lnzxsrs"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_001"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_002"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <radarChart flag="0"></radarChart> -->
    <div class="expandBox marginBtom24">
      <div class="titleTop">基本办学条件</div>
      <el-card class="box-card">

        <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
          <div class="schoolShow schoolShowA">
            <div class="countBoxL">
              <i class="iconfont iconColor1">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">学校总占地面积</p>
              <p class="num">
                <span>{{list_jbbxtj.value1}}</span> 平方米
              </p>
              <template v-if="list_jbbxtj.value4 !== undefined">
                <template v-if="list_jbbxtj.value4 - 0 > 0">
                  <p>
                    相比同类院校多
                    <span>{{list_jbbxtj.value4}} 平方米
                      <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                    </span>
                  </p>
                </template>
                <template v-else>
                  <p>
                    相比同类院校少
                    <span>{{-list_jbbxtj.value4}} 平方米
                      <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                    </span>
                  </p>
                </template>
              </template>
            </div>
          </div>
          <div class="schoolShow schoolShowA">
            <div class="countBoxL">
              <i class="iconfont iconColor2">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">学校产权校舍面积</p>
              <p class="num">
                <span>{{list_jbbxtj.value2}}</span> 平方米
              </p>
              <template v-if="list_jbbxtj.value5 !== undefined">
                <template v-if="list_jbbxtj.value5 - 0 > 0">
                  <p>
                    相比同类院校多
                    <span>{{list_jbbxtj.value5}} 平方米
                      <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                    </span>
                  </p>
                </template>
                <template v-else>
                  <p>
                    相比同类院校少
                    <span>{{-list_jbbxtj.value5}} 平方米
                      <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                    </span>
                  </p>
                </template>
              </template>
            </div>
          </div>
          <div class="schoolShow schoolShowA">
            <div class="countBoxL">
              <i class="iconfont iconColor3">&#xe644;</i>
            </div>
            <div class="countBoxR">
              <p class="text">今年新增校舍</p>
              <p class="num">
                <span>{{list_jbbxtj.value3}}</span> 平方米
              </p>
              <template v-if="list_jbbxtj.value6 !== undefined">
                <template v-if="list_jbbxtj.value6 - 0 > 0">
                  <p>
                    相比同类院校多
                    <span>{{list_jbbxtj.value6}} 平方米
                      <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                    </span>
                  </p>
                </template>
                <template v-else>
                  <p>
                    相比同类院校少
                    <span>{{-list_jbbxtj.value6}} 平方米
                      <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                    </span>
                  </p>
                </template>
              </template>
            </div>
          </div>
        </div>
        <div class="expandEcharts" id="chart_box_jbbxtj"></div>
      </el-card>
    </div>
    <!-- 馆藏图书资料 -->
    <div class="list_card marginBtom24 clearfix width_3">
      <div class="titleTop" style="margin-bottom: 0;">馆藏图书资料</div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">纸质图书总册数</p>
            <p class="num">
              <span>{{list_gctszl.value1}}</span> 万册
            </p>
            <template v-if="list_gctszl.value7 !== undefined">
              <template v-if="list_gctszl.value7 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_gctszl.value7}} 万册
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_gctszl.value7}} 万册
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">本学年新增数</p>
            <p class="num">
              <span>{{list_gctszl.value2}}</span> 万册
            </p>
            <template v-if="list_gctszl.value8 !== undefined">
              <template v-if="list_gctszl.value8 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_gctszl.value8}} 万册
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_gctszl.value8}} 万册
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">生均图书</p>
            <p class="num">
              <span>{{list_gctszl.value3}}</span> 册/生
            </p>
            <template v-if="list_gctszl.value9 !== undefined">
              <template v-if="list_gctszl.value9 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_gctszl.value9}} 册/生
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_gctszl.value9}} 册/生
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor4">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">中文纸质专业期刊</p>
            <p class="num">
              <span>{{list_gctszl.value4}}</span> 种
            </p>
            <template v-if="list_gctszl.value10 !== undefined">
              <template v-if="list_gctszl.value10 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_gctszl.value10}} 种
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_gctszl.value10}} 种
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor4">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">外文纸质专业期刊</p>
            <p class="num">
              <span>{{list_gctszl.value5}}</span> 种
            </p>
            <template v-if="list_gctszl.value11 !== undefined">
              <template v-if="list_gctszl.value11 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_gctszl.value11}} 种
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_gctszl.value11}} 种
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor4">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">电子专业期刊</p>
            <p class="num">
              <span>{{list_gctszl.value6}}</span> 种
            </p>
            <template v-if="list_gctszl.value12 !== undefined">
              <template v-if="list_gctszl.value12 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_gctszl.value12}} 种
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_gctszl.value12}} 种
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>

    <!-- 阅览室、机房、教室 -->
    <div class="list_card marginBtom24 clearfix width_3">
      <div class="titleTop" style="margin-bottom: 0;">阅览室、机房、教室</div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">阅览室座位数</p>
            <p class="num">
              <span>{{list_yls_jf_js.value1}}</span> 个
            </p>
            <template v-if="list_yls_jf_js.value4 !== undefined">
              <template v-if="list_yls_jf_js.value4 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_yls_jf_js.value4}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_yls_jf_js.value4}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">计算机数</p>
            <p class="num">
              <span>{{list_yls_jf_js.value2}}</span> 台
            </p>
            <template v-if="list_yls_jf_js.value5 !== undefined">
              <template v-if="list_yls_jf_js.value5 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_yls_jf_js.value5}} 台
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_yls_jf_js.value5}} 台
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">教室数</p>
            <p class="num">
              <span>{{list_yls_jf_js.value3}}</span> 间
            </p>
            <template v-if="list_yls_jf_js.value6 !== undefined">
              <template v-if="list_yls_jf_js.value6 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_yls_jf_js.value6}} 间
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_yls_jf_js.value6}} 间
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>

    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_jxyjsj"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_jxxzyf"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 信息化建设情况 -->
    <div class="expandBox marginBtom24">
      <div class="titleTop">信息化建设情况</div>
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_xxhjs"></div>
      </el-card>
    </div>
    <!-- 实践教学条件 -->
    <div class="titleTop">实践教学条件</div>
    <!-- 校内实践基地 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div class="captionTitle">校内实践基地</div>
        <div class="clearfix">
          <div class="item">
            <p class="resName">实践基地总数</p>
            <p class="resNum color1">
              <span class="first">
                <em>{{list_xnsjjd.value1}}</em> 个</span>
            </p>
            <template v-if="list_xnsjjd.value5 !== undefined">
              <template v-if="list_xnsjjd.value5 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xnsjjd.value5}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xnsjjd.value5}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
          <div class="item">
            <p class="resName">建筑面积</p>
            <p class="resNum color2">
              <span class="first">
                <em>{{list_xnsjjd.value2}}</em> 平方米</span>
            </p>
            <template v-if="list_xnsjjd.value6 !== undefined">
              <template v-if="list_xnsjjd.value6 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xnsjjd.value6}} 平方米
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xnsjjd.value6}} 平方米
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
          <div class="item">
            <p class="resName">设备总数</p>
            <p class="resNum color3">
              <span class="first">
                <em>{{list_xnsjjd.value3}}</em> 台/套</span>
            </p>
            <template v-if="list_xnsjjd.value7 !== undefined">
              <template v-if="list_xnsjjd.value7 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xnsjjd.value7}} 台/套
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xnsjjd.value7}} 台/套
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
          <div class="item borderNone">
            <p class="resName">设备总值</p>
            <p class="resNum color4">
              <span class="first">
                <em>{{list_xnsjjd.value4}}</em> 万元</span>
            </p>
            <template v-if="list_xnsjjd.value8 !== undefined">
              <template v-if="list_xnsjjd.value8 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xnsjjd.value8}} 万元
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xnsjjd.value8}} 万元
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lnxnsjjds"></div>
      </el-card>
    </div>
    <!-- 校外实践基地 -->
    <div class="resourceBox marginBtom24">
      <el-card class="box-card clearfix">
        <div class="captionTitle">校外实践基地</div>
        <div class="clearfix">
          <div class="item">
            <p class="resName">实践基地总数</p>
            <p class="resNum color1">
              <span class="first">
                <em>{{list_xwsjjd.value1}}</em> 个</span>
            </p>
            <template v-if="list_xwsjjd.value5 !== undefined">
              <template v-if="list_xwsjjd.value5 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xwsjjd.value5}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xwsjjd.value5}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
          <div class="item">
            <p class="resName">实习实训项目</p>
            <p class="resNum color2">
              <span class="first">
                <em>{{list_xwsjjd.value2}}</em> 个</span>
            </p>
            <template v-if="list_xwsjjd.value6 !== undefined">
              <template v-if="list_xwsjjd.value6 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xwsjjd.value6}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xwsjjd.value6}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
          <div class="item">
            <p class="resName">接待学生量</p>
            <p class="resNum color3">
              <span class="first">
                <em>{{list_xwsjjd.value3}}</em> 人次</span>
            </p>
            <template v-if="list_xwsjjd.value7 !== undefined">
              <template v-if="list_xwsjjd.value7 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xwsjjd.value7}} 人次
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xwsjjd.value7}} 人次
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
          <div class="item borderNone">
            <p class="resName">接收应届毕业生就业数</p>
            <p class="resNum color4">
              <span class="first">
                <em>{{list_xwsjjd.value4}}</em> 人</span>
            </p>
            <template v-if="list_xwsjjd.value8 !== undefined">
              <template v-if="list_xwsjjd.value8 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xwsjjd.value8}} 人
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xwsjjd.value8}} 人
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lnxwsjjds"></div>
      </el-card>
    </div>
    <!-- 办学经费 -->
    <div class="list_card marginBtom24 clearfix width_2">
      <div class="titleTop" style="margin-bottom: 0;">办学经费</div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">学校总收入</p>
            <p class="num">
              <span>{{list_bxjf.value1}}</span> 万元
            </p>
            <template v-if="list_bxjf.value3 !== undefined">
              <template v-if="list_bxjf.value3 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_bxjf.value3}} 万元
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_bxjf.value3}} 万元
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">学校总支出</p>
            <p class="num">
              <span>{{list_bxjf.value2}}</span> 万元
            </p>
            <template v-if="list_bxjf.value4 !== undefined">
              <template v-if="list_bxjf.value4 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_bxjf.value4}} 万元
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_bxjf.value4}} 万元
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_gsrlxzb"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_gzclxzb"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 专业及课程设置 -->
    <div class="list_card marginBtom24 clearfix width_3">
      <div class="titleTop" style="margin-bottom: 0;">专业及课程设置</div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">院系</p>
            <p class="num">
              <span>{{list_zy_kc.value1}}</span> 个
            </p>
            <template v-if="list_zy_kc.value4 !== undefined">
              <template v-if="list_zy_kc.value4 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_zy_kc.value4}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_zy_kc.value4}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">专业</p>
            <p class="num">
              <span>{{list_zy_kc.value2}}</span> 个
            </p>
            <template v-if="list_zy_kc.value5 !== undefined">
              <template v-if="list_zy_kc.value5 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_zy_kc.value5}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_zy_kc.value5}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">课程</p>
            <p class="num">
              <span>{{list_zy_kc.value3}}</span> 个
            </p>
            <template v-if="list_zy_kc.value6 !== undefined">
              <template v-if="list_zy_kc.value6 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_zy_kc.value6}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_zy_kc.value6}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_lnszdzys"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_lnszdkcs"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="chart_box_gyxszzys"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="chart_box_gzyszkcs"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 招生及录取情况 -->
    <div class="list_card marginBtom24 clearfix width_3">
      <div class="titleTop" style="margin-bottom: 0;">招生及录取情况</div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">计划招生总人数</p>
            <p class="num">
              <span>{{list_zslq.value1}}</span> 人
            </p>
            <template v-if="list_zslq.value4 !== undefined">
              <template v-if="list_zslq.value4 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_zslq.value4}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_zslq.value4}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">实际录取总人数</p>
            <p class="num">
              <span>{{list_zslq.value2}}</span> 人
            </p>
            <template v-if="list_zslq.value5 !== undefined">
              <template v-if="list_zslq.value5 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_zslq.value5}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_zslq.value5}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">实际报到总人数</p>
            <p class="num">
              <span>{{list_zslq.value3}}</span> 人
            </p>
            <template v-if="list_zslq.value6 !== undefined">
              <template v-if="list_zslq.value6 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_zslq.value6}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_zslq.value6}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 历年各院系计划招生情况 -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lngyxjhzsqk"></div>
      </el-card>
    </div>
    <!-- 历年各院系录取率和报到率 -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lngyxlqlhbdl"></div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lngyxbdl"></div>
      </el-card>
    </div>
    <!-- 历年各院系毕业生人数 -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lngyxbysrs"></div>
      </el-card>
    </div>
    <!-- 学生社团 -->
    <div class="list_card marginBtom24 clearfix width_2">
      <div class="titleTop" style="margin-bottom: 0;">学生社团</div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">社团共计</p>
            <p class="num">
              <span>{{list_xsst.value1}}</span> 个
            </p>
            <template v-if="list_xsst.value3 !== undefined">
              <template v-if="list_xsst.value3 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xsst.value3}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xsst.value3}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">现有成员</p>
            <p class="num">
              <span>{{list_xsst.value2}}</span> 人
            </p>
            <template v-if="list_xsst.value4 !== undefined">
              <template v-if="list_xsst.value4 - 0 > 0">
                <p>
                  相比同类院校多
                  <span>{{list_xsst.value4}} 个
                    <i class="iconfont" style="color: #70ad47;">&#xe614;</i>
                  </span>
                </p>
              </template>
              <template v-else>
                <p>
                  相比同类院校少
                  <span>{{-list_xsst.value4}} 个
                    <i class="iconfont" style="color: #ffc000;">&#xe616;</i>
                  </span>
                </p>
              </template>
            </template>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 历年学生社团数目 -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_lnxsstsm"></div>
      </el-card>
    </div>
    <!-- 各单位注册社团数 -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_gdwzcsts"></div>
      </el-card>
    </div>
    <!-- 各类别社团数 -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="chart_box_glbsts"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
import chartCommon from "./pic_common.js";
import radarChart from "./randerChart.vue";
export default {
  components: { radarChart },
  data() {
    return {
      baseUrl: this.HOST + "/tr/GroupPortrait/web/getPortraitInfoById",
      list_01: {
        // 基本情况
        value1: "", //教职工总数
        value2: "", // 在校生总数
        value3: "", //生师比
        value4: "" //固定资产总值
      },
      list_jbbxtj: {
        value1: "", //学校总占地面积
        value2: "", // 学校产权校舍面积
        value3: "" //今年新增校舍
      },
      list_gctszl: {
        value1: "", //纸质图书总册数
        value2: "", // 本学年新增数
        value3: "", //生均图书
        value4: "", //中文纸质专业期刊
        value5: "", // 外文纸质专业期刊
        value6: "" //电子专业期刊
      },
      list_yls_jf_js: {
        // 阅览室、机房、教室
        value1: "", //阅览室座位数
        value2: "", // 计算机数
        value3: "" //教室数
      },
      list_xnsjjd: {
        // 校内实践基地
        value1: "", //实践基地总数
        value2: "", // 建筑面积
        value3: "", //设备总数
        value4: "" //设备总值
      },
      list_xwsjjd: {
        // 校外实践基地
        value1: "", //实践基地总数
        value2: "", // 实习实训项目
        value3: "", //接待学生量
        value4: "" //接收应届毕业生就业数
      },
      list_bxjf: {
        // 办学经费
        value1: "", //实践基地总数
        value2: "" // 实习实训项目
      },
      list_zy_kc: {
        // 专业及课程设置
        value1: "", //院系
        value2: "", // 专业
        value3: "" //课程
      },
      list_zslq: {
        // 招生及录取情况
        value1: "", //计划招生总人数
        value2: "", // 实际录取总人数
        value3: "" //实际报到总人数
      },
      list_xsst: {
        // 学生社团
        value1: "", //社团共计
        value2: "" // 现有成员
      }
    };
  },
  mounted() {
    // 获取学校画像基本情况
    this.getList(1, data => {
      Object.assign(this.list_01, data);
    });
    // 历年教职工人数
    chartCommon.getLineOrBar(this, this.baseUrl, 76, "chart_box_lnjzgrs", -30, {
      grid: { y2: 80 }
    });
    // 历年在校生人数
    chartCommon.getLineOrBar(this, this.baseUrl, 77, "chart_box_lnzxsrs", -30, {
      grid: { y2: 80 }
    });
    // 获取学院教工情况
    chartCommon.getPie(this, this.baseUrl, 2, "chart_box_001");
    // 全日制高职在校生
    chartCommon.getPie(this, this.baseUrl, 3, "chart_box_002");
    // 基本办学条件
    this.getList(4, data => {
      Object.assign(this.list_jbbxtj, data);
    });
    chartCommon.getLineOrBar(this, this.baseUrl, 5, "chart_box_jbbxtj", -30, {
      grid: { y2: 80 }
    });
    // 馆藏图书资料
    this.getList(6, data => {
      Object.assign(this.list_gctszl, data);
    });
    // 阅览室、机房、教室
    this.getList(7, data => {
      Object.assign(this.list_yls_jf_js, data);
    });
    // 教学用计算机分布情况
    chartCommon.getPie(this, this.baseUrl, 8, "chart_box_jxyjsj", 1);
    // 教学行政用房情况
    chartCommon.getCircle(this, this.baseUrl, 9, "chart_box_jxxzyf", 1);
    // 信息化建设情况
    chartCommon.getLineOrBar(this, this.baseUrl, 10, "chart_box_xxhjs", -30, {
      grid: { y2: 80 }
    });
    // 校内实践基地
    this.getList(11, data => {
      Object.assign(this.list_xnsjjd, data);
    });
    // 历年被列为校内实训基地数
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      12,
      "chart_box_lnxnsjjds",
      -30,
      { grid: { y2: 80 } }
    );
    // 校外实践基地
    this.getList(96, data => {
      Object.assign(this.list_xwsjjd, data);
    });
    // 历年被列为校外实训基地数
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      97,
      "chart_box_lnxwsjjds",
      -30,
      { grid: { y2: 80 } }
    );
    // 办学经费
    this.getList(13, data => {
      Object.assign(this.list_bxjf, data);
    });
    // 各收入类型占比
    chartCommon.getCircle(this, this.baseUrl, 14, "chart_box_gsrlxzb", 1);
    // 各支出类型占比
    chartCommon.getCircle(this, this.baseUrl, 15, "chart_box_gzclxzb", 1);
    // 专业及课程设置
    this.getList(16, data => {
      Object.assign(this.list_zy_kc, data);
    });
    // 历年设置的专业数
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      78,
      "chart_box_lnszdzys",
      -30,
      { grid: { y2: 80 } }
    );
    // 历年设置的课程数
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      79,
      "chart_box_lnszdkcs",
      -30,
      { grid: { y2: 80 } }
    );
    // 各院系设置的专业数
    chartCommon.getLineOrBar(
      this,
      this.baseUrl,
      17,
      "chart_box_gyxszzys",
      -30,
      { grid: { y2: 80 } }
    );
    // 各专业设置的课程数
    chartCommon.getDataZoom(this, this.baseUrl, 18, "chart_box_gzyszkcs", {
      x: 30,
      y: 60,
      x2: 50,
      y2: 110
    });
    // 招生及录取情况
    this.getList(19, data => {
      Object.assign(this.list_zslq, data);
    });
    // 历年各院系计划招生情况
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 80,
      dom: "chart_box_lngyxjhzsqk",
      type: "line"
    });
    // 历年各院系录取率和报到率
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 81,
      dom: "chart_box_lngyxlqlhbdl",
      type: "line"
    });
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 106,
      dom: "chart_box_lngyxbdl",
      type: "line"
    });
    // 历年各院系毕业生人数
    chartCommon.getMoreLineOrBar({
      _this: this,
      url: this.baseUrl,
      id: 82,
      dom: "chart_box_lngyxbysrs",
      type: "line"
    });
    // 学生社团
    this.getList(21, data => {
      Object.assign(this.list_xsst, data);
    });
    // 历年学生社团数目
    chartCommon.getLineOrBar(this, this.baseUrl, 83, "chart_box_lnxsstsm", 0, {
      grid: { y2: 80 }
    });
    // 各单位注册社团数
    chartCommon.getDataZoom(this, this.baseUrl, 22, "chart_box_gdwzcsts", {
      x: 30,
      y: 60,
      x2: 50,
      y2: 110
    });
    // 各类别社团数
    chartCommon.getLineOrBar(this, this.baseUrl, 23, "chart_box_glbsts", -30, {
      grid: { y2: 80 }
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
    }
  }
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
</style>
