import { v4 as uuidV4 } from 'uuid';

import { prisma } from '../database/prismaClient';

export class Category {
  id?: string;

  name: string;

  description: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
