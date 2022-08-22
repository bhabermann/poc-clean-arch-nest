import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/repositories/user.repository';
import { RepositoryCacheMemory } from './repository.inmemory';

@Injectable()
export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<UserEntity>
  implements UserRepository {}
