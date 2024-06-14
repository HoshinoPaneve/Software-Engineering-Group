<template>
  <div>
    <el-button type='primary' @click="refresh">刷新</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="image" label="图片" width="180">
        <template slot-scope="scope">
          <img :src="' http://localhost:9090' + scope.row.image" style="width: 100%;height: 100%;">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="菜品名" width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column prop="businessID" label="商家Id">
      </el-table-column>
      <el-table-column prop="saleVolume" label="销量">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑菜品" :visible.sync="editFormVisible">
      <el-form :inline="true" :model="formInline" class="form">
        <el-form-item label="菜品名">
          <el-input v-model="formInline.name" placeholder="菜品名"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="formInline.price" placeholder="价格"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [],
      formInline: {
        name: '',
        price: ''
      },
      editFormVisible: false,
      addFormVisible: false,
      editingRow: {}
    }
  },
  methods: {
    refresh() {
      console.log(this.$store.state.token)
      axios.get('http://localhost:9090/food/selectAll', {
        headers: {
          'token': this.$store.state.token
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    edit(row) {
      this.editFormVisible = true
      this.editingRow = row; // 保存需要编辑的行数据
      this.formInline = { ...row };
    },
    submit() {
      const index = this.tableData.indexOf(this.editingRow); // 找到当前编辑的行在数据中的位置
      this.tableData[index].name = this.formInline.name; // 更新表格中的数据
      this.tableData[index].price = this.formInline.price;
      this.editingRow = null;
      this.editFormVisible = false
      axios.put('http://localhost:9090/food/update', this.formInline, {
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