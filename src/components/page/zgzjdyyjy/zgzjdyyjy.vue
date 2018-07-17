<template>
  <div id="zgzjdyyjy">
    <el-tabs  v-model="activeName" type="card" @tab-click="handleClick" >
      <el-tab-pane   :label="val.dept_name" :name="'abc'+index" :panleId="val.dept_id" v-for="(val,index) of managerDepartmentList " :key="val.dept_id">
        <div class="info">
        <span style="font-size: 18px;color: rgb(55, 71, 79);">诊改专家平台</span>
        <el-card class="info_card" >
          <!--普通用户-->

          <el-row  v-if="!isManager">
            <el-col :span="5" v-for="(o,index) in managerList"  :key="index-1000">
              <el-card :body-style="{ padding: '0px' }" style="height: 110px;width: 230px">
                <div style="margin:15px">
              <el-row :gutter="7">
                <el-col :span="2">
                  <img style="width: 50px;height: 50px;" src="../../../../static/img/zhuanjia.png" class="image">
                </el-col>
                <el-col :span="20">
                  <div class="exp">
                 {{o.expert_name}}
                  </div>

                  <div class="exp" style="overflow: hidden;text-overflow:ellipsis;
white-space: nowrap;" >
                    <span style="font-size: 12px">
                      <el-tooltip :content="o.expert_dept_name" placement="top">
                        <el-button style="  text-align: left; width: 100%;
                        padding: 5px 0px;
                        border: none;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;"
                        >{{o.expert_dept_name}}</el-button>
                      </el-tooltip>
                    </span>
                  </div>
                  <div class="exp">
                    <el-button style="background-color: #ed7d31" size="mini" @click="goAsk(o.expert_dept_id,o.id,o)"><span style="font-size: 10px;color: white">向他提问</span></el-button>
                  </div>
                </el-col>
                <el-col :span="2"></el-col>
              </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!--专家列表-->

          <el-row :gutter="40" v-else>
            <el-col :span="12"  style="padding-left: 40px">
              <table >
                <tr  v-for="(val,index) of unAnswerList" v-if="index%2==0" :key="val.id">
                  <td style="vertical-align: top"><div class="grid-content bg-purple-dark col-1 " style="    position: absolute;
    top: 10px;" ><span class="flagtitle_ask flag">问</span></div></td>
                  <td WIDTH="7%">&nbsp;</td>
                  <td>
                    <div  >
                    <div class="grid-content bg-purple-dark ask-title"><span  v-html="val.user_name" /> <span v-html="val.question_time"/></div>
                    <div><span class="question"  v-html="val.question"/></div>
                    <div style="margin-top: 6px"><el-button type="danger" size="mini" @click="ask(val.id,val)">回答</el-button></div>
                    </div>
                  </td>
                </tr>
              </table>
            </el-col>
            <el-col :span="12" style="padding-left: 30px" >
              <table>
                <tr  v-for="(val,index) of unAnswerList" v-if="index%2!=0"  :key="val.id">

                  <td>

                    <div class="grid-content bg-purple-dark col-1 "  style="position: absolute;top: 10px;"><span class="flagtitle_ask flag">问</span></div></td>
                  <td WIDTH="6%">&nbsp;</td>
                  <td>
                    <div >
                    <div class="grid-content bg-purple-dark ask-title"><span  v-html="val.user_name" /> <span v-html="val.question_time"/></div>
                    <div><span class="question"  v-html="val.question"/></div>
                    <div style="margin-top: 6px"><el-button type="danger" size="mini" @click="ask(val.id,val)">回答</el-button></div>
                    </div>
                  </td>

                </tr>
              </table>
            </el-col>

          </el-row>
          <div class="history_info" v-if="!isManager">

            <el-row :gutter="40">
              <el-col :span="12">
                <table >
                  <tr  v-for="(val,index) of unAnswerList" v-if="index%2==0" :key="val.id">
                    <td><div class="grid-content bg-purple-dark col-1 " ><span class="flagtitle_ask flag">问</span></div></td>
                    <td WIDTH="0%">&nbsp;</td>
                    <td><div class="grid-content bg-purple-dark ask-title" style="    margin-top: 15px;"><span v-html="isManager?val.user_name:'我'"/><span v-html="val.question_time"/></div>
                      <div><span class="question" v-html="val.question"/></div></td>
                  </tr>
                </table>
              </el-col>
              <el-col :span="12" >
                <table>
                  <tr  v-for="(val,index) of unAnswerList" v-if="index%2!=0"  :key="val.id">
                    <td><div class="grid-content bg-purple-dark col-1 " ><span class="flagtitle_ask flag">问</span></div></td>
                    <td>&nbsp;</td>
                    <td><div class="grid-content bg-purple-dark ask-title"  style="    margin-top: 15px;"><span v-html="isManager?val.user_name:'我'"/><span v-html="val.question_time"/></div>
                      <div><span class="question" v-html="val.question"/></div></td>
                  </tr>
                </table>
              </el-col>

            </el-row>
            <br/>
            <el-row style="margin-top: 20px" :gutter="40">
              <el-col :span="12">
                <table>
                  <template v-for="(val,index) of alAnswerList" v-if="index%2==0">
                    <tbody :key="val.id" >
                    <tr style="border-bottom: none" class="no-border-bottom">
                      <td ><div class="grid-content bg-purple-dark col-1 "><span class="flagtitle_ask flag">问</span></div></td>
                      <td>&nbsp;</td>
                      <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="isManager?val.user_name:'我'"/><span v-html="val.question_time"/></div>
                        <div><span class="question" v-html="val.question"/></div></td>
                    </tr>
                    <tr>
                      <td><div class="grid-content bg-purple-dark  col-1"><span class="flagtitle flag">答</span></div></td>
                      <td>&nbsp;</td>
                      <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="val.expert_name"/> <span v-html="val.answer_time"/></div>
                        <div><span class="question" v-html="val.answer"/></div></td>
                    </tr>
                    </tbody>
                  </template>
                </table>
              </el-col>
              <el-col :span="12">
                <table>
                  <template v-for="(val,index) of alAnswerList" v-if="index%2!=0">
                    <tbody :key="val.id" >
                    <tr style="border-bottom: none">
                      <td><div class="grid-content bg-purple-dark col-1 "><span class="flagtitle_ask flag">问</span></div></td>
                      <td>&nbsp;</td>
                      <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="isManager?val.user_name:'我'"/><span v-html="val.question_time"/></div>
                        <div><span class="question" v-html="val.question"/></div></td>
                    </tr>
                    <tr>
                      <td><div class="grid-content bg-purple-dark  col-1"><span class="flagtitle flag">答</span></div></td>
                      <td>&nbsp;</td>
                      <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="val.expert_name"/> <span v-html="val.answer_time"/></div>
                        <div><span class="question" v-html="val.answer"/></div></td>
                    </tr>
                    </tbody>
                  </template>
                </table>
              </el-col>
            </el-row>
          </div>

          <div class="history_info" v-else >
            <el-row :gutter="40">
              <el-col :span="12">
                <table>
                  <template v-for="(val,index) of alAnswerList" v-if="index%2==0">
                    <tbody :key="val.id" >
                  <tr class="no-border-bottom">
                    <td><div class="grid-content bg-purple-dark col-1 "><span class="flagtitle_ask flag">问</span></div></td>
                    <td>&nbsp;</td>
                    <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="isManager?val.user_name:'我'"/><span v-html="val.question_time"/></div>
                      <div><span class="question" v-html="val.question"/></div></td>
                  </tr>
                  <tr>
                    <td><div class="grid-content bg-purple-dark  col-1"><span class="flagtitle flag">答</span></div></td>
                    <td>&nbsp;</td>
                    <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="val.expert_name"/> <span v-html="val.answer_time"/></div>
                      <div><span class="question" v-html="val.answer"/></div></td>
                  </tr>
                    </tbody>
                  </template>
                </table>
              </el-col>
              <el-col :span="12">
                <table>
                  <template v-for="(val,index) of alAnswerList" v-if="index%2!=0">
                    <tbody :key="val.id" >
                    <tr class="no-border-bottom">
                      <td><div class="grid-content bg-purple-dark col-1 "><span class="flagtitle_ask flag">问</span></div></td>
                      <td>&nbsp;</td>
                      <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="isManager?val.user_name:'我'"/><span v-html="val.question_time"/></div>
                        <div><span class="question" v-html="val.question"/></div></td>
                    </tr>
                    <tr>
                      <td><div class="grid-content bg-purple-dark  col-1"><span class="flagtitle flag">答</span></div></td>
                      <td>&nbsp;</td>
                      <td><div class="grid-content bg-purple-dark ask-title" style="margin-top: 15px"><span v-html="val.expert_name"/> <span v-html="val.answer_time"/></div>
                        <div><span class="question" v-html="val.answer"/></div></td>
                    </tr>
                    </tbody>
                  </template>
                </table>
              </el-col>
            </el-row>
          </div>
        </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="回答"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose1">
      <div style="margin-bottom: 10px">
        <span>回答&nbsp;<span style="color: #70ad47">{{huidaWho}}</span>&nbsp;的提问</span>
      </div>
      <el-input type="textarea" v-model="abd" size="large" rows="8"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="upAsk">提交</el-button>
  </span>
    </el-dialog>

    <el-dialog
      title="提问"
      :visible.sync="dialogVisibleQuestion"
      width="30%"
      :before-close="handleClose">
      <div style="margin-bottom: 10px">
      <span>向&nbsp;<span style="color: #70ad47">{{askWho}}</span>&nbsp;提问</span>
      </div>
      <el-input type="textarea" v-model="abd" size="medium" rows="8"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleQuestion = false">取 消</el-button>
    <el-button type="primary" @click="upQuestion">提交</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'zgzjdyyjy',
  data: function () {
    return {
      activeName: 'abc0',
      abd: '',
      askWho: '',
      huidaWho: '',
      dialogVisible: false,
      dialogVisibleQuestion: false,
      isManager: false,
      managerDepartmentList: [],
      deptId: 0,
      alAnswerList: [],
      unAnswerList: [],
      currentQuestionId: -1,
      managerList: [],
      edid: 0,
      myId: 0

    }
  },
  mounted: function () {
    this.getUserInfo().then((flag) => {
      if (flag) { //  如果是专家则加载专家的部门
        this.getDeptment().then((did) => {
          this.getQuestionListByDeptId(did)
        })
      } else {
        this.getUserDeptment().then((did) => {
          this.getExpertList(did)
          this.getUserQuestionListByDeptId(did)
        })
      }
    })
  },
  methods: {
    getExpertList: function (did) {
      let promise = new Promise((resolve, reject) => {
        this.$ajax('get', this.HOST + '/tr/TrQuestion/web/getExpertList?dept_id=' + did, {abd: '11'}, (data) => {
          // console.log('专家列表', data)
          let flag = data.success
          if (flag === true) {
            let managerList = data.obj
            this.managerList = managerList
            resolve('数据加载成功')
          }
        })
      })

      return promise
    },
    getQuestionListByDeptId: function (did) {
      let promise = new Promise((resolve, reject) => {
        this.$ajax('get', this.HOST + '/tr/TrQuestion/web/getExpertQuestionList?expert_dept_id=' + did, {ccc: 'asdfasdf'}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            let obj = data.obj
            this.alAnswerList = obj.alAnswerList
            this.unAnswerList = obj.unAnswerList
            resolve('数据加载成功')
          }
        })
      })

      return promise
    },
    getUserQuestionListByDeptId: function (did) {
      let promise = new Promise((resolve, reject) => {
        this.$ajax('get', this.HOST + '/tr/TrQuestion/web/getUserQuestionList?dept_id=' + did, {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            let obj = data.obj
            this.alAnswerList = obj.alAnswerList
            this.unAnswerList = obj.unAnswerList
            resolve('数据加载成功')
          }
        })
      })

      return promise
    },
    handleClick: (res) => {
      let did = res.$attrs.panleId
      this.deptId = did
      if (this.isManager) {
        this.getQuestionListByDeptId(did)
      } else {
        this.getExpertList(did)
        this.getUserQuestionListByDeptId(did)
      }
    },
    getUserInfo: function () {
      let promise = new Promise((resolve, reject) => {
        this.$ajax('get', this.HOST + '/tr/trUser/web/getUserInfo', {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            if (data.data.userType === '4') {
              this.isManager = true
            }
            resolve(this.isManager) // 执行成功回调;
          }
        })
      })

      return promise
    },
    ask: function (id, val) {
      this.currentQuestionId = id
      this.dialogVisible = true
      this.huidaWho = val.user_name
    },
    handleClose1 (done) {
      this.dialogVisible = false
    },
    handleClose (done) {
      this.dialogVisibleQuestion = false
    },
    upInfo: function () {
      let promise = new Promise((resolve, reject) => {
        this.dialogVisible = false
        if (this.abd !== '') {
          let requestParam = {
            content: this.abd,
            question_id: this.currentQuestionId
          }
          this.$ajaxMore('post', this.HOST + '/tr/TrQuestion/web/addAnswer', requestParam, (data) => {
            // console.log(data)
            let flag = data.success
            if (flag === true) {
              this.abd = ''
              resolve(this.currentQuestionId) // 执行成功回调;
            }
          })
        }
      })

      return promise
    },
    upAsk: function () {
      this.upInfo().then((qid) => {
        this.getQuestionListByDeptId(this.deptId)
        this.$message({
          message: '提交成功',
          type: 'success'
        })
      })
    },
    goAsk: function (edid, id, o) {
      // console.log('oooooo,', o)
      this.askWho = o.expert_name
      this.edid = edid
      this.myId = id
      this.dialogVisibleQuestion = true
    },
    upQuestion: function () {
      this.unQuestionInfo(this.edid, this.myId).then((flag) => {
        this.getUserQuestionListByDeptId(this.deptId)
        this.$message({
          message: '提交成功',
          type: 'success'
        })
      })
    },
    unQuestionInfo: function (edid, id) {
      let promise = new Promise((resolve, reject) => {
        this.dialogVisibleQuestion = false
        if (this.abd !== '') {
          let requestParam = {
            content: this.abd,
            dept_id: this.deptId,
            expert_id: id,
            expert_dept_id: edid
          }
          this.$ajaxMore('post', this.HOST + '/tr/TrQuestion/web/addQuestion', requestParam, (data) => {
            // console.log(data)
            let flag = data.success
            if (flag === true) {
              this.abd = ''
              resolve(flag) // 执行成功回调;
            }
          })
        }
      })

      return promise
    },
    getUserDeptment: function () {
      let promise = new Promise((resolve, reject) => {
        this.$ajax('get', this.HOST + '/tr/TrQuestion/web/getUserDeptList ', {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            this.managerDepartmentList = data.obj
            if (this.managerDepartmentList.length > 0) {
              this.deptId = this.managerDepartmentList[0].dept_id
              // 拿到问题列表
              resolve(this.deptId) // 执行成功回调;
            }
          }
        })
      })

      return promise
    },
    getDeptment: function () {
      let promise = new Promise((resolve, reject) => {
        this.$ajax('get', this.HOST + '/tr/TrQuestion/web/ getExpertDeptList', {}, (data) => {
          // console.log(data)
          let flag = data.success
          if (flag === true) {
            this.managerDepartmentList = data.obj
            if (this.managerDepartmentList.length > 0) {
              this.deptId = this.managerDepartmentList[0].dept_id
              // 拿到问题列表
              resolve(this.deptId) // 执行成功回调;
            }
          }
        })
      })

      return promise
    }

  }
}
</script>

