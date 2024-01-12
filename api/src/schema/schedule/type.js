// schema/schedule/type.js

import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

const ScheduleType = new GraphQLObjectType({
    name: 'Schedule',
    fields: () => ({
        schedule_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        day_name: { type: GraphQLString },
        day_code: { type: GraphQLInt },
        start: { type: GraphQLString },
        finish: { type: GraphQLString },
		vista: { type: GraphQLString },
    })
});

export default ScheduleType;
