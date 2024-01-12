// models/question.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Question extends Model {
        static associate(models) {
            // Asociación con el modelo Company
            this.belongsTo(models.Company, { foreignKey: 'company_id' });
        }
    }

    Question.init({
        question_id: {
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
        question: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Question',
        tableName: 'question'
        // Aquí puedes configurar timestamps u otras opciones según tus necesidades
    });

    return Question;
};
