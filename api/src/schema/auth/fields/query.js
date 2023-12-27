// auth/fields/query.js

import { GraphQLString } from 'graphql';
import CustomerLoginType from '../type.js';
import {authResolver} from '../resolvers.js';

export const customerLogin = {
	type: CustomerLoginType,
	args: {
		email: { type: GraphQLString },
		password: { type: GraphQLString }
	},
	resolve: authResolver.Query.login
};

// ... otras definiciones de query si las hay


export const customerLoginGoogle = {
	type: CustomerLoginType,
	args: {
		token: { type: GraphQLString }
	},
	resolve: authResolver.Query.loginGoogle
};
