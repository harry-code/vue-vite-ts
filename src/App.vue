<template>
  <!-- <a-button type="primary"> Primary </a-button>
  <a-button>Default</a-button>
  <DatePicker /> -->
  <div id="app">
    <div class="content">
      <span>this is less</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/AjaxPromise.vue';

export default defineComponent({
  name: 'App',
  data() {},
  components: {
    HelloWorld,
  },
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
