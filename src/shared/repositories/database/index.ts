export interface DatabaseRepository<T> {
    create: (data: T) => Promise<T>;
    findOne?: (filter: T) => Promise<T>;
    findAll?: (filters: T) => Promise<T>;
    update?: (id: T) => Promise<T>;
    delete?: (id: T) => Promise<boolean>;
}
