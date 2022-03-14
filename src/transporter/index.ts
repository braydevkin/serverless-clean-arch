import { Left, Right } from '../shared/interfaces/transporter.interface';

export const transporteToRight = async ({
    value,
    message,
    statusCode,
    hasError = false,
}: Right & Left): Promise<Right & Left> => {
    return {
        value,
        message,
        statusCode,
        hasError,
    };
};
export const transporteToLeft = async ({ value, message, statusCode, hasError = true }: Left): Promise<Left> => {
    return {
        message,
        statusCode,
        value,
        hasError,
    };
};
