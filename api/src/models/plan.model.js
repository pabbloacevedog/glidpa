// models/plan.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Plan extends Model {
        // Aquí podrías agregar asociaciones si son necesarias
		static associate() {
            this.hasMany(sequelize.models.Company, { foreignKey: 'plan_id' });
            // Otras asociaciones...
        }
    }

    Plan.init({
        plan_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
            // considerar allowNull según los requisitos
        },
        price: {
            type: Sequelize.INTEGER
            // considerar allowNull según los requisitos
        },
        class: {
            type: Sequelize.STRING
            // considerar allowNull según los requisitos
        },
        max_questions: {
            type: Sequelize.INTEGER
            // considerar allowNull según los requisitos
        },
        max_photos: {
            type: Sequelize.INTEGER
            // considerar allowNull según los requisitos
        },
        max_conversations: {
            type: Sequelize.INTEGER
            // considerar allowNull según los requisitos
        },
        landing_page: {
            type: Sequelize.BOOLEAN
            // considerar allowNull según los requisitos
        }
    }, {
        sequelize,
        modelName: 'Plan',
        tableName: 'plan',
		timestamps: false
        // aquí puedes agregar configuraciones adicionales como timestamps
    });

    return Plan;
};
