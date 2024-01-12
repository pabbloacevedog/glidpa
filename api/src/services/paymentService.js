// services/paymentService.js

import models from '../models';

export const getAllPayments = async () => {
    return await models.Payment.findAll();
};

export const getPaymentById = async (payment_id) => {
    return await models.Payment.findByPk(payment_id);
};

export const createPayment = async (paymentData) => {
    return await models.Payment.create(paymentData);
};

export const updatePayment = async (payment_id, paymentData) => {
    const payment = await models.Payment.findByPk(payment_id);
    if (!payment) {
        throw new Error('Pago no encontrado');
    }
    await payment.update(paymentData);
    return payment;
};

export const deletePayment = async (payment_id) => {
    const payment = await models.Payment.findByPk(payment_id);
    if (!payment) {
        throw new Error('Pago no encontrado');
    }
    await payment.destroy();
    return payment_id;
};
