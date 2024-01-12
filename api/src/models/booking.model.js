// models/booking.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Booking extends Model {
        static associate() {
            // Asociación con el modelo Company
            this.belongsTo(sequelize.models.Company, { foreignKey: 'company_id' });

            // Asociación con el modelo Service
            this.belongsTo(sequelize.models.Service, { foreignKey: 'service_id' });

            // Asociación con el modelo Employee
            this.belongsTo(sequelize.models.Employee, { foreignKey: 'employee_id' });
        }
    }

    Booking.init({
        booking_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        company_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        service_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        employee_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        day: {
            type: Sequelize.STRING,
            allowNull: false
        },
        month: {
            type: Sequelize.STRING,
            allowNull: false
        },
        year: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hour: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Booking',
        tableName: 'booking'
    });

    return Booking;
};
