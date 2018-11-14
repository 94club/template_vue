<template>
  <el-form class="login-form" ref="formInline" :model="formInline" label-width="80px" :rules="rules">
    <el-form-item label="用户名称">
      <el-input v-model="formInline.username"></el-input>
    </el-form-item>
    <el-form-item label="用户密码">
      <el-input type="password" @keyup.enter.native="submitForm('formInline')" v-model="formInline.password"></el-input>
    </el-form-item>
    <p>温馨提示：未注册过的账号，登录时将自动注册</p>
    <p>注册过的用户可凭账号密码登录</p>
    <el-button type="primary" @click.prevent="submitForm('formInline')">登录</el-button>
    <button @click.prevent="login">tokentest--登录</button>
    <button @click.prevent="getInfo">tokentest--用户信息</button>
    <button @click.prevent="logout">tokentest--登出</button>
  </el-form>
</template>

<script>
import urls from '../config/urls.js'
export default {
  data () {
    return {
      formInline: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.formInline.password = md5(md5('' + this.formInline.password).toUpperCase())
          this.formInline.username = this.formInline.username.trim()
          this.$axios.post(urls.login, this.formInline).then((res) => {
            this.$notify({
              title: '提示',
              message: '登录成功',
              type: 'success'
            })
            if (res.data.token) {
              localStorage.setItem('aliToken', res.data.token)
              this.$router.replace({path: '/main'})
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    login () {
      this.$axios.post('http://localhost:8001/api/login', this.formInline).then((res) => {
        if (res.data) {
          localStorage.setItem('aliToken', res.data)
        }
      })
    },
    logout () {
      this.$axios.post('http://localhost:8001/user/logout').then((res) => {
        localStorage.removeItem('aliToken')
      })
    },
    getInfo () {
      this.$axios.get('http://localhost:8001/user/info').then((res) => {
        console.log(res.data)
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
