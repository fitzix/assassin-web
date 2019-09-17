<template>
  <el-pagination class="asn-pagination" :page-size="searchQuery.pageSize" :current-page="searchQuery.pageNum" :total="total" @size-change="sizeChange" :current-change="currentChange"></el-pagination>
</template>

<script>
export default {
  name: 'AsnPage',
  props: {
    searchQuery: {
      required: true,
      type: Object,
      default: () => ({
        pageSize: 20,
        pageNum: 1,
      }),
    },
    total: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  methods: {
    sizeChange(val) {
      this.searchQuery.pageSize = val;
      this.this.$$emit('size-change', val);
    },
    currentChange(val) {
      this.searchQuery.pageNum = val;
      this.this.$$emit('current-page', val);
    },
  },
};
</script>
