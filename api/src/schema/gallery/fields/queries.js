// schema/gallery/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import GalleryType from '../type.js';
import { galleryResolver } from  '../resolvers.js';

export const galleries = {
    type: new GraphQLList(GalleryType),
    resolve: galleryResolver.Query.galleries
};

export const gallery = {
    type: GalleryType,
    args: { gallery_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: galleryResolver.Query.gallery
};
