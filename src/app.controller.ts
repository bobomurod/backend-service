import { Controller, Get } from '@nestjs/common';
import { AppService } from "./app.service";

@Controller('/api')
export class AppController {

  constructor(private appService: AppService) {
  }

  @Get('/users')
  getUsers() {
    return [
      {userId: 'some id', name: 'some name'},
    ]
  }
}
