<template>
<div class="mainContent">
    <!--<div class="ContentTitle">诊改知识库</div>-->
    <div class="zgItem zgForm clearfix">
        <div @click="selectedAll()" class="allBtn">
            <el-checkbox  v-model="isAllChecked">全选</el-checkbox>
        </div>
        <div v-show="isAllChecked" class="allDown">
            <el-button type="text" @click="onAllDown">全部下载</el-button>
        </div>
        <div class="zgGroup">
            <el-input class="zgInput marginBto22" size="small"  v-model="content" placeholder="请输入搜索内容" clearable @click="onInput"></el-input>
            <el-button type="info" class="marginBto22 reverseBtn" size="small" @click="onSeach">搜索</el-button>
        </div>
    </div>
    <div class="zgItem list clearfix">
      <el-row :gutter="25" :data="items">
        <template v-for="(item,index) in items">
        <el-col :span="8" :key="item.num" >
            <div class="checkItem" :class="{ active: item.isChecked }"  @click="oneSelected(item)">
              <el-checkbox class="checkBtn" v-model="item.isChecked" ></el-checkbox>
              <p>
                <i class="iconfont" v-if="item.category=='docx'">&#xe618;</i>
                <i class="iconfont" v-else-if="item.category=='pptx'">&#xe69b;</i>
              </p>
              <div class="title clearfix">
                 <router-link :to="item.file" class="text" >{{item.text}}</router-link>
                  <div v-show="item.isChecked" class="downLink">
                    <a :href="item.down"  :download="item.name"><i class="iconfont">&#xe63a;</i></a>
                  </div>
              </div>
           </div>
        </el-col>
        </template>
      </el-row>
    </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        content:"",
        isAllChecked: false,
        currentPage3: 5,
        items:[
          {
            num:"1",
            isChecked:false,
            file:"/list1",
            down:"../../../../static/file/list1.docx",
            name:"重庆市黔江区民族职业教育中心扎实推进教学工作诊断与改进工作.docx",
            category:'docx',
            text:"重庆市黔江区民族职业教育中心扎实推进教学工作诊断与改进工作.docx "
          },
           {
            num:"2",
            isChecked:false,
            file:"/list2",
            down:"../../../../static/file/list2.docx",
            name:"四川省召开全国中职教学诊改试点学校工作推进会.docx",
            category:'docx',
            text:"四川省召开全国中职教学诊改试点学校工作推进会.docx "
          },
           {
            num:"3",
            isChecked:false,
            file:"/list3",
             name:"广西中等职业学校教学诊断与改进培训会成功举办.docx",
            down:"../../../../static/file/list3.docx",
            category:'docx',
            text:"广西中等职业学校教学诊断与改进培训会成功举办.docx "
          },
           {
            num:"4",
            isChecked:false,
            file:"/list4",
             name:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会.docx",
            down:"../../../../static/file/list4.docx",
            category:'docx',
            text:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会 "
          },
           {
            num:"5",
            isChecked:false,
            file:"/list5",
             name:"四川省中职诊改专委会开展中职试点学校教学工作诊改制度建设与运行方案研讨培训工作.docx",
            down:"../../../../static/file/list5.docx",
            category:'docx',
            text:"四川省中职诊改专委会开展中职试点学校教学工作诊改制度建设与运行方案研讨培训工作 "
          },
           {
            num:"6",
            isChecked:false,
            file:"/list6",
             name:"上海信息技术学校举行教师专业化成长专题报告会.docx",
            down:"../../../../static/file/list6.docx",
            category:'docx',
            text:"上海信息技术学校举行教师专业化成长专题报告会 "
          },
           {
            num:"7",
            isChecked:false,
            file:"/list7",
             name:"上海信息技术学校召开2017年教学诊断与改进推进大会.docx",
            down:"../../../../static/file/list7.docx",
            category:'docx',
            text:"上海信息技术学校召开2017年教学诊断与改进推进大会 "
          },
           {
            num:"8",
            isChecked:false,
            file:"/list8",
             name:"四川省中职诊改专委会开展诊改试点工作现场调研.docx",
            down:"../../../../static/file/list8.docx",
            category:'docx',
            text:"四川省中职诊改专委会开展诊改试点工作现场调研 "
          },
           {
            num:"9",
            isChecked:false,
            file:"/list9",
             name:"新疆自治区中等职业学校教学诊断与改进工作推进会顺利召开.docx",
            down:"../../../../static/file/list9.docx",
            category:'docx',
            text:"新疆自治区中等职业学校教学诊断与改进工作推进会顺利召开 "
          },
           {
            num:"10",
            isChecked:false,
            file:"/list10",
             name:"湖北省中等职业学校教学工作诊断与改进暨五年制高等职业教育教学管理培训班在宜昌举办.docx",
            down:"../../../../static/file/list10.docx",
            category:'docx',
            text:"湖北省中等职业学校教学工作诊断与改进暨五年制高等职业教育教学管理培训班在宜昌举办 "
          },
           {
            num:"11",
            isChecked:false,
            file:"/list11",
             name:"浙江建立职校教学诊改制度.docx",
            down:"../../../../static/file/list11.docx",
            category:'docx',
            text:"浙江建立职校教学诊改制度 "
          },
           {
            num:"12",
            isChecked:false,
            file:"/list12",
             name:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会.docx",
            down:"../../../../static/file/list12.docx",
            category:'docx',
            text:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会 "
          },
           {
            num:"13",
            isChecked:false,
            file:"/list13",
             name:"四川省教育厅召开全国中职教学诊改四川省试点学校工作汇报会.docx",
            down:"../../../../static/file/list13.docx",
            category:'docx',
            text:"四川省教育厅召开全国中职教学诊改四川省试点学校工作汇报会 "
          },
           {
            num:"14",
            isChecked:false,
            file:"/list14",
             name:"陕西高职院校教学工作诊断与改进实施方案制定培训会召开.docx",
            down:"../../../../static/file/list14.docx",
            category:'docx',
            text:"陕西高职院校教学工作诊断与改进实施方案制定培训会召开 "
          },
           {
            num:"15",
            isChecked:false,
            file:"/list15",
             name:"潍坊护理职业学院信息化建设引领内部质量保证体系落地.docx",
            down:"../../../../static/file/list15.docx",
            category:'docx',
            text:"潍坊护理职业学院信息化建设引领内部质量保证体系落地 "
          },
           {
            num:"16",
            isChecked:false,
            file:"/list16",
             name:"广东省召开高职院校内部质量保证体系诊断与改进省级试点工作会议.docx",
            down:"../../../../static/file/list16.docx",
            category:'docx',
            text:"广东省召开高职院校内部质量保证体系诊断与改进省级试点工作会议 "
          }
        ],
        items1:[
           {
            num:"1",
            isChecked:false,
            file:"/list1",
            down:"../../../../static/file/list1.docx",
            name:"重庆市黔江区民族职业教育中心扎实推进教学工作诊断与改进工作.docx",
            category:'docx',
            text:"重庆市黔江区民族职业教育中心扎实推进教学工作诊断与改进工作.docx "
          },
           {
            num:"2",
            isChecked:false,
            file:"/list2",
            down:"../../../../static/file/list2.docx",
            name:"四川省召开全国中职教学诊改试点学校工作推进会.docx",
            category:'docx',
            text:"四川省召开全国中职教学诊改试点学校工作推进会.docx "
          },
           {
            num:"3",
            isChecked:false,
            file:"/list3",
             name:"广西中等职业学校教学诊断与改进培训会成功举办.docx",
            down:"../../../../static/file/list3.docx",
            category:'docx',
            text:"广西中等职业学校教学诊断与改进培训会成功举办.docx "
          },
           {
            num:"4",
            isChecked:false,
            file:"/list4",
             name:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会.docx",
            down:"../../../../static/file/list4.docx",
            category:'docx',
            text:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会 "
          },
           {
            num:"5",
            isChecked:false,
            file:"/list5",
             name:"四川省中职诊改专委会开展中职试点学校教学工作诊改制度建设与运行方案研讨培训工作.docx",
            down:"../../../../static/file/list5.docx",
            category:'docx',
            text:"四川省中职诊改专委会开展中职试点学校教学工作诊改制度建设与运行方案研讨培训工作 "
          },
           {
            num:"6",
            isChecked:false,
            file:"/list6",
             name:"上海信息技术学校举行教师专业化成长专题报告会.docx",
            down:"../../../../static/file/list6.docx",
            category:'docx',
            text:"上海信息技术学校举行教师专业化成长专题报告会 "
          },
           {
            num:"7",
            isChecked:false,
            file:"/list7",
             name:"上海信息技术学校召开2017年教学诊断与改进推进大会.docx",
            down:"../../../../static/file/list7.docx",
            category:'docx',
            text:"上海信息技术学校召开2017年教学诊断与改进推进大会 "
          },
           {
            num:"8",
            isChecked:false,
            file:"/list8",
             name:"四川省中职诊改专委会开展诊改试点工作现场调研.docx",
            down:"../../../../static/file/list8.docx",
            category:'docx',
            text:"四川省中职诊改专委会开展诊改试点工作现场调研 "
          },
           {
            num:"9",
            isChecked:false,
            file:"/list9",
             name:"新疆自治区中等职业学校教学诊断与改进工作推进会顺利召开.docx",
            down:"../../../../static/file/list9.docx",
            category:'docx',
            text:"新疆自治区中等职业学校教学诊断与改进工作推进会顺利召开 "
          },
           {
            num:"10",
            isChecked:false,
            file:"/list10",
             name:"湖北省中等职业学校教学工作诊断与改进暨五年制高等职业教育教学管理培训班在宜昌举办.docx",
            down:"../../../../static/file/list10.docx",
            category:'docx',
            text:"湖北省中等职业学校教学工作诊断与改进暨五年制高等职业教育教学管理培训班在宜昌举办 "
          },
           {
            num:"11",
            isChecked:false,
            file:"/list11",
             name:"浙江建立职校教学诊改制度.docx",
            down:"../../../../static/file/list11.docx",
            category:'docx',
            text:"浙江建立职校教学诊改制度 "
          },
           {
            num:"12",
            isChecked:false,
            file:"/list12",
             name:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会.docx",
            down:"../../../../static/file/list12.docx",
            category:'docx',
            text:"宁波鄞州职教中心学校召开“教学工作诊断与改进”专题培训会 "
          },
           {
            num:"13",
            isChecked:false,
            file:"/list13",
             name:"四川省教育厅召开全国中职教学诊改四川省试点学校工作汇报会.docx",
            down:"../../../../static/file/list13.docx",
            category:'docx',
            text:"四川省教育厅召开全国中职教学诊改四川省试点学校工作汇报会 "
          },
           {
            num:"14",
            isChecked:false,
            file:"/list14",
             name:"陕西高职院校教学工作诊断与改进实施方案制定培训会召开.docx",
            down:"../../../../static/file/list14.docx",
            category:'docx',
            text:"陕西高职院校教学工作诊断与改进实施方案制定培训会召开 "
          },
           {
            num:"15",
            isChecked:false,
            file:"/list15",
             name:"潍坊护理职业学院信息化建设引领内部质量保证体系落地.docx",
            down:"../../../../static/file/list15.docx",
            category:'docx',
            text:"潍坊护理职业学院信息化建设引领内部质量保证体系落地 "
          },
           {
            num:"16",
            isChecked:false,
            file:"/list16",
             name:"广东省召开高职院校内部质量保证体系诊断与改进省级试点工作会议.docx",
            down:"../../../../static/file/list16.docx",
            category:'docx',
            text:"广东省召开高职院校内部质量保证体系诊断与改进省级试点工作会议 "
          }
        ]
      }
    },
    methods: {
      onAllDown(){
      let arr = this.items
        for(let i=0;i<arr.length;i++){
          (function(index){
              setTimeout(()=>{
                window.location.href=arr[i].down;
              },index*500)
          })(i)

      }
      },
      onSeach(){
        this.items=[];
        for(var i=0;i<this.items1.length;i++){
            if(this.items1[i].text.indexOf(this.content)!=-1){
                this.items.push(this.items1[i])
            }
        }
       },
       onInput(){
          if(this.content==""){
            this.items=this.items1;
          }
       },
   //单个复选框事件
		oneSelected (item){
			if(typeof item.isChecked == "undefined"){
        this.$set(item,"isChecked",true);
			}else{
				item.isChecked = !item.isChecked;
      }
			this.isSelectedAll();
		},

		//判断是否全选
		isSelectedAll(){
			var flag = true;
			this.items.forEach(function(value,index){
				if(!value.isChecked){
					flag = false;
				}
			})
			this.isAllChecked = flag ? true : false;
		},

		//全选与取消全选
		selectedAll:function(){
			this.isAllChecked = !this.isAllChecked;
			var AllChecked = this.isAllChecked;
			this.items.forEach(function(value,index){
        value.isChecked = !AllChecked;
			})
		}

    }
  }
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
/* .el-checkbox__input.is-checked+.el-checkbox__label{color: #70ad47} */
.mainContent{background-color:#f1f4f5;padding:1.64%}
.ContentTitle{font-size:18px;color:#37474f;line-height:24px; margin-bottom: 20px;};
.baseColor{background-color:#70ad47}
.reverseColor{background-color:#ed7d31}
.gray{backGround-color:#a5a5a5}
.zgItem{
    margin-bottom: 20px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5;
}
.zgInput{
    width: 298px;
    margin-right: 22px;
}
.zgForm{background-color:#fff;padding:22px 22px 0 35px;}
.reverseBtn{background-color:#ed7d31;color:#fff;float:right;border-color: #ed7d31;}
.reverseBtn:hover,.reverseBtn:active,.reverseBtn:focus {background-color:#ed975c;color:#fff;border-color: #ed975c;}
.marginBto22{
    margin-bottom: 22px;
}
.zgGroup{float:right;}
.allBtn{
  display: inline-block;
  padding-top: 11px;
}
.allBtn .el-checkbox__input.is-checked+.el-checkbox__label{
      color: #70ad47;
}
.allDown{
  display: inline-block;
}
.checkItem{
  position: relative;
  background-color: #fff;
  text-align: left;
  color:#37474f;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid #fff;
  margin-bottom: 24px;
  border-radius: 8px
}
.checkItem.active{
  border-color: #70ad47;
}
.checkItem.active .title{
   background-color: #70ad47;
   color: #fff;
}
.checkItem.active .title .text{
   color: #fff;
}
.checkItem.active .title .text:hover{
   color: #fff;
}
.checkItem.active p .iconfont{color: #70ad47;}
.checkItem p{
  height: 134px;
  text-align:center;
}
.checkItem p .iconfont{
  font-size: 60px;
  line-height: 134px;
    color: #dadada;
}
.checkItem .checkBtn{
  position: absolute;
  left: 0;
  top: -5px;
}
.checkItem .title{
  position:relative;
  padding: 18px 29px;
 margin-bottom: 0
}
.checkItem .title .text{
   float: left;
  width: 90%;
  line-height: 22px;
  height: 44px;
  display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
   overflow: hidden;
   text-overflow:ellipsis;
   /* text-decoration:underline; */
   color:#37474f;
}
.checkItem .title .text:hover{
   color:#70ad47;
}
.checkItem .title .downLink{
    float: left;
    width: 10%;
    line-height: 44px;
    height: 44px;
    text-align: center;
}
.checkItem .title .downLink a{
  color: #fff;
  display: inline-block;
  height: 44px;
  text-decoration:none
}
.checkItem .title .downLink .iconfont{
  color: #fff;
  font-size: 32px
}
.checkItem .el-row {
    margin-bottom: 20px;
}
.checkItem .el-row:last-child{
  margin-bottom: 0;
}
.allDown .el-button{
  color:#70ad47;
}
</style>
