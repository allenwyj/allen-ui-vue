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
    <Button size="large">Large</Button>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <Button
      theme="link"
      size="large"
      >Large</Button
    >
    <Button theme="link">Normal</Button>
    <Button
      size="small"
      theme="link"
      >Small</Button
    >
  </div>
  <div>
    <Button
      size="large"
      theme="text"
      >Large</Button
    >
    <Button theme="text">Normal</Button>
    <Button
      size="small"
      theme="text"
      >Small</Button
    >
  </div>
  <h2>Example 3</h2>
  <div>
    <div>
      <Button level="main">Main</Button>
      <Button>Normal</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button
        theme="link"
        level="main"
        >Main Link</Button
      >
      <Button theme="link">Normal Link</Button>
      <Button
        theme="link"
        level="danger"
        >Danger Link</Button
      >
    </div>
    <div>
      <Button
        theme="text"
        level="main"
        >Main Text</Button
      >
      <Button theme="text">Normal Text</Button>
      <Button
        theme="text"
        level="danger"
        >Danger Text</Button
      >
    </div>
    <h2>Example 4</h2>
    <div>
      <Button disabled>Disabled</Button>
      <Button
        theme="link"
        disabled
        >Disabled Link</Button
      >
      <Button
        theme="text"
        disabled
        >Disabled Text</Button
      >
    </div>
    <h2>Example 5</h2>
    <div>
      <Button loading>Loading</Button>
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

<style scoped>
h2 {
  margin: 20px 0 20px;
}
div {
  margin-bottom: 20px;
}
</style>
