import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '682'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '448'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '719'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd7d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '756'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '73c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3ca'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0f5'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd5f'),
    routes: [
      {
        path: '/docs/access-your-cluster/access-the-atlas-cluster',
        component: ComponentCreator('/docs/access-your-cluster/access-the-atlas-cluster', '3f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/access-your-cluster---excersize-two',
        component: ComponentCreator('/docs/category/access-your-cluster---excersize-two', '29a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/get-started-with-atlas---excersize-one',
        component: ComponentCreator('/docs/category/get-started-with-atlas---excersize-one', '722'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/indexing-and-explain-plans---excersize-three',
        component: ComponentCreator('/docs/category/indexing-and-explain-plans---excersize-three', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/indexing-basics/',
        component: ComponentCreator('/docs/indexing-basics/', '23f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/indexing-basics/explain-plans',
        component: ComponentCreator('/docs/indexing-basics/explain-plans', '6a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-atlas/create-your-first-datasets',
        component: ComponentCreator('/docs/setting-up-atlas/create-your-first-datasets', '891'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-atlas/get-started-atlas',
        component: ComponentCreator('/docs/setting-up-atlas/get-started-atlas', '787'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1fc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
