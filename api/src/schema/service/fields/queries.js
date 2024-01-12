// schema/service/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import ServiceType from '../type.js';
import { serviceResolver } from  '../resolvers.js';

export const services = {
    type: new GraphQLList(ServiceType),
    resolve: serviceResolver.Query.services
};

export const service = {
    type: ServiceType,
    args: { service_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: serviceResolver.Query.service
};
