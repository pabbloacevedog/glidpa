// schema/booking/queries.js

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import BookingType from '../type.js';
import { bookingResolver } from  '../resolvers.js';

export const bookings = {
    type: new GraphQLList(BookingType),
    resolve: bookingResolver.Query.bookings
};

export const booking = {
    type: BookingType,
    args: { booking_id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: bookingResolver.Query.booking
};
