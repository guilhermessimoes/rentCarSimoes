export class Car {
  id: string;
  name: string;
  description: string;
  daily_rate: number;
  available: boolean;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = '135a54sa6s5a8s4asa';
      this.available = true;
      this.created_at = new Date();
    }
  }
}
