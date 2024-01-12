// services/collationService.js

import models from '../models';

export const getAllCollations = async () => {
    return await models.Collation.findAll();
};

export const getCollationById = async (collation_id) => {
    return await models.Collation.findByPk(collation_id);
};

export const createCollation = async (collationData) => {
    return await models.Collation.create(collationData);
};

export const updateCollation = async (collation_id, collationData) => {
    const collation = await models.Collation.findByPk(collation_id);
    if (!collation) {
        throw new Error('Colación no encontrada');
    }
    await collation.update(collationData);
    return collation;
};

export const deleteCollation = async (collation_id) => {
    const collation = await models.Collation.findByPk(collation_id);
    if (!collation) {
        throw new Error('Colación no encontrada');
    }
    await collation.destroy();
    return collation_id;
};
