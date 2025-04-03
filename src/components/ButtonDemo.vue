<template>
  <h1>Button</h1>
  <Button />
  <Button theme="button"> BUTTON </Button>
  <Button theme="link"> LINK </Button>
  <Button theme="text"> TEXT </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../lib/Button.vue';

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
