// services/userService.js

import models from '../models';

export const getAllUsers = async () => {
    return await models.User.findAll();
};

export const getUserById = async (user_id) => {
    return await models.User.findByPk(user_id);
};

export const createUser = async (userData) => {
    userData.password = await hashPassword(userData.password);
    return await models.User.create(userData);
};

export const updateUser = async (user_id, userData) => {
    const user = await models.User.findByPk(user_id);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    if (userData.password) {
        userData.password = await hashPassword(userData.password);
    }
    await user.update(userData);
    return user;
};

export const deleteUser = async (user_id) => {
    const user = await models.User.findByPk(user_id);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    await user.destroy();
    return user_id;
};
