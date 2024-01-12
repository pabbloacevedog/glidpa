// models/linkFooter.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class LinkFooter extends Model {
        static associate() {
            // Asociación muchos a uno con el modelo Footer
            this.belongsTo(sequelize.models.Footer, { foreignKey: 'footer_id' });
        }
    }

    LinkFooter.init({
        link_footer_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        footer_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'footer',
                key: 'footer_id',
            }
        },
        name: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'LinkFooter',
        tableName: 'link_footer',
        timestamps: false
    });

    return LinkFooter;
};
