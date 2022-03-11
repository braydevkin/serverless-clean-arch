import { Collection, MongoClient } from 'mongodb';
import { DatabaseRepository } from 'shared/repositories/database';

export interface Repositories<T> {
    mongo: {
        client: MongoClient;
        collection: Collection;
        actions: DatabaseRepository<T>;
    };
}
