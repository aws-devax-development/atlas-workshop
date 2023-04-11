import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e60'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e8d'),
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
    component: ComponentCreator('/', '72a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
