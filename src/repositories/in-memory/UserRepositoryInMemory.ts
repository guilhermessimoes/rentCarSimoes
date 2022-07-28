import { ICreateUserDataDTO } from '../../dtos/ICreateUserDataDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDataDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      password,
      email,
      driver_license,
    });

    this.users.push(user);
  }
  async findByUserEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }
  async findByID(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }
}
