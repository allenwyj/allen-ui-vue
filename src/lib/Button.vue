<template>
  <button
    v-bind="$attrs"
    class="aui-button"
    :class="classes"
    :disabled="disabled"
  >
    <span
      v-if="loading"
      class="aui-loadingIndicator"
    ></span>
    <slot>Click</slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const { theme, size, level } = props;

      return {
        [`aui-theme-${theme}`]: theme,
        [`aui-size-${size}`]: size,
        [`aui-level-${level}`]: level,
      };
    });
    return { classes };
  },
});
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

.aui-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.aui-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background: none;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.aui-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: none;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.aui-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.aui-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.aui-theme-button {
    &.aui-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.aui-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.aui-theme-link {
    &.aui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.aui-theme-text {
    &.aui-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.aui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.aui-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.aui-theme-link,
  &.aui-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .aui-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: aui-spin 1s infinite linear;
  }
}

@keyframes aui-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
