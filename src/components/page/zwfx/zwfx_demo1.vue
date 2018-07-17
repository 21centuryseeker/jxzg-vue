<template>
  <div style="padding: 1.64% 1.64% 12px;">
    <el-tabs v-model="activeName"  @tab-click="handleClick">
        <el-tab-pane label="数据下钻new" name="first">
           <div id="chartBox"  @mouseout.self="hiddenDetail" style="height:440px"> 
              <div v-if="flag" class="condition">
                  <el-button :disabled="flagTop" size="small"  style="width: 186px"   @click="selectYXFnTop">{{prevXnameIndex}}</el-button>
                  <el-input class="zgInput" size="small" :disabled="true"   style="width:186px;" v-model="paramName"></el-input>            
                  <el-select v-model="value" size="small" placeholder="下钻"  :disabled="flagbtom" style="width: 186px" filterable @change="selectYXFn">
                    <el-option 
                      v-for="item in optionsYx"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value" :disabled="item.disabled">
                    </el-option>
                  </el-select>
              </div>
             <div id="chart1"></div>
          </div>
      </el-tab-pane>
         <el-tab-pane label="多指标分析" name="second">
        <el-checkbox-group v-model="checkList" style="margin-bottom: 15px;">
          <template v-for="checkItem in checkGroup">
            <el-checkbox :label="checkItem.value" :key="checkItem.value">{{checkItem.label}}</el-checkbox>
          </template>
       </el-checkbox-group> 
        <el-button size="small" type="success" @click="btnZB">搜索</el-button>
        <div id="chart2"></div> 
      </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: '',
      list1: [{name: '性别代码', value: 'XBDM'}, {name: '单位代码', value: 'DWDM'}, {name: '学历代码', value: 'XLDM'}],
      list2: [],
      list3: [],
      myChart: {},
      ifShow: false,
      activeName: 'first',
      keyName:'',
      optionsYx: [
        {
          value: '',
          label: '下钻',
          disabled: true
        },
        {
          value: 'DQZTDM',
          label: '当前状态'
        },{
          value: 'XLDM',
          label: '学历'
        }],
      value:'',
      flag:false,
      paramName:'',
      xcodeList:[],
      valueFlag:true,
      flagTop:true,
      flagbtom:false,
      prevXdata:'',
      prevGroup:[],
      prevGroupIndex:'上钻',
      prevXnameGroup:[],
      prevXnameIndex:'上钻',
     checkList:[],
      checkGroup:[
        {
          label: '全校师资总量',
          value: '1'
        },
        {
          label: '全校专任师资总量',
          value: '2'
        },
        {
          label: '兼职师资队伍数量',
          value: '3'
        },
      ],
      lableCheck:[]
      
    }
  },
  mounted () {
  this.btn1();
  
  },
  methods: {
     handleClick() {
       if(this.activeName=='first'){
           this.btn1();
       }else{
         this.checkList=[]
       }
      },
    // 数据下钻new btn
    btn1 () {
      this.$ajax('post', this.HOST + '/tr/test/web/testXZindex', {}, (res) => {
        if (res.success) {    
          if (this.myChart.clear) {
            this.myChart.clear()
          }      
         this.keyName=res.obj.data.key
         this.xcodeList=res.obj.data.xcodeList
         this.showEveryChart1(res.obj.data, document.getElementById('chart1'))
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 图表生成
    showEveryChart1(data,ele){
      this.myChart = this.$echarts.init(ele)
      let option = {
        color:['#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#a5a5a5', '#dd6969', '#00a6a6'],
        legend: {
          data: data.legend,
          // y: 'top',
          // x:'right',
          top:'2%',
          left:'3%',
          type: 'scroll'
          // bottom: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            z: 999999999
          }
        },
        grid: {
          x: 100,
          x2: 80,
          y2: 80
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: data.list > 10 ? 2 : 35
          },
          {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: data.list > 10 ? 2 : 35
          }
        ],
        toolbox: {
          show: true,
          right: '30',
          top: '20',
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [
          {
            name: '',
            // type: 'bar',
            // barWidth: '60%',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
            // data: data.datay
          }
        ]
      }
      let series = []
      for (let item of data.list) {
        series.push({
          name: item.name,
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: item.data
        })
      }
      // 柱形图
      for (let item of option.series) {
        item.type = 'bar'
        item.data = data.list.data
      }
      option.series = series
      // option.series.type = 'bar'
      option.xAxis = [
        {
          type: 'category',
          data: data.xAxis,
          axisTick: {
            alignWithLabel: true
          }
        }
      ]
      option.yAxis = [
        {
          type: 'value'
        }
      ]
      option.toolbox.feature.magicType = {show: true, type: ['bar', 'line']}
      // 正常点击事件
      this.myChart.on('click', this.eConsole)

      // 右键点击事件   contextmenu ----------------
      // document.oncontextmenu = function(e){
      //     return false;
      // }
      // this.myChart.on('contextmenu', this.eConsole)
       // 右键点击事件   contextmenu ----------------end
      this.myChart.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart.resize()
      })
    },
    // 点击的时候 
    eConsole(param){
      this.paramName=param.name
      this.valueNum=this.xcodeList[param.dataIndex]
      this.flag=true
      if(this.prevXnameGroup.length>0){
        this.flagTop=false 
      }else{
        this.flagTop=true
      }
      this.flagbtom=false
      // this.flagTop=true
    },
    hiddenDetail($event,a){
      this.flag=false
    },
    //选择上钻
    selectYXFnTop(){
      this.selectFnTop({prevXdata:this.prevGroup[0]}) 
    },

    //选择下钻
    selectYXFn(value){        
      let obj = {};
      obj = this.optionsYx.find((item)=>{
          return item.value === value;
      });   
      this.lable=obj.label
      let data={
        value:this.valueNum,
        key:this.keyName,
        nextXdata:this.value,
        nextXname:this.lable
      }
      this.selectFn(data)
    },
    // shangzuan
    selectFnTop(data){
         this.$ajax('post', this.HOST + '/tr/test/web/testPrevXZindex', data, (res) => {
        if (res.success) {   
            if (this.myChart.clear) {
                this.myChart.clear()
              }    
            this.keyName=res.obj.data.key
            this.xcodeList=res.obj.data.xcodeList  
            this.prevGroup.splice(0,1)
            this.prevXnameGroup.splice(0,1)
            if( this.prevXnameGroup.length==0){
               this.prevXnameIndex='上钻'
            }else{
               this.prevXnameIndex=this.prevXnameGroup[0]
            }
            if(this.prevXnameGroup.length>0){
                this.flagTop=false
                this.flagbtom=true
              }else{
                this.flagTop=true
                this.flagbtom=true
              }
            this.showEveryChart1(res.obj.data, document.getElementById('chart1'))
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
       // 下钻
    selectFn(data){
         this.$ajax('post', this.HOST + '/tr/test/web/testNextXZindex', data, (res) => {
        if (res.success) {   
            if (this.myChart.clear) {
                this.myChart.clear()
              }    
            // this.prevXdata= res.obj.data.prevXdata
            this.keyName=res.obj.data.key
            this.xcodeList=res.obj.data.xcodeList  
            this.prevGroup.unshift(res.obj.data.prevXdata)
            this.prevGroupIndex=this.prevGroup[0]
            this.prevXnameGroup.unshift(res.obj.data.prevXname)
            this.prevXnameIndex=this.prevXnameGroup[0]
            this.value="" 
            this.paramName='分类'
             if(this.prevXnameGroup.length>1){
                this.flagTop=false
                this.flagbtom=false
              }else{
                this.flagTop=false
                this.flagbtom=true
              }
            // this.flagbtom=true
            // this.flagTop=false
            this.showEveryChart1(res.obj.data, document.getElementById('chart1'))
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
      // 多指标
    btnZB(){
       if (this.myChart.clear) {
          this.myChart.clear()
        }  
       let obj = [];
       for(let item1 of this.checkList){
         for(let itemcheck of this.checkGroup){
            if(itemcheck.value === item1){
              obj.push(itemcheck.label)
            }
         }
       }
      this.lableCheck=obj.join()
      let checkList=this.checkList.join()
      var data = {
        timeType:3,
        startTime:'2013',
        endTime:'2018',
        indexIds:checkList,
        indexNames:this.lableCheck
      };
     this.$ajax('post', this.HOST + '/tr/test/web/testMoreindex', data, (res) => {
        if (res.success) {    
         this.showEveryChart1(res.obj.data, document.getElementById('chart2'))
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
.ul_list {
  min-height: 50px;
  width: 200px;
  background: #70ab47;
  margin-bottom: 30px;
}
.ul_list.three {
  background: #70ab47;
}
  .ul_list li {
    background: #70ab47;
    border: 1px solid #e0e0e0;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
  }
  div.div_left {
    display: inline-block;
    vertical-align: top;
  }
  div.div_right {
    display: inline-block;
    vertical-align: top;
  }
  #chart {
    width: 100%;
    height: 400px;
  }
    #chart1 {
    width: 100%;
    height: 400px;
  }
  #chartBox{
    padding-top: 10px;
    position: relative;
  }
    #chart2{
    width: 100%;
    height: 400px;
  }
  .condition{
    position: absolute; 
    left: 60%;
    top: 18%;
    margin-left: -283px;
     z-index: 99999 
  }

</style>
