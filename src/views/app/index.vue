<template>
  <div class="asn-app-info">
    <div class="head">
<!--      <h1>23223</h1>-->
      <span>232332</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsnAppInfo',
};
</script>

<style lang="scss" scoped>
.asn-app-info {
  height: 2000px;

  .head {
    position: relative;
    height: 420px;
    background: url('https://img.xclient.info/img/cat_img/media.jpg') no-repeat fixed;
  }

  .head:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    content: '';
    opacity: 0.6;
  }
}
</style>
