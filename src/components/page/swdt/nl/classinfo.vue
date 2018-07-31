<template>
  <div id="table-fill-report">
    <div v-html="htmls" id="fillReport">

    </div>
  </div>
</template>

<script>

export default {
  name: 'ClassInfo',
  props: {
    cid: String,
    itype:String
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
      fshipinziyuan: {},
      htmls:""
    }
  },
  watch: {
    cid (val) {
     this.getData(val)
    }
  },
  mounted: function () {
    console.log(this.$route)
  },
  created: function () {
  },
  components: {
  },
  methods: {
      saveOrUpdateItype2(itemId,itemKey,itemValue){
      let params = {
          id:itemId
         ,value:itemValue
         ,key_id:itemKey
      }
      console.log(params)
      this.$ajax("post",this.HOST+"/tr/trTable/web/updateZyReport",params,(flag)=>{
        this.$notify({
          title: '成功',
          message: '报表编辑成功',
          type: 'success'
        });
      })
    },
    saveOrUpdate(itemKey,itemValue){

        let params = {
            typeId:this.cid
           ,key:itemKey
           ,value:itemValue
        }
        console.log(params)
        this.$ajax("post",this.HOST+"/tr/fillReport/save-or-update",params,(flag)=>{
          this.$notify({
            title: '成功',
            message: '报表编辑成功',
            type: 'success'
          });
        })
    },
    /**
     * 根据类型不同处理不同的保存方式
     * @param elementType
     */
    processByElementType(event){
      let element = $(event.target)
      let key  = element.data("type");
      let elementType = element.attr("type")||"text"
      if(elementType=="checkbox") //checkbox的执行逻辑与radio的一样
        elementType = "radio"
      switch(elementType){
        case "radio":     //单选时的保存逻辑
          let array = []
           key = element.attr("name")
          //找到所有的同类元素
          let items = element.parent().children(".minput");
          for(let i = 0;i<items.length;i++){
            let item = $(items.get(i))
            let value = item.val()


            let map = {}
            if(item.is(":checked")){
               map = {
                  checked:true,
                  value:value
              }
            }else{
               map = {
                checked:false,
                value:value
              }
            }
            array.push(map)
          }
          let strJson = JSON.stringify(array);
          this.saveOrUpdate(key,strJson)
          break;
        case "checkbox": //多选时的保存逻辑
          break;
        default:  //处理普通的INPUT保存操作
          let value = element.val()
          this.saveOrUpdate(key,value);
      }


    },
    processByElementTypeType2(event){
      let element = $(event.target)
      let key  = element.data("key");
      let id = element.data("id");
      let elementType = element.attr("type")||"text"
      if(elementType=="checkbox") //checkbox的执行逻辑与radio的一样
        elementType = "radio"
      switch (elementType) {
        case "radio":
          let array = []
          let key1 = element.data("type")
          //找到所有的同类元素
          let items = element.parent().children(".minput");
          for(let i = 0;i<items.length;i++){
            let item = $(items.get(i))
            let value = item.val()


            let map = {}
            if(item.is(":checked")){
              map = {
                checked:true,
                value:value
              }
            }else{
              map = {
                checked:false,
                value:value
              }
            }
            array.push(map)
          }
          let strJson = JSON.stringify(array);
          this.saveOrUpdateItype2(id,key1,strJson)
          break
        default:
          let value  = element.val()//拿到元素值
          this.saveOrUpdateItype2(id,key,value);



      }
    },
    getData(type_id){
      this.$ajaxGet(this.HOST+"/tr/preview/prewExcelXLS/"+type_id+"/"+this.itype,{},(data)=>{
        $("#fillReport").off("keypress",".sinput")
        $("#fillReport").off("change",".minput")
        if(this.itype==2){//说明是第三张表
          $("#fillReport").on("keypress",".sinput",(event)=>{
            if(event.keyCode == "13"){ //如果是回车事件
               this.processByElementTypeType2(event)
            }
          })
          $("#fillReport").on("change",".minput",(event)=>{
            this.processByElementTypeType2(event)
          })
        }else{
          $("#fillReport").on("keypress",".sinput",(event)=>{
            if(event.keyCode == "13"){ //如果是回车事件
              this.processByElementType(event)
            }
          })
          $("#fillReport").on("change",".minput",(event)=>{
            this.processByElementType(event)
          })
        }

        this.htmls = data
        setTimeout(()=>{
          $(".label-flag").parent().first().children("span").css({"font-size":"20px"})
          $(".label-flag").parent().first().css({"background-color":"#70ad47","font-size":"20px"});
          $(".label-flag").parent().filter((index)=>{
            return index!=0

          }).css("background-color","#f3f8fb");

        },50)



      })
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
