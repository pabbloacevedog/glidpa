// services/roleService.js

import models from '../models';

export const getAllRoles = async () => {
    return await models.Role.findAll();
};

export const getRoleById = async (role_id) => {
    return await models.Role.findByPk(role_id);
};

export const createRole = async (roleData) => {
    return await models.Role.create(roleData);
};

export const updateRole = async (role_id, roleData) => {
    const role = await models.Role.findByPk(role_id);
    if (!role) {
        throw new Error('Rol no encontrado');
    }
    await role.update(roleData);
    return role;
};

export const deleteRole = async (role_id) => {
    const role = await models.Role.findByPk(role_id);
    if (!role) {
        throw new Error('Rol no encontrado');
    }
    await role.destroy();
    return role_id;
};
