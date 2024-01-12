import jwt from 'jsonwebtoken';
import throwCustomError, {
	ErrorTypes,
} from '../helpers/error-handler.helper.js';
import { PubSub } from 'graphql-subscriptions';
import { JWT_SECRET } from '../config/config.js';
const pubsub = new PubSub();
const getUser = async (token) => {
	try {
		if (token) {
			return jwt.verify(JWT_SECRET);
		}
		return null;
	} catch (error) {
		return null;
	}
};

const context = async ({ req, res }) => {
	//   console.log(req.body.operationName);
	if (req.body.operationName === 'PublicData') {
		// console.log('blocking introspection query..');
		return {};
	}
	// console.log('request', req)
	// allowing the 'CreateUser' and 'Login' queries to pass without giving the token
	if (
		req.body.operationName === 'customerSignup' ||
		req.body.operationName === 'customerLogin'  ||
		req.body.operationName === 'IntrospectionQuery' // solo en modo dev
	) {
		return {};
	}

	// get the user token from the headers
	// const token = req.headers.authorization || '';
	const token = req.cookies.authToken

	// try to retrieve a user with the token
	const user = await getUser(token);

	if (!user) {
		throwCustomError('User is not Authenticated', ErrorTypes.UNAUTHENTICATED);
	}

	// add the user to the context
	return { user, pubsub };
};

export default context;
