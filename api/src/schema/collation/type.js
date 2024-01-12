// schema/collation/type.js

import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

const CollationType = new GraphQLObjectType({
    name: 'Collation',
    fields: () => ({
        collation_id: { type: new GraphQLNonNull(GraphQLString) },
        schedule_id: { type: new GraphQLNonNull(GraphQLString) },
        duration: { type: GraphQLInt },
        start: { type: GraphQLString },
        finish: { type: GraphQLString }
    })
});

export default CollationType;
