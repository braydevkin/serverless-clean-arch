export interface IError<Q, D, H> {
    statusCode: number;
    body: {
        message: string;
        query: Q;
        data: D;
        headers: H;
    };
}

export interface ISuccess<D> {
    statusCode: number;
    body: {
        message: string;
        result: D;
    };
}

export interface IResponse<Q, D, H> {
    handleError: (E: IError<Q, D, H>) => Promise<void>;
    handleSuccess: (S: ISuccess<D>) => Promise<void>;
}
