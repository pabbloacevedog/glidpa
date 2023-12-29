// Imports
import { GraphQLObjectType, GraphQLString } from 'graphql';

// Company Type
const CompanyType = new GraphQLObjectType({
	name: 'company',
	description: 'Company Type',

	fields: () => ({
		company_id: { type: GraphQLString },
		company_name: { type: GraphQLString },
		description_company: { type: GraphQLString },
		company_email: { type: GraphQLString },
		// ... Agrega aquí otros campos según sea necesario
	})
});

export default CompanyType;
