<template>
  <div class="sidebar">
    <block-loading :dataFill="{datas:items}">
      <div slot="infos" style="height: 100%;">
        <el-scrollbar :wrapStyle="wrapStyle">
          <el-menu :default-active="onRoutes" @open="handleOpen" @close="handleClose" class="el-menu-vertical-demo" theme="dark" router background-color="#141b22" text-color="#a1a5ac" :default-openeds="opens" active-text-color="#fff">
            <template v-for="item in items">
              <template slot="title">
                <i v-html="item.icon" :key="item.url"></i>
                {{ item.title }}
              </template>
              <template v-if="item.children && item.children.length">
                <el-submenu :index="item.url" :key="item.url">
                  <template slot="title">
                    <i v-html="item.icon"></i>
                    {{ item.title }}
                  </template>
                  <template v-for="item1 in item.children">
                    <template v-if="item1.children && item1.children.length">

                      <el-submenu :index="item1.url" :key="item1.url">
                        <template slot="title">
                          <i v-html="item1.icon"></i>
                          {{ item1.title }}
                        </template>
                        <el-menu-item v-for="(subItem,i) in item1.children" :key="i" :index="subItem.url">
                          <i v-html="subItem.icon"></i>
                          {{ subItem.title }}
                        </el-menu-item>
                      </el-submenu>

                    </template>
                    <template v-else>
                      <el-menu-item :index="item1.url" :key="item1.url">
                        <template slot="title">
                          <i v-html="item1.icon"></i>
                          {{ item1.title }}
                        </template>
                      </el-menu-item>
                    </template>

                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.url" :key="item.url">
                  <i v-html="item.icon"></i>
                  {{ item.title }}
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-scrollbar>
      </div>
    </block-loading>
  </div>
</template>

