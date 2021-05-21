<template>
  <Result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <Button type="primary"> 返 回 </Button>
    </template>
  </Result>
</template>
<script>
import { Button, Result } from 'ant-design-vue';
export default {
  data() {
    return {};
  },
  components: {
    Button,
    Result,
  },
};
</script>
<style scoped></style>
