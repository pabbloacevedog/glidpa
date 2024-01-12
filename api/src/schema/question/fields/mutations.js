// schema/question/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import QuestionType from '../type.js';
import { questionResolver } from  '../resolvers.js';

export const addQuestion = {
    type: QuestionType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        question: { type: GraphQLString }
    },
    resolve: questionResolver.Mutation.addQuestion
};

export const editQuestion = {
    type: QuestionType,
    args: {
        question_id: { type: new GraphQLNonNull(GraphQLString) },
        question: { type: GraphQLString }
    },
    resolve: questionResolver.Mutation.editQuestion
};

export const removeQuestion = {
    type: GraphQLString,
    args: {
        question_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: questionResolver.Mutation.removeQuestion
};
