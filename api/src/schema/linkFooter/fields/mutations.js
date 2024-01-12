import LinkFooterType from '../type.js';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import { linkFooterResolver } from '../resolvers.js';

export const addLinkFooter = {
	type: LinkFooterType,
	args: {
		footer_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		link: { type: GraphQLString },
	},
	resolve: linkFooterResolver.Mutation.addLinkFooter,
};

export const updateLinkFooter = {
	type: LinkFooterType,
	args: {
		link_footer_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		link: { type: GraphQLString },
	},
	resolve: linkFooterResolver.Mutation.updateLinkFooter,
};
