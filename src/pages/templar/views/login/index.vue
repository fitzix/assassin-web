<template>
  <el-form ref="form" :model="form" :rules="rules" class="asn-login">
    <el-form-item class="logo">
      <img src="~src/assets/img/logo.png" alt="" />
    </el-form-item>
    <el-form-item label="用户名" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="" prop="remember">
      <el-checkbox v-model="form.remember">记住密码</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 100%;" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { SHA1 } from 'src/utils/common/encrypt';
export default {
  name: 'asn-admin-index',
  data() {
    return {
      form: {
        name: '',
        password: '',
        remember: true,
      },
      rules: {
        name: [{ required: true, type: 'email', message: '用户名必须是邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          let { name, password } = this.form;
          if (password.length !== 40) {
            password = SHA1(password);
          }
          this.$store.dispatch('app/login', { name, password }).then(() => {
            this.$router.push({ name: 'asn-home' });
          });
        }
      });
    },
  },
  created() {
    let formStored = this.$store.getters.user;
    if (formStored) {
      this.form = formStored;
    }
  },
};
</script>
