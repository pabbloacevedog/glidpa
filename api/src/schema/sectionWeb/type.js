import { GraphQLObjectType, GraphQLString } from 'graphql';

const SectionWebType = new GraphQLObjectType({
	name: 'SectionWebType',
	description: 'Section Web Type',

	fields: () => ({
		section_web_id: { type: GraphQLString },
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
	}),
});

export default SectionWebType;
