<template>
  <div>
    <TopNav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>Components</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main><router-view /></main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue';
import TopNav from '../components/TopNav.vue';
export default defineComponent({
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return { asideVisible };
  },
});
</script>

<style scoped>
aside {
  background: lightblue;
  width: 200px;
  padding: 16px;

  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
