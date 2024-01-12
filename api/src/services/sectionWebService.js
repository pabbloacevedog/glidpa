import models from '../models';

// Obtener todas las secciones web
export const getAllSectionWeb = async () => {
	return await models.SectionWeb.findAll();
};

// Obtener una sección web por ID
export const getSectionWebById = async (section_web_id) => {
	return await models.SectionWeb.findByPk(section_web_id);
};

// Crear una nueva sección web
export const addSectionWeb = async (sectionWebData) => {
	return await models.SectionWeb.create(sectionWebData);
};

// Actualizar una sección web
export const updateSectionWeb = async (section_web_id, sectionWebData) => {
	const sectionWeb = await models.SectionWeb.findByPk(section_web_id);
	if (!sectionWeb) {
		throw new Error('Sección web no encontrada');
	}

	return await models.SectionWeb.update(sectionWebData);
};
