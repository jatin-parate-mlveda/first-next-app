import mongoose, { Schema, model, Document } from "mongoose";

export interface IRandomData {
  number: Number;
  _id: string;
}

type DocType = Document & IRandomData;

const RandomDataSchema = new Schema<DocType>({
  number: Number,
}, {
  versionKey: false,
  toJSON: {
    transform: (doc, ret) => {
      ret._id = ret._id.toString();
      return ret;
    }
  }
});

const RandomData =
  mongoose.models.RandomData ||
  model<typeof RandomDataSchema>("RandomData", RandomDataSchema);

export default RandomData;
