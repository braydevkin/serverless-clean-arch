import { IError, IResponse, ISuccess } from 'shared/interfaces/response.interface';

export class ResponseHandler<Q, D, H> implements IResponse<Q, D, H> {
    private readonly error: IError<Q, D, H> | undefined;
    private readonly success: ISuccess<D> | undefined;

    constructor(error: IError<Q, D, H> | undefined, success: ISuccess<D> | undefined) {
        error = this.error;
        success = this.success;
    }

    async handleError(E: IError<Q, D, H>): Promise<IError<Q, D, H>> {
        return {
            statusCode: E.statusCode,
            body: {
                message: E.body.message,
                data: E.body.data,
                headers: E.body.headers,
                query: E.body.query,
            },
        };
    }
    async handleSuccess(S: ISuccess<D>): Promise<void> {}
}
