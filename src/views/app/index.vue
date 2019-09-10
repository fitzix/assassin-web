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
            <a class="download" href="#asn-history-version">下载</a>
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
        <el-col :xs="24" :sm="8">
          <asn-hot-app :data="hotData" class="hot" />
        </el-col>
      </el-row>
      <div class="content-version" id="asn-history-version">
        <p>历史版本</p>
        <table>
          <thead>
            <tr>
              <th>版本号</th>
              <th>语言</th>
              <th>更新时间</th>
              <th>文件大小</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3.3.4</td>
              <td>英文</td>
              <td>2019-09-10</td>
              <td>37.8M</td>
              <td class="down-cell">
                <a class="download" href="">百度云</a>
                <a class="download" href="">Google Drive</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AsnHotApp from 'src/components/app/hot';
import axios from 'src/utils/common/http';
import { render } from 'src/utils/common/markdown';

export default {
  name: 'AsnAppInfo',
  data() {
    return {
      mdContent: '',
      hotData: [
        {
          id: 10,
          name: 'Sketch 57.1 轻量易用的矢量设计工具',
          hot: 1212121,
          update_at: '2017-12-08T00:00:00.00Z',
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
        {
          id: 11,
          hot: 1212121,
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
        {
          id: 12,
          hot: 1212,
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
        {
          id: 13,
          hot: 12122,
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
        {
          id: 14,
          hot: 12,
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
        {
          id: 15,
          hot: 1212,
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
      ],
    };
  },
  computed: {
    render() {
      return render(this.mdContent);
    },
  },
  components: {
    AsnHotApp,
  },
  created() {
    axios.get('https://raw.githubusercontent.com/segmentio/kafka-go/master/README.md').then(resp => {
      this.mdContent = resp;
    });
  },
};
</script>
