import { APIGatewayProxyEvent } from 'aws-lambda';
import { Product } from './src/entities/product/product';
import { IProductData } from './src/entities/product/product.data';

export const hello = async (event: APIGatewayProxyEvent) => {
    const product: IProductData = JSON.parse(event.body as string);
    const f = new Product(product);

    const { value, statusCode, message } = await f.validation(product);

    if (statusCode == 200) {
        return {
            statusCode: statusCode,
            body: JSON.stringify({
                message,
                value,
            }),
        };
    }

    return {
        statusCode: statusCode,
        body: JSON.stringify({
            message: message,
        }),
    };
};
