import { APIGatewayProxyEvent } from 'aws-lambda';
import { makeProductController } from '../controllers';
import { IProductData } from '../entities/product/product.data';

export class ProductAdapter {
    private readonly makeProductController;
    public readonly event: APIGatewayProxyEvent;

    constructor(event: APIGatewayProxyEvent) {
        this.makeProductController = makeProductController();
        this.event = event;
    }

    create(data: IProductData = this.event.body as any): Promise<IProductData> {
        return this.makeProductController.create(JSON.parse(data as any));
    }
}
