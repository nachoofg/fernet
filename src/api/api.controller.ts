import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiDto } from './dto/api.dto';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('/:username')
  async getUser(@Param('username') user: string) {
    return await this.apiService.getUser(user).catch((err) => {
      return err;
    });
  }
  @Get()
  async getAllUsers() {
    return await this.apiService.getUsers().catch((err) => {
      return err;
    });
  }

  @Post()
  async createUser(@Body() body: ApiDto) {
    return await this.apiService.createUser(body).catch((err) => {
      return err;
    });
  }

  @Delete('/:username')
  async deleteUser(@Param('username') user: string) {
    return await this.apiService.removeUser(user).catch((err) => {
      return err;
    });
  }

  @Patch('/:username')
  updateUser(@Param('username') user: string, @Body() res: string) {}
}
