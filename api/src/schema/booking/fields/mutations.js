// schema/booking/mutations.js

import { GraphQLNonNull, GraphQLString } from 'graphql';
import BookingType from '../type.js';
import { bookingResolver } from  '../resolvers.js';

export const addBooking = {
    type: BookingType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        service_id: { type: new GraphQLNonNull(GraphQLString) },
        employee_id: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLString },
        day: { type: GraphQLString },
        month: { type: GraphQLString },
        year: { type: GraphQLString },
        hour: { type: GraphQLString }
    },
    resolve: bookingResolver.Mutation.addBooking
};

export const editBooking = {
    type: BookingType,
    args: {
        booking_id: { type: new GraphQLNonNull(GraphQLString) },
		company_id: { type: new GraphQLNonNull(GraphQLString) },
		service_id: { type: new GraphQLNonNull(GraphQLString) },
        employee_id: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLString },
        day: { type: GraphQLString },
        month: { type: GraphQLString },
        year: { type: GraphQLString },
        hour: { type: GraphQLString }
    },
    resolve: bookingResolver.Mutation.editBooking
};

export const removeBooking = {
    type: GraphQLString,
    args: {
        booking_id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: bookingResolver.Mutation.removeBooking
};
