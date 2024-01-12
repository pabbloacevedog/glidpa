// schema/plan/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import PlanType from '../type.js';
import { planResolver } from  '../resolvers.js';

export const plans = {
    type: new GraphQLList(PlanType),
    resolve: planResolver.Query.plans
};

export const plan = {
    type: PlanType,
    args: { plan_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: planResolver.Query.plan
};
