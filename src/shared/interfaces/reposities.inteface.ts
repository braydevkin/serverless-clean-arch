import { Collection, MongoClient } from 'mongodb';
import { DatabaseRepository } from '../../shared/repositories/database';

export interface Repositories<T> {
    mongo: DatabaseRepository<T>;
}
