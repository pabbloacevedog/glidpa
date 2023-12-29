// src/resolvers/authResolver.js

import { login, signup, loginGoogle } from '../../services/authService';

export const authResolver = {
    Mutation: {
        signup: async (parent, { email, user, password }) => {
            return await signup( email, user, password);
        },
		login: async (parent, { email, password }) => {
            return await login(email, password);
        },
        loginGoogle: async (parent, { token }) => {
            return await loginGoogle(token);
        },
        // ...otros métodos si los hay
    },
    // ...otros resolvers si los hay
};

