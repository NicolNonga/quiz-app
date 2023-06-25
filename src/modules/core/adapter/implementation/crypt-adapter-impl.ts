import { ICrypt } from "../interface/crypt-adapter";
import bcrypt from 'bcrypt'

export class  HashAdapter implements ICrypt{
 public async   compare(firstValue: string, secondValue: string) {

    return await bcrypt.compare(firstValue, secondValue)
  }
 
  public async   crypt(value: string, salt: number): Promise<string> {
     
     return  await  bcrypt.hash(value, salt)
    }
    
}