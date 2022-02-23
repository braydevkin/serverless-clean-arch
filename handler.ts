import { APIGatewayProxyEvent } from 'aws-lambda';

export const hello = async (event: APIGatewayProxyEvent) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event.queryStringParameters,
            },
            null,
            2,
        ),
    };
};
