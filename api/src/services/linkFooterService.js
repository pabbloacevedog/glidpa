import models from '../models';

// Obtener todos los links footer
export const getAllLinkFooters = async () => {
	return await models.LinkFooter.findAll();
};

// Obtener un link footer por ID
export const getLinkFooterById = async (link_footer_id) => {
	return await models.LinkFooter.findByPk(link_footer_id);
};

// Crear un nuevo link footer
export const addLinkFooter = async (linkFooterData) => {
	return await models.LinkFooter.create(linkFooterData);
};

// Actualizar un link footer
export const updateLinkFooter = async (link_footer_id, linkFooterData) => {
	const linkFooter = await models.LinkFooter.findByPk(link_footer_id);
	if (!linkFooter) {
		throw new Error('Link Footer no encontrado');
	}

	return await models.LinkFooter.update(linkFooterData);
};
