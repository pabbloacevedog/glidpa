import models from '../models';

// Obtener todos los empleados
export const getAllEmployees = async () => {
    return await models.Employee.findAll();
};

// Obtener un empleado por ID
export const getEmployeeById = async (employee_id) => {
    return await models.Employee.findByPk(employee_id);
};

// Crear un nuevo empleado
export const createEmployee = async (employeeData) => {
    // Aquí puedes agregar lógica adicional antes de crear el empleado
    return await models.Employee.create(employeeData);
};

// Actualizar un empleado
export const updateEmployee = async (employee_id, employeeData) => {
    const employee = await models.Employee.findByPk(employee_id);
    if (!employee) {
        throw new Error('Empleado no encontrado');
    }

    return await employee.update(employeeData);
};

// Obtener empleados por servicio
export const getEmployeesForService = async (service_id) => {
    return await models.Employee.findAll({
        include: [{
            model: models.Service,
            where: { service_id: service_id },
            through: 'EmployeeService',
        }],
    });
};

// Puedes agregar más funciones según tus necesidades, como eliminar empleados, obtener empleados por compañía, etc.
