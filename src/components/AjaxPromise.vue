<template>
  <slot></slot>
</template>

<script lang="ts">
import axios from 'axios';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'AjaxPromise',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
