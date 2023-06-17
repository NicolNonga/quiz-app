import { uuid as uuidV4 } from "uuidv4";

export class clientModel {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  adress: string;
  responsible: string;
  obs: string;
  created_at: Date;
  nif: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}
