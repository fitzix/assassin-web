<template>
  <div class="asn-app-item">
    <el-button type="text" icon="el-icon-back" size="medium" @click="goBack">返回</el-button>
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

export default {
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
    search(id) {
      GetApp(id).then(resp => {
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
  },
  computed: {
    token() {
      return { Authorization: `Bearer ${this.$store.getters.token}` };
    },
    tags() {
      return this.$store.getters.tags;
    },
    categories() {
      return this.$store.getters.categories;
    },
    downloads() {
      return this.$store.getters.downloads;
    },
  },
  components: {
    AsnUpload,
  },
  created() {
    this.search(this.$route.params.id);
  },
};
</script>
