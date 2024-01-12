import { GraphQLString, GraphQLNonNull } from 'graphql';
import EmployeeType from '../type.js';
import { employeeResolver } from  '../resolvers.js';

export const addEmployee = {
    type: EmployeeType,
    args: {
        company_id: { type: new GraphQLNonNull(GraphQLString) },
        sufix: { type: GraphQLString },
        name: { type: GraphQLString },
        telephone: { type: GraphQLString },
        image: { type: GraphQLString },
    },
    resolve: employeeResolver.Mutation.addEmployee,
};

export const updateEmployee = {
    type: EmployeeType,
    args: {
        employee_id: { type: new GraphQLNonNull(GraphQLString) },
        sufix: { type: GraphQLString },
        name: { type: GraphQLString },
        telephone: { type: GraphQLString },
        image: { type: GraphQLString },
    },
    resolve: employeeResolver.Mutation.editEmployee,
};
