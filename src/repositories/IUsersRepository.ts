import { User } from '@prisma/client';

import { ICreateUserDataDTO } from '../dtos/ICreateUserDataDTO';

export interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_license,
    avatar,
  }: ICreateUserDataDTO): Promise<void>;
  findByUserEmail(email: string): Promise<User>;
  findByID(id: string): Promise<User>;
  update(avatar): Promise<void>;
}
