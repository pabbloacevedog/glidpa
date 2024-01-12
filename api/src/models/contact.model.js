// models/contact.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Contact extends Model {
    }

    Contact.init({
        contact_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'company',
                key: 'company_id'
            }
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
        modelName: 'Contact',
        tableName: 'contact',
        timestamps: false
    });

    return Contact;
};
