// schema/role/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import RoleType from '../type.js';
import { roleResolver } from  '../resolvers.js';

export const addRole = {
    type: RoleType,
    args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
        // ...otros campos según sea necesario
    },
    resolve: roleResolver.Mutation.addRole
};

export const editRole = {
    type: RoleType,
    args: {
        role_id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
        // ...otros campos que se pueden actualizar
    },
    resolve: roleResolver.Mutation.editRole
};

export const removeRole = {
    type: GraphQLString,
    args: {
        role_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: roleResolver.Mutation.removeRole
};
