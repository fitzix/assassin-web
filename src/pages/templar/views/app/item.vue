<template>
  <div class="asn-app-item">
    <el-button type="text" icon="el-icon-back" size="medium" @click="goBack">返回</el-button>
    <el-form ref="form" :model="app" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="app.name"></el-input>
      </el-form-item>
      <el-form-item label="轮播图">
        <el-upload :action="uploadApi" :headers="token" list-type="picture-card" :file-list="app.carousels" :on-success="uploadCarouselSuccess">
          <i class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" v-if="file.status !== 'uploading'" :src="file.url | imgPrefix" alt="" />
            <a class="el-upload-list__item-name"> <i class="el-icon-document"></i>{{ file.name }} </a>
            <label class="el-upload-list__item-status-label">
              <i :class="{ 'el-icon-upload-success': true, 'el-icon-circle-check': false, 'el-icon-check': true }"></i>
            </label>
            <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
            <el-progress v-if="file.status === 'uploading'" type="circle" :stroke-width="6" :percentage="parsePercentage(file.percentage)"></el-progress>
            <span class="el-upload-list__item-actions">
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="removeCarousel">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <h3>{{ app.name }}</h3>
  </div>
</template>

<script>
import { GetApp } from 'src/api/app';
import { ASN_API } from 'src/const';
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
  },
  computed: {
    token() {
      return { Authorization: `Bearer ${this.$store.getters.token}` };
    },
  },
  created() {
    this.search(this.$route.params.id);
  },
};
</script>
