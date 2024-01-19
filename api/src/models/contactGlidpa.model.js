// models/contactglidpa.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class ContactGlidpa extends Model {
    }

    ContactGlidpa.init({
        contact_glidpa_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        whatsapp: {
            type: Sequelize.STRING
        },
        instagram: {
            type: Sequelize.STRING
        },
        mensaje: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'ContactGlidpa',
        tableName: 'contact_glidpa',
        timestamps: false
    });

    return ContactGlidpa;
};
