// schema/question/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, } from 'graphql';

const QuestionType = new GraphQLObjectType({
    name: 'Question',
    fields: () => ({
        question_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        question: { type: GraphQLString }
    })
});

export default QuestionType;
