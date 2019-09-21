import table from './table';

export default {
  mixins: [table],
  data() {
    return {
      searchQuery: {
        pageSize: 50,
        pageNum: 1,
      },
      total: 0,
    };
  },
  methods: {
    pageChange(val) {
      this.searchQuery.pageSize = val;
      this.search();
    },
    currentChange(val) {
      this.searchQuery.pageNum = val;
      this.search();
    },
  },
};
