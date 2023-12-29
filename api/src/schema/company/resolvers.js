// Ejemplo de cómo se vería un resolver usando companyService

import { getAllCompanies, getCompanyById, createCompany, updateCompany } from '../../services/companyService';
import { authorizeUser } from '../../utils';
export const companyResolver = {
	Query: {
		companies: async () => {
			return await getAllCompanies();
		},
		company: async (parent, args) => {
			return await getCompanyById(args.company_id);
		},
	},
	Mutation: {
		addCompany: async (parent, args) => {

			if (!context.user || context.user.role !== 'Admin') {
                throw new Error('No autorizado');
            }
			return await createCompany(args.companyData);
		},
		editCompany: async (parent, args) => {
			// Verificar si el usuario es 'admin' o 'customer' asociado con la compañía
			// Aplicar el middleware de autorización
            authorizeUser(1, 2)(parent, args, context, info);
            // Si la autorización es exitosa, proceder con la actualización
            return await updateCompany(args.company_id, args.companyData);
        },
		// ...otros mutations
	},
	// ...otros resolvers si es necesario
};
