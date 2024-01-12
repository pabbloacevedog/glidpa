// models/footer.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Footer extends Model {
        static associate() {
            // Asociación uno a uno con el modelo Company
            this.hasOne(sequelize.models.Company, { foreignKey: 'company_id' });
			// Asociación con el modelo LinkFooter
			this.hasMany(sequelize.models.LinkFooter, { foreignKey: 'footer_id' });
        }
    }

    Footer.init({
        footer_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true, // Esto asegura que cada compañía solo tenga un footer
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
        istagram: {
            type: Sequelize.STRING
        },
        facebook: {
            type: Sequelize.STRING
        },
        tiktok: {
            type: Sequelize.STRING
        },
        youtube: {
            type: Sequelize.STRING
        },
        threads: {
            type: Sequelize.STRING
        },
        twitter: {
            type: Sequelize.STRING
        },
        linkedin: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'Footer',
        tableName: 'footer',
        timestamps: false
    });

    return Footer;
};
