import { GraphQLList, GraphQLString } from 'graphql';
import LinkFooterType from '../type.js';
import { linkFooterResolver } from '../resolvers.js';

export const linkFooter = {
	type: LinkFooterType,
	args: {
		link_footer_id: { type: GraphQLString },
	},
	resolve: linkFooterResolver.Query.linkFooter,
};

export const linkFooters = {
	type: new GraphQLList(LinkFooterType),
	resolve: linkFooterResolver.Query.linkFooters,
};
