// Imports
import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import CompanyType from '../type.js';
import { companyResolver } from '../resolvers.js';

// Queries
export const companies = {
	type: new GraphQLList(CompanyType),
	resolve: companyResolver.Query.companies
};

export const company = {
	type: CompanyType,
	args: {
		company_id: { type: new GraphQLNonNull(GraphQLString) },
	},
	resolve: companyResolver.Query.company
};
