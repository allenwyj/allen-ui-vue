<template>
  <button
    @click="toggle"
    class="aui-switch"
    :class="{ 'aui-switch-on': value }"
    :disabled="disabled"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: Boolean,
    disabled: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      if (props.disabled) return;
      context.emit('update:value', !props.value);
    };

    return { toggle };
  },
});
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.aui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  &:disabled {
    cursor: not-allowed;
  }
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.aui-switch-on {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.aui-switch-on:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
