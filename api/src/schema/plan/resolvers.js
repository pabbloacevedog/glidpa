// schema/plan/resolvers.js

import { getAllPlans, getPlanById, createPlan, updatePlan, deletePlan } from '../../services/planService';

export const planResolver = {
    Query: {
        plans: () => {
            return getAllPlans();
        },
        plan: (parent, { plan_id }) => {
            return getPlanById(plan_id);
        },
    },
    Mutation: {
        addPlan: (parent, { planData }) => {
            return createPlan(planData);
        },
        editPlan: (parent, { plan_id, planData }) => {
            return updatePlan(plan_id, planData);
        },
        removePlan: (parent, { plan_id }) => {
            return deletePlan(plan_id);
        },
    },
};
