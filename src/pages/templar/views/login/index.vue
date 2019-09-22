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
    <el-form-item>
      <el-button type="primary" style="width: 100%; margin-top: 18px;">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'asn-admin-index',
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('app/login', this.form).then(() => {
        this.$router.push({ name: 'asn-home' });
      });
    },
  },
};
</script>
