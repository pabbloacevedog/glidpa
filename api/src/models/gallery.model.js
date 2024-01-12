// models/gallery.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Gallery extends Model {
        static associate() {
            // Asociación con el modelo Company
            this.belongsTo(sequelize.models.Company, { foreignKey: 'company_id' });
        }
    }

    Gallery.init({
        gallery_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'company', // Asegúrate de que este nombre coincida con el nombre de tu tabla de compañías
                key: 'company_id', // y esta es la clave primaria en tu tabla de compañías
            }
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        src_image: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Gallery',
        tableName: 'gallery'
        // Puedes configurar timestamps según tus necesidades
    });

    return Gallery;
};
