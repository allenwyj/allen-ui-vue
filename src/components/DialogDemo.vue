<template>
  <div>
    <h1>Dialog</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="ok"
      :cancel="cancel"
    ></Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default defineComponent({
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);

    const toggle = () => {
      x.value = !x.value;
    };

    const ok = () => {
      return true;
    };

    const cancel = () => {};
    return { x, toggle, ok, cancel };
  },
});
</script>

<style scoped></style>
