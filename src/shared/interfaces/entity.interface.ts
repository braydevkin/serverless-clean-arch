import { Left, Right } from './transporter.interface';

export interface IEntity<T> {
    validation: (data: T) => Promise<Left | Right>;
}
