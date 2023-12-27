// src/resolvers/authResolver.js

import { login, signup, loginGoogle } from '../../services/authService';

export const authResolver = {
    Mutation: {
        signup: async (parent, { user, email, password }) => {
            return await signup(user, email, password);
        },
        // ...otros métodos si los hay
    },
	Query:{
        login: async (parent, { email, password }) => {
            return await login(email, password);
        },
        loginGoogle: async (parent, { token }) => {
            return await loginGoogle(token);
        },
	}
    // ...otros resolvers si los hay
};

