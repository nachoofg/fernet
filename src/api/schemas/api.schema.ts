import { Schema } from "mongoose";
import { v4 } from "uuid";

export const ApiSchema = new Schema({
    Username: {
        required: true,
        type: String
    },
    Password: {
        required: true,
        type: String
    },
    CreatedAt: {
        default: new Date(),
        type: Date
    },
    Uuid: {
        default: v4(),
        type: String
    },
    Uploaded: {
        default: 0,
        type: Number
    },
    LastUploaded: {
        default: null,
        type: Date
    },
})