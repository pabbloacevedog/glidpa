// schema/gallery/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import GalleryType from '../type.js';
import { galleryResolver } from  '../resolvers.js';

export const addGallery = {
    type: GalleryType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        src_image: { type: GraphQLString }
    },
    resolve: galleryResolver.Mutation.addGallery
};

export const editGallery = {
    type: GalleryType,
    args: {
        gallery_id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        src_image: { type: GraphQLString }
    },
    resolve: galleryResolver.Mutation.editGallery
};

export const removeGallery = {
    type: GraphQLString,
    args: {
        gallery_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: galleryResolver.Mutation.removeGallery
};
