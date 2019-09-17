<template>
  <el-container class="asn-body">
    <el-header height="auto" class="asn-header">
      <el-menu :default-active="defaultActive" mode="horizontal" router>
        <li role="menuitem" class="el-menu-item assass">
          <img src="~src/assets/img/logo.png" alt="" />
        </li>
        <el-menu-item index="/">
          <template slot="title">
            <i class="el-icon-present"></i>
            <span>App管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/apps">应用</el-menu-item>
        <el-menu-item index="/books">书籍</el-menu-item>
        <el-menu-item index="/articles">文章</el-menu-item>
        <el-menu-item index="/community">社区</el-menu-item>
        <li role="menuitem" class="el-menu-item">
          <i class="el-icon-user"></i>
          <span>asins.xyz</span>
        </li>
      </el-menu>
    </el-header>
    <!-- <el-breadcrumb separator="/" class="asn-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-main class="asn-content">
      <router-view />
    </el-main>
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
