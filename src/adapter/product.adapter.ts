import { APIGatewayProxyEvent } from 'aws-lambda';
import { makeProductController } from '../controllers';
import { IProductData } from '../entities/product/product.data';

export class ProductAdapter {
    static create(data: IProductData): Promise<IProductData> {
        return makeProductController().create(JSON.parse(data as any));
    }
}
