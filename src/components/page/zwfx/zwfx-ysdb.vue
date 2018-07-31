<template>
  <div class="zwfx-ysdb">
    <div class="zzjg_box title_box  tab-controlFixed" v-if="false">
      <el-radio-group v-model="job" @change="jobChange">
        <el-radio-button v-for="item in jobItems" :label="item.deptId + ',' + item.roleId" :key="item.deptId">{{item.deptName}}</el-radio-button>
      </el-radio-group>
    </div>
    <!-- <div class="container_box_header"  style="margin-top: 40px;">自我诊断</div> -->
    <div class="zzjg_box">
      <!-- <el-radio-group v-model="user" @change="userChange">
        <el-radio-button v-for="item in userItems" :label="item.value" :key="item.value">{{item.label}}</el-radio-button>
      </el-radio-group> -->
      <div class="group_box">
    <div class="type_group boxShadow">
      <el-radio-group v-model="user" @change="userChange">
        <el-radio-button label="1"  >
          <img src="../../../assets/teacher-group.png" alt="">
          <div>教师</div>
        </el-radio-button>
        <el-radio-button label="2"  >
          <img src="../../../assets/student-group.png" alt="">
          <div>学生</div>
        </el-radio-button>
        <!-- <el-radio-button label="3"  >
          <img src="../../../assets/school-group.png" alt="">
          <div>学校</div>
        </el-radio-button> -->
        <el-radio-button label="4" >
          <img src="../../../assets/major-group.png" alt="">
          <div>专业</div>
        </el-radio-button>
        <el-radio-button label="5" >
          <img src="../../../assets/class-group.png" alt="">
          <div>课程</div>
        </el-radio-button>
      </el-radio-group>
      <el-button  @click="addNewChart" style="float: right;margin: 20px 20px 0 0;color: #fff;background: #70ad47;">自定义分析</el-button>
    </div>
  </div>
    </div>
    <div class="jsc_content">
      <!-- 表格 -->
      <!-- 教师的表格 -->
      <template>
        <template v-for="item in studentTableList">
          <div class="table_relative_father boxShadow" :key="item.tableId" style="position: relative;">
            <i class="iconfont close_i" @click="deleteTable(item.tableId)" title="删除表格">&#xe635;</i>
            <div class="table_full_father">
              <table class="table_full"  cellspacing="0">
          <thead>
            <tr>
              <td style="width: 120px;"></td>
              <template v-for="(item1, index) in item.colslist">
                <td :key="index">
                <div class="div_relative">
                  <img src="../../../assets/jiaoshihuaxiang.png" alt="" class="user_header" v-if="user - 0 === 1">
                  <img src="../../../assets/user.png" alt="" class="user_header" v-if="user - 0 === 2">
                  <img src="../../../assets/zhuanyehuaxiang.png" alt="" class="user_header" v-if="user - 0 === 4">
                  <img src="../../../assets/kechenghuaxiang.png" alt="" class="user_header" v-if="user - 0 === 5">
                  <div>{{item1.colsName}}</div>
                  <i class="iconfont close_thead_i" @click="deleteStudentCol(item.tableId, item1.colsCode)" title="删除分析对象">&#xe635;</i>
                </div>
              </td>
              </template>
              <td>
                <div class="div_relative">
                  <img src="../../../assets/jiaoshihuaxiang.png" alt="" class="user_header" v-if="user - 0 === 1">
                  <img src="../../../assets/user.png" alt="" class="user_header" v-if="user - 0 === 2">
                  <img src="../../../assets/zhuanyehuaxiang.png" alt="" class="user_header" v-if="user - 0 === 4">
                  <img src="../../../assets/kechenghuaxiang.png" alt="" class="user_header" v-if="user - 0 === 5">
                  <div>
                    <el-button  type="primary" @click="addNewCol(item.tableId, item.rowslist)" size="small" style="width: 140px;">添加分析对象</el-button>
                  </div>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item2, index2) in item.rowslist">
              <tr :key="index2">
              <td>
                <div class="div_relative">
                  <div class="tbody_div_box"><span>{{item2.row_name}}</span></div>
                  <i class="iconfont close_tbody_i" @click="deleteStudentRow(item.tableId, item2.rowCode)" title="删除要素">&#xe635;</i>
                </div>
              </td>
              <template v-for="(item3, index3) in item.reslist">
                <td :key="index3" style="text-align: center;">
                  {{item3[item2.rowCode]}}
                </td>
              </template>
              <td></td>
            </tr>
            </template>
            <tr>
              <td style="text-align: center;">
                <el-button  type="primary" @click="addNewRow(item.tableId, item.rowslist)" size="small" style="width: 100px;">添加要素</el-button>
              </td>
              <td v-for="(item4, index4) in item.reslist" :key="index4"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
            </div>
      </div>
        </template>
      </template>
      <!-- 新增分析的容器 -->
      <div class="content_item add_new boxShadow" @click="addNewChart">
            <i class="el-icon-circle-plus-outline"></i>
            <div>自定义分析</div>
          </div>
    </div>
    <!-- 新增自定义的弹出层 -->
    <el-dialog
      title="自定义分析"
      :visible.sync="dialogVisible"
      width="800px">
      <!-- 步骤 -->
      <div class="step_box">
          <div class="step_item" :class="{active: isFirst === 1}">
            <div class="step_item_left">1</div>
            <div class="step_item_right">选择分析对象</div>
          </div>
          <div class="step_item" :class="{active: isFirst === 2}">
            <div class="step_item_left">2</div>
            <div class="step_item_right">选择要素</div>
          </div>
        </div>
      <!-- 教师 -->
      <div v-if="isFirst === 1">
        <!-- 选择载体 -->
        <div  v-if="this.user - 0 === 1">
        <!-- 选择专业 -->
        <div class="item_box">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="teacherYxValue" filterable placeholder="请选择" @change="teacherYxChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in teacherYxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择教师 -->
        <div class="item_box">
          <div class="item_left">选择教师</div>
          <div class="item_right">
            <el-select v-model="teacherValue" placeholder="请选择" style="width: 280px;" :disabled="js_js_disabled" clearable>
            <el-option
              v-for="item in teacherOption"
              :key="item.zgh"
              :label="item.jsxm"
              :value="item.zgh">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <!-- 学生 -->
      <div v-if="this.user - 0 === 2">
        <!-- 选择院系 -->
        <div class="item_box">
          <div class="item_left">选择院系</div>
          <div class="item_right">
            <el-select v-model="studentyxValue" placeholder="请选择" @change="studentyxChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in studentyxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择专业 -->
        <div class="item_box">
          <div class="item_left">选择专业</div>
          <div class="item_right">
            <el-select v-model="studentMajorValue" placeholder="请选择" style="width: 280px;" @change="studentMajorChange" clearable :disabled="xs_zy_disabled">
              <el-option v-for="item in studentMajorOption" :key="item.dm" :label="item.mc" :value="item.dm">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 选择班级 -->
        <div class="item_box">
          <div class="item_left">选择班级</div>
          <div class="item_right">
            <el-select v-model="studentClassValue" placeholder="请选择" style="width: 280px;" @change="studentClassChange" clearable  :disabled="xs_bj_disabled">
              <el-option v-for="item in studentClassOption" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 选择院系 -->
        <!-- 选择 -->
        <!-- <div class="item_box">
          <div class="item_left">政治面貌</div>
          <div class="item_right">
            <el-select v-model="zzmmValue" placeholder="请选择" style="width: 280px;" @change="zzmmChange" clearable>
            <el-option
              v-for="item in zzmmOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择 -->
        <!-- <div class="item_box">
          <div class="item_left">学习方式</div>
          <div class="item_right">
            <el-select v-model="studyType" placeholder="请选择" style="width: 280px;" @change="studyTypeChange" clearable>
            <el-option
              v-for="item in studyTypeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择 -->
        <!-- <div class="item_box">
          <div class="item_left">是否在校</div>
          <div class="item_right">
            <el-select v-model="isAtSchool" placeholder="请选择" style="width: 280px;" @change="isAtSchoolChange" clearable>
            <el-option
              v-for="item in atSchoolOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择 -->
        <div class="item_box">
          <div class="item_left">选择学生</div>
          <div class="item_right">
            <el-select v-model="xsValue" placeholder="请选择" style="width: 280px;" clearable  :disabled="xs_xs_disabled">
            <el-option
              v-for="item in xsOption"
              :key="item.name"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <!-- 专业 -->
      <div v-if="this.user - 0 === 4">
        <!-- 选择院系 -->
        <div class="item_box">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="yxValue" placeholder="请选择" @change="yxChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in yxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择院系 -->
        <div class="item_box">
          <div class="item_left">专业</div>
          <div class="item_right">
            <el-select v-model="zyValue" placeholder="请选择"  style="width: 280px;" :disabled="zy_zy_disabled" clearable>
            <el-option
              v-for="item in zyOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.mc">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <!-- 课程 -->
      <div v-if="this.user - 0 === 5">
        <!-- 选择课程性质 -->
        <div class="item_box">
          <div class="item_left">课程性质</div>
          <div class="item_right">
            <el-select v-model="kcxzValue" placeholder="请选择" @change="kcxzChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in kcxzOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择年级 -->
        <!-- <div class="item_box" v-if="if_kc_show">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="njValue" placeholder="请选择" @change="njChange" style="width: 280px;" clearable :disabled="kc_nj_disabled">
            <el-option
              v-for="item in njOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择专业院系 -->
        <!-- <div class="item_box" v-if="if_kc_show">
          <div class="item_left">选择专业</div>
          <div class="item_right">
            <el-select v-model="zyValue" placeholder="请选择" @change="zyChange" style="width: 280px;" clearable :disabled="kc_zy_disabled">
            <el-option
              v-for="item in zyOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择课程 -->
        <div class="item_box">
          <div class="item_left">课程</div>
          <div class="item_right">
            <el-select v-model="kcValue" placeholder="请选择" style="width: 280px;" :disabled="kc_kc_disabled" clearable>
            <el-option
              v-for="item in kcOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.mc">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      </div>
      <div v-if="isFirst === 2">
        <!-- 教师 -->
      <div  v-if="this.user - 0 === 1">
        <!-- 选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="teacherCheckGroup">
             <template v-for="item in teacherCheckGroupList">
               <el-checkbox :label="item.value" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 学生 -->
      <div v-if="this.user - 0 === 2">
        <!-- 学生选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="studentCheckGroup">
             <template v-for="item in studentCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 专业 -->
      <div v-if="this.user - 0 === 4">

        <!-- 专业选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="majorCheckGroup">
             <template v-for="item in majorCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 课程 -->
      <div v-if="this.user - 0 === 5">
        <!-- 课程选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="classCheckGroup">
             <template v-for="item in classCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      </div>
      <!-- <div  v-if="this.user - 0 === 1">
        <div class="item_box">
          <div class="item_left">选择专业</div>
          <div class="item_right">
            <el-select v-model="majorValue" filterable placeholder="请选择" @change="majorChange" style="width: 280px;">
            <el-option
              v-for="item in majorOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">选择教师</div>
          <div class="item_right">
            <el-select v-model="teacherValue" placeholder="请选择" style="width: 280px;">
            <el-option
              v-for="item in teacherOption"
              :key="item.zgh"
              :label="item.jsxm"
              :value="item.zgh">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="ysBox">
           <el-checkbox-group v-model="teacherCheckGroup">
             <template v-for="item in teacherCheckGroupList">
               <el-checkbox :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <div v-if="this.user - 0 === 2">
        <div class="item_box">
          <div class="item_left">选择专业</div>
          <div class="item_right">
            <el-select v-model="majorValue" filterable placeholder="请选择" style="width: 280px;" @change="studentMajorChange">
              <el-option v-for="item in majorOption" :key="item.dm" :label="item.mc" :value="item.dm">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">政治面貌</div>
          <div class="item_right">
            <el-select v-model="zzmmValue" placeholder="请选择" style="width: 280px;" @change="zzmmChange">
            <el-option
              v-for="item in zzmmOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">学习方式</div>
          <div class="item_right">
            <el-select v-model="studyType" placeholder="请选择" style="width: 280px;" @change="studyTypeChange">
            <el-option
              v-for="item in studyTypeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">是否在校</div>
          <div class="item_right">
            <el-select v-model="isAtSchool" placeholder="请选择" style="width: 280px;" @change="isAtSchoolChange">
            <el-option
              v-for="item in atSchoolOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">选择学生</div>
          <div class="item_right">
            <el-select v-model="xsValue" placeholder="请选择" style="width: 280px;">
            <el-option
              v-for="item in xsOption"
              :key="item.name"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="ysBox">
           <el-checkbox-group v-model="studentCheckGroup">
             <template v-for="item in studentCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <div v-if="this.user - 0 === 4">
        <div class="item_box">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="yxValue" placeholder="请选择" @change="yxChange" style="width: 280px;">
            <el-option
              v-for="item in yxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">专业</div>
          <div class="item_right">
            <el-select v-model="zyValue" placeholder="请选择"  style="width: 280px;">
            <el-option
              v-for="item in zyOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.mc">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="ysBox">
           <el-checkbox-group v-model="majorCheckGroup">
             <template v-for="item in majorCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <div v-if="this.user - 0 === 5">
        <div class="item_box">
          <div class="item_left">课程性质</div>
          <div class="item_right">
            <el-select v-model="kcxzValue" placeholder="请选择" @change="kcxzChange" style="width: 280px;">
            <el-option
              v-for="item in kcxzOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">年级</div>
          <div class="item_right">
            <el-select v-model="njValue" placeholder="请选择" @change="njChange" style="width: 280px;" :disabled="kc_nj_disabled">
            <el-option
              v-for="item in njOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">专业院系</div>
          <div class="item_right">
            <el-select v-model="zyValue" placeholder="请选择" @change="zyChange" style="width: 280px;" :disabled="kc_zy_disabled">
            <el-option
              v-for="item in zyOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">课程</div>
          <div class="item_right">
            <el-select v-model="kcValue" placeholder="请选择" style="width: 280px;" :disabled="kc_kc_disabled">
            <el-option
              v-for="item in kcOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.mc">
            </el-option>
          </el-select>
          </div>
        </div>
        <div class="ysBox">
           <el-checkbox-group v-model="classCheckGroup">
             <template v-for="item in classCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div> -->
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false;">取 消</el-button>
        <el-button type="primary" @click="addSure">确 定</el-button>
      </span> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false; isFirst = 1;">取 消</el-button>
        <el-button @click="prevStep" v-if="isFirst !== 1">上一步</el-button>
        <el-button type="primary" @click="nextStep" v-if="isFirst !== 2">下一步</el-button>
        <el-button type="primary" @click="addSure" v-if="isFirst === 2">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="选择分析对象"
      :visible.sync="dialogVisible1"
      width="800px">
      <!-- 教师 -->
      <div  v-if="this.user - 0 === 1">
        <!-- 选择专业 -->
        <div class="item_box">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="teacherYxValue" filterable placeholder="请选择" @change="teacherYxChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in teacherYxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择教师 -->
        <div class="item_box">
          <div class="item_left">选择教师</div>
          <div class="item_right">
            <el-select v-model="teacherValue" placeholder="请选择" style="width: 280px;" :disabled="js_js_disabled" clearable>
            <el-option
              v-for="item in teacherOption"
              :key="item.zgh"
              :label="item.jsxm"
              :value="item.zgh">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <!-- 学生 -->
      <div v-if="this.user - 0 === 2">
        <!-- 选择院系 -->
        <div class="item_box">
          <div class="item_left">选择院系</div>
          <div class="item_right">
            <el-select v-model="studentyxValue" placeholder="请选择" @change="studentyxChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in studentyxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择专业 -->
        <div class="item_box">
          <div class="item_left">选择专业</div>
          <div class="item_right">
            <el-select v-model="studentMajorValue" placeholder="请选择" style="width: 280px;" @change="studentMajorChange" clearable :disabled="xs_zy_disabled">
              <el-option v-for="item in studentMajorOption" :key="item.dm" :label="item.mc" :value="item.dm">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 选择班级 -->
        <div class="item_box">
          <div class="item_left">选择班级</div>
          <div class="item_right">
            <el-select v-model="studentClassValue" placeholder="请选择" style="width: 280px;" @change="studentClassChange" clearable  :disabled="xs_bj_disabled">
              <el-option v-for="item in studentClassOption" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 选择 -->
        <!-- <div class="item_box">
          <div class="item_left">政治面貌</div>
          <div class="item_right">
            <el-select v-model="zzmmValue" placeholder="请选择" style="width: 280px;" @change="zzmmChange" clearable>
            <el-option
              v-for="item in zzmmOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择 -->
        <!-- <div class="item_box">
          <div class="item_left">学习方式</div>
          <div class="item_right">
            <el-select v-model="studyType" placeholder="请选择" style="width: 280px;" @change="studyTypeChange" clearable>
            <el-option
              v-for="item in studyTypeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择 -->
        <!-- <div class="item_box">
          <div class="item_left">是否在校</div>
          <div class="item_right">
            <el-select v-model="isAtSchool" placeholder="请选择" style="width: 280px;" @change="isAtSchoolChange" clearable>
            <el-option
              v-for="item in atSchoolOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择 -->
        <div class="item_box">
          <div class="item_left">选择学生</div>
          <div class="item_right">
            <el-select v-model="xsValue" placeholder="请选择" style="width: 280px;" clearable   :disabled="xs_xs_disabled">
            <el-option
              v-for="item in xsOption"
              :key="item.name"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <!-- 专业 -->
      <div v-if="this.user - 0 === 4">
        <!-- 选择院系 -->
        <div class="item_box">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="yxValue" placeholder="请选择" @change="yxChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in yxOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择院系 -->
        <div class="item_box">
          <div class="item_left">专业</div>
          <div class="item_right">
            <el-select v-model="zyValue" placeholder="请选择"  style="width: 280px;" :disabled="zy_zy_disabled" clearable>
            <el-option
              v-for="item in zyOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.mc">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <!-- 课程 -->
      <div v-if="this.user - 0 === 5">
        <!-- 选择课程性质 -->
        <div class="item_box">
          <div class="item_left">课程性质</div>
          <div class="item_right">
            <el-select v-model="kcxzValue" placeholder="请选择" @change="kcxzChange" style="width: 280px;" clearable>
            <el-option
              v-for="item in kcxzOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div>
        <!-- 选择年级 -->
        <!-- <div class="item_box" v-if="if_kc_show">
          <div class="item_left">院系</div>
          <div class="item_right">
            <el-select v-model="njValue" placeholder="请选择" @change="njChange" style="width: 280px;" clearable :disabled="kc_nj_disabled">
            <el-option
              v-for="item in njOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择专业院系 -->
        <!-- <div class="item_box" v-if="if_kc_show">
          <div class="item_left">选择专业</div>
          <div class="item_right">
            <el-select v-model="zyValue" placeholder="请选择" @change="zyChange" style="width: 280px;" clearable :disabled="kc_zy_disabled">
            <el-option
              v-for="item in zyOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
          </div>
        </div> -->
        <!-- 选择课程 -->
        <div class="item_box">
          <div class="item_left">选择课程</div>
          <div class="item_right">
            <el-select v-model="kcValue" placeholder="请选择" style="width: 280px;" :disabled="kc_kc_disabled" clearable>
            <el-option
              v-for="item in kcOption"
              :key="item.dm"
              :label="item.mc"
              :value="item.mc">
            </el-option>
          </el-select>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false;">取 消</el-button>
        <el-button type="primary" @click="addSureCol">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="选择要素"
      :visible.sync="dialogVisible2"
      width="800px">
      <!-- 教师 -->
      <div  v-if="this.user - 0 === 1">
        <!-- 选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="teacherCheckGroup">
             <template v-for="item in teacherCheckGroupList">
               <el-checkbox :label="item.value" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 学生 -->
      <div v-if="this.user - 0 === 2">
        <!-- 学生选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="studentCheckGroup">
             <template v-for="item in studentCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 专业 -->
      <div v-if="this.user - 0 === 4">

        <!-- 专业选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="majorCheckGroup">
             <template v-for="item in majorCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 课程 -->
      <div v-if="this.user - 0 === 5">
        <!-- 课程选择要素 -->
        <div class="ysBox">
           <el-checkbox-group v-model="classCheckGroup">
             <template v-for="item in classCheckGroupList">
               <el-checkbox :label="JSON.stringify({rowCode: item.value, rowName: item.label})" :key="item.value" :disabled="item.disabled">{{item.label}}</el-checkbox>
             </template>
          </el-checkbox-group>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false;">取 消</el-button>
        <el-button type="primary" @click="addSureRow">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      if_kc_show: true,
      isFirst: 1,
      js_js_disabled: true,
      zy_zy_disabled: true,
      kc_nj_disabled: true,
      kc_zy_disabled: true,
      kc_kc_disabled: true,
      xs_zy_disabled: true, // 学生专业
      xs_bj_disabled: true, // 学生班级
      xs_xs_disabled: true, // 学生学生
      // 教师row
      xsValue: '',
      xsOption: [], // 学生
      yxValue: '',
      yxOption: [],
      tableId: '',
      dialogVisible1: false, // 选择分析对象
      dialogVisible2: false, // 选择要素
      // 学生表格
      studentTableList: [],
      // 课程
      kcxzValue: '',
      kcxzOption: [],
      njValue: '',
      njOption: [],
      zyValue: '',
      zyOption: [],
      kcValue: '',
      kcOption: [],
      // 教师
      teacherYxValue: '',
      teacherYxOption: [],
      teacherValue: '',
      teacherOption: [],
      // 学生院系
      studentyxValue: '',
      studentyxOption: [],
      // 学生专业
      studentMajorValue: '',
      studentMajorOption: [],
      // 学生班级
      studentClassValue: '',
      studentClassOption: [],
      // 学生政治面貌
      zzmmOption: [],
      zzmmValue: '',
      // 学生要素
      studentCheckGroup: [],
      studentCheckGroupList: [
        {
          label: '获奖次数',
          value: 'HJCS',
          disabled: false
        },
        {
          label: '违纪次数',
          value: 'WJCS',
          disabled: false
        },
        {
          label: '助学金次数',
          value: 'ZXJCS',
          disabled: false
        }
      ],
      // 教师要素
      teacherCheckGroup: [],
      teacherCheckGroupList: [
        {
          label: '学历',
          value: 'xl',
          disabled: false
        },
        {
          label: '带班数',
          value: 'dbs',
          disabled: false
        },
        // {
        //   label: '年龄',
        //   value: 'csrq',
        //   disabled: false
        // },
        // {
        //   label: '政治面貌',
        //   value: 'zzmm',
        //   disabled: false
        // },
        // {
        //   label: '专业',
        //   value: 'zy',
        //   disabled: false
        // },
        // {
        //   label: '职称',
        //   value: 'zc',
        //   disabled: false
        // },
        // {
        //   label: '学位',
        //   value: 'xw',
        //   disabled: false
        // },
        // {
        //   label: '工龄',
        //   value: 'gl',
        //   disabled: false
        // }
      ],
      teacherGroupObj: {
        'xl': 0,
        'dbs': 0
        // 'csrq': 0,
        // 'zzmm': 0,
        // 'zy': 0,
        // 'zc': 0,
        // 'xw': 0,
        // 'gl': 0
      },
      // teacherGroupObj: {
      //   'xl': '学历',
      //   'csrq': '年龄',
      //   'zzmm': '政治面貌',
      //   'zy': '专业',
      //   'zc': '职称',
      //   'xw': '学位',
      //   'gl': '工龄'
      // },
      // 专业要素
      majorCheckGroup: [],
      classCheckGroupList: [
        {
          label: '总课时数',
          value: 'zkss',
          disabled: false
        },
        {
          label: '实践课程课时数',
          value: 'sjkc_kss',
          disabled: false
        },
        // {
        //   label: '教材名称',
        //   value: 'jcmc',
        //   disabled: false
        // },
        // {
        //   label: '授课年级',
        //   value: 'sknj',
        //   disabled: false
        // },
        {
          label: '考试方法',
          value: 'ksff',
          disabled: false
        },
        // {
        //   label: '教师职称',
        //   value: 'zcdmmc',
        //   disabled: false
        // }
      ],
      classGroupObj: {
        'zkss': '总课时数',
        'sjkc_kss': '实践课程课时数',
        // 'jcmc': '教材名称',
        // 'sknj': '授课年级',
        'ksff': '考试方法'
      },
      // 课程要素
      classCheckGroup: [],
      majorCheckGroupList: [
        {
          label: '课程总数',
          value: 'kczs',
          disabled: false
        },
        {
          label: '学生总数',
          value: 'xszs',
          disabled: false
        },
        {
          label: '招生数',
          value: 'zss',
          disabled: false
        },
        {
          label: '毕业人数',
          value: 'byss',
          disabled: false
        }
      ],
      majorGroupObj: {
        // 'xz': '学制',
        'kczs': '课程总数',
        'xszs': '学生总数',
        'zss': '招生数',
        'byss': '毕业人数'
      },
      // 学习方式
      studyType: '',
      studyTypeOption: [
        {
          label: '全日制',
          value: 1
        },
        {
          label: '非全日制',
          value: 0
        }
      ],
      // 是否在校
      isAtSchool: '',
      atSchoolOption: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ],
      wrapStyle: [{ height: '100%' }],
      dialogVisible: false,
      job: '',
      jobItems: [],
      user: 1,
      userItems: [
        {
          label: '教师',
          value: 1
        },
        {
          label: '学生',
          value: 2
        },
        {
          label: '学校',
          value: 3
        },
        {
          label: '专业',
          value: 4
        },
        {
          label: '课程',
          value: 5
        }
      ]
    }
  },
  mounted () {
    // 获取用户的所有职务
    this.$ajax('post', this.HOST + '/tr/autognosis/web/autognosiShow', {}, (res) => {
      if (res.success) {
        this.jobItems = res.obj
        this.job = res.obj[0].deptId + ',' + res.obj[0].roleId
        //  获取用户在某一职务下的自我分析记录
        // this.getChart()
        // this.getTreeHtml()
      } else {
        this.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
    // 获取教师
    // this.getTeacherList()
    this.getAllData()
    // 获取学生政治面貌
    // this.getPoliticsStatus()
    // 获取专业
    this.getMajor()
    // 获取课程
    this.getkcxz()
    // 获取教师的所有表格
    this.getTeacherAllTable()
    // 获取院系
    this.getYx()
    /*  >>>> 学生 */
    // 获取院系
    this.getStudentYx()
    /* <<< 学生 */
  },
  methods: {
    teacherYxChange (val) {
      // 获取教师
      this.js_js_disabled = false
      this.teacherValue = ''
      this.teacherOption = []
      if (!val) {
        return
      }
      this.getTeacherList({
        type: this.user,
        zy: val,
        tableId: this.tableId
      })
    },
    // 获取学生院系
    getStudentYx () {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getProfessionAllYx', {}, (res) => {
        if (res.success) {
          this.studentyxOption = res.obj
          this.teacherYxOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 学生要素
    // 学生院系change
    studentyxChange (val) {
      this.xs_zy_disabled = false
      this.xs_bj_disabled = true
      this.studentMajorValue = ''
      this.studentMajorOption = []
      this.xs_xs_disabled = true
      this.xsValue = ''
      this.xsOption = []
      // 获取专业
      if (!val) {
        return
      }
      this.getMajorByYx({
        yxdm: val,
        tableId: this.tableId
      })
    },
    getMajorByYx (data) {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getProfessionByCon', data || {}, (res) => {
        if (res.success) {
          this.studentMajorOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 学生专业change
    studentMajorChange (val) {
      this.xs_bj_disabled = false
      this.xs_xs_disabled = true
      this.studentClassValue = ''
      this.studentClassOption = []
      this.xsValue = ''
      this.xsOption = []
      if (!val) {
        return
      }
      this.getStudentBjByMajor({
        zydm: val
      })
    },
    getStudentBjByMajor (data) {
      this.$ajax('post', this.HOST + '/tr/trCA/web/getClassByZy', data || {}, (res) => {
        if (res.success) {
          this.studentClassOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 学生班级change
    studentClassChange (val) {
      this.xs_xs_disabled = false
      this.xsValue = ''
      this.xsOption = []
      if (!val) {
        return
      }
      this.getStudentBybj({
        bjdm: val,
        tableType: 2,
        tableId: this.tableId
      })
    },
    getStudentBybj (data) {
      this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/getStuInfo', data || {}, (res) => {
        if (res.success) {
          this.xsOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    prevStep () {
      this.isFirst -= 1
    },
    nextStep () {
      this.isFirst = 2
    },
    studyTypeChange (val) {
      this.xsValue = ''
      this.xsOption = []
      if (!val) {
        return
      }
      this.getStudentBy({
        zzmmdm: this.zzmmValue,
        zydm: this.majorValue,
        xxfsdm: this.studyType,
        sfzx: this.isAtSchool
      })
    },
    isAtSchoolChange (val) {
      this.xsValue = ''
      this.xsOption = []
      if (!val) {
        return
      }
      this.getStudentBy({
        zzmmdm: this.zzmmValue,
        zydm: this.majorValue,
        xxfsdm: this.studyType,
        sfzx: this.isAtSchool
      })
    },
    zzmmChange (val) {
      this.xsValue = ''
      this.xsOption = []
      if (!val) {
        return
      }
      this.getStudentBy({
        zzmmdm: this.zzmmValue,
        zydm: this.majorValue,
        xxfsdm: this.studyType,
        sfzx: this.isAtSchool
      })
    },
    getStudentBy (data) {
      // /tr/ComparativeAnalysis/web/delRows
      // 获取学生
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getStuInfo', data || {}, (res) => {
        if (res.success) {
          this.xsOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    getAllTable () {
      if (this.user - 0 === 2) {
        // 学生
        this.getAllStudentTable()
      } else if (this.user - 0 === 1) {
        // 教师
        this.getTeacherAllTable()
      } else if (this.user - 0 === 5) {
        // 课程
        this.getAllClassTable()
      } else if (this.user - 0 === 4) {
        // 专业
        this.getAllClassTable()
      }
    },
    // 获取学生的历史数据
    getAllStudentTable () {
      this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/getHistoricalComparaData_zz', {}, (res) => {
        if (res.success) {
          for (let item of res.obj) {
            let arr = []
            for (let item1 of item.colslist) {
              for (let item2 of item.reslist) {
                if (item1.colsCode === item2.xh) {
                  arr.push(item2)
                }
              }
            }
            item.reslist = arr
          }
          this.studentTableList = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 获取课程的历史数据
    getAllClassTable () {
      this.studentTableList = []
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getCourseByCon', {
        tableType: this.user
      }, (res) => {
        if (res.success) {
          this.studentTableList = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 获取教师的所有表格
    getTeacherAllTable () {
      this.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/getHistoryInfo', {}, (res) => {
        if (res.success) {
          this.studentTableList = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 切换院系
    yxChange (val) {
      this.zyValue = ''
      this.zyOption = []
      if (!val) {
        return
      }
      this.getzyByyx({
        yxdm: val,
        tableId: this.tableId
      })
    },
    // 通过院系获取专业
    getzyByyx (data) {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getProfessionByCon', data || {}, (res) => {
        if (res.success) {
          this.zy_zy_disabled = false
          this.zyOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 切换课程性质
    kcxzChange (val) {
      // if (val - 0 === 1) {
        this.if_kc_show = false
        this.kcValue = ''
        this.kcOption = []
        this.kc_kc_disabled = false
        if (!val) {
          return
        }
        this.getkcBykcxz_nj_zy({
          dm: val,
          yxdm: '',
          zydm: '',
          tableId: this.tableId
        })
      // } else {
      //   this.njOption = []
      //   this.njValue = ''
      //   this.zyValue = ''
      //   this.zyOption = []
      //   this.kcValue = ''
      //   this.kcOption = []
      //   this.kc_nj_disabled = true
      //   this.kc_zy_disabled = true
      //   this.kc_kc_disabled = true
      //   if (!val) {
      //     return
      //   }
      //   this.if_kc_show = true
      //   this.getnjBykcxz({
      //     dm: val
      //   })
      // }
    },
    // 切换院系
    njChange (val) {
      this.zyValue = ''
      this.zyOption = []
      this.kcValue = ''
      this.kcOption = []
      this.kc_zy_disabled = true
      this.kc_kc_disabled = true
      if (!val) {
        return
      }
      this.getzyBykcxz_nj({
        dm: this.kcxzValue,
        yxDm: val
      })
    },
    // 切换专业
    zyChange (val) {
      this.kcValue = ''
      this.kcOption = []
      this.kc_kc_disabled = true
      if (!val) {
        return
      }
      this.getkcBykcxz_nj_zy({
        dm: this.kcxzValue,
        yxdm: this.njValue,
        zydm: val,
        tableId: this.tableId
      })
    },
    // 专业获取院系
    getYx () {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getProfessionAllYx', {}, (res) => {
        if (res.success) {
          this.yxOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 课程获取课程性质
    getkcxz () {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getAllKcxz', {}, (res) => {
        if (res.success) {
          this.kcxzOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 根据课程性质获取院系
    getnjBykcxz (data) {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getAllYx', data || {}, (res) => {
        if (res.success) {
          this.kc_nj_disabled = false
          this.njOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 根据课程性质院系获取专业
    getzyBykcxz_nj (data) {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getZyByCon', data || {}, (res) => {
        if (res.success) {
          this.kc_zy_disabled = false
          this.zyOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 根据年级课程性质专业获取课程
    getkcBykcxz_nj_zy (data) {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getKcByCon', data || {}, (res) => {
        if (res.success) {
          this.kc_kc_disabled = false
          this.kcOption = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    // 教师专业发生变化触发
    majorChange (val) {
      this.js_js_disabled = true
      this.teacherValue = ''
      this.teacherOption = []
      if (!val) {
        return
      }
      this.getTeacherList({
        type: this.user,
        zy: val,
        tableId: this.tableId
      })
    },
    // 获取教师
    getTeacherList (data) {
      this.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/getCoreList', data || {}, (res) => {
        if (res.success) {
          this.js_js_disabled = false
          this.teacherOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 获取政治面貌
    getPoliticsStatus () {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getZzmm', {}, (res) => {
        if (res.success) {
        // 赋给政治面貌list
          this.zzmmOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 获取专业
    getMajor () {
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getZy', {}, (res) => {
        if (res.success) {
        // 赋给专业list
          this.majorOption = res.obj
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    addSure () {
      if (this.user - 0 === 1) {
        // 教师
        if (!this.teacherValue) {
          this.$message({
            type: 'warning',
            message: '必须选择一个教师！'
          })
          return
        }
        if (!this.teacherCheckGroup.length) {
          this.$message({
            type: 'warning',
            message: '必须选择要素！'
          })
          return
        }
        this.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/addData_zz', {
          type: this.user,
          userId: this.teacherValue,
          xl: this.teacherCheckGroup.indexOf('xl') !== -1 ? 1 : 0, // 学历
          dbs: this.teacherCheckGroup.indexOf('dbs') !== -1 ?1 : 0
          // csrq: this.teacherCheckGroup.indexOf('csrq') !== -1 ? 1 : 0, // 出生日期
          // zzmm: this.teacherCheckGroup.indexOf('zzmm') !== -1 ? 1 : 0, // 政治面貌
          // zy: this.teacherCheckGroup.indexOf('zy') !== -1 ? 1 : 0, // 专业
          // zc: this.teacherCheckGroup.indexOf('zc') !== -1 ? 1 : 0, // 职称
          // xw: this.teacherCheckGroup.indexOf('xw') !== -1 ? 1 : 0, // 学位
          // gl: this.teacherCheckGroup.indexOf('gl') !== -1 ? 1 : 0// 工龄
        }, (res) => {
          if (res.success) {
            // 调用初始化表格的方法
            this.dialogVisible = false
            this.getTeacherAllTable()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      } else if (this.user - 0 === 2) {
        // 学生
        if (!this.xsValue) {
          this.$message({
            type: 'warning',
            message: '请选择一个学生！'
          })
          return
        }
        if (!this.studentCheckGroup.length) {
          this.$message({
            type: 'warning',
            message: '必须选择要素！'
          })
          return
        }
        let yAxis = []
        for (let item of this.studentCheckGroup) {
          yAxis.push(JSON.parse(item))
        }
        let data = {
          yAxis: yAxis,
          xAxis: this.xsValue,
          tableType: this.user
        }
        this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/addRowAndCell', data, (res) => {
          if (res.success) {
            // 获取历史课程信息
            this.dialogVisible = false
            this.getAllStudentTable()
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      } else if (this.user - 0 === 4) {
        // 专业
        if (!this.zyValue) {
          this.$message({
            type: 'warning',
            message: '请选择一个专业！'
          })
          return
        }
        if (!this.majorCheckGroup.length) {
          this.$message({
            type: 'warning',
            message: '必须选择要素！'
          })
          return
        }
        let yAxis = []
        for (let item of this.majorCheckGroup) {
          yAxis.push(JSON.parse(item))
        }
        let data = {
          yAxis: yAxis,
          xAxis: this.zyValue,
          tableType: this.user
        }
        this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/addRowAndCell', data, (res) => {
          if (res.success) {
            // 获取历史课程信息
            this.dialogVisible = false
            this.getAllClassTable()
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      } else if (this.user - 0 === 5) {
        // 课程
        if (!this.kcValue) {
          this.$message({
            type: 'warning',
            message: '请选择一个课程！'
          })
          return
        }
        if (!this.classCheckGroup.length) {
          this.$message({
            type: 'warning',
            message: '必须选择要素！'
          })
          return
        }
        let yAxis = []
        for (let item of this.classCheckGroup) {
          yAxis.push(JSON.parse(item))
        }
        let data = {
          yAxis: yAxis,
          xAxis: this.kcValue,
          tableType: 5
        }
        this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/addRowAndCell', data, (res) => {
          if (res.success) {
            // 获取历史课程信息
            this.dialogVisible = false
            this.getAllClassTable()
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
    },
    // 获取数据
    getAllData () {
      // this.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/getContentInfo', {
      //   userId: '20091050',
      //   xl: 1, // 学历
      //   csrq: 1, // 出生日期
      //   zzmm: 1, // 政治面貌
      //   zy: 1, // 专业
      //   zc: 1, // 职称
      //   xw: 1, // 学位
      //   gl: 1// 工龄
      // }, (res) => {

      // })
    },
    isChile (node) {
      if (node == null) {
        return false
      }
      let childSize = node.childNodes.length
      if (childSize === 0) {
        return false
      }
      return true
    },
    nodeClick (data) {
      data.isActive = true
      let self = this
      self.zb_before_id = data.id
      self.currentPage = 1
      let obj = {
        deptId: this.job.split(',')[0],
        typeId: data.id,
        indexName: self.indexName,
        pageNum: self.currentPage,
        pageSize: self.pageSize
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexList',
        obj,
        (res) => {
          if (res.success) {
            self.zbItems = []
            if(res.data){
                self.totalSize = res.data.totalSize
            }
            
            let arr = []
            for (let item of res.obj) {
              if (arr.length < 2) {
                arr.push(item)
              } else {
                self.zbItems.push(arr)
                arr = [item]
              }
            }
            self.zbItemsOld = res.obj
            self.zbItems.push(arr)
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    addNewChart () {
      this.tableId = ''
      this.if_kc_show = true
      this.zbItems = []
      this.dialogVisible = true
      this.isFirst = 1
      this.activeNameTab = 'first'
      // this.getZbList()
      // this.getTreeHtml()
      // this.getZbList2()
      this.isZdyList = true
      // 教师
      this.teacherYxValue = ''
      this.teacherValue = ''
      this.teacherOption = []
      this.js_js_disabled = true
      // 学生专业
      this.studentyxValue = ''
      this.studentMajorValue = ''
      this.studentMajorOption = []
      this.xs_zy_disabled = true
      this.studentClassValue = ''
      this.studentClassOption = []
      this.xs_bj_disabled = true
      this.xsValue = ''
      this.xsOption = []
      this.xs_xs_disabled = true
      // 专业
      this.yxValue = ''
      this.zyValue = ''
      this.zyOption = []
      this.zy_zy_disabled = true
      // 课程
      this.kcxzValue = ''
      this.njValue = ''
      this.njOption = []
      this.kc_nj_disabled = true
      this.zyValue = ''
      this.zyOption = []
      this.kc_zy_disabled = true
      this.kcValue = ''
      this.kcOption = []
      this.kc_kc_disabled = true

      this.teacherCheckGroup = []
      this.studentCheckGroup = []
      this.majorCheckGroup = []
      this.classCheckGroup = []
      for (let item of this.teacherCheckGroupList) {
        item.disabled = false
      }
      for (let item of this.studentCheckGroupList) {
        item.disabled = false
      }
      for (let item of this.majorCheckGroupList) {
        item.disabled = false
      }
      for (let item of this.classCheckGroupList) {
        item.disabled = false
      }
    },
    handleClick () {
      this.isZdyList = true
    },
    jobChange () {
      // this.getChart()
    },
    userChange (val) {
      // this.getChart()
      this.getAllTable()
    },
    addNewCol (tableId, col) {
      this.if_kc_show = true
      // 学生
      this.studentyxValue = ''
      this.studentMajorValue = ''
      this.studentMajorOption = []
      this.xs_zy_disabled = true
      this.studentClassValue = ''
      this.studentClassOption = []
      this.xs_bj_disabled = true
      this.xs_xs_disabled = true
      this.teacherGroupObj = {}
      this.xsValue = ''
      // this.xsOption = []
      this.njValue = ''
      // this.njOption = []
      this.yxValue = ''
      // this.yxOption = []
      // 学生表格
      // this.studentTableList = []
      // 课程
      this.kcxzValue = ''
      // this.kcxzOption = []
      this.njValue = ''
      // this.njOption = []
      this.zyValue = ''
      // this.zyOption = []
      this.kcValue = ''
      // this.kcOption = []
      // 教师
      this.teacherYxValue = ''
      this.teacherValue = ''
      this.teacherOption = []
      // 学生专业
      this.majorValue = ''
      // this.majorOption = []
      // 学生政治面貌
      // this.zzmmOption = []
      this.njOption = []
      this.njValue = ''
      this.zyValue = ''
      this.zyOption = []
      this.kcValue = ''
      this.kcOption = []
      this.kc_nj_disabled = true
      this.kc_zy_disabled = true
      this.kc_kc_disabled = true
      this.zy_zy_disabled = true
      this.js_js_disabled = true
      this.njOption = []
      this.kcxzValue = ''
      this.njValue = ''
      this.zyValue = ''
      this.zyOption = []
      this.kcValue = ''
      this.kcOption = []
      this.yxValue = ''

      this.kc_nj_disabled = true
      this.kc_zy_disabled = true
      this.kc_kc_disabled = true
      this.dialogVisible1 = true
      this.zy_zy_disabled = true
      this.js_js_disabled = true
      this.teacherValue = ''
      this.teacherOption = []
      this.tableId = tableId
      if (col && this.user - 0 === 1) {
        for (let item of col) {
          this.teacherGroupObj[item.rowCode] = 1
        }
      }
    },
    addNewRow (tableId, col) {
      this.if_kc_show = true
      for (let item of this.teacherCheckGroupList) {
        item.disabled = false
      }
      for (let item of this.studentCheckGroupList) {
        item.disabled = false
      }
      for (let item of this.majorCheckGroupList) {
        item.disabled = false
      }
      for (let item of this.classCheckGroupList) {
        item.disabled = false
      }
      this.teacherGroupObj = {}
      this.teacherCheckGroup = []
      this.studentCheckGroup = []
      this.majorCheckGroup = []
      this.classCheckGroup = []
      this.dialogVisible2 = true
      this.tableId = tableId
      this.kc_nj_disabled = true
      this.kc_zy_disabled = true
      this.kc_kc_disabled = true
      // console.log(col)
      if (col) {
        for (let item of col) {
          this.teacherGroupObj[item.rowCode] = 1
        }
      }
      if (this.user - 0 === 1) {
        for (let item of col) {
          for (let item1 of this.teacherCheckGroupList) {
            if (item.row_name === item1.label) {
              // this.teacherCheckGroup.push(item)
              item1.disabled = true
            }
          }
        }
      } else if (this.user - 0 === 2) {
        for (let item of col) {
          for (let item1 of this.studentCheckGroupList) {
            if (item.row_name === item1.label) {
              item1.disabled = true
            }
          }
        }
      } else if (this.user - 0 === 4) {
        for (let item of col) {
          for (let item1 of this.majorCheckGroupList) {
            if (item.row_name === item1.label) {
              item1.disabled = true
            }
          }
        }
      } else if (this.user - 0 === 5) {
        for (let item of col) {
          for (let item1 of this.classCheckGroupList) {
            if (item.row_name === item1.label) {
              item1.disabled = true
            }
          }
        }
      }
    },
    addSureRow () {
      // 添加要素
      let yAxis = []
      let data = {}
      if (this.user - 0 === 4) {
        // 专业
        for (let item of this.majorCheckGroup) {
          yAxis.push(JSON.parse(item))
        }
        data = {
          tableId: this.tableId,
          yAxis: yAxis,
          tableType: this.user
        }
      } else if (this.user - 0 === 5) {
        // 课程
        for (let item of this.classCheckGroup) {
          yAxis.push(JSON.parse(item))
        }
        data = {
          tableId: this.tableId,
          yAxis: yAxis,
          tableType: this.user
        }
      } else if (this.user - 0 === 2) {
        // 学生
        for (let item of this.studentCheckGroup) {
          yAxis.push(JSON.parse(item))
        }
        data = {
          tableId: this.tableId,
          yAxis: yAxis,
          tableType: this.user
        }
      } else if (this.user - 0 === 1) {
        // 教师
        if (!this.teacherCheckGroup.length) {
          this.$message({
            type: 'warning',
            message: '必须选择要素！'
          })
          return
        }
        let data = {
          type: this.user,
          tableId: this.tableId,
          xl: this.teacherCheckGroup.indexOf('xl') !== -1 ? 1 : 0, // 学历
          dbs: this.teacherCheckGroup.indexOf('dbs') !== -1 ? 1 : 0
          // csrq: this.teacherCheckGroup.indexOf('csrq') !== -1 ? 1 : 0, // 出生日期
          // zzmm: this.teacherCheckGroup.indexOf('zzmm') !== -1 ? 1 : 0, // 政治面貌
          // zy: this.teacherCheckGroup.indexOf('zy') !== -1 ? 1 : 0, // 专业
          // zc: this.teacherCheckGroup.indexOf('zc') !== -1 ? 1 : 0, // 职称
          // xw: this.teacherCheckGroup.indexOf('xw') !== -1 ? 1 : 0, // 学位
          // gl: this.teacherCheckGroup.indexOf('gl') !== -1 ? 1 : 0// 工龄
        }
        Object.assign(data, data, this.teacherGroupObj)
        this.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/addData_zz', data, (res) => {
          if (res.success) {
            // 调用初始化表格的方法
            this.dialogVisible2 = false
            this.getTeacherAllTable()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
        return
      }
      this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/addCourseRowsByCon', data, (res) => {
        if (res.success) {
          this.dialogVisible2 = false
          if (this.user - 0 === 2) {
            this.getAllStudentTable()
            return
          }
          this.getAllClassTable()
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    addSureCol () {
      // 添加分析对象
      let data = {}
      if (this.user - 0 === 4) {
        // 专业
        data = {
          tableId: this.tableId,
          xAxis: this.zyValue,
          tableType: this.user
        }
      } else if (this.user - 0 === 5) {
        // 课程
        data = {
          tableId: this.tableId,
          xAxis: this.kcValue,
          tableType: this.user
        }
      } else if (this.user - 0 === 2) {
        // 学生
        if (!this.xsValue) {
          this.$message({
            type: 'warning',
            message: '请选择一个学生！'
          })
          return
        }
        data = {
          tableId: this.tableId,
          xAxis: this.xsValue,
          tableType: this.user
        }
      } else if (this.user - 0 === 1) {
        // 教师
        // 教师
        if (!this.teacherValue) {
          this.$message({
            type: 'warning',
            message: '必须选择一个教师！'
          })
          return
        }
        let data = {
          type: this.user,
          tableId: this.tableId,
          userId: this.teacherValue,
          xl: this.teacherCheckGroup.indexOf('xl') !== -1 ? 1 : 0, // 学历
          dbs: this.teacherCheckGroup.indexOf('dbs') !== -1 ? 1 : 0
          // csrq: this.teacherCheckGroup.indexOf('csrq') !== -1 ? 1 : 0, // 出生日期
          // zzmm: this.teacherCheckGroup.indexOf('zzmm') !== -1 ? 1 : 0, // 政治面貌
          // zy: this.teacherCheckGroup.indexOf('zy') !== -1 ? 1 : 0, // 专业
          // zc: this.teacherCheckGroup.indexOf('zc') !== -1 ? 1 : 0, // 职称
          // xw: this.teacherCheckGroup.indexOf('xw') !== -1 ? 1 : 0, // 学位
          // gl: this.teacherCheckGroup.indexOf('gl') !== -1 ? 1 : 0// 工龄
        }
        Object.assign(data, data, this.teacherGroupObj)
        this.$ajaxMore('post', this.HOST + '/tr/factorAnalysis/web/addData_zz', data, (res) => {
          if (res.success) {
            // 调用初始化表格的方法
            this.dialogVisible1 = false
            this.getTeacherAllTable()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
        return
      }

      this.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/addCourseColsByCon', data, (res) => {
        if (res.success) {
          this.dialogVisible1 = false
          if (this.user - 0 === 2) {
            this.getAllStudentTable()
            return
          }
          this.getAllClassTable()
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    // 删除
    deleteStudentRow (tableId, code) {
      let data = {
        rowCode: code,
        tableId: tableId
      }
      if (this.user - 0 === 1) {
        this.$ajax('post', this.HOST + '/tr/factorAnalysis/web/delRows', data, (res) => {
          if (res.success) {
            this.getTeacherAllTable()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
        return
      }
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/delRows', data, (res) => {
        if (res.success) {
          if (this.user - 0 === 1) {
            this.getTeacherAllTable()
          } else if (this.user - 0 === 2) {
            this.getAllStudentTable()
          } else {
            this.getAllClassTable()
          }
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 删除
    deleteStudentCol (tableId, code) {
      let data = {
        colsCode: code,
        tableId: tableId
      }
      if (this.user - 0 === 1) {
        this.$ajax('post', this.HOST + '/tr/factorAnalysis/web/delCols', data, (res) => {
          if (res.success) {
            this.getTeacherAllTable()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
        return
      }
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/delCols', data, (res) => {
        if (res.success) {
          if (this.user - 0 === 1) {
            this.getTeacherAllTable()
          } else if (this.user - 0 === 2) {
            this.getAllStudentTable()
          } else {
            this.getAllClassTable()
          }
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    deleteTable (tableId) {
      let data = {
        tableId: tableId
      }
      if (this.user - 0 === 1) {
        this.$ajax('post', this.HOST + '/tr/factorAnalysis/web/delTable', data, (res) => {
          if (res.success) {
            this.getTeacherAllTable()
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
        return
      }
      this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/delCols', data, (res) => {
        if (res.success) {
          this.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/delRows', data, (res) => {
            if (res.success) {
              if (this.user - 0 === 1) {
                this.getTeacherAllTable()
              } else if (this.user - 0 === 2) {
                this.getAllStudentTable()
              } else {
                this.getAllClassTable()
              }
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.container_box_header {
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
  padding-left: 20px;
}
.jsc_content {
  padding: 0 20px;
  margin-top: 22px;
}
.is-expanded > .el-tree-node__content .expanded + span i.iconfont {
  color: #feb078 !important;
}
.is-current > .el-tree-node__content > .custom-tree-node .iconfont {
  color: #feb078 !important;
}
.table_full {
  width: 100%;
  /* border-color:  #dbe3ea; */
  border-right: 1px solid #dbe3ea;
  border-bottom: 1px solid #dbe3ea;
  /* transform: translate3d(-1px, -1px, 0) */
}
.table_full td {
  border-left: 1px solid #dbe3ea;
  border-top: 1px solid #dbe3ea;
  box-sizing: border-box;
}
.table_full thead td {
  height: 115px;
  min-width: 182px;
  text-align: center;
}
.table_full tbody td {
  height: 48px;
}
.table_relative_father {
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background: #fff;
}
.table_full_father {
  /* padding: 20px; */
  /* margin-bottom: 20px; */
  /* box-sizing: border-box; */
  overflow-x: auto;
}
.table_full_father::-webkit-scrollbar {/*滚动条整体样式*/
  width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}
.table_full_father::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.table_full_father::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 5px;
  background: rgba(0,0,0,0.1);
}
.user_header {
  width: 48px;
  height: 48px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.div_relative {
  position: relative;
  width: 100%;
  height: 100%;
}
.close_thead_i, .close_tbody_i, .close_i {
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;
  color: #999
}
.close_i {
  color: #f00;
}
.tbody_div_box {
  line-height: 48px;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
table tr>td:first-child {
  background: #f3f7fb;
}
/* .table_full_father {
  background: #fff;
} */
.content_item {
  height: 390px;
  background:#fff;
  margin-top: 22px;
}
.content_item.add_new {
  text-align: center;
  cursor: pointer;
}
.content_item.add_new i {
  font-size: 78px;
  color: #70ad47;
  margin-top: 140px;
}
.content_item.add_new div {
  color: #70ad47;
  font-size: 18px;
}
div.item_box {
  font-size: 0;
  margin-top: 17px;
  display: inline-block;
  width: 362px;
}
.el-dialog__body .item_box:nth-of-type(even) {
  /* margin-left: 20px; */
      text-align: right;
      float: right;
}
div.item_box div.item_left {
  display: inline-block;
  /* width: 114px; */
  text-align: right;
  vertical-align: top;
  height: 42px;
  line-height: 42px;
}
div.item_right {
  display: inline-block;
  vertical-align: top;
  margin-left: 12px;
  line-height: 42px;
}
.ysBox {
  margin-top: 20px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  box-sizing: border-box;
}
div.step_box {
  width: 100%;
  font-size: 0;
  height: 50px;
}
div.step_item {
  width: 50%;
  display: inline-block;
  font-size: 0;
  height: 50px;
  background: #f3f7f9;
  line-height: 50px;
}
div.step_item_left {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  background: #bec7cc;
  color: #fff;
  display: inline-block;
  vertical-align: top;
  margin: 15px;
}
div.step_item_right {
  width: 110px;
  display: inline-block;
  vertical-align: top;
}
.step_item.active {
  background: #70ad47;
  color: #fff;
}
.step_item.active .step_item_left {
  background: #fff;
  color: #70ad47;
}
</style>
