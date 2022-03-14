import { ProductSchema } from '../../schemas/Product';
import { IEntity } from '../../shared/interfaces/entity.interface';
import { IProductData } from './product.data';
import { Validate } from 'joi-typescript-validator';
import { transporteToLeft, transporteToRight } from '../../transporter';
import { Left, Right } from '../../shared/interfaces/transporter.interface';

export class Product implements IEntity<IProductData> {
    private readonly productData!: IProductData;

    constructor(product: IProductData) {
        product = this.productData;
    }

    async validation(data: IProductData = this.productData): Promise<Left & Right> {
        const valid = Validate(ProductSchema, data);

        if (!valid.error) {
            return await transporteToRight({
                value: data,
                message: 'Transporting product data',
                statusCode: 200,
                hasError: false,
            });
        }

        return await transporteToLeft({
            statusCode: 404,
            message: valid.error.message,
            value: data,
            hasError: true,
        });
    }
}
