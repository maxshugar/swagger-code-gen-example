# Node.js REST API with Swagger Codegen

This repository contains an example of generating a Node.js REST server and client using Swagger Codegen. By defining an OpenAPI Specification, you can automate the creation of boilerplate code, enhancing development speed and ensuring consistency.

Check out the full article for a detailed step-by-step guide: [Accelerate Node.js REST API Development with Swagger Codegen](https://shugar.hashnode.dev/accelerate-nodejs-rest-api-development-with-swagger-codegen-a-step-by-step-guide)

## Sample Code

Here is a sample script to fetch a list of users using the generated client SDK:

```typescript
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
```

Follow the steps in the article to set up and run your own Node.js REST API using Swagger Codegen.
