import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../../../../repositories/implementations/UsersRepository';
import { AppError } from '../../../errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }
  // Bearer
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '43f5e9544bf9c8d1028ca5b417f8b4c5',
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findByID(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }
    request.user = {
      id: user_id,
    };
    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
}
