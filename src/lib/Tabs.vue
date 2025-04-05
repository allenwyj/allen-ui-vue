<template>
  <div class="aui-tabs">
    <div class="aui-tabs-nav">
      <div
        class="aui-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>
    <div class="aui-tabs-content">
      <component
        class="aui-tabs-content-item"
        v-for="(tab, index) in defaults"
        :is="tab"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tab from './Tab.vue';

export default defineComponent({
  setup(props, context) {
    // check if the slots is Tab, otherwise throw error
    const defaults = context.slots.default?.();

    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs's child must be `Tab` component");
      }
    });

    const titles = defaults?.map((tag) => {
      return tag.props?.title;
    });

    return { defaults, titles };
  },
});
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.aui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
