<template>
  <h1>Button</h1>
  <DemoComponent
    :comp="ButtonDemo1"
    title="Theme"
  />
  <DemoComponent
    :comp="ButtonDemo2"
    title="Size"
  />
  <DemoComponent
    :comp="ButtonDemo4"
    title="Disabled"
  />
  <DemoComponent
    :comp="ButtonDemo5"
    title="Loading"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonDemo1 from './ButtonDemo1.vue';
import ButtonDemo2 from './ButtonDemo2.vue';
import ButtonDemo4 from './ButtonDemo4.vue';
import ButtonDemo5 from './ButtonDemo5.vue';
import DemoComponent from '../DemoComponent.vue';

export default defineComponent({
  components: { DemoComponent },
  setup() {
    return { ButtonDemo1, ButtonDemo2, ButtonDemo4, ButtonDemo5 };
  },
});
</script>

<style scoped></style>
