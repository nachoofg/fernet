import { Document } from "mongoose";

export interface ApiInterface extends Document {
    readonly Username: string;
    readonly Password: string;
    readonly CreatedAt: Date;
    readonly Uuid: string;
    readonly Uploaded: number;
    readonly LastUploaded: Date;
}