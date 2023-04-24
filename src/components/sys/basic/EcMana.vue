<template>
  <div class="container">
    <div class="title">
      <h1>奖惩规则</h1>
    </div>
    <div class="content">
      <p>本公司为了激励员工的工作积极性和创造力，规定了以下的奖惩制度，希望大家遵守并积极参与。</p>
      <h2>奖励</h2>
      <ul>
        <li>对于工作业绩优秀、贡献突出的员工，公司将给予表彰、奖金、晋升等形式的奖励。</li>
        <li>
          对于工作态度积极、团队合作良好、创新能力强的员工，公司将给予嘉奖、培训、出差等形式的奖励。
        </li>
        <li>
          对于工作勤奋、敬业爱岗、忠诚诚信的员工，公司将给予荣誉证书、年终奖、福利等形式的奖励。
        </li>
      </ul>
      <h2>惩罚</h2>
      <ul>
        <li>
          对于工作业绩不达标、负面影响大的员工，公司将给予批评教育、降级调岗、罚款等形式的惩罚。
        </li>
        <li>
          对于工作态度消极、团队合作差、创新能力低的员工，公司将给予警告、停职反省、辞退等形式的惩罚。
        </li>
        <li>
          对于工作懒散、迟到早退、违反规章制度的员工，公司将给予通报批评、扣发工资、开除等形式的惩罚。
        </li>
      </ul>
      <p>
        本公司的奖惩制度旨在公平公正地评价和激励每一位员工，希望大家能够认真遵守，并不断提高自己的能力和素质，为公司的发展做出贡献。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcMana',
  data() {
    return {}
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-top: 20px;
}
.content {
  margin-top: 20px;
  width: 80%;
}
</style>
