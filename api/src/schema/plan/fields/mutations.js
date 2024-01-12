// schema/plan/mutations.js

import { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import PlanType from '../type.js';
import { planResolver } from  '../resolvers.js';

export const addPlan = {
    type: PlanType,
    args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
        class: { type: GraphQLString },
        max_questions: { type: GraphQLInt },
        max_photos: { type: GraphQLInt },
        max_conversations: { type: GraphQLInt },
        landing_page: { type: GraphQLBoolean }
    },
    resolve: planResolver.Mutation.addPlan
};

export const editPlan = {
    type: PlanType,
    args: {
        plan_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
        class: { type: GraphQLString },
        max_questions: { type: GraphQLInt },
        max_photos: { type: GraphQLInt },
        max_conversations: { type: GraphQLInt },
        landing_page: { type: GraphQLBoolean }
    },
    resolve: planResolver.Mutation.editPlan
};

export const removePlan = {
    type: GraphQLString,
    args: {
        plan_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: planResolver.Mutation.removePlan
};
