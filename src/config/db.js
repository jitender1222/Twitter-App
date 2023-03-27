import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://jitender:sujeet2212@cluster0.fs5co92.mongodb.net/test"
  );
};
