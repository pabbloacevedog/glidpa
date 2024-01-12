import ContactType from '../type.js';
import { GraphQLList, GraphQLString } from 'graphql';
import { contactResolver } from '../resolvers.js';

export const contact = {
	type: ContactType,
	args: {
		contact_id: { type: GraphQLString },
	},
	resolve: contactResolver.Query.contact,
};

export const allContacts = {
	type: new GraphQLList(ContactType),
	resolve: contactResolver.Query.allContacts,
};
