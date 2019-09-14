<template>
  <el-container>
    <el-header height="61px">
      <div class="asn-col-lg asn-nav">
        <a href="" class="asn-nav-logo">
          <img src="~src/assets/img/logo.png" alt="" />
        </a>
        <el-menu :default-active="activeIndex" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">应用</el-menu-item>
          <el-menu-item index="3">书籍</el-menu-item>
          <el-menu-item index="4">文章</el-menu-item>
          <el-menu-item index="5">社区</el-menu-item>
          <el-menu-item>
            <el-input v-model="searchKey" placeholder="请输入内容" size="medium" class="asn-nav-search">
              <i class="el-icon-search el-input__icon" slot="suffix" @click="x"></i>
            </el-input>
          </el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <footer class="footer">
      <el-row>
        <el-col class="notice">
          <a class="logo" href="">
            <img src="~src/assets/img/logo2.png" alt="" />
          </a>
          <p class="info">
            本站并不以盈利为目的，所有软件均来源于网络，仅用于分享学习，并为大家带来更好的下载体验。如本站的内容对您的权利造成了影响，请发邮件至asins.xyz@gmail.com,我们会在第一时间将涉及版权的内容进行删除。
          </p>
          <p class="copyright">
            <span>Copyright © 2019 </span>
            <a href="">Assassin</a>
            <span>. All rights reserved.</span>
          </p>
        </el-col>
        <!--        <el-col :sm="6" :xs="24"></el-col>-->
        <!--        <el-col :sm="6" :xs="24"></el-col>-->
      </el-row>
    </footer>
  </el-container>
</template>

<script>
export default {
  name: 'AsnLayout',
  componentName: 'AsnLayout',
  data() {
    return {
      searchKey: '',
      activeIndex: '1',
    };
  },
  methods: {
    x() {
      alert(2333);
    },
  },
};
</script>
