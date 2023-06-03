import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "share_prompt",
    });
    isConnected = true;
  } catch (e) {
    console.log(11111111111111)
    console.log(e);
  }
};
