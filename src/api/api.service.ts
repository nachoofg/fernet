import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from "@nestjs/mongoose"
import { ApiInterface } from './interfaces/api.interface';
import { ApiDto } from './dto/api.dto';

@Injectable()
export class ApiService {
    constructor(@InjectModel('Api') private readonly ApiModel: Model<ApiInterface>) { }
    async getUsers(): Promise<ApiInterface[]> {
        return await this.ApiModel.find({})
    }
    async getUser(username: string): Promise<ApiInterface> {
        return await this.ApiModel.findOne({ Username: username })
    }
    async createUser(body: ApiDto): Promise<ApiInterface> {
        return await new this.ApiModel(body).save()
    }
    async updateUser(username, toUpdate: ApiDto): Promise<ApiInterface> {
        return await this.ApiModel.findOneAndUpdate({ Username: username }, toUpdate, { new: true })
    }
    async removeUser(username: string): Promise<ApiInterface> {
        return await this.ApiModel.findOneAndDelete({ Username: username })
    }

}
