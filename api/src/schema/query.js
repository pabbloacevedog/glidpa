// Imports
import { GraphQLObjectType } from 'graphql';

// Importa las consultas de cada modelo
import * as companyQueries from './company/fields/queries.js';
import * as planQueries from './plan/fields/queries.js';
import * as questionQueries from './question/fields/queries.js';
import * as answerQueries from './answer/fields/queries.js';
import * as bookingQueries from './booking/fields/queries.js';
import * as galleryQueries from './gallery/fields/queries.js';
import * as serviceQueries from './service/fields/queries.js';
import * as paymentQueries from './payment/fields/queries.js';
import * as employeeQueries from './employee/fields/queries.js';
import * as userQueries from './user/fields/queries.js';
import * as roleQueries from './role/fields/queries.js';
import * as collationQueries from './collation/fields/queries.js';
import * as scheduleQueries from './schedule/fields/queries.js';
import * as toolbarQueries from './toolbar/fields/queries.js';
import * as footerQueries from './footer/fields/queries.js';
import * as linkFooterQueries from './linkFooter/fields/queries.js';
import * as sectionWebQueries from './sectionWeb/fields/queries.js';
import * as typeSectionQueries from './typeSection/fields/queries.js';
import * as contactQueries from './contact/fields/queries.js';


console.info(`INFO - Cargando queries.`);

// Queries
const query = new GraphQLObjectType({
    name: 'query',
    description: 'This object contains all the queries available for the application.',

    fields: () => ({
        ...companyQueries,
        ...planQueries,
        ...questionQueries,
        ...answerQueries,
        ...bookingQueries,
        ...galleryQueries,
        ...serviceQueries,
        ...paymentQueries,
        ...employeeQueries,
        ...userQueries,
        ...roleQueries,
        ...collationQueries,
        ...scheduleQueries,
		...toolbarQueries, // Agrega las consultas del modelo toolbar
        ...footerQueries, // Agrega las consultas del modelo footer
        ...linkFooterQueries, // Agrega las consultas del modelo link_footer
        ...sectionWebQueries, // Agrega las consultas del modelo section_web
        ...typeSectionQueries, // Agrega las consultas del modelo type_section
        ...contactQueries, // Agrega las consultas del modelo contact
    })
});

export default query;
