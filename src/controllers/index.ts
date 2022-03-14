
import { IProductData } from '../entities/product/product.data';
import { MongoDbRepository } from '../repositories/database/mongodb/mongodb.repository';
import { RegisterProductRepository } from '../useCases/register-product-in-database/register-product';
import { ProductController } from './product.controller';

export const makeProductController = () => {
    const mongoRepository = new MongoDbRepository<IProductData>('product');
    const registerProductRepository = new RegisterProductRepository(mongoRepository);
    const productController = new ProductController(registerProductRepository);
    return productController
};
