// schema/schedule/mutations.js

import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';
import ScheduleType from '../type.js';
import { scheduleResolver } from  '../resolvers.js';

export const addSchedule = {
    type: ScheduleType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        day_name: { type: GraphQLString },
        day_code: { type: GraphQLInt },
        start: { type: GraphQLString },
        finish: { type: GraphQLString },
		vista: { type: GraphQLString },
    },
    resolve: scheduleResolver.Mutation.addSchedule
};

export const editSchedule = {
    type: ScheduleType,
    args: {
        schedule_id: { type: new GraphQLNonNull(GraphQLString) },
		company_id: { type: new GraphQLNonNull(GraphQLString) },
        day_name: { type: GraphQLString },
        day_code: { type: GraphQLInt },
        start: { type: GraphQLString },
        finish: { type: GraphQLString },
		vista: { type: GraphQLString },
    },
    resolve: scheduleResolver.Mutation.editSchedule
};

export const removeSchedule = {
    type: GraphQLString,
    args: {
        schedule_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: scheduleResolver.Mutation.removeSchedule
};
