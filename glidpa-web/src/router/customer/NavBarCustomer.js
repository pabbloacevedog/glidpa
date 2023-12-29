export default [
    {
        path: '/customer',
        component: () => import('layouts/NavBarCustomer.vue'),
        name: 'Menu',
        children: [
            { path: '/dashboard', component: () => import('pages/customer/HomeCustomer.vue') },
            { path: '/data', component: () => import('pages/customer/Data.vue') },
        ]
    },
]
