import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers() {
    return [
      {
        userId: 'some user id',
        name: 'name of the user',
      },
    ];
  }
}
