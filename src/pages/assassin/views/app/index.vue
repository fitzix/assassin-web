<template>
  <div class="asn-col-lg">
    <asn-app-list :data="data" layout="app-index"></asn-app-list>
  </div>
</template>

<script>
import AsnAppList from 'src/components/AppList';
import { GetAppList } from 'src/api/app';

export default {
  name: 'AsnAppIndex',
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getData(key = '') {
      GetAppList({ key }).then(resp => {
        this.data = resp.info;
      });
    },
  },
  components: {
    AsnAppList,
  },
  created() {
    this.getData(this.$route.query.key);
  },
};
</script>

<style scoped></style>
