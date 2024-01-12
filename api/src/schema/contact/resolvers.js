import { getAllContacts, getContactById, addContact, updateContact, deleteContact } from '../../services/contactService';

export const contactResolver = {
	Query: {
		contact: async (parent, args) => {
			return await getContactById(args.contact_id);
		},
		allContacts: async () => {
			return await getAllContacts();
		},
	},
	Mutation: {
		addContact: async (parent, args) => {
			return await addContact(args.contactData);
		},
		updateContact: async (parent, args) => {
			return await updateContact(args.contact_id, args.contactData);
		},
		deleteContact: async (parent, args) => {
			return await deleteContact(args.contact_id);
		},
	},
};
