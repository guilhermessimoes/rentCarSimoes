import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailableUseCase } from './ListAvailableUseCase';

export class ListAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.query;

    const listAvailableUseCase = container.resolve(ListAvailableUseCase);

    const cars = await listAvailableUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return response.json(cars);
  }
}
