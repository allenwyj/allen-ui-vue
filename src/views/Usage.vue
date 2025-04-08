<template>
  <article>
    <h1>Usage</h1>
    <p>Learn the basics of using the components.</p>

    <h2>Quick Start</h2>
    <p>
      Please refer to the
      <router-link to="/doc/installation">Installation</router-link> page for
      installing the Allen UI component first.
    </p>
    <p>
      After installation, you can import the components you need in your
      project.
    </p>
    <div class="markdown-body">
      <pre><code>import { Button } from 'allen-ui'</code></pre>
    </div>
    <p>Then you can use the components in your project.</p>
    <h2>Vue SFC components</h2>
    <p>Sample code:</p>
    <div class="markdown-body">
      <pre><code>
&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "allen-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
      </code></pre>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
