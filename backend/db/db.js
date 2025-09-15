import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const MONGOURL = process.env.MONGODB_URI;
    mongoose.connect(MONGOURL).then(() => {
      console.log("DB Connected Successfully.");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB ", error.message);
  }
};

export default connectToMongoDB;
