<template>
  <div>
    <el-button type='primary' @click="refresh">刷新</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="账号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="昵称" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="role" label="身份">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    refresh() {
      console.log(this.$store.state.token)
      axios.get('http://localhost:9090/user/selectAll', {
        headers: {
          'token': this.$store.state.token
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    }
  },
  mounted() {
    this.refresh()
  }
}
</script>

<style></style>
