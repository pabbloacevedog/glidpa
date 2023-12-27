// Imports
import { GraphQLList, GraphQLUUID } from 'graphql';
import CompanyType from '../type.js';
import customerResolver from '../resolvers.js';

// Queries
export const companies = {
	type: new GraphQLList(CompanyType),
	resolve: customerResolver.Query.companies
};

export const company = {
	type: CompanyType,
	args: {
		company_id: { type: GraphQLUUID }
	},
	resolve: customerResolver.Query.company
};
