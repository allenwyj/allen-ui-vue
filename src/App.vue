<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import { router } from './router';

export default defineComponent({
  name: 'App',
  setup() {
    const screenWidth = document.documentElement.clientWidth;
    const asideVisible = ref(screenWidth <= 500 ? false : true);
    provide('asideVisible', asideVisible);

    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    provide('toggleAside', toggleAside);

    router.afterEach(() => {
      if (screenWidth <= 500) {
        asideVisible.value = false;
      }
    });
  },
});
</script>
