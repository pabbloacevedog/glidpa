import FooterType from '../type.js';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import { footerResolver } from '../resolvers.js';

export const addFooter = {
	type: FooterType,
	args: {
		company_id: { type: new GraphQLNonNull(GraphQLString) },
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
		// ... otros campos si es necesario
	},
	resolve: footerResolver.Mutation.addFooter,
};

export const updateFooter = {
	type: FooterType,
	args: {
		footer_id: { type: new GraphQLNonNull(GraphQLString) },
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
		// ... otros campos que se pueden actualizar
	},
	resolve: footerResolver.Mutation.editFooter,
};
