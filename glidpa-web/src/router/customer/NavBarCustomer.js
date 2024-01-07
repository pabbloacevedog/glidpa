export default [
    {
        path: '/customer',
        component: () => import('layouts/NavBarCustomer.vue'),
        name: 'Menu',
        children: [
            {
                path: '/dashboard',
                component: () => import('pages/customer/DashBoard.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/data',
                component: () => import('pages/customer/Data.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/chatbot',
                component: () => import('pages/customer/ChatBot.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/landing',
                component: () => import('pages/customer/LandingPage.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/agenda',
                component: () => import('pages/customer/AgendaPage.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/settings',
                component: () => import('pages/customer/SettingsPage.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
            {
                path: '/messages',
                component: () => import('pages/customer/MessagesPage.vue'),
                meta: { requiresAuth: true } // Ruta protegida
            },
        ]
    },
]
