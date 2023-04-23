<template>
  <div class="training-page">
    <div class="header">
      <el-button type="primary" @click="showDialog = true">添加培训</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="培训名称" width="180"></el-table-column>
        <el-table-column prop="time" label="培训时间" width="180"></el-table-column>
        <el-table-column prop="department" label="参加部门" width="180"></el-table-column>
        <el-table-column prop="teacher" label="讲师" width="180"></el-table-column>
        <el-table-column prop="status" label="状态" width="180">
          <template slot-scope="{ row }">
            <el-tag :type="row.status === '未培训' ? 'info' : 'success'">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="{ row }">
            <el-button type="danger" @click="deleteRow(row)">删除</el-button>
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
    <el-dialog title="添加培训" :visible.sync="showDialog">
      <el-form :model="newData" :rules="rules" ref="newForm">
        <el-form-item label="培训名称" prop="name">
          <el-input v-model.trim="newData.name"></el-input>
        </el-form-item>
        <el-form-item label="培训时间" prop="time">
          <el-date-picker
            v-model.trim="newData.time"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择培训时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="参加部门" prop="department">
          <el-select v-model.trim="newData.department" placeholder="请选择参加部门">
            <el-option label="人力资源部" value="人力资源部"></el-option>
            <el-option label="财务部" value="财务部"></el-option>
            <el-option label="市场部" value="市场部"></el-option>
            <el-option label="研发部" value="研发部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="讲师" prop="teacher">
          <el-input v-model.trim="newData.teacher"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="addNewData">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PerTrain',
  data() {
    return {
      showDialog: false,
      tableData: [
        {
          name: '产品设计培训',
          time: '2022-01-25 10:00:00',
          department: '研发部',
          teacher: '张老师',
          status: '未培训',
        },
        {
          name: '财务报表培训',
          time: '2022-01-20 14:00:00',
          department: '财务部',
          teacher: '李老师',
          status: '已培训',
        },
        {
          name: '营销策略培训',
          time: '2022-01-22 09:00:00',
          department: '市场部',
          teacher: '王老师',
          status: '未培训',
        },
        {
          name: '团队建设培训',
          time: '2022-01-21 15:00:00',
          department: '人力资源部',
          teacher: '赵老师',
          status: '已培训',
        },
      ],
      newData: {
        name: '',
        time: '',
        department: '',
        teacher: '',
      },
      rules: {
        name: [{ required: true, message: '请输入培训名称', trigger: 'blur' }],
        time: [{ required: true, message: '请选择培训时间', trigger: 'change' }],
        department: [{ required: true, message: '请选择参加部门', trigger: 'change' }],
        teacher: [{ required: true, message: '请输入讲师', trigger: 'blur' }],
      },
      currentPage: 1,
    }
  },
  mounted() {
    this.updateStatus()
  },
  methods: {
    updateStatus() {
      // 根据当前时间更新培训状态
      const now = new Date().getTime()
      this.tableData.forEach((item) => {
        const time = new Date(item.time).getTime()
        if (time < now) {
          item.status = '已培训'
        } else {
          item.status = '未培训'
        }
      })
    },
    addNewData() {
      // 添加新的培训记录
      this.$refs.newForm.validate((valid) => {
        if (valid) {
          this.tableData.push(this.newData)
          this.showDialog = false
          this.newData = {
            name: '',
            time: '',
            department: '',
            teacher: '',
          }
          this.$message.success('添加成功')
          this.updateStatus()
        } else {
          return false
        }
      })
    },
    deleteRow(row) {
      // 删除培训记录
      this.$confirm('确定删除该培训记录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          const index = this.tableData.indexOf(row)
          this.tableData.splice(index, 1)
          this.$message.success('删除成功')
        })
        .catch(() => {})
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
.training-page {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  align-items: flex-end;
}

.content {
  align-self: center;
}
</style>
