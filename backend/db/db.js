import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    await mongoose.connect(dbUrl, {});

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToMongoDB;
