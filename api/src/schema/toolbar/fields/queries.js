import ToolbarType from '../type.js';
import { GraphQLList, GraphQLString } from 'graphql';
import { toolbarResolver } from '../resolvers.js';

export const toolbars = {
    type: new GraphQLList(ToolbarType),
    resolve: toolbarResolver.Query.toolbars,
};

export const toolbar = {
    type: ToolbarType,
    args: {
        toolbar_id: { type: GraphQLString },
    },
    resolve: toolbarResolver.Query.toolbar,
};
