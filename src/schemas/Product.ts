import { IProductData } from '../entities/product/product.data';
import { Required } from 'joi-typescript-validator';

export class ProductSchema implements IProductData {
    @Required()
    public name!: string;

    @Required()
    public descrption!: string;

    @Required()
    public price!: string;

    @Required()
    public createdAt!: Date;
}
