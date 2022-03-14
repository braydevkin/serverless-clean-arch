import { Product } from "../../entities/product/product";
import { IProductData } from "../../entities/product/product.data";
import { DatabaseRepository } from "../../shared/repositories/database";


export class RegisterProductRepository implements DatabaseRepository<IProductData> {
    public readonly repository: DatabaseRepository<IProductData>;

    constructor(repository: DatabaseRepository<IProductData>) {
        this.repository = repository;
    }

    async create(data: IProductData): Promise<IProductData> {
        const productValidation = await new Product(data).validation();

        if (productValidation.statusCode !== 200) {
            throw new Error(`Not possible create product in the repository`);
        }

        return await this.repository.create(data);
    }
}
