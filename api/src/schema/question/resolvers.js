// schema/question/resolvers.js

import { getAllQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } from '../../services/questionService';

export const questionResolver = {
    Query: {
        questions: () => {
            return getAllQuestions();
        },
        question: (parent, { question_id }) => {
            return getQuestionById(question_id);
        },
    },
    Mutation: {
        addQuestion: (parent, { questionData }) => {
            return createQuestion(questionData);
        },
        editQuestion: (parent, { question_id, questionData }) => {
            return updateQuestion(question_id, questionData);
        },
        removeQuestion: (parent, { question_id }) => {
            return deleteQuestion(question_id);
        },
    },
};
