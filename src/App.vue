<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {},
  components: {},
  setup: () => {},
});
</script>

<style lang="less">
#app {
  .content {
    font-size: 0.16rem; // 16px
  }
}
</style>
