// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as auth from './auth/fields/mutations.js'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        ...auth,
    }
})

export default mutation
