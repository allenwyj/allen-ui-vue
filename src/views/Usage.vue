<template>
  <article class="markdown-body">
    <md />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import md from '../../markdown/get-started.md';

export default defineComponent({
  components: {
    md,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
