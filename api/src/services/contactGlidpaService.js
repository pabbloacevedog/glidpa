import models from '../models';

// Obtener un contactglidpao por ID
export const getContactGlidpaById = async (contact_glidpa_id) => {
	return await models.ContactGlidpa.findByPk(contact_glidpa_id);
};

// Obtener todos los contactglidpaos
export const getAllContactGlidpas = async () => {
	return await models.ContactGlidpa.findAll();
};

// Crear un nuevo contactglidpao
export const addContactGlidpa = async (contactglidpaData) => {
	return await models.ContactGlidpa.create(contactglidpaData);
};

// Actualizar un contactglidpao
export const updateContactGlidpa = async (contact_glidpa_id, contactglidpaData) => {
	const contactglidpa = await models.ContactGlidpa.findByPk(contact_glidpa_id);
	if (!contactglidpa) {
		throw new Error('ContactGlidpao no encontrado');
	}

	return await models.ContactGlidpa.update(contactglidpaData);
};

// Eliminar un contactglidpao por ID
export const deleteContactGlidpa = async (contact_glidpa_id) => {
	const contactglidpa = await models.ContactGlidpa.findByPk(contact_glidpa_id);
	if (!contactglidpa) {
		throw new Error('ContactGlidpao no encontrado');
	}

	return await contactglidpa.destroy();
};
