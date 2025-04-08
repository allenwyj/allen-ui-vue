import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';

import Intro from './views/Intro.vue';
import Usage from './views/Usage.vue';
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,

      children: [
        { path: '', component: Intro },
        { path: 'get-started', component: Usage },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
});
