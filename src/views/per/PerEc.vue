<template>
  <div class="reward-punish">
    <div>
      <el-button type="primary" @click="showDialog = true" style="float: right"
        >添加新奖惩</el-button
      >
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="员工姓名" width="180"></el-table-column>
      <el-table-column prop="id" label="工号" width="180"></el-table-column>
      <el-table-column prop="type" label="奖惩类型" width="180"></el-table-column>
      <el-table-column prop="reason" label="奖惩原因" width="180"></el-table-column>
      <el-table-column prop="amount" label="奖惩金额" width="180"></el-table-column>
    </el-table>
    <el-dialog title="添加新奖惩" :visible.sync="showDialog">
      <el-form :model="newData" :rules="rules" ref="newForm">
        <el-form-item label="员工姓名" prop="name">
          <el-input v-model.trim="newData.name"></el-input>
        </el-form-item>
        <el-form-item label="工号" prop="id">
          <el-input v-model.trim="newData.id"></el-input>
        </el-form-item>
        <el-form-item label="奖惩类型" prop="type">
          <el-select v-model.trim="newData.type">
            <el-option label="奖励" value="奖励"></el-option>
            <el-option label="处罚" value="处罚"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="奖惩原因" prop="reason">
          <el-input v-model.trim="newData.reason"></el-input>
        </el-form-item>
        <el-form-item label="奖惩金额" prop="amount">
          <el-input v-model.trim.number="newData.amount"></el-input>
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
  name: 'RewardPunish',
  data() {
    return {
      showDialog: false,
      tableData: [
        {
          name: '张三',
          id: '1001',
          type: '奖励',
          reason: '拾金不昧',
          amount: 200,
        },
        {
          name: '李四',
          id: '1002',
          type: '处罚',
          reason: '迟到早退',
          amount: -50,
        },
        {
          name: '王五',
          id: '1003',
          type: '奖励',
          reason: '提出创新方案',
          amount: 500,
        },
        {
          name: '赵六',
          id: '1004',
          type: '处罚',
          reason: '擅离岗位',
          amount: -100,
        },
        {
          name: '孙七',
          id: '1005',
          type: '奖励',
          reason: '得到客户表扬',
          amount: 300,
        },
        {
          name: '周八',
          id: '1006',
          type: '处罚',
          reason: '滥用职权',
          amount: -200,
        },
        {
          name: '吴九',
          id: '1007',
          type: '奖励',
          reason: '发现隐患防止事故',
          amount: 400,
        },
        {
          name: '郑十',
          id: '1008',
          type: '处罚',
          reason: '破坏公司财物',
          amount: -150,
        },
      ],
      newData: {
        name: '',
        id: '',
        type: '',
        reason: '',
        amount: 0,
      },
      rules: {
        name: [{ required: true, message: '请输入员工姓名', trigger: 'blur' }],
        id: [{ required: true, message: '请输入工号', trigger: 'blur' }],
        type: [{ required: true, message: '请选择奖惩类型', trigger: 'change' }],
        reason: [{ required: true, message: '请输入奖惩原因', trigger: 'blur' }],
        amount: [{ required: true, message: '请输入奖惩金额', trigger: 'blur' }],
      },
    }
  },
  methods: {
    addNewData() {
      this.$refs.newForm.validate((valid) => {
        if (valid) {
          this.tableData.push(this.newData)
          this.showDialog = false
          this.newData = {
            name: '',
            id: '',
            type: '',
            reason: '',
            amount: 0,
          }
          this.$message.success('添加成功')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style scoped>
.reward-punish {
  margin-top: 32px;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
</style>
