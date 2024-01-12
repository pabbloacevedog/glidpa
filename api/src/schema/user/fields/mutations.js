// schema/user/mutations.js

import { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';
import UserType from '../type.js';
import { userResolver } from  '../resolvers.js';

export const addUser = {
    type: UserType,
    args: {
        // ...otros campos
    },
    resolve: userResolver.Mutation.addUser
};

export const editUser = {
    type: UserType,
    args: {
        user_id: { type: new GraphQLNonNull(GraphQLString) },
        // ...otros campos que se pueden actualizar
    },
    resolve: userResolver.Mutation.editUser
};

export const removeUser = {
    type: GraphQLString,
    args: {
        user_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: userResolver.Mutation.removeUser
};
