// schema/payment/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import PaymentType from '../type.js';
import { paymentResolver } from  '../resolvers.js';

export const addPayment = {
    type: PaymentType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        plan_id: { type: new GraphQLNonNull(GraphQLString) },
        name_card: { type: GraphQLString },
        number_card: { type: GraphQLString },
        day_card: { type: GraphQLString },
        month_card: { type: GraphQLString },
        cvv_card: { type: GraphQLString },
        date_payment: { type: GraphQLString }
    },
    resolve: paymentResolver.Mutation.addPayment
};

export const editPayment = {
    type: PaymentType,
    args: {
        payment_id: { type: new GraphQLNonNull(GraphQLString) },
        plan_id: { type: new GraphQLNonNull(GraphQLString) },
        name_card: { type: GraphQLString },
        number_card: { type: GraphQLString },
        day_card: { type: GraphQLString },
        month_card: { type: GraphQLString },
        cvv_card: { type: GraphQLString },
        date_payment: { type: GraphQLString }
    },
    resolve: paymentResolver.Mutation.editPayment
};

export const removePayment = {
    type: GraphQLString,
    args: {
        payment_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: paymentResolver.Mutation.removePayment
};
