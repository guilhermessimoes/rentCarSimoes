import { User } from '@prisma/client';

import { ICreateUserDataDTO } from '../dtos/ICreateUserDataDTO';

export interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDataDTO): Promise<void>;
  findByUserEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
