import mongoose, { ConnectionStates } from "mongoose";

export default async function mongoConnect() {
  if (mongoose.connection.readyState !== ConnectionStates.connected)
    await mongoose.connect(process.env.DB_URL as string);
}
