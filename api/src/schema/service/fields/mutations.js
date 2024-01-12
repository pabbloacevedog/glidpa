// schema/service/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import ServiceType from '../type.js';
import { serviceResolver } from  '../resolvers.js';

export const addService = {
    type: ServiceType,
    args: {
        // ...args...
    },
    resolve: serviceResolver.Mutation.addService
};

export const editService = {
    type: ServiceType,
    args: {
        service_id: { type: new GraphQLNonNull(GraphQLString) },
        // ...otros campos...
    },
    resolve: serviceResolver.Mutation.editService
};

export const removeService = {
    type: GraphQLString,
    args: {
        service_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: serviceResolver.Mutation.removeService
};
