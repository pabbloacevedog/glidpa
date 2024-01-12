// Imports
import { GraphQLObjectType } from 'graphql';

// Importa las mutaciones de cada modelo
import * as companyMutations from './company/fields/mutations.js';
import * as collationMutations from './collation/fields/mutations.js';
import * as scheduleMutations from './schedule/fields/mutations.js';
import * as planMutations from './plan/fields/mutations.js';
import * as questionMutations from './question/fields/mutations.js';
import * as answerMutations from './answer/fields/mutations.js';
import * as bookingMutations from './booking/fields/mutations.js';
import * as galleryMutations from './gallery/fields/mutations.js';
import * as serviceMutations from './service/fields/mutations.js';
import * as paymentMutations from './payment/fields/mutations.js';
import * as employeeMutations from './employee/fields/mutations.js';
import * as userMutations from './user/fields/mutations.js';
import * as roleMutations from './role/fields/mutations.js';
import * as authMutations from './auth/fields/mutations.js';
// Añade aquí más importaciones para otros modelos...
import * as toolbarMutations from './toolbar/fields/mutations.js';
import * as footerMutations from './footer/fields/mutations.js';
import * as linkFooterMutations from './linkFooter/fields/mutations.js';
import * as sectionWebMutations from './sectionWeb/fields/mutations.js';
import * as typeSectionMutations from './typeSection/fields/mutations.js';
import * as contactMutations from './contact/fields/mutations.js';
// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: 'This object contains all the mutations available for the application.',

    fields: {
        ...companyMutations,
		...collationMutations,
		...scheduleMutations,
        ...planMutations,
        ...questionMutations,
        ...answerMutations,
        ...bookingMutations,
        ...galleryMutations,
        ...serviceMutations,
        ...paymentMutations,
        ...employeeMutations,
        ...userMutations,
        ...roleMutations,
        ...authMutations,
		...toolbarMutations, // Agrega las consultas del modelo toolbar
        ...footerMutations, // Agrega las consultas del modelo footer
        ...linkFooterMutations, // Agrega las consultas del modelo link_footer
        ...sectionWebMutations, // Agrega las consultas del modelo section_web
        ...typeSectionMutations, // Agrega las consultas del modelo type_section
        ...contactMutations, // Agrega las consultas del modelo contact
    }
});

export default mutation;
