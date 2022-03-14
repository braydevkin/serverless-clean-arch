import { MongoClient, Collection } from 'mongodb';

export const MongoHelper = {
    client: null as unknown as MongoClient,
    async connect(uri: string): Promise<MongoClient> {
        this.client = new MongoClient(uri);
        const connect = await this.client.connect();
        await this.client.db('product').command({ ping: 1 });
        if (connect) return connect;
        throw new Error('Dont possible to connect database');
    },
    async disconnect(): Promise<void> {
        this.client.close();
    },
    getCollection(name: string): Collection {
        return this.client.db('product').collection(name);
    },
    clearCollection(name: string): void {
        this.client.db().collection(name).deleteMany({});
    },
};
