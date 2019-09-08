<template>
  <el-row :gutter="5">
    <el-col :lg="responsiveLayout['lg']" :sm="responsiveLayout['sm']" :xs="responsiveLayout['xs']" v-for="item in data" :key="item.id" class="asn-app-list">
      <el-card :body-style="{ padding: '20px 10px' }">
        <img src="https://img.xclient.info/attachment/2019/07/3b220c11-f6eb-3312-cd32-39e96d76a830.png" class="asn-app-list_icon" alt />
        <div class="asn-app-list_status">
          <i class="el-icon-s-data">&nbsp;{{ item.hot | numberFormatter }}</i>
          <i class="el-icon-time">&nbsp;{{ item['update_at'] | dateFormat }}</i>
        </div>
        <p>Lungo 1.6.0 防止屏幕休眠sdsdsdsdssdsad</p>
        <p>Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求。Lungo是一款防止Mac屏幕进入休眠状态的软件，可以满足我们让mac电脑不进入休眠状态的需求</p>
        <!--        <el-badge value="new" style="position: absolute; top: 0; right: 0;"></el-badge>-->
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ASN_APP_LIST_RESPONSIVE_LAYOUT } from 'src/const/index';
export default {
  name: 'AsnAppList',
  props: {
    data: Array,
    layout: { type: String, required: true },
  },
  methods: {},
  computed: {
    responsiveLayout() {
      return ASN_APP_LIST_RESPONSIVE_LAYOUT[this.layout];
    },
  },
};
</script>
