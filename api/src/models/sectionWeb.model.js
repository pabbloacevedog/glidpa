// models/sectionWeb.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class SectionWeb extends Model {
        static associate(models) {
            // Asociación muchos a uno con el modelo Company
            this.belongsTo(models.Company, { foreignKey: 'company_id' });

            // Asociación uno a uno con el modelo TypeSection
            this.belongsTo(models.TypeSection, { foreignKey: 'type_section_id' });
        }
    }

    SectionWeb.init({
        section_web_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'company',
                key: 'company_id',
            }
        },
        type_section_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'type_section',
                key: 'type_section_id',
            }
        },
        title: {
            type: Sequelize.STRING
        },
        title_font: {
            type: Sequelize.STRING
        },
        title_size: {
            type: Sequelize.STRING
        },
        title_color: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        description_color: {
            type: Sequelize.STRING
        },
        description_font: {
            type: Sequelize.STRING
        },
        description_size: {
            type: Sequelize.STRING
        },
        button_title: {
            type: Sequelize.STRING
        },
        button_link: {
            type: Sequelize.STRING
        },
        button_size: {
            type: Sequelize.STRING
        },
        button_font: {
            type: Sequelize.STRING
        },
        src_image: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'SectionWeb',
        tableName: 'section_web',
        timestamps: false
    });

    return SectionWeb;
};
