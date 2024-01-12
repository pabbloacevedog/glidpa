// schema/typesection/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import TypeSectionType from '../type.js';
import { typesectionResolver } from  '../resolvers.js';

export const typesections = {
    type: new GraphQLList(TypeSectionType),
    resolve: typesectionResolver.Query.typesections
};

export const typesection = {
    type: TypeSectionType,
    args: { typesection_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: typesectionResolver.Query.typesection
};
