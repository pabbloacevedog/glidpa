// models/typeSection.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class TypeSection extends Model {
    }

    TypeSection.init({
        type_section_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING
        },
        name_component: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        src_image: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'TypeSection',
        tableName: 'type_section',
        timestamps: false
    });

    return TypeSection;
};
