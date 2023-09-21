import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        console.log("Mongo DB is already connected");
        return;
    }
    try {
        // @ts-ignore
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "fashionProject",
            useUnifiedTopology: true,
        });
        isConnected = true
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};