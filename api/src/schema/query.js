// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as company from './company/fields/queries.js'
console.info(`INFO  - Cargando querys.`)
// Querys
const query = new GraphQLObjectType({
	name: 'query',
	description: '...',

	fields: () => ({
		...company,
	})
})

export default query
