import ContactGlidpaType from '../type.js';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import { contactglidpaResolver } from '../resolvers.js';

export const addContactGlidpa = {
	type: ContactGlidpaType,
	args: {
		company_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		whatsapp: { type: GraphQLString },
		instagram: { type: GraphQLString },
		mensaje: { type: GraphQLString },
	},
	resolve: contactglidpaResolver.Mutation.addContactGlidpa,
};

export const updateContactGlidpa = {
	type: ContactGlidpaType,
	args: {
		contact_glidpa_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		whatsapp: { type: GraphQLString },
		instagram: { type: GraphQLString },
		mensaje: { type: GraphQLString },
	},
	resolve: contactglidpaResolver.Mutation.updateContactGlidpa,
};

export const deleteContactGlidpa = {
	type: ContactGlidpaType,
	args: {
		contact_glidpa_id: { type: new GraphQLNonNull(GraphQLString) },
	},
	resolve: contactglidpaResolver.Mutation.deleteContactGlidpa,
};
