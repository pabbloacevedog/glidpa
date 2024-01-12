// schema/booking/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const BookingType = new GraphQLObjectType({
    name: 'Booking',
    fields: () => ({
        booking_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        service_id: { type: new GraphQLNonNull(GraphQLString) },
        employee_id: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLString },
        day: { type: GraphQLString },
        month: { type: GraphQLString },
        year: { type: GraphQLString },
        hour: { type: GraphQLString }
    })
});

export default BookingType;
