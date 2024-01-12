// schema/role/resolvers.js

import { getAllRoles, getRoleById, createRole, updateRole, deleteRole } from '../../services/roleService';

export const roleResolver = {
    Query: {
        roles: () => {
            return getAllRoles();
        },
        role: (parent, { role_id }) => {
            return getRoleById(role_id);
        },
    },
    Mutation: {
        addRole: (parent, { roleData }) => {
            return createRole(roleData);
        },
        editRole: (parent, { role_id, roleData }) => {
            return updateRole(role_id, roleData);
        },
        removeRole: (parent, { role_id }) => {
            return deleteRole(role_id);
        },
    },
};
