export default {
  data() {
    return {
      tableData: [],
      searchQuery: {
        pageSize: 20,
        pageNum: 1,
      },
      total: 0,
    };
  },
  methods: {
    search() {},
    pageChange(val) {
      this.searchQuery.pageSize = val;
      this.search();
    },
    currentChange(val) {
      this.searchQuery.pageNum = val;
      this.search();
    },
  },
  created() {
    this.search();
  },
};
