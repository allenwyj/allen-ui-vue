<template>
  <component
    :is="content"
    class="markdown-body"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
});
</script>
