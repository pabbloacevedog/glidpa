// services/scheduleService.js

import models from '../models';

export const getAllSchedules = async () => {
	return await models.Schedule.findAll();
};

export const getScheduleById = async (schedule_id) => {
	return await models.Schedule.findByPk(schedule_id);
};

export const createSchedule = async (scheduleData) => {
	return await models.Schedule.create(scheduleData);
};

export const updateSchedule = async (schedule_id, scheduleData) => {
	const schedule = await models.Schedule.findByPk(schedule_id);
	if (!schedule) {
		throw new Error('Horario no encontrado');
	}
	return await schedule.update(scheduleData);
};

export const deleteSchedule = async (schedule_id) => {
	const schedule = await models.Schedule.findByPk(schedule_id);
	if (!schedule) {
		throw new Error('Horario no encontrado');
	}
	await schedule.destroy();
	return schedule_id;
};
