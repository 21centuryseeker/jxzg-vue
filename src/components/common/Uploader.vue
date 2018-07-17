<template>
  <div style="display: inline-block;max-width: 100%;">
    <div class="cjs_upload_btn upload_btn">{{btnName || '选择文件'}}</div>
    <div class="upload_list">
      <div class="item" v-for="(item, index) in fileList" :key="index">
        <span class="info">
          <i class="el-icon-document"></i>{{item[fileName] ? item[fileName] : item['oldFileName'] ? item['oldFileName'] : item['fileName']}}</span>
        <span class="state">
          <i class="el-icon-success remove_file" @click="$emit('removeFile', index, item, listName)" title="移除文件"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
// import WebUploader from '../../../static/webuploader/webuploader.min.js'
export default {
  data() {
    return {};
  },
  props: [
    "btnName",
    "fileList",
    "fileName",
    "beforeFileQueued",
    "uploadSuccess",
    "uploadError",
    "formData",
    "listName"
  ],
  mounted() {
    let self = this;
    // 初始化Web Uploader
    var uploader = WebUploader.create({
      formData: self.formData,
      // 选完文件后，是否自动上传。
      auto: true,
      // swf文件路径
      swf: "./static/swf/Uploader.swf",
      // 文件接收服务端。
      server: self.HOST + "/tr/uploadFile/web/uploadFile",
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      // 此处使用$el获取到当前创建组建的顶层元素，满足一个页面内多次使用本组件导致的问题
      pick: self.$el.getElementsByClassName("cjs_upload_btn")[0],
      // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      resize: false,
      duplicate: true
    });
    uploader.on("beforeFileQueued", function(file) {
      if (self.beforeFileQueued) {
        return self.beforeFileQueued(file);
      } else {
        return true;
      }
    });
    uploader.on("uploadSuccess", function(file, res) {
      if (self.uploadSuccess) {
        self.uploadSuccess(file, res, self.listName);
      }
    });
    uploader.on("uploadError", function(file, res) {
      if (self.uploadError) {
        self.uploadError(file, res);
      }
    });
  },
  methods: {}
};
</script>
<style>
/* 上传 */
.upload_btn {
  width: 88px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  color: #fff;
  background-color: #57a026;
  border-radius: 4px;
  cursor: pointer;
}
.upload_btn.no_use {
  cursor: not-allowed;
}
.webuploader-container {
  position: relative;
}
.webuploader-element-invisible {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
.upload_btn .webuploader-pick {
  position: relative;
  display: inline-block;
  cursor: pointer;
  background: #57a026;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.webuploader-pick-hover {
  background: #57a026;
}

.webuploader-pick-disable {
  opacity: 0.6;
  pointer-events: none;
}
.upload_list .info {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
  padding-right: 20px;
}
.upload_list .item {
  position: relative;
}
.upload_list .info > i {
  margin-right: 10px;
}
.upload_list .state {
  margin-left: 20px;
  position: absolute;
  right: 5px;
  top: 0;
  color: #57a026;
}
.upload_list .item:hover .el-icon-success:before {
  content: "\E60F";
}
.upload_list .item:hover {
  background: #e0e0e0;
  cursor: pointer;
}
</style>
