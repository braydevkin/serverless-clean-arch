import { IProductData } from '../entities/product/product.data';
import { Email, MaxLength, Optional, Required } from 'joi-typescript-validator';

export class ProductSchema implements IProductData {
    @Required()
    public name!: string;

    @Required()
    public description!: string;

    @Required()
    public price!: number;

    @Optional()
    public createdAt!: Date;
}
