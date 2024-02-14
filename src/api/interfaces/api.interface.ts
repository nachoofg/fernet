import { Document } from 'mongoose';

export interface ApiInterface extends Document {
  readonly username: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly uuid: string;
  readonly uploaded: number;
  readonly lastUploaded: Date;
}
