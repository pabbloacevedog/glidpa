
export default [
    {
        path: '/signup/:plan_id?',
        component: () => import('pages/SignUp.vue'),
        props: true,
        name: 'signup',
        meta: { guestOnly: true },
    }
]
