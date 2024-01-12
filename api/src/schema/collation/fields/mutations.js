// schema/collation/mutations.js

import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';
import CollationType from '../type.js';
import { collationResolver } from  '../resolvers.js';

export const addCollation = {
    type: CollationType,
    args: {
        schedule_id: { type: new GraphQLNonNull(GraphQLString) },
        duration: { type: GraphQLInt },
        start: { type: GraphQLString },
        finish: { type: GraphQLString }
    },
    resolve: collationResolver.Mutation.addCollation
};

export const editCollation = {
    type: CollationType,
    args: {
        collation_id: { type: new GraphQLNonNull(GraphQLString) },
        duration: { type: GraphQLInt },
        start: { type: GraphQLString },
        finish: { type: GraphQLString }
    },
    resolve: collationResolver.Mutation.editCollation
};

export const removeCollation = {
    type: GraphQLString,
    args: {
        collation_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: collationResolver.Mutation.removeCollation
};