<script>
//  引入vuex中的目录
// import store from '../../store/store'
import BlockLoading from "./BlockLoading";
import * as types from "../../store/types";
export default {
  name: "silder",
  components: { BlockLoading },
  data() {
    return {
      opens: [],
      actives: "",
      items: "",
      wrapStyle: [{ height: "100%" }]
    };
  },
  created() {
    let self = this;
    self.$ajax(
      "post",
      self.HOST + "/tr/TrMenu/web/loadMenu",
      { ddd: 777 },
      res => {
        if (res.success) {
          // setTimeout(() => {
          // for (let item of res.obj) {
          //   for (let item1 of item.children) {
          //     self.opens.push(item1.url)
          //   }
          // }
          self.items = res.obj;
          for (let [key, value] of self.items.entries()) {
            if (key < 3) {
              this.opens.push(value.url);
            }
          }
          // },3000)
        } else {
          self.$message({
            messge: res.msg,
            type: "error"
          });
        }
      }
    );
  },
  methods: {
    handleOpen(index, indexPath) {},
    handleClose(index, indexPath) {
      // this.opens = []
      // for (let item of indexPath) {
      //   this.opens.push(item)
      // }
    }
  },
  comments: [BlockLoading],
  computed: {
    onRoutes: (index, indexPath) => {
      let title = index.$route.meta.title;
      let isshowSubTitle = index.$route.meta.isshowSubTitle;
      if (isshowSubTitle === undefined) {
        isshowSubTitle = true;
      }
      document.title = title;
      index.$store.commit(types.CHANGE_TITLE, {
        title: title,
        isshowSubTitle: isshowSubTitle
      });
      let array = index.$route.path.split("/");
      // 判断双链管理和计划管理
      if (array[1] === "slgl") {
        return "/" + array[1];
      } else if (array[1] === "zgjhydb") {
        return "/" + array[1];
      } else if (array[1] === "swdtDetail") {
        return "/swdt";
      }
      if (array.length >= 3 && !(array[2] - 0)) {
        return "/" + array[1];
      }
      for (var i = 0; i < index.items.length; i++) {
        if (index.items[i].url === index.selectItem) {
          return index.selectItem;
        }
        for (var j = 0; j < index.items[i].children.length; j++) {
          if (index.items[i].children[j].url === index.selectItem) {
            return index.selectItem;
          }
          for (var k = 0; k < index.items[i].children[j].children.length; k++) {
            if (
              index.items[i].children[j].children[k].url === index.selectItem
            ) {
              return index.selectItem;
            }
            if (
              index.selectItem.toLowerCase().indexOf("wfzplandetail") !== -1 ||
              index.selectItem.toLowerCase().indexOf("editplan") !== -1 ||
              index.selectItem.toLowerCase().indexOf("addplan") !== -1
            ) {
              // index.opens.push('/zgjhydb')
              // index.opens.push(index.items[1].url)
              return "/zgjhydb";
            } else if (
              index.selectItem.toLowerCase().indexOf("wjdplandetail") !== -1
            ) {
              // index.opens.push('/zgjhydb')
              // index.opens.push(index.items[1].url)
              return "/zgjhydb";
            } else if (
              index.selectItem.toLowerCase().indexOf("wcyplandetail") !== -1
            ) {
              // index.opens.push('/zgjhydb')
              // index.opens.push(index.items[1].url)
              return "/zgjhydb";
            } else if (
              index.selectItem.toLowerCase().indexOf("wshplandetail") !== -1
            ) {
              // index.opens.push('/zgjhydb')
              // index.opens.push(index.items[1].url)
              return "/zgjhydb";
            } else if (
              index.selectItem.toLowerCase().indexOf("shtargetdetail") !== -1
            ) {
              // index.opens.push('/slgl')
              // index.opens.push(index.items[1].url)
              return "/slgl";
            } else if (
              index.selectItem.toLowerCase().indexOf("targetdetail") !== -1 ||
              index.selectItem.toLowerCase().indexOf("addtarget") !== -1 ||
              index.selectItem.toLowerCase().indexOf("edittarget") !== -1 ||
              index.selectItem.toLowerCase().indexOf("splittarget") !== -1 ||
              index.selectItem.toLowerCase().indexOf("editchildtarget") !==
                -1 ||
              index.selectItem.toLowerCase().indexOf("childlist") !== -1 ||
              index.selectItem.toLowerCase().indexOf("zdplan") !== -1
            ) {
              // index.opens.push('/slgl')
              // index.opens.push(index.items[1].url)
              return "/slgl";
            }
            if (
              i === index.items.length - 1 &&
              j === index.items[i].children.length - 1 &&
              k === index.items[i].children[j].children.length - 1
            ) {
              index.opens = [];
              // if (index.selectItem.toLowerCase().indexOf('wfzplandetail') !== -1 || index.selectItem.toLowerCase().indexOf('editplan') !== -1 || index.selectItem.toLowerCase().indexOf('addplan') !== -1) {
              //   index.opens.push('/zgjhydb')
              //   index.opens.push(index.items[1].url)
              //   return '/zgjhydb'
              // } else if (index.selectItem.toLowerCase().indexOf('wjdplandetail') !== -1) {
              //   index.opens.push('/zgjhydb')
              //   index.opens.push(index.items[1].url)
              //   return '/zgjhydb'
              // } else if (index.selectItem.toLowerCase().indexOf('wcyplandetail') !== -1) {
              //   index.opens.push('/zgjhydb')
              //   index.opens.push(index.items[1].url)
              //   return '/zgjhydb'
              // } else if (index.selectItem.toLowerCase().indexOf('wshplandetail') !== -1) {
              //   index.opens.push('/zgjhydb')
              //   index.opens.push(index.items[1].url)
              //   return '/zgjhydb'
              // } else if (index.selectItem.toLowerCase().indexOf('shtargetdetail') !== -1) {
              //   index.opens.push('/slgl')
              //   index.opens.push(index.items[1].url)
              //   return '/slgl'
              // } else if (index.selectItem.toLowerCase().indexOf('targetdetail') !== -1 || index.selectItem.toLowerCase().indexOf('addtarget') !== -1 || index.selectItem.toLowerCase().indexOf('edittarget') !== -1 || index.selectItem.toLowerCase().indexOf('splittarget') !== -1 || index.selectItem.toLowerCase().indexOf('editchildtarget') !== -1 || index.selectItem.toLowerCase().indexOf('childlist') !== -1 || index.selectItem.toLowerCase().indexOf('zdplan') !== -1) {
              //   index.opens.push('/slgl')
              //   index.opens.push(index.items[1].url)
              //   return '/slgl'
              // }
              return index.selectItem;
            }
          }
        }
      }
    },
    /**
     * 解决子路由后菜单取消激活BUG
     * 约定所有子路由中的路径必须包含父路由
     *  eg.
     /father
     /father/chirdren
     * @returns {string}
     */
    selectItem() {
      // console.log('abc', this.$route.meta.title)
      return this.$route.path;
      // let title = this.$route.meta.title
      // let isshowSubTitle = this.$route.meta.isshowSubTitle
      // if (isshowSubTitle === undefined) {
      //   isshowSubTitle = true
      // }
      // this.$store.commit(types.CHANGE_TITLE, {title: title, isshowSubTitle: isshowSubTitle})
      // let array = this.$route.path.split('/')
      // if (array.length >= 3) {
      //   return '/' + array[1]
      // } else {
      //   return this.$route.path
      // }
    }
  }
};
</script>
<style>
body
  .el-menu-vertical-demo.el-menu:first-child
  > .el-submenu
  > .el-submenu__title {
  background: #2e363f !important;
  border-top: 1px solid #1c2228;
  color: #c8ccd4 !important;
  height: 78px;
  line-height: 78px;
}
li.el-submenu > div.el-submenu__title {
  height: 62px;
  line-height: 62px;
}
body
  .el-menu-vertical-demo.el-menu:first-child
  > .el-submenu
  > .el-submenu__title
  i {
  color: #c8ccd4 !important;
}
.sidebar {
  display: block;
  position: absolute;
  width: 220px;
  left: 0;
  top: 65px;
  bottom: 0;
  /* background: #2e363f; */
  background: #1c2228;
  border-top: 1px solid #555a5f;
}
.sidebar .el-scrollbar__thumb {
  background: #3c434b !important;
}
.sidebar > ul {
  height: 100%;
}
.el-scrollbar {
  height: 100%;
}
.el-submenu.is-opened ul li {
  background: #1c2228 !important;
}
.el-submenu.is-opened ul li.is-active {
  background: #70ab47 !important;
}
li.el-menu-item.is-active {
  background: #70ab47 !important;
}
.el-submenu.is-opened ul li.el-menu-item:hover {
  background: #70ab47 !important;
  color: #fff !important;
}
div.el-submenu__title:hover {
  background: #70ab47 !important;
  color: #fff !important;
}
div.el-submenu__title:hover i {
  color: #fff !important;
}
li.el-menu-item:hover {
  background: #70ab47 !important;
  color: #fff !important;
}
li.el-menu-item:hover i {
  color: #fff !important;
}
.sidebar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.sidebar .el-scrollbar__view {
  /* height: 100%; */ /* 为了解决滚动条不显示的问题 */
  width: 100%;
}
.sidebar .el-menu-vertical-demo.el-menu {
  width: 100%;
  height: 100%;
}
</style>
