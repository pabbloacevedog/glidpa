import ContactType from '../type.js';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import { contactResolver } from '../resolvers.js';

export const addContact = {
	type: ContactType,
	args: {
		company_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		whatsapp: { type: GraphQLString },
		instagram: { type: GraphQLString },
		mensaje: { type: GraphQLString },
	},
	resolve: contactResolver.Mutation.addContact,
};

export const updateContact = {
	type: ContactType,
	args: {
		contact_id: { type: new GraphQLNonNull(GraphQLString) },
		company_id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		whatsapp: { type: GraphQLString },
		instagram: { type: GraphQLString },
		mensaje: { type: GraphQLString },
	},
	resolve: contactResolver.Mutation.updateContact,
};

export const deleteContact = {
	type: ContactType,
	args: {
		contact_id: { type: new GraphQLNonNull(GraphQLString) },
	},
	resolve: contactResolver.Mutation.deleteContact,
};
