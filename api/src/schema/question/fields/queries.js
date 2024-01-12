// schema/question/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import QuestionType from '../type.js';
import { questionResolver } from  '../resolvers.js';

export const questions = {
    type: new GraphQLList(QuestionType),
    resolve: questionResolver.Query.questions
};

export const question = {
    type: QuestionType,
    args: { question_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: questionResolver.Query.question
};
