
export default [
    {
        path: '/login',
        component: () => import('pages/LoginPage.vue'),
        name: 'login',
        meta: { guestOnly: true },
    },
]
