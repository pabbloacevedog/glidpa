// schema/answer/resolvers.js

import { getAllAnswers, getAnswerById, createAnswer, updateAnswer, deleteAnswer } from '../../services/answerService';

export const answerResolver = {
    Query: {
        answers: () => {
            return getAllAnswers();
        },
        answer: (parent, { answer_id }) => {
            return getAnswerById(answer_id);
        },
    },
    Mutation: {
        addAnswer: (parent, { answerData }) => {
            return createAnswer(answerData);
        },
        editAnswer: (parent, { answer_id, answerData }) => {
            return updateAnswer(answer_id, answerData);
        },
        removeAnswer: (parent, { answer_id }) => {
            return deleteAnswer(answer_id);
        },
    },
};
