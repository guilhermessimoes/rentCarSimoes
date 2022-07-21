import { User } from '@prisma/client';

import { prisma } from '../../database/prismaClient';
import { ICreateUserDataDTO } from '../../dtos/ICreateUserDataDTO';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDataDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        password,
        email,
        driver_license,
      },
    });
  }
  async findByUserEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique(id);

    return user;
  }
}
