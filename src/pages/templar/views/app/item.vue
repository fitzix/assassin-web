<template>
  <div class="asn-app-item">
    <el-button type="text" icon="el-icon-back" size="medium" @click="goBack">返回</el-button>
    <el-form ref="form" :model="app" label-width="80px" disabled>
      <el-form-item label="名称">
        <el-input v-model="app.name"></el-input>
      </el-form-item>
      <el-form-item label="轮播图">
        <el-upload :action="uploadApi" list-type="picture-card" :file-list="app.carousels">
          <i class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" v-if="file.status !== 'uploading'" :src="file.url | imgPrefix" alt="" />
            <a class="el-upload-list__item-name"> <i class="el-icon-document"></i>{{ file.name }} </a>
            <label class="el-upload-list__item-status-label">
              <i :class="{ 'el-icon-upload-success': true, 'el-icon-circle-check': false, 'el-icon-check': true }"></i>
            </label>
            <i class="el-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
            <i class="el-icon-close-tip" v-if="!disabled">删除</i>
            <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
            <el-progress v-if="file.status === 'uploading'" type="circle" :stroke-width="6"> </el-progress>
            <span class="el-upload-list__item-actions">
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="$emit('remove', file)">
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
    search(id) {
      GetApp(id).then(resp => {
        this.app = resp;
      });
    },
    onSubmit() {
      console.log('submit!');
    },
  },
  created() {
    this.search(this.$route.params.id);
  },
};
</script>
