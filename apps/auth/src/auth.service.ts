import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<any> {
    return this.userRepository.find();
  }

  async postUser() {
    return this.userRepository.save({ name: 'Maaz' });
  }
}
