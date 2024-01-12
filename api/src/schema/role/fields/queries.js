// schema/role/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import RoleType from '../type.js';
import { roleResolver } from  '../resolvers.js';

export const roles = {
    type: new GraphQLList(RoleType),
    resolve: roleResolver.Query.roles
};

export const role = {
    type: RoleType,
    args: { role_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: roleResolver.Query.role
};
