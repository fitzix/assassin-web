import { dateTimeFormat } from '../common/date';

export default {
  data() {
    return {
      tableData: [],
      searchQuery: {},
    };
  },
  methods: {
    search() {},
    tableDateTimeFormatter(row, column, cellValue) {
      return dateTimeFormat(cellValue);
    },
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
    categories() {
      return this.$store.getters.categories;
    },
    downloads() {
      return this.$store.getters.downloads;
    },
  },
  created() {
    this.search();
  },
};
