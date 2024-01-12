import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import ServiceType from '../service/type.js';

const EmployeeType = new GraphQLObjectType({
    name: 'EmployeeType',
    description: 'Employee Type',

    fields: () => ({
        employee_id: { type: GraphQLString },
        company_id: { type: GraphQLString },
        sufix: { type: GraphQLString },
        name: { type: GraphQLString },
        telephone: { type: GraphQLString },
        image: { type: GraphQLString },
        services: { type: new GraphQLList(ServiceType) },
    }),
});

export default EmployeeType;
