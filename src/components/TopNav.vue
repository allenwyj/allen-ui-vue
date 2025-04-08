<template>
  <div class="topnav">
    <router-link
      to="/"
      class="logo"
    >
      <svg class="icon">
        <use xlink:href="#icon-groupsets_"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">Docs</router-link>
      </li>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggle-aside icon"
      @click="toggleAside"
    >
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = inject<(e: Event) => void>('toggleAside');

    return { asideVisible, toggleAside };
  },
});
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
    &:hover {
      border: none;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  > .toggle-aside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>
