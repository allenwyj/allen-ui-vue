<template>
  <Button disabled>Disabled</Button>
  <Button
    theme="link"
    disabled
    >Disabled Link</Button
  >
  <Button
    theme="text"
    disabled
    >Disabled Text</Button
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../../lib/Button.vue';

export default defineComponent({
  components: { Button },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
