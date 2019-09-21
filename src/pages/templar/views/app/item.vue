<template>
  <div class="asn-app-item">
    <el-button type="text" icon="el-icon-back" size="medium" @click="goBack">返回</el-button>
    <h3>基本信息</h3>
    <div class="info">
      <img :src="app.icon | imgPrefix" alt="icon" />
      <div class="info-desc">
        <div class="header">
          <h3>{{ app.name }}</h3>
          <div>
            <el-link type="danger" :href="app.id | appContentPrefix('web')" target="_blank">前往托管网站修改描述文章</el-link>
            <el-button type="primary" size="mini">修改基础信息</el-button>
          </div>
        </div>
        <p>
          <span>
            <i>类型: </i>
            <el-tag type="warning">{{ app.type | asnTranslate }}</el-tag>
          </span>
          <span>
            <i>是否发布: </i>
            <el-switch :value="app.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </span>
          <span>
            <i>分类: </i>
            <el-tag type="warning">{{ app.category | asnTranslate(categories) }}</el-tag>
          </span>
          <span class="tags">
            <i>标签: </i>
            <el-tag v-for="tag in app.tags" :key="tag.id">{{ tag.tagId | asnTranslate(tags) }}</el-tag>
          </span>
          <span>
            <i>浏览量: </i>
            <el-tag type="danger">{{ app.view }}</el-tag>
          </span>
          <span>
            <i>下载量: </i>
            <el-tag type="danger">{{ app.hot }}</el-tag>
          </span>
          <span>
            <i>最新版本: </i>
            <el-tag type="info">{{ app.versionAt | dateTimeFormat }}</el-tag>
          </span>
        </p>
        <blockquote>
          <p>
            {{ app.title }}
          </p>
        </blockquote>
      </div>
    </div>
    <div class="version">
      <h3>版本</h3>
      <el-button type="primary" size="mini">添加版本</el-button>

      <el-table :data="app.versions" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="name" label="版本号" />
        <el-table-column prop="size" label="版本号" />
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch :value="scope.status" active-color="#13ce66" inactive-color="#ff4949" />
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="更新时间" :formatter="tableDateTimeFormatter" />
        <el-table-column label="下载渠道">
          <template slot-scope="scope">
            <span v-for="d in scope.row.downloads" :key="d.id">
              <el-button type="text">{{ d.downloadId | asnTranslate(downloads) }}</el-button>
              <el-button type="text" icon="el-icon-document-copy" :class="`asn-copy-${d.id}`" @click="ttt(d.id, d.secret)">复制秘钥</el-button>
              <el-divider direction="vertical"></el-divider>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <el-form ref="form" :model="app" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="app.name"></el-input>
      </el-form-item>
      <el-form-item label="轮播图">
        <asn-upload :file-list="app.carousels" :on-success="uploadCarouselSuccess" :limit="5"></asn-upload>
      </el-form-item>
      <el-form-item label="是否发布">
        <el-switch v-model="app.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
import { GetApp } from 'src/api/app';
import { ASN_API } from 'src/const';
import AsnUpload from 'src/components/upload';
import Clipboard from 'clipboard';
import tableMix from 'src/utils/mixins/table';
import { AESDecrypt } from 'src/utils/common/encrypt';

export default {
  mixins: [tableMix],
  data() {
    return {
      app: {
        name: '',
        carousels: [],
      },
      disabled: false,
      uploadApi: ASN_API.uploadApi,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    search() {
      GetApp(this.$route.params.id).then(resp => {
        this.app = resp;
      });
    },
    onSubmit() {
      console.log('submit!');
    },
    uploadCarouselSuccess(response, file, fileList) {
      fileList[fileList.length - 1].url = response.data;
    },
    removeCarousel() {
      console.log(23333);
    },
    onError(err, file, fileList) {
      console.log(err, file, fileList);
      debugger;
    },
    ttt(id, ss) {
      let clipboard = new Clipboard(`.asn-copy-${id}`, {
        text() {
          return AESDecrypt(ss);
        },
      });
      clipboard.on('success', () => {
        this.$message.success('复制成功');
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on('error', () => {
        // 不支持复制
        this.$message.error('复制失败');
        // 释放内存
        clipboard.destroy();
      });
    },
  },
  computed: {
    token() {
      return { Authorization: `Bearer ${this.$store.getters.token}` };
    },
  },
  components: {
    AsnUpload,
  },
};
</script>
