import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'get-users' })
  async getUsers(@Ctx() _context: RmqContext) {
    //const channel = context.getChannelRef();
    //const message = context.getMessage();
    return this.authService.getUsers();
  }

  @MessagePattern({ cmd: 'post-user' })
  async pistUser(@Ctx() _context: RmqContext) {
    return this.authService.postUser();
  }
}
