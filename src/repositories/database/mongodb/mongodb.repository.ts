import { DatabaseRepository } from 'shared/repositories/database';

export class MongoDbRepository<T> implements DatabaseRepository<T> {
    async create(data: T): Promise<T> {
        return data;
    }
}
