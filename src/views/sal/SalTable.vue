<template>
  <div class="container">
    <div class="search">
      <el-input v-model="keyword" placeholder="请输入员工姓名或工号" clearable></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="table">
      <el-table :data="employees" border>
        <el-table-column prop="name" label="姓名" sortable></el-table-column>
        <el-table-column prop="id" label="工号" sortable></el-table-column>
        <el-table-column prop="department" label="部门" sortable></el-table-column>
        <el-table-column prop="position" label="岗位"></el-table-column>
        <el-table-column prop="baseSalary" label="基本工资" sortable></el-table-column>
        <el-table-column prop="performanceSalary" label="绩效工资" sortable></el-table-column>
        <el-table-column prop="overtimeSalary" label="加班工资" sortable></el-table-column>
        <el-table-column prop="bonus" label="奖金" sortable></el-table-column>
        <el-table-column prop="deduction" label="扣款" sortable></el-table-column>
        <el-table-column prop="tax" label="个税" sortable></el-table-column>
        <el-table-column prop="socialSecurity" label="社保" sortable></el-table-column>
        <el-table-column prop="housingFund" label="公积金" sortable></el-table-column>
        <el-table-column prop="netSalary" label="实发工资" sortable></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="primary" @click="edit(row)">修改</el-button>
            <el-button type="success" @click="send(row)">发送</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :total.sync="total"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>

    <div class="export">
      <el-button type="primary" @click="exportExcel">导出Excel</el-button>
      <el-button type="primary" @click="exportPDF">导出PDF</el-button>
    </div>

    <el-dialog
      title="修改工资"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <p>姓名：{{ currentEmployee.name }}</p>
        <p>工号：{{ currentEmployee.id }}</p>
        <p>部门：{{ currentEmployee.department }}</p>
        <p>岗位：{{ currentEmployee.position }}</p>

        <!-- 以下为可修改的工资项目 -->
        <p>基本工资：<input v-model.number.lazy.trim="currentEmployee.baseSalary" /></p>
        <p>绩效工资：<input v-model.number.lazy.trim="currentEmployee.performanceSalary" /></p>
        <p>加班工资：<input v-model.number.lazy.trim="currentEmployee.overtimeSalary" /></p>
        <p>奖金：<input v-model.number.lazy.trim="currentEmployee.bonus" /></p>
        <p>扣款：<input v-model.number.lazy.trim="currentEmployee.deduction" /></p>
        <p>个税：<input v-model.number.lazy.trim="currentEmployee.tax" /></p>
        <p>社保：<input v-model.number.lazy.trim="currentEmployee.socialSecurity" /></p>
        <p>公积金：<input v-model.number.lazy.trim="currentEmployee.housingFund" /></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmEdit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SalTable',
  data() {
    return {
      keyword: '',
      employees: [
        // 假数据，实际应该从后端获取
        {
          name: '张三',
          id: '1001',
          department: '销售部',
          position: '销售经理',
          baseSalary: 8000,
          performanceSalary: 2000,
          overtimeSalary: 500,
          bonus: 1000,
          deduction: 200,
          tax: 500,
          socialSecurity: 800,
          housingFund: 400,
          netSalary: 9600,
        },
        {
          name: '李四',
          id: '1002',
          department: '技术部',
          position: '程序员',
          baseSalary: 10000,
          performanceSalary: 3000,
          overtimeSalary: 1000,
          bonus: 2000,
          deduction: 300,
          tax: 800,
          socialSecurity: 1000,
          housingFund: 500,
          netSalary: 13400,
        },
        {
          name: '王五',
          id: '1003',
          department: '人事部',
          position: '人事专员',
          baseSalary: 6000,
          performanceSalary: 1000,
          overtimeSalary: 300,
          bonus: 500,
          deduction: 100,
          tax: 300,
          socialSecurity: 600,
          housingFund: 300,
          netSalary: 6500,
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 30,
      dialogVisible: false,
      currentEmployee: {},
    }
  },
  methods: {
    search() {
      // 模拟搜索员工的逻辑，实际应该调用后端接口
      console.log('搜索员工姓名或工号：' + this.keyword)
    },
    edit(row) {
      // 打开修改工资对话框，设置当前员工
      this.dialogVisible = true
      this.currentEmployee = { ...row } // 深拷贝，避免修改原数据
    },
    send(row) {
      // 发送电子工资条的逻辑，实际应该调用后端接口
      console.log('发送电子工资条给员工：' + row.name)
    },
    handleClose(done) {
      // 关闭对话框的回调函数
      done()
    },
    confirmEdit() {
      // 确认修改工资的逻辑，实际应该调用后端接口
      console.log(`修改员工${this.currentEmployee.name}的工资为：${this.currentEmployee.netSalary}`)
      this.dialogVisible = false
    },
    handlePageChange(page) {
      // 分页器改变页码的回调函数，实际应该调用后端接口
      console.log('当前页码：' + page)
    },
    exportExcel() {
      // 导出Excel的逻辑，实际应该调用后端接口
      console.log('导出Excel')
    },
    exportPDF() {
      // 导出PDF的逻辑，实际应该调用后端接口
      console.log('导出PDF')
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
}
.table {
  margin-top: 20px;
  width: 90%;
}
.pagination {
  margin-top: 20px;
}
.export {
  margin-top: 20px;
}
.dialog-content {
  display: flex;
  flex-direction: column;
}
</style>
