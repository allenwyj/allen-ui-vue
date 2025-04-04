<template>
  <div>
    <h1>Dialog</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="ok"
      :cancel="cancel"
    >
      <template #title>
        <strong>Hi</strong>
      </template>
      <template #content>
        <div>Content 1</div>
        <div>Content 2</div>
      </template>
    </Dialog>

    <h2>Use openDialog to show dialog</h2>
    <Button @click="showDialog">toggle</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog';

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

    // use openDialog to show dialog
    const showDialog = () => {
      openDialog({
        title: 'Title',
        content: 'This is a dialog',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        },
      });
    };

    return { x, toggle, ok, cancel, showDialog };
  },
});
</script>

<style scoped></style>
