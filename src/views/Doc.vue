<template>
  <div>
    <TopNav />
    <div class="content">
      <aside>sidebar</aside>
      <main>main content</main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
  components: { TopNav },
};
</script>

<style scoped></style>
