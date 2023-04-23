<template>
  <div class="salary-page">
    <div class="header">
      <el-input v-model.trim="search" placeholder="请输入员工姓名" style="width: 200px"></el-input>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="员工名称" width="180"></el-table-column>
        <el-table-column prop="id" label="工号" width="180"></el-table-column>
        <el-table-column prop="salary" label="薪资" width="180"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="{ row }">
            <el-button type="primary" @click="editRow(row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
    <el-dialog title="编辑薪资" :visible.sync="showDialog">
      <el-form :model="editData" :rules="rules" ref="editForm">
        <el-form-item label="员工名称" prop="name">
          <el-input v-model.trim="editData.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="薪资" prop="salary">
          <el-input v-model.trim.number="editData.salary"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="updateSalary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PerSalary',
  data() {
    return {
      showDialog: false,
      search: '',
      tableData: [
        {
          name: '张三',
          id: '1001',
          salary: 8000,
        },
        {
          name: '李四',
          id: '1002',
          salary: 9000,
        },
        {
          name: '王五',
          id: '1003',
          salary: 10000,
        },
        {
          name: '赵六',
          id: '1004',
          salary: 11000,
        },
        {
          name: '孙七',
          id: '1005',
          salary: 12000,
        },
        {
          name: '周八',
          id: '1006',
          salary: 13000,
        },
        {
          name: '吴九',
          id: '1007',
          salary: 14000,
        },
        {
          name: '郑十',
          id: '1008',
          salary: 15000,
        },
      ],
      editData: {
        name: '',
        salary: 0,
      },
      rules: {
        salary: [{ required: true, message: '请输入薪资', trigger: 'blur' }],
      },
      currentPage: 1,
    }
  },
  methods: {
    handleSearch() {
      // 搜索员工姓名
      if (this.search) {
        const result = this.tableData.filter((item) => item.name.includes(this.search))
        if (result.length > 0) {
          this.tableData = result
        } else {
          this.$message.warning('没有找到该员工')
        }
      } else {
        this.$message.warning('请输入员工姓名')
      }
    },
    editRow(row) {
      // 编辑员工薪资
      this.showDialog = true
      this.editData = Object.assign({}, row)
    },
    updateSalary() {
      // 更新员工薪资
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          const index = this.tableData.findIndex((item) => item.id === this.editData.id)
          this.tableData.splice(index, 1, this.editData)
          this.showDialog = false
          this.$message.success('更新成功')
        } else {
          return false
        }
      })
    },
    handleSizeChange(val) {
      // 分页器每页显示条数变化
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      // 分页器当前页变化
      console.log(`当前页: ${val}`)
    },
  },
}
</script>

<style scoped>
.salary-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.header {
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}
.content {
  align-self: center;
}
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
