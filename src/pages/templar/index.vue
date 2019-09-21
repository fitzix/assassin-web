<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('app/setTags');
    this.$store.dispatch('app/setCategory');
    this.$store.dispatch('app/setDownloads');
  },
};
</script>
