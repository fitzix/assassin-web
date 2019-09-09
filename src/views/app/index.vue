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
      <el-row :gutter="35">
        <el-col :span="16" class="carousel">
          <el-carousel trigger="click" height="430px">
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
        <el-col :span="8" class="status">
          <p class="hot-name">热度</p>
          <p class="hot-number">3243</p>
          <a class="download" href="">下载</a>
          <a class="donate" href="">赞助</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsnAppInfo',
};
</script>
