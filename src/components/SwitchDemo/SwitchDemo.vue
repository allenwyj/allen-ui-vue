<template>
  <h1>Switch</h1>

  <DemoComponent
    :comp="SwitchDemo1"
    title="Basic usage"
  />

  <DemoComponent
    :comp="SwitchDemo2"
    title="Disabled"
  />

  <!-- <div class="demo">
    <h2>Basic usage</h2>
    <div class="demo-component">
      <Switch v-model:value="bool" />
    </div>
    <div class="demo-actions">
      <Button>View code</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DemoComponent from '../DemoComponent.vue';

import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
export default defineComponent({
  components: {
    DemoComponent,
  },
  setup() {
    const bool = ref(true);

    return { bool, SwitchDemo1, SwitchDemo2 };
  },
});
</script>

<style lang="scss" scoped></style>
