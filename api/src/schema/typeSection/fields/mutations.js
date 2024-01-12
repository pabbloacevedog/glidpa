// schema/typesection/mutations.js

import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';
import TypeSectionType from '../type.js';
import { typesectionResolver } from  '../resolvers.js';

export const addTypeSection = {
    type: TypeSectionType,
    args: {
        name: { type: GraphQLString },
        name_component: { type: GraphQLString },
        description: { type: GraphQLString },
        src_image: { type: GraphQLString },
    },
    resolve: typesectionResolver.Mutation.addTypeSection
};

export const editTypeSection = {
    type: TypeSectionType,
    args: {
        type_section_id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        name_component: { type: GraphQLString },
        description: { type: GraphQLString },
        src_image: { type: GraphQLString },
    },
    resolve: typesectionResolver.Mutation.editTypeSection
};

export const removeTypeSection = {
    type: GraphQLString,
    args: {
        typesection_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: typesectionResolver.Mutation.removeTypeSection
};
