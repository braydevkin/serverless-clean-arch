import { IProductData } from "../entities/product/product.data";
import { RegisterProductRepository } from "../useCases/register-product-in-database/register-product";


export class ProductController {
    private readonly repository: RegisterProductRepository;
    constructor(repository: RegisterProductRepository) {
        this.repository = repository;
    }

    async create(data: IProductData): Promise<IProductData> {
        const result = await this.repository.create(data);
        if (result) return result;
        throw new Error('Erro to create product in the database');
    }
}
