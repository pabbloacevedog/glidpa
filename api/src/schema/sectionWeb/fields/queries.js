import SectionWebType from '../type.js';
import { GraphQLList, GraphQLString } from 'graphql';
import { sectionWebResolver } from '../resolvers.js';

export const sectionWebs = {
	type: new GraphQLList(SectionWebType),
	resolve: sectionWebResolver.Query.sectionWebs,
};

export const sectionWeb = {
	type: SectionWebType,
	args: {
		section_web_id: { type: GraphQLString },
	},
	resolve: sectionWebResolver.Query.sectionWeb,
};
