<template>
  <div class="container">
    <div class="search">
      <el-input v-model="keyword" placeholder="请输入员工名称" clearable></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="table">
      <el-table :data="employees" border>
        <el-table-column prop="name" label="员工姓名"></el-table-column>
        <el-table-column prop="id" label="工号"></el-table-column>
        <el-table-column prop="department" label="当前部门"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="primary" @click="transfer(row)">调动</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>

    <el-dialog
      title="员工调动"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <p>员工姓名：{{ currentEmployee.name }}</p>
        <p>工号：{{ currentEmployee.id }}</p>
        <p>当前部门：{{ currentEmployee.department }}</p>
        <p>调动部门：</p>
        <el-select v-model="newDepartment" placeholder="请选择">
          <el-option
            v-for="(item, index) in departments"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmTransfer">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PerMv',
  data() {
    return {
      keyword: '',
      employees: [
        {
          name: '张三',
          id: '1001',
          department: '销售部',
        },
        {
          name: '李四',
          id: '1002',
          department: '技术部',
        },
        {
          name: '王五',
          id: '1003',
          department: '人事部',
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 30,
      dialogVisible: false,
      currentEmployee: {},
      newDepartment: '',
      departments: ['销售部', '技术部', '人事部', '财务部', '市场部'],
    }
  },
  methods: {
    search() {
      // 模拟搜索员工的逻辑，实际应该调用后端接口
      console.log('搜索员工名称：' + this.keyword)
    },
    transfer(row) {
      // 打开调动对话框，设置当前员工和新部门
      this.dialogVisible = true
      this.currentEmployee = row
      this.newDepartment = row.department
    },
    handleClose(done) {
      // 关闭对话框的回调函数
      done()
    },
    confirmTransfer() {
      // 确认调动的逻辑，实际应该调用后端接口
      console.log(
        `将员工${this.currentEmployee.name}从${this.currentEmployee.department}调动到${this.newDepartment}`
      )
      this.currentEmployee.department = this.newDepartment
      this.dialogVisible = false
    },
    handlePageChange(page) {
      // 分页器改变页码的回调函数，实际应该调用后端接口
      console.log('当前页码：' + page)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.table {
  margin-top: 20px;
  width: 80%;
}
.pagination {
  margin-top: 20px;
}
.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
