// schema/schedule/resolvers.js

import { getAllSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule } from '../../services/scheduleService';

export const scheduleResolver = {
    Query: {
        schedules: () => {
            return getAllSchedules();
        },
        schedule: (parent, { schedule_id }) => {
            return getScheduleById(schedule_id);
        },
    },
    Mutation: {
        addSchedule: (parent, { scheduleData }) => {
            return createSchedule(scheduleData);
        },
        editSchedule: (parent, { schedule_id, scheduleData }) => {
            return updateSchedule(schedule_id, scheduleData);
        },
        removeSchedule: (parent, { schedule_id }) => {
            return deleteSchedule(schedule_id);
        },
    },
};
