import { getAllLinkFooters, getLinkFooterById, addLinkFooter, updateLinkFooter } from '../../services/linkFooterService.js';

export const linkFooterResolver = {
	Query: {
		linkFooters: async () => {
			return await getAllLinkFooters();
		},
		linkFooter: async (parent, args) => {
			return await getLinkFooterById(args.link_footer_id);
		},
	},
	Mutation: {
		addLinkFooter: async (parent, args) => {
			return await addLinkFooter(args.linkFooterData);
		},
		updateLinkFooter: async (parent, args) => {
			return await updateLinkFooter(args.link_footer_id, args.linkFooterData);
		},
	},
};
