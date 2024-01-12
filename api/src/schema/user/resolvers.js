// schema/user/resolvers.js

import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../../services/userService';

export const userResolver = {
    Query: {
        users: () => {
            return getAllUsers();
        },
        user: (parent, { user_id }) => {
            return getUserById(user_id);
        },
    },
    Mutation: {
        addUser: (parent, { userData }) => {
            return createUser(userData);
        },
        editUser: (parent, { user_id, userData }) => {
            return updateUser(user_id, userData);
        },
        removeUser: (parent, { user_id }) => {
            return deleteUser(user_id);
        },
    },
};
