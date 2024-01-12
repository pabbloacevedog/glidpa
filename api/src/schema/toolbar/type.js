import { GraphQLObjectType, GraphQLString } from 'graphql';

const ToolbarType = new GraphQLObjectType({
    name: 'Toolbar',
    description: 'Toolbar Type',

    fields: () => ({
        toolbar_id: { type: GraphQLString },
        company_id: { type: GraphQLString },
        title: { type: GraphQLString },
        color: { type: GraphQLString },
        font: { type: GraphQLString },
        src_logo: { type: GraphQLString },
    }),
});

export default ToolbarType;
