<template>
  <h1>Tabs</h1>

  <DemoComponent
    :comp="TabDemo1"
    title="Tabs demo"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabDemo1 from './TabsDemo1.vue';
import DemoComponent from '../DemoComponent.vue';

export default defineComponent({
  components: { DemoComponent },
  setup() {
    return {
      TabDemo1,
    };
  },
});
</script>

<style></style>
