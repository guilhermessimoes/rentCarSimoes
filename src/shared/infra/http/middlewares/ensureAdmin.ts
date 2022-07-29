import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '../../../../repositories/implementations/UsersRepository';
import { AppError } from '../../../errors/AppError';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  console.log(request.user);

  const { id } = request.user;

  console.log(id);

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findByID(id);

  if (!user.admin) {
    throw new AppError("User isn't admin");
  }

  return next();
}
