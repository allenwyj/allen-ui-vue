<template>
  <template v-if="visible">
    <Teleport to="body">
      <div
        class="aui-dialog-overlay"
        @click="overlayClick"
      ></div>
      <div class="aui-dialog-wrapper">
        <div class="aui-dialog">
          <header>
            <slot name="title" />
            <span
              @click="close"
              class="aui-dialog-close"
            ></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="cancel">{{ cancelText }}</Button>
            <Button
              @click="ok"
              level="main"
              >{{ okText }}</Button
            >
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    okText: {
      type: String,
      default: 'OK',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    const { emit } = context;

    const close = () => {
      emit('update:visible', false);
    };

    const overlayClick = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };

    const cancel = () => {
      props.cancel?.();
      close();
    };

    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };

    return { close, overlayClick, cancel, ok };
  },
});
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.aui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:hover {
      background: fade_out(black, 0.9);
    }
  }
}
</style>
