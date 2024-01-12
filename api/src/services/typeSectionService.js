import models from '../models';

// Obtener todos los tipos de sección
export const getAllTypeSections = async () => {
    return await models.TypeSection.findAll();
};

// Obtener un tipo de sección por ID
export const getTypeSectionById = async (type_section_id) => {
    return await models.TypeSection.findByPk(type_section_id);
};

// Crear un nuevo tipo de sección
export const createTypeSection = async (typeSectionData) => {
    return await models.TypeSection.create(typeSectionData);
};

// Actualizar un tipo de sección
export const updateTypeSection = async (type_section_id, typeSectionData) => {
    const typeSection = await models.TypeSection.findByPk(type_section_id);
    if (!typeSection) {
        throw new Error('Tipo de sección no encontrado');
    }

    return await models.TypeSection.update(typeSectionData, {
        where: { type_section_id: type_section_id },
    });
};

// Eliminar un tipo de sección
export const deleteTypeSection = async (type_section_id) => {
    const typeSection = await models.TypeSection.findByPk(type_section_id);
    if (!typeSection) {
        throw new Error('Tipo de sección no encontrado');
    }

    await models.TypeSection.destroy({
        where: { type_section_id: type_section_id },
    });

    return typeSection;
};
