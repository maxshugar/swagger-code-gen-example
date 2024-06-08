import fetch from 'portable-fetch'; // or your preferred fetch API
import { Configuration, DefaultApi } from '../spec/output-client';

const config = new Configuration({
	basePath: 'http://localhost:8080/v1',
});

const apiInstance = new DefaultApi(config, 'http://localhost:8080/v1', fetch);

// Calling the usersGet method to fetch users
apiInstance
	.usersGet()
	.then((data: any) => {
		console.log('API called successfully. Returned data: ', data);
	})
	.catch((error: any) => {
		console.error(error);
	});
