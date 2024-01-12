// schema/collation/resolvers.js

import { getAllCollations, getCollationById, createCollation, updateCollation, deleteCollation } from '../../services/collationService';

export const collationResolver = {
    Query: {
        collations: () => {
            return getAllCollations();
        },
        collation: (parent, { collation_id }) => {
            return getCollationById(collation_id);
        },
    },
    Mutation: {
        addCollation: (parent, { collationData }) => {
            return createCollation(collationData);
        },
        editCollation: (parent, { collation_id, collationData }) => {
            return updateCollation(collation_id, collationData);
        },
        removeCollation: (parent, { collation_id }) => {
            return deleteCollation(collation_id);
        },
    },
};
