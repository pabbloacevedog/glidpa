// schema/typesection/resolvers.js

import { getAllTypeSections, getTypeSectionById, createTypeSection, updateTypeSection, deleteTypeSection } from '../../services/typeSectionService';

export const typesectionResolver = {
    Query: {
        typesections: () => {
            return getAllTypeSections();
        },
        typesection: (parent, { typesection_id }) => {
            return getTypeSectionById(typesection_id);
        },
    },
    Mutation: {
        addTypeSection: (parent, { typesectionData }) => {
            return createTypeSection(typesectionData);
        },
        editTypeSection: (parent, { typesection_id, typesectionData }) => {
            return updateTypeSection(typesection_id, typesectionData);
        },
        removeTypeSection: (parent, { typesection_id }) => {
            return deleteTypeSection(typesection_id);
        },
    },
};
