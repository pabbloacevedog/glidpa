// schema/payment/resolvers.js

import { getAllPayments, getPaymentById, createPayment, updatePayment, deletePayment } from '../../services/paymentService';

export const paymentResolver = {
    Query: {
        payments: () => {
            return getAllPayments();
        },
        payment: (parent, { payment_id }) => {
            return getPaymentById(payment_id);
        },
    },
    Mutation: {
        addPayment: (parent, { paymentData }) => {
            return createPayment(paymentData);
        },
        editPayment: (parent, { payment_id, paymentData }) => {
            return updatePayment(payment_id, paymentData);
        },
        removePayment: (parent, { payment_id }) => {
            return deletePayment(payment_id);
        },
    },
};
