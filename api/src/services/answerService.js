// services/answerService.js

import models from '../models';

export const getAllAnswers = async () => {
    return await models.Answer.findAll();
};

export const getAnswerById = async (answer_id) => {
    return await models.Answer.findByPk(answer_id);
};

export const createAnswer = async (answerData) => {
    return await models.Answer.create(answerData);
};

export const updateAnswer = async (answer_id, answerData) => {
    const answer = await models.Answer.findByPk(answer_id);
    if (!answer) {
        throw new Error('Respuesta no encontrada');
    }
    await answer.update(answerData);
    return answer;
};

export const deleteAnswer = async (answer_id) => {
    const answer = await models.Answer.findByPk(answer_id);
    if (!answer) {
        throw new Error('Respuesta no encontrada');
    }
    await answer.destroy();
    return answer_id;
};
