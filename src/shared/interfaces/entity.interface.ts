import { Left, Right } from './transporter.interface';

export interface IEntity<T> {
    create: (data: T) => Promise<Left | Right>;
}
