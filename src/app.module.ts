import { Module } from '@nestjs/common';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/inmemory/users.inmemory.repository';
import { UsersControlers } from './presentation/user.controller';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { GetAllUsersUseCase } from './use-cases/get-all-users.usecase';

@Module({
  imports: [],
  controllers: [UsersControlers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class AppModule {}
