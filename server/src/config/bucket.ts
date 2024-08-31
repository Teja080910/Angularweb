import { GridFSBucket, MongoClient } from 'mongodb';
import { DB_URL } from './config';

export const Bucket = {
    bucket: async () => {
        const client = new MongoClient(DB_URL);
        await client.connect();
        const db = client.db('Portfolio');
        const bucket = new GridFSBucket(db, { bucketName: 'uploads' });
        return bucket
    }
}