export default [
    {
        path: '/',
        component: () => import('layouts/NavBarWeb.vue'),
        children: [
            { path: '', component: () => import('pages/web/Home.vue') },
            { path: '/pricing', component: () => import('pages/web/Pricing.vue') }
        ]
    },
]
