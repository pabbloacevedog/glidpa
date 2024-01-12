// schema/payment/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import PaymentType from '../type.js';
import { paymentResolver } from  '../resolvers.js';

export const payments = {
    type: new GraphQLList(PaymentType),
    resolve: paymentResolver.Query.payments
};

export const payment = {
    type: PaymentType,
    args: { payment_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: paymentResolver.Query.payment
};
