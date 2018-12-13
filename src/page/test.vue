<template>
  <div>
    <top-head :goBck="true" :pageTitle="'我是 test'">
      <div slot="leftInfo">
        <div v-if="userInfo"><span>&nbsp;&nbsp;{{userInfo.userName}}</span></div>
        <div class="log-reg" v-else><span @click="goLogin">登录/注册</span></div>
      </div>
    </top-head>
    <div class="test pt44">
      <button @click="toast">调用toast</button>
      <button @click="alert">调用alert</button>
      <button @click="goPage1">goPage1</button>
      <button @click="goPage2">goPage2</button>
      <button @click="goPage3">goPage3</button>
    </div>
  </div>
</template>

<script>
import TopHead from '../components/topHead'
export default {
  data () {
    return {
    }
  },
  components: {
    TopHead
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    toast () {
      this.$toast({msg: '中月，要努力学习'})
    },
    alert () {
      this.$alert({
        title: '提示',
        msg: '努力学习', // 弹出框提示信息
        visible: true,
        closeShow: true,
        type: 'info',
        onConfirm: () => {
          console.log('success')
        }, // 确认回调 非必须
        onCancel: false // 取消回到 非必须
      })
    },
    goPage1 () {
      this.$router.push({path: '/page1'})
    },
    goPage2 () {
      this.$router.push({path: '/page2'})
    },
    goPage3 () {
      this.$router.push({path: '/page3'})
    },
    goLogin () {}
  }
}
</script>
<style lang="scss">
@import '../style/px2rem.scss';
.login-form{
  width: 400px;
  margin: 120px auto;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  background: #d9eaed;
}
p {
  font-size: 14px;
  line-height: 30px;
}
button {
  width: 100%;
  margin-top: px2rem(20);
}
</style>
