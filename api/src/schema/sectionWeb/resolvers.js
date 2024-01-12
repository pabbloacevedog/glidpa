import { getAllSectionWeb, getSectionWebById, addSectionWeb, updateSectionWeb } from '../../services/sectionWebService.js';

export const sectionWebResolver = {
	Query: {
		sectionWebs: async () => {
			return await getAllSectionWeb();
		},
		sectionWeb: async (parent, args) => {
			return await getSectionWebById(args.section_web_id);
		},
	},
	Mutation: {
		addSectionWeb: async (parent, args) => {
			return await addSectionWeb(args.sectionWebData);
		},
		updateSectionWeb: async (parent, args) => {
			return await updateSectionWeb(args.section_web_id, args.sectionWebData);
		},
	},
};
