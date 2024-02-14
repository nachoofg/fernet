import { Schema } from 'mongoose';
import { v4 } from 'uuid';

export const ApiSchema = new Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  createdAt: {
    default: new Date(),
    type: Date,
  },
  uuid: {
    default: v4(),
    type: String,
  },
  uploaded: {
    default: 0,
    type: Number,
  },
  lastUploaded: {
    default: null,
    type: Date,
  },
});
