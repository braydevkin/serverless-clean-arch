import { ProductSchema } from '../../schemas/Product';
import { IEntity } from '../../shared/interfaces/entity.interface';
import { IProductData } from './product.data';
import { transporterToLeft, transporterToRight } from '../../transporter';
import { Left, Right } from '../../shared/interfaces/transporter.interface';

export class Product implements IEntity<IProductData> {
    private readonly productData: IProductData;

    constructor(product: IProductData) {
        this.productData = product;
    }

    static async Validate(data: IProductData): Promise<boolean> {
        if (data.price < 0) return false;
        return true;
    }

    async create(data: IProductData = this.productData): Promise<Left & Right> {
        if (await Product.Validate(data)) {
            return await transporterToRight({
                value: data,
                message: 'Transporting product data',
                statusCode: 200,
                hasError: false,
            });
        }

        return await transporterToLeft({
            statusCode: 404,
            message: 'Product entity error',
            value: data,
            hasError: true,
        });
    }
}
