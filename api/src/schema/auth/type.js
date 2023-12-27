// Imports
import {GraphQLObjectType, GraphQLString} from 'graphql'

// Customer Login type
const CustomerType = new GraphQLObjectType({
    name: 'CustomerLogin',
    description: 'Autentincación de usuario',

    fields: () => ({
        token: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        // password: {
        //     type: GraphQLString
        // },
		user: {
			type: GraphQLString
		}
    })
})

export default CustomerType
