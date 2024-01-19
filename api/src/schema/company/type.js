// Imports
import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
// Company Type
const CompanyType = new GraphQLObjectType({
	name: 'company',
	description: 'Company Type',

	fields: () => ({
		company_id: { type: new GraphQLNonNull(GraphQLString) },
		company_name: { type: GraphQLString },
		description_company: { type: GraphQLString },
		company_email: { type: GraphQLString },
		company_phone: { type: GraphQLString },
		region: { type: GraphQLString },
		city: { type: GraphQLString },
		address: { type: GraphQLString },
		google_map_link: { type: GraphQLString },
		plan_id: { type: GraphQLString },
		// ... Agrega aquí otros campos según sea necesario
	})
});

export default CompanyType;
