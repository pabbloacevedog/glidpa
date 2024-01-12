// services/serviceService.js

import models from '../models';

export const getAllServices = async () => {
    return await models.Service.findAll();
};

export const getServiceById = async (service_id) => {
    return await models.Service.findByPk(service_id);
};

export const createService = async (serviceData) => {
    return await models.Service.create(serviceData);
};

export const updateService = async (service_id, serviceData) => {
    const service = await models.Service.findByPk(service_id);
    if (!service) {
        throw new Error('Servicio no encontrado');
    }
    await service.update(serviceData);
    return service;
};

export const deleteService = async (service_id) => {
    const service = await models.Service.findByPk(service_id);
    if (!service) {
        throw new Error('Servicio no encontrado');
    }
    await service.destroy();
    return service_id;
};
