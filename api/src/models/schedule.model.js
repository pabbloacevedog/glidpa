// User
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize) => {
    class Schedule extends Model {
        static associate() {
            this.belongsTo(sequelize.models.Company, { foreignKey: 'company_id' });
			this.hasOne(sequelize.models.Collation, { foreignKey: 'schedule_id' });
        }
    }

    Schedule.init({
        schedule_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        company_id: {
			type: Sequelize.UUID
        },
        day_name: {
            type: Sequelize.STRING(50)
        },
        day_code: {
            type: Sequelize.INTEGER
        },
        start: {
            type: Sequelize.TIME
        },
        finish: {
            type: Sequelize.TIME
        },
		vista: {
            type: Sequelize.STRING(50)
        },
    }, {
        timestamps: true,
        tableName: 'schedule',
		modelName: 'Schedule',
        sequelize,
        indexes: [
            {
                unique: true,
                fields: ['day_code']
            },
			{
                unique: true,
                fields: ['day_name']
            }
        ]
    });

    return Schedule;
};


