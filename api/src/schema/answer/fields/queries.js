// schema/answer/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import AnswerType from '../type.js';
import { answerResolver } from  '../resolvers.js';

export const answers = {
    type: new GraphQLList(AnswerType),
    resolve: answerResolver.Query.answers
};

export const answer = {
    type: AnswerType,
    args: { answer_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: answerResolver.Query.answer
};
