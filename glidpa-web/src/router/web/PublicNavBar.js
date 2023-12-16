export default [
  {
    path: '/',
    component: () => import('layouts/PublicNavBar.vue'),
    children: [
      { path: '', component: () => import('pages/web/Home.vue') }
    ]
  },
]
