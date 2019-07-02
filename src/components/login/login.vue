<template>
  <div class="loginBox">
    <h3>用户登录</h3>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="top"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginbtn" type="primary" @click="loginForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    loginForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$http.post("login", this.ruleForm).then(res => {
            let { data, meta } = res.data;
            if (meta.status === 200) {
              this.$message({
                type: "success",
                message: meta.msg
              });
              this.$router.push('/home')
            } else {
              this.$message.error(meta.msg);
              return false;
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.loginBox {
  padding: 40px;
  width: 580px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.loginbtn {
  width: 100%;
}
</style>
