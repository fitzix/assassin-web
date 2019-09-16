<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="defaultActive">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/apps">应用</el-menu-item>
        <el-menu-item index="/books">书籍</el-menu-item>
        <el-menu-item index="/articles">文章</el-menu-item>
        <el-menu-item index="/community">社区</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main> </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'asn-admin-layout',
  data() {
    return {
      defaultActive: '/',
    };
  },
};
</script>

<style></style>
