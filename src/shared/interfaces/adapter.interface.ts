import { Repositories } from './reposities.inteface';

export interface Adapter<T> {
    repository: Repositories<T>;
}
