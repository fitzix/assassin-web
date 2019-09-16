<template>
  <el-row class="asn-col-lg">
    <el-col :xs="12" :sm="16" :lg="18">
      <asn-app-list :data="data" layout="home" />
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6">
      <el-row>
        <asn-hot-app :data="hotData" />
      </el-row>
      <el-row></el-row>
    </el-col>
  </el-row>
</template>

<script>
import AsnAppList from 'src/components/AppList';
import AsnHotApp from 'src/components/app/hot';
import { GetAppList } from 'src/api/app';

export default {
  name: 'index',
  data() {
    return {
      data: [],
      hotData: [],
    };
  },
  methods: {
    getList() {
      GetAppList().then(resp => {
        this.data = resp.info;
      });
    },
    getHotData() {
      GetAppList({ type: 1 }).then(resp => {
        this.hotData = resp.info;
      });
    },
  },
  components: {
    AsnAppList,
    AsnHotApp,
  },
  created() {
    this.getList();
    this.getHotData();
  },
};
</script>
