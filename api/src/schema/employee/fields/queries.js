import { GraphQLList, GraphQLString } from 'graphql';
import  EmployeeType from '../type.js';
import { employeeResolver } from  '../resolvers.js';

export const employees = {
    type: new GraphQLList(EmployeeType),
    resolve: employeeResolver.Query.employees,
};

export const employee = {
    type: EmployeeType,
    args: {
        employee_id: { type: GraphQLString },
    },
    resolve: employeeResolver.Query.employee,
};
