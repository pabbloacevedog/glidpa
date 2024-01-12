// services/galleryService.js

import models from '../models';

export const getAllGalleries = async () => {
    return await models.Gallery.findAll();
};

export const getGalleryById = async (gallery_id) => {
    return await models.Gallery.findByPk(gallery_id);
};

export const createGallery = async (galleryData) => {
    return await models.Gallery.create(galleryData);
};

export const updateGallery = async (gallery_id, galleryData) => {
    const gallery = await models.Gallery.findByPk(gallery_id);
    if (!gallery) {
        throw new Error('Galería no encontrada');
    }
    await gallery.update(galleryData);
    return gallery;
};

export const deleteGallery = async (gallery_id) => {
    const gallery = await models.Gallery.findByPk(gallery_id);
    if (!gallery) {
        throw new Error('Galería no encontrada');
    }
    await gallery.destroy();
    return gallery_id;
};
