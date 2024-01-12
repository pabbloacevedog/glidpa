// schema/collation/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import CollationType from '../type.js';
import { collationResolver } from  '../resolvers.js';

export const collations = {
    type: new GraphQLList(CollationType),
    resolve: collationResolver.Query.collations
};

export const collation = {
    type: CollationType,
    args: { collation_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: collationResolver.Query.collation
};
