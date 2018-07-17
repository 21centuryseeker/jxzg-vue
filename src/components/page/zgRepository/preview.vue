<template>
  <div class="warrp">
			<div class="title">
				<h3>{{title}}</h3>
				<p class="data">
                   <span v-if="authorFlag">
                      作者 {{author}}
                  </span> 
                    {{pubtime}}
                 </p>
			</div>
           <div v-if="flagShow" class="nodataPic">
                <img src="../../../assets/empty.jpg"/>
            </div>
			<div v-else  class="contentGroup">
				<template v-for="(item,index) in arr">
                    <li class="indent" :key="index" v-html="item">
                    </li> 
				</template>
                <!-- {{arr}} -->
			</div>
		
            <div class="imgBox">
                <!-- <img src="../../../../assets/img/list1.jpg"> -->
            </div>
		</div>
</template>
<script>
export default {
 data() {
      return {
        title:'',//标题
        pubtime:'',//时间
        author:'',//作者
        arr:[],
        authorFlag:true,//是否有作者
        arr1:'',
        flagShow:true
  }},
  mounted () {
      let id = this.$router.currentRoute.params.id
         let self = this
          self.$ajax('post', self.HOST+'/tr/trZsk/web/getZskById?zskId='+id,{},(res) => {
            if (res.success) {
               if(res.obj==null){
                  self.flagShow=true;

               }else{
                self.flagShow=false;
                self.arr=[]
                if(res.obj.content){
                     let contentArray= res.obj.content  
                    self.arr=contentArray.split("<br>");
                    self.title=res.obj.name
                    self.pubtime=res.obj.pubtime
                }
               
                if(res.obj.author==null){
                    self.authorFlag=false  
                }else{
                     self.authorFlag=true  
                }

               }
            } else {
              self.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
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
/*清除浮动*/

html,
body,
h3,
h5,
p,
img, {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
    font-family: "Microsoft Yahei", "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    /* text-align: center; */
    color: #555;
    background-color: #fff;
}
.warrp{
    margin-top: -2.28%;
    padding:0 30px;
    background-color: #fff
}
h3 {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    padding: 10px 0;
    font-size: 20px;
    border-bottom: 1px solid #dbdbdb;
    font-weight: bold;
    margin-bottom: 10px;
}

.data {
    text-align: right;
    font-size: 12px;
    line-height: 24px;
}
.indent{
    text-align: left;
    line-height: 32px;
    /* text-indent: 2em; */
}
.indent img{
    display: block;
    margin: auto
}
.indent a{
    color:#70ad47 
}
.imgBox{
    padding: 20px;
}
.contentGroup li:first-child{
text-indent: 2em
}
.nodataPic{
    height: 550px;
    text-align: center;
}
.nodataPic img{
    padding-top: 150px;
    display: inline-block;
    margin: auto;
}
</style>