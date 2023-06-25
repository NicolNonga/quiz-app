import { ICrypt } from "../interface/crypt-adapter";
import bcrypt from 'bcrypt'

export class  HashPassword implements ICrypt{
 
  public async   crypt(value: string, salt: number): Promise<string> {
     
     return  await  bcrypt.hash(value, salt)
    }
    
}