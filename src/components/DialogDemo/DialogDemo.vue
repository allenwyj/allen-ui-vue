<template>
  <h1>Dialog</h1>

  <DemoComponent
    :comp="DialogDemo1"
    title="Dialog"
  />
  <DemoComponent
    :comp="DialogDemo2"
    title="Use openDialog to show dialog"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DialogDemo1 from './DialogDemo1.vue';
import DialogDemo2 from './DialogDemo2.vue';
import DemoComponent from '../DemoComponent.vue';

export default defineComponent({
  components: { DemoComponent },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
});
</script>

<style></style>
