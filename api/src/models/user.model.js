// User
import { Model, Sequelize } from 'sequelize';
const { hashPassword } = require('../utils');
module.exports = (sequelize) => {
    class User extends Model {
        static associate() {
            this.hasOne(sequelize.models.Company, { foreignKey: 'user_id' });
			this.belongsTo(sequelize.models.Role, { foreignKey: 'role_id' });
        }
    }

    User.init({
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        rut_user: {
            type: Sequelize.STRING(20)
        },
        name: {
            type: Sequelize.STRING(1000)
        },
        user: {
            type: Sequelize.STRING(255),
            unique: true,
            validate: {
                is: /^[a-zA-Z0-9_]+$/, // Solo letras, números y guiones bajos
            }
        },
        password: {
            type: Sequelize.STRING(1000) // Considerar encriptación y longitud adecuada
        },
        email: {
            type: Sequelize.STRING(255),
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        personal_phone: {
            type: Sequelize.STRING(20)
        },
        verification_code: {
            type: Sequelize.STRING(20)
        },
        verified: {
            type: Sequelize.BOOLEAN
        },
        state: {
            type: Sequelize.STRING(20)
        },
		role_id: {
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: true,
        tableName: 'user',
		modelName: 'User',
		hooks: {
            // Hook para hashear la contraseña antes de guardar
            beforeCreate: async (user) => {
                if (user.password) {
                    user.password = await hashPassword(user.password);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    user.password = await hashPassword(user.password);
                }
            },
        },
        sequelize,
        indexes: [
            {
                unique: true,
                fields: ['email']
            },
			{
                unique: true,
                fields: ['user']
            }
            // Otros índices según sea necesario
        ]
    });

    return User;
};


