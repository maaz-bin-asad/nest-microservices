import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AppController {
  constructor(
    @Inject('AUTH_MICROSERVICE') private authMicroservice: ClientProxy,
  ) {}

  @Get()
  getUsers() {
    return this.authMicroservice.send(
      {
        cmd: 'get-users',
      },
      {},
    );
  }

  @Post()
  postUser() {
    return this.authMicroservice.send(
      {
        cmd: 'post-user',
      },
      {},
    );
  }
}
