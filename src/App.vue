<template>
  <a-button type="primary"> Primary </a-button>
  <a-button>Default</a-button>
  <DatePicker />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
