<template>
  <el-upload :action="uploadApi" :headers="token" list-type="picture-card" :file-list="fileList | imgPrefix" :on-success="uploadCarouselSuccess" :on-remove="removeCarousel" :on-exceed="onExceed" :limit="limit">
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script>
import { ASN_API } from 'src/const';

export default {
  name: 'AsnUpload',
  props: {
    header: {
      type: Object,
      default() {
        return this.token;
      },
    },
    fileList: Array,
    limit: Number,
  },
  data() {
    return {
      uploadApi: ASN_API.uploadApi,
    };
  },
  methods: {
    uploadCarouselSuccess(response, file, fileList) {
      if (response.code !== 0) {
        fileList.pop();
        return;
      }
      this.$emit('on-success', { url: response.data });
    },
    removeCarousel(file) {
      let index = this.fileList.findIndex(el => {
        return file.url.includes(el.url);
      });
      this.$emit('on-remove', index);
    },
    onExceed() {
      this.$message.error(`最多上传${this.limit}张图片`);
    },
  },
  computed: {
    token() {
      return { Authorization: `Bearer ${this.$store.getters.token}` };
    },
  },
};
</script>

<style></style>
