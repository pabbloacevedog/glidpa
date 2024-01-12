import { GraphQLList, GraphQLString } from 'graphql';
import FooterType from '../type.js';
import { footerResolver } from '../resolvers.js';

// Ejemplo de consulta de todos los footers
export const footers = {
	type: new GraphQLList(FooterType),
	resolve: footerResolver.Query.footers,
};

// Ejemplo de consulta de un footer por ID
export const footer = {
	type: FooterType,
	args: {
		footer_id: { type: GraphQLString },
	},
	resolve: footerResolver.Query.footer,
};
