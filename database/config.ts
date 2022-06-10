import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN!);
    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error when starting database");
  }
};
