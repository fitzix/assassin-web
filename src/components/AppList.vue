<template>
  <el-row :gutter="5">
    <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4" v-for="o in 10" :key="o" class="asn-app-list">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://img.xclient.info/attachment/2019/07/3b220c11-f6eb-3312-cd32-39e96d76a830.png" class="asn-app-list_icon" alt="" />
        <div class="asn-app-list_status">
          <i class="el-icon-s-data">2323</i>
          <i class="el-icon-time">2019-08-08</i>
        </div>
        <p>挨打的无委屈翁且驱蚊器额热热无热沃尔沃二位沃尔沃二</p>
        <p>挨打的无委屈翁且驱蚊器额热热无热沃尔沃二位沃尔沃二</p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AppList',
};
</script>
