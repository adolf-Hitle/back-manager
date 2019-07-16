<template>
  <div class="login">
    <div class="for-cantainer">
      <h2 class="login-title">用户登陆</h2>
      <!-- el表单 -->
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
          <el-button type="primary" class="my-btn" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入http接口
import { login } from "../api/http";

export default {
  name: "login",
  data() {
    return {
      //  表单元素绑定
      ruleForm: {
        //用户名
        username: "",
        //密码
        password: ""
      },
      // 验证规则
      rules: {
        username: [
          { required: true, message: "用户名字不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 获取饿了么ul的 form表单，饿了么ul提供验证方法
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // valid有值，说明验证通过
        if (valid) {
          //提交数据
          login({
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }).then(backData => {
            // console.log(backData);
            if(backData.data.meta.status==200){
              // 提示
          this.$message.success(backData.data.meta.msg);
              //跳转 
              this.$router.push('/index')

              // 保存token
              window.localStorage.setItem('token',backData.data.data.token)
            }else if(backData.data.meta.status==400){
          this.$message.error(backData.data.meta.msg);
            }
          });
        } else {
          //验证失败啦
          this.$message.error("登陆账号或密码错误～～～");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='less' scoped>
.login {
  height: 100%;
  background-color: #324152;
  // 开启弹性布局
  display: flex;
  //内容水平方向 对齐方式 center
  justify-content: center;
  // 内容竖直方向 对齐方式
  align-items: center;

  .for-cantainer {
    width: 580px;
    height: 437px;
    background-color: #f3f3f3;
    padding: 60px 40px;
    .my-btn {
      width: 100%;
      margin-top: 20px;
    }
  }
  .login-title {
    margin-bottom: 30px;
  }
}
</style>
