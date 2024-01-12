// schema/booking/resolvers.js

import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from '../../services/bookingService';

export const bookingResolver = {
    Query: {
        bookings: () => {
            return getAllBookings();
        },
        booking: (parent, { booking_id }) => {
            return getBookingById(booking_id);
        },
    },
    Mutation: {
        addBooking: (parent, { bookingData }) => {
            return createBooking(bookingData);
        },
        editBooking: (parent, { booking_id, bookingData }) => {
            return updateBooking(booking_id, bookingData);
        },
        removeBooking: (parent, { booking_id }) => {
            return deleteBooking(booking_id);
        },
    },
};
