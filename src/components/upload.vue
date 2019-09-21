<template>
  <el-upload :action="uploadApi" :headers="token" list-type="picture-card" :file-list="fileList | imgPrefix" :on-success="uploadCarouselSuccess" :limit="limit">
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script>
import { ASN_API } from 'src/const';

export default {
  name: 'AsnUpload',
  props: {
    header: Object,
    fileList: Array,
    onSuccess: Function,
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
      fileList[fileList.length - 1].url = response.data;
      this.$emit('onSuccess', fileList);
    },
    removeCarousel(file, fileList) {
      this.$emit('remove', file, fileList);
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
