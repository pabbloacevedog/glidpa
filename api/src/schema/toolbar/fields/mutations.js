import ToolbarType from '../type.js';
import { GraphQLString } from 'graphql';
import { toolbarResolver } from '../resolvers.js';

export const addToolbar = {
    type: ToolbarType,
    args: {
        company_id: { type: GraphQLString },
        title: { type: GraphQLString },
        color: { type: GraphQLString },
        font: { type: GraphQLString },
        src_logo: { type: GraphQLString },
    },
    resolve: toolbarResolver.Mutation.addToolbar,
};
