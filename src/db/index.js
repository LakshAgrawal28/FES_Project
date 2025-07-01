import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // console.log("DB URI:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
