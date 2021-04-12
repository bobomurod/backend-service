import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
  @Get('/users')
  getUsers() {
    return [
      {userId: 'some id', name: 'some name'},
    ]
  }
}
