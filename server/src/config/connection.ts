import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';

const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI, { dbName: 'Portfolio' });
    const db = mongoose.connection.db;
    const gridFSBucket = new GridFSBucket(db, { bucketName: 'uploads' });
    console.log('Database connected and GridFSBucket initialized');
    return gridFSBucket;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

export default connectDB;