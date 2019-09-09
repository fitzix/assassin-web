<template>
  <el-container>
    <el-header height="61px">
      <div class="asn-col-lg asn-nav">
        <a href="" class="asn-nav-logo">
          <img src="https://cdn-ossd.zipjpg.com/reg/bd6bde94290bc6fc0a5687afa982b543_2_2_art.png" alt="" />
        </a>
        <el-menu :default-active="activeIndex" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">应用</el-menu-item>
          <el-menu-item index="3">书籍</el-menu-item>
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
    <el-footer>Footer</el-footer>
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
