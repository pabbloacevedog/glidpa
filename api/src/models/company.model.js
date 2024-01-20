// User
import { Model, Sequelize } from 'sequelize';
const { encrypt, decrypt } = require('../utils');
module.exports = (sequelize) => {
	class Company extends Model {
		static associate() {
			// Asociación con el modelo User
			this.belongsTo(sequelize.models.User, { foreignKey: 'user_id' });
			// Asociación con el modelo Schedule (considerar hasMany si una empresa puede tener varios horarios)
			this.hasOne(sequelize.models.Schedule, { foreignKey: 'company_id' });
			// Asociación con el modelo Service
			this.hasMany(sequelize.models.Service, { foreignKey: 'company_id' });
			// Asociación con el model Gallery
			this.hasOne(sequelize.models.Gallery, { foreignKey: 'company_id' });
			// Asociación con el modelo Employee
			this.hasMany(sequelize.models.Employee, { foreignKey: 'company_id' });
			// Asociacion con el modelo Booking
			this.hasMany(sequelize.models.Booking, { foreignKey: 'company_id' });
			// Asociacion con el modelo Question
			this.hasMany(sequelize.models.Question, { foreignKey: 'company_id' });
			// Asociacion con el modelo Answer
			this.hasMany(sequelize.models.Answer, { foreignKey: 'company_id' });
			// Asociación con el model Payment
			this.hasOne(sequelize.models.Payment, { foreignKey: 'company_id' });
			// Asociación con el model Plan
			this.belongsTo(sequelize.models.Plan, { foreignKey: 'plan_id' });
			// Asociación con el model Toolbar
			this.hasOne(sequelize.models.Toolbar, { foreignKey: 'company_id' });

		}
	}

	Company.init({
		company_id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: Sequelize.UUID
		},
		plan_id: {
			type: Sequelize.UUID
		},
		company_name: {
			type: Sequelize.STRING(255),
			unique: true // Asegura que el nombre de la empresa sea único
		},
		description_company: {
			type: Sequelize.STRING(2000),
			get() {
				const value = this.getDataValue('description_company');
				return value ? Company.decrypt(value) : value;
			},
			set(value) {
				this.setDataValue('description_company', Company.encrypt(value));
			}
		},
		company_email: {
			type: Sequelize.STRING(255),
			unique: true,
			validate: {
				isEmail: true // Valida que el campo sea un correo electrónico
			}
		},
		src_logo: { // Corrección de nombre
			type: Sequelize.STRING(255)
		},
		company_phone: { // Corrección de nombre
			type: Sequelize.STRING(20),
			validate: {
				// Aquí puedes agregar validaciones adicionales para el formato del teléfono
			}
		},
		region: { // Corrección de nombre
			type: Sequelize.STRING(100)
		},
		city: {
			type: Sequelize.STRING(100)
		},
		address: {
			type: Sequelize.STRING(500)
		},
		google_map_link: {
			type: Sequelize.STRING(1000)
		},
	}, {
		timestamps: true,
		tableName: 'company',
		modelName: 'Company',
		sequelize,
		// Índices para garantizar la unicidad donde sea necesario
		indexes: [
			{
				unique: true,
				fields: ['company_name']
			},
			{
				unique: true,
				fields: ['company_email']
			}
			// Otros índices según sea necesario
		]
	});

	return Company;
};
