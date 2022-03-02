import { ProductSchema } from '../../schemas/Product';
import { IEntity } from '../../shared/interfaces/entity.interface';
import { IProductData } from './product.data';

import { Validate } from 'joi-typescript-validator';

export class Product implements IEntity<IProductData> {
    private readonly productData!: IProductData;
    constructor(product: IProductData) {
        product = this.productData;
    }

    async validation(data: IProductData): Promise<IProductData> {
        const valid = Validate(ProductSchema, {
            name: data.name,
            descrption: data.descrption,
            price: data.price,
            createdAt: data.createdAt,
        });
        if (!valid.error) {
            return data;
        }
        throw Error(valid.error.message);
    }
}
