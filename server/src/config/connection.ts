import mongoose from 'mongoose';

const connectDB = async (URI:string) => {
  try {
    await mongoose.connect(URI) 
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
