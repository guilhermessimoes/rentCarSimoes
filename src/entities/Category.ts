export class Category {
  public id?: string;
  public createdAt: Date;
  public description: string;
  public name: string;

  constructor(category: {
    id?: string;
    createdAt: Date;
    description: string;
    name: string;
  }) {
    this.id = category.id;
    this.createdAt = category.createdAt;
    this.description = category.description;
    this.name = category.name;
  }
}
