<template>
  <div class="login-continer">
    <div class="login-welcome">
      <div class="login-title">欢迎光临</div>
    </div>
    <div class="login-form">
      <div class="login-box">
        <div class="title">欢迎回来</div>
        <div class="dengdeng">————— 账号密码登录 —————</div>
        <el-form ref="LoginRef" :rules="loginRules" :model="loginForm" class="demo-ruleForm" :size="formSize" status-icon>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.trim="loginForm.password" show-password placeholder="请输入密码" :prefix-icon="Lock" />
          </el-form-item>
          <el-form-item>
            <el-button @click="handleLogin" color="#626aef" round :dark="isDark" style="width:100%">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import UserApi from '@/api/user'
// const store = useStore()
const router = useRouter()
const loginForm = reactive({
  userName: '',
  userPwd: ''
})
// 校验规则
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空'
    },
    { min: 5, message: '密码不能小于5位或者大于20位', trigger: 'blur' }
  ]
})
const LoginRef = ref(null)
const handleLogin = () => {
  LoginRef.value.validate(async (valid) => {
    if (!valid) return
    if (valid) {
      const res = await UserApi.login(loginForm)
      // const res = await store.dispatch('users/handleLogin', loginForm)
      console.log(res)
      if (res.token) {
        router.push('/')
        ElMessage({
          type: 'success',
          message: '登陆成功'
        })
      }
    }
  })
}
</script>

<style lang='scss' scoped>
.login-continer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .login-welcome {
    width: 67%;
    height: 100%;
    background-color: #6a68f3;
    .login-title {
      color: #fff;
      font-size: 48px;
      text-align: center;
      line-height: 100vh;
      font-weight: 700;
    }
  }
  .login-form {
    width: 33%;
    line-height: 50px;
    text-align: center;
    .login-box {
      width: 60%;
      margin: auto;
      .title {
        font-size: 30px;
        font-weight: 700;
      }
      .dengdeng {
        color: #ccc;
      }
    }
  }
}
</style>
