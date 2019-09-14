<template>
  <div class="asn-app-hot">
    <h3>热门应用</h3>
    <ul>
      <li v-for="item in data" :key="item.id">
        <a :href="`/apps/${item.id}`" class="item">
          <div class="item-icon">
            <img :src="item.icon" alt="" />
            <a href="http://baidu.com">图形设计</a>
          </div>
          <div class="item-info">
            <div class="item-info-desc">
              <h3 class="asn-text-overflow">{{ item.name }}</h3>
              <p class="asn-text-overflow">{{ item.description }}</p>
            </div>
            <div class="item-info-status">
              <i class="el-icon-s-data asn-status-icon">&nbsp;{{ item.hot | numberFormat }}</i>
              <i class="el-icon-time asn-status-icon">&nbsp;{{ item['update_at'] | dateFormat }}</i>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AsnHotApp',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
