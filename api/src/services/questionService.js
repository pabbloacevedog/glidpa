// services/questionService.js

import models from '../models';

export const getAllQuestions = async () => {
    return await models.Question.findAll();
};

export const getQuestionById = async (question_id) => {
    return await models.Question.findByPk(question_id);
};

export const createQuestion = async (questionData) => {
    return await models.Question.create(questionData);
};

export const updateQuestion = async (question_id, questionData) => {
    const question = await models.Question.findByPk(question_id);
    if (!question) {
        throw new Error('Pregunta no encontrada');
    }
    await question.update(questionData);
    return question;
};

export const deleteQuestion = async (question_id) => {
    const question = await models.Question.findByPk(question_id);
    if (!question) {
        throw new Error('Pregunta no encontrada');
    }
    await question.destroy();
    return question_id;
};
