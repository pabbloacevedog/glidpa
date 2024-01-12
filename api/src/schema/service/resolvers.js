// schema/service/resolvers.js

import { getAllServices, getServiceById, createService, updateService, deleteService } from '../../services/serviceService';

export const serviceResolver = {
    Query: {
        services: () => {
            return getAllServices();
        },
        service: (parent, { service_id }) => {
            return getServiceById(service_id);
        },
    },
    Mutation: {
        addService: (parent, { serviceData }) => {
            return createService(serviceData);
        },
        editService: (parent, { service_id, serviceData }) => {
            return updateService(service_id, serviceData);
        },
        removeService: (parent, { service_id }) => {
            return deleteService(service_id);
        },
    },
};
