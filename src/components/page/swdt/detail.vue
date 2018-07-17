<template>
  <div>
    <div style="width: 100%;overflow-x: auto;" v-html="tableHtml">
      <!-- <table v-if="tableData.length" class="special_table" border="0" width="100%">
        <thead>
            <th v-for="(item, index ) in tableData[0]" >{{index}}</th>
        </thead>
        <tbody>
          <tr v-for="(items, indexs ) in tableData" :key="indexs">
            <td v-for="(item, index ) in items" :key="index">{{item}}</td>
          </tr>
        </tbody>
      </table> -->
    </div>
    <el-pagination
      v-if="totalSize > 0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[20, 30, 40, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 20,
      totalSize: 0,
      tableData: [],
      tableHtml: ''
    }
  },
  mounted () {
    this.$ajaxGet('/tr/preview/web/prewExcel/' + this.$route.params.th.replace(/\./g, '') + '/' + this.$route.params.table + '/' + this.currentPage + '/20', {}, (res) => {
          this.tableHtml = res.data
          this.totalSize = res.total
        })
    // this.refreshDom()
  },
  methods: {
    refreshDom () {
      let data = {
      tableName: this.$route.params.table,
      startPage: 1,
      pageSize: 20
    }
    this.$ajaxGet('/tr/rcpy/web/getRcpyInfo', data, (res) => {
      if (res.success) {
        this.totalSize = res.data.total
        this.tableData = res.data.data
      } else {
        this.$message({
          type: 'error',
          msg: res.msg
        })
      }
    })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.refreshDom()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.refreshDom()
    }
  }
}
</script>
<style scoped>

</style>
