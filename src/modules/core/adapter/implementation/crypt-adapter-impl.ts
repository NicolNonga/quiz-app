import { ICrypt } from "../interface/crypt-adapter";
import bcrypt from 'bcrypt'

export class  HashAdapter implements ICrypt{
 public async   compare(hashValue: string, planText: string) {

    return await bcrypt.compare(hashValue, planText)
  }
 
  public async   crypt(value: string, salt: number): Promise<string> {
     
     return  await  bcrypt.hash(value, salt)
    }
    
}