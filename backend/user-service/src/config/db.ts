import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
