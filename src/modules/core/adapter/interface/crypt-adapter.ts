 interface ICrypt{
    crypt(value: string, salt: number):Promise<string>
    compare(firstValue: string, secondValue: string)
}

export {ICrypt}