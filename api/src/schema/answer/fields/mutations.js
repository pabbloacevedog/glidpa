// schema/answer/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import AnswerType from '../type.js';
import { answerResolver } from  '../resolvers.js';

export const addAnswer = {
    type: AnswerType,
    args: {
        question_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        answer: { type: GraphQLString }
    },
    resolve: answerResolver.Mutation.addAnswer
};

export const editAnswer = {
    type: AnswerType,
    args: {
        answer_id: { type: new GraphQLNonNull(GraphQLString) },
        answer: { type: GraphQLString }
    },
    resolve: answerResolver.Mutation.editAnswer
};

export const removeAnswer = {
    type: GraphQLString,
    args: {
        answer_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: answerResolver.Mutation.removeAnswer
};
