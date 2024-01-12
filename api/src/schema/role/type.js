// schema/role/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const RoleType = new GraphQLObjectType({
    name: 'Role',
    fields: () => ({
        role_id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
        // ...otros campos según sea necesario
    })
});

export default RoleType;
