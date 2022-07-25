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
    id,
    avatar,
  }: ICreateUserDataDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        password,
        email,
        driver_license,
        avatar,
        id,
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

  async findByID(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update({ id, avatar }: ICreateUserDataDTO): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: {
        avatar,
      },
    });
  }
}
