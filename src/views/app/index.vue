<template>
  <div class="asn-app-info">
    <div class="head">
      <div class="info">
        <img src="https://img.xclient.info/attachment/2017/02/7243e6ac-936d-c1f9-4d75-bbeed0c37672.png" alt="" />
        <h1>232332</h1>
        <ul>
          <li>2019-09-09 11:04:02</li>
          <li>
            <a href="">2323</a>
            <a href="">2323</a>
            <a href="">2323</a>
          </li>
          <li>
            <i class="el-icon-s-data">&nbsp;32332</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="content asn-col-lg">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="16" class="carousel">
          <el-carousel trigger="click" height="390px">
            <el-carousel-item>
              <img src="https://img.xclient.info/cdn/mw1024/006ehIt6ly1fuba6gub6dj30o00h7q3w" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="https://img.xclient.info/cdn/mw1024/006ehIt6ly1fuba6gub6dj30o00h7q3w" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="https://img.xclient.info/cdn/mw1024/006ehIt6ly1fuba6gub6dj30o00h7q3w" alt="" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="status">
            <p class="hot-name">热度</p>
            <p class="hot-number">3243</p>
            <a class="download" href="">下载</a>
            <a class="donate" href="">赞助</a>
            <p class="info-title">基本信息</p>
            <div class="info">
              <p><span>最新版本</span><span>1.3.6</span></p>
              <p><span>类别</span><span>去问问</span></p>
              <p><span>更新时间</span><span>2019-09-09</span></p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="30" class="content-desc">
        <el-col :xs="24" :sm="16">
          <div v-html="render" class="markdown-section"></div>
        </el-col>
        <el-col :xs="24" :sm="8"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'src/utils/common/http';
import { render } from 'src/utils/common/markdown';
export default {
  name: 'AsnAppInfo',
  data() {
    return {
      mdContent: '',
    };
  },
  computed: {
    render() {
      return render(this.mdContent);
    },
  },
  created() {
    axios.get('https://raw.githubusercontent.com/fitzix/fitzix.github.io/pages/source/_posts/2018-08-16-channel%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86.md').then(resp => {
      this.mdContent = resp;
    });
  },
};
</script>
