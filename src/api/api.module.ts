import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiSchema } from './schemas/api.schema';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Api', schema: ApiSchema }]),
    MongooseModule.forRoot(process.env.MONGOk, {}),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
