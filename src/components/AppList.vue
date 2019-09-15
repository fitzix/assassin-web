<template>
  <el-row :gutter="5" v-if="data.length > 0">
    <el-col :lg="responsiveLayout['lg']" :sm="responsiveLayout['sm']" :xs="responsiveLayout['xs']" v-for="item in data" :key="item.id" class="asn-app-list">
      <el-card :body-style="{ padding: '20px 10px 10px' }">
        <router-link :to="{ name: item.type ? 'asn-book-info' : 'asn-app-info', params: { id: item.id } }">
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
        <!--        <router-link></router-link>-->
        <a href="/apps" class="asn-category">{{ item.type | asnTranslate }}</a>
        <a href="https://baidu.com" class="asn-category">{{ item.category | asnTranslate(categories) }}</a>
      </el-card>
    </el-col>
  </el-row>
  <h2 v-else style="text-align: center;">未找到相关内容</h2>
</template>

<script>
import { ASN_APP_LIST_RESPONSIVE_LAYOUT } from 'src/const/index';

export default {
  name: 'AsnAppList',
  props: {
    data: Array,
    layout: { type: String, required: true },
  },
  computed: {
    responsiveLayout() {
      return ASN_APP_LIST_RESPONSIVE_LAYOUT[this.layout];
    },
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
