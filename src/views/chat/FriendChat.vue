<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <usertext></usertext>
    </div>
  </div>
</template>

<script>
import card from '../../components/chat/card.vue'
import list from '../../components/chat/list.vue'
import message from '../../components/chat/message.vue'
import usertext from '../../components/chat/usertext.vue'

export default {
  name: 'FriendChat',
  data() {
    return {}
  },
  mounted: function () {
    this.$store.dispatch('initData')
  },
  components: {
    card,
    list,
    message,
    usertext,
  },
}
</script>

<style scoped>
#app {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
}
#app .sidebar,
#app .main {
  height: 100%;
}
#app .sidebar {
  float: left;
  color: #f4f4f4;
  background-color: #2e3238;
  width: 200px;
}
#app .main {
  position: relative;
  overflow: hidden;
  background-color: #eee;
}
</style>
