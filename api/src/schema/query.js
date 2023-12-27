// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as auth from './auth/fields/query.js'
console.info(`INFO  - Cargando querys.`)
// Querys
const query = new GraphQLObjectType({
	name: 'query',
	description: '...',

	fields: () => ({
		...auth,
	})
})

export default query
