// services/planService.js

import models from '../models';

export const getAllPlans = async () => {
    return await models.Plan.findAll();
};

export const getPlanById = async (plan_id) => {
    return await models.Plan.findByPk(plan_id);
};

export const createPlan = async (planData) => {
    return await models.Plan.create(planData);
};

export const updatePlan = async (plan_id, planData) => {
    const plan = await models.Plan.findByPk(plan_id);
    if (!plan) {
        throw new Error('Plan no encontrado');
    }
    await plan.update(planData);
    return plan;
};

export const deletePlan = async (plan_id) => {
    const plan = await models.Plan.findByPk(plan_id);
    if (!plan) {
        throw new Error('Plan no encontrado');
    }
    await plan.destroy();
    return plan_id;
};
