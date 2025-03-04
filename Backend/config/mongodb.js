import mongoose from "mongoose";

const connectDB = async () => {
  // Listen for the 'connected' event on the mongoose.connection object
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });

  // Connect to the MongoDB database
  await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`);
};

export default connectDB;