<template>
  <div class="asn-app-info">
    <div class="head">
      <div class="info">
        <img :src="app.icon | imgPrefix" alt />
        <h1>{{ app.name }}</h1>
        <ul>
          <li>{{ app.versionAt | dateTimeFormat }}</li>
          <li>
            <a href>2323</a>
            <a href>2323</a>
            <a href>2323</a>
          </li>
          <li>
            <i class="el-icon-view">&nbsp;{{ app.view }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="content asn-col-lg">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="16" class="carousel">
          <el-carousel trigger="click" height="390px">
            <el-carousel-item v-for="item in app.carousels" :key="item.id">
              <img :src="item.url | imgPrefix" alt />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="status">
            <p class="hot-name">热度</p>
            <p class="hot-number">{{ app.hot }}</p>
            <a class="download" href="#asn-history-version">下载</a>
            <a class="donate" href>赞助</a>
            <p class="info-title">基本信息</p>
            <div class="info">
              <p>
                <span>最新版本</span>
                <span>{{ latestVersion.name }}</span>
              </p>
              <p>
                <span>类别</span>
                <span>去问问</span>
              </p>
              <p>
                <span>更新时间</span>
                <span>{{ latestVersion.createdAt | dateFormat }}</span>
              </p>
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
            <tr v-for="item in app.versions" :key="item.id">
              <td>{{ item.name }}</td>
              <td>英文</td>
              <td>{{ item.createdAt | dateFormat }}</td>
              <td>37.8M</td>
              <td class="down-cell">
                <a class="download" href>百度云</a>
                <a class="download" href>Google Drive</a>
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
import { render } from 'src/utils/common/markdown';
import { GetApp } from 'src/api/app';
import { GetMarkdown } from 'src/api';
import { GetAppList } from 'src/api/app';

export default {
  name: 'AsnAppInfo',
  data() {
    return {
      app: {
        id: '',
        versions: [],
      },
      appDescription: '',
      hotData: [],
    };
  },
  methods: {
    getData() {
      GetApp(this.app.id).then(resp => {
        this.app = resp;
      });
      GetAppList({ type: 1 }).then(resp => {
        this.hotData = resp.info;
      });
    },
    getAppDesc() {
      GetMarkdown(this.app.id).then(resp => {
        this.appDescription = resp;
      });
    },
  },
  computed: {
    render() {
      return render(`> ${this.app.title}\n${this.appDescription}`);
    },
    latestVersion() {
      let version = { name: '', createdAt: '' };
      if (this.app.versions.length < 1) {
        return version;
      }
      return this.app.versions[0];
    },
  },
  components: {
    AsnHotApp,
  },
  created() {
    this.app.id = this.$route.params.id;
    this.getData();
    this.getAppDesc();
  },
};
</script>
