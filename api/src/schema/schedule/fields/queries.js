// schema/schedule/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import ScheduleType from '../type.js';
import { scheduleResolver } from  '../resolvers.js';

export const schedules = {
    type: new GraphQLList(ScheduleType),
    resolve: scheduleResolver.Query.schedules
};

export const schedule = {
    type: ScheduleType,
    args: { schedule_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: scheduleResolver.Query.schedule
};
