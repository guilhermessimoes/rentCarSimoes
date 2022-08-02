export class Specification {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = '135a54sa6s5a8s4asa';
      this.created_at = new Date();
    }
  }
}
