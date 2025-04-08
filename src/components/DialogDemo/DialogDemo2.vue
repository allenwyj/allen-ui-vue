<template>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '../../lib/Button.vue';
import { openDialog } from '../../lib/openDialog';

export default defineComponent({
  components: {
    Button,
  },
  setup() {
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

    return { showDialog };
  },
});
</script>

<style scoped></style>
