// services/bookingService.js

import models from '../models';

export const getAllBookings = async () => {
    return await models.Booking.findAll();
};

export const getBookingById = async (booking_id) => {
    return await models.Booking.findByPk(booking_id);
};

export const createBooking = async (bookingData) => {
    return await models.Booking.create(bookingData);
};

export const updateBooking = async (booking_id, bookingData) => {
    const booking = await models.Booking.findByPk(booking_id);
    if (!booking) {
        throw new Error('Reserva no encontrada');
    }
    await booking.update(bookingData);
    return booking;
};

export const deleteBooking = async (booking_id) => {
    const booking = await models.Booking.findByPk(booking_id);
    if (!booking) {
        throw new Error('Reserva no encontrada');
    }
    await booking.destroy();
    return booking_id;
};
