import { IError, IResponse, ISuccess } from 'shared/interfaces/response.interface';

export class Response<Q, D, H> implements IResponse<Q, D, H> {
    private readonly error: IError<Q, D, H> | undefined;
    private readonly success: ISuccess<D> | undefined;

    constructor(error: IError<Q, D, H> | undefined, success: ISuccess<D> | undefined) {
        error = this.error;
        success = this.success;
    }

    async handleError(E: IError<Q, D, H>): Promise<void> {}
    async handleSuccess(S: ISuccess<D>): Promise<void> {}
}
