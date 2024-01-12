import { getAllEmployees, getEmployeeById, createEmployee, updateEmployee } from '../../services/employeeService';
import { getAllServicesForEmployee } from '../../services/serviceService';

const employeeResolver = {
    Query: {
        employees: async () => {
            return await getAllEmployees();
        },
        employee: async (parent, args) => {
            return await getEmployeeById(args.employee_id);
        },
    },
    Mutation: {
        addEmployee: async (parent, args) => {
            // Tu lógica de autorización aquí
            return await createEmployee(args.employeeData);
        },
        editEmployee: async (parent, args) => {
            // Tu lógica de autorización aquí
            return await updateEmployee(args.employee_id, args.employeeData);
        },
    },
    Employee: {
        services: async (employee) => {
            return await getAllServicesForEmployee(employee.employee_id);
        },
    },
};

module.exports = { employeeResolver };
