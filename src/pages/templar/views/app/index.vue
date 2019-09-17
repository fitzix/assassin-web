<template>
  <div class="asn-apps">
    <el-form label-width="60px" inline class="asn-apps-search">
      <el-form-item label="关键字">
        <el-input v-model="searchQuery.key"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="searchQuery.type" placeholder="请选择类型">
          <el-option label="App" :value="0"></el-option>
          <el-option label="书籍" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-select v-model="searchQuery.order" placeholder="请选择排序类型">
          <el-option label="最新" value="new"></el-option>
          <el-option label="最热" value="hot"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="searchQuery.status" placeholder="请选择状态">
          <el-option label="已发布" :value="0"></el-option>
          <el-option label="未发布" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label=" ">
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="asn-apps-list">
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini">添加应用</el-button>
      <el-button type="danger" icon="el-icon-remove-outline" size="mini">批量删除</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column label="icon" width="80">
          <template #default="scope">
            <el-image style="width: 30px; height: 30px" :src="scope.row.icon | imgPrefix" fit="fill"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="name" label="名称" width="180" show-overflow-tooltip />
        <el-table-column prop="hot" label="下载量" width="80" />
        <el-table-column prop="view" label="浏览量" />
        <el-table-column prop="versionAt" label="更新时间" :formatter="tableDateFormatter" />
        <el-table-column label="状态" width="80">
          <template #default="scope">
            <el-switch :value="scope.row.status" active-color="#13ce66" inactive-color="#ff4949" />
          </template>
        </el-table-column>
      </el-table>
      <asn-page :search-query="searchQuery"></asn-page>
    </div>
  </div>
</template>

<script>
import AsnPage from 'src/components/page';
import { GetAppList } from 'src/api/app';
import { dateTimeFormat } from 'src/utils/common/date';
import pageMix from 'src/utils/mixins/page';
export default {
  mixins: [pageMix],
  data() {
    return {
      searchQuery: {
        key: '',
        type: 0,
        order: 'new',
        status: 0,
      },
    };
  },
  methods: {
    search() {
      GetAppList(this.searchQuery).then(resp => {
        this.searchQuery.total = resp.total;
        this.tableData = resp.info;
      });
    },
    tableDateFormatter(row, column, cellValue) {
      return dateTimeFormat(cellValue);
    },
  },
  components: {
    AsnPage,
  },
};
</script>
