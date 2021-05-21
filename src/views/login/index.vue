<template>
  <div class="login">this is login</div>
  <Button type="primary">hehe</Button>
</template>

<script lang="ts">
import axios from 'axios';
import { ref, defineComponent } from 'vue';
import { Button } from 'ant-design-vue';
export default defineComponent({
  name: 'Login',
  components: {
    Button,
  },
});
</script>

<style scoped lang="less">
.login {
  color: red;
  font-size: 0.16rem;
}
</style>
