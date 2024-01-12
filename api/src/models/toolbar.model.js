// models/toolbar.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Toolbar extends Model {
        static associate() {
            // Asociación uno a uno con el modelo Company
            this.hasOne(sequelize.models.Company, { foreignKey: 'company_id' });
        }
    }

    Toolbar.init({
        toolbar_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true, // Esto asegura que cada compañía solo tenga un toolbar
            references: {
                model: 'company',
                key: 'company_id',
            }
        },
        title: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        font: {
            type: Sequelize.STRING
        },
        src_logo: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'Toolbar',
        tableName: 'toolbar',
        timestamps: false
    });

    return Toolbar;
};
