<template>
  <div>
    <Tabs v-model:selected="selected">
      <Tab title="Tab 1">Content 1</Tab>
      <Tab title="Tab 2">Content 2</Tab>
      <Tab title="Tab 3">Content 3</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default defineComponent({
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref('Tab 1');
    return { selected };
  },
});
</script>

<style scoped></style>
