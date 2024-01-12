import SectionWebType from '../type.js';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import { sectionWebResolver } from '../resolvers.js';

export const addSectionWeb = {
	type: SectionWebType,
	args: {
		company_id: { type: new GraphQLNonNull(GraphQLString) },
		type_section_id: { type: new GraphQLNonNull(GraphQLString) },
		title: { type: GraphQLString },
		title_font: { type: GraphQLString },
		title_size: { type: GraphQLString },
		title_color: { type: GraphQLString },
		description: { type: GraphQLString },
		description_color: { type: GraphQLString },
		description_font: { type: GraphQLString },
		description_size: { type: GraphQLString },
		button_title: { type: GraphQLString },
		button_link: { type: GraphQLString },
		button_size: { type: GraphQLString },
		button_font: { type: GraphQLString },
		src_image: { type: GraphQLString },
	},
	resolve: sectionWebResolver.Mutation.addSectionWeb,
};

export const updateSectionWeb = {
	type: SectionWebType,
	args: {
		section_web_id: { type: new GraphQLNonNull(GraphQLString) },
		company_id: { type: GraphQLString },
		type_section_id: { type: GraphQLString },
		title: { type: GraphQLString },
		title_font: { type: GraphQLString },
		title_size: { type: GraphQLString },
		title_color: { type: GraphQLString },
		description: { type: GraphQLString },
		description_color: { type: GraphQLString },
		description_font: { type: GraphQLString },
		description_size: { type: GraphQLString },
		button_title: { type: GraphQLString },
		button_link: { type: GraphQLString },
		button_size: { type: GraphQLString },
		button_font: { type: GraphQLString },
		src_image: { type: GraphQLString },
	},
	resolve: sectionWebResolver.Mutation.updateSectionWeb,
};
