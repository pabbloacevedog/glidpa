import { GraphQLObjectType, GraphQLString } from 'graphql';

const ContactType = new GraphQLObjectType({
	name: 'ContactType',
	description: 'Contact Type',

	fields: () => ({
		contact_id: { type: GraphQLString },
		company_id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		whatsapp: { type: GraphQLString },
		instagram: { type: GraphQLString },
		mensaje: { type: GraphQLString },
	}),
});

export default ContactType;
