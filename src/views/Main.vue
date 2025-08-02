<template>
  <div class="main-view">
    <h1>🌍 생존 게임: 프로젝트 아르카</h1>
    <button @click="startGame">▶ 생존 시작하기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainView',
  setup() {
    const router = useRouter();
    const startGame = () => {
      router.push('/intro')
    };
    return {
      startGame
    };
  }
})
</script>