// schema/service/type.js

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

const ServiceType = new GraphQLObjectType({
    name: 'Service',
    fields: () => ({
        service_id: { type: new GraphQLNonNull(GraphQLString) },
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        duration: { type: GraphQLInt }
        // Incluye aquí otros campos que sean parte del modelo Service
    })
});

export default ServiceType;
