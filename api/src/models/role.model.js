// models/Role.js

import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Role extends Model {
        static associate() {
			this.hasOne(sequelize.models.User, { foreignKey: 'role_id' });
        }
    }
    Role.init({
        role_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
		description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // Aquí puedes agregar más campos si necesitas, como descripciones o permisos específicos
    }, {
        sequelize,
		tableName: 'role',
        modelName: 'Role',

    });

    return Role;
};
