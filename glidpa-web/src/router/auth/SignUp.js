
export default [
    {
        path: '/signup/:id_plan?',
        component: () => import('pages/SignUp.vue'),
        props: true,
        name: 'signup'
    }
]
