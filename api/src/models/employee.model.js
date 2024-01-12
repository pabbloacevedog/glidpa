// models/employee.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class Employee extends Model {
        static associate() {
            // Asociaciones aquí...
			this.belongsToMany(sequelize.models.Service, {
				through: 'EmployeeService',
				foreignKey: 'employee_id'
			});
			// Asociacion con el modelo Booking
			this.hasMany(sequelize.models.Booking, { foreignKey: 'employee_id' });
        }
    }

    Employee.init({
        employee_id: {
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
        sufix: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'Employee',
        tableName: 'employee'
    });

    return Employee;
};
