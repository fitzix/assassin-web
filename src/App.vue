<template>
  <div id="app">
    <el-container>
      <el-header class="asn-nav">
        <el-menu default-active="1" mode="horizontal">
          <li role="menuitem" class="el-menu-item asn-nav-logo">
            <img src="https://cdn-ossd.zipjpg.com/reg/bd6bde94290bc6fc0a5687afa982b543_2_2_art.png" alt="" />
          </li>

          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">处理中心</el-menu-item>
          <el-menu-item index="3">处理中心</el-menu-item>
          <el-menu-item index="4">消息中心</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <router-view />
  </div>
</template>
