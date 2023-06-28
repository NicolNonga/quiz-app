 interface ICrypt{
    crypt(value: string, salt: number):Promise<string>
    compare(hashValue: string, planText: string)
}

export {ICrypt}