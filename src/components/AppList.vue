<template>
  <el-row :gutter="5">
    <el-col :lg="responsiveLayout['lg']" :sm="responsiveLayout['sm']" :xs="responsiveLayout['xs']" v-for="item in data" :key="item.id" class="asn-app-list">
      <el-card :body-style="{ padding: '20px 10px 10px' }">
        <router-link :to="{ name: 'asn-app-info', params: { id: item.id } }">
          <div class="asn-app-list_icon">
            <img :src="item.icon | imgPrefix" alt />
          </div>
          <div class="asn-app-list_status">
            <i class="el-icon-s-data">&nbsp;{{ item.hot | numberFormat }}</i>
            <i class="el-icon-time">&nbsp;{{ item['update_at'] | dateFormat }}</i>
          </div>
          <p class="asn-app-name asn-text-overflow">{{ item.name }}</p>
          <p class="asn-app-desc asn-text-overflow">{{ item.title }}</p>
        </router-link>
        <!--        <el-badge value="new" style="position: absolute; top: 0; right: 0;"></el-badge>-->
        <a href="https://baidu.com" class="asn-category">系统工具</a>
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
  methods: {
    // x(id) {
    //   console.log(id)
    //   this.$router.push({ name: 'asn-app-info', params: { id: id } })
    // },
  },
  computed: {
    responsiveLayout() {
      return ASN_APP_LIST_RESPONSIVE_LAYOUT[this.layout];
    },
  },
};
</script>
