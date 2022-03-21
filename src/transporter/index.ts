import { Left, Right } from '../shared/interfaces/transporter.interface';

export const transporterToRight = async ({
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
export const transporterToLeft = async ({ value, message, statusCode, hasError = true }: Left): Promise<Left> => {
    return {
        message,
        statusCode,
        value,
        hasError,
    };
};
