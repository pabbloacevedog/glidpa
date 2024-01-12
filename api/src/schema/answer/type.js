// schema/answer/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, } from 'graphql';

const AnswerType = new GraphQLObjectType({
    name: 'Answer',
    fields: () => ({
        answer_id: { type: new GraphQLNonNull(GraphQLString) },
        question_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        answer: { type: GraphQLString }
    })
});

export default AnswerType;
