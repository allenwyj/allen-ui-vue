import { h } from 'vue';

import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import Markdown from './components/Markdown.vue';

import docmd from '../markdown/intro.md';
import usagemd from '../markdown/get-started.md';

const retrieveMarkdown = (content: string) =>
  h(Markdown, { content, key: content });

const history = createWebHashHistory();

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/doc',
    name: 'doc',
    component: Doc,

    children: [
      { path: '', component: retrieveMarkdown(docmd) },
      { path: 'get-started', component: retrieveMarkdown(usagemd) },
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
      { path: 'tabs', component: TabsDemo },
    ],
  },
];

export const router = createRouter({
  history,
  routes,
});
