import ContactGlidpaType from '../type.js';
import { GraphQLList, GraphQLString } from 'graphql';
import { contactglidpaResolver } from '../resolvers.js';

export const contactglidpa = {
	type: ContactGlidpaType,
	args: {
		contactglidpa_id: { type: GraphQLString },
	},
	resolve: contactglidpaResolver.Query.contactglidpa,
};

export const allContactGlidpas = {
	type: new GraphQLList(ContactGlidpaType),
	resolve: contactglidpaResolver.Query.allContactGlidpas,
};
