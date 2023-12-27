// src/services/companyService.js

import models from '../models';

// Obtener todas las empresas
export const getAllCompanies = async () => {
    return await models.Company.findAll();
};

// Obtener una empresa por ID
export const getCompanyById = async (company_id) => {
    return await models.Company.findByPk(company_id);
};

// Crear una nueva empresa
export const createCompany = async (companyData) => {
    // Aquí puedes agregar lógica adicional antes de crear la empresa
    return await models.Company.create(companyData);
};
// Actualizar una empresa
export const updateCompany = async (company_id, companyData) => {
    const company = await models.Company.findByPk(company_id);
    if (!company) {
        throw new Error('Empresa no encontrada');
    }

    return await models.Company.update(companyData);
};
// Puedes agregar aquí más funciones como updateCompany, deleteCompany, etc.
export const getCompanyIdByUserId = async (user_id) => {
    const company = await models.Company.findOne({
        where: { user_id: user_id }
    });

    return company ? company.company_id : null;
};
