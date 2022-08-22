import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UseCase } from 'src/core/base/use-case';
import { UserCreatedMapper } from 'src/core/domain/mappers/user-creted.mapper';
import { UserRepository } from 'src/core/repositories/user.repository';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';

@Injectable()
export class GetAllUsersUseCase implements UseCase<UserCreatedDto[]> {
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreatedMapper = new UserCreatedMapper();
  }

  execute(...args: any[]): Observable<UserCreatedDto[]> {
    throw new Error('Method not implemented.');
  }
}
