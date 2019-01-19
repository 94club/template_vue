<template>
  <div>
    <button @click="toast">调用toast</button>
    <button @click="alert">调用alert</button>
    <button @click="alert">调用alert</button>
    <button @click="alert">调用alert</button>
    <button @click="alert">调用alert</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  }
}
</script>
<style>
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
}
</style>
