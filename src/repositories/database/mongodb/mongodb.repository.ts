import { DatabaseRepository } from '../../../shared/repositories/database';
import { MongoHelper } from './helper';

export class MongoDbRepository<T> implements DatabaseRepository<T> {
    private readonly collection: string;
    constructor(collection: string) {
        this.collection = collection;
    }
    async create(data: T): Promise<T> {
        const created = MongoHelper.getCollection(this.collection).insertOne(data);
        return created as unknown as T;
    }
}
