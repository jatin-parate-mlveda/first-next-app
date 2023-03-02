import mongoose, { Document, Schema } from "mongoose";

export interface IApps {
  _id: string;
  name: string;
  handle: string;
}

export type AppsDocument = IApps & Document<string, {}, IApps>;

const appsSchema = new Schema<IApps>(
  {
    handle: String,
    name: String,
  },
  {
    versionKey: false,
    toObject: {
      transform: (doc, ret) => {
        ret._id = ret._id.toString();
        return ret;
      },
    },
    toJSON: {
      transform: (doc, ret) => {
        ret._id = ret._id.toString();
        return ret;
      },
    },
  }
);

const Apps =
  mongoose.models.Apps || mongoose.model<AppsDocument>("Apps", appsSchema);

export default Apps;
