// schema/payment/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const PaymentType = new GraphQLObjectType({
    name: 'Payment',
    fields: () => ({
        payment_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        plan_id: { type: new GraphQLNonNull(GraphQLString) },
        name_card: { type: GraphQLString },
        number_card: { type: GraphQLString },
        day_card: { type: GraphQLString },
        month_card: { type: GraphQLString },
        cvv_card: { type: GraphQLString },
        date_payment: { type: GraphQLString }
    })
});

export default PaymentType;
