// models/payment.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Payment extends Model {
        static associate(models) {
            // Asociación con el modelo Company
            this.belongsTo(models.Company, { foreignKey: 'company_id' });

            // Asociación con el modelo Plan
            this.belongsTo(models.Plan, { foreignKey: 'plan_id' });
        }
    }

    Payment.init({
        payment_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        plan_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        name_card: {
            type: Sequelize.STRING,
            allowNull: false
        },
        number_card: {
            type: Sequelize.STRING,
            allowNull: false
        },
        day_card: {
            type: Sequelize.STRING,
            allowNull: false
        },
        month_card: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cvv_card: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date_payment: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Payment',
        tableName: 'payment'
        // Aquí puedes configurar timestamps u otras opciones según tus necesidades
    });

    return Payment;
};
