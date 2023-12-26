import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(databaseURI);
    console.log(`connected to mongodb atlas database`);
  } catch (error) {
    console.log(`Failed to connect to mongodb atlas database ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
