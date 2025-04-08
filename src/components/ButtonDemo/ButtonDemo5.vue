<template>
  <Button loading>Loading</Button>
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
