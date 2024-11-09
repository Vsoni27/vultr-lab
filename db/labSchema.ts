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
  limits: number[];
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
  limits: [Number],
});

export const Step = mongoose.model("Step", stepSchema);

export const Lab = mongoose.model("Lab", labSchema);
