<template>
  <el-container>
    <el-header>
      <div class="asn-nav">
        <a href="" class="asn-nav-logo">
          <img src="https://cdn-ossd.zipjpg.com/reg/bd6bde94290bc6fc0a5687afa982b543_2_2_art.png" alt="" />
        </a>
        <div class="asn-nav-bar">
          <a href="" class="asn-nav-item">首页</a>
          <a href="" class="asn-nav-item">应用</a>
          <a href="" class="asn-nav-item">书籍</a>
          <el-input v-model="searchKey" placeholder="请输入内容" size="medium" class="asn-nav-search">
            <i class="el-icon-search el-input__icon" slot="suffix" @click="x"></i>
          </el-input>
        </div>
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
      activeIndex: 1,
    };
  },
  methods: {
    x() {
      alert(2333);
    },
  },
};
</script>
