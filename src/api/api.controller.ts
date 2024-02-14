import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiService } from './api.service'
import { ApiDto } from './dto/api.dto';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) { }

  @Get(':username')
  async getUser(@Param() user: string) {
    return await this.apiService.getUser(user).catch(() => { return })
  }
  @Get()
  async getAllUsers() {
    return await this.apiService.getUsers().catch(() => { return })
  }

  @Post()
  async createUser(@Body() response: ApiDto) {
    this.apiService.createUser(response).catch(() => { return })
  }

  @Delete(':username')
  deleteUser(@Param('username') req: string) { }

  @Patch(':username')
  updateUser(@Param('username') req: string, @Body() res: string) { }

}
