import { GraphQLObjectType, GraphQLString } from 'graphql';

const TypeSectionType = new GraphQLObjectType({
    name: 'TypeSection',
    description: 'Type Section Type',

    fields: () => ({
        type_section_id: { type: GraphQLString },
        name: { type: GraphQLString },
        name_component: { type: GraphQLString },
        description: { type: GraphQLString },
        src_image: { type: GraphQLString },
    }),
});

export default TypeSectionType;
