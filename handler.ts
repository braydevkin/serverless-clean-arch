import { APIGatewayProxyEvent } from 'aws-lambda';
import { ProductAdapter } from '././src/adapter/product.adapter';
import { MongoHelper } from '././src/repositories/database/mongodb/helper';
import { MONGO_URI } from './configs/constants';

export const hello = async (event: APIGatewayProxyEvent) => {
    const connected = await MongoHelper.connect(MONGO_URI as string);

    if (connected) {
        return new ProductAdapter(event).create();
    }

    return false;
};
