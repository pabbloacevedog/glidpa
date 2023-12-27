// auth/fields/mutations.js

import { GraphQLString } from 'graphql';
import CustomerType from '../type.js';
import {authResolver} from '../resolvers.js';

export const customerSignup = {
	type: CustomerType,
	args: {
		user: { type: GraphQLString },
		email: { type: GraphQLString },
		password: { type: GraphQLString }
		// ... otros campos necesarios
	},
	resolve: authResolver.Mutation.signup
};

// ... otras definiciones de mutation si las hay

