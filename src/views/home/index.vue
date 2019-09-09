<template>
  <el-row class="asn-col-lg asn-home">
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
export default {
  name: 'index',
  data() {
    return {
      data: [{ id: 10, hot: 1212121, update_at: '2017-12-08T00:00:00.00Z' }, { id: 11, hot: 1212121 }, { id: 12, hot: 1212 }, { id: 13, hot: 12122 }, { id: 14, hot: 12 }, { id: 15, hot: 1212 }],
      hotData: [
        {
          id: 10,
          name: '23232323',
          hot: 1212121,
          update_at: '2017-12-08T00:00:00.00Z',
          description: 'Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求',
        },
        { id: 11, hot: 1212121 },
        { id: 12, hot: 1212 },
        { id: 13, hot: 12122 },
        { id: 14, hot: 12 },
        { id: 15, hot: 1212 },
      ],
    };
  },
  components: {
    AsnAppList,
    AsnHotApp,
  },
};
</script>
