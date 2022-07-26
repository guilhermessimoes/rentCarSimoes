import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../shared/errors/AppError';

interface IRequest {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({
    name,
    email,
    password,
    driver_license,
  }: IRequest): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByUserEmail(
      email,
    );
    if (emailAlreadyExists) {
      throw new AppError('Email already exists');
    }

    const passwordHash = await hash(password, 8);

    this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}
