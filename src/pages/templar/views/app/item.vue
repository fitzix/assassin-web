<template>
  <div class="asn-app-item">
    <el-button type="text" icon="el-icon-back" size="medium" @click="goBack">返回</el-button>
    <h2>{{ app.name }}</h2>
  </div>
</template>

<script>
import { GetApp } from 'src/api/app';
export default {
  data() {
    return {
      app: {},
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
  },
  created() {
    this.search(this.$route.params.id);
  },
};
</script>
