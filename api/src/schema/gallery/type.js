// schema/gallery/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, } from 'graphql';

const GalleryType = new GraphQLObjectType({
    name: 'Gallery',
    fields: () => ({
        gallery_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        src_image: { type: GraphQLString }
    })
});

export default GalleryType;
