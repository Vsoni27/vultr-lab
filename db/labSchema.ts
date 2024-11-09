import mongoose, { Document, Model, Schema } from "mongoose";

export interface IStep extends Document {
  title: string;
  description: string;
  isDone: boolean;
}

const stepSchema: Schema<IStep> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

export interface ILab extends Document {
  id: number;
  name: String;
  isActive: boolean;
  steps: IStep[];
}

const labSchema: Schema<ILab> = new Schema({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Number,
  },
  name: String,
  isActive: Boolean,
  steps: [stepSchema],
});

export const Step: Model<IStep> =
  mongoose.models.Step || mongoose.model<IStep>("Step", stepSchema);

export const Lab: Model<ILab> =
  mongoose.models.User || mongoose.model<ILab>("Lab", labSchema);
