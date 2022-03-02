export interface IEntity<T> {
    validation: (data: T) => Promise<T>;
}
