import { APIGatewayProxyEvent } from 'aws-lambda';
import { Product } from './src/entities/product/product';
import { IProductData } from './src/entities/product/product.data';

export const hello = async (event: APIGatewayProxyEvent) => {
    const product: IProductData = event.body as unknown as IProductData;
    const f = new Product(product);
    const result = await f.validation(product);

    if (result) {
        console.log(result)
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify(result),
    };
};
