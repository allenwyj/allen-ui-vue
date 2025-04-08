<template>
  <div class="layout">
    <TopNav
      :toggleMenuButtonVisible="true"
      class="nav"
    />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>Getting started</h2>
        <ol>
          <li>
            <router-link to="/doc">Overview</router-link>
          </li>
          <li>
            <router-link to="/doc/installation ">Installation</router-link>
          </li>
          <li>
            <router-link to="/doc/usage">Usage</router-link>
          </li>
        </ol>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 206px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  width: 200px;
  padding: 16px 12px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 9;
  border-right: 2px solid #eee;

  > h2 {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 16px;
    padding-bottom: 4px;
  }
  > ol {
    > li {
      font-size: 14px;
      > a {
        display: block;
        padding: 4px 24px;
        border-radius: 8px;

        &:hover {
          border-bottom: unset;
          background: rgb(246, 247, 248);
        }
      }

      .router-link-active {
        background: rgb(235, 245, 255);
        color: rgb(0, 107, 214);
        position: relative;
        &:hover {
          background: rgb(204, 230, 255, 0.8);
        }

        &::before {
          position: absolute;
          content: '';
          display: block;
          width: 1px;
          background: rgb(51, 153, 255);
          left: 10px;
          top: 0;
          bottom: 0;
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
