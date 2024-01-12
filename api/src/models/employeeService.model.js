// models/employeeService.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
    class EmployeeService extends Model {
        // Esta clase puede permanecer vacía, Sequelize manejará esta tabla de unión
    }

    EmployeeService.init({
        employee_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'employee',
                key: 'id'
            }
        },
        service_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'service',
                key: 'id'
            }
        }
        // Puedes agregar más campos si son necesarios para tu lógica de negocio
    }, {
        sequelize,
        modelName: 'EmployeeService',
        tableName: 'employee_service'
    });

    return EmployeeService;
};
