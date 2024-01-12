import models from '../models';

// Obtener un contacto por ID
export const getContactById = async (contact_id) => {
	return await models.Contact.findByPk(contact_id);
};

// Obtener todos los contactos
export const getAllContacts = async () => {
	return await models.Contact.findAll();
};

// Crear un nuevo contacto
export const addContact = async (contactData) => {
	return await models.Contact.create(contactData);
};

// Actualizar un contacto
export const updateContact = async (contact_id, contactData) => {
	const contact = await models.Contact.findByPk(contact_id);
	if (!contact) {
		throw new Error('Contacto no encontrado');
	}

	return await models.Contact.update(contactData);
};

// Eliminar un contacto por ID
export const deleteContact = async (contact_id) => {
	const contact = await models.Contact.findByPk(contact_id);
	if (!contact) {
		throw new Error('Contacto no encontrado');
	}

	return await contact.destroy();
};
