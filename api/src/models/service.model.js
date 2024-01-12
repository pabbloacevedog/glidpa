// models/service.model.js
import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize) => {
	class Service extends Model {
		static associate() {
			// Asociación con el modelo Company
			this.belongsTo(sequelize.models.Company, { foreignKey: 'company_id' });

			this.belongsToMany(sequelize.models.Employee, {
				through: 'EmployeeService',
				foreignKey: 'service_id'
			});
			// Asociacion con el modelo Booking
			this.hasMany(sequelize.models.Booking, { foreignKey: 'service_id' });
		}
	}

	Service.init({
		service_id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4
		},
		company_id: {
			type: Sequelize.UUID,
			allowNull: false,
			references: {
				model: 'company', // Nombre de la tabla de la compañía
				key: 'company_id', // Clave primaria de la tabla de la compañía
			}
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		},
		duration: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Service',
		tableName: 'service',
		timestamps: true // Puedes configurar timestamps según tus necesidades
	});

	return Service;
};
