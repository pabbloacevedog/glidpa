import { getAllContactGlidpas, getContactGlidpaById, addContactGlidpa, updateContactGlidpa, deleteContactGlidpa } from '../../services/contactGlidpaService';

export const contactglidpaResolver = {
	Query: {
		contactglidpa: async (parent, args) => {
			return await getContactGlidpaById(args.contact_glidpa_id);
		},
		allContactGlidpas: async () => {
			return await getAllContactGlidpas();
		},
	},
	Mutation: {
		addContactGlidpa: async (parent, args) => {
			return await addContactGlidpa(args.contactglidpaData);
		},
		updateContactGlidpa: async (parent, args) => {
			return await updateContactGlidpa(args.contact_glidpa_id, args.contactglidpaData);
		},
		deleteContactGlidpa: async (parent, args) => {
			return await deleteContactGlidpa(args.contact_glidpa_id);
		},
	},
};
