import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ApiInterface } from './interfaces/api.interface';
import { ApiDto } from './dto/api.dto';

@Injectable()
export class ApiService {
  constructor(
    @InjectModel('Api') private readonly ApiModel: Model<ApiInterface>,
  ) {}
  async getUsers(): Promise<ApiInterface[]> {
    return this.ApiModel.find({});
  }
  async getUser(username: string): Promise<ApiInterface[]> {
    return this.ApiModel.findOne({ username: username });
  }
  async createUser(body: ApiDto): Promise<ApiInterface> {
    return new this.ApiModel(body).save();
  }
  async updateUser(username, toUpdate: ApiDto): Promise<ApiInterface> {
    return this.ApiModel.findOneAndUpdate({ username: username }, toUpdate, {
      new: true,
    });
  }
  async removeUser(username: string): Promise<ApiInterface> {
    return this.ApiModel.findOneAndDelete({ username: username });
  }
}
