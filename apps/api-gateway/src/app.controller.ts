import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_MICROSERVICE') private authMicroservice: ClientProxy,
  ) {}

  @Get()
  getUser() {
    return this.authMicroservice.send(
      {
        cmd: 'get-user',
      },
      {},
    );
  }
}
