import { Left, Right } from 'shared/interfaces/transporter.interface';

export const transporteToRight = async ({ value, message, statusCode }: Right & Left): Promise<Right & Left> => {
    return {
        value,
        message,
        statusCode,
    };
};
export const transporteToLeft = async ({ value, message, statusCode }: Left): Promise<Left> => {
    return {
        message,
        statusCode,
        value,
    };
};
