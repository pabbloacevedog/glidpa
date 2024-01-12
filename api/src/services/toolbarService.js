import models from '../models';

// Obtener todas las toolbars
export const getAllToolbars = async () => {
    return await models.Toolbar.findAll();
};

// Obtener una toolbar por ID
export const getToolbarById = async (toolbar_id) => {
    return await models.Toolbar.findByPk(toolbar_id);
};

// Crear una nueva toolbar
export const createToolbar = async (toolbarData) => {
    // Aquí puedes agregar lógica adicional antes de crear la toolbar
    return await models.Toolbar.create(toolbarData);
};

// Actualizar una toolbar
export const updateToolbar = async (toolbar_id, toolbarData) => {
    const toolbar = await models.Toolbar.findByPk(toolbar_id);
    if (!toolbar) {
        throw new Error('Toolbar no encontrada');
    }

    return await models.Toolbar.update(toolbarData);
};
