import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  helloworld() {
    return 'hello world';
  }
}
