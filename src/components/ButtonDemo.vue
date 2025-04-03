<template>
  <h1>Button</h1>
  <h2>Example 1</h2>
  <div>
    <Button />
    <Button theme="button"> BUTTON </Button>
    <Button theme="link"> LINK </Button>
    <Button theme="text"> TEXT </Button>
  </div>
  <h2>Example 2</h2>
  <div>
    <Button size="large">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button
      theme="link"
      size="large"
      >大大大</Button
    >
    <Button theme="link">普普通</Button>
    <Button
      size="small"
      theme="link"
      >小小小</Button
    >
  </div>
  <div>
    <Button
      size="large"
      theme="text"
      >大大大</Button
    >
    <Button theme="text">普普通</Button>
    <Button
      size="small"
      theme="text"
      >小小小</Button
    >
  </div>
  <h2>Example 3</h2>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button
        theme="link"
        level="main"
        >主要链接按钮</Button
      >
      <Button theme="link">普通链接按钮</Button>
      <Button
        theme="link"
        level="danger"
        >危险链接按钮</Button
      >
    </div>
    <div>
      <Button
        theme="text"
        level="main"
        >主要文字按钮</Button
      >
      <Button theme="text">普通文字按钮</Button>
      <Button
        theme="text"
        level="danger"
        >危险文字按钮</Button
      >
    </div>
    <h2>Example 4</h2>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button
        theme="link"
        disabled
        >禁用链接按钮</Button
      >
      <Button
        theme="text"
        disabled
        >禁用按钮</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../lib/Button.vue';

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
