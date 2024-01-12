import { GraphQLObjectType, GraphQLString } from 'graphql';

const FooterType = new GraphQLObjectType({
	name: 'Footer',
	description: 'Footer Type',

	fields: () => ({
		footer_id: { type: GraphQLString },
		company_id: { type: GraphQLString },
		title: { type: GraphQLString },
		color: { type: GraphQLString },
		font: { type: GraphQLString },
		istagram: { type: GraphQLString },
		facebook: { type: GraphQLString },
		tiktok: { type: GraphQLString },
		youtube: { type: GraphQLString },
		threads: { type: GraphQLString },
		twitter: { type: GraphQLString },
		linkedin: { type: GraphQLString },
	}),
});

export default FooterType;
