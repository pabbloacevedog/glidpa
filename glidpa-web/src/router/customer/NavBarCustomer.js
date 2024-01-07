export default [
    {
        path: '/customer',
        component: () => import('layouts/NavBarCustomer.vue'),
        name: 'Menu',
        children: [
            {
                path: '/dashboard',
                component: () => import('pages/customer/HomeCustomer.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/data',
                component: () => import('pages/customer/Data.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
        ]
    },
]
