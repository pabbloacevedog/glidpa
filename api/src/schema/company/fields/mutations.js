// Imports
import CompanyType from '../type.js';
import { GraphQLString, GraphQLUUID } from 'graphql';
import companyResolver from '../resolvers.js';

// Mutations
export const addCompany = {
	type: CompanyType,
	args: {
		company_name: { type: GraphQLString },
		description_company: { type: GraphQLString },
		company_email: { type: GraphQLString },
		// ... otros campos si es necesario
	},
	resolve: companyResolver.Mutation.addCompany
};
export const updateCompany = {
    type: CompanyType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLUUID) },
        company_name: { type: GraphQLString },
        description_company: { type: GraphQLString },
        company_email: { type: GraphQLString },
        // ... otros campos que se pueden actualizar
    },
	resolve: companyResolver.Mutation.editCompany
};
