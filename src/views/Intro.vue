<template>
  <article>
    <h1>Introduction</h1>
    <p>Allen UI is a UI toolkit based on Vue 3 and TypeScript.</p>
    <p>
      The purpose of implementing this UI library is to learn more about Vue 3
      to expand my technical knowledge about how to build a component library
      and for some personal project use as well.
    </p>
    <p>
      So I strongly do not recommend you to use this UI library in production.
      Read source code for learning purpose.
    </p>
    <p>Next: <router-link to="/doc/get-started">Installation</router-link></p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
