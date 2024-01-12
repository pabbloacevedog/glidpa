// schema/plan/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLBoolean } from 'graphql';

const PlanType = new GraphQLObjectType({
    name: 'Plan',
    fields: () => ({
        plan_id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
        class: { type: GraphQLString },
        max_questions: { type: GraphQLInt },
        max_photos: { type: GraphQLInt },
        max_conversations: { type: GraphQLInt },
        landing_page: { type: GraphQLBoolean }
    })
});

export default PlanType;
