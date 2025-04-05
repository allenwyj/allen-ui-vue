<template>
  <div>
    <Tabs>
      <Tab title="Tab 1">Content 1</Tab>
      <Tab title="Tab 2">Content 2</Tab>
      <Tab title="Tab 3">Content 3</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default defineComponent({
  components: {
    Tabs,
    Tab,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
