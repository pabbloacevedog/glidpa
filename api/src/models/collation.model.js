// User
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize) => {
    class Collation extends Model {
        static associate() {
            this.belongsTo(sequelize.models.Schedule, { foreignKey: 'schedule_id' });
        }
    }

    Collation.init({
        collation_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
		schedule_id: {
            type: Sequelize.UUID,
        },
		duration: {
			type: Sequelize.INTEGER
		},
        start: {
            type: Sequelize.TIME
        },
        finish: {
            type: Sequelize.TIME
        }
    }, {
        timestamps: true,
        tableName: 'collation',
		modelName: 'Collation',
        sequelize
    });

    return Collation;
};


