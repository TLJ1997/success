<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- form提交表单 -->
      <el-form
        :model="loginForm"
        :rules="loginFormRules"
        ref="LoginFormRef"
        label-width="0px"
        class="login_form"
      >
      <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 底部按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetLoginForm('LoginFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个数字", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
    //   登录
      async login(){
          const {data : res} = await this.$http.post('login',this.loginForm);
          console.log(res)
          if(res.meta.status !== 200){
            this.$message.error('登录失败'+ res.meta.msg)
          }
          window.sessionStorage.setItem('token',res.data.token)
          this.$router.push('/home')
          this.$message.success('登录成功')
      },
    //   重置
      resetLoginForm(LoginFormRef){
          console.log(123)
          this.$refs[LoginFormRef].resetFields()
      }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.demo-ruleForm {
  width: 90%;
}
</style>
