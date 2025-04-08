<template>
  <article class="markdown-body">
    <md />
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import md from '../../markdown/intro.md';

export default defineComponent({
  components: {
    md,
  },
  setup() {},
});
</script>

<style scoped></style>
