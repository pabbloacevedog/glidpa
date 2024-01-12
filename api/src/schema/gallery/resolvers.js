// schema/gallery/resolvers.js

import { getAllGalleries, getGalleryById, createGallery, updateGallery, deleteGallery } from '../../services/galleryService';

export const galleryResolver = {
    Query: {
        galleries: () => {
            return getAllGalleries();
        },
        gallery: (parent, { gallery_id }) => {
            return getGalleryById(gallery_id);
        },
    },
    Mutation: {
        addGallery: (parent, { galleryData }) => {
            return createGallery(galleryData);
        },
        editGallery: (parent, { gallery_id, galleryData }) => {
            return updateGallery(gallery_id, galleryData);
        },
        removeGallery: (parent, { gallery_id }) => {
            return deleteGallery(gallery_id);
        },
    },
};
