import { IProductData } from 'entities/product/product.data';
import { Adapter } from 'shared/interfaces/adapter.interface';
import { RegisterProductRepository } from 'useCases/register-product-in-database/register-product';

export class ProductController {
    public readonly repository!: RegisterProductRepository;
    constructor(inject: Adapter<IProductData>) {
        this.repository = new RegisterProductRepository(inject.repository.mongo.actions);
    }

    async create(data: IProductData): Promise<IProductData> {
        const result = await this.repository.create(data);
        return result;
    }
}
