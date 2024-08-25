import { GridFSBucket, MongoClient } from 'mongodb';
import { DB_URL } from '../../../src/config/config';

export const UploadFile = {
    UploadPhoto: async (file: any, gridFSBucket: GridFSBucket) => {
        try {
            const client = new MongoClient(DB_URL);
            await client.connect();
            const db = client.db('Portfolio');
            const gridFSBucket = new GridFSBucket(db, { bucketName: 'uploads' });
            const { originalname, buffer } = file[0];

            const uploadStream = gridFSBucket.openUploadStream(originalname);
            uploadStream.end(buffer)

            uploadStream.on('finish', () => {
                console.log('File uploaded successfully');
            });

            uploadStream.on('error', (error) => {
                console.error('Upload error:', error);
            });
        } catch (error) {

        }
    }
};
