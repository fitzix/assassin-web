<template>
  <el-row>
    <el-col :xs="12" :sm="16" :lg="18">
      <asn-app-list :data="data" layout="home"></asn-app-list>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6"></el-col>
  </el-row>
</template>

<script>
import AsnAppList from 'src/components/AppList';
export default {
  name: 'index',
  data() {
    return {
      data: [{ id: 10, hot: 1212121, update_at: '2017-12-08T00:00:00.00Z' }, { id: 11, hot: 1212121 }, { id: 12, hot: 1212121 }, { id: 13, hot: 1212121 }, { id: 14, hot: 1212121 }, { id: 15, hot: 1212121 }],
    };
  },
  components: {
    AsnAppList,
  },
};
</script>
