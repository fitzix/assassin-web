<template>
  <el-row :gutter="20">
    <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4" v-for="o in 10" :key="o" class="asn-app-list">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" alt="" />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--          <time class="time">{{ currentDate }}</time>-->
            <!--          <el-button type="text" class="button">操作按钮</el-button>-->
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AppList',
};
</script>
