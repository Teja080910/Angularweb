import mongoose from 'mongoose';

const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI, { dbName: 'Portfolio' });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

export default connectDB;