<style scoped>
  #zgzjdyyjy .info{
    margin:50px 0 0 20px;
  }
  #zgzjdyyjy .info_card{
    margin-top: 20px;
  }
  #zgzjdyyjy .el-col-5{
    width: auto;
    margin-left: 20px;
  }
  .col-1{
    /*line-height: 30px;*/
  }
  .tabs-specl{
    position: fixed;
    width: 100%;
    z-index: 100;
    /* padding-bottom: 0px; */
  }
  .flagtitle{
    background-color: #70ad47;
    height: 20px;
    width: 20px;
    padding: 5px;
    border: 1px solid #70ad47;
    border-radius: 5px;
    color: white;
  }
  .flagtitle_ask{
    background-color: #ffc000;
    height: 20px;
    width: 20px;
    padding: 5px;
    border: 1px solid #ffc000;
    border-radius: 5px;
    color: white;
  }
  .history_info{
    margin-top: 10px;
    padding-top: 20px;
    margin-left:20px;
  }
  .info_row{
    margin-top: 20px;
  }
  .ask-title :nth-child(1){
    color: #a3afb7;
    font-size: 14px;
  }
  .ask-title :nth-child(2){
    font-size: 12px;
    margin-left: 5px;
    color: #a3afb7;
  }
  .ask-title + div{
    margin-top: 8px;
    font-size: 16px;
    color: #37474f;
  }
  .ask-title +div +div{
  }
  .ask-title +div +div button{
    background-color: #ed7d31;
  }
  .flag{
    margin-top: 10px;
  }
  .exp{
    margin: 3px 0 0 50px
  }
  .no-border-top{
    border-top: none;
  }
  #zgzjdyyjy table{
    width: 100%;
    border-collapse: collapse;

  }
  #zgzjdyyjy table tr td:nth-child(1){
    width: 1%;
  }
  #zgzjdyyjy tr{
    border-bottom: 1px solid #ebebeb ;
  }
  #zgzjdyyjy td{
    padding-bottom: 10px;
  }
  .no-border-bottom{
    border-bottom: none!important;
  }
  .no-border-bottom td{
  }
</style>
