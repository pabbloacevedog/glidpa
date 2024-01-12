import { GraphQLObjectType, GraphQLString } from 'graphql';

const LinkFooterType = new GraphQLObjectType({
	name: 'LinkFooter',
	description: 'Link Footer Type',

	fields: () => ({
		link_footer_id: { type: GraphQLString },
		footer_id: { type: GraphQLString },
		name: { type: GraphQLString },
		link: { type: GraphQLString },
	}),
});

export default LinkFooterType;
