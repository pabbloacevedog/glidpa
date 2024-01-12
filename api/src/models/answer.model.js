// models/answer.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Answer extends Model {
        static associate(models) {
            // Asociación con el modelo Company
            this.belongsTo(models.Company, { foreignKey: 'company_id' });

            // Asociación con el modelo Question
            this.belongsTo(models.Question, { foreignKey: 'question_id' });
        }
    }

    Answer.init({
        answer_id: {
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
        question_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'question', // Asegúrate de que este nombre coincida con el nombre de tu tabla de preguntas
                key: 'question_id', // y esta es la clave primaria en tu tabla de preguntas
            }
        },
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Answer',
        tableName: 'answer'
        // Aquí puedes configurar timestamps u otras opciones según tus necesidades
    });

    return Answer;
};
