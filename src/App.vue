<template>
  <div id="app">
    <router-view /> <!-- 이게 있어야 라우터에 따라 뷰가 바뀜 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>