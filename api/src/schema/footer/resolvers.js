import { getAllFooters, getFooterById, createFooter, updateFooter } from '../../services/footerService';
import { authorizeUser } from '../../utils';

export const footerResolver = {
	Query: {
		footers: async () => {
			return await getAllFooters();
		},
		footer: async (parent, args) => {
			return await getFooterById(args.footer_id);
		},
	},
	Mutation: {
		addFooter: async (parent, args, context) => {
			// Verificar la autorización aquí si es necesario
			authorizeUser(context.user);

			return await createFooter(args.footerData);
		},
		editFooter: async (parent, args, context) => {
			// Verificar la autorización aquí si es necesario
			authorizeUser(context.user);

			return await updateFooter(args.footer_id, args.footerData);
		},
	},
};
