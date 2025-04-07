<template>
  <div class="aui-tabs">
    <div
      class="aui-tabs-nav"
      ref="container"
    >
      <div
        class="aui-tabs-nav-item"
        :class="{ selected: title === selected }"
        v-for="(title, index) in titles"
        :key="index"
        :ref="
          (el) => {
            if (title === selected) currentTab = el as HTMLDivElement;
          }
          "
        @click="select(title)"
      >
        {{ title }}
      </div>
      <div
        ref="indicator"
        class="aui-tabs-nav-indicator"
      ></div>
    </div>
    <div class="aui-tabs-content">
      <component
        :is="current"
        :key="current?.props?.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchPostEffect } from 'vue';
import Tab from './Tab.vue';

export default defineComponent({
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  emits: ['update:selected'],
  setup(props, context) {
    const currentTab = ref<HTMLDivElement | null>(null);
    // ref for the indicator
    const indicator = ref<HTMLDivElement | null>(null);
    // ref for the nav container
    const container = ref<HTMLDivElement | null>(null);

    // calculate the indicator position from the left
    const calculateIndicator = () => {
      const { width } = currentTab.value!.getBoundingClientRect();
      // set the width of the indicator to fit the selected tab title
      indicator.value!.style.width = `${width}px`;

      // fetching the left position of the container
      const { left } = container.value!.getBoundingClientRect();

      // fetching the left position of the selected nav item
      const { left: currentTabLeft } =
        currentTab.value!.getBoundingClientRect();
      // calculate the left position of the indicator
      const leftPosition = currentTabLeft - left;
      // set the left position of the indicator
      indicator.value!.style.left = `${leftPosition}px`;
    };

    watchPostEffect(calculateIndicator);

    // get the elements from the default slots
    const defaults = context.slots.default?.();

    // check if the slots is Tab, otherwise throw error
    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs's child must be `Tab` component");
      }
    });

    // TODO: can be optimised, currently it's not supporting repeated titles
    const current = computed(() => {
      return defaults?.find((tag) => tag.props?.title === props.selected);
    });

    // get the titles from the default slots
    const titles = defaults?.map((tag) => {
      return tag.props?.title;
    });

    const select = (title: string) => {
      context.emit('update:selected', title);
    };

    return {
      defaults,
      titles,
      current,
      currentTab,
      indicator,
      container,
      select,
    };
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
    position: relative;
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

    &-indicator {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100px;
      height: 3px;
      background-color: $blue;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
