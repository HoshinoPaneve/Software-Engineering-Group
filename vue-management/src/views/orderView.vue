<template>
  <div>
    <el-button type='primary' @click="refresh">刷新</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="businessName" label="商家名" width="180">
      </el-table-column>
      <el-table-column prop="address" lstatusabel="地址" width="180">
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag size="medium" type="danger" v-if="scope.row.status == '待接单'">{{ scope.row.status }}</el-tag>
          <el-tag size="medium" type="success" v-if="scope.row.status == '已接单'">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="notes" label="备注">
      </el-table-column>
      <el-table-column prop="price" label="总价">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="accept(scope.row)" type="text" size="small">接单</el-button>
        </template>
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
      axios.get('http://localhost:9090/orders/selectAll', {
        headers: {
          'token': this.$store.state.token
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    accept(row) {
      row.status = '已接单'
      axios.put('http://localhost:9090/orders/update', {
        id: row.id,
        status: row.status
      }, {
        headers: {
          'token': this.$store.state.token
        }
      })
    }
  },
  mounted() {
    this.refresh()
  }
}
</script>

<style></style>