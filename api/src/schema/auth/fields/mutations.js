// auth/fields/mutations.js

import { GraphQLString } from 'graphql';
import CustomerType from '../type.js';
import { authResolver } from '../resolvers.js';

export const customerSignup = {
	type: CustomerType,
	args: {
		email: { type: GraphQLString },
		user: { type: GraphQLString },
		password: { type: GraphQLString }
		// ... otros campos necesarios
	},
	resolve: authResolver.Mutation.signup
};
export const customerLogin = {
	type: CustomerType,
	args: {
		email: { type: GraphQLString },
		password: { type: GraphQLString }
	},
	resolve: authResolver.Mutation.login
};

// ... otras definiciones de query si las hay


export const customerLoginGoogle = {
	type: CustomerType,
	args: {
		token: { type: GraphQLString }
	},
	resolve: authResolver.Mutation.loginGoogle
};
// ... otras definiciones de mutation si las hay

