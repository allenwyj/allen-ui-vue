<template>
  <Switch v-model:value="isOn" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default defineComponent({
  components: {
    Switch: Switch,
  },
  setup() {
    const isOn = ref(true);

    return { isOn };
  },
});
</script>

<style scoped></style>
