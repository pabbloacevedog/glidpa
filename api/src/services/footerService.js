import Footer from '../models/footer.model';

// Obtener todos los footers
export const getAllFooters = async () => {
	try {
		return await Footer.findAll();
	} catch (error) {
		throw new Error('Error al obtener todos los footers: ' + error.message);
	}
};

// Obtener un footer por su ID
export const getFooterById = async (footer_id) => {
	try {
		const footer = await Footer.findByPk(footer_id);
		if (!footer) {
			throw new Error('Footer no encontrado');
		}
		return footer;
	} catch (error) {
		throw new Error('Error al obtener el footer por ID: ' + error.message);
	}
};

// Crear un nuevo footer
export const createFooter = async (footerData) => {
	try {
		return await Footer.create(footerData);
	} catch (error) {
		throw new Error('Error al crear un nuevo footer: ' + error.message);
	}
};

// Actualizar un footer por su ID
export const updateFooter = async (footer_id, footerData) => {
	try {
		const footer = await Footer.findByPk(footer_id);
		if (!footer) {
			throw new Error('Footer no encontrado');
		}
		return await footer.update(footerData);
	} catch (error) {
		throw new Error('Error al actualizar el footer: ' + error.message);
	}
};

// Puedes agregar más funciones de servicio según tus necesidades aquí
