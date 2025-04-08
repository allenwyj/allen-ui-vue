<template>
  <div>
    <div class="top-nav-wrapper">
      <TopNav />
      <div class="banner">
        <h1>Allen-UI</h1>
        <h2>A UI toolkit</h2>
        <p class="actions">
          <a href="https://github.com/">Github</a>
          <router-link to="/doc">Get Started</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>Based on Vue 3</h3>
          <p>Proudly uses Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>Based on TypeScript</h3>
          <p>Source code is written in TypeScript (non-strict check)</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon--dengpao"></use>
          </svg>
          <h3>Code is easy to read</h3>
          <p>Each component's source code is extremely concise</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';

export default defineComponent({
  components: { TopNav },
});
</script>

<style lang="scss" scoped>
.top-nav-wrapper {
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #2980b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;

  clip-path: ellipse(70% 60% at 50% 40%);
}

.features {
  margin: 64px auto;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      padding: 0 16px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 24px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      background-image: linear-gradient(
        to right,
        #4b79a1 0%,
        #283e51 51%,
        #4b79a1 100%
      );
      margin: 10px;
      padding: 4px 24px;
      text-align: center;
      text-transform: capitalize;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 4px #eee;
      border-radius: 10px;
      display: block;
    }

    a:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